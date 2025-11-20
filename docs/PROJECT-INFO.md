# SOMA STUDIO - Project Documentation

## Project Overview

**SOMA STUDIO** is a modern, single-page web application for a Bulgarian holistic wellness and massage therapy studio. The website showcases therapeutic services inspired by Eastern traditions and provides an elegant platform for booking appointments.

## Live Information

- **Preview URL**: https://preview--feelgood-glowup-hub.lovable.app/
- **Lovable Project**: https://lovable.dev/projects/a3e2d0ca-4209-481c-8768-216b1437aedf
- **GitHub Repository**: https://github.com/aslavchev/feelgood-glowup-hub
- **Contact Phone**: 0888 333 424

## Technology Stack

### Core Framework
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing

### UI/Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React component library built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Icon library
- **next-themes** - Theme management

### State Management & Data Fetching
- **TanStack React Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Form handling
- **Zod 3.25.76** - Schema validation

### Package Manager
- **Bun** - Fast JavaScript runtime and package manager

## Project Structure

```
somaholistic.studio/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── Services.tsx        # Services listing
│   │   ├── ServiceCard.tsx     # Individual service card
│   │   ├── Contact.tsx         # Contact form/info
│   │   ├── Footer.tsx          # Site footer
│   │   └── ui/                 # shadcn/ui components
│   ├── pages/
│   │   ├── Index.tsx           # Main landing page
│   │   └── NotFound.tsx        # 404 page
│   ├── assets/                 # Images and media
│   └── App.tsx                 # Root component
├── public/                     # Static assets
├── docs/                       # Project documentation
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

## Services Offered

### 1. SOMA Ритуал за благоденствие (Featured)
- **Duration**: 90 minutes
- **Price**: 150 BGN
- **Description**: Most popular holistic therapy for complete restoration and relaxation

### 2. Традиционен Тай Масаж
- **Duration**: 60 minutes / 90 minutes
- **Price**: 100 BGN / 130 BGN
- **Description**: Deep restorative therapy combining gentle pressure, stretching, and rhythmic movement

### 3. Класически масаж
- **Duration**: 60 minutes
- **Price**: 90 BGN
- **Description**: Traditional massage technique for relaxation and muscle tone restoration

### 4. Частичен масаж на гръб
- **Duration**: 30 minutes
- **Price**: 50 BGN
- **Description**: Focused back, shoulder, and neck massage for quick tension relief

### 5. Ароматерапевтичен масаж
- **Duration**: 60 minutes
- **Price**: 100 BGN
- **Description**: Relaxing massage using natural essential oils

### 6. Енергийна терапия с техники от тайландски масаж
- **Duration**: 60 minutes / 90 minutes
- **Price**: 110 BGN / 140 BGN
- **Description**: Specialized therapy combining traditional Thai massage with focused energy healing

### 7. Подмладяващ масаж на лице
- **Duration**: 30 minutes
- **Price**: 50 BGN
- **Description**: Gentle rejuvenating facial therapy

## Development

### Prerequisites
- Node.js & npm (or Bun)

### Installation
```bash
cd somaholistic.studio
npm install
# or
bun install
```

### Development Server
```bash
npm run dev
# or
bun run dev
```

### Build
```bash
npm run build
# or
bun run build
```

### Lint
```bash
npm run lint
# or
bun run lint
```

## Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels and semantic HTML
- **Type Safety**: Full TypeScript implementation
- **Component Library**: Professional UI components from shadcn/ui
- **Modern Stack**: Latest React ecosystem tools
- **Optimized**: Vite for fast builds and HMR
- **Form Handling**: React Hook Form with Zod validation
- **Theme Support**: Dark/light mode capability
- **SEO Friendly**: Proper meta tags and semantic structure

## Design System

- **Primary Colors**: Custom gradient from primary-light to primary
- **Typography**: Light/bold font weights for hierarchy
- **Spacing**: Consistent padding and margins
- **Components**: Card-based service presentation
- **Images**: High-quality spa/wellness photography
- **CTA**: Prominent phone booking button

## Language

- **Bulgarian** (Български) - Primary language for content

## Deployment

Built with Lovable, can be deployed via:
- Lovable's one-click deployment
- Custom domain support available
- GitHub sync for version control

## Portfolio Context

This project is part of Mari's portfolio showcasing:
- Modern React development skills
- TypeScript proficiency
- UI/UX design implementation
- Component-based architecture
- Responsive web design
- Professional client work
