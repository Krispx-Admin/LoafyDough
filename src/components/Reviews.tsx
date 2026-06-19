import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { loadReviews, type ReviewsResult } from "../lib/googleReviews";
import { reviews as fallbackReviews, SOCIALS } from "../data/content";

export default function Reviews() {
  const [data, setData] = useState<ReviewsResult>({
    reviews: fallbackReviews,
    rating: 5,
    live: false,
  });

  useEffect(() => {
    let alive = true;
    loadReviews().then((r) => {
      if (alive) setData(r);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section id="reviews" className="bg-cream px-6 py-24" style={{ scrollMarginTop: 90 }}>
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="font-hand text-[26px] font-semibold text-rose">kind words</span>
            <h2 className="m-0 mt-1.5 font-serif text-[clamp(32px,4.4vw,52px)] font-semibold leading-[1.06] tracking-[-.4px] text-cinnamon-deep">
              From our market regulars
            </h2>
          </div>
          <div className="flex items-center gap-3.5 rounded-[18px] border-[1.5px] border-[#f0d8c4] bg-white px-5 py-3.5">
            <span className="font-serif text-[38px] font-bold leading-none text-cinnamon">{data.rating.toFixed(1)}</span>
            <div>
              <div className="text-[15px] tracking-[1px] text-cinnamon" aria-hidden="true">
                ★★★★★
              </div>
              <div className="mt-0.5 text-[12.5px] font-semibold text-mauve">on Google Reviews</div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {data.reviews.map((r, i) => (
            <Reveal key={r.name + i} y={26} duration={0.7} delay={(i % 3) * 0.08}>
              <figure
                className="flex h-full flex-col gap-3.5 rounded-[22px] border-[1.5px] border-[#ead6c8] bg-white p-[26px]"
                style={{ boxShadow: "0 8px 20px rgba(122,63,8,.05)" }}
              >
                <div className="text-[15px] tracking-[1.5px] text-cinnamon" aria-label={`${5} star rating`}>
                  ★★★★★
                </div>
                <blockquote className="m-0 flex-1 text-[15px] leading-[1.6] text-cocoa">"{r.text}"</blockquote>
                <figcaption className="flex items-center gap-3 border-t border-[#f0e2d6] pt-1.5">
                  <div
                    className="flex h-[42px] w-[42px] items-center justify-center rounded-full font-serif text-[18px] font-bold"
                    style={{ background: r.tint, color: r.ink }}
                    aria-hidden="true"
                  >
                    {r.initial}
                  </div>
                  <div>
                    <div className="text-[14.5px] font-bold text-cocoa">{r.name}</div>
                    <div className="text-[12px] text-mauve">{r.meta}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal y={26} duration={0.8} className="mt-[34px] grid grid-cols-1 items-stretch gap-[22px] md:grid-cols-[1.3fr_1fr]">
          <div
            className="relative min-h-[300px] overflow-hidden rounded-3xl border-[1.5px] border-[#ead6c8]"
            style={{ boxShadow: "0 12px 30px rgba(122,63,8,.1)" }}
          >
            <iframe
              title="The Loafy Dough on Google Maps"
              src={SOCIALS.mapsEmbed}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div
            className="flex flex-col justify-center gap-4 rounded-3xl p-8"
            style={{ background: "linear-gradient(120deg,#fbccee,#ffe0f4)" }}
          >
            <h3 className="m-0 font-serif text-[25px] font-semibold text-cinnamon-deep">Tried our rolls?</h3>
            <p className="m-0 text-[15px] leading-[1.6] text-ink">
              We'd love to hear what you thought. Reviews help other neighbors find us at the market.
            </p>
            <a
              href={SOCIALS.maps}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-cinnamon p-[15px] text-center text-[15.5px] font-bold text-cream no-underline transition-transform hover:-translate-y-[3px]"
              style={{ boxShadow: "0 12px 24px rgba(195,112,18,.3)" }}
            >
              Read all reviews on Google
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
