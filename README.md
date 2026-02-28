# Zach's Computer Services

Marketing site for **Zach's Computer Services** — Tampa Bay computer repair and IT support. Built with Next.js for deployment on Hostinger (Git integration).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The contact form uses [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set:

- `CONTACT_EMAIL` — where form submissions are sent
- `RESEND_API_KEY` — your Resend API key

## Deploy (Hostinger)

1. Connect this repo to Hostinger via Git deployment.
2. Set environment variables in Hostinger: `CONTACT_EMAIL`, `RESEND_API_KEY`.
3. Build command: `npm run build`
4. Start command: `npm start` (or as required by Hostinger for Next.js)

## Build

```bash
npm run build
npm start
```
