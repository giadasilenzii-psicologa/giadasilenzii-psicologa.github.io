import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Giada Silenzii | Psicologa',
  tagline: 'È la relazione che cura',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://psicologiada.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'psicologiada', // Usually your GitHub org/user name.
  projectName: 'psicologiada.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  githubHost: 'github.com',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, //{
        //   sidebarPath: './sidebars.ts',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Post Recenti',
          blogSidebarCount: 10,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        pages: {
          path: 'pages',

        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Giada Silenzii',
      logo: {
        alt: 'Giada logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/chi-sono', label: 'Chi Sono', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Mi trovi anche su',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/psicolo.giada',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/giadra-silenzii-8006a3178',
            },
            {
              label: 'Threads',
              href: 'https://threads.com/psicolo.giada',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Giada Silenzii. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
