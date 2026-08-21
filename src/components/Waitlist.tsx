"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Reveal } from "./Reveal";
import { CONTACT_EMAIL } from "@/lib/constants";

// Formspree- oder Tally-Endpoint eintragen, sobald vorhanden.
// Ohne Endpoint läuft ein mailto-Fallback.
const FORM_ENDPOINT = "";

export function Waitlist() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent("Pilot-Warteliste — Company Brain");
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\nUnternehmen: ${data.get(
          "company"
        )}\nTeamgröße: ${data.get("teamsize")}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("done");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <section id="warteliste" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-4xl">Danke, du bist auf der Liste!</h2>
            <p className="mt-4 text-body">Wir melden uns, sobald der nächste Pilot-Slot frei wird.</p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="warteliste" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-xl px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold md:text-4xl">Auf die Pilot-Warteliste</h2>
          <p className="mt-4 text-body">
            Wir starten mit einer begrenzten Zahl an Pilotpartnern. Trag dich ein, wir melden uns.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus-visible:border-blue"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-ink">
                E-Mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus-visible:border-blue"
              />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-semibold text-ink">
                Unternehmen
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="mt-2 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus-visible:border-blue"
              />
            </div>
            <div>
              <label htmlFor="teamsize" className="text-sm font-semibold text-ink">
                Teamgröße
              </label>
              <select
                id="teamsize"
                name="teamsize"
                className="mt-2 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus-visible:border-blue"
                defaultValue="2-24"
              >
                <option value="2-24">2–24</option>
                <option value="25-74">25–74</option>
                <option value="75-150">75–150</option>
                <option value="150-300">150–300</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-blue px-7 py-3.5 text-base font-semibold text-white hover:bg-blue-deep disabled:opacity-60"
            >
              {status === "sending" ? "Wird gesendet…" : "Eintragen"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-600">
                Da ist etwas schiefgelaufen. Schreib uns direkt an {CONTACT_EMAIL}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
