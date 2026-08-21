import { Reveal } from "./Reveal";

const COLUMNS = [
  {
    title: "Schatten-KI im Unternehmen",
    body: "71 % der Wissensarbeiter geben Firmendaten längst in private ChatGPT-Accounts ein. Ohne dass die Geschäftsführung davon weiß.",
    source: "Springer 2026",
  },
  {
    title: "DSGVO-Risiko",
    body: "Kundendaten, Verträge, interne Zahlen — in einem Tool, über das ihr keine Kontrolle habt. Ein Datenschutz-Vorfall wartet nur auf den nächsten Prompt.",
  },
  {
    title: "Die KI kennt euch nicht",
    body: "ChatGPT weiß nichts über eure Produkte, Prozesse oder Kunden. Jede Antwort ist Allgemeinwissen — oder frei erfunden.",
  },
];

export function Problem() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">
            Euer Team nutzt längst KI. Nur nicht eure.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {COLUMNS.map((col, i) => (
            <Reveal key={col.title} delay={i * 80}>
              <div className="border-t border-line pt-6">
                <h3 className="text-lg font-bold text-ink">{col.title}</h3>
                <p className="mt-3 text-body">{col.body}</p>
                {col.source && (
                  <p className="mt-3 text-xs font-medium text-muted">Quelle: {col.source}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
