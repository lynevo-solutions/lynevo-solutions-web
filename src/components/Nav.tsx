import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LynevoLogo } from "./LynevoLogo";

const links = [
  { to: "/services", label: "Palvelut" },
  { to: "/about", label: "Tietoa meistä" },
  { to: "/contact", label: "Yhteystiedot" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setOverDark(y < window.innerHeight * 0.82);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header background:
  //   overDark  → dark bg so white text/logo is always legible over any content
  //   scrolled into light → warm-white blur
  const headerBg = overDark
    ? "bg-[#0B0A08]/85 backdrop-blur-sm border-b border-[rgba(184,149,106,0.10)]"
    : scrolled
    ? "backdrop-blur-md bg-[color:var(--background)]/90 border-b border-[color:var(--divider)]"
    : "bg-transparent border-b border-transparent";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${headerBg}`}
    >
      <div className="container-novera flex items-center justify-between h-16 md:h-20">

        {/* Logo — two versions, cross-fade via wrapper div colour inheritance */}
        <Link to="/" aria-label="Lynevo" className="relative inline-block">
          {/* Ink version — visible on light nav */}
          <div
            className={`transition-opacity duration-500 ${overDark ? "opacity-0" : "opacity-100"}`}
            style={{ color: "var(--ink)" }}
          >
            <LynevoLogo className="h-[34px] w-auto" />
          </div>
          {/* White version — visible on dark nav */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${overDark ? "opacity-100" : "opacity-0"}`}
            style={{ color: "white", "--cutout": "#0B0A08" } as React.CSSProperties}
          >
            <LynevoLogo className="h-[34px] w-auto" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm transition-colors duration-300 ${
                overDark
                  ? "text-white/80 hover:text-white"
                  : "text-[color:var(--ink)] hover:text-[color:var(--gold)]"
              }`}
              activeProps={{ className: "text-[color:var(--gold)]" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://lynevo-solutions-fi.cal.com/lynevo-fi/tutustumispuhelu"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-5 py-2.5 text-sm border transition-colors duration-300 ${
              overDark
                ? "border-white/35 text-white hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                : "bg-[color:var(--ink)] text-[color:var(--background)] border-[color:var(--ink)] hover:border-[color:var(--gold)]"
            }`}
          >
            Varaa tutustumispuhelu
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-5 h-px transition-colors duration-300 ${overDark ? "bg-white" : "bg-[color:var(--ink)]"}`} />
          <span className={`block w-5 h-px transition-colors duration-300 ${overDark ? "bg-white" : "bg-[color:var(--ink)]"}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--divider)] bg-[color:var(--background)]">
          <div className="container-novera py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-[color:var(--ink)]"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://lynevo-solutions-fi.cal.com/lynevo-fi/tutustumispuhelu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 text-sm bg-[color:var(--ink)] text-[color:var(--background)]"
            >
              Varaa tutustumispuhelu
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
