import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "../components/FadeUp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Palvelut — Lynevo Solutions" },
      {
        name: "description",
        content:
          "Palvelut, jotka on rakennettu päätösten ympärille. Tutustu 1 990 € AI-mahdollisuuskartoitukseen, käyttöönottoon, koulutukseen ja strategiseen kumppanuuteen.",
      },
    ],
  }),
  component: ServicesPage,
});

const DARK = "#0B0A08";
const E = [0.16, 1, 0.3, 1] as const;

function ServicesPage() {
  const included = [
    "90 minuutin strukturoitu kartoitussessio johtoryhmänne kanssa",
    "Kattava toimintaprosessien kartoitus ydinpalveluidenne osalta",
    "AI-mahdollisuusanalyysi priorisoituna ROI:n, toteutettavuuden ja käyttöönottokustannusten mukaan",
    "Työkalukohtaiset suositukset toimittajavertailuineen",
    "Ammattimainen kirjallinen raportti (15–25 sivua), toimitetaan 10 arkipäivässä",
    "60 minuutin purku-sessio, jossa käymme läpi löydökset ja vastaamme kysymyksiin",
  ];

  const ladder = [
    {
      step: "02",
      title: "Käyttöönotto",
      body: "Otamme käyttöön suositellut työkalut ja koulutamme tiimienne käyttämään niitä itsenäisesti — hidastamatta toimintaanne.",
    },
    {
      step: "03",
      title: "Koulutus ja työpajat",
      body: "Strukturoidut ohjelmat, joissa tiimienne ymmärrys AI-työkaluista syvenee aidosti — ei pelkkä pintaraapaisu. Räätälöity toimistonne työnkulkuihin.",
    },
    {
      step: "04",
      title: "Strateginen kumppanuus",
      body: "Tulemme toimistonne jatkuvaksi AI-kumppaniksi — ohjaamme kehityspolkuanne kuukausittain teknologian ja liiketoimintanne kehittyessä.",
    },
  ];

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
            width: 700, height: 600, top: -160, right: -100,
            background: "radial-gradient(circle, rgba(184,149,106,0.18) 0%, transparent 62%)",
            filter: "blur(85px)",
            animation: "orb-a 18s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute", borderRadius: "50%",
            width: 400, height: 400, bottom: -60, left: "5%",
            background: "radial-gradient(circle, rgba(184,149,106,0.09) 0%, transparent 65%)",
            filter: "blur(80px)",
            animation: "orb-b 22s ease-in-out infinite",
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
            <p className="eyebrow mb-6">Palvelut</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              className="text-[30px] md:text-[46px] lg:text-[56px] leading-[1.05] max-w-5xl"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Palvelut, jotka on rakennettu päätösten — ei toimitusten —
              ympärille.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="mt-10 text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Jokainen toimeksianto alkaa selkeästä lopputuloksesta. Emme tee
              epämääräistä. Emme tee retainereitä, joita ette voi perustella.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ─── AI AUDIT FEATURED — light, content-heavy ───────── */}
      <section className="py-28 md:py-40 bg-[color:var(--surface)]">
        <div className="container-novera">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <FadeUp>
                <p className="eyebrow mb-6">Pääpalvelu · 01</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-[30px] md:text-[48px] leading-tight">
                  AI-mahdollisuuskartoitus
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="mt-8 flex items-baseline gap-4">
                  <span className="text-5xl md:text-6xl font-serif text-[color:var(--ink)]">
                    1 990 €
                  </span>
                  <span
                    className="text-sm tracking-wide"
                    style={{ color: "var(--warm)" }}
                  >
                    kiinteä hinta
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p
                  className="mt-8 text-lg leading-relaxed max-w-xl"
                  style={{ color: "var(--warm)" }}
                >
                  Strukturoitu selvitys tilitoimistoille, jotka haluavat
                  ymmärtää tarkalleen, missä AI luo mitattavaa arvoa — ja
                  missä ei. Ei hypeä. Ei yleisiä suosituksia. Konkreettiset
                  löydökset, konkreettiset työkalut, konkreettinen ROI-kehys.
                </p>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="mt-12">
                  <p className="eyebrow mb-6">Mitä sisältyy</p>
                  <ul
                    className="divide-y border-t"
                    style={{
                      borderColor: "var(--divider)",
                    }}
                  >
                    {included.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 py-5"
                        style={{ borderColor: "var(--divider)" }}
                      >
                        <span
                          className="block w-6 h-px mt-3 flex-shrink-0"
                          style={{ background: "var(--gold)" }}
                        />
                        <span
                          className="leading-relaxed"
                          style={{ color: "var(--ink)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="mt-12">
                  <a
                    href="https://lynevo-solutions-fi.cal.com/lynevo-fi/tutustumispuhelu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 text-sm border transition-colors duration-300"
                    style={{
                      background: "var(--ink)",
                      color: "var(--background)",
                      borderColor: "var(--ink)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--ink)";
                    }}
                  >
                    Varaa AI-mahdollisuuskartoitus — 1 990 € <span>→</span>
                  </a>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-5 lg:pl-8">
              <FadeUp delay={0.2}>
                <div
                  className="pt-8 lg:sticky lg:top-28"
                  style={{ borderTop: "1px solid var(--gold)" }}
                >
                  <p className="eyebrow mb-6">Kenelle tämä sopii</p>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--ink)" }}>
                    Tilitoimistoille, joissa on 5–20 työntekijää ja jotka
                    epäilevät AI:n voivan parantaa toimintaansa — mutta eivät
                    tiedä mistä aloittaa, tai ovat kokeilleet työkaluja ilman
                    strategiaa.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE LADDER — dark ──────────────────────────── */}
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
              "radial-gradient(ellipse 60% 45% at 70% 50%, rgba(184,149,106,0.07) 0%, transparent 70%)",
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
            <p className="eyebrow mb-8">Palvelupolku</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="text-[28px] md:text-[44px] leading-tight max-w-3xl"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Kartoitus → Käyttöönotto → Koulutus → Kumppanuus
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="mt-6 text-sm tracking-wider"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Useimmat asiakkaat aloittavat kartoituksella. Mitä seuraavaksi
              tapahtuu, riippuu siitä, mitä löydämme.
            </p>
          </FadeUp>

          <div
            className="mt-20"
            style={{
              borderTop: "1px solid rgba(184,149,106,0.2)",
              borderBottom: "1px solid rgba(184,149,106,0.2)",
            }}
          >
            {ladder.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.1}>
                <div
                  className="grid md:grid-cols-12 gap-8 py-10"
                  style={{
                    borderBottom:
                      i < ladder.length - 1
                        ? "1px solid rgba(184,149,106,0.12)"
                        : "none",
                  }}
                >
                  <div
                    className="md:col-span-2 font-serif text-2xl"
                    style={{ color: "var(--gold)" }}
                  >
                    {s.step}
                  </div>
                  <div className="md:col-span-4">
                    <h3
                      className="text-2xl md:text-3xl"
                      style={{ color: "rgba(255,255,255,0.92)" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p
                      className="leading-relaxed text-[15px]"
                      style={{ color: "rgba(255,255,255,0.50)" }}
                    >
                      {s.body}
                    </p>
                  </div>
                  <div
                    className="md:col-span-1 text-sm md:text-right"
                    style={{ color: "rgba(255,255,255,0.30)" }}
                  >
                    Tarjous
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Closing CTA within dark section */}
          <FadeUp delay={0.3}>
            <div className="mt-16">
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
                Aloita kartoituksella
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
