#!/usr/bin/env node

/**
 * 이미지 최적화 스크립트
 * - PNG/JPG/JPEG 파일을 최대 1200px 너비로 리사이징
 * - PNG → WebP 변환 (원본 유지, WebP 사본 생성하지 않고 PNG 자체를 최적화)
 * - JPG/JPEG 품질 80으로 압축
 *
 * 사용법: node scripts/optimize-images.mjs
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

const MAX_WIDTH = 1200;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const DIRS = ["static"];
const EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

async function getImageFiles(dir) {
  const files = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".git" && entry.name !== "build") {
        files.push(...(await getImageFiles(fullPath)));
      } else if (entry.isFile() && EXTENSIONS.has(extname(entry.name).toLowerCase())) {
        files.push(fullPath);
      }
    }
  } catch {
    // skip inaccessible directories
  }
  return files;
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const image = sharp(filePath);
  const metadata = await image.metadata();

  if (!metadata.width) return;

  const needsResize = metadata.width > MAX_WIDTH;
  let pipeline = sharp(filePath);

  if (needsResize) {
    pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
  }

  if (ext === ".png") {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();
  const originalSize = (await stat(filePath)).size;

  if (buffer.length < originalSize) {
    const { default: fs } = await import("fs/promises");
    await fs.writeFile(filePath, buffer);
    const saved = ((1 - buffer.length / originalSize) * 100).toFixed(1);
    console.log(`✓ ${filePath} — ${formatSize(originalSize)} → ${formatSize(buffer.length)} (${saved}% 절감)`);
  } else {
    console.log(`- ${filePath} — 이미 최적화됨`);
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}K`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

async function main() {
  console.log("🔍 이미지 파일 검색 중...\n");

  const allFiles = [];
  for (const dir of DIRS) {
    allFiles.push(...(await getImageFiles(dir)));
  }

  console.log(`📦 ${allFiles.length}개 이미지 발견\n`);

  let optimized = 0;
  for (const file of allFiles) {
    try {
      await optimizeImage(file);
      optimized++;
    } catch (err) {
      console.error(`✗ ${file} — ${err.message}`);
    }
  }

  console.log(`\n✅ ${optimized}/${allFiles.length}개 처리 완료`);
}

main();
