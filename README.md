# TravelAgency Elixflare — Minimal Tours Site (Next.js 14 + Tailwind + TS)

A simple, uncluttered brochure site for a Port Elizabeth (Gqeberha) travel agency.

## Quickstart

```bash
npm install
npm run dev
```

> If you see a **“Next.js outdated”** notice, it's just a warning. Versions are **pinned intentionally** for stability.

## Architecture (fixed)

```
app/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
  manifest.json
  globals.css
  (optional) about/page.tsx
  (optional) contact/page.tsx
  (required) tours/page.tsx
components/
  layout/{Header.client.tsx, Footer.tsx}
  sections/{Hero.tsx, ValueProps.tsx, Features.tsx, PortfolioOrMenu.tsx, Testimonials.tsx, FAQ.tsx, CTA.tsx}
  ui/{Button.tsx, Card.tsx, Container.tsx, Badge.tsx, Input.tsx}
  widgets/{Carousel.client.tsx, Accordion.tsx, Tabs.tsx, Toast.client.tsx, Modal.client.tsx, QrCode.client.tsx, MapEmbed.client.tsx, Reveal.client.tsx}
data/site.json
lib/utils.ts
public/{favicon.ico, logo/logo.png, og-image.png, icons/*}
```

## Minimal Navbar Rule

Only **3–4 items** are rendered, in this order if present: **Home**, **Tours** (or Services/All Tours), **About**, **Contact**.  
If `data/site.json` has more items, **extras are ignored automatically**.

## Client vs Server

- Any component using `useState`, `useEffect`, or DOM events lives in its own `*.client.tsx` file with `'use client'` at line 1.
- Server components contain **no hooks**.

## Customize Content & Theme

Edit **`data/site.json`**:

- `theme` — brand/accent/bg/fg colors (applied via CSS variables on `<body>`).
- `layout` — section spacing and heights.
- `nav` — labels + hrefs (extras ignored).
- `hero`, `valueProps`, `features`, `tours`, `testimonials`, `faq` — homepage and list data.
- `contact` — phone, WhatsApp, email, address, and `mapEmbedSrc`/`mapQuery` (**MapEmbed** uses this).
- `routes.toursRoot` — QR destination (`/tours` by default).
- `org` — brand name/domain/social.

**Prices** should be in **rounded ZAR** (e.g., `ZAR 1,800`).

## Favicon/Logo/Images

Replace files in `public/`:
- `public/favicon.ico` (must exist).
- `public/logo/logo.png` (used in Header + Footer).
- `public/og-image.png` and images under `public/images/`.

## SEO

- `metadataBase` is set to `https://TravelAgency.elixflare.com`.
- `robots.ts`, `sitemap.ts`, and `manifest.json` are included.
- Canonical URLs are set for key routes.

## Lighthouse Targets

Aim for **≥90** across Performance / Accessibility / Best Practices / SEO by keeping media light and content uncluttered.
