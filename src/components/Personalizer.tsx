"use client";

import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";

const AVATAR_COLORS = ["#2E7BF6", "#0E9F6E", "#F59E0B", "#EC4899", "#8B5CF6"];
const ACCENT_COLORS = ["#2E7BF6", "#0E9F6E", "#F59E0B", "#EC4899", "#8B5CF6"];
const EMOJIS = ["🧠", "🚀", "✨", "🐝", "🌿"];

export function Personalizer() {
  const [name, setName] = useState("Jasmin");
  const [avatarMode, setAvatarMode] = useState<"initials" | "emoji">("initials");
  const [emoji, setEmoji] = useState(EMOJIS[0]);
  const [avatarColor, setAvatarColor] = useState(AVATAR_COLORS[0]);
  const [accent, setAccent] = useState(ACCENT_COLORS[0]);
  const [dark, setDark] = useState(false);

  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "?";
    return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
  }, [name]);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">Macht sich euer eigen</h2>
          <p className="mt-4 max-w-lg text-body">
            Jede:r im Team stellt sich die Oberfläche selbst ein — Name, Avatar, Farbe, hell oder dunkel.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-10 md:grid-cols-[320px_1fr]">
            <div className="space-y-6">
              <div>
                <label htmlFor="p-name" className="text-sm font-semibold text-ink">
                  Name
                </label>
                <input
                  id="p-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus-visible:border-blue"
                  maxLength={30}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-ink">Avatar</p>
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => setAvatarMode("initials")}
                    aria-pressed={avatarMode === "initials"}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                      avatarMode === "initials" ? "bg-blue-050 text-blue-deep" : "text-body hover:bg-canvas"
                    }`}
                  >
                    Initialen
                  </button>
                  <button
                    onClick={() => setAvatarMode("emoji")}
                    aria-pressed={avatarMode === "emoji"}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                      avatarMode === "emoji" ? "bg-blue-050 text-blue-deep" : "text-body hover:bg-canvas"
                    }`}
                  >
                    Emoji
                  </button>
                </div>
                {avatarMode === "emoji" && (
                  <div className="mt-3 flex gap-2">
                    {EMOJIS.map((e) => (
                      <button
                        key={e}
                        onClick={() => setEmoji(e)}
                        aria-pressed={emoji === e}
                        className={`h-9 w-9 rounded-full border text-lg ${
                          emoji === e ? "border-blue" : "border-line"
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-ink">Avatar-Farbe</p>
                <div className="mt-2 flex gap-2">
                  {AVATAR_COLORS.map((c) => (
                    <button
                      key={c}
                      onClick={() => setAvatarColor(c)}
                      aria-label={c}
                      aria-pressed={avatarColor === c}
                      className={`h-8 w-8 rounded-full ${avatarColor === c ? "ring-2 ring-offset-2 ring-ink" : ""}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-ink">Akzentfarbe</p>
                <div className="mt-2 flex gap-2">
                  {ACCENT_COLORS.map((c) => (
                    <button
                      key={c}
                      onClick={() => setAccent(c)}
                      aria-label={c}
                      aria-pressed={accent === c}
                      className={`h-8 w-8 rounded-full ${accent === c ? "ring-2 ring-offset-2 ring-ink" : ""}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm font-semibold text-ink">Dunkles Design</span>
                <button
                  onClick={() => setDark((d) => !d)}
                  role="switch"
                  aria-checked={dark}
                  aria-label="Dunkles Design umschalten"
                  className={`h-6 w-11 rounded-full transition-colors ${dark ? "bg-blue" : "bg-line"}`}
                >
                  <span
                    className={`block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform ${
                      dark ? "translate-x-[22px]" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            <div
              className={`rounded-3xl border p-6 transition-colors duration-300 ${
                dark ? "border-white/10 bg-[#0b1020]" : "border-line bg-canvas"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: avatarColor }}
                >
                  {avatarMode === "emoji" ? emoji : initials}
                </div>
                <div>
                  <p className={`font-semibold ${dark ? "text-white" : "text-ink"}`}>Hi {name || "du"} 👋</p>
                  <p className={`text-sm ${dark ? "text-white/60" : "text-muted"}`}>Womit kann ich helfen?</p>
                </div>
              </div>
              <div
                className={`mt-6 rounded-2xl p-5 ${dark ? "bg-white/[0.06]" : "bg-white"}`}
              >
                <p className={`text-sm ${dark ? "text-white/70" : "text-body"}`}>
                  Frag mich etwas über eure Angebote, Prozesse oder Dokumente.
                </p>
                <button
                  className="mt-4 rounded-full px-5 py-2 text-sm font-semibold text-white transition-colors"
                  style={{ backgroundColor: accent }}
                >
                  Neue Frage stellen
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
