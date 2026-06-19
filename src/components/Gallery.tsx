import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import Spiral from "./Spiral";
import { gallery } from "../data/content";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const active = open ? gallery[index] : null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => {
    setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length));
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <section
      id="gallery"
      className="px-6 py-24"
      style={{ scrollMarginTop: 90, background: "radial-gradient(120% 80% at 20% 0%, #ffe6f6 0%, #fff8f0 55%)" }}
    >
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mx-auto max-w-[620px] text-center">
          <span className="font-hand text-[26px] font-semibold text-rose">straight from the oven</span>
          <h2 className="m-0 mt-1.5 font-serif text-[clamp(32px,4.4vw,52px)] font-semibold leading-[1.06] tracking-[-.4px] text-cinnamon-deep">
            The gallery
          </h2>
          <p className="m-0 mt-4 text-[17px] leading-[1.6] text-ink">
            A little taste of market mornings. Tap any photo to take a closer look.
          </p>
        </Reveal>

        <div className="mt-[46px] grid auto-rows-[120px] grid-cols-2 gap-4 sm:auto-rows-[150px] md:grid-cols-12">
          {gallery.map((g, i) => (
            <Reveal
              key={g.file}
              y={26}
              duration={0.7}
              delay={(i % 3) * 0.06}
              style={{ gridColumn: `span ${g.col}`, gridRow: `span ${g.row}` }}
            >
              <button
                onClick={() => setIndex(i)}
                aria-label={`View larger: ${g.caption}`}
                className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[22px] border-0 p-0 transition-all duration-300 hover:-translate-y-[5px] hover:scale-[1.012]"
                style={{ background: g.bg, boxShadow: "0 10px 24px rgba(122,63,8,.1)" }}
              >
                {g.src ? (
                  <img src={g.src} alt={g.alt ?? g.caption} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, rgba(255,255,255,.16) 0 14px, rgba(255,255,255,0) 14px 28px)",
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
                      <Spiral size={46} stroke={g.ink} strokeWidth={16} style={{ opacity: 0.85 }} />
                      <span
                        className="rounded-md px-2 py-1 font-mono text-[11px]"
                        style={{ color: g.ink, background: "rgba(255,248,240,.8)" }}
                      >
                        {g.file}
                      </span>
                    </div>
                  </>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && active && (
        <div
          className="fixed inset-0 z-[980] flex items-center justify-center p-6"
          style={{ background: "rgba(58,36,23,.78)", backdropFilter: "blur(6px)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.caption} — image ${(index ?? 0) + 1} of ${gallery.length}`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-[18px] top-1/2 flex h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full border-0 text-[22px] text-cinnamon-deep"
            style={{ background: "rgba(255,248,240,.92)" }}
          >
            ‹
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex aspect-[4/3] w-[min(620px,90vw)] flex-col items-center justify-center gap-3.5 overflow-hidden rounded-[26px]"
            style={{ background: active.bg, boxShadow: "0 30px 70px rgba(0,0,0,.4)" }}
          >
            {active.src ? (
              <img src={active.src} alt={active.alt ?? active.caption} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,.16) 0 16px, rgba(255,255,255,0) 16px 32px)",
                  }}
                />
                <Spiral size={86} stroke={active.ink} strokeWidth={15} style={{ position: "relative", opacity: 0.9 }} />
                <span
                  className="relative rounded-lg px-3 py-1.5 font-mono text-[13px]"
                  style={{ color: active.ink, background: "rgba(255,248,240,.85)" }}
                >
                  {active.file}
                </span>
                <span className="relative font-serif text-[22px] font-semibold text-cinnamon-deep">{active.caption}</span>
              </>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-[18px] top-1/2 flex h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full border-0 text-[22px] text-cinnamon-deep"
            style={{ background: "rgba(255,248,240,.92)" }}
          >
            ›
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-[46px] w-[46px] items-center justify-center rounded-full border-0 text-[20px] text-cinnamon-deep"
            style={{ background: "rgba(255,248,240,.92)" }}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
