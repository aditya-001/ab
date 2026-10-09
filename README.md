# Cute Bday Wishes (React + Tailwind)

A lightweight, pastel, animated birthday wishes website built with React, Vite, Tailwind, and React Router.

## ⚠️ IMPORTANT: Image Licensing & AI Policy

**NO AI-GENERATED IMAGES ARE USED IN THIS PROJECT.**

All images in this project are either:
1. **Royalty-free images** from Pixabay (free for commercial use, no attribution required)
2. **GIFs from Tenor** (embedded via direct links, check Tenor's terms for your use case)
3. **User-uploaded photos** placed in the local `/public/assets` folder

### Current Image Sources:
- **Pixabay**: All teddy bears, anime couple illustrations, and birthday graphics are from Pixabay.com under the Pixabay License (free for commercial use without attribution).
- **Tenor GIFs**: Heart animations are embedded from Tenor. Review Tenor's Content Policy if using commercially.

### Before Publishing or Commercial Use:
1. ✅ Verify each image URL's license on the source website.
2. ✅ Replace any placeholder images with your own photos or properly licensed stock images.
3. ✅ If using Freepik images, add attribution text as required by their license.
4. ✅ Never use AI-generated images from services like DALL-E, Midjourney, Stable Diffusion without understanding copyright implications.

### How to Replace Images:
- Open each page file in `src/pages/` and `src/components/`.
- Replace image URLs with your own:
  - Use Unsplash: `https://images.unsplash.com/...`
  - Use Pexels: `https://images.pexels.com/...`
  - Use local uploads: Place images in `public/assets/` and reference as `/assets/your-image.png`

## Features
- 4–5 pages: Home, Wishes, Gallery, Events, Contact
- Pastel gradient background with floating hearts
- Hero card with teddy image, Hindi microcopy, and Next button
- Wishes with flip cards + guestbook (localStorage)
- Gallery grid with lightbox and ❤️ reaction counter
- Events with countdown + cute event cards
- Contact form with heart burst and downloadable e‑card (canvas)
- Motion toggle (respects `prefers-reduced-motion`), music toggle (muted by default until clicked), theme contrast toggle
- Accessible: alt text, focus rings, readable contrast

## Quick Start
```powershell
cd e:\l\bday-wishes-react
npm install
npm run dev
```
Open: http://localhost:5173/ (use `--host` if testing from phone on same Wi‑Fi).

## Replace Images
- In pages/components you'll see URLs pointing to Pixabay/Tenor placeholders.
- **All current images are royalty-free from Pixabay and Tenor.**
- To use your own images:
  1) Download from Unsplash, Pexels, or Pixabay (check license).
  2) Place in `public/assets/` folder.
  3) Reference as `/assets/filename.png` in `src` attributes.
  4) OR use direct URLs from approved stock sites.
- **Do NOT use AI-generated images without verifying copyright ownership.**
- Important: Check the license on each source page. Many images require attribution or have usage restrictions.

## Image Attribution (if required)
- Current Pixabay images: No attribution required per Pixabay License.
- Current Tenor GIFs: Embedded for non-commercial demonstration; review Tenor API terms for production use.
- If you add Freepik images: Add attribution like `Image by [author] on Freepik` in your footer or credits page.

## Animations Toggle
- Click "Motion: On/Off" in the header. State persists in `localStorage`.
- With system `prefers-reduced-motion`, animations are minimized.

## Lazy Loading
- Gallery images use `loading="lazy"` to keep pages lightweight.

## Routing
- Defined in `src/App.jsx` via React Router v6. Pages live in `src/pages`.

## Components
- `HeroCard` (home hero)
- `WishCard` (flip)
- `GalleryGrid` (lightbox + likes)
- `EventCard`
- `ContactForm` (e‑card + heart burst)
- `FloatingHeartsBg`, `MotionToggle`, `ThemeToggle`, `MusicToggle`

## Build & Preview
```powershell
npm run build
npm run preview
```

## LAN / Public
- LAN (same Wi‑Fi): run `npm run dev` and open `http://<your-lan-ip>:5173/`.
- Public (temporary): use ngrok/cloudflared to tunnel `5173`.

## Notes
- Keep paragraphs short (1–3 lines). Optimize images (WebP) when possible.
- You can replace the teddy GIF in `HomePage` with a Lottie JSON (via a React Lottie library) if desired.
