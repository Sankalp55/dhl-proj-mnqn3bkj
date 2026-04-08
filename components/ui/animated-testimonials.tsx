import * as React from "react";

export type AnimatedTestimonialItem = {
  quote: string;
  name: string;
  designation?: string;
  src?: string;
};

export type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonialItem[];
  className?: string;
};

/**
 * Build-safe fallback for templates that expect `AnimatedTestimonials`.
 */
export function AnimatedTestimonials({ testimonials, className }: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      {testimonials.map((t, idx) => (
        <figure key={idx} style={{ marginBottom: "1rem" }}>
          <blockquote>{t.quote}</blockquote>
          <figcaption>
            <strong>{t.name}</strong>
            {t.designation ? ` — ${t.designation}` : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default AnimatedTestimonials;
