import * as React from "react";

export type TypewriterWord = {
  text: string;
  className?: string;
};

export type TypewriterEffectProps = {
  words: TypewriterWord[];
  className?: string;
  cursorClassName?: string;
};

/**
 * Simple non-animated fallback that preserves API shape.
 */
export function TypewriterEffect({ words, className }: TypewriterEffectProps) {
  return (
    <span className={className}>
      {words.map((w, idx) => (
        <span key={idx} className={w.className}>
          {w.text}
        </span>
      ))}
    </span>
  );
}

export default TypewriterEffect;
