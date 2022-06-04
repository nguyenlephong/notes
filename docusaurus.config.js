// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nguyễn Lê Phong - Notes',
  tagline: 'A passionate individual who always thrives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact.',
  url: 'https://nguyenlephong.github.io',
  baseUrl: '/notes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dom.png',
  organizationName: 'nguyenlephong', // Usually your GitHub org/user name.
  projectName: 'notes', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-K8SCKY9VHB',
        anonymizeIP: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'Nguyễn Lê Phong - Notes', content: 'Developer, IT, Jobs, Experience'}],
      announcementBar: {
        id: 'document_under_construction',
        content: 'DOCUMENTS ARE UNDER CONSTRUCTION...',
        backgroundColor: '#d0a85f',
        textColor: '#1f0edb',
        isCloseable: false,
      },
      // algolia: {
      //   appId: 'AUJYIQ70HN',
      //   apiKey: '25243dbf9049cf036e87f64b361bd2b9',
      //   indexName: 'phong-nguyen-notes',
      // },
      navbar: {
        title: 'Nguyễn Lê Phong - Notes',
        logo: {
          alt: 'Nguyễn Lê Phong',
          src: 'img/dom.png',
        },
        items: [
          // {
          //   type: 'docsVersionDropdown', position: 'left'
          // },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notes',
          },
          {to: '/blog', label: 'Blog', position: 'left'},

          {
            href: 'https://github.com/nguyenlephong',
            label: 'Repos',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/nguyenlephong17',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nguyenlephong',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nguyễn Lê Phong - My Notes, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'vi'],
      },
    }),
};

module.exports = config;