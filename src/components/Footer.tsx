import { SOCIALS } from "../data/content";

const NAV = [
  { href: "#product", label: "Product" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
  { href: "#markets", label: "Markets" },
  { href: "#reviews", label: "Reviews" },
];

export default function Footer() {
  return (
    <footer
      className="px-6 pb-10 pt-[70px]"
      style={{ background: "linear-gradient(180deg,#fdd6ef,#fbccee)" }}
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3.5">
            <img
              src="/assets/logo.jpg"
              alt="The Loafy Dough Cottage Bakery logo"
              loading="lazy"
              className="h-24 w-24 rounded-[22px] object-cover"
              style={{ boxShadow: "0 10px 24px rgba(143,52,108,.22)" }}
            />
            <div>
              <div className="font-serif text-[24px] font-semibold text-cinnamon-deep">The Loafy Dough</div>
              <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-[3px] text-mauve">Cottage Bakery</div>
            </div>
          </div>
          <p className="m-0 mt-5 max-w-[360px] font-hand text-[24px] text-[#a8557a]">
            Baked slow, sold fresh, and best enjoyed warm with someone you like. See you Saturday.
          </p>
        </div>

        <div>
          <h4 className="m-0 mb-4 mt-1.5 text-[12px] font-bold uppercase tracking-[2px] text-mauve">Explore</h4>
          <div className="flex flex-col gap-[11px]">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-[15px] font-semibold text-ink no-underline">
                {n.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="m-0 mb-4 mt-1.5 text-[12px] font-bold uppercase tracking-[2px] text-mauve">Find us</h4>
          <div className="flex flex-col gap-[11px]">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-ink no-underline"
            >
              <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
              @theloafydough
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-ink no-underline"
            >
              <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              The Loafy Dough
            </a>
            <a
              href={SOCIALS.maps}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-ink no-underline"
            >
              <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
              Google Maps
            </a>
            <span className="text-[15px] text-[#6b4a33]">San Antonio, TX</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[42px] flex max-w-[1180px] flex-wrap items-center justify-between gap-2.5 border-t border-[rgba(159,97,98,.3)] pt-[22px]">
        <span className="text-[13px] text-[#8a5a5b]">© 2026 The Loafy Dough · Cottage Bakery</span>
        <span className="text-[13px] text-[#8a5a5b]">Made fresh, never with preservatives.</span>
      </div>
    </footer>
  );
}
