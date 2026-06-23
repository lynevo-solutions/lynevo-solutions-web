import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { FadeUp } from "../components/FadeUp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lynevo Solutions — Tekoälyjärjestelmä tilitoimistoille" },
      {
        name: "description",
        content:
          "Rakennamme suomalaisille tilitoimistoille järjestelmän veloituksetta ensimmäiseksi kuukaudeksi. Takaamme 30 tunnin kuukausisäästön — todennetaan ROI-raportilla. Jakson jälkeen asiakas päättää jatkosta.",
      },
    ],
  }),
  component: Home,
});

// ── Easing & hero timing ─────────────────────────────────────
const E  = [0.16, 1, 0.3, 1] as const;
const HD = 1.1;
const RD = 0.8;
const BD = 1.0;
const T_EYE  = 0.15;
const T_L1   = 0.32;
const T_L2   = T_L1 + 0.15;
const T_RULE = T_L2 + HD + 0.12;
const T_SUB  = T_RULE + RD + 0.10;
const T_CTA  = T_SUB + 0.15;

// ── Dark section bg ──────────────────────────────────────────
const DARK = "#0B0A08";

// ── Reveal primitives ────────────────────────────────────────
function LineReveal({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span style={{ display: "block", overflow: "hidden" }}>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: HD, delay, ease: E }}
        style={{ display: "block" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function ClipReveal({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden${className ? ` ${className}` : ""}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: BD, delay, ease: E }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ── Cursor glow (direct DOM — zero re-renders) ───────────────
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current)
        ref.current.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(184,149,106,0.08), transparent 56%)`;
    };
    window.addEventListener("mousemove", h, { passive: true });
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return (
    <div ref={ref} aria-hidden className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }} />
  );
}

// ── Ambient hero orbs + shimmer ─────────────────────────────
function HeroOrbs() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main bloom — top right, breathes via orb-a */}
      <div
        style={{
          position: "absolute", borderRadius: "50%",
          width: 820, height: 820, top: -220, right: -180,
          background: "radial-gradient(circle, rgba(184,149,106,0.26) 0%, transparent 62%)",
          filter: "blur(78px)",
          animation: "orb-a 18s ease-in-out infinite",
        }}
      />
      {/* Secondary bloom — bottom left */}
      <div
        style={{
          position: "absolute", borderRadius: "50%",
          width: 580, height: 580, bottom: -60, left: "4%",
          background: "radial-gradient(circle, rgba(184,149,106,0.16) 0%, transparent 65%)",
          filter: "blur(95px)",
          animation: "orb-b 25s ease-in-out infinite",
        }}
      />
      {/* Centre orb — the living heartbeat of the hero */}
      <div
        style={{
          position: "absolute", borderRadius: "50%",
          width: 480, height: 480, top: "28%", left: "18%",
          background: "radial-gradient(circle, rgba(184,149,106,0.14) 0%, transparent 60%)",
          filter: "blur(65px)",
          animation: "orb-c 14s ease-in-out infinite",
        }}
      />
      {/* Slow shimmer sweep — light passing across the scene every ~20s */}
      <div
        style={{
          position: "absolute", inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0, bottom: 0,
            left: "-30%", width: "28%",
            background: "linear-gradient(to right, transparent, rgba(184,149,106,0.04), transparent)",
            animation: "hero-shimmer 20s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />
      </div>
    </div>
  );
}

// ── Trust marquee ────────────────────────────────────────────
const TRUST = [
  "Järjestelmä veloituksetta",
  "30 tunnin kuukausisäästö taataan",
  "Ei sitoumuksia",
  "Suomalaisille tilitoimistoille",
  "Jakson jälkeen asiakas päättää jatkosta",
];

function TrustMarquee() {
  const items = [...TRUST, ...TRUST];
  return (
    <div
      aria-hidden
      className="overflow-hidden select-none"
      style={{
        background: DARK,
        borderTop: "1px solid rgba(184,149,106,0.15)",
        borderBottom: "1px solid rgba(184,149,106,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          paddingBlock: "13px",
          animation: "marquee-scroll 30s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.38)",
                padding: "0 30px",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--gold)", opacity: 0.45, fontSize: "13px" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────
function Home() {
  return (
    <>
      <CursorGlow />

      {/* ─── HERO — dark, full-height ───────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: DARK }}
      >
        <HeroOrbs />

        {/* Top champagne edge line */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(184,149,106,0.5), transparent)" }}
        />

        {/* Radial warmth behind content */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse 75% 55% at 52% 40%, rgba(184,149,106,0.06) 0%, transparent 65%)" }}
        />

        {/* Bottom vignette — blends into marquee */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${DARK})` }}
        />

        <div
          className="container-novera w-full pt-12 md:pt-16 pb-16 relative"
          style={{ zIndex: 2 }}
        >
          <div className="md:w-[58%]">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: T_EYE, ease: "easeOut" }}
              className="eyebrow mb-6"
            >
              Lynevo Solutions — Helsinki
            </motion.p>

            {/* Headline */}
            <h1 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[50px] leading-[1.08] text-white">
              <LineReveal delay={T_L1}>
                Autamme tilitoimistoja siirtymään manuaalisesta työstä tehokkaampaan arkeen.
              </LineReveal>
            </h1>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: RD, delay: T_RULE, ease: E }}
              style={{ transformOrigin: "left", background: "var(--gold)", height: "1px", marginTop: "2.5rem" }}
            />

            {/* Subheading */}
            <ClipReveal delay={T_SUB} className="mt-10">
              <p className="text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                Lynevo on tekoälyosasto suomalaisille tilitoimistoille. Me rakennamme teidän tilitoimistolle oman tekoälyjärjestelmän ja pyöritämme sitä teidän puolestanne. Kytketty teidän ohjelmistoihinne. Pyörii taustalla. Kasvaa joka kuukausi.
              </p>
            </ClipReveal>

            {/* CTA */}
            <ClipReveal delay={T_CTA} className="mt-10">
              <a
                href="https://lynevo-solutions-fi.cal.com/lynevo-fi/tutustumispuhelu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm tracking-wide border transition-colors duration-300"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                }}
              >
                Varaa 30 minuutin tutustumispuhelu
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <p
                className="mt-5 text-xs tracking-wider"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                30 minuuttia. Veloituksetta. Ei sitoumuksia. Selvitetään yhdessä, sopiiko tekoälyjärjestelmä teidän tilitoimistolle.
              </p>
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* ─── TRUST MARQUEE — dark, flows from hero ──────────── */}
      <TrustMarquee />

      {/* ─── PROBLEM — arrives light after dark ─────────────── */}
      <section className="py-28 md:py-40 bg-[color:var(--background)]">
        <div className="container-novera">
          <FadeUp>
            <p className="eyebrow mb-8">Haaste</p>
          </FadeUp>
          <FadeUp delay={0.12}>
            <h2 className="text-[28px] md:text-[44px] leading-tight max-w-4xl">
              Suurin osa toimiston ajasta menee ylläpitoon. Ei kasvuun.
            </h2>
          </FadeUp>

          <div className="mt-24 grid gap-0 md:grid-cols-3 border-t border-[color:var(--divider)]">
            {[
              ["01", "Laskut, palkanlaskenta, ALV, asiakasviestintä, dokumenttien metsästys ja raporttien kirjoittaminen. Tilitoimiston omistaja käyttää tunnit toistuvaan ylläpitotyöhön. Nämä tunnit eivät kasvata liiketoimintaa. Ne vain pitävät sen käynnissä."],
              ["02", "Nykyiset taloushallinnon ohjelmistot on rakennettu helpottamaan työtä, mutta arki näyttää silti samalta: kuitteja, täsmäytyksiä, ilmoituksia ja raportteja tehdään käsin. Ohjelmistot tekevät osansa, mutta manuaalinen työ jää edelleen teidän tiimillenne."],
              ["03", "Kun omistaja ei käytä päiviä ylläpitoon, aikaa vapautuu päätöksiin, joita kukaan muu ei voi tehdä. Millaisia asiakkaita otatte sisään, mitä palveluita tuotte markkinaan ja miten kehitätte koko toimistoa seuraavaan kokoluokkaan."],
            ].map(([n, t], i) => (
              <FadeUp key={n} delay={i * 0.1}>
                <div
                  className="relative overflow-hidden pt-10 pb-12 pr-8"
                  style={{ borderRight: i < 2 ? "1px solid var(--divider)" : "none" }}
                >
                  {/* Large watermark */}
                  <div
                    aria-hidden
                    className="absolute right-4 top-4 font-serif pointer-events-none select-none"
                    style={{ fontSize: 120, lineHeight: 1, color: "rgba(184,149,106,0.07)", letterSpacing: "-0.04em" }}
                  >
                    {n}
                  </div>
                  <div
                    className="h-px mb-8 w-8"
                    style={{ background: "var(--gold)" }}
                  />
                  <p
                    className="font-sans text-xs tracking-[0.2em] uppercase mb-6"
                    style={{ color: "var(--gold)" }}
                  >
                    {n}
                  </p>
                  <p className="text-[color:var(--warm)] leading-relaxed text-[15px] relative">{t}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ───────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-[color:var(--surface)]">
        <div className="container-novera">
          <FadeUp>
            <p className="eyebrow mb-8">Mitä teemme</p>
          </FadeUp>
          <FadeUp delay={0.12}>
            <h2 className="text-[28px] md:text-[44px] leading-tight max-w-4xl">
              Kolme vaihetta. Ensimmäinen kuukausi veloituksetta.
            </h2>
          </FadeUp>

          <div className="mt-24 grid gap-px md:grid-cols-3" style={{ background: "rgba(184,149,106,0.2)" }}>
            {[
              {
                step: "Vaihe 1",
                title: "Selvitetään yhdessä",
                body: "Käymme läpi teidän tilitoimiston toistuvan työn kirjanpidosta asiakasviestintään ja raporteista hallintoon. Tunnistamme, mihin rakennetaan ensin. 30 minuutin keskustelu. Veloituksetta. Ei sitoumuksia.",
              },
              {
                step: "Vaihe 2",
                title: "Rakennamme tekoälyjärjestelmän",
                body: "Rakennamme teidän tilitoimistolle oman tekoälyjärjestelmän ja yhdistämme sen teidän ohjelmistoihinne. Kaikki testataan ennen kuin tiimistänne kukaan näkee sen. Järjestelmä on käytössä 14 arkipäivän sisällä ensimmäisten prosessien osalta.",
              },
              {
                step: "Vaihe 3",
                title: "30 päivää käyttöä. Sen jälkeen te päätätte.",
                body: "Asiakas saa ratkaisun käyttöönsä kuukaudeksi veloituksetta. Takaamme jo ensimmäisellä kuukaudella 30 tunnin kuukausisäästön, jonka todennamme ROI-raportilla. Jakson jälkeen asiakas päättää jatkosta.",
              },
            ].map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: E }}
                  className="bg-[color:var(--surface)] p-10 h-full cursor-default"
                >
                  <p className="eyebrow mb-8">{s.step}</p>
                  <h3 className="text-2xl mb-5">{s.title}</h3>
                  <p className="text-[color:var(--warm)] leading-relaxed text-[15px]">{s.body}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ───────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-[color:var(--background)]">
        <div className="container-novera">
          <FadeUp>
            <p className="eyebrow mb-8">Palvelumme</p>
          </FadeUp>
          <FadeUp delay={0.12}>
            <h2 className="text-[28px] md:text-[44px] leading-tight max-w-3xl">
              Rakennettu suomalaisille tilitoimistoille.
            </h2>
          </FadeUp>

          <div className="mt-24 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Oma tekoälyjärjestelmä ensimmäiseksi kuukaudeksi veloituksetta",
                body: "Rakennamme teidän tilitoimistolle oman tekoälyjärjestelmän ja otamme sen käyttöön teidän puolestanne. Ensimmäinen kuukausi on aina veloituksetta. Asetamme 30 tunnin säästötavoitteen ensimmäiselle kuukaudelle ja mittaamme tulokset ROI-raportilla. Jakson jälkeen te päätätte, haluatteko jatkaa kuukausisopimuksella.",
                price: "Veloitukseton käyttöönotto · 30 päivää käyttöä ennen päätöstä",
                featured: true,
              },
              {
                title: "Kuukausisopimus lyhyesti",
                body: "Jos päätätte jatkaa ensimmäisen kuukauden jälkeen, tekoälyjärjestelmästä tulee pysyvä osa teidän arkeanne. Rakennamme uusia automaatioita joka kuukausi, pidämme olemassa olevat kunnossa ja seuraamme tuloksia teidän puolestanne. Saatte kuukausittaisen strategiapuhelun ja ROI-raportin, jossa näette säästetyt tunnit ja eurovaikutuksen ennen seuraavia päätöksiä.",
                price: "Kiinteä kuukausimaksu kokoluokan mukaan · Ei yllätyslaskuja",
                featured: true,
              },
            ].map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.28, ease: E }}
                  className="relative h-full p-10 cursor-default"
                  style={
                    s.featured
                      ? { background: DARK, border: "1px solid rgba(184,149,106,0.2)" }
                      : { background: "var(--background)", border: "1px solid var(--divider)" }
                  }
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0"
                    style={{
                      height: s.featured ? "2px" : "1px",
                      background: "var(--gold)",
                      opacity: s.featured ? 1 : 0.5,
                    }}
                  />
                  <h3
                    className="text-2xl md:text-3xl mb-5"
                    style={{ color: s.featured ? "white" : "var(--ink)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="leading-relaxed mb-8 text-[15px]"
                    style={{ color: s.featured ? "rgba(255,255,255,0.5)" : "var(--warm)" }}
                  >
                    {s.body}
                  </p>
                  <p
                    className="text-sm tracking-wide"
                    style={{ color: s.featured ? "var(--gold)" : "var(--ink)" }}
                  >
                    {s.price}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY — dark section, creates rhythm ─────────────── */}
      <section
        className="py-28 md:py-40 relative overflow-hidden"
        style={{ background: DARK }}
      >
        {/* Ambient radial */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(184,149,106,0.07) 0%, transparent 70%)" }}
        />
        {/* Top edge */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(184,149,106,0.25), transparent)" }}
        />

        <div className="container-novera relative" style={{ zIndex: 1 }}>
          <FadeUp>
            <p className="eyebrow mb-8">Miksi Lynevo</p>
          </FadeUp>
          <FadeUp delay={0.12}>
            <h2
              className="text-[28px] md:text-[44px] leading-tight max-w-4xl"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Suomalainen. Rakentava. Mittaamme tulokset.
            </h2>
          </FadeUp>

          <div className="mt-24 grid gap-0 md:grid-cols-3 pt-12" style={{ borderTop: "1px solid rgba(184,149,106,0.2)" }}>
            {[
              [
                "Suomalaisille tilitoimistoille",
                "Työskentelemme ainoastaan suomalaisille tilitoimistoille. Tämä tarkoittaa, että tunnemme alan ohjelmistot, lakisääteiset velvoitteet ja kuukausirytmin. Emme tuo taloon uutta järjestelmää, vaan rakennamme tekoälyosaston, joka käyttää nykyisiä työkalujanne puolestanne.",
              ],
              [
                "Rakennamme itse",
                "Rakennamme jokaisen tekoälyjärjestelmän itse samaan tapaan kuin oman sisäisen järjestelmämme. Emme myy koulutuksia tai konsultointia, vaan pysyvän tekoälyosaston, josta otamme täyden vastuun.",
              ],
              [
                "Nolla riskiä",
                "Ensimmäinen kuukausi on aina veloituksetta. Asetamme 30 tunnin säästötavoitteen ja mittaamme tulokset ROI-raportilla. Jakson jälkeen te päätätte jatkosta, riippumatta siitä, kuinka paljon tuloksia syntyi.",
              ],
            ].map(([t, b], i) => (
              <FadeUp key={t} delay={i * 0.1}>
                <div
                  className="py-10 pr-10"
                  style={{ borderRight: i < 2 ? "1px solid rgba(184,149,106,0.12)" : "none" }}
                >
                  <div
                    className="h-px w-8 mb-8"
                    style={{ background: "var(--gold)" }}
                  />
                  <h3
                    className="text-xl md:text-2xl mb-5 font-serif"
                    style={{ color: "rgba(255,255,255,0.90)" }}
                  >
                    {t}
                  </h3>
                  <p className="leading-relaxed text-[15px]" style={{ color: "rgba(255,255,255,0.42)" }}>
                    {b}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0F0E0B" }}
      >
        {/* Gold bloom */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(ellipse 65% 50% at 50% 60%, rgba(184,149,106,0.14) 0%, transparent 68%)",
            animation: "ring-pulse 7s ease-in-out infinite",
          }}
        />
        {/* Top edge */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(184,149,106,0.35), transparent)" }}
        />

        <div className="container-novera py-32 md:py-44 relative" style={{ zIndex: 1 }}>
          <FadeUp>
            <h2
              className="text-[28px] md:text-[48px] lg:text-[56px] leading-tight max-w-4xl"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Haluatteko nähdä, miten tekoälyjärjestelmä toimii teidän tilitoimistossanne?
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p
              className="mt-8 text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.42)" }}
            >
              Varatkaa 30 minuutin tutustumispuhelu. Selvitetään yhdessä, mitkä prosessit kannattaa automatisoida ensin ja mitä 30 tunnin säästö tarkoittaisi teidän tiimillenne. Ei sitoumuksia.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="mt-12">
              <a
                href="https://lynevo-solutions-fi.cal.com/lynevo-fi/tutustumispuhelu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-9 py-5 text-sm tracking-wide border transition-colors duration-300"
                style={{ borderColor: "rgba(184,149,106,0.5)", color: "var(--gold)" }}
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
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <p
                className="mt-6 text-xs tracking-wider"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Veloituksetta. Ei sitoumuksia. Ei myyntipainetta.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
