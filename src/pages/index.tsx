import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import "./index.css";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// 정적으로 생성된 블로그 포스트 목록 가져오기
import blogPostList from "@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary")}>
      <div className="container header">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomePageContent() {
  const { siteConfig } = useDocusaurusContext();
  const recentPosts = blogPostList.items.slice(0, 10);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}/${mm}/${dd}`;
  };

  return (
    <main>
      <div className="container content">
        <p>
          저는 프런트엔드 개발자로 3년간 제품을 만들다, 이제는 그 기술을 더 많은
          사람들에게 잘 전달하기 위해 문서를 작성하고 있습니다.
          <br />
          <b>{siteConfig.title}</b>는 제 커리어의 여정이자, 기술과 사람을
          연결하는 과정의 기록입니다.
        </p>

        <Link className="button button--secondary" to="/about">
          💁🏻‍♀️ 소개 더 보기
        </Link>
      </div>

      <hr />

      <section className="latestPosts">
        <div className="container">
          <h2 className="text--center">📝최신 글</h2>
          <ul>
            {recentPosts.map((post) => (
              <li
                key={post.permalink}
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px auto",
                  gap: "12px",
                }}
              >
                <span>{formatDate(post.date)}</span>
                <Link to={post.permalink}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link className="button button--secondary" to="/blog">
          더 많은 글 보기
        </Link>
      </section>
    </main>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="title">
      <HomepageHeader />
      <HomePageContent />
    </Layout>
  );
}
