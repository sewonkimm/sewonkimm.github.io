// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Insight Nest",
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
  themes: ["@docusaurus/theme-live-codeblock", "@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
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
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          routeBasePath: "/blog",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-TJY9MJ7NPP",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: "Insight Nest",
        logo: {
          alt: "Insight Nest Logo",
          src: "img/logo.png",
          srcDark: "img/logo.png",
          href: "/blog",
          target: "_self",
          width: 32,
          height: 32,
          className: "custom-navbar-logo-class",
        },
        items: [
          {
            to: "/About",
            label: "About",
            position: "left",
          },
          {
            to: "/blog",
            label: "Posts",
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
            type: "docSidebar",
            position: "left",
            sidebarId: "bookSidebar",
            label: "Book",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Info",
            items: [
              {
                label: "About",
                to: "/About",
              },
            ],
          },
          {
            title: "Menu",
            items: [
              {
                label: "Wiki",
                to: "/docs/wiki/intro",
              },
              {
                label: "React",
                to: "/docs/react/react",
              },
              {
                label: "Book",
                to: "/docs/book/intro",
              },
              {
                label: "Posts",
                to: "/blog",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "모든 Posts 태그 보기",
                href: "https://sewonkimm-github-io.vercel.app/blog/tags",
              },
              {
                label: "모든 Docs 태그 보기",
                href: "https://sewonkimm-github-io.vercel.app/docs/tags",
              },
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
        additionalLanguages: ["bash", "diff", "json"],
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      algolia: {
        appId: "BV1E8YX7IZ",
        apiKey: "b81a3e465983bf68e319448fa3d38284",
        indexName: "Insight Nest",
        contextualSearch: true,
      },
      mermaid: {
        theme: { light: "neutral", dark: "forest" },
      },
      metadata: [
        {
          name: "google-site-verification",
          content: "hCg4d07seg-vSR7kdrATeTmYsEhQJLK-7odzXLA40x8",
        },
      ],
    }),
};

module.exports = config;
