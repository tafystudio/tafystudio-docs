/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'README',
    {
      type: 'category',
      label: 'Overview',
      items: [
        'VISION',
        'ARCHITECTURE',
        'CONCEPTS',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'QUICKSTART',
        'DEVELOPMENT_SETUP',
        'TROUBLESHOOTING',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'TESTING',
        'SECURITY',
        'HAL_SPEC',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/index',
        'api/typescript',
        'api/python',
        'api/go',
      ],
    },
  ],
};

export default sidebars;