import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Minimal, build-safe exports expected by consuming blocks.
 * These are simple wrappers (no 3D effect) to satisfy imports.
 */
export function CardContainer({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function CardBody({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export type CardItemProps = DivProps & {
  translateZ?: number | string;
  as?: React.ElementType;
};

export function CardItem({ as, className, ...props }: CardItemProps) {
  const Comp: React.ElementType = as ?? "div";
  return <Comp className={className} {...props} />;
}
