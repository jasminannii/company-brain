# Company Brain

Marketing-Website für Company Brain — die DSGVO-sichere KI-Plattform für den
Mittelstand im deutschsprachigen Raum.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lenis (Smooth Scroll)

## Entwicklung

```bash
npm install
npm run dev
```

## Struktur

- `src/components/` — eine Komponente je Landingpage-Sektion (Hero, ProductTour,
  Pricing, Personalizer, Waitlist, …)
- `src/app/` — Routen (`/`, `/impressum`, `/datenschutz`)
- `src/lib/constants.ts` — Demo-Link, Kontakt-E-Mail, geteilte Inhalte

## Offene To-dos

- [ ] Formspree- oder Tally-Endpoint in `src/components/Waitlist.tsx`
      (`FORM_ENDPOINT`) eintragen — aktuell läuft ein mailto-Fallback
- [ ] Echtes Impressum & Datenschutzerklärung einsetzen (aktuell Platzhalter)
- [ ] Domain & finale E-Mail-Adresse festlegen
- [ ] Echte Kundenlogos/Referenzen, sobald der Pilot läuft
