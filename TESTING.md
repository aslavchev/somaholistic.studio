# Local Testing Guide

This document explains how to test the production build locally before deploying to GitHub Pages.

## Test with Node.js Server (Recommended)

This simulates the GitHub Pages environment by serving the built files with the correct base path.

1. Build the project:
```bash
npm run build
```

2. Run the test server:
```bash
npm run test:local
```

3. Open your browser and visit:
```
http://localhost:8080/somaholistic.studio/
```

The test server mimics GitHub Pages by serving the site at `/somaholistic.studio/` path.

## Test with Vite Preview

For a quick preview (note: this uses Vite's preview server):

```bash
npm run preview
```

Then visit: `http://localhost:4173/somaholistic.studio/`

## Test with Docker (Optional)

If you have Docker installed, you can test with nginx:

1. Build and run:
```bash
docker compose up --build
```

2. Visit:
```
http://localhost:8080/somaholistic.studio/
```

3. Stop the container:
```bash
docker compose down
```

## Key Configuration

The site uses these settings for GitHub Pages:

- **Vite base path**: `/somaholistic.studio/` (in vite.config.ts)
- **Router basename**: `/somaholistic.studio` (in src/App.tsx)

These settings ensure the site works correctly when deployed to `https://aslavchev.github.io/somaholistic.studio/`
