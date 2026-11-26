# Repository guidance

- This is a framework-free static site: root `*.html` files are the six page entrypoints; there is no package manifest, build step, backend, or automated test suite.
- Preview with any static-file server from the repository root (for example, `python -m http.server 8000`), then open `http://localhost:8000/`. Opening `index.html` directly also works for basic review.
- Treat `CLAUDE.md` as mandatory: state assumptions when requirements are ambiguous, make only request-driven changes, and verify the stated outcome before declaring work complete.

## Shared implementation points

- `assets/css/style.css` is the single shared design system, responsive layout, and reduced-motion implementation. Keep shared visual changes there; avoid page-specific inline styles.
- `assets/js/config.js` is the sole source for `brandName`, international-digits-only `whatsappNumber`, `address`, and `hours`. It must load before `assets/js/main.js`.
- `assets/js/main.js` populates elements marked `data-brand`, `data-address`, and `data-hours`, creates WhatsApp links from `data-wa-message`, and owns the mobile menu, scroll reveals, and lightbox. Preserve those hooks when editing markup.
- Header, footer, lightbox markup, and CSS/JS includes are duplicated in each root HTML page; update every page when changing a shared structure or navigation route.

## Content and publishing constraints

- Do not invent business facts (name, address, number, rates, facilities, schedules, testimonials, or programme details). Use explicit placeholders until verified information is supplied.
- Current remote Unsplash photos are placeholders. Replace with approved local assets under `assets/images/` (WebP preferred), accurate `alt` text, and required consent for photos of children.
- Before deployment, replace the placeholder business settings and `https://your-domain.example` in both `sitemap.xml` and `robots.txt`; deploy the complete folder with `index.html` at the host web root.
