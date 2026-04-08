import * as React from "react";

export type SparklesCoreProps = React.HTMLAttributes<HTMLDivElement> & {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
};

/**
 * Lightweight fallback implementation.
 * Some templates expect `SparklesCore` from this path.
 */
export function SparklesCore({
  className,
  background,
  particleColor,
  style,
  ...props
}: SparklesCoreProps) {
  return (
    <div
      className={className}
      style={{
        background: background ?? undefined,
        ...(style ?? {}),
      }}
      {...props}
    />
  );
}

export default SparklesCore;
