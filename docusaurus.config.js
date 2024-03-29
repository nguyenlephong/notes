// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Software Engineer - Notes',
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
          docSearchCss: require.resolve('./src/css/docsearch.css'),
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
  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'Nguyễn Lê Phong - Notes', content: 'Full-stack Software Engineer, Senior Frontend Engineer, Software Engineer, Developer, IT, Jobs, Experience, '},
        {name: 'Nguyễn Lê Phong - Full-stack Software Engineer', content: 'Full-stack Software Engineer, Senior Frontend Engineer, Software Engineer, Developer, IT, Jobs, Experience, '},
      ],
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
      algolia: {
        // yarn run swizzle @docusaurus/theme-search-algolia SearchBar
        // The application ID provided by Algolia
        appId: 'VDTYO64TMC',

        // Public API key: it is safe to commit it
        apiKey: 'd8c2f0d1cd99e7ee8191f5e857389133',

        indexName: 'nguyenlephongio',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),
};

module.exports = config;