# Docker Setup for SOMA Studio

This folder contains Docker configuration files for containerizing the SOMA Studio website.

## Files

- **Dockerfile** - Multi-stage build configuration for production deployment
- **docker-compose.yml** - Docker Compose configuration for local development
- **nginx.conf** - Nginx web server configuration for serving the static site
- **.dockerignore** - Files to exclude from Docker build context

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and run the container
docker-compose up --build

# Access the site at http://localhost:8080
```

### Using Docker directly

```bash
# Build the image
docker build -t soma-studio -f docker/Dockerfile .

# Run the container
docker run -p 8080:80 soma-studio

# Access the site at http://localhost:8080
```

## Production Deployment

The Dockerfile uses a multi-stage build:

1. **Build stage** - Compiles the Vite application
2. **Production stage** - Serves static files with Nginx

This results in a lightweight production image (~25MB).

## Environment Variables

No environment variables are required for the production build.
All configuration is baked into the build at compile time.

## Notes

- The container runs on port 80 internally, mapped to 8080 externally
- Static assets are served with caching headers
- Gzip compression is enabled for better performance
- SPA routing is handled with `try_files` directive
