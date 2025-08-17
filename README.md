# Tafy Studio Documentation Site

This repository contains the Docusaurus configuration for the Tafy Studio documentation website deployed at <https://docs.tafy.studio>.

## Architecture

- Documentation source files are maintained in the main [tafystudio/tafystudio](https://github.com/tafystudio/tafystudio) repository
- This repository contains only the Docusaurus configuration and build process
- GitHub Actions automatically fetches the latest docs and builds the site
- Deployment happens via GitHub Pages

## Setup Status

### ✅ Completed
- [x] Docusaurus configuration with TypeScript support
- [x] GitHub Actions workflow for automated deployment
- [x] Scheduled builds every 6 hours
- [x] Custom domain support (CNAME file)
- [x] API documentation structure
- [x] Sidebar configuration matching expected documentation

### 🚀 No Repository Secrets Required!

Since the main repository is public, no personal access token is needed. The workflow uses the default `GITHUB_TOKEN` to checkout the monorepo.

### 🌐 GitHub Pages Configuration

After pushing this repository:

1. Go to: Settings → Pages
2. Under "Build and deployment":
   - Source: **GitHub Actions** (should be automatically selected)
3. Custom domain will be configured automatically via the CNAME file

### 🔗 DNS Configuration

Add a CNAME record in your DNS provider:
- **Type**: `CNAME`
- **Name**: `docs`
- **Value**: `tafystudio.github.io`
- **TTL**: Auto or 3600

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build production site
npm run build

# Serve production build locally
npm run serve
```

## How It Works

The GitHub Actions workflow:
1. Runs when:
   - Changes are pushed to main branch
   - Manual trigger via GitHub UI
   - Every 6 hours (scheduled)
   - **Triggered from the monorepo** when docs are updated
2. Checks out this repository
3. Checks out the main `tafystudio/tafystudio` repository (public, no auth needed)
4. **Runs the monorepo's `extract-docs.sh` script** to extract and prepare documentation
5. Processes the extracted documentation into the appropriate directories
6. Generates dynamic sidebars based on available content
7. Builds the Docusaurus site
8. Deploys to GitHub Pages

### Automatic Updates from Monorepo

To enable automatic documentation updates when the monorepo changes, add this workflow to the main repository at `.github/workflows/trigger-docs-build.yml`:

```yaml
name: Trigger Documentation Build

on:
  push:
    branches: [main]
    paths:
      - 'docs/**'
      - 'README.md'
      - '.github/workflows/trigger-docs-build.yml'
  workflow_dispatch:

jobs:
  trigger:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger docs repository build
        uses: peter-evans/repository-dispatch@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          repository: tafystudio/tafystudio-docs
          event-type: docs-update
          client-payload: '{"ref": "${{ github.ref }}", "sha": "${{ github.sha }}"}'
```

This workflow will automatically trigger a documentation rebuild whenever:
- Documentation files in the `docs/` directory are updated
- The main `README.md` is changed
- The workflow itself is modified

## Documentation Structure

The monorepo uses a sophisticated documentation extraction process defined in `docs/DOCUMENTATION_BUILD_SPEC.md`. The process:

1. **Static Documentation** - Markdown files in `/docs/` directory
2. **API Documentation** - Generated from source code using TypeDoc, Sphinx, and godoc
3. **Dynamic Content** - HAL schemas, examples, and package/app READMEs

The extraction process is handled by the monorepo's `scripts/extract-docs.sh` script which:
- Runs `make docs-prepare` to build all documentation
- Extracts static content, API docs, schemas, and examples
- Creates an `index.json` manifest for the docs site
- Packages everything for Docusaurus consumption

## Deployment

The site automatically deploys when:
- Changes are pushed to the `main` branch
- Every 6 hours (to catch updates from the main repository)
- Manually triggered via GitHub Actions

## Contributing

- **Documentation content**: Should be contributed to the main [tafystudio/tafystudio](https://github.com/tafystudio/tafystudio) repository
- **Site configuration**: Can be updated in this repository

## Troubleshooting

### Build Failures

If the GitHub Actions workflow fails:
1. Check the Actions logs for specific errors
2. Verify the main repository is accessible (public)
3. Ensure npm dependencies install correctly

### Missing Documentation

If documentation appears missing:
1. Check that the monorepo has the required documentation structure
2. Verify the `extract-docs.sh` script exists and is executable
3. Check the monorepo's Makefile has the `docs-prepare` target
4. Manually trigger a rebuild using the "Run workflow" button in Actions

### Automatic Updates Not Working

If the monorepo updates aren't triggering rebuilds:
1. Verify the trigger workflow is added to the monorepo
2. Check that the workflow has the correct repository name
3. Look for `repository_dispatch` events in the Actions tab