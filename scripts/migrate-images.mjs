#!/usr/bin/env node

/**
 * 이미지 중앙화 마이그레이션 스크립트
 *
 * blog/, docs/ 이미지를 static/img/ 로 이동하고,
 * blog/, docs/, i18n/en/ 내 참조를 업데이트합니다.
 */

import { readdir, stat, mkdir, rename, readFile, writeFile, rm } from "fs/promises";
import { join, dirname, extname, relative, resolve } from "path";

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]);
const ROOT = process.cwd();

// ── 유틸 ──

async function isDir(p) {
  try { return (await stat(p)).isDirectory(); } catch { return false; }
}

async function isFile(p) {
  try { return (await stat(p)).isFile(); } catch { return false; }
}

async function findFiles(dir, test) {
  const results = [];
  try {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) results.push(...(await findFiles(full, test)));
      else if (test(entry.name)) results.push(full);
    }
  } catch { /* skip */ }
  return results;
}

async function mkdirSafe(dir) {
  await mkdir(dir, { recursive: true });
}

// ── blog 마이그레이션 ──

async function migrateBlog() {
  const blogDir = join(ROOT, "blog");
  const entries = await readdir(blogDir, { withFileTypes: true });
  const postDirs = entries.filter(e => e.isDirectory()).map(e => e.name);

  for (const postDir of postDirs) {
    const postPath = join(blogDir, postDir);
    const images = await findFiles(postPath, name => IMAGE_EXTS.has(extname(name).toLowerCase()));
    if (images.length === 0) continue;

    // 이미지를 static/img/blog/{postDir}/ 로 이동
    for (const imgPath of images) {
      const relFromPost = relative(postPath, imgPath);
      const targetPath = join(ROOT, "static", "img", "blog", postDir, relFromPost);
      await mkdirSafe(dirname(targetPath));
      await rename(imgPath, targetPath);
      console.log(`  moved: blog/${postDir}/${relFromPost} → static/img/blog/${postDir}/${relFromPost}`);
    }

    // MD/MDX 파일 참조 업데이트
    const contentFiles = await findFiles(postPath, name => /\.(md|mdx)$/.test(name));
    for (const contentFile of contentFiles) {
      await updateBlogReferences(contentFile, postDir);
    }

    // i18n/en 대응 파일 처리
    const i18nPostPath = join(ROOT, "i18n", "en", "docusaurus-plugin-content-blog", postDir);
    if (await isDir(i18nPostPath)) {
      // i18n 이미지 삭제
      const i18nImages = await findFiles(i18nPostPath, name => IMAGE_EXTS.has(extname(name).toLowerCase()));
      for (const img of i18nImages) {
        await rm(img);
        console.log(`  deleted: ${relative(ROOT, img)}`);
      }
      // 빈 서브디렉토리 정리
      await cleanEmptyDirs(i18nPostPath);

      // i18n MD/MDX 참조 업데이트
      const i18nContentFiles = await findFiles(i18nPostPath, name => /\.(md|mdx)$/.test(name));
      for (const contentFile of i18nContentFiles) {
        await updateBlogReferences(contentFile, postDir);
      }
    }
  }
}

async function updateBlogReferences(filePath, postDir) {
  let content = await readFile(filePath, "utf-8");
  const original = content;

  // 패턴 1: import xxx from "./path/to/image.ext"  또는  './path/to/image.ext'
  content = content.replace(
    /import\s+(\w+)\s+from\s+['"]\.\/([^'"]+\.(png|jpg|jpeg|gif|webp|svg))['"]/gi,
    (match, varName, imgPath) => {
      return `import ${varName} from "@site/static/img/blog/${postDir}/${imgPath}"`;
    }
  );

  // 패턴 2: ![alt](./path/to/image.ext)
  content = content.replace(
    /!\[([^\]]*)\]\(\.\/([^)]+\.(png|jpg|jpeg|gif|webp|svg))\)/gi,
    (match, alt, imgPath) => {
      return `![${alt}](/img/blog/${postDir}/${imgPath})`;
    }
  );

  if (content !== original) {
    await writeFile(filePath, content, "utf-8");
    console.log(`  updated refs: ${relative(ROOT, filePath)}`);
  }
}

// ── docs 마이그레이션 ──

async function migrateDocs() {
  const docsDir = join(ROOT, "docs");
  const contentFiles = await findFiles(docsDir, name => /\.(md|mdx)$/.test(name));

  for (const contentFile of contentFiles) {
    const contentDir = dirname(contentFile);
    const relDir = relative(docsDir, contentDir); // e.g. "wiki/linux"

    let content = await readFile(contentFile, "utf-8");
    const original = content;

    // 마크다운 이미지 참조 찾기: ![alt](./path/to/image.ext)
    const mdImagePattern = /!\[([^\]]*)\]\(\.\/([^)]+\.(png|jpg|jpeg|gif|webp|svg))\)/gi;
    let mdMatch;
    const imagesToMove = [];

    while ((mdMatch = mdImagePattern.exec(original)) !== null) {
      imagesToMove.push(mdMatch[2]);
    }

    // import 패턴 찾기
    const importPattern = /import\s+(\w+)\s+from\s+['"]\.\/([^'"]+\.(png|jpg|jpeg|gif|webp|svg))['"]/gi;
    let importMatch;
    while ((importMatch = importPattern.exec(original)) !== null) {
      imagesToMove.push(importMatch[2]);
    }

    if (imagesToMove.length === 0) continue;

    // 이미지 파일 이동
    for (const imgRelPath of [...new Set(imagesToMove)]) {
      const imgAbsPath = join(contentDir, imgRelPath);
      if (!(await isFile(imgAbsPath))) continue;
      const targetPath = join(ROOT, "static", "img", "docs", relDir, imgRelPath);
      await mkdirSafe(dirname(targetPath));
      await rename(imgAbsPath, targetPath);
      console.log(`  moved: docs/${relDir}/${imgRelPath} → static/img/docs/${relDir}/${imgRelPath}`);
    }

    // 참조 업데이트
    content = content.replace(
      /!\[([^\]]*)\]\(\.\/([^)]+\.(png|jpg|jpeg|gif|webp|svg))\)/gi,
      (match, alt, imgPath) => `![${alt}](/img/docs/${relDir}/${imgPath})`
    );

    content = content.replace(
      /import\s+(\w+)\s+from\s+['"]\.\/([^'"]+\.(png|jpg|jpeg|gif|webp|svg))['"]/gi,
      (match, varName, imgPath) => `import ${varName} from "@site/static/img/docs/${relDir}/${imgPath}"`
    );

    if (content !== original) {
      await writeFile(contentFile, content, "utf-8");
      console.log(`  updated refs: ${relative(ROOT, contentFile)}`);
    }

    // 빈 서브디렉토리 정리
    await cleanEmptyDirs(contentDir);
  }
}

// ── 빈 디렉토리 정리 ──

async function cleanEmptyDirs(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subDir = join(dir, entry.name);
        await cleanEmptyDirs(subDir);
        const subEntries = await readdir(subDir);
        if (subEntries.length === 0) {
          await rm(subDir, { recursive: true });
        }
      }
    }
  } catch { /* skip */ }
}

// ── main ──

async function main() {
  console.log("=== Blog 이미지 마이그레이션 ===\n");
  await migrateBlog();

  console.log("\n=== Docs 이미지 마이그레이션 ===\n");
  await migrateDocs();

  console.log("\n✅ 마이그레이션 완료");
  console.log("다음 단계: yarn clear && yarn build 로 빌드 검증");
}

main().catch(err => {
  console.error("❌ 에러:", err);
  process.exit(1);
});
