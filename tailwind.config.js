/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette (from the build brief)
        pink: "#fbccee", // primary — soft pink
        cinnamon: "#c37012", // secondary — cinnamon/caramel brown (CTAs, headings)
        mauve: "#9f6162", // tertiary — muted rose (secondary text, borders)
        // Supporting neutrals for legibility / AA contrast
        cream: "#fff8f0", // warm off-white background
        cocoa: "#3a2417", // deep cocoa brown body text
        // Tints used across the design
        "cinnamon-deep": "#7a3f08",
        "cinnamon-mid": "#8a4f0c",
        rose: "#bf6a8f",
        ink: "#5a3a26",
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
      boxShadow: {
        soft: "0 8px 20px rgba(122,63,8,.06)",
      },
    },
  },
  plugins: [],
};
