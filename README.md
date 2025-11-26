# SOMA Wellness Studio

Professional wellness and holistic therapy website for SOMA Studio in Sofia, Bulgaria.

**Live Site:** [https://aslavchev.github.io/somaholistic.studio/](https://aslavchev.github.io/somaholistic.studio/)

---

## Tech Stack

- **Frontend:** React 18.3.1 + TypeScript 5.8.3
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** Radix UI (shadcn/ui)
- **Deployment:** GitHub Pages (Auto-deploy via GitHub Actions)
- **Languages:** Bulgarian (primary) + English

---

## Features

- 🌐 Bilingual support (Bulgarian/English)
- 📱 Fully responsive design
- ♿ WCAG 2.1 Level AA accessible
- 🎨 Smooth scroll animations
- 📅 WhatsApp booking integration
- 🗺️ Google Maps integration
- 🔍 SEO optimized (Open Graph, Schema.org)
- 📊 Google Analytics ready

---

## Quick Start

### Prerequisites

- Node.js v20.11.0 (see `.nvmrc`)
- npm or bun

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open: http://localhost:8080/somaholistic.studio/
```

### Build

```bash
# Production build
npm run build

# Preview production build
npm run preview

# Test with correct base path
npm run test:local
```

---

## Project Structure

```
somaholistic.studio/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts
│   ├── lib/           # Utilities and constants
│   ├── data/          # Business data
│   └── assets/        # Images and static files
├── public/            # Public static assets
├── docker/            # Docker configuration
└── [config files]
```

---

## Deployment

Automatic deployment via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions builds the site
3. Deploys to GitHub Pages (~2-3 minutes)
4. Live at: https://aslavchev.github.io/somaholistic.studio/

---

## Docker Support

```bash
cd docker
docker-compose up --build

# Access at: http://localhost:8080
```

See `docker/README.md` for details.

---

## Development Standards

- **Code Style:** EditorConfig + ESLint
- **Node Version:** v20.11.0 (locked via .nvmrc)
- **TypeScript:** Strict mode enabled
- **Git:** Conventional commits recommended

---

## Performance

- Build time: ~6 seconds
- Bundle size: 100 KB gzipped
- Lighthouse score: 90+ (all metrics)
- Zero npm vulnerabilities

---

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

Proprietary - SOMA Wellness Studio

---

## Contact

**Client:** SOMA Wellness Studio
**Location:** Sofia, Bulgaria
**Website:** [somaholistic.studio](https://aslavchev.github.io/somaholistic.studio/)

---

Built with ❤️ for wellness and holistic therapy.
