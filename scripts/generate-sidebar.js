#!/usr/bin/env node

/**
 * Generate Docusaurus sidebars.js from extracted documentation index.json
 * Usage: node scripts/generate-sidebar.js extracted-docs/index.json > sidebars.js
 */

const fs = require('fs');
const path = require('path');

// Read the index file path from command line
const indexPath = process.argv[2];
if (!indexPath) {
  console.error('Usage: node generate-sidebar.js <path-to-index.json>');
  process.exit(1);
}

// Read and parse the index file
let index;
try {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  index = JSON.parse(indexContent);
} catch (error) {
  console.error(`Error reading index file: ${error.message}`);
  process.exit(1);
}

// Generate the sidebar structure
const sidebar = {
  tutorialSidebar: [
    'README',
    {
      type: 'category',
      label: 'Overview',
      items: ['VISION', 'ARCHITECTURE', 'CONCEPTS'],
    },
    {
      type: 'category', 
      label: 'Getting Started',
      items: ['QUICKSTART', 'DEVELOPMENT_SETUP'],
    },
    {
      type: 'category',
      label: 'Development',
      items: ['TESTING', 'TROUBLESHOOTING'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'SECURITY',
        'HAL_SPEC',
        // Add schema reference if available
        ...(fs.existsSync('docs/reference/hal-schemas.md') ? ['reference/hal-schemas'] : []),
      ],
    },
    {
      type: 'category',
      label: 'API Documentation',
      items: [
        'api/index',
        'api/typescript',
        'api/python',
        'api/go',
      ],
    },
  ],
};

// Add packages section if available
if (index.packages && index.packages.length > 0) {
  sidebar.tutorialSidebar.push({
    type: 'category',
    label: 'Packages',
    items: index.packages.map(pkg => `packages/${pkg}`),
  });
}

// Add apps section if available
if (index.apps && index.apps.length > 0) {
  sidebar.tutorialSidebar.push({
    type: 'category',
    label: 'Applications',
    items: index.apps.map(app => `apps/${app}`),
  });
}

// Add examples section if examples directory exists
if (fs.existsSync('docs/examples')) {
  const examples = fs.readdirSync('docs/examples')
    .filter(file => file.endsWith('.md'))
    .map(file => `examples/${file.replace('.md', '')}`);
  
  if (examples.length > 0) {
    sidebar.tutorialSidebar.push({
      type: 'category',
      label: 'Examples',
      items: examples,
    });
  }
}

// Output the sidebar configuration
console.log(`// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = ${JSON.stringify(sidebar, null, 2)};

export default sidebars;`);