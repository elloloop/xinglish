# CI/CD Pipeline Setup for Xinglish

This document outlines the comprehensive CI/CD pipeline setup for the Xinglish transliteration toolkit.

## Overview

The Xinglish project uses GitHub Actions for Continuous Integration and Continuous Deployment with three main workflows:

1. **CI Workflow** (`ci.yml`) - Automated testing, linting, and building
2. **Deploy to GitHub Pages** (`deploy-pages.yml`) - Playground app deployment
3. **Build and Publish** (`publish.yml`) - Package publishing to GitHub Packages

## Workflows

### 1. CI Workflow (`.github/workflows/ci.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs:**
- **Lint and Typecheck**: ESLint and TypeScript checking for all affected projects
- **Test**: Vitest unit tests with coverage reporting
- **Build**: Build all affected projects and upload artifacts
- **E2E**: End-to-end tests (runs only on PRs)

**Features:**
- Uses Nx affected commands for efficient CI
- Parallel execution (up to 3 concurrent jobs)
- Coverage reports uploaded to Codecov
- Concurrency control to cancel outdated runs

### 2. GitHub Pages Deployment (`.github/workflows/deploy-pages.yml`)

**Triggers:**
- Push to `main` branch (when playground or library files change)
- Manual workflow dispatch

**Process:**
1. Build all required libraries (`shared`, `core`, `react`)
2. Build the playground application
3. Deploy to GitHub Pages

**Permissions:**
- Read repository contents
- Write to GitHub Pages
- Use ID token for deployment

### 3. Package Publishing (`.github/workflows/publish.yml`)

**Triggers:**
- Push tags matching `v*` (e.g., `v1.0.0`)
- Manual workflow dispatch with optional version input

**Process:**
1. **Test Job**: Run all tests and linting before publishing
2. **Build and Publish Job**:
   - Build packages in dependency order
   - Publish to GitHub Packages Registry
   - Create GitHub Release (for tag pushes)

**Security Features:**
- Environment protection (`npm-publish`)
- Package provenance with `--provenance` flag
- Proper permissions and scoping

**Published Packages:**
- `@elloloop/xinglish-shared`
- `@elloloop/xinglish-core`
- `@elloloop/xinglish-react`
- `@elloloop/xinglish-angular`

## Configuration Details

### Node.js Version
All workflows use Node.js 20 for consistency and security.

### Package Registry
Packages are published to GitHub Packages Registry at `https://npm.pkg.github.com` under the `@elloloop` scope.

### Nx Configuration
- Uses Nx affected commands for efficient CI/CD
- Parallel execution for faster builds
- Dependency-aware build ordering

### Security
- Uses `GITHUB_TOKEN` for authentication
- Environment-based protection for publishing
- Package provenance for supply chain security

## Usage

### Running CI
CI runs automatically on pushes and PRs. To trigger manually:
```bash
# For affected projects only
npx nx affected -t test,lint,build

# For all projects
npx nx run-many -t test,lint,build --all
```

### Publishing Packages
1. **Via Git Tag** (recommended):
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **Manual Trigger**:
   - Go to Actions → Build and Publish
   - Click "Run workflow"
   - Optionally specify version

### Deploying to GitHub Pages
GitHub Pages deployment happens automatically when:
- Code is pushed to `main` branch
- Changes affect playground app or libraries

**Manual deployment:**
- Go to Actions → Deploy to GitHub Pages
- Click "Run workflow"

## Repository Settings Required

### Secrets
- `CODECOV_TOKEN` (optional): For coverage reporting

### GitHub Pages
1. Go to Settings → Pages
2. Source: "GitHub Actions"
3. The playground will be available at: `https://elloloop.github.io/xinglish/`

### Environments
1. Create environment named `npm-publish`
2. Add protection rules if needed
3. Required for package publishing workflow

### Package Registry
Packages are automatically published to GitHub Packages. To install:

```bash
# Configure npm to use GitHub Packages for @elloloop scope
echo "@elloloop:registry=https://npm.pkg.github.com" >> ~/.npmrc

# Install packages (requires authentication for private repos)
npm install @elloloop/xinglish-core
```

## Workflow Dependencies

```
CI Workflow:
├── lint-and-typecheck
├── test
├── build (depends on: lint-and-typecheck, test)
└── e2e (depends on: build)

Publish Workflow:
├── test
└── build-and-publish (depends on: test)

Pages Deployment:
├── build
└── deploy (depends on: build)
```

## Troubleshooting

### Common Issues

1. **Build Failures**: Check TypeScript errors and dependency issues
2. **Test Failures**: Ensure all tests pass locally first
3. **Publishing Failures**: Verify package versions and registry access
4. **Pages Deployment**: Check build output path and permissions

### Debug Commands

```bash
# Check affected projects
npx nx affected:graph

# Dry run builds
npx nx affected -t build --dry-run

# Verbose logging
npx nx run-many -t test --verbose
```

## Monitoring

- **CI Status**: Check commit status badges
- **Package Downloads**: Monitor in GitHub Packages
- **Pages Deployment**: Check deployment status in repository settings

The complete pipeline ensures code quality, automated testing, and reliable deployments for the Xinglish transliteration toolkit.