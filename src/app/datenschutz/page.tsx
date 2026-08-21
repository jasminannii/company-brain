import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function Datenschutz() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-32">
        <h1 className="text-3xl font-extrabold">Datenschutz</h1>
        <p className="mt-6 text-body">
          Platzhalter — dieser Text muss vor Live-Schaltung durch eine vollständige, DSGVO-konforme
          Datenschutzerklärung ersetzt werden (Verantwortlicher, Zwecke &amp; Rechtsgrundlagen der
          Datenverarbeitung, eingesetzte Dienste/Cookies, Betroffenenrechte, Speicherdauer, ggf.
          Drittlandtransfer bei eingesetzten KI-Modellen).
        </p>
      </main>
      <Footer />
    </>
  );
}
