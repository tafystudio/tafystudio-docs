# tafystudio-docs

Documentation website for [Tafy Studio](https://github.com/tafystudio/tafystudio) built with [Docusaurus](https://docusaurus.io/).

## Overview

This repository contains the documentation for the Tafy Studio monorepo project. The documentation is:
- Built using Docusaurus
- Hosted at [docs.tafy.studio](https://docs.tafy.studio)
- Automatically deployed via GitHub Actions when documentation changes in the main monorepo

The main website is hosted at [tafy.studio](https://tafy.studio) from the [tafystudio.github.io](https://github.com/tafystudio/tafystudio.github.io) repository.

## Setup Checklist

### 🔧 Initial Repository Setup

- [ ] **Create `.gitignore` file** for Node.js/Docusaurus project
- [ ] **Initialize npm project** with `package.json`
- [ ] **Install Docusaurus** and create initial site structure
- [ ] **Configure Docusaurus** settings (site title, URL, baseUrl, etc.)
- [ ] **Create initial documentation structure** (folders, sidebar config)

### 🌐 GitHub Pages Configuration

- [ ] **Enable GitHub Pages** in repository settings
- [ ] **Configure custom domain** `docs.tafy.studio`
  - [ ] Add CNAME file to the repository
  - [ ] Configure DNS records (CNAME pointing to `tafystudio.github.io`)
  - [ ] Enable HTTPS in GitHub Pages settings

### 🤖 GitHub Actions Workflow

- [ ] **Create deployment workflow** (`.github/workflows/deploy.yml`)
  - [ ] Checkout this repository
  - [ ] Checkout monorepo to access latest documentation
  - [ ] Build Docusaurus site
  - [ ] Deploy to GitHub Pages
- [ ] **Configure repository secrets** for GitHub Actions
- [ ] **Set up workflow triggers**
  - [ ] Manual dispatch
  - [ ] Webhook from monorepo on documentation changes

### 📝 Documentation Content

- [ ] **Define documentation structure** (API docs, guides, tutorials, etc.)
- [ ] **Create documentation templates**
- [ ] **Set up auto-generation scripts** for API documentation from monorepo
- [ ] **Configure search** (Algolia DocSearch or local search)

### 🔗 Integration

- [ ] **Link from main website** (tafy.studio) to documentation
- [ ] **Add documentation badge** to monorepo README
- [ ] **Configure cross-repository automation**
- [ ] **Set up documentation versioning** strategy

### 🧪 Testing & Quality

- [ ] **Add build tests** to GitHub Actions
- [ ] **Configure broken link checker**
- [ ] **Set up preview deployments** for PRs
- [ ] **Create contribution guidelines** for documentation

## Getting Started

```bash
# Clone the repository
git clone https://github.com/tafystudio/tafystudio-docs.git
cd tafystudio-docs

# Install dependencies (after package.json is created)
npm install

# Start development server
npm run start

# Build for production
npm run build
```

## Contributing

Please refer to our [contributing guidelines](CONTRIBUTING.md) for information on how to contribute to the documentation.

## License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.
