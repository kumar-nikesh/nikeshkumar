"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

const phrases = [
  { text: "Expert Software Engineer", article: "an" },
  { text: "AI & Data Engineer", article: "an" },
  { text: "Software Architect", article: "a" },
  { text: "Cloud Solutions Expert", article: "a" },
];

const staticPhrases = phrases.map((phrase) => phrase.text).join(" • ");

export function TypingLine() {
  const reduceMotion = useReducedMotion();
  const phraseIndexRef = useRef(0);
  const displayedTextRef = useRef("");
  const isDeletingRef = useRef(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let timeout: number;

    const tick = () => {
      const phrase = phrases[phraseIndexRef.current].text;
      const displayed = displayedTextRef.current;

      if (!isDeletingRef.current && displayed.length < phrase.length) {
        const nextText = phrase.slice(0, displayed.length + 1);
        displayedTextRef.current = nextText;
        setDisplayedText(nextText);
        timeout = window.setTimeout(tick, 72);
        return;
      }

      if (!isDeletingRef.current) {
        isDeletingRef.current = true;
        timeout = window.setTimeout(tick, 1600);
        return;
      }

      if (displayed.length > 0) {
        const nextText = displayed.slice(0, -1);
        displayedTextRef.current = nextText;
        setDisplayedText(nextText);
        timeout = window.setTimeout(tick, 38);
        return;
      }

      isDeletingRef.current = false;
      const nextIndex = (phraseIndexRef.current + 1) % phrases.length;
      phraseIndexRef.current = nextIndex;
      setPhraseIndex(nextIndex);
      timeout = window.setTimeout(tick, 450);
    };

    tick();

    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <p
      className="min-h-7 text-base font-medium text-primary sm:text-lg"
      aria-label="Expert Software Engineer, AI & Data Engineer, Software Architect, and Cloud Solutions Expert"
    >
      <span aria-hidden="true">
        {reduceMotion ? staticPhrases : `I'm ${phrases[phraseIndex].article} ${displayedText}`}
      </span>
      <span className="ml-0.5 inline-block animate-pulse text-secondary" aria-hidden="true">
        |
      </span>
    </p>
  );
}
