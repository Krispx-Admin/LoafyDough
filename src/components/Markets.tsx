import Reveal from "./Reveal";
import { SPIRAL_D } from "../lib/spiral";
import { markets, thisSaturday } from "../data/content";

function PinIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export default function Markets() {
  return (
    <section
      id="markets"
      className="px-6 py-24"
      style={{ scrollMarginTop: 90, background: "radial-gradient(120% 90% at 80% 0%, #ffe6f6 0%, #fff8f0 55%)" }}
    >
      <div className="mx-auto max-w-[1180px]">
        {/* This Saturday callout */}
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[32px] px-6 py-[46px] text-cream sm:px-11"
            style={{ background: "linear-gradient(115deg,#c37012,#a85e0d)", boxShadow: "0 26px 56px rgba(195,112,18,.32)" }}
          >
            <div className="absolute -right-5 -top-[30px] opacity-[.16]" aria-hidden="true">
              <svg viewBox="0 0 200 200" width={240} height={240} style={{ overflow: "visible" }}>
                <path d={SPIRAL_D} fill="none" stroke="#fff8f0" strokeWidth={14} strokeLinecap="round" />
              </svg>
            </div>
            <div className="relative flex flex-wrap items-center justify-between gap-7">
              <div>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 pb-[3px] pt-[5px] font-hand text-[24px] font-semibold"
                  style={{ background: "rgba(255,248,240,.16)" }}
                >
                  catch us next —
                </span>
                <h2 className="m-0 mt-3.5 font-serif text-[clamp(30px,4.2vw,46px)] font-semibold leading-[1.04]">
                  {thisSaturday.name}
                </h2>
                <div className="mt-[18px] flex flex-wrap gap-6">
                  {[
                    { k: "When", v: thisSaturday.when },
                    { k: "Time", v: thisSaturday.time },
                    { k: "Where", v: thisSaturday.location },
                  ].map((d) => (
                    <div key={d.k}>
                      <div className="text-[11px] font-bold uppercase tracking-[1.6px] opacity-70">{d.k}</div>
                      <div className="mt-1 text-[18px] font-bold">{d.v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={thisSaturday.map}
                target="_blank"
                rel="noopener"
                className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full bg-cream px-[26px] py-4 text-[16px] font-bold text-cinnamon no-underline transition-transform hover:-translate-y-[3px]"
                style={{ boxShadow: "0 12px 24px rgba(0,0,0,.18)" }}
              >
                Get directions
                <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal y={24} duration={0.7}>
          <h3 className="mb-[22px] mt-[54px] font-serif text-[26px] font-semibold text-cinnamon-deep">
            Where you'll usually find us
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {markets.map((m, i) => (
            <Reveal key={m.name} y={26} duration={0.7} delay={(i % 2) * 0.08}>
              <div
                className="flex items-start gap-[18px] rounded-[22px] border-[1.5px] border-[#f0d8c4] bg-white p-6"
                style={{ boxShadow: "0 8px 20px rgba(122,63,8,.05)" }}
              >
                <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-2xl bg-pink text-cinnamon">
                  <PinIcon />
                </div>
                <div className="flex-1">
                  <h4 className="m-0 mb-1 font-serif text-[19px] font-semibold text-cinnamon-deep">{m.name}</h4>
                  <p className="m-0 mb-0.5 text-[14px] font-semibold text-mauve">
                    {m.day} · {m.time}
                  </p>
                  <p className="m-0 mb-2.5 text-[13.5px] text-[#6b4a33]">{m.location}</p>
                  <a href={m.map} target="_blank" rel="noopener" className="text-[13px] font-bold text-cinnamon no-underline">
                    View on map →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
