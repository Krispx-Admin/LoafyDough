import Reveal from "./Reveal";
import { steps } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="bg-cream px-6 py-24" style={{ scrollMarginTop: 90 }}>
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <span className="font-hand text-[26px] font-semibold text-rose">from starter to sweet</span>
          <h2 className="m-0 mt-1.5 font-serif text-[clamp(32px,4.4vw,52px)] font-semibold leading-[1.06] tracking-[-.4px] text-cinnamon-deep">
            How it's made
          </h2>
          <p className="m-0 mt-4 text-[17px] leading-[1.6] text-ink">
            Four unhurried steps. The long, natural ferment is what makes them special — and what means there's never a
            need for preservatives.
          </p>
        </Reveal>

        <div className="mt-[54px] grid grid-cols-1 items-start gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((st, i) => (
            <Reveal key={st.num} y={34} duration={0.7} delay={i * 0.12} className="relative">
              <div
                className="relative rounded-3xl px-[22px] py-[26px] text-center"
                style={{ background: st.bg, boxShadow: "0 10px 26px rgba(122,63,8,.08)" }}
              >
                <div
                  className="absolute right-4 top-3.5 font-serif text-[34px] font-bold leading-none"
                  style={{ color: "rgba(122,63,8,.14)" }}
                >
                  {st.num}
                </div>
                <div
                  className="mx-auto flex h-[140px] w-[140px] items-center justify-center"
                >
                  <img
                    src={st.img}
                    alt={`Illustration: ${st.title}`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-1.5 mt-[18px] font-serif text-[20px] font-semibold text-cinnamon-deep">{st.title}</h3>
                <p className="m-0 text-[13.5px] leading-[1.55] text-ink">{st.body}</p>
              </div>

              {/* Connecting arrow (desktop only, between cards) */}
              {st.arrow && (
                <div className="absolute -right-[13px] top-[46%] z-10 hidden text-cinnamon lg:block" aria-hidden="true">
                  <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
