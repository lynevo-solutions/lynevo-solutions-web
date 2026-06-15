import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "../components/FadeUp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tietoa meistä — Lynevo Solutions" },
      {
        name: "description",
        content:
          "Tekijöitä, ei konsultteja. Lynevo rakennettiin kahden myynti- ja liiketoiminnan kehittämistaustaisen henkilön toimesta, keskittyen suomalaiseen markkinaan.",
      },
    ],
  }),
  component: AboutPage,
});

const DARK = "#0B0A08";

function AboutPage() {
  return (
    <>
      {/* ─── DARK HERO ──────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
        style={{ background: DARK }}
      >
        {/* Ambient bloom */}
        <div
          aria-hidden
          style={{
            position: "absolute", borderRadius: "50%",
            width: 700, height: 500, top: -120, right: -80,
            background: "radial-gradient(circle, rgba(184,149,106,0.16) 0%, transparent 65%)",
            filter: "blur(90px)",
            animation: "orb-a 20s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute", borderRadius: "50%",
            width: 400, height: 400, bottom: 0, left: "10%",
            background: "radial-gradient(circle, rgba(184,149,106,0.08) 0%, transparent 65%)",
            filter: "blur(80px)",
            animation: "orb-b 24s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        {/* Top edge line */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(184,149,106,0.45), transparent)" }}
        />
        {/* Bottom vignette */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${DARK})` }}
        />

        <div className="container-novera relative" style={{ zIndex: 1 }}>
          <FadeUp>
            <p className="eyebrow mb-6">Tietoa Lynevosta</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              className="text-[30px] md:text-[46px] lg:text-[56px] leading-[1.05] max-w-5xl"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Haluamme palauttaa tilitoimistojen omistajille heidän aikansa.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="mt-10 text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Lynevo syntyi, kun näimme saman asian yhä uudelleen. Tilitoimistoilla on valtava määrä toistuvaa manuaalista työtä, joka voidaan automatisoida — mutta kukaan ei ole rakentanut sitä heille. Haluamme muuttaa sen.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ─── APPROACH — light surface ───────────────────────── */}
      <section className="py-28 md:py-40 bg-[color:var(--surface)]">
        <div className="container-novera grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <FadeUp>
              <p className="eyebrow">Lähestymistapamme</p>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <FadeUp delay={0.1}>
              <p className="text-[22px] md:text-[26px] leading-snug font-serif text-[color:var(--ink)]">
                Emme myy teoriaa. Rakennamme järjestelmiä. Jokainen asiakas saa järjestelmän ilmaiseksi — kuukausisopimus käynnistyy vasta kun ROI-raportti vahvistaa 30 tunnin säästön. Jos emme pääse tavoitteeseen, ette maksa mitään.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── WHY ACCOUNTING — light warm white ──────────────── */}
      <section className="py-28 md:py-40 bg-[color:var(--background)]">
        <div className="container-novera grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <FadeUp>
              <p className="eyebrow">Miksi tilitoimistot</p>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <FadeUp delay={0.1}>
              <p className="text-xl md:text-2xl leading-relaxed text-[color:var(--ink)]">
                Tilitoimistoilla on enemmän toistuvaa manuaalista työtä kuin millään muulla pienyrityskentässä. Laskut, palkanlaskenta, ALV, raportointi — sama työ, joka kuukausi. Juuri siksi automaatio tuottaa täällä eniten ja nopeimmin. Kukaan muu ei rakenna juuri tähän markkinarakoon. Siksi me teemme.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── VALUES — dark, matches homepage WHY section ────── */}
      <section
        className="py-28 md:py-40 relative overflow-hidden"
        style={{ background: DARK }}
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 65% 50% at 35% 50%, rgba(184,149,106,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Top edge */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(184,149,106,0.25), transparent)" }}
        />

        <div className="container-novera relative" style={{ zIndex: 1 }}>
          <FadeUp>
            <p className="eyebrow mb-12">Arvomme</p>
          </FadeUp>

          <div
            className="grid gap-0 md:grid-cols-3 pt-12"
            style={{ borderTop: "1px solid rgba(184,149,106,0.2)" }}
          >
            {[
              [
                "Rehellisyys ennen varmuutta",
                "Saatte rehellisen näkemyksen ilman turhaa kiertelyä.",
              ],
              [
                "Tulokset ennen veloitusta",
                "Selkeät havainnot ennen laskutusta.",
              ],
              [
                "Paikallinen ymmärrys",
                "Tunnemme suomalaiset tilitoimistot, niiden arjen ja markkinan.",
              ],
            ].map(([t, b], i) => (
              <FadeUp key={t} delay={i * 0.1}>
                <div
                  className="py-10 pr-10"
                  style={{
                    borderRight:
                      i < 2 ? "1px solid rgba(184,149,106,0.12)" : "none",
                  }}
                >
                  <div
                    className="h-px w-8 mb-8"
                    style={{ background: "var(--gold)" }}
                  />
                  <h3
                    className="text-xl md:text-2xl mb-4 font-serif"
                    style={{ color: "rgba(255,255,255,0.92)" }}
                  >
                    {t}
                  </h3>
                  <p
                    className="leading-relaxed text-[15px]"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                  >
                    {b}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — dark, gold-bordered button ───────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0F0E0B" }}
      >
        {/* Gold bloom */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(184,149,106,0.12) 0%, transparent 70%)",
            animation: "ring-pulse 7s ease-in-out infinite",
          }}
        />
        {/* Top edge */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(184,149,106,0.3), transparent)" }}
        />

        <div
          className="container-novera py-32 md:py-44 relative"
          style={{ zIndex: 1 }}
        >
          <FadeUp>
            <h2
              className="text-[26px] md:text-[42px] leading-tight max-w-3xl"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Haluatteko nähdä, miten järjestelmä toimii teidän toimistossanne?
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="mt-12">
              <a
                href="https://lynevo-solutions-fi.cal.com/lynevo-fi/tutustumispuhelu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm border transition-colors duration-300"
                style={{
                  borderColor: "rgba(184,149,106,0.5)",
                  color: "var(--gold)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.background = "rgba(184,149,106,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(184,149,106,0.5)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Varaa tutustumispuhelu
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
