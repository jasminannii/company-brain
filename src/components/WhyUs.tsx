import { BrainLogo } from "./BrainLogo";
import { Reveal } from "./Reveal";

const CARDS = [
  { title: "Fokus KMU, nicht Enterprise", body: "2–300 Mitarbeitende, DACH. Kein Konzern-Overkill." },
  { title: "Radikal einfach", body: "Nutzbar ohne Schulung. Wenn's kompliziert wird, haben wir es falsch gebaut." },
  { title: "Kennt euer Unternehmen", body: "Antworten mit Quellenangabe, nicht mit Allgemeinwissen." },
  { title: "Full-Service", body: "Setup, Onboarding, laufende Betreuung — alles inklusive." },
  { title: "Modell-agnostisch", body: "ChatGPT, Claude, Mistral als Basis. Kein Lock-in an einen Anbieter." },
];

export function WhyUs() {
  return (
    <section id="warum-wir" className="bg-dark py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex items-center gap-4">
            <BrainLogo className="h-12 w-14 drop-shadow-[0_0_24px_rgba(46,123,246,0.5)]" />
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">Warum Company Brain</h2>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 70} className={i === 0 ? "md:col-span-2" : ""}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-3 text-white/70">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
