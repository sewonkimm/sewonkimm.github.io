// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WONOLOG.",
  url: "https://sewonkimm-github-io.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sewonkimm", // Usually your GitHub org/user name.
  projectName: "sewonkimm.github.io", // Usually your repo name.
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/blog",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/main/website/blog/",
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
        logo: {
          src: "title",
          href: "/blog",
          target: "_self",
        },
        items: [
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
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
            href: "https://github.com/sewonkimm",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://sewonkimm.notion.site/sewonkimm-86ac5079cdb446ae877c8da3fc3ed860",
            label: "Resume",
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
                href: "https://github.com/sewonkimm",
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
      algolia: {
        appId: "BV1E8YX7IZ",
        apiKey: "b81a3e465983bf68e319448fa3d38284",
        indexName: "wonolog",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
