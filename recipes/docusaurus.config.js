import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Recipes',
  tagline: 'Hosted by PWS',
  tabTitle: 'PWS Recipes',
  favicon: 'img/favicon.ico',
  url: 'https://recipes.whitney.rip',
  baseUrl: '/',
  organizationName: 'pws',
  projectName: 'recipes',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'PWS Recipes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'recipesSidebar',
            position: 'left',
            label: 'Recipes',
          },
          {to: '/blog', label: 'About', position: 'left'},
          {
            href: 'https://git.whitney.rip/olomana/recipes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Recipes',
                to: '/docs/recipes',
              },
            ],
          },
          {
            title: 'About the Author',
            items: [
              {
                label: 'Jake\'s Online Resume',
                href: 'https://runyanjake.github.io/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Recipes',
                to: '/docs/recipes',
              },
              {
                label: 'Github',
                href: 'https://git.whitney.rip/olomana/recipes',
              },
              {
                label: 'About',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PWS. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
