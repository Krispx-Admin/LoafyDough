import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { useParallax } from "../lib/useParallax";

export default function Hero() {
  const blob1 = useParallax<HTMLDivElement>(0.12);
  const blob2 = useParallax<HTMLDivElement>(0.2);

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-[90px] pt-[150px]"
      style={{ background: "radial-gradient(130% 100% at 80% 0%, #ffe6f6 0%, #fff8f0 52%)" }}
    >
      {/* Parallax background blobs */}
      <div
        ref={blob1}
        aria-hidden="true"
        className="absolute -left-10 top-20 h-[230px] w-[230px] rounded-full"
        style={{ background: "#fbccee", filter: "blur(6px)", opacity: 0.55 }}
      />
      <div
        ref={blob2}
        aria-hidden="true"
        className="absolute -bottom-8 right-[6%] h-[140px] w-[140px] rounded-full"
        style={{ background: "#f3d9b8", opacity: 0.6 }}
      />

      {/* Floating ingredient accents */}
      <svg
        aria-hidden="true"
        viewBox="0 0 60 60"
        className="absolute right-[14%] top-[120px] w-[54px] opacity-85"
        style={{ ["--r" as string]: "-12deg", animation: "floaty 6s ease-in-out infinite" }}
      >
        <rect x="6" y="26" width="48" height="9" rx="4.5" fill="#c37012" />
        <rect x="6" y="26" width="48" height="9" rx="4.5" fill="none" stroke="#8a4f0c" strokeWidth="1.5" />
        <path d="M14 26 L14 35 M22 26 L22 35 M30 26 L30 35 M38 26 L38 35 M46 26 L46 35" stroke="#8a4f0c" strokeWidth="1.4" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 60 60"
        className="absolute bottom-[120px] left-[11%] w-10 opacity-80"
        style={{ ["--r" as string]: "18deg", animation: "floaty 7s ease-in-out infinite .8s" }}
      >
        <circle cx="30" cy="30" r="22" fill="#9f6162" opacity=".25" />
        <circle cx="30" cy="30" r="13" fill="none" stroke="#9f6162" strokeWidth="3" />
      </svg>

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
        {/* Copy */}
        <Reveal>
          <span
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 pb-1 pt-1.5 font-hand text-[24px] font-semibold text-rose"
            style={{ boxShadow: "0 6px 18px rgba(191,106,143,.18)" }}
          >
            fresh this Saturday!
          </span>
          <h1 className="m-0 mt-5 font-serif text-[clamp(42px,6vw,72px)] font-semibold leading-[1.02] tracking-[-.5px] text-cinnamon-deep">
            Real sourdough cinnamon rolls, rolled by hand.
          </h1>
          <p className="m-0 mt-[22px] max-w-[460px] text-[18.5px] leading-[1.6] text-ink">
            Slow-fermented for two full days, baked in small batches, and never anything artificial. Soft, gooey, and
            worth getting to the market early for.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3.5">
            <a
              href="#markets"
              className="inline-flex items-center gap-2.5 rounded-full bg-cinnamon px-7 py-[17px] text-[16.5px] font-bold text-cream no-underline transition-all hover:-translate-y-[3px]"
              style={{ boxShadow: "0 12px 26px rgba(195,112,18,.32)" }}
            >
              Find us this Saturday
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#product"
              className="inline-flex items-center rounded-full bg-transparent px-[26px] py-[17px] text-[16.5px] font-bold text-cinnamon-deep no-underline transition-colors hover:bg-white"
              style={{ boxShadow: "inset 0 0 0 2px #e3c3a0" }}
            >
              What's in them?
            </a>
          </div>
          <div className="mt-[30px] flex items-center gap-[18px]">
            <div className="flex gap-[3px] text-cinnamon" aria-hidden="true">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-[18px]">
                  {s}
                </span>
              ))}
            </div>
            <span className="text-[14.5px] font-semibold text-mauve">
              Loved at farmers' markets across San Antonio
            </span>
          </div>
        </Reveal>

        {/* Hero image (3D tilt) */}
        <Reveal delay={0.12} duration={0.9} className="flex justify-center">
          <TiltCard
            glare={0.4}
            maxAngle={9}
            className="relative w-full max-w-[420px]"
            style={{ borderRadius: 34, boxShadow: "0 34px 70px rgba(143,52,108,.28)" }}
          >
            <div className="relative aspect-square overflow-hidden rounded-[34px] bg-pink">
              <img
                src="/assets/hero-roll.png"
                alt="A freshly iced sourdough cinnamon roll on a wooden board"
                className="h-full w-full object-cover"
              />
            </div>
            {/* 48h badge */}
            <div
              className="absolute -right-3.5 -top-[18px] rounded-[18px] bg-cream px-4 py-3 text-center"
              style={{ transform: "translateZ(40px)", boxShadow: "0 16px 30px rgba(122,63,8,.22)" }}
            >
              <div className="font-serif text-[22px] font-bold leading-none text-cinnamon">48h</div>
              <div className="mt-[3px] text-[10.5px] font-bold uppercase tracking-[1.2px] text-mauve">fermented</div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
