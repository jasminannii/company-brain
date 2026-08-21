import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function Impressum() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-32">
        <h1 className="text-3xl font-extrabold">Impressum</h1>
        <p className="mt-6 text-body">
          Platzhalter — dieser Text muss vor Live-Schaltung durch ein rechtsgültiges Impressum ersetzt werden
          (Pflichtangaben nach § 5 ECG / § 25 MedienG in Österreich bzw. § 5 TMG in Deutschland: Firmenname,
          Anschrift, Vertretungsberechtigte, Firmenbuchnummer/Handelsregister, UID-Nummer, Kontaktdaten,
          Aufsichtsbehörde falls zutreffend).
        </p>
      </main>
      <Footer />
    </>
  );
}
