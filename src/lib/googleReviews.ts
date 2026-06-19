import { reviews as fallbackReviews, type Review } from "../data/content";

/**
 * Google reviews loader with a graceful fallback.
 *
 * Out of the box this returns the curated fallback reviews in src/data/content.ts
 * plus the embedded Google Map (rendered by the Reviews component), so the
 * section looks complete with no API key.
 *
 * To use LIVE Google reviews (Places API returns up to 5):
 *   1. Get a Google Places API key and enable the "Places API".
 *   2. Because the Places "Place Details" endpoint does NOT allow browser calls
 *      (no CORS + key exposure), stand up a tiny proxy/serverless function that
 *      calls:
 *        https://maps.googleapis.com/maps/api/place/details/json
 *          ?place_id=<PLACE_ID>&fields=reviews,rating,user_ratings_total&key=<KEY>
 *      The place reference for The Loafy Dough is:
 *        0x865c8b006e1aad93:0x73ef8acf23c6fac4
 *      (resolve it to a Place ID via the Place ID Finder, then store it).
 *   3. Set VITE_REVIEWS_ENDPOINT to your proxy URL in a `.env` file.
 *      The proxy should return JSON shaped like:
 *        { reviews: [{ author_name, rating, text, relative_time_description, profile_photo_url }], rating: number }
 *
 * See README → "Google Reviews" for the full walkthrough.
 */

const TINTS = [
  { tint: "#fbccee", ink: "#bf6a8f" },
  { tint: "#f3d9b8", ink: "#c37012" },
  { tint: "#e7c3a0", ink: "#8a4f0c" },
  { tint: "#f6c6e4", ink: "#bf6a8f" },
  { tint: "#e9d7c4", ink: "#9f6162" },
];

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
}

export interface ReviewsResult {
  reviews: Review[];
  rating: number;
  /** true when these came from the live Google endpoint */
  live: boolean;
}

function mapGoogleReview(r: GoogleReview, i: number): Review {
  const t = TINTS[i % TINTS.length];
  return {
    text: r.text,
    name: r.author_name,
    meta: r.relative_time_description ?? "Google review",
    initial: (r.author_name?.[0] ?? "G").toUpperCase(),
    tint: t.tint,
    ink: t.ink,
  };
}

export async function loadReviews(): Promise<ReviewsResult> {
  const endpoint = import.meta.env.VITE_REVIEWS_ENDPOINT as string | undefined;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, { headers: { Accept: "application/json" } });
      if (res.ok) {
        const data = await res.json();
        const list: GoogleReview[] = data.reviews ?? [];
        if (list.length) {
          return {
            reviews: list.slice(0, 5).map(mapGoogleReview),
            rating: typeof data.rating === "number" ? data.rating : 5,
            live: true,
          };
        }
      }
    } catch {
      // fall through to fallback
    }
  }

  return { reviews: fallbackReviews, rating: 5, live: false };
}
