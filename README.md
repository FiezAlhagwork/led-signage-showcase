# Alnoor Advertising — Website

Bilingual (Arabic / English) marketing website for **Alnoor Advertising**, a signage
company in Damascus, Syria. It presents the company's services — illuminated box
letters, outdoor signage and digital printing — with a project gallery and a
contact form that submits through WhatsApp.

- **Stack:** React 19 + TypeScript + Vite 8 + Tailwind CSS v4
- **Rendering:** Client-side single page application (no server, no database)
- **Languages:** Arabic (default, RTL) and English (LTR), each on its own URL

---

## Table of contents

1. [Requirements](#1-requirements)
2. [Getting started](#2-getting-started)
3. [Available scripts](#3-available-scripts)
4. [Libraries used and why](#4-libraries-used-and-why)
5. [Project structure](#5-project-structure)
6. [Code conventions (read before editing)](#6-code-conventions-read-before-editing)
7. [How to do common tasks](#7-how-to-do-common-tasks)
8. [How the site is built](#8-how-the-site-is-built)
9. [Deployment](#9-deployment)
10. [TODO after buying the domain](#10-todo-after-buying-the-domain)
11. [Known limitations](#11-known-limitations)

---

## 1. Requirements

| Tool | Version | Notes |
| --- | --- | --- |
| **Node.js** | **22.12 or newer** | Required by Vite 8. Also, the SEO script uses Node's TypeScript type-stripping, which needs Node 22.6+. Developed and tested on Node 22.17. |
| **npm** | 10 or newer | Comes with Node. Tested on npm 11.14. |

Check what you have:

```bash
node -v
npm -v
```

No database, no API keys, no `.env` file. Everything the site shows is stored in
the repository as static data.

---

## 2. Getting started

```bash
# 1. install dependencies (only needed the first time, or after git pull)
npm install

# 2. start the development server
npm run dev
```

Vite prints a local address, usually **http://localhost:5173**. Open it in a
browser. The page reloads automatically whenever you save a file.

The site redirects `/` to `/ar` (Arabic) or `/en` depending on your saved
preference and browser language, so the first URL you land on will look like
`http://localhost:5173/ar`.

To stop the server press `Ctrl + C` in the terminal.

---

## 3. Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload. **This is what you use while working.** |
| `npm run build` | Produces the production site in the `dist/` folder. Runs three steps: regenerates `sitemap.xml` + `robots.txt`, type-checks the whole project, then bundles and minifies. **If type-checking fails, the build stops** — this is intentional. |
| `npm run preview` | Serves the already-built `dist/` folder locally so you can test the production build before deploying. Run `npm run build` first. |
| `npm run lint` | Runs ESLint over the project and reports code problems. |
| `npm run images:webp` | Converts every `.jpg` / `.png` in `src/assets/` to WebP, resizes anything wider than 1920px, and deletes the original. Safe to re-run — it skips files that are already converted. See [Adding images](#adding-a-photo-to-the-gallery). |
| `npm run seo:files` | Regenerates `public/sitemap.xml` and `public/robots.txt` from `src/data/seoData.ts`. Runs automatically as part of `npm run build`, so you rarely need it by hand. |
| `npm run seo:og` | Regenerates `public/og-image.jpg`, the preview image shown when someone shares a link on WhatsApp or Facebook. Re-run it if the logo or the source photo changes. |

---

## 4. Libraries used and why

### Runtime dependencies

| Library | Why it is here |
| --- | --- |
| **react** / **react-dom** (19) | The UI framework. Version 19 is used together with the React Compiler, which memoises components automatically — **do not add `useMemo`, `useCallback` or `React.memo` by hand**, the compiler does it. |
| **react-router-dom** (7) | Client-side routing. Handles the `/ar/...` and `/en/...` URL structure. |
| **react-router-hash-link** | Smooth scrolling to a section on the home page from the footer links (for example `/ar#about`). |
| **tailwindcss** (4) + **@tailwindcss/vite** | All styling. There are no `.module.css` files — styling is done with utility classes directly in the JSX. Theme colours are defined once in `src/index.css`. |
| **framer-motion** (12) | All animations: section reveals on scroll, page transitions, image lightbox fade, slide transitions. |
| **swiper** (14) | The image sliders: the hero background, the signage page slider, and the gallery's horizontal scroll strip. |
| **lucide-react** | Every icon in the site. It is the **only** icon library — do not add another one. |

### Development dependencies

| Library | Why it is here |
| --- | --- |
| **vite** (8) | Build tool and dev server. |
| **typescript** (6) | Type checking. Strict mode with `noUnusedLocals` and `noUnusedParameters` on. |
| **@vitejs/plugin-react** + **babel-plugin-react-compiler** + **@rolldown/plugin-babel** | Enables the React Compiler during the build. |
| **eslint** + **typescript-eslint** + React plugins | Linting rules. |
| **sharp** | Image processing, used **only** by the `images:webp` and `seo:og` scripts. It never ships to the browser. |
| **@types/\*** | TypeScript type definitions for the libraries above. |

---

## 5. Project structure

```
alnoor/
├── index.html              Page shell + all static SEO tags (see note below)
├── vite.config.ts          Vite config: React Compiler, Tailwind, "@/" path alias
├── vercel.json             Tells the host to serve index.html for every URL
├── tsconfig*.json          TypeScript configuration
├── eslint.config.js        Lint rules
│
├── public/                 Served as-is at the site root, never processed
│   ├── robots.txt          GENERATED — do not edit by hand
│   ├── sitemap.xml         GENERATED — do not edit by hand
│   ├── og-image.jpg        GENERATED — social share preview (1200x630)
│   ├── favicon.png         Browser tab icon
│   ├── apple-touch-icon.png
│   └── site.webmanifest    Name/colours when added to a phone home screen
│
├── scripts/                Node scripts, run manually via npm (not part of the site)
│   ├── to-webp.mjs         Image conversion
│   ├── gen-seo-files.mjs   sitemap.xml + robots.txt generator
│   └── gen-og-image.mjs    Social share image generator
│
└── src/
    ├── main.tsx            Entry point — mounts React into index.html
    ├── App.tsx             Routes, language routing, page layout, lazy loading
    ├── index.css           Tailwind import + theme colours + a small helper class
    │
    ├── assets/             Images imported by components (56 WebP files)
    │
    ├── locales/            ALL user-visible text
    │   ├── en.json         English
    │   └── er.json         Arabic
    │
    ├── context/
    │   ├── LanguageContext.tsx   The language provider
    │   └── useLanguage.ts        The hook + helpers (useLocalizedPath, etc.)
    │
    ├── types/              ALL TypeScript types — one file per section
    │   ├── index.ts        Barrel: re-exports everything, defines nothing
    │   └── ui.ts, gallery.ts, contact.ts, seo.ts, ...
    │
    ├── data/               ALL content data — arrays and config objects
    │   ├── galleryData.ts, servicesData.ts, navbarData.ts, seoData.ts, ...
    │
    ├── components/
    │   ├── layout/         Navbar, Footer
    │   ├── ui/             Reusable pieces: Button, Card, SectionHeader,
    │   │                   ImageLightbox, FormField, PaginationDots, ...
    │   ├── home/           Home page sections + their cards
    │   ├── animation/      FadeIn, StaggerContainer, StaggerItem
    │   └── seo/            Seo.tsx — updates page title/description per route
    │
    └── pages/              One file per route
        ├── Home.tsx, Gallery.tsx, Sign.tsx, BoxLetters.tsx,
        └── DigitalPrinting.tsx, About.tsx, Communication.tsx, NotFound.tsx
```

> **Why SEO tags are duplicated in `index.html` and in `Seo.tsx`:** WhatsApp,
> Facebook and Twitter do not run JavaScript. They only read the raw HTML, so the
> tags in `index.html` are the only version they will ever see. `Seo.tsx` updates
> those same tags at runtime so that each page gets its own title and description
> for Google and for the browser tab. **Both are needed.**

---

## 6. Code conventions (read before editing)

These four rules are applied consistently across the whole project. Please keep
them — breaking them will make the code inconsistent and will usually cause a
type error anyway.

### 6.1 All text lives in the locale files

Never write user-visible text inside a component. That includes button labels,
headings, `alt` text, `aria-label`, `title` attributes and the 404 page.

```tsx
// wrong
<button>Send</button>

// right
<button>{t.contact.sendBtn}</button>
```

`en.json` and `er.json` **must always have exactly the same key structure**. If
you add a key to one, add it to the other in the same place.

Accessibility text (`alt`, `aria-label`) lives in the `a11y` namespace.

### 6.2 All types live in `src/types/`

No `interface` or `type` declarations inside component, page or data files.
Each section has its own file (`types/gallery.ts` holds everything gallery
related). Import them through the barrel:

```ts
import type { GalleryItem } from "@/types";
```

### 6.3 All data lives in `src/data/`

No content arrays inside components. A component receives data, it does not
define it. Data files import their types from `@/types` and never declare them.

When data needs text, store a **typed translation key** instead of the text
itself, so TypeScript catches a wrong key:

```ts
{ path: "/sign", labelKey: "sign" }   // labelKey is typed as keyof typeof en.nav
```

### 6.4 Components are typed on the parameter, not with `React.FC`

```tsx
// wrong (old style)
const Button: React.FC<ButtonProps> = ({ children }) => ...

// right
const Button = ({ children }: ButtonProps) => ...
```

There is no `React` namespace anywhere in the project. Import what you need by
name: `import { useState, type FormEvent } from "react"`.

### 6.5 Hover effects only on things that actually do something

If clicking an element does nothing, it must not have a hover effect or
`cursor-pointer`. The `Card` component enforces this automatically — it only adds
hover styling when it receives a `to` or an `onClick`.

---

## 7. How to do common tasks

### Adding a photo to the gallery

1. Put the image file in `src/assets/`.
2. Run `npm run images:webp` to convert and compress it.
3. Open `src/data/galleryData.ts`, import the file and add one entry:

```ts
import img11 from "@/assets/my-new-photo.webp";

// ...inside the array:
{ id: "11", image: img11, categoryKey: "badgeSigns" },
```

Available categories: `badgeBoxLetters`, `badgeSigns`, `badgePrinting`.
**You do not need to touch the translation files** — the image's `alt` text comes
from the category.

### Changing phone number, email or WhatsApp

Edit `src/data/contactData.ts`. It is the single source of truth — the footer and
the contact page both read from it.

> The **address** is in the locale files (`footer.address`,
> `contact.addressText`) because it is written differently in each language.

### Changing any text on the site

Find the key in `src/locales/er.json` (Arabic) and change the value. Then change
the same key in `en.json`. Never edit text inside `.tsx` files.

### Adding a new page

1. Create `src/pages/MyPage.tsx` with a `export default`.
2. Add a lazy import and a `<Route>` in `src/App.tsx`, inside the `:lang` route.
3. Add a nav entry in `src/data/navbarData.ts` (add the label to `nav` in both
   locale files).
4. Add an entry in `src/data/seoData.ts` and a `seo.pages.<key>` block with a
   title and description in **both** locale files.
5. Run `npm run build` — the sitemap updates itself.

### Changing theme colours

The palette lives in the `@theme` block of `src/index.css` — nine tokens, and
almost the whole site follows from them:

| Token | Role |
| --- | --- |
| `--color-primary` | brand orange — headings, links, buttons, icons |
| `--color-primary-hover` | darker orange for hover states |
| `--color-primary-soft` | lighter orange — gradient ends, counters |
| `--color-accent` | brand violet — accent bands, glows |
| `--color-accent-soft` | lighter violet for gradients and hovers |
| `--color-dark-bg` | page background |
| `--color-surface-dark` | page roots and section bands |
| `--color-surface` | cards and sections |
| `--color-surface-elevated` | cards sitting on a dark surface |

**Contrast rule:** the orange on `--color-accent` measures 3.07:1, which fails
WCAG AA for body text. Never put small orange text on `bg-accent` — use white
there, and keep orange for large headings and buttons. The surface tokens are
all dark enough that orange clears 4.5:1 on them.

Four files outside `src/` hardcode the background colour and must be kept in
sync by hand whenever `--color-dark-bg` changes:

1. `index.html` — the `theme-color` meta tag.
2. `public/site.webmanifest` — `background_color` and `theme_color`.
3. `scripts/gen-og-image.mjs` — the two gradient stops.
4. `public/og-image.jpg` — regenerate with `npm run seo:og` after step 3
   (it is **not** part of `npm run build`).

### Brand mark and icons

There is one brand image: `src/assets/alnoor_icon.webp` (256×256, square). It is
imported directly by the navbar, the footer and the digital-printing badge, and
`scripts/gen-og-image.mjs` composites it into the share image.

Everything under `public/` is derived from that same mark on a `#16112E`
background, so re-export all of them together if the mark or the background
colour changes:

| File | Size | Used for |
| --- | --- | --- |
| `favicon.ico` | 16→256, six sizes | what Google's crawler fetches from the site root, and what shows next to the search result |
| `favicon.png` | 32×32 | browsers that prefer PNG |
| `apple-touch-icon.png` | 180×180 | iOS home-screen icon |
| `logo.png` | 512×512 | the `logo` field in the JSON-LD `LocalBusiness` block |
| `og-image.jpg` | 1200×630 | WhatsApp/Facebook/Twitter share preview — run `npm run seo:og` |

The mark is square, so any `<img>` showing it needs `w-auto object-contain` and
a height class — never a fixed width, which stretches it.

---

## 8. How the site is built

Running `npm run build` does three things in order:

1. **`npm run seo:files`** — reads the route list from `src/data/seoData.ts` and
   writes `public/sitemap.xml` and `public/robots.txt`. This is why the route list
   only exists in one place.
2. **`tsc -b`** — type-checks everything. Any type error stops the build.
3. **`vite build`** — bundles, minifies and writes everything to `dist/`.

The output is **static files only**. There is no server-side code. `dist/` can be
uploaded to any static host.

**Code splitting:** each page is bundled separately, so a visitor to the home page
does not download the code for the other pages. The initial JavaScript download is
roughly 280 KB.

---

## 9. Deployment

Upload the contents of `dist/` to any static host.

**Critical hosting requirement:** the site uses client-side routing, so the server
must return `index.html` for **every** URL. Without this, opening
`yoursite.com/ar/sign` directly, or pressing F5 on it, returns a 404.

- **Vercel** — already configured in `vercel.json`. Nothing to do.
- **Netlify** — create a file `public/_redirects` containing:
  `/* /index.html 200`
- **Apache** — add a `.htaccess` with `FallbackResource /index.html`
- **Nginx** — `try_files $uri $uri/ /index.html;`

---

## 10. TODO after buying the domain

The site is finished, but **it will not be indexed correctly by Google until the
real domain replaces the placeholder**. The placeholder is `https://example.com`.

### Step 1 — Replace the domain in two places

**a) `src/data/seoData.ts`, line 10:**

```ts
export const SITE_URL = "https://yourdomain.com";   // no trailing slash
```

**b) `index.html`** — 8 occurrences of `https://example.com`, on lines 22, 43, 44,
61, 84, 88, 89 and 90. A find-and-replace across the file is fine.

> These two must match. `seoData.ts` feeds the sitemap, the canonical links and the
> per-page tags; `index.html` feeds the crawlers that do not run JavaScript.

### Step 2 — Rebuild

```bash
npm run build
```

This regenerates `sitemap.xml` and `robots.txt` with the real domain. Verify by
opening `dist/sitemap.xml` — it should list 12 URLs, all on the new domain.

### Step 3 — Deploy, then verify the share preview

Send the link to yourself on WhatsApp. You should see the preview image with the
logo, the page title and the description. If not, use the
[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to clear
the cache.

### Step 4 — Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add the domain and verify ownership (usually a DNS record).
3. Submit the sitemap: `https://yourdomain.com/sitemap.xml`
4. After a few days, check the report for alternate language versions.

### Step 5 — Google Business Profile

Create a free profile at [business.google.com](https://business.google.com) with
the same name, address and phone number used in the site. **For a local business
this matters more for search visibility than anything in the code.** Make sure the
details exactly match the `LocalBusiness` block at the bottom of `index.html`.

### Step 6 — Fix the map (important)

`src/pages/Communication.tsx` still embeds a Google Maps iframe pointing to
**Melbourne, Australia** — it was placeholder markup and was never replaced. It now
contradicts the address in the structured data, which hurts local search.

To fix: open Google Maps, find the real location, click **Share → Embed a map**,
copy the `src` value, and replace the `src` on the `<iframe>`. Also update
`mapLink` in `src/data/contactData.ts`.

### Step 7 — Add social media links

In `index.html`, the `"sameAs": []` field in the JSON-LD block is empty. Add the
Facebook / Instagram page URLs:

```json
"sameAs": ["https://facebook.com/...", "https://instagram.com/..."]
```

### Step 8 — Optional but recommended

- **A proper square favicon.** The current one is generated from the wide logo, so
  it looks small at 32×32. A purpose-designed square icon (a letter or a symbol
  from the logo) would look much better.
- **Replace the gallery photos.** The current 10 are placeholders taken from
  elsewhere in the site.

---

## 11. Known limitations

These are deliberate decisions, documented so nobody has to rediscover them.

| Limitation | Explanation |
| --- | --- |
| **Share previews are the same for every page** | WhatsApp and Facebook do not run JavaScript, so they always read the tags in `index.html`. Giving each page its own preview would require pre-rendering the site at build time — a significant change that was intentionally not done. |
| **The contact form does not send email** | Submitting opens WhatsApp with the message pre-filled. There is no backend, no database and no email service. |
| **The digital printing page is hidden** | `/ar/digital-printing` works and is reachable by URL, but it is deliberately not in the navigation menu and not in the sitemap. See `hidden: true` in `navbarData.ts` and `unlisted: true` in `seoData.ts`. |
| **Some translated text is not displayed anywhere** | The locale files contain a specifications list for each box-letters product, an email row for the contact page, and a second "our vision" slide for the About page. The text is written and translated but no UI shows it yet. These are unbuilt features, not bugs. |
| **`npm audit` reports vulnerabilities** | They come from `react-router-dom` and from build-time packages, not from anything shipped to visitors. Update `react-router-dom` when convenient. |

---

## Quick reference

```bash
npm install          # first time only
npm run dev          # work on the site
npm run build        # produce dist/ for upload
npm run preview      # test the production build locally
npm run lint         # check code quality
npm run images:webp  # after adding new images
```
