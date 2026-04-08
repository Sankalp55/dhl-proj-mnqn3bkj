import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASparkles } from "@/components/blocks/CTASparkles";

export default function ServicesPage() {
  const coreOfferings = [
    {
      icon: "Zap",
      title: "Express parcel delivery",
      description:
        "Time-definite shipping with tracking, signature options, and delivery preferences—ideal for customer-facing promises.",
    },
    {
      icon: "Ship",
      title: "Freight forwarding",
      description:
        "Air, ocean, and road freight with lane planning and exception management—built for predictable lead times and fewer surprises.",
    },
    {
      icon: "Boxes",
      title: "Warehousing & fulfillment",
      description:
        "Storage, pick/pack, kitting, and last-mile handoff for ecommerce and B2B—designed for accuracy at scale.",
    },
  ];

  const howItWorks = [
    {
      icon: "Map",
      title: "Assess lanes & volumes",
      description:
        "We map origins, destinations, and service-level requirements to match the right network and delivery windows.",
    },
    {
      icon: "Settings2",
      title: "Configure shipping rules",
      description:
        "Define packaging, label formats, routing logic, and exceptions by region, weight, and promised delivery date.",
    },
    {
      icon: "Activity",
      title: "Go live with tracking",
      description:
        "Enable customer notifications and internal alerts with clear escalation paths for time-critical shipments.",
    },
    {
      icon: "TrendingUp",
      title: "Optimize continuously",
      description:
        "Review performance and cost trends to refine service levels, reduce exceptions, and protect margins.",
    },
  ];

  const apiIntegrations = [
    {
      icon: "Code",
      title: "Shipping API",
      description:
        "Create shipments, generate labels, and fetch tracking events—built for modern storefronts and ERPs.",
    },
    {
      icon: "Webhook",
      title: "Webhooks",
      description:
        "Receive delivery updates and exceptions in real time and route them to ops, support, or customer comms.",
    },
    {
      icon: "Layers",
      title: "Batch operations",
      description:
        "Print labels and manifests for high-volume workflows with consistent formatting and fewer manual steps.",
    },
    {
      icon: "Download",
      title: "Data exports",
      description:
        "CSV exports for finance reconciliation, performance reviews, and operational analytics.",
    },
  ];

  const faqItems = [
    {
      question: "Do you support international shipping and customs?",
      answer:
        "Yes. We provide documentation guidance and clearance workflows depending on lane and shipment type, including proactive checks to reduce holds and rework.",
    },
    {
      question: "Can I offer multiple delivery speeds at checkout?",
      answer:
        "Yes. Configure service levels and routing rules by destination, weight, and promised delivery date, so customers can choose speed while you control cost.",
    },
    {
      question: "How do exceptions and delays get handled?",
      answer:
        "We provide exception alerts and recommended actions, with escalation paths for time-critical shipments. Your team gets visibility early—before customers notice.",
    },
    {
      question: "Do you support returns?",
      answer:
        "Yes. Returns labels, drop-off options, and reverse logistics tracking are available depending on plan and lane.",
    },
  ];

  return (
    <div>
      <HeroGradientBlob
        title="Logistics services for every shipment type"
        subtitle="From express parcels to freight and fulfillment—choose the right service level for your business."
        ctaLabel="Get service guidance"
        ctaHref="/contact"
        secondaryCtaLabel="See pricing"
        secondaryCtaHref="/pricing"
        gradientStart="rgb(255,204,0)"
        gradientEnd="rgb(212,5,17)"
      />

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-xl border bg-background p-8 shadow-md md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Core offerings
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Flexible options designed for speed, reliability, and cost control.
                  Build a service mix that matches your promise to customers.
                </p>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="rounded-lg border bg-muted/50 p-4">
                  <p className="font-semibold text-foreground">What you get</p>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Clear tracking and milestone visibility</li>
                    <li>Exception alerts with recommended actions</li>
                    <li>Operational reporting for SLA reviews</li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-muted/50 p-4">
                  <p className="font-semibold text-foreground">Where it fits</p>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Ecommerce order fulfillment</li>
                    <li>Manufacturing replenishment lanes</li>
                    <li>Healthcare time-sensitive shipments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesGrid
        badge="Services"
        headline="Core offerings"
        subheadline="Pick the service that matches your shipment type, delivery windows, and operational complexity."
        features={coreOfferings}
      />

      <FeaturesGrid
        badge="Rollout"
        headline="How it works"
        subheadline="A simple rollout from first quote to steady-state operations—built for predictable go-lives."
        features={howItWorks}
      />

      <FeaturesGrid
        badge="Integrations"
        headline="API & platform integrations"
        subheadline="Automate labels, tracking, and billing with your existing tools."
        features={apiIntegrations}
      />

      <FAQAccordion
        headline="Service FAQs"
        subheadline="Common questions about shipping options and operations."
        items={faqItems}
      />

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <CTASparkles
            headline="Not sure which service level fits your lanes?"
            description="Tell us your origins, destinations, and delivery promises. We’ll recommend the right mix of express, freight, and fulfillment—with a rollout plan."
            ctaLabel="Talk to an expert"
            ctaHref="/contact"
            secondaryCtaLabel="View pricing"
            secondaryCtaHref="/pricing"
            sparkleColor="#FFCC00"
          />
        </div>
      </section>
    </div>
  );
}
