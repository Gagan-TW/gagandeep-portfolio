// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gagandeep Kaur',
  tagline: "Let's bridge the gap between docs and code.",
  favicon: 'img/favicon.ico',

  // The live address of the site. Used for canonical links and social previews.
  url: 'https://docsascode.netlify.app',
  baseUrl: '/',

  organizationName: 'Gagan-TW',
  projectName: 'gagandeep-portfolio',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Learning Hub: lessons for technical writers, served at /learn
        docs: {
          path: 'docs',
          routeBasePath: 'learn',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Gagan-TW/gagandeep-portfolio/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent posts',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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

  plugins: [
    // Portfolio: project work, served at /portfolio with its own sidebar
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'portfolio',
        path: 'portfolio',
        routeBasePath: 'portfolio',
        sidebarPath: './sidebarsPortfolio.js',
        editUrl: 'https://github.com/Gagan-TW/gagandeep-portfolio/tree/main/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Image shown when the site is shared on LinkedIn or elsewhere.
      // Replace with a 1200 x 630 social card when you have one.
      image: 'img/gagan.jpg',
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
            sidebarId: 'learnSidebar',
            position: 'left',
            label: 'Learning Hub',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'portfolio',
            sidebarId: 'portfolioSidebar',
            position: 'left',
            label: 'Portfolio',
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
              {label: 'Writing Rules That Always Work', to: '/learn/writing-rules'},
              {label: 'API Documentation Guide', to: '/learn/api-docs'},
              {label: 'Docs-as-Code Workflow', to: '/learn/docs-as-code'},
            ],
          },
          {
            title: 'Learn to Code',
            items: [
              {label: 'Git & GitHub for Writers', to: '/learn/git-github'},
              {label: 'REST APIs Explained Simply', to: '/learn/rest-apis'},
              {label: 'Python for Technical Writers', to: '/learn/python'},
              {label: 'SQL for Non-Developers', to: '/learn/sql'},
            ],
          },
          {
            title: 'Connect',
            items: [
              {label: 'Portfolio', to: '/portfolio'},
              {label: 'Blog', to: '/blog'},
              {label: 'GitHub', href: 'https://github.com/Gagan-TW'},
              {label: 'LinkedIn', href: 'https://www.linkedin.com/in/gagandeep-kaur'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gagandeep Kaur. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml', 'python', 'sql'],
      },
    }),
};

export default config;
