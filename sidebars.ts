import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'installation',
        'quick-start',
      ],
    },
    // Additional sections will be added as documentation is created
  ],
};

export default sidebars;