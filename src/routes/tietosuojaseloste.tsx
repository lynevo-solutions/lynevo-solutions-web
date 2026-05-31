import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "../components/FadeUp";

export const Route = createFileRoute("/tietosuojaseloste")({
  head: () => ({
    meta: [
      { title: "Tietosuojaseloste — Lynevo Solutions" },
      {
        name: "description",
        content:
          "Lynevo Solutionsin tietosuojaseloste. Tietoa henkilötietojen käsittelystä, säilytysajoista ja rekisteröidyn oikeuksista.",
      },
      { property: "og:title", content: "Tietosuojaseloste — Lynevo Solutions" },
      {
        property: "og:description",
        content:
          "Lynevo Solutionsin tietosuojaseloste. Tietoa henkilötietojen käsittelystä, säilytysajoista ja rekisteröidyn oikeuksista.",
      },
      { property: "og:url", content: "https://lynevo.fi/tietosuojaseloste" },
    ],
    links: [{ rel: "canonical", href: "https://lynevo.fi/tietosuojaseloste" }],
  }),
  component: PrivacyPage,
});

const DARK = "#0B0A08";

const sections = [
  {
    eyebrow: "Rekisterinpitäjä",
    content: (
      <>
        <p>Lynevo Solutions</p>
        <p>Helsinki, Suomi</p>
        <p>
          Sähköposti:{" "}
          <a
            href="mailto:hello@lynevo.fi"
            className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
          >
            hello@lynevo.fi
          </a>
        </p>
      </>
    ),
  },
  {
    eyebrow: "Yhteyshenkilö rekisteriä koskevissa asioissa",
    content: (
      <>
        <p>
          Sähköposti:{" "}
          <a
            href="mailto:hello@lynevo.fi"
            className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
          >
            hello@lynevo.fi
          </a>
        </p>
        <p>
          Vastaamme tietosuojaa koskeviin kysymyksiin yhden arkipäivän
          kuluessa.
        </p>
      </>
    ),
  },
  {
    eyebrow: "Rekisterin nimi",
    content: (
      <p>
        Lynevo Solutions asiakasrekisteri ja yhteydenottolomakkeen tiedot.
      </p>
    ),
  },
  {
    eyebrow: "Henkilötietojen käsittelyn tarkoitus",
    content: (
      <>
        <p>Keräämme henkilötietoja ainoastaan seuraaviin tarkoituksiin:</p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>Yhteydenottolomakkeen kautta lähetettyihin viesteihin vastaaminen</li>
          <li>Potentiaalisten asiakkaiden yhteydenottojen hallinta</li>
          <li>Sovittujen tapaamisten järjestäminen</li>
        </ul>
        <p className="mt-4">
          Tietoja ei käytetä suoramarkkinointiin ilman erillistä suostumusta.
        </p>
      </>
    ),
  },
  {
    eyebrow: "Rekisterin tietosisältö",
    content: (
      <>
        <p>Voimme kerätä seuraavia tietoja:</p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>Etunimi ja sukunimi</li>
          <li>Yrityksen nimi</li>
          <li>Sähköpostiosoite</li>
          <li>Yhteydenottoviestin sisältö</li>
        </ul>
        <p className="mt-4">Emme kerää arkaluonteisia henkilötietoja.</p>
      </>
    ),
  },
  {
    eyebrow: "Säännönmukaiset tietolähteet",
    content: (
      <p>
        Tiedot kerätään suoraan rekisteröidyltä itseltään verkkosivustomme
        yhteydenottolomakkeen kautta.
      </p>
    ),
  },
  {
    eyebrow: "Tietojen säilytysaika",
    content: (
      <p>
        Säilytämme henkilötietoja niin kauan kuin on tarpeen yhteydenoton
        käsittelemiseksi ja mahdollisen asiakassuhteen hoitamiseksi —
        kuitenkin enintään 24 kuukautta viimeisestä kontaktista. Tämän
        jälkeen tiedot poistetaan.
      </p>
    ),
  },
  {
    eyebrow: "Tietojen säännönmukaiset luovutukset",
    content: (
      <>
        <p>
          Emme luovuta, myy tai vuokraa henkilötietoja kolmansille osapuolille.
          Käytämme seuraavia kolmannen osapuolen palveluita lomakkeen
          käsittelyyn:
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>
            Formspree (lomakkeiden käsittely) — tietosuojaseloste:{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
            >
              formspree.io/legal/privacy-policy
            </a>
          </li>
          <li>
            Cal.com (ajanvaraukset) — tietosuojaseloste:{" "}
            <a
              href="https://cal.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
            >
              cal.com/privacy
            </a>
          </li>
        </ul>
        <p className="mt-4">
          Nämä palvelut käsittelevät tietoja omien tietosuojakäytäntöjensä
          mukaisesti.
        </p>
      </>
    ),
  },
  {
    eyebrow: "Tietojen siirto EU:n ulkopuolelle",
    content: (
      <p>
        Lomakkeiden käsittelyyn käyttämämme palvelut voivat sijaita EU:n
        ulkopuolella. Nämä palveluntarjoajat noudattavat GDPR:n mukaisia
        tietosuojaperiaatteita ja EU:n komission hyväksymiä
        tiedonsiirtomekanismeja.
      </p>
    ),
  },
  {
    eyebrow: "Rekisterin suojauksen periaatteet",
    content: (
      <p>
        Henkilötietoja käsitellään luottamuksellisesti. Pääsy tietoihin on
        rajattu ainoastaan Lynevo Solutionsin perustajille, joilla on tarve
        käsitellä tietoja työtehtäviensä vuoksi.
      </p>
    ),
  },
  {
    eyebrow: "Rekisteröidyn oikeudet",
    content: (
      <>
        <p>Teillä on seuraavat oikeudet henkilötietojenne suhteen:</p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>Oikeus tarkastaa itseään koskevat tiedot</li>
          <li>Oikeus vaatia virheellisten tietojen oikaisemista</li>
          <li>Oikeus vaatia tietojen poistamista</li>
          <li>Oikeus rajoittaa tietojen käsittelyä</li>
          <li>Oikeus siirtää tiedot järjestelmästä toiseen</li>
          <li>Oikeus vastustaa tietojen käsittelyä</li>
        </ul>
        <p className="mt-4">
          Pyyntöjen käsittelyaika on enintään 30 päivää. Lähettäkää pyyntönne
          osoitteeseen{" "}
          <a
            href="mailto:hello@lynevo.fi"
            className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
          >
            hello@lynevo.fi
          </a>
          .
        </p>
      </>
    ),
  },
  {
    eyebrow: "Oikeus tehdä valitus valvontaviranomaiselle",
    content: (
      <>
        <p>
          Teillä on oikeus tehdä valitus tietosuojavaltuutetulle, jos
          katsotte, että henkilötietojenne käsittelyssä on rikottu
          tietosuojalainsäädäntöä.
        </p>
        <p className="mt-4">
          Tietosuojavaltuutetun toimisto:{" "}
          <a
            href="https://tietosuoja.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
          >
            tietosuoja.fi
          </a>
        </p>
      </>
    ),
  },
  {
    eyebrow: "Evästeet",
    content: (
      <p>
        Verkkosivustomme ei tällä hetkellä käytä seurantaevästeitä tai
        analytiikkatyökaluja. Jos tämä muuttuu, päivitämme tämän selosteen ja
        lisäämme asianmukaisen evästeilmoituksen.
      </p>
    ),
  },
  {
    eyebrow: "Tietosuojaselosteen muutokset",
    content: (
      <p>
        Pidätämme oikeuden päivittää tätä tietosuojaselostetta. Viimeisin
        versio on aina saatavilla osoitteessa{" "}
        <a
          href="https://lynevo.fi/tietosuojaseloste"
          className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
        >
          lynevo.fi/tietosuojaseloste
        </a>
        . Viimeksi päivitetty: toukokuu 2026.
      </p>
    ),
  },
];

function PrivacyPage() {
  return (
    <>
      {/* ─── DARK HERO — compact ────────────────────────────── */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: DARK }}
      >
        {/* Ambient bloom */}
        <div
          aria-hidden
          style={{
            position: "absolute", borderRadius: "50%",
            width: 500, height: 400, top: -100, right: 0,
            background: "radial-gradient(circle, rgba(184,149,106,0.12) 0%, transparent 65%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        {/* Top edge line */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(184,149,106,0.40), transparent)" }}
        />
        {/* Bottom vignette */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${DARK})` }}
        />

        <div className="container-novera max-w-3xl relative" style={{ zIndex: 1 }}>
          <FadeUp>
            <p className="eyebrow mb-6">Tietosuojaseloste</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              className="text-[28px] md:text-[44px] leading-[1.05]"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Tietosuojaseloste
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* ─── CONTENT — light, fully readable ────────────────── */}
      <section className="py-20 pb-32 md:pb-40 bg-[color:var(--background)]">
        <div className="container-novera max-w-3xl">
          <div className="space-y-14 md:space-y-18">
            {sections.map((section, i) => (
              <FadeUp key={section.eyebrow} delay={i === 0 ? 0.1 : 0}>
                <div
                  className="pt-10"
                  style={{ borderTop: "1px solid var(--divider)" }}
                >
                  <p className="eyebrow mb-4">{section.eyebrow}</p>
                  <div
                    className="leading-relaxed space-y-2"
                    style={{ color: "var(--ink)" }}
                  >
                    {section.content}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
