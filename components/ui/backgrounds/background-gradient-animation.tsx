import * as React from "react";

export type BackgroundGradientAnimationProps = React.HTMLAttributes<HTMLDivElement> & {
  containerClassName?: string;
};

/**
 * Build-safe fallback for templates that expect this component.
 */
export function BackgroundGradientAnimation({
  className,
  containerClassName,
  style,
  ...props
}: BackgroundGradientAnimationProps) {
  return (
    <div
      className={containerClassName}
      style={{
        position: "relative",
        ...(style ?? {}),
      }}
    >
      <div className={className} {...props} />
    </div>
  );
}

export default BackgroundGradientAnimation;
