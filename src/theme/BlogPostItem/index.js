import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import { DiscussionEmbed } from "disqus-react";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import { useLocation } from "@docusaurus/router";

export default function BlogPostItemWrapper(props) {
  const { metadata } = useBlogPost();
  const location = useLocation();

  const { frontMatter, slug, title } = metadata;
  const { comments = true } = frontMatter;
  const { pathname } = location;
  const isNotList = pathname !== "/blog";
  const showComments = comments && isNotList;

  const handleMouseEnter = (e) => {
    e.target.style.color = --ifm - font - color - base;
  };
  return (
    <>
      {isNotList && (
        <div style={{ marginBottom: 16 }}>
          <a
            className="custom-link"
            href="/blog"
            onMouseEnter={handleMouseEnter}
          >
            글 목록 보기
          </a>
        </div>
      )}
      <BlogPostItem {...props} />
      <h1>{comments}</h1>
      {showComments && (
        <DiscussionEmbed
          shortname="wonolog"
          config={{
            url: slug,
            identifier: slug,
            title,
            language: "ko_KR",
          }}
        />
      )}
    </>
  );
}
