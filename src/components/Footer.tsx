import { BrainLogo } from "./BrainLogo";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-2 font-head text-base font-extrabold text-ink">
          <BrainLogo className="h-6 w-7" />
          Company Brain
        </a>
        <p className="text-sm text-muted">{CONTACT_EMAIL}</p>
        <nav className="flex gap-6 text-sm text-muted" aria-label="Rechtliches">
          <a href="/impressum" className="hover:text-ink">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-ink">
            Datenschutz
          </a>
        </nav>
      </div>
    </footer>
  );
}
