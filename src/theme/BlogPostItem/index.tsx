import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import type BlogPostItemType from "@theme/BlogPostItem";
import type { WrapperProps } from "@docusaurus/types";
import { useLocation } from "@docusaurus/router";

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const location = useLocation();
  const { pathname } = location;
  const isNotList = pathname !== "/blog";

  console.log(isNotList);
  return (
    <>
      {isNotList && (
        <div style={{ marginBottom: 16 }}>
          <a className="custom-link" href="/blog">
            글 목록 보기
          </a>
        </div>
      )}
      <BlogPostItem {...props} />
    </>
  );
}
