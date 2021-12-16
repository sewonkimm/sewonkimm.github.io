// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'WonQueue',
	tagline: '프로그래머 김세원의 개발 지식 창고',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'sewonkimm', // Usually your GitHub org/user name.
	projectName: 'sewonkimm.github.io', // Usually your repo name.

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/main/website/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/main/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: '',
				logo: {
					alt: 'WonQueue Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'About',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/sewonkimm',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Me',
						items: [
							{
								label: 'About',
								to: '/',
							},
							{
								label: 'Blog',
								to: '/blog',
							},
						],
					},
					{
						title: 'Study',
						items: [
							{
								label: 'JS',
								to: '/',
							},
							{
								label: 'React',
								to: '/',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus',
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
