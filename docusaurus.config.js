// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WONOLOG.",
  tagline:
    "돈보다 일의 가치를 중요하게 생각하는 개발자입니다.\n희미한 기록이 뚜렷한 기억보다 낫기에 꾸준히 기록합니다.",
  url: "https://sewonkimm-github-io.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sewonkimm", // Usually your GitHub org/user name.
  projectName: "sewonkimm.github.io", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: "WONOLOG.",
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "wikiSidebar",
            label: "Wiki",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "reactSidebar",
            label: "React",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/sewonkimm",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Menu",
            items: [
              {
                label: "Wiki",
                to: "/docs/wiki/intro",
              },
              {
                label: "React",
                to: "/docs/react/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} sewonkimm, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
