import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FadeUp } from "../components/FadeUp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Yhteystiedot — Lynevo Solutions" },
      {
        name: "description",
        content:
          "Varatkaa 30 minuutin tutustumispuhelu. Helsinkiläinen AI-konsultointitoimisto, joka palvelee suomalaisia tilitoimistoja etänä tai paikan päällä.",
      },
    ],
  }),
  component: ContactPage,
});

const DARK = "#0B0A08";
const E = [0.16, 1, 0.3, 1] as const;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* ─── DARK HERO ──────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 md:pt-44 md:pb-24 overflow-hidden"
        style={{ background: DARK }}
      >
        {/* Ambient orb */}
        <div
          aria-hidden
          style={{
            position: "absolute", borderRadius: "50%",
            width: 600, height: 600, top: -160, right: -120,
            background: "radial-gradient(circle, rgba(184,149,106,0.18) 0%, transparent 65%)",
            filter: "blur(80px)",
            animation: "orb-a 18s ease-in-out infinite",
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
          className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${DARK})` }}
        />

        <div className="container-novera relative" style={{ zIndex: 1 }}>
          <FadeUp>
            <p className="eyebrow mb-6">Yhteystiedot</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              className="text-[32px] md:text-[48px] lg:text-[58px] leading-[1.05] max-w-3xl"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Käydään suora keskustelu.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="mt-8 text-lg max-w-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Varatkaa 30 minuutin tutustumispuhelu. Selvitetään yhdessä,
              sopiiko kartoitus Teille — ennen kuin sitoudutte mihinkään.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ─── CONTENT: info (light) + form card (dark) ───────── */}
      <section className="py-24 md:py-36 bg-[color:var(--background)]">
        <div className="container-novera grid md:grid-cols-12 gap-16">

          {/* LEFT — contact info on warm white */}
          <div className="md:col-span-5">
            <FadeUp>
              <a
                href="https://lynevo-solutions-fi.cal.com/lynevo-fi/tutustumispuhelu"
                className="group inline-flex items-center gap-2 hover:text-[color:var(--gold)] transition-colors text-lg leading-relaxed"
                style={{ color: "var(--ink)" }}
              >
                <span>Varaa aika kalenteriimme</span>
                <span
                  className="group-hover:translate-x-1 transition-transform"
                  style={{ color: "var(--gold)" }}
                >
                  →
                </span>
              </a>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div
                className="mt-12 space-y-8 pt-10"
                style={{ borderTop: "1px solid var(--gold)" }}
              >
                <div>
                  <p className="eyebrow mb-2">Sähköposti</p>
                  <a
                    href="mailto:hello@lynevo.fi"
                    className="text-lg hover:text-[color:var(--gold)] transition-colors"
                  >
                    hello@lynevo.fi
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-2">Sijainti</p>
                  <p className="text-lg">Helsinki, Suomi</p>
                </div>
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid var(--divider)" }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--warm)" }}
                  >
                    Työskentelemme tilitoimistojen kanssa kaikkialla Suomessa.
                    Etänä tai paikan päällä.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT — luxury dark form card */}
          <div className="md:col-span-7 md:pl-4">
            <FadeUp delay={0.15}>
              <div
                className="relative overflow-hidden"
                style={{
                  background: DARK,
                  border: "1px solid rgba(184,149,106,0.2)",
                }}
              >
                {/* Gold top border */}
                <div
                  aria-hidden
                  className="absolute top-0 inset-x-0 pointer-events-none"
                  style={{ height: "2px", background: "var(--gold)" }}
                />
                {/* Ambient gold glow inside card */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse 85% 55% at 50% 0%, rgba(184,149,106,0.12) 0%, transparent 65%)",
                  }}
                />

                <div className="p-8 md:p-12 relative" style={{ zIndex: 1 }}>
                  {submitted ? (
                    <div className="py-16 text-center">
                      <div
                        className="w-12 h-px mx-auto mb-8"
                        style={{ background: "var(--gold)" }}
                      />
                      <h2
                        className="text-3xl md:text-4xl mb-6"
                        style={{ color: "rgba(255,255,255,0.92)" }}
                      >
                        Kiitos.
                      </h2>
                      <p
                        className="leading-relaxed max-w-sm mx-auto"
                        style={{ color: "rgba(255,255,255,0.50)" }}
                      >
                        Kiitos viestistänne — otamme yhteyttä yhden arkipäivän
                        kuluessa.
                      </p>
                    </div>
                  ) : (
                    <form
                      action="https://formspree.io/f/mreddzyp"
                      method="POST"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const response = await fetch(form.action, {
                          method: form.method,
                          body: new FormData(form),
                          headers: { Accept: "application/json" },
                        });
                        if (response.ok) setSubmitted(true);
                      }}
                      className="space-y-7"
                    >
                      <div className="grid gap-7 md:grid-cols-2">
                        <DarkField label="Etunimi" name="firstName" required />
                        <DarkField label="Sukunimi" name="lastName" required />
                      </div>
                      <DarkField label="Yrityksen nimi" name="company" required />
                      <DarkField label="Sähköposti" name="email" type="email" required />
                      <div>
                        <label
                          className="block eyebrow mb-3"
                          style={{ color: "var(--gold)" }}
                        >
                          Mikä on tärkein haasteenne juuri nyt?
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          required
                          className="w-full bg-transparent outline-none py-3 resize-none transition-colors placeholder:text-white/25"
                          style={{
                            color: "white",
                            borderBottom: "1px solid rgba(184,149,106,0.25)",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderBottomColor = "var(--gold)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderBottomColor =
                              "rgba(184,149,106,0.25)";
                          }}
                        />
                      </div>
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="group inline-flex items-center gap-3 px-8 py-4 text-sm border transition-colors duration-300"
                          style={{
                            borderColor: "rgba(184,149,106,0.5)",
                            color: "var(--gold)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(184,149,106,0.1)";
                            e.currentTarget.style.borderColor = "var(--gold)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.borderColor =
                              "rgba(184,149,106,0.5)";
                          }}
                        >
                          Lähetä viesti
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                        <p
                          className="mt-5 text-xs tracking-wider"
                          style={{ color: "rgba(255,255,255,0.30)" }}
                        >
                          Vastaamme yhden arkipäivän kuluessa.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

function DarkField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="block eyebrow mb-3"
        style={{ color: "var(--gold)" }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent outline-none py-3 transition-colors placeholder:text-white/25"
        style={{
          color: "white",
          borderBottom: "1px solid rgba(184,149,106,0.25)",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderBottomColor = "var(--gold)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderBottomColor = "rgba(184,149,106,0.25)";
        }}
      />
    </div>
  );
}
