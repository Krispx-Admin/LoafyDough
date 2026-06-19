import { useEffect, useState } from "react";
import { SOCIALS } from "../data/content";

const NAV = [
  { href: "#product", label: "Product" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
  { href: "#markets", label: "Markets" },
  { href: "#reviews", label: "Reviews" },
];

function InstagramIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: "background .35s ease, box-shadow .35s ease, padding .35s ease",
          padding: scrolled ? "12px 24px" : "20px 24px",
          background: scrolled ? "rgba(255,248,240,.88)" : "rgba(255,248,240,0)",
          boxShadow: scrolled ? "0 8px 26px rgba(122,63,8,.1)" : "none",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5">
          <a href="#top" className="flex items-center gap-3 no-underline">
            <img
              src="/assets/logo.jpg"
              alt="The Loafy Dough Cottage Bakery"
              className="h-[56px] w-auto rounded-2xl object-contain"
              style={{ boxShadow: "0 4px 14px rgba(143,52,108,.18)" }}
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[21px] font-semibold tracking-[.2px] text-cinnamon-deep">
                The Loafy Dough
              </span>
              <span className="mt-[3px] font-sans text-[9.5px] font-semibold uppercase tracking-[3.5px] text-mauve">
                Cottage Bakery
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1.5 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-3.5 py-[9px] text-[14.5px] font-semibold text-ink no-underline transition-colors hover:bg-pink hover:text-cinnamon-deep"
              >
                {n.label}
              </a>
            ))}
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener"
              aria-label="The Loafy Dough on Instagram"
              className="ml-1.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cinnamon text-cream transition-transform hover:-translate-y-0.5 hover:bg-[#a85e0d]"
            >
              <InstagramIcon />
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener"
              aria-label="The Loafy Dough on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cinnamon text-cream transition-transform hover:-translate-y-0.5 hover:bg-[#a85e0d]"
            >
              <FacebookIcon />
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-pink text-cinnamon-deep md:hidden"
          >
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[950]"
          style={{ background: "rgba(58,36,23,.4)", backdropFilter: "blur(3px)" }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute left-3.5 right-3.5 top-3.5 flex flex-col gap-1 rounded-3xl bg-cream p-[18px]"
            style={{ boxShadow: "0 24px 60px rgba(122,63,8,.28)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-1 flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pink text-cinnamon-deep"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[14px] px-4 py-3.5 text-[18px] font-semibold text-ink no-underline"
              >
                {n.label}
              </a>
            ))}
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener"
              className="mt-1.5 rounded-[14px] bg-cinnamon p-[15px] text-center text-[16px] font-bold text-cream no-underline"
            >
              Follow on Instagram
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener"
              className="rounded-[14px] bg-[#1877f2] p-[15px] text-center text-[16px] font-bold text-cream no-underline"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      )}
    </>
  );
}
