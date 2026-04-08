import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { LogoCloud } from "@/components/blocks/LogoCloud";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { FeaturesCards3D } from "@/components/blocks/FeaturesCards3D";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { CTASparkles } from "@/components/blocks/CTASparkles";

export default function HomePage() {
  const logos = [
    {
      name: "Acme Commerce",
      imageUrl:
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="64"><rect width="100%" height="100%" fill="white"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="22" fill="#333">Acme Commerce</text></svg>`
        ),
    },
    {
      name: "Northwind Manufacturing",
      imageUrl:
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="64"><rect width="100%" height="100%" fill="white"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="#333">Northwind Mfg</text></svg>`
        ),
    },
    {
      name: "Contoso Health",
      imageUrl:
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="64"><rect width="100%" height="100%" fill="white"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="22" fill="#333">Contoso Health</text></svg>`
        ),
    },
    {
      name: "Globex Retail",
      imageUrl:
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="64"><rect width="100%" height="100%" fill="white"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="22" fill="#333">Globex Retail</text></svg>`
        ),
    },
    {
      name: "Initech",
      imageUrl:
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="64"><rect width="100%" height="100%" fill="white"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="#333">Initech</text></svg>`
        ),
    },
    {
      name: "Umbrella Labs",
      imageUrl:
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="64"><rect width="100%" height="100%" fill="white"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="22" fill="#333">Umbrella Labs</text></svg>`
        ),
    },
  ];

  const stats = [
    { label: "On-time delivery", value: "99.2%" },
    { label: "Countries served", value: "220+" },
    { label: "Avg. support response", value: "< 10 min" },
  ];

  const features3d = [
    {
      icon: "Radar",
      title: "Real-time tracking",
      description:
        "Milestone updates and exception alerts across lanes—so ops teams can intervene before a delay becomes a broken promise.",
    },
    {
      icon: "Route",
      title: "Smart routing",
      description:
        "Route by destination, promised delivery date, weight, and cost. Keep speed where it matters and control spend everywhere else.",
    },
    {
      icon: "FileCheck",
      title: "Customs support",
      description:
        "Documentation guidance and clearance workflows for cross-border shipping—built to reduce holds and rework.",
    },
    {
      icon: "Undo2",
      title: "Returns & reverse logistics",
      description:
        "Create return labels, support drop-off options, and track the return journey from customer to warehouse.",
    },
    {
      icon: "Warehouse",
      title: "Warehouse fulfillment",
      description:
        "Pick, pack, and ship with scalable storage and fulfillment operations—designed for ecommerce and B2B replenishment.",
    },
    {
      icon: "BarChart3",
      title: "SLA-ready reporting",
      description:
        "Dashboards for on-time performance, delivery quality, and exceptions—built for weekly ops reviews and quarterly SLA check-ins.",
    },
  ];

  const integrationSteps = [
    {
      icon: "Plug",
      title: "Connect your platform",
      description:
        "Integrate Shopify, WooCommerce, Magento, or a custom storefront via API to unify order and shipment data.",
    },
    {
      icon: "Printer",
      title: "Sync orders & labels",
      description:
        "Auto-import orders, generate labels, and print packing slips in batches for high-volume workflows.",
    },
    {
      icon: "Bell",
      title: "Automate notifications",
      description:
        "Send tracking updates to customers and internal teams automatically—reduce “where is my order?” tickets.",
    },
    {
      icon: "Receipt",
      title: "Reconcile & report",
      description:
        "Export billing, delivery performance, and exceptions to support finance reconciliation and operational reviews.",
    },
  ];

  return (
    <div>
      <section className="relative">
        <HeroGradientBlob
          title="Ship smarter with DHL logistics."
          subtitle="Express delivery, freight, and fulfillment—optimized for speed, visibility, and reliability across your supply chain."
          ctaLabel="Get a quote"
          ctaHref="/contact"
          secondaryCtaLabel="Explore services"
          secondaryCtaHref="/services"
          gradientStart="rgb(255,204,0)"
          gradientEnd="rgb(212,5,17)"
        />

        <div className="relative -mt-16 pb-10">
          <div className="mx-auto w-full max-w-5xl px-4">
            <div className="rounded-xl border bg-background/70 p-6 shadow-md backdrop-blur-md md:p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-1">
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Built for modern operations
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">
                    Visibility you can act on
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    From label creation to final delivery, keep stakeholders aligned
                    with predictable tracking and clear exception workflows.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { k: "End-to-end tracking", v: "Milestones + alerts" },
                      { k: "Global coverage", v: "220+ destinations" },
                      { k: "Business-ready SLAs", v: "Reporting included" },
                    ].map((item) => (
                      <div
                        key={item.k}
                        className="rounded-lg border bg-background p-4"
                      >
                        <p className="text-sm font-semibold text-foreground">
                          {item.k}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.v}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {["Ecommerce", "Manufacturing", "Healthcare", "Enterprise"].map(
                      (chip) => (
                        <span
                          key={chip}
                          className="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {chip}
                        </span>
                      )
                    )}
                    <span className="ml-auto text-xs text-muted-foreground">
                      Proactive exception handling included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Trusted by teams that ship at scale
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Logistics support for ecommerce, manufacturing, healthcare, and
              enterprise operations—built for speed, accuracy, and accountability.
            </p>
          </div>
        </div>

        <LogoCloud headline="Teams we support" logos={logos} />

        <StatsCounter stats={stats} bgColor="bg-primary text-primary-foreground" />
      </section>

      <FeaturesCards3D
        badge="Capabilities"
        headline="Modern logistics, built for visibility"
        subheadline="Everything you need to ship, store, and deliver—without complexity. Designed for operational clarity and customer trust."
        features={features3d}
      />

      <FeaturesGrid
        badge="Integrations"
        headline="Integrations that fit your workflow"
        subheadline="Connect your store, ERP, and support tools to automate shipping and customer updates."
        features={integrationSteps}
      />

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-xl border bg-muted/50 p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Integration badges
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                  Plug into the tools your team already uses
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Reduce manual work by syncing orders, generating labels, and pushing
                  tracking updates into support channels—so customers get answers
                  before they ask.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Shopify", "WooCommerce", "NetSuite", "SAP", "Zendesk", "Slack"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="rounded-full border bg-background px-4 py-2 text-sm font-medium text-foreground"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <CTASparkles
            headline="Ready to ship with confidence?"
            description="Get a tailored quote and rollout plan for your lanes, volumes, and delivery promises."
            ctaLabel="Talk to a logistics expert"
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
