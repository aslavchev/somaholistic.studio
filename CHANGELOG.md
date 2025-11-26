# Changelog

All notable changes to the SOMA Studio website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-11-26

### Added
- UX polish with smooth scroll animations using Intersection Observer
- Enhanced Hero section with staggered entrance animations
- Fade-in animations for Services and Gallery sections
- Enhanced focus-visible styles for better keyboard navigation
- Proper touch targets (min 44px) for mobile users
- `.nvmrc` file for Node version consistency
- `.editorconfig` for consistent code formatting across editors
- This CHANGELOG.md file

### Changed
- Improved Gallery responsive grid layout (2-col mobile, 3-col tablet, 6-col desktop)
- Optimized responsive breakpoints across all components
- Reorganized project structure (moved Docker files to `docker/`, scripts to `scripts/`)
- Consolidated documentation (moved `.mari-guides/` to `docs/guides/mari/`)
- Moved `TESTING.md` to `docs/` folder

### Fixed
- Removed broken backup file `Footer.tsx.broken` from version control

## [1.0.0] - 2024-11-26

### Added
- SEO improvements with comprehensive meta tags (Open Graph, Twitter cards)
- `sitemap.xml` for better search engine indexing
- Image sitemap for gallery photos
- Google Analytics integration component
- Enhanced gallery with professional lightbox component
- Keyboard navigation support in lightbox (Arrow keys, Escape)
- Expanded gallery from 4 to 6 images
- Schema.org structured data for HealthAndBeautyBusiness
- Geo-location meta tags for local SEO (Sofia, Bulgaria)

### Changed
- Updated all URLs from lovable.app to GitHub Pages domain
- Improved social media sharing cards

### Fixed
- Pricing page 404 error by adding LanguageProvider
- Footer navigation issues
- Service card expansion state management

## [0.9.0] - 2024-11-25

### Added
- Initial website launch
- Hero section with booking CTA
- Services showcase with 6 holistic therapies
- Testimonials carousel
- Gallery with 4 studio images
- Contact section with embedded Google Maps
- Multi-language support (Bulgarian/English)
- WhatsApp integration for bookings
- Responsive mobile-first design
- Accessibility features (ARIA labels, semantic HTML)

### Technical
- React 18 + TypeScript
- Vite build system
- Tailwind CSS for styling
- Radix UI components
- Framer Motion for animations
- GitHub Pages deployment with CI/CD
