import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FadeUp } from "../components/FadeUp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Palvelut — Lynevo Solutions" },
      {
        name: "description",
        content:
          "Järjestelmä suomalaisille tilitoimistoille. Veloitukseton käyttöönotto, tuloksiin sidottu kuukausisopimus. Takaamme 30 tunnin kuukausisäästön ensimmäisellä kuukaudella.",
      },
    ],
  }),
  component: ServicesPage,
});

const DARK = "#0B0A08";
const E = [0.16, 1, 0.3, 1] as const;

function ServicesPage() {
  const included: { label: string; body: string }[] = [
    { label: "Jatkuva kehitys", body: "Uusia automaatioita rakennettuna ja asennettuna joka kuukausi." },
    { label: "Täysi ylläpito", body: "Valvomme järjestelmää 24/7, jotta teidän ei tarvitse." },
    { label: "Mitattavat tulokset", body: "Kuukausittainen ROI-raportti säästetyistä tunneista ja euroista." },
    { label: "Strategiapuhelu", body: "Kuukausipalaveri, jossa käymme läpi tulokset ja seuraavat askeleet." },
    { label: "Suora tuki", body: "Ei välikäsiä tai tukitikettejä. Puhutte aina suoraan järjestelmän rakentajalle." },
    { label: "Kiinteä hinta", body: "Ei yllätyslaskuja. Ylläpito, korjaukset ja kehitys sisältyvät aina hintaan." },
  ];

  const ladder = [
    {
      step: "01",
      title: "Käyttöönotto",
      body: "Määritämme yhdessä lähtötilanteen ja rakennamme tekoälyjärjestelmän teidän tilitoimistollenne. Otamme ensimmäiset automaatiot käyttöön 14 arkipäivän sisällä. Ei aloitusmaksua. Ei sitoumuksia.",
    },
    {
      step: "02",
      title: "Ensimmäinen kuukausi",
      body: "Automaatiot pyörivät taustalla. Kirjaamme yhdessä sovitun lähtötilanteen ja toteutuneen ajan, ja ROI-raportti näyttää säästetyt tunnit täsmällisesti ilman ylöspäin pyöristyksiä.",
    },
    {
      step: "03",
      title: "Kuukausisopimus",
      body: "Kuukausisopimus alkaa vain, jos haluatte jatkaa ensimmäisen kuukauden jälkeen. ROI-raportti näyttää konkreettisesti, mitä järjestelmä on tehnyt. Te päätätte, alkaako kuukausisopimus.",
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
              Yksi palvelu. Yksi takuu. Nolla riskiä.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="mt-10 text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Rakennamme, otamme käyttöön ja ylläpidämme tekoälyjärjestelmän, joka automatisoi teidän tilitoimiston manuaalisia prosesseja. Ensimmäinen kuukausi on aina veloituksetta. Jakson jälkeen te päätätte jatkosta.
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
                <p className="eyebrow mb-6">Palvelumme</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-[30px] md:text-[48px] leading-tight">
                  Järjestelmä veloituksetta. Ensimmäinen kuukausi ilman sitoumuksia.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p
                  className="mt-8 text-lg leading-relaxed max-w-xl"
                  style={{ color: "var(--warm)" }}
                >
                  Rakennamme ja ylläpidämme tekoälyjärjestelmän, joka automatisoi teidän tilitoimistonne manuaalisia prosesseja. Ensimmäinen kuukausi on veloituksetta. Asetamme 30 tunnin säästötavoitteen ensimmäiselle kuukaudelle ja mittaamme tulokset ROI-raportilla. Jakson jälkeen te päätätte jatkosta.
                </p>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="mt-12">
                  <p className="eyebrow mb-6">Mitä kuukausisopimus sisältää</p>
                  <ul
                    className="divide-y border-t"
                    style={{
                      borderColor: "var(--divider)",
                    }}
                  >
                    {included.map((item) => (
                      <li
                        key={item.label}
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
                          <strong>{item.label}:</strong> {item.body}
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
                    Varaa maksuton tutustumispuhelu <span>→</span>
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
                    Tämä on oikea ratkaisu vakiintuneille suomalaisille tilitoimistoille, joissa manuaalinen ylläpitotyö syö asiantuntijoiden aikaa ja hidastaa kasvua.
                  </p>
                  <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--ink)" }}>
                    Jos tiiminne käyttää kuukausittain kymmeniä tunteja tietojen kopiointiin, täsmäytyksiin tai rutiiniraporttien kokoamiseen olemassa olevista taloushallinnon järjestelmistä, tekoälyosastomme pystyy vapauttamaan sen ajan. Tavoitteenamme on aina minimissään 30 tunnin säästö jo ensimmäisen kuukauden aikana.
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
            <p className="eyebrow mb-8">Takuu</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="text-[28px] md:text-[44px] leading-tight max-w-3xl"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Takuu, joka on kirjattu sopimukseen.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="mt-6 text-sm tracking-wider"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Ensimmäinen kuukausi on veloituksetta. Asetamme 30 tunnin säästötavoitteen ja mittaamme tulokset ROI-raportilla. Jakson jälkeen te päätätte jatkosta. Takuu on luottamussignaali, ei maksuvelvollisuuden ehto: vaikka järjestelmä säästäisi yli 30 tuntia, ette ole automaattisesti velvoitettuja jatkamaan.
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
                    →
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
                Varaa tutustumispuhelu
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-[color:var(--background)]">
        <div className="container-novera max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-8">FAQ</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-[28px] md:text-[40px] leading-tight mb-16">
              Usein kysytyt kysymykset
            </h2>
          </FadeUp>
          <FAQList />
        </div>
      </section>

      {/* ─── SERVICES CTA ─────────────────────────────────────── */}
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

        <div className="container-novera py-32 md:py-44 relative" style={{ zIndex: 1 }}>
          <FadeUp>
            <h2
              className="text-[26px] md:text-[42px] leading-tight max-w-3xl"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Haluatteko nähdä, mitä 30 tunnin säästö tarkoittaisi teidän tilitoimistossanne?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p
              className="mt-8 text-lg max-w-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Varaa tutustumispuhelu. Käymme läpi teidän tilanteenne, arvioimme säästöpotentiaalin ja näytämme, miltä ensimmäisen kuukauden ROI-raportti voisi näyttää.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
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
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p
              className="mt-6 text-sm tracking-wider"
              style={{ color: "rgba(255,255,255,0.30)" }}
            >
              Veloituksetta. Ei sitoumuksia.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

const FAQ_ITEMS = [
  {
    q: "Kuulostaa liian hyvältä ollakseen totta.",
    a: "Ymmärrän skeptisyyden. Siksi teemme sen veloituksetta ja mittaamme tulokset. Jakson jälkeen te päätätte jatkosta. Ei teille mitään maksettavaa ennen sitä.",
  },
  {
    q: "Meillä on jo tekoäly ohjelmistossa.",
    a: "Täydellinen. Me rakennamme sen päälle oman tekoälyosaston, joka yhdistää kaiken ja hoitaa prosessit automaattisesti. Ohjelmistojen ominaisuudet eivät häviä, vaan tulevat paremmin käyttöön.",
  },
  {
    q: "Kuinka paljon meidän pitää käyttää tähän aikaa?",
    a: "Teidän ajankäyttönne on rajattu muutamaan selkeään hetkeen: 30 minuutin tutustumispuhelu, lyhyt aloituskartoitus ja portaali-kävely. Sen jälkeen järjestelmä pyörii taustalla, ja te näette tulokset ROI-raportista. Emme teetä teillä IT-projektia.",
  },
  {
    q: "Mitä jos emme halua jatkaa 30 päivän jälkeen?",
    a: "Silloin ette jatka. Ensimmäinen kuukausi on veloituksetta riippumatta tuloksista, ja yhteistyö päättyy ilman maksuvelvoitetta. Järjestelmä on rakennettu teitä varten, mutta te päätätte aina itse, jatkatteko.",
  },
  {
    q: "Mitä jos järjestelmä tekee virheitä kirjanpidossa?",
    a: "Tekoälyjärjestelmä ei tee päätöksiä itsenäisesti eikä muuta kirjanpidon logiikkaa. Se on rakennettu hoitamaan rutiineja – lukemaan tietoa, täsmäyttämään sitä ja valmistelemaan sitä teidän asiantuntijoidenne hyväksyttäväksi. Järjestelmä on aina teidän hallinnassanne ja kaikki testataan ennen julkaisua.",
  },
  {
    q: "Onko hinta jatkossa tuloksiin sidottu tai tuntiveloitteinen?",
    a: "Ei ole. Hinta on kiinteä kuukausimaksu, joka perustuu tilitoimistonne kokoluokkaan, eikä se nouse automaatioiden lisääntyessä. Tavoitteemme on, että kiinteä kuukausimaksu on aina huomattavasti pienempi kuin järjestelmän vapauttama työaika mitattuna euroissa.",
  },
  {
    q: "Voimmeko perua kuukausisopimuksen myöhemmin?",
    a: "Kyllä. Me emme usko määräaikaisiin lukkoihin. Jos päätätte jatkaa ensimmäisen veloituksettoman kuukauden jälkeen, jatkossa voitte irtisanoa sopimuksen koska tahansa, mikäli ette koe saavanne siitä riittävästi lisäarvoa.",
  },
];

function FAQList() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y" style={{ borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}>
      {FAQ_ITEMS.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 py-6 text-left"
            style={{ color: "var(--ink)" }}
          >
            <span className="text-[17px] leading-snug">{item.q}</span>
            <span
              className="flex-shrink-0 text-lg transition-transform duration-300"
              style={{
                color: "var(--gold)",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p
              className="pb-7 text-[15px] leading-relaxed max-w-2xl"
              style={{ color: "var(--warm)" }}
            >
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
