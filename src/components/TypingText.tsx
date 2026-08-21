"use client";

import { useEffect, useState } from "react";

export function TypingText({
  phrases,
  className = "",
  typeSpeed = 45,
  holdMs = 1800,
  deleteSpeed = 25,
}: {
  phrases: string[];
  className?: string;
  typeSpeed?: number;
  holdMs?: number;
  deleteSpeed?: number;
}) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[0] ?? "");
      return;
    }

    const current = phrases[phraseIndex % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
    } else {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typeSpeed, holdMs, deleteSpeed]);

  return (
    <span className={className}>
      {text}
      <span aria-hidden="true" className="ml-0.5 inline-block w-[2px] animate-pulse bg-blue align-middle h-[1em]" />
    </span>
  );
}
