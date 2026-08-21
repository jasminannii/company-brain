# Company Brain

Marketing-Website für Company Brain — die DSGVO-sichere KI-Plattform für den
Mittelstand im deutschsprachigen Raum.

## Aufbau

`site/index.html` — eine einzelne, in sich geschlossene Datei (HTML + CSS + JS
inline). Externe Abhängigkeiten nur über CDN: Google Fonts (Schibsted Grotesk,
Hanken Grotesk) und Lenis für den Smooth Scroll. Keine lokalen Assets, keine
Build-Schritte.

## Lokal ansehen

```bash
python3 -m http.server 8000 --directory site
```

Dann http://localhost:8000 öffnen.

## Deployment

Der Workflow `.github/workflows/deploy-pages.yml` veröffentlicht `site/`
unverändert auf GitHub Pages — bei jedem Push auf `master`:
https://jasminannii.github.io/company-brain/

## Offene To-dos

- [ ] Formspree- oder Tally-Endpoint als `FORM_ENDPOINT` im Warteliste-Script
      eintragen — ohne Endpoint läuft ein mailto-Fallback
- [ ] Impressum & Datenschutz: aktuell Platzhalter-Links (`href="#"`) im Footer.
      Für eine öffentlich erreichbare Seite in AT/DE ist ein Impressum Pflicht
- [ ] Domain & finale E-Mail-Adresse festlegen
- [ ] Echte Kundenlogos/Referenzen, sobald der Pilot läuft
