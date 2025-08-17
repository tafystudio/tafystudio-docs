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

### 🔑 Required: Repository Secret

⚠️ **Important**: You must add a repository secret for the workflow to access the main repository:

1. Go to: <https://github.com/tafystudio/tafystudio-docs/settings/secrets/actions>
2. Click "New repository secret"
3. Add secret:
   - **Name**: `DOCS_ACCESS_TOKEN`
   - **Value**: A GitHub Personal Access Token with appropriate permissions

#### Creating the Personal Access Token

1. Go to: <https://github.com/settings/tokens>
2. Click "Generate new token" → "Generate new token (classic)"
3. Configure:
   - **Note**: `Tafy Studio Docs Builder`
   - **Expiration**: 90 days or longer
   - **Required Scopes**:
     - ✅ `repo` (if main repo is private)
     - ✅ `public_repo` (if main repo is public)
4. Generate and copy the token immediately

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
1. Runs on push to main, manual trigger, or every 6 hours
2. Checks out this repository
3. Attempts to checkout the main `tafystudio/tafystudio` repository
4. Copies documentation from the main repo (if available)
5. Generates API documentation structure
6. Builds the Docusaurus site
7. Deploys to GitHub Pages

## Documentation Structure

The workflow expects these documentation files in the main repository:
- `README.md` - Main documentation homepage
- `docs/VISION.md` - Project vision
- `docs/ARCHITECTURE.md` - Architecture overview
- `docs/CONCEPTS.md` - Core concepts
- `docs/QUICKSTART.md` - Quick start guide
- `docs/DEVELOPMENT_SETUP.md` - Development setup
- `docs/TROUBLESHOOTING.md` - Troubleshooting guide
- `docs/TESTING.md` - Testing documentation
- `docs/SECURITY.md` - Security guidelines
- `docs/HAL_SPEC.md` - HAL specification

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
1. Check if `DOCS_ACCESS_TOKEN` secret is configured
2. Verify the token has not expired
3. Check the Actions logs for specific errors

### Missing Documentation

If documentation appears missing:
1. The workflow will use placeholder content if the main repo is not accessible
2. Check that the expected documentation files exist in the main repository
3. Verify the `DOCS_ACCESS_TOKEN` has appropriate permissions