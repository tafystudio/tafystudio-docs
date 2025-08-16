import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tafy Studio Documentation',
  tagline: 'Complete documentation for the Tafy Studio platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.tafy.studio',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tafystudio', // Usually your GitHub org/user name.
  projectName: 'tafystudio-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tafystudio/tafystudio-docs/tree/main/',
        },
        blog: false, // Disable blog feature
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
      title: 'Tafy Studio',
      logo: {
        alt: 'Tafy Studio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://tafy.studio',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://github.com/tafystudio/tafystudio',
          label: 'GitHub',
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
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/tafystudio',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/tafystudio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main Website',
              href: 'https://tafy.studio',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tafystudio/tafystudio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tafy Studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;