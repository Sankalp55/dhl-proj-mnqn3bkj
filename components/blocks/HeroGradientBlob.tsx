"use client";

import * as React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/backgrounds/background-gradient-animation";
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect";

export type HeroGradientBlobProps = {
  className?: string;
};

export function HeroGradientBlob({ className }: HeroGradientBlobProps) {
  return (
    <BackgroundGradientAnimation containerClassName={className}>
      <div style={{ padding: "4rem 1.5rem" }}>
        <TypewriterEffect
          words={[{ text: "About" }, { text: "Us", className: "font-semibold" }]}
          className="text-3xl md:text-5xl"
        />
      </div>
    </BackgroundGradientAnimation>
  );
}

export default HeroGradientBlob;
