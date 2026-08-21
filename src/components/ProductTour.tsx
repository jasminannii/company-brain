"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const STATIONS = [
  {
    key: "chat",
    label: "Chat mit Quelle",
    cursor: { x: "62%", y: "58%" },
    render: () => (
      <div className="space-y-3">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-blue px-4 py-2.5 text-sm text-white">
          Was kostet unser Standardpaket für 15 Mitarbeitende?
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-canvas px-4 py-2.5 text-sm text-body">
          725 € / Monat (290 € Basis + 15 × 29 €).
          <div className="mt-2 text-xs font-medium text-blue-deep">Quelle: Preisliste_2026.pdf</div>
        </div>
      </div>
    ),
  },
  {
    key: "templates",
    label: "Vorlagen",
    cursor: { x: "30%", y: "40%" },
    render: () => (
      <div className="grid grid-cols-2 gap-3">
        {["Angebot erstellen", "Kunden-E-Mail", "Protokoll", "Stellenanzeige"].map((t) => (
          <div key={t} className="rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink">
            {t}
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "search",
    label: "Wissenssuche",
    cursor: { x: "50%", y: "30%" },
    render: () => (
      <div className="space-y-2">
        <div className="rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-muted">
          🔍 Urlaubsregelung Azubis
        </div>
        <div className="rounded-xl bg-canvas px-4 py-3 text-sm text-body">
          Mitarbeiterhandbuch.pdf · Abschnitt 4.2
        </div>
        <div className="rounded-xl bg-canvas px-4 py-3 text-sm text-body">
          HR-Wiki · Urlaub &amp; Abwesenheit
        </div>
      </div>
    ),
  },
  {
    key: "security",
    label: "Sicherheit",
    cursor: { x: "70%", y: "50%" },
    render: () => (
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2 rounded-xl bg-canvas px-4 py-3 text-body">
          <span className="h-2 w-2 rounded-full bg-safe" /> Hosting in Deutschland (im Aufbau)
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-canvas px-4 py-3 text-body">
          <span className="h-2 w-2 rounded-full bg-safe" /> Keine Trainingsnutzung eurer Daten
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-canvas px-4 py-3 text-body">
          <span className="h-2 w-2 rounded-full bg-safe" /> Rollenbasierte Zugriffsrechte
        </div>
      </div>
    ),
  },
];

const STATION_MS = 4200;

export function ProductTour() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % STATIONS.length);
    }, STATION_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing]);

  const station = STATIONS[active];

  return (
    <section id="produkt" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">Einmal reinschauen</h2>
          <p className="mt-4 max-w-lg text-body">
            Vier Stationen, die zeigen, wie euer Team mit Company Brain arbeitet.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 md:grid-cols-[220px_1fr]">
            <div className="flex gap-2 overflow-x-auto md:flex-col md:gap-1">
              {STATIONS.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => {
                    setActive(i);
                    setPlaying(false);
                  }}
                  className={`whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    i === active ? "bg-blue-050 text-blue-deep" : "text-body hover:bg-canvas"
                  }`}
                  aria-current={i === active}
                >
                  {s.label}
                </button>
              ))}
              <button
                onClick={() => setPlaying((p) => !p)}
                className="mt-2 flex items-center gap-2 rounded-xl border border-line px-4 py-3 text-left text-sm font-medium text-body hover:bg-canvas"
                aria-label={playing ? "Pause" : "Abspielen"}
              >
                {playing ? "⏸ Pause" : "▶ Abspielen"}
              </button>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-line bg-canvas p-6 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute h-4 w-4 rounded-full border-2 border-blue bg-white/80 shadow transition-all duration-700 ease-in-out"
                style={{ left: station.cursor.x, top: station.cursor.y }}
              />
              <div className="min-h-[220px] rounded-2xl bg-white p-6 shadow-sm">{station.render()}</div>

              <div className="mt-6 flex justify-center gap-2">
                {STATIONS.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => {
                      setActive(i);
                      setPlaying(false);
                    }}
                    aria-label={`Station ${i + 1}: ${s.label}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active ? "w-6 bg-blue" : "w-1.5 bg-blue-100"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
