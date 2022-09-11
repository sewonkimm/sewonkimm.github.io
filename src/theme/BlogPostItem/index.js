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
  const showComments = comments && pathname !== "/";

  return (
    <>
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
