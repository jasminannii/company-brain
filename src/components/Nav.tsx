"use client";

import { useEffect, useRef, useState } from "react";
import { BrainLogo } from "./BrainLogo";
import { DEMO_LINK, NAV_LINKS } from "@/lib/constants";

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 backdrop-blur-md bg-white/80 border-b border-line"
        aria-label="Hauptnavigation"
      >
        <a href="#top" className="flex items-center gap-2 font-head text-lg font-extrabold text-ink">
          <BrainLogo className="h-7 w-8" />
          Company Brain
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-body transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={DEMO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-deep"
        >
          Demo buchen
        </a>
      </nav>
    </header>
  );
}
