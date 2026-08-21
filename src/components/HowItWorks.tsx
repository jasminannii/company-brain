import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Wissen einsammeln",
    body: "Dokumente, Prozesse, FAQs — eure Kurator:innen füttern Company Brain, auch per Sprachmemo.",
  },
  {
    n: "02",
    title: "Team nutzt die KI",
    body: "Jede Frage wird mit Quellenangabe beantwortet. Ohne Schulung, in der Sprache, die alle verstehen.",
  },
  {
    n: "03",
    title: "Lücken schließen sich selbst",
    body: "Fehlt Wissen, fragt Company Brain automatisch beim zuständigen Menschen nach — statt zu halluzinieren.",
  },
];

export function HowItWorks() {
  return (
    <section id="so-funktionierts" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">So funktioniert&apos;s</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <div className="rounded-2xl border border-line bg-white p-8 transition-transform hover:-translate-y-1">
                <span className="font-head text-5xl font-extrabold text-blue-100">{step.n}</span>
                <h3 className="mt-4 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-body">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
