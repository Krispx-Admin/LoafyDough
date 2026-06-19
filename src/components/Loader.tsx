import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { SPIRAL_D } from "../lib/spiral";

/**
 * Signature loading screen: a flat strip of "dough" winds up into a cinnamon-roll
 * spiral (stroke-draw + rollup scale pop), then the whole loader fades out to
 * reveal the site. Under prefers-reduced-motion it shows a static roll and a
 * quick fade instead.
 */
export default function Loader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), reduce ? 450 : 2600);
    return () => clearTimeout(t);
  }, [reduce]);

  // After the fade-out transition completes, unmount + release scroll lock.
  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(() => {
      setGone(true);
      onDone();
    }, reduce ? 350 : 900);
    return () => clearTimeout(t);
  }, [loaded, reduce, onDone]);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 26,
        background: "#fdd6ef",
        transition: "opacity .85s ease",
        opacity: loaded ? 0 : 1,
        pointerEvents: loaded ? "none" : "auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          background:
            "radial-gradient(120% 90% at 50% 30%, #ffe3f5 0%, #fdd6ef 55%, #f6bfe6 100%)",
        }}
      />
      <svg
        viewBox="0 0 200 210"
        width={190}
        height={200}
        style={{
          position: "relative",
          overflow: "visible",
          filter: "drop-shadow(0 14px 22px rgba(143,52,108,.22))",
          animation: reduce ? "none" : "rollup 2.4s cubic-bezier(.22,1.2,.3,1) forwards",
        }}
      >
        <path
          className="loader-path"
          d={SPIRAL_D}
          fill="none"
          stroke="#c37012"
          strokeWidth={13}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 966,
            strokeDashoffset: reduce ? 0 : 966,
            animation: reduce ? "none" : "draw 1.7s cubic-bezier(.4,0,.2,1) forwards",
          }}
        />
        <path
          className="loader-path"
          d={SPIRAL_D}
          fill="none"
          stroke="#f6e6c8"
          strokeWidth={4.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 966,
            strokeDashoffset: reduce ? 0 : 966,
            animation: reduce ? "none" : "draw 1.7s cubic-bezier(.4,0,.2,1) forwards",
          }}
        />
      </svg>
      <div
        style={{
          position: "relative",
          fontFamily: "'Caveat', cursive",
          fontSize: 34,
          fontWeight: 600,
          color: "#a8557a",
          letterSpacing: ".3px",
        }}
      >
        warming the oven…
      </div>
    </div>
  );
}
