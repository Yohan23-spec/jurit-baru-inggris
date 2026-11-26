# Homestay & English Learning Website

A responsive, static HTML/CSS/JavaScript website for a homestay and children's English learning service. It uses no framework, build process, backend, or database.

## Run locally

Open `index.html` in a modern browser. For the closest production-like experience, serve the project directory with any static web server.

## Update business information

Edit **`assets/js/config.js`** before publishing:

- `brandName`
- `whatsappNumber` — digits only in international format, for example `6281234567890`
- `address`
- `hours`

All WhatsApp buttons build their URLs from this one file and contain contextual ready-to-send messages.

## Replace the visual placeholders

The image URLs are temporary Unsplash placeholders. Replace them with approved, optimised photos of the actual property and authorised learning activities.

1. Add image files under `assets/images/` (WebP is recommended).
2. Replace the relevant `src` URLs in the HTML files.
3. Update each `alt` text so it accurately describes the replacement photo.

Do not publish images of children without the appropriate permission.

## Update site identity and content

- Page content is contained in the root HTML files.
- Shared presentation is in `assets/css/style.css`.
- Shared interaction (mobile navigation, scroll reveals, gallery lightbox, and WhatsApp URLs) is in `assets/js/main.js`.
- Replace the placeholder story, address, operating hours, accommodation details, and programme details only with verified business information.
- Replace `https://your-domain.example` in `sitemap.xml` and `robots.txt` after the final domain is known.

## Deploy

Upload the complete project folder to any standard static web host (for example shared hosting public web root, Netlify, GitHub Pages, or Cloudflare Pages). Ensure `index.html` is in the web root and, if your host supports it, configure `404.html` as the custom not-found page.

## Pre-launch checklist

- [ ] Add verified business name, WhatsApp number, location, and hours.
- [ ] Replace all visual and written placeholders with approved material.
- [ ] Update the domain in `sitemap.xml` and `robots.txt`.
- [ ] Test every WhatsApp CTA and every navigation link.
- [ ] Check the site on a phone, tablet, and desktop browser.
