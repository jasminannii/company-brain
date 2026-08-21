import { Reveal } from "./Reveal";

const DEPARTMENTS = [
  { name: "Vertrieb", pct: 82 },
  { name: "Buchhaltung", pct: 64 },
  { name: "HR", pct: 45 },
  { name: "Produktion", pct: 28 },
];

export function KnowledgeBuild() {
  return (
    <section id="wissen" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-4xl">Wissensaufbau, der nicht bei euch hängen bleibt</h2>
            <p className="mt-5 text-body">
              Kurator:innen füttern Company Brain mit Dokumenten, Prozessen und Antworten — auch per Sprachmemo
              zwischendurch. Das Team nutzt, was da ist. Und fehlt etwas, wird nicht geraten.
            </p>
            <div className="mt-8 rounded-2xl border border-line bg-white p-6">
              <p className="text-sm font-semibold text-ink">Null-Bullshit-Prinzip</p>
              <p className="mt-2 text-sm text-body">
                Wenn Company Brain eine Antwort nicht aus eurem Wissen belegen kann, sagt es das — und fragt
                automatisch bei der zuständigen Person nach, statt zu halluzinieren.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-line bg-white p-6">
              <p className="text-sm font-semibold text-ink">Onboarding-Fortschritt nach Abteilung</p>
              <div className="mt-5 space-y-4">
                {DEPARTMENTS.map((d) => (
                  <div key={d.name}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-body">{d.name}</span>
                      <span className="text-muted">{d.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-blue-050">
                      <div
                        className="h-full rounded-full bg-blue transition-[width] duration-700"
                        style={{ width: `${d.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
