"use client";

import { useState } from "react";
import { INDUSTRIES } from "@/lib/constants";

export function IndustryMarquee() {
  const [paused, setPaused] = useState(false);
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <div
      className="overflow-hidden border-y border-line bg-canvas py-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="marquee-track flex w-max gap-3" data-paused={paused}>
        {items.map((industry, i) => (
          <span
            key={`${industry}-${i}`}
            className="whitespace-nowrap rounded-full border border-line bg-white px-5 py-2 text-sm font-medium text-body"
          >
            {industry}
          </span>
        ))}
      </div>
    </div>
  );
}
