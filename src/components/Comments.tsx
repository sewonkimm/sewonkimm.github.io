import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Comments(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Giscus
        id="comments"
        repo="sewonkimm/sewonkimm.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkxOTcwOTQ0Mjg="
        category="Comments"
        categoryId="DIC_kwDOC79sHM4Cm1Dx"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === "dark" ? "dark_tritanopia" : "light_tritanopia"}
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}
