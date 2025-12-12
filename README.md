# SOMA Holistic Studio

[![Live](https://img.shields.io/badge/live-somaholistic.studio-success)](https://somaholistic.studio)
[![React](https://img.shields.io/badge/React-18.3-61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6)](https://typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF)](https://vitejs.dev/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-94%2B-success)](https://developers.google.com/web/tools/lighthouse)

> Professional wellness and holistic therapy platform | Sofia, Bulgaria

---

## 🚀 Quick Start

```bash
git clone https://github.com/aslavchev/somaholistic.studio.git
cd somaholistic.studio
npm install
npm run dev  # → http://localhost:8080/somaholistic.studio/
```

**Requirements:** Node 20.11.0 (see `.nvmrc`) | npm 10+

---

## 📦 Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18.3 + TypeScript 5.8 |
| **Build** | Vite 7.2 |
| **UI** | Tailwind CSS + shadcn/ui + Radix UI |
| **Routing** | React Router 6.30 |
| **Forms** | React Hook Form + Zod |
| **Hosting** | Cloudflare Pages (Global CDN) |
| **Integration** | Google Calendar API, WhatsApp, GA4 |

---

## ✨ Features

- 🌐 Bilingual (Bulgarian/English)
- 📱 Fully responsive (mobile-first)
- 📅 Smart booking wizard → WhatsApp
- 🖼️ Image gallery (WebP optimized, 72% reduction)
- ⚡ Lighthouse 90+ scores (all metrics)
- 🔒 CSP Phase 2 security (nonce-based)
- ♿ WCAG 2.1 Level AA accessible
- 🗺️ Google Maps integration

---

## 💻 Commands

```bash
npm run dev          # Dev server (http://localhost:8080/somaholistic.studio/)
npm run build        # Production build
npm run build:dev    # Dev build (no minification)
npm run preview      # Preview production build
npm run lint         # Lint code
npm run test:local   # Test with correct base path
```

---

## 🏗️ Architecture

**System Design:** Client-side SPA (zero backend, zero ops cost)

```
Client (Browser) 
  ↓ HTTPS/TLS 1.3
Cloudflare Pages (CDN + Edge)
  ↓ Private GitHub
Source Control (GitHub)

External: Google Calendar API | WhatsApp | GA4
```

**Key Decisions:**
- [Infrastructure Decision](docs/current/infrastructure-decision-2025-12-12.md) - Why Cloudflare Pages
- [Calendar Integration](docs/current/calendar-integration-decision-2025-12-12.md) - Why Google Calendar API

---

## 📁 Structure

```
somaholistic.studio/
├── src/
│   ├── components/       # React components
│   ├── pages/            # Route pages
│   ├── data/             # Static data (services, contact)
│   ├── utils/            # Utilities
│   ├── hooks/            # Custom hooks
│   ├── assets/           # Images (WebP optimized)
│   └── lib/              # Third-party configs
├── docs/
│   ├── current/          # Active docs (decisions, sessions)
│   ├── specifications/   # Technical specs
│   ├── guides/           # User guides (for Mari)
│   └── qa/               # QA reports
├── scripts/              # Build scripts (convert-to-webp.cjs)
├── .github/              # GitHub config (CODEOWNERS, workflows)
└── public/               # Static assets
```

---

## 🔧 Environment

Copy `.env.example` → `.env.local`:

```env
VITE_GOOGLE_CALENDAR_API_KEY=your_api_key
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## ⚡ Performance

| Metric | Score | Target |
|--------|-------|--------|
| Performance | 94 | 90+ |
| Accessibility | 100 | 95+ |
| Best Practices | 100 | 95+ |
| SEO | 100 | 95+ |

**Optimizations:**
- WebP images (16.5MB → 4.6MB)
- Lazy loading (below fold)
- GPU acceleration
- Code splitting
- Global CDN (200+ locations)

---

## 🚀 Deployment

**Automatic (Cloudflare Pages):**

```bash
git push origin main
# → Auto-builds & deploys in ~2 minutes
```

**Branch Previews:**

```bash
git push origin experiment/feature
# → Creates preview URL: experiment-feature.somaholistic.pages.dev
```

---

## 🔒 Security

**Report vulnerabilities:** See [SECURITY.md](SECURITY.md) (not public issues)

**Features:**
- CSP Phase 2 (nonce-based, no unsafe-inline)
- HTTPS-only (HSTS enforced)
- No inline scripts
- Zero npm vulnerabilities

---

## 📚 Documentation

- [Current Status](docs/current/CURRENT-STATUS-2024-11-26.md) - Project overview
- [Agent Quick Start](docs/current/AGENT-QUICK-START.md) - For AI agents
- [Session Notes](docs/current/) - Development sessions
- [Architecture Decisions](docs/current/) - ADRs with CEO consensus
- [User Guides](docs/guides/mari/) - For Mari

---

## 📊 Status

**Version:** 1.3.2 (Production)
**Last Deploy:** 2025-12-12
**Domain:** somaholistic.studio
**Cost:** $32/year (locked pricing)

---

## 📝 License

**Proprietary** - SOMA Holistic Studio. See [LICENSE](LICENSE).

---

<div align="center">

**Built with 🌿 for wellness and holistic therapy**

[somaholistic.studio](https://somaholistic.studio)

</div>
