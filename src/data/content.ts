/**
 * Single source of truth for the site's editable copy & data.
 * The owner can update this file weekly (especially `thisSaturday` and
 * `markets`) without touching any component code.
 */

/* ----------------------------- Ingredients ----------------------------- */
export interface Ingredient {
  name: string;
  note: string;
  tint: string; // icon bubble background
  ink: string; // spiral stroke color
  /** placeholder file name (drop a real icon/photo into /public/assets) */
  file: string;
}

export const ingredients: Ingredient[] = [
  {
    name: "Sourdough starter",
    note: "A living culture, fed daily. The heart of every batch and its gentle tang.",
    tint: "#fbccee",
    ink: "#bf6a8f",
    file: "ingredient-starter",
  },
  {
    name: "Organic flour",
    note: "Unbleached, stone-milled, nothing bleached or bromated.",
    tint: "#f3d9b8",
    ink: "#c37012",
    file: "ingredient-flour",
  },
  {
    name: "Ceylon cinnamon",
    note: "True cinnamon, freshly ground for that warm, floral spice.",
    tint: "#e7c3a0",
    ink: "#8a4f0c",
    file: "ingredient-cinnamon",
  },
  {
    name: "Sweet cream butter",
    note: "Real European-style butter folded into every layer.",
    tint: "#f6e6c8",
    ink: "#a06a3a",
    file: "ingredient-butter",
  },
  {
    name: "Brown sugar",
    note: "Soft and molasses-rich for that gooey caramel center.",
    tint: "#d9b48a",
    ink: "#7a4f1f",
    file: "ingredient-sugar",
  },
  {
    name: "Flaky sea salt",
    note: "Just a pinch to make every other flavor sing.",
    tint: "#e9d7c4",
    ink: "#9f6162",
    file: "ingredient-salt",
  },
];

/* ------------------------------- Gallery ------------------------------- */
export interface GalleryItem {
  /** placeholder file name — swap in real photos at /public/assets/<file> */
  file: string;
  caption: string;
  bg: string; // placeholder tile background
  ink: string;
  col: number; // grid column span (out of 12)
  row: number; // grid row span
  /** optional real image path; when set the photo is shown instead of the placeholder */
  src?: string;
  alt?: string;
}

export const gallery: GalleryItem[] = [
  { file: "gallery-1.png", src: "/assets/gallery-1.png", alt: "Farmers market table with sourdough cinnamon rolls and chalkboard sign", caption: "Market morning", bg: "#e8b88a", ink: "#8a4f0c", col: 5, row: 2 },
  { file: "gallery-2.png", src: "/assets/gallery-2.png", alt: "Cream cheese icing being poured over a warm cinnamon roll", caption: "Fresh icing", bg: "#fbccee", ink: "#bf6a8f", col: 4, row: 2 },
  { file: "gallery-3.png", src: "/assets/gallery-3.png", alt: "Single sourdough cinnamon roll with icing on parchment paper", caption: "Classic swirl", bg: "#d9a7a8", ink: "#7a3f3f", col: 3, row: 2 },
  { file: "gallery-4.png", src: "/assets/gallery-4.png", alt: "Four cinnamon rolls in a kraft bakery box tied with twine", caption: "Market box", bg: "#f3d9b8", ink: "#a06a3a", col: 4, row: 2 },
  { file: "gallery-5.png", src: "/assets/gallery-5.png", alt: "Hands pulling apart a gooey sourdough cinnamon roll", caption: "Pull-apart", bg: "#e7c3a0", ink: "#8a4f0c", col: 4, row: 2 },
  { file: "gallery-6.png", src: "/assets/gallery-6.png", alt: "Box of nine sourdough cinnamon rolls with cream cheese icing", caption: "Boxed dozen", bg: "#f6c6e4", ink: "#bf6a8f", col: 4, row: 2 },
];

/* ----------------------------- Process steps --------------------------- */
export interface ProcessStep {
  num: string;
  title: string;
  body: string;
  bg: string;
  ink: string;
  /** custom illustration for this step (provided by the owner) */
  img: string;
  arrow: boolean;
}

export const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Mix & ferment",
    body: "Starter, flour, and water rest together for up to 48 hours — slow and cold.",
    bg: "#fbccee",
    ink: "#bf6a8f",
    img: "/assets/process-mix-ferment.png",
    arrow: true,
  },
  {
    num: "02",
    title: "Roll & fill",
    body: "We sheet the dough, brush with butter, and spiral in cinnamon and brown sugar by hand.",
    bg: "#f7e0cc",
    ink: "#c37012",
    img: "/assets/process-roll-fill.png",
    arrow: true,
  },
  {
    num: "03",
    title: "Bake",
    body: "Into the oven in small batches until golden, pillowy, and filling the room with cinnamon.",
    bg: "#f3d9b8",
    ink: "#8a4f0c",
    img: "/assets/process-bake.png",
    arrow: true,
  },
  {
    num: "04",
    title: "Fresh & ready",
    body: "Iced warm and boxed that morning. No preservatives — just eat them fresh!",
    bg: "#fdd6ef",
    ink: "#bf6a8f",
    img: "/assets/process-fresh-ready.png",
    arrow: false,
  },
];

/* ------------------------------- Markets ------------------------------- */
export interface Market {
  name: string;
  day: string;
  time: string;
  location: string;
  map: string;
}

/** The prominent "catch us next" callout — edit weekly. */
export const thisSaturday = {
  name: "Pearl Farmers Market",
  when: "This Saturday",
  time: "9 AM – 1 PM",
  location: "312 Pearl Pkwy, San Antonio",
  map: "https://www.google.com/maps/search/?api=1&query=Pearl+Farmers+Market+San+Antonio",
};

export const markets: Market[] = [
  {
    name: "Pearl Farmers Market",
    day: "Saturdays",
    time: "9 AM – 1 PM",
    location: "312 Pearl Pkwy, San Antonio, TX",
    map: "https://www.google.com/maps/search/?api=1&query=Pearl+Farmers+Market+San+Antonio",
  },
  {
    name: "The Yard Farmers & Ranchers Market",
    day: "Sundays",
    time: "10 AM – 2 PM",
    location: "5520 McCullough Ave, San Antonio",
    map: "https://www.google.com/maps/search/?api=1&query=The+Yard+Farmers+Ranchers+Market+San+Antonio",
  },
  {
    name: "Boerne Farmers Market",
    day: "Saturdays",
    time: "9 AM – 1 PM",
    location: "Main Plaza, Boerne, TX",
    map: "https://www.google.com/maps/search/?api=1&query=Boerne+Farmers+Market",
  },
  {
    name: "Bulverde Marketplace",
    day: "1st Saturdays",
    time: "9 AM – 1 PM",
    location: "Bulverde, TX",
    map: "https://www.google.com/maps/search/?api=1&query=Bulverde+Marketplace",
  },
];

/* ------------------------------- Reviews ------------------------------- */
export interface Review {
  text: string;
  name: string;
  meta: string;
  initial: string;
  tint: string;
  ink: string;
}

/**
 * Fallback reviews shown out of the box. To use live Google reviews, see the
 * README ("Google Reviews") — fill VITE_GOOGLE_PLACES_API_KEY and the loader in
 * src/lib/googleReviews.ts will replace these.
 */
export const reviews: Review[] = [
  {
    text: "Hands down the best cinnamon roll I have had in San Antonio. You can taste that it is real sourdough — soft, tangy, and not too sweet.",
    name: "Marisol G.",
    meta: "Local Guide · 2 weeks ago",
    initial: "M",
    tint: "#fbccee",
    ink: "#bf6a8f",
  },
  {
    text: "We get to the Pearl market early just for these. Sells out fast and now I know why. Worth every minute of the wait.",
    name: "Daniel R.",
    meta: "5 reviews · 1 month ago",
    initial: "D",
    tint: "#f3d9b8",
    ink: "#c37012",
  },
  {
    text: "So fresh and clearly handmade. Love that there are no preservatives — they taste like something my grandma would make. A new Saturday tradition!",
    name: "Priya N.",
    meta: "12 reviews · 3 weeks ago",
    initial: "P",
    tint: "#e7c3a0",
    ink: "#8a4f0c",
  },
];

export const SOCIALS = {
  instagram: "https://www.instagram.com/theloafydough/",
  facebook: "https://www.facebook.com/profile.php?id=61559161767137",
  maps: "https://www.google.com/maps/place/The+Loafy+Dough/@29.601125,-98.470073,18z/data=!4m14!1m7!3m6!1s0x865c8b006e1aad93:0x73ef8acf23c6fac4!2sThe+Loafy+Dough",
  mapsEmbed:
    "https://www.google.com/maps?q=The+Loafy+Dough+San+Antonio+TX&z=15&output=embed",
};
