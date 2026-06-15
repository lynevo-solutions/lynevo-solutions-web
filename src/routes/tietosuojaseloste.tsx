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

const sub = (text: string) => (
  <p className="font-serif text-lg mt-6 mb-2" style={{ color: "var(--ink)" }}>
    {text}
  </p>
);

const sections = [
  {
    eyebrow: "1. Rekisterinpitäjä",
    content: (
      <>
        <p>Lynevo Solutions Oy</p>
        <p>Y-tunnus: 3629364-2</p>
        <p>Harjannetie 44 C 66, 00710 Helsinki</p>
        <p>
          Sähköposti:{" "}
          <a
            href="mailto:hello@lynevo.fi"
            className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
          >
            hello@lynevo.fi
          </a>
        </p>
        <p className="mt-4">
          Vastaamme tietosuojaa koskeviin kysymyksiin viiden arkipäivän
          kuluessa.
        </p>
      </>
    ),
  },
  {
    eyebrow: "2. Käsiteltävät henkilötiedot",
    content: (
      <>
        <p>Käsittelemme kahta erillistä henkilötietoryhmää.</p>

        {sub("Prospektitiedot")}
        <p>Keräämme potentiaalisista asiakkaista seuraavat tiedot:</p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>Etunimi ja sukunimi</li>
          <li>Yrityksen nimi</li>
          <li>Sähköpostiosoite</li>
          <li>Puhelinnumero</li>
          <li>Myyntiprosessiin liittyvät muistiinpanot ja yhteydenottotiedot</li>
        </ul>

        {sub("Asiakastiedot")}
        <p>
          Osana tekoälyjärjestelmäpalvelun käyttöönottoa ja ylläpitoa
          käsittelemme asiakasyrityksen toimittamia tai sen järjestelmistä
          saatavia tietoja. Nämä tiedot voivat sisältää:
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>Taloushallinnon asiakirjat ja kirjanpitoaineistot</li>
          <li>Palkanlaskenta-aineistot sekä Tulorekisteri-ilmoituksiin liittyvät tiedot</li>
          <li>Arvonlisäverotiedot ja -ilmoitukset</li>
          <li>Asiakasyrityksen ja sen asiakkaiden välinen viestintä sekä asiakirjat</li>
        </ul>
        <p className="mt-4">
          Asiakastietojen osalta Lynevo Solutions Oy toimii henkilötietojen
          käsittelijänä (GDPR artikla 28). Asiakasyritys on näiden tietojen
          rekisterinpitäjä ja vastaa siitä, että tietojen käsittelylle on
          lainmukainen peruste.
        </p>
      </>
    ),
  },
  {
    eyebrow: "3. Käsittelyn tarkoitus ja oikeusperuste",
    content: (
      <>
        {sub("Prospektitiedot")}
        <p>
          Käsittelemme prospektitietoja myynti- ja markkinointitoimintamme
          toteuttamiseksi sekä mahdollisten asiakassuhteiden hoitamiseksi.
          Käsittelyn oikeusperuste on oikeutettu etu (GDPR artikla 6(1)(f)).
          Meillä on oikeutettu liiketoiminnallinen intressi ottaa yhteyttä
          yrityksiin, joille palvelumme voi tuottaa merkittävää hyötyä. Tämä
          intressi ei ylitä rekisteröityjen kohtuullisia odotuksia
          B2B-ympäristössä.
        </p>
        <p className="mt-4">
          Teillä on milloin tahansa oikeus vastustaa tietojenne käsittelyä
          suoramarkkinointitarkoituksiin. Pyyntö voidaan lähettää
          osoitteeseen{" "}
          <a
            href="mailto:hello@lynevo.fi"
            className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
          >
            hello@lynevo.fi
          </a>
          , minkä jälkeen tietoja ei enää käsitellä kyseiseen tarkoitukseen.
        </p>

        {sub("Asiakastiedot")}
        <p>
          Käsittelemme asiakastietoja asiakassopimuksen täytäntöönpanemiseksi
          (GDPR artikla 6(1)(b)). Käsittely on välttämätöntä sovitun palvelun
          toimittamiseksi.
        </p>
      </>
    ),
  },
  {
    eyebrow: "4. Tietojen vastaanottajat ja tietojen sijainti",
    content: (
      <>
        <p>
          Käytämme seuraavia alihankkijoita henkilötietojen käsittelyssä.
          Emme myy, vuokraa tai luovuta henkilötietoja muille kolmansille
          osapuolille.
        </p>

        {sub("Microsoft Azure — Finland Central (Suomi)")}
        <p>
          Tekoälyjärjestelmän infrastruktuuri sekä asiakastietojen tallennus
          ja käsittely. Tiedot sijaitsevat Suomessa. EU:n tietosuojasäännöt
          soveltuvat täysimääräisesti.
        </p>

        {sub("Anthropic PBC (Yhdysvallat)")}
        <p>
          Tekoälyjärjestelmän kielimallipalvelut. Käsittelemiämme
          asiakastietoja välitetään Anthropicin API-rajapinnan kautta
          tekoälyprosessoinnin ajaksi. Käsittely tapahtuu Yhdysvalloissa.
          Tiedonsiirto perustuu Euroopan komission hyväksymiin
          vakiosopimuslausekkeisiin (SCC, GDPR artikla 46(2)(c)). Anthropic
          ei käytä API-rajapinnan kautta välitettyjä tietoja
          tekoälymallien kouluttamiseen.
        </p>

        {sub("Google LLC — Google Workspace (Yhdysvallat)")}
        <p>
          Sähköposti- ja kalenteripalvelut sisäiseen viestintään.
          Tiedonsiirto perustuu vakiosopimuslausekkeisiin (SCC).
        </p>
      </>
    ),
  },
  {
    eyebrow: "5. Tietojen säilytysaika",
    content: (
      <>
        {sub("Prospektitiedot")}
        <p>
          Säilytämme tietoja aktiivisen myynti- ja yhteydenottoprosessin ajan
          sekä 12 kuukautta viimeisestä yhteydenotosta tai myyntiprosessin
          päättymisestä. Mikäli rekisteröity pyytää tietojen poistamista,
          poistamme tiedot 30 päivän kuluessa pyynnöstä.
        </p>

        {sub("Asiakastiedot")}
        <p>
          Poistamme kaikki asiakkaan toimittamat tai asiakkaan järjestelmistä
          käsitellyt henkilötiedot 30 päivän kuluessa sopimussuhteen
          päättymisestä. Asiakas saa kirjallisen vahvistuksen poistosta.
        </p>
      </>
    ),
  },
  {
    eyebrow: "6. Rekisteröidyn oikeudet",
    content: (
      <>
        <p>Teillä on seuraavat oikeudet henkilötietojenne suhteen:</p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>
            <strong>Tarkastusoikeus:</strong> Oikeus saada tieto siitä, mitä
            tietoja teistä käsittelemme.
          </li>
          <li>
            <strong>Oikaisupyyntö:</strong> Oikeus vaatia virheellisten tai
            puutteellisten tietojen korjaamista.
          </li>
          <li>
            <strong>Poistopyyntö:</strong> Oikeus vaatia tietojenne
            poistamista, ellei käsittelylle ole lakisääteistä perustetta.
          </li>
          <li>
            <strong>Käsittelyn rajoittaminen:</strong> Oikeus pyytää tietojen
            käsittelyn rajoittamista tietyissä tilanteissa.
          </li>
          <li>
            <strong>Tietojen siirrettävyys:</strong> Oikeus saada teidät
            koskevat tiedot koneluettavassa muodossa.
          </li>
          <li>
            <strong>Vastustamisoikeus:</strong> Oikeus vastustaa tietojen
            käsittelyä, kun käsittely perustuu oikeutettuun etuun.
          </li>
        </ul>
        <p className="mt-4">
          Lähetä pyyntö sähköpostitse osoitteeseen{" "}
          <a
            href="mailto:hello@lynevo.fi"
            className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
          >
            hello@lynevo.fi
          </a>
          . Käsittelemme pyynnöt 30 päivän kuluessa vastaanottamisesta.
        </p>
      </>
    ),
  },
  {
    eyebrow: "7. Tietosuojavaltuutetun yhteystiedot",
    content: (
      <>
        <p>
          Teillä on oikeus tehdä valitus tietosuojavaltuutetulle, mikäli
          katsotte, että henkilötietojenne käsittelyssä on rikottu
          tietosuojalainsäädäntöä.
        </p>
        <p className="mt-4">Tietosuojavaltuutetun toimisto</p>
        <p>Lintulahdenkuja 4, 00530 Helsinki</p>
        <p>PL 800, 00531 Helsinki</p>
        <p>Puhelin: 029 566 6700</p>
        <p>
          Sähköposti:{" "}
          <a
            href="mailto:tietosuoja@om.fi"
            className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
          >
            tietosuoja@om.fi
          </a>
        </p>
        <p>
          Verkkosivusto:{" "}
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
    eyebrow: "8. Evästeet",
    content: (
      <p>
        Verkkosivustomme ei tällä hetkellä käytä seurantaevästeitä tai
        analytiikkatyökaluja. Mikäli tämä muuttuu, päivitämme tämän selosteen
        ja lisäämme asianmukaisen evästeilmoituksen ennen muutoksen
        voimaantuloa.
      </p>
    ),
  },
  {
    eyebrow: "9. Tietosuojaselosteen päivittäminen",
    content: (
      <p>
        Päivitämme tätä tietosuojaselostetta tarvittaessa liiketoimintamme
        tai lainsäädännön muuttuessa. Viimeisin versio on aina saatavilla
        osoitteessa{" "}
        <a
          href="https://lynevo.fi/tietosuojaseloste"
          className="underline underline-offset-4 hover:text-[color:var(--gold)] transition-colors"
        >
          lynevo.fi/tietosuojaseloste
        </a>
        . Viimeksi päivitetty: kesäkuu 2026.
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
