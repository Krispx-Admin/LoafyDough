# The Loafy Dough — Cottage Bakery Website

A modern, fully responsive marketing site for The Loafy Dough, a San Antonio artisan sourdough cinnamon roll bakery sold at local farmers' markets.

**Built with:** Vite + React + TypeScript + Tailwind CSS + Framer Motion + react-parallax-tilt

## Features

- **Loading screen**: Signature animated cinnamon-roll spiral that winds up on page load
- **3D tilt cards**: Product and ingredient cards tilt toward cursor with soft glare
- **Smooth scroll animations**: Sections fade and rise as you scroll (powered by Framer Motion)
- **Parallax backgrounds**: Layers drift at different speeds for depth
- **Fully responsive**: Mobile-first, tested at 375px, 768px, 1280px+
- **Accessible**: WCAG AA contrast, keyboard navigation, `prefers-reduced-motion` support everywhere
- **Editable content**: All copy, markets, ingredients, and reviews live in one `src/data/content.ts` file — no database
- **Embedded Google Maps**: Listing + reviews widget built in; optional live Google Places API integration

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser. The dev server hot-reloads as you edit files.

### Build for Production

```bash
npm run build
npm run preview
```

This generates an optimized static site in `dist/` ready to deploy anywhere (Netlify, Vercel, GitHub Pages, traditional hosting, etc.).

---

## Customization

### Editing Content (No Code Required)

**All** editable content lives in one file: **`src/data/content.ts`**

#### Markets
Update the "catch us next" callout and the market list:
```typescript
export const thisSaturday = {
  name: "Pearl Farmers Market",
  when: "This Saturday",
  time: "9 AM – 1 PM",
  location: "312 Pearl Pkwy, San Antonio",
  map: "https://www.google.com/maps/search/?api=1&query=Pearl+Farmers+Market+San+Antonio",
};

export const markets: Market[] = [
  // add/edit market entries here
];
```

#### Ingredients
Edit the product page ingredient list:
```typescript
export const ingredients: Ingredient[] = [
  {
    name: "Sourdough starter",
    note: "A living culture...",
    tint: "#fbccee", // icon bubble color
    ink: "#bf6a8f",  // spiral stroke color
    file: "ingredient-starter", // placeholder name
  },
  // ...
];
```

#### Reviews
Add fallback reviews (shown by default):
```typescript
export const reviews: Review[] = [
  {
    text: "Hands down the best...",
    name: "Marisol G.",
    meta: "Local Guide · 2 weeks ago",
    initial: "M",
    tint: "#fbccee",
    ink: "#bf6a8f",
  },
  // ...
];
```

#### Process Steps
Customize the "How it's Made" flow:
```typescript
export const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Mix & ferment",
    body: "...",
    bg: "#fbccee",
    ink: "#bf6a8f",
    img: "/assets/process-mix-ferment.png", // custom illustration
    arrow: true,
  },
  // ...
];
```

### Swapping Images

All placeholder image files are named clearly in `public/assets/`:

| File | Used For |
|------|----------|
| `logo.jpg` | Header + Footer logo |
| `hero-roll.png` | Hero section (main product image) |
| `process-mix-ferment.png` | Step 1 illustration |
| `process-roll-fill.png` | Step 2 illustration |
| `process-bake.png` | Step 3 illustration |
| `process-fresh-ready.png` | Step 4 illustration |
| `gallery-*.jpg` | Gallery grid (6 placeholder tiles) |
| `ingredient-*.png` | Ingredient card icons (6 placeholders) |

To replace an image, just drop a new file with the **same name** into `public/assets/` and rebuild. The site automatically picks it up.

### Colors & Theming

Brand colors are defined in `tailwind.config.js`:
```javascript
colors: {
  pink: "#fbccee",       // primary
  cinnamon: "#c37012",   // secondary (CTAs, headings)
  mauve: "#9f6162",      // tertiary (text accents)
  cream: "#fff8f0",      // backgrounds
  cocoa: "#3a2417",      // body text
}
```

Edit these values to adjust the site's palette.

Fonts are loaded from Google Fonts in `index.html`:
- Headings: **Fraunces** (warm editorial serif)
- Body: **Plus Jakarta Sans** (clean, friendly sans)
- Accents: **Caveat** (handwritten, used sparingly)

### Google Reviews (Optional)

**Out of the box:** The reviews section shows curated fallback reviews + an embedded Google Map. Everything works with zero setup.

**To show LIVE Google reviews** (up to 5 from the Place listing):

1. **Get a Google Places API key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Enable the **Places API**
   - Create an API key (restricted to prevent abuse)

2. **Build a server-side proxy** (Node, Python, Netlify Function, etc.) that calls:
   ```
   https://maps.googleapis.com/maps/api/place/details/json
     ?place_id=ChIJ06pxlzutYIYRBs6YvARZGhw
     &fields=reviews,rating,user_ratings_total
     &key=YOUR_API_KEY
   ```
   Return JSON shaped like:
   ```json
   {
     "reviews": [
       {
         "author_name": "Jane D.",
         "rating": 5,
         "text": "Best cinnamon rolls...",
         "relative_time_description": "2 weeks ago"
       }
     ],
     "rating": 4.8
   }
   ```

3. **Set the endpoint** in a `.env` file:
   ```
   VITE_REVIEWS_ENDPOINT=https://your-proxy.com/reviews
   ```

4. **Rebuild and deploy.** The loader in `src/lib/googleReviews.ts` will fetch live reviews on page load and fall back to the curated list if the endpoint is unavailable.

See `src/lib/googleReviews.ts` for details.

---

## Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect the repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Done! Netlify auto-deploys on every push

### Vercel
1. Import the repo at [vercel.com](https://vercel.com)
2. Vercel auto-detects Vite and configures everything
3. Deploy on push

### Traditional Hosting
```bash
npm run build
# Upload the `dist/` folder to your server
```

---

## File Structure

```
src/
├── components/         # React components (Header, Hero, Product, etc.)
├── data/
│   └── content.ts      # ← EDIT THIS: all copy, markets, reviews, ingredients
├── lib/
│   ├── spiral.ts       # Cinnamon-roll SVG path constant
│   ├── useParallax.ts  # Scroll-parallax hook
│   └── googleReviews.ts # Reviews loader + fallback
├── App.tsx             # Main app structure
├── index.css           # Tailwind + keyframes + global styles
├── main.tsx            # Entry point
└── vite-env.d.ts       # Vite/TypeScript config
public/
├── favicon.svg         # Cinnamon-roll favicon
└── assets/
    ├── logo.jpg                    # Logo
    ├── hero-roll.png               # Hero image
    ├── process-*.png               # Process step illustrations
    └── gallery-*.jpg               # Gallery grid
.env.example            # Copy this to .env for optional Google reviews setup
```

---

## Accessibility & Performance

- **WCAG AA contrast** on all text + interactive elements
- **Keyboard navigation:** All links, buttons, and modals are keyboard-accessible
- **Focus indicators:** Visible `:focus-visible` outlines on all interactive elements
- **Reduced motion:** All animations respect `prefers-reduced-motion` media query
- **Lazy loading:** Below-the-fold images use `loading="lazy"`
- **No layout shift:** Fonts are preconnected; images have explicit dimensions
- **GPU-accelerated animations:** Transforms and opacity changes only; 60fps on mobile

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

---

## Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Styles not applying?**
Make sure `src/index.css` is imported in `src/main.tsx`. Tailwind scans `src/**/*.{ts,tsx}` for classnames.

**Images not showing?**
Check that image files are in `public/assets/` with the **exact name** referenced in the code. The dev server requires a hard refresh if you add a new file.

**Google reviews not loading?**
Check that `VITE_REVIEWS_ENDPOINT` is set correctly in `.env`. Open the browser console (F12) to see fetch errors.

---

## Support & Questions

For questions about the build or customization, refer to:
- [Vite docs](https://vitejs.dev)
- [React docs](https://react.dev)
- [Tailwind docs](https://tailwindcss.com)
- [Framer Motion docs](https://www.framer.com/motion/)

---

**Made with ❤️ for The Loafy Dough**
