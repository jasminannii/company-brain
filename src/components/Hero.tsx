import { BrainLogo } from "./BrainLogo";
import { MagneticButton } from "./MagneticButton";
import { TypingText } from "./TypingText";
import { Reveal } from "./Reveal";
import { DEMO_LINK } from "@/lib/constants";

const QUESTIONS = [
  "Wie hoch war unser Angebot für die Müller GmbH letzten Monat?",
  "Fass mir den Vertrag mit dem neuen Lieferanten zusammen.",
  "Welche Urlaubsregelung gilt für Azubis?",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-050 px-4 py-1.5 text-sm font-medium text-blue-deep">
            <BrainLogo className="h-4 w-5" />
            Für KMU in Österreich &amp; Bayern
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Deine KI. Sicher, simpel, für alle im Team.
          </h1>
          <p className="mt-6 max-w-md text-lg text-body">
            Company Brain kennt euer Unternehmen — und sagt euch, wenn es etwas nicht weiß.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue px-7 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-deep"
            >
              Demo buchen
            </MagneticButton>
            <MagneticButton
              href="#so-funktionierts"
              className="rounded-full border border-line px-7 py-3.5 text-base font-semibold text-ink hover:border-blue-100 hover:bg-blue-050"
            >
              So funktioniert&apos;s
            </MagneticButton>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-safe" /> DSGVO-sicher
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-safe" /> Kein Modell-Lock-in
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-safe" /> Setup &amp; Betreuung inklusive
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto max-w-md rounded-3xl border border-line bg-canvas p-5 shadow-[0_1px_0_rgba(11,16,32,0.04)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs font-medium text-muted">Company Brain</span>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Frage</p>
              <p className="mt-2 min-h-[3.5rem] text-base font-medium text-ink">
                <TypingText phrases={QUESTIONS} />
              </p>
              <div className="mt-5 rounded-xl bg-blue-050 p-4 text-sm text-body">
                <p>
                  Laut Angebot Nr. 0231 vom 14.03. lag der Preis bei <strong className="text-ink">18.400 €</strong>{" "}
                  netto.
                </p>
                <p className="mt-2 text-xs font-medium text-blue-deep">Quelle: Angebote/2026/Müller-GmbH.pdf</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
