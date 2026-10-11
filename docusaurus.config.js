// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gagandeep Kaur',
  tagline: "Let's bridge the gap between docs and code.",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Gagan-TW', // Usually your GitHub org/user name.
  projectName: 'gagandeep-portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Gagan-TW/gagandeep-portfolio/tree/main/docs/intro.md',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            
          'https://github.com/Gagan-TW/gagandeep-portfolio/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Gagandeep Kaur',
        logo: {
          alt: 'Gagandeep Kaur Logo',
          src: 'img/favicon.ico',
        },
        
        items: [
          
             {to: '/about', label: 'About', position: 'left'},
            {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Gagan-TW',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
       links: [
  {
    title: 'For Technical Writers',
    items: [
      { label: 'Writing Rules That Always Work', to: '/docs/intro' },
      { label: 'API Documentation Guide', to: '/docs/intro' },
      { label: 'Docs-as-Code Workflow', to: '/docs/intro' },
    ],
  },
  {
    title: 'Learn to Code',
    items: [
      { label: 'Git & GitHub for Writers', to: '/docs/intro' },
      { label: 'REST APIs Explained Simply', to: '/docs/intro' },
      { label: 'Python for Technical Writers', to: '/docs/intro' },
      { label: 'SQL for Non-Developers', to: '/docs/intro' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { label: 'GitHub', href: 'https://github.com/Gagan-TW' },
      { label: 'Blog', to: '/blog' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gagandeep-kaur' },
    ],
  },
],
        copyright: `Copyright © ${new Date().getFullYear()} Gagandeep Kaur. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
