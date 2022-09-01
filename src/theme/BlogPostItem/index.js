import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import { DiscussionEmbed } from "disqus-react";
import { useBlogPost } from "@docusaurus/theme-common/internal";

export default function BlogPostItemWrapper(props) {
  const { metadata } = useBlogPost();
  const { frontMatter, slug, title } = metadata;
  const { comments = true } = frontMatter;

  return (
    <>
      <BlogPostItem {...props} />
      {comments && (
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
