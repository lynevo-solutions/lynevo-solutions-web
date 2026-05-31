import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#0B0A08" }}
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(184,149,106,0.05) 0%, transparent 70%)",
        }}
      />
      {/* Gold top border */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(184,149,106,0.35), transparent)",
        }}
      />

      <div
        className="container-novera py-12 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 items-center text-sm relative"
        style={{ zIndex: 1, color: "rgba(255,255,255,0.38)" }}
      >
        <div>Lynevo Solutions — Helsinki, Finland</div>

        <nav className="flex flex-wrap min-[480px]:flex-nowrap justify-start md:justify-center gap-x-6 gap-y-2 text-[13px] md:order-3 lg:order-none md:col-span-2 lg:col-span-1">
          {[
            { to: "/services", label: "Palvelut" },
            { to: "/about", label: "Tietoa meistä" },
            { to: "/contact", label: "Yhteystiedot" },
            { to: "/tietosuojaseloste", label: "Tietosuojaseloste" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="whitespace-nowrap transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.38)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.38)";
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="md:text-right" style={{ color: "rgba(255,255,255,0.38)" }}>
          hello@lynevo.fi
        </div>
      </div>

      <div
        className="container-novera pb-8 text-xs pt-6 relative"
        style={{
          zIndex: 1,
          color: "rgba(255,255,255,0.20)",
          borderTop: "1px solid rgba(184,149,106,0.10)",
        }}
      >
        © 2026 Lynevo Solutions. Rakennettu suomalaisille yrityksille.
      </div>
    </footer>
  );
}
