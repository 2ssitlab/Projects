# AGENTS.md

## Cursor Cloud specific instructions

This repository contains the **Zach's Computer Services** marketing site — a Next.js (React) app, deployable via Hostinger Git integration.

### Running the Next.js app

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

### Build (for Hostinger / production)

```bash
npm run build
npm start
```

### Contact form (Resend)

The contact form sends email via [Resend](https://resend.com). Set these in `.env.local` (and in Hostinger env vars for production):

- `CONTACT_EMAIL` — address that receives form submissions
- `RESEND_API_KEY` — your Resend API key

Copy `.env.example` to `.env.local` and fill in values. Do not commit `.env.local`.

### Project structure

- `app/` — App Router: `layout.tsx`, `page.tsx` (home), and routes for `/services`, `/about`, `/faq`, `/contact`, `/privacy-policy`
- `app/globals.css` — Design system (CSS variables, dark mode, components)
- `app/api/contact/route.ts` — POST handler for contact form; sends email via Resend
- `components/` — `Header`, `Footer`, `ScrollTop`, `ClientScripts` (sticky header, mobile menu, FAQ accordion/filter/search, scroll animations, theme toggle)

### Key notes

- Phosphor Icons and Google Fonts (Inter, Space Grotesk) are loaded from CDN in the root layout.
- Dark/light theme is stored in `localStorage` (`zcs-theme`) and applied via `data-theme` on `<html>`.
