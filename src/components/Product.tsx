import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import Spiral from "./Spiral";
import { ingredients } from "../data/content";

export default function Product() {
  return (
    <section id="product" className="bg-cream px-6 py-24" style={{ scrollMarginTop: 90 }}>
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="max-w-[680px]">
          <span className="font-hand text-[26px] font-semibold text-rose">made the slow way</span>
          <h2 className="m-0 mt-1.5 font-serif text-[clamp(32px,4.4vw,52px)] font-semibold leading-[1.06] tracking-[-.4px] text-cinnamon-deep">
            Six honest ingredients. Two days of patience.
          </h2>
          <p className="m-0 mt-5 text-[17.5px] leading-[1.65] text-ink">
            Every batch starts with a living sourdough starter and a long, cold ferment — that's what gives these rolls
            their tender crumb and gentle tang. We mix, fill, and roll each one by hand. No shortcuts, no mixes, nothing
            you can't pronounce.
          </p>
        </Reveal>

        {/* Ingredient cards */}
        <div className="mt-12 grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ing, i) => (
            <Reveal key={ing.name} delay={(i % 3) * 0.08} y={28} duration={0.7}>
              <TiltCard
                maxAngle={9}
                className="h-full rounded-3xl border-[1.5px] border-[#f0d8c4] bg-white p-[26px]"
                style={{ boxShadow: "0 8px 20px rgba(122,63,8,.06)" }}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: ing.tint, transform: "translateZ(30px)" }}
                >
                  <Spiral size={34} stroke={ing.ink} strokeWidth={16} />
                </div>
                <h3
                  className="mb-1.5 mt-[18px] font-serif text-[21px] font-semibold text-cinnamon-deep"
                  style={{ transform: "translateZ(18px)" }}
                >
                  {ing.name}
                </h3>
                <p className="m-0 text-[14px] leading-[1.55] text-[#6b4a33]">{ing.note}</p>
                <span className="mt-3.5 inline-block font-mono text-[10.5px] tracking-[.4px] text-[#b89274]">
                  {ing.file}
                </span>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* NO PRESERVATIVES badge */}
        <Reveal y={28} duration={0.8}>
          <div
            className="mt-10 flex flex-wrap items-center gap-7 rounded-[28px] px-[38px] py-[34px]"
            style={{
              background: "linear-gradient(110deg,#fbccee,#ffe0f4)",
              boxShadow: "0 18px 40px rgba(191,106,143,.18)",
            }}
          >
            <div className="relative h-[118px] w-[118px] flex-shrink-0" style={{ animation: "pulsering 5s ease-in-out infinite" }}>
              <svg viewBox="0 0 120 120" width={118} height={118}>
                <defs>
                  <path id="badge-circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <circle cx="60" cy="60" r="56" fill="#fff8f0" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#c37012" strokeWidth="2" strokeDasharray="2 5" />
                <text fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="2.4" fill="#9f6162">
                  <textPath href="#badge-circ" startOffset="0%">
                    · NATURALLY FERMENTED · SMALL BATCH
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-serif text-[25px] font-bold leading-[.9] text-cinnamon">NO</span>
                <span className="text-[8.5px] font-bold tracking-[1.4px] text-cinnamon-deep">PRESERVATIVES</span>
              </div>
            </div>
            <div>
              <h3 className="m-0 mb-1.5 font-serif text-[26px] font-semibold text-cinnamon-deep">Nothing artificial. Ever.</h3>
              <p className="m-0 max-w-[560px] text-[16px] leading-[1.55] text-ink">
                No preservatives, no dough conditioners, no shelf-stabilizers. Just flour, water, and time. They're meant
                to be eaten fresh — the way real bread should be.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
