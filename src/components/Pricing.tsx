"use client";

import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { DEMO_LINK } from "@/lib/constants";

const BASE_FEE = 290;

function pricePerUser(users: number) {
  if (users < 25) return 29;
  if (users < 75) return 24;
  return 19;
}

function setupFee(users: number) {
  if (users <= 25) return "6.900 €";
  if (users <= 75) return "9.900 €";
  return "ab 14.900 €";
}

const fmt = new Intl.NumberFormat("de-AT", { maximumFractionDigits: 0 });

export function Pricing() {
  const [users, setUsers] = useState(15);
  const perUser = pricePerUser(users);
  const monthly = useMemo(() => BASE_FEE + users * perUser, [users, perUser]);

  return (
    <section id="preise" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">Preise, die mit euch wachsen</h2>
          <p className="mt-4 max-w-lg text-body">
            290 € Basis-Fee pro Monat + Preis je Nutzer ab dem 5. Nutzer. Keine Preisklippe beim Wachsen.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 rounded-3xl border border-line bg-white p-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <label htmlFor="users" className="text-sm font-semibold text-ink">
                  Anzahl Nutzer:innen: <span className="text-blue-deep">{users}</span>
                </label>
                <input
                  id="users"
                  type="range"
                  min={5}
                  max={150}
                  value={users}
                  onChange={(e) => setUsers(Number(e.target.value))}
                  className="mt-3 w-64 accent-[#2E7BF6]"
                />
              </div>
              <div className="text-right">
                <p className="text-sm text-muted">Monatlich</p>
                <p className="font-head text-4xl font-extrabold text-ink">{fmt.format(monthly)} €</p>
                <p className="text-xs text-muted">
                  290 € Basis + {users} × {perUser} €
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-sm text-body">
              <span>
                Einmalige Setup-Fee (Beratung, Einrichtung, Wissensbefüllung, Onboarding):{" "}
                <strong className="text-ink">{setupFee(users)}</strong>
              </span>
              <span className="text-muted">12 Monate Standard · 24 Monate mit 12 % Rabatt</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 grid gap-4 text-sm text-body sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-white px-5 py-4">
              <p className="font-semibold text-ink">5–24 Nutzer</p>
              <p className="mt-1">29 € / Nutzer</p>
            </div>
            <div className="rounded-xl border border-line bg-white px-5 py-4">
              <p className="font-semibold text-ink">25–74 Nutzer</p>
              <p className="mt-1">24 € / Nutzer</p>
            </div>
            <div className="rounded-xl border border-line bg-white px-5 py-4">
              <p className="font-semibold text-ink">ab 75 Nutzer</p>
              <p className="mt-1">19 € / Nutzer</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">
            Förderfähig über KMU.DIGITAL (Österreich) und Digitalbonus Bayern.
          </p>
          <MagneticButton
            href={DEMO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 rounded-full bg-blue px-7 py-3.5 text-base font-semibold text-white hover:bg-blue-deep"
          >
            Demo buchen
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
