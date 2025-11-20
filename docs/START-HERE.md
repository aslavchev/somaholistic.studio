# SOMA STUDIO - Quick Start Guide

**Last Updated:** November 2024
**Project Status:** Ready for Lovable implementation

---

## For New Team Members / AI Agents

Read these files in order for full context:

1. **START-HERE.md** (this file) - Quick overview
2. **MARI-REVIEW-SUMMARY.md** - Non-technical summary for client
3. **LOVABLE-5STAR-PROMPT.md** - Implementation prompts (24 fixes)
4. **DEV-IMPROVEMENTS.md** - Technical audit findings

---

## Project Overview

**Client:** Mari - SOMA Wellness Studio
**GitHub Repo:** https://github.com/aslavchev/somaholistic.studio
**Local Path:** D:\repositories\mari-potfolio\somaholistic.studio
**Website:** somaholistic.studio (deploying via GitHub Pages)
**Tech Stack:** Vite + React + TypeScript + Tailwind CSS + shadcn/ui
**Development:** Local fixes → GitHub → GitHub Pages
**Languages:** Bulgarian (primary) + English

---

## Current Status

### ✅ Completed
- Initial architecture review (4/5)
- UX review v1 (3.89/5) and v2 (4.5/5)
- Phase 1-3 critical fixes applied
- 4 professional branded images provided
- Logo design in progress
- Google Maps listing confirmed (5.0 rating)

### ⏳ Waiting For
- Mari's real therapist photo (critical)
- Logo PNG export (no app UI)
- Business hours confirmation
- Services/prices verification

### 🔧 Ready to Apply
- 24 prompts in LOVABLE-5STAR-PROMPT.md
- 14 critical fixes
- 10 UX/polish improvements

---

## Key Decisions Made

| Decision | Choice | Reason |
|----------|--------|--------|
| Booking confirmation | WhatsApp manual reply | Free, personal, no setup |
| Phone input | Country code + auto-format | Better UX, fewer errors |
| Images | Wait for real photos | Trust factor for wellness |
| SEO | Structured data + GMB | Free, high impact |
| Security | Form sanitization + CSP | Standard practice |

---

## File Structure

```
docs/
├── START-HERE.md              ← You are here
├── MARI-REVIEW-SUMMARY.md     ← For Mari (non-technical)
├── LOVABLE-5STAR-PROMPT.md    ← 24 implementation prompts
├── LOVABLE-5STAR-SIMPLE.txt   ← WhatsApp/Drive friendly
├── DEV-IMPROVEMENTS.md        ← Technical audit (27 issues)
├── UX-REVIEW-V2.md            ← UX analysis (4.5/5)
├── ARCHITECTURE-REVIEW.md     ← Code architecture (4/5)
├── CODE-IMPROVEMENTS.md       ← Code fixes from Phase 1
└── LOVABLE-FIXES-PROMPT.md    ← Phase 1-3 prompts (applied)

pictures/
├── images/                    ← 4 professional photos (ready)
└── colors-logos/              ← Logo screenshots (need export)

src/
├── components/                ← React components
├── pages/                     ← Index, NotFound
├── lib/                       ← constants.ts (contact info)
└── contexts/                  ← LanguageContext (BG/EN)
```

---

## Critical Context

### 1. Booking Flow
- Form → WhatsApp → Manual confirmation (2 hours)
- No automated calendar/email yet
- Phone: `[+][359▼][888 333 424]` (auto-format)

### 2. Known Issues
- Desktop "Виж повече" button doesn't work (Prompt 0.1)
- 4 npm vulnerabilities (Prompt 0.5)
- Missing Error Boundary (Prompt 0.7)
- No CSP headers (Prompt 0.10)

### 3. Business Info
- **Address:** ул. 409-та 13, Манастирски Ливади Изток, София
- **Phone:** +359 888 333 424
- **Google Maps:** https://maps.app.goo.gl/WvbNBxrZhq6E9xfP8
- **Instagram:** @somaholisticstudio

### 4. Brand Colors
- Primary: #2C4E37 (dark green)
- Secondary: #C58B07 (gold)
- Font: Garet

---

## Next Steps

### Immediate (After Mari Provides Photos)
1. Apply Critical Fixes (Prompts 0.1-0.14) in Lovable
2. Replace placeholder therapist photo
3. Add logo PNG to header
4. Test booking flow end-to-end

### Before Launch
- Run Lighthouse audit (target 90+)
- Cross-browser testing
- Mobile device testing
- Verify WhatsApp messages work

### Post-Launch (Optional)
- Add email confirmations (EmailJS ~$5/mo)
- Google Analytics setup
- Facebook Pixel
- Instagram feed widget

---

## Quick Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Fix security vulnerabilities
npm audit fix

# Check for issues
npm run lint
```

---

## Contact Points

- **Client:** Mari (SOMA STUDIO owner)
- **Development:** Lovable.dev platform
- **Deployment:** GitHub Pages
- **Domain:** somaholistic.studio (to be connected)

---

## Token-Saving Tips for AI Agents

**Don't re-read these unless needed:**
- ARCHITECTURE-REVIEW.md (initial review, already done)
- UX-UI-REVIEW.md (v1, superseded by v2)
- front-end-spec.md (reference only)
- LOVABLE-PROMPT.md (old, superseded by 5-star version)
- LOVABLE-FIXES-PROMPT.md (Phase 1-3, already applied)

**Always check first:**
- This file (START-HERE.md) for current status
- LOVABLE-5STAR-PROMPT.md for what needs doing
- MARI-REVIEW-SUMMARY.md for client expectations

---

**Questions?** Check MARI-REVIEW-SUMMARY.md or ask the user.
