import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { PricingTable } from "@/components/blocks/PricingTable";
import { TestimonialsAnimated } from "@/components/blocks/TestimonialsAnimated";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASparkles } from "@/components/blocks/CTASparkles";

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "$49",
      period: "/mo",
      description: "For small teams shipping consistently.",
      features: [
        "Label generation & tracking",
        "Basic routing rules",
        "Email support",
        "Standard reporting",
      ],
      ctaLabel: "Choose Starter",
      ctaHref: "/contact",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$149",
      period: "/mo",
      description: "For growing ecommerce and multi-warehouse ops.",
      features: [
        "Advanced routing & zones",
        "Returns workflows",
        "Webhook notifications",
        "Performance dashboards",
      ],
      ctaLabel: "Choose Growth",
      ctaHref: "/contact",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For complex lanes, SLAs, and high volume.",
      features: [
        "Custom SLAs & reporting",
        "Dedicated onboarding",
        "Priority support",
        "Security & compliance review",
      ],
      ctaLabel: "Contact sales",
      ctaHref: "/contact",
      highlighted: false,
    },
  ];

  const comparisonRows = [
    { feature: "Label generation", values: ["Yes", "Yes", "Yes"] },
    { feature: "Routing rules", values: ["Basic", "Advanced", "Custom"] },
    { feature: "Returns management", values: ["—", "Included", "Included"] },
    { feature: "Webhooks", values: ["—", "Included", "Included"] },
    { feature: "SLA reporting", values: ["—", "Included", "Included"] },
    { feature: "Dedicated onboarding", values: ["—", "—", "Included"] },
  ];

  const testimonials = [
    {
      quote:
        "We reduced delivery exceptions by 28% in the first month and finally had a single view of shipment status.",
      name: "Operations Lead",
      designation: "Northwind Manufacturing • Logistics",
      src: "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="100%" height="100%" fill="white"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="22" fill="#333">Northwind</text></svg>`
        ),
    },
    {
      quote:
        "The routing rules and tracking notifications cut our support tickets dramatically.",
      name: "Head of CX",
      designation: "Acme Commerce • Customer Experience",
      src: "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="100%" height="100%" fill="white"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="#333">Acme</text></svg>`
        ),
    },
    {
      quote:
        "Onboarding was smooth and the reporting made SLA reviews straightforward.",
      name: "Supply Chain Manager",
      designation: "Globex Retail • Supply Chain",
      src: "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="100%" height="100%" fill="white"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="#333">Globex</text></svg>`
        ),
    },
  ];

  const faqItems = [
    {
      question: "Is pricing based on shipment volume?",
      answer:
        "Plans cover platform features; shipping rates and surcharges vary by lane, weight, and service level. We provide a tailored quote based on your lanes and delivery promises.",
    },
    {
      question: "Can I upgrade or downgrade later?",
      answer:
        "Yes. You can change plans as your shipping volume and feature needs evolve. We’ll help you migrate rules and reporting with minimal disruption.",
    },
    {
      question: "Do you offer annual billing?",
      answer:
        "Yes. Annual billing includes a discount and simplifies budgeting. If you need PO-based invoicing, we can support that on Growth and Enterprise.",
    },
    {
      question: "Do you support enterprise security reviews?",
      answer:
        "Enterprise plans include security and compliance review support during onboarding, including documentation for vendor assessments and internal risk teams.",
    },
  ];

  return (
    <div>
      <HeroGradientBlob
        title="Transparent pricing for every shipping volume"
        subtitle="Start simple, then scale into advanced routing, reporting, and integrations."
        ctaLabel="Start with Starter"
        ctaHref="/contact"
        secondaryCtaLabel="Compare plans"
        secondaryCtaHref="#pricing"
        gradientStart="rgb(255,204,0)"
        gradientEnd="rgb(212,5,17)"
      />

      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-xl border bg-background p-8 shadow-md md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Plans that scale with your operations
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Choose a plan based on workflow complexity. Shipping rates are
                  quoted by lane and service level; platform plans cover automation,
                  visibility, and reporting.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/50 p-6">
                <p className="text-sm font-semibold text-foreground">
                  What’s included in every plan
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Shipment tracking with milestone visibility</li>
                  <li>Operational reporting for performance reviews</li>
                  <li>Configurable shipping rules and label formats</li>
                  <li>Support escalation paths for time-critical shipments</li>
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  Tip: Annual billing is available (save 15%) and can be aligned to
                  your fiscal calendar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingTable
        headline="Choose the plan that matches your shipping complexity"
        subheadline="Monthly pricing shown. Ask about annual billing (save 15%) and lane-based shipping rate quotes."
        tiers={tiers}
      />

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Compare features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A quick side-by-side view to help you choose the right plan.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border bg-background shadow-md">
            <div className="grid grid-cols-4 border-b bg-muted/50">
              <div className="p-4 text-sm font-semibold text-foreground">
                Feature
              </div>
              {["Starter", "Growth", "Enterprise"].map((col) => (
                <div
                  key={col}
                  className="p-4 text-sm font-semibold text-foreground"
                >
                  {col}
                </div>
              ))}
            </div>

            <div className="divide-y">
              {comparisonRows.map((row) => (
                <div key={row.feature} className="grid grid-cols-4">
                  <div className="p-4 text-sm font-medium text-foreground">
                    {row.feature}
                  </div>
                  {row.values.map((v, idx) => (
                    <div key={idx} className="p-4 text-sm text-muted-foreground">
                      {v}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border bg-muted/50 p-6 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Notes on shipping rates</p>
            <p className="mt-2">
              Platform plans cover automation and visibility features. Shipping
              rates depend on origin/destination, package dimensions, weight, and
              service level (express, economy, freight). We’ll provide a lane-based
              quote after a short discovery.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsAnimated
        headline="Teams shipping faster with fewer exceptions"
        subheadline="Operational wins from better visibility and routing."
        testimonials={testimonials}
        autoplay
      />

      <FAQAccordion
        headline="Pricing FAQs"
        subheadline="Clarifying billing, usage, and upgrades."
        items={faqItems}
      />

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <CTASparkles
            headline="Get a lane-based quote in one conversation"
            description="Share your origins, destinations, and target delivery windows. We’ll recommend a plan and provide a tailored shipping quote."
            ctaLabel="Request pricing"
            ctaHref="/contact"
            secondaryCtaLabel="View services"
            secondaryCtaHref="/services"
            sparkleColor="#FFCC00"
          />
        </div>
      </section>
    </div>
  );
}
