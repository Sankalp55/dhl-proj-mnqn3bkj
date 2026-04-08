import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { ContactForm } from "@/components/blocks/ContactForm";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { TestimonialsAnimated } from "@/components/blocks/TestimonialsAnimated";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";

export default function ContactPage() {
  const contactInfo = [
    { icon: "Mail", label: "Sales", value: "sales@dhl.example" },
    { icon: "LifeBuoy", label: "Support", value: "support@dhl.example" },
    { icon: "Phone", label: "Phone", value: "+1 (555) 010-2000" },
    { icon: "Clock", label: "Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM" },
  ];

  const otherWays = [
    {
      icon: "Mail",
      title: "Sales",
      description: "Discuss lanes, volumes, and service levels.",
    },
    {
      icon: "LifeBuoy",
      title: "Support",
      description: "Help with tracking, exceptions, and billing questions.",
    },
    {
      icon: "Phone",
      title: "Phone",
      description: "Speak to an agent during business hours.",
    },
    {
      icon: "Clock",
      title: "Hours",
      description: "Mon–Fri, 9:00 AM – 6:00 PM",
    },
  ];

  const testimonials = [
    {
      quote:
        "We went live quickly and immediately improved tracking visibility for customers and internal teams.",
      name: "Director of Operations",
      designation: "Contoso Health • Operations",
      src:
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="100%" height="100%" fill="white"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="22" fill="#333">Contoso</text></svg>`
        ),
    },
    {
      quote:
        "The exception alerts helped us intervene earlier and protect delivery promises.",
      name: "Logistics Analyst",
      designation: "Initech • Analytics",
      src:
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="100%" height="100%" fill="white"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="#333">Initech</text></svg>`
        ),
    },
    {
      quote:
        "Pricing was straightforward and the plan comparison made it easy to choose.",
      name: "Finance Manager",
      designation: "Globex Retail • Finance",
      src:
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="100%" height="100%" fill="white"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="#333">Globex</text></svg>`
        ),
    },
  ];

  const faqItems = [
    {
      question: "How fast will you respond?",
      answer:
        "Typically within one business day. If a shipment is time-critical, flag it in your message and include the lane and required delivery window.",
    },
    {
      question: "Do you offer integration help?",
      answer:
        "Yes. We can guide API usage, webhooks, and platform connections based on your stack, plus recommend the best event model for tracking updates.",
    },
    {
      question: "Can you support multi-warehouse operations?",
      answer:
        "Yes. We can configure routing and fulfillment workflows across multiple locations, including region-based rules and inventory handoffs.",
    },
    {
      question: "Is the contact form secure?",
      answer:
        "This blueprint uses a client-side form only (no database). For production, connect to a secure form endpoint or email service and add spam protection.",
    },
  ];

  return (
    <div>
      <HeroGradientBlob
        title="Contact DHL logistics"
        subtitle="Get a quote, ask about service levels, or request integration guidance. We’ll respond quickly."
        ctaLabel="Send a message"
        ctaHref="#contact-form"
        secondaryCtaLabel="View services"
        secondaryCtaHref="/services"
        gradientStart="rgb(255,204,0)"
        gradientEnd="rgb(212,5,17)"
      />

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm
          headline="Request a quote or consultation"
          subheadline="Client-side form only. No account required. Share lanes, volumes, and delivery windows for the fastest quote."
          contactInfo={contactInfo}
        />
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-xl border bg-background p-8 shadow-md md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Other ways to reach us
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Choose the channel that works best for your team. For tracking
                  issues, include the shipment reference and destination country to
                  speed up resolution.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/50 p-6 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">What to include</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Origins and destinations (top lanes)</li>
                  <li>Monthly shipment volume and peak season estimates</li>
                  <li>Service levels (express vs economy vs freight)</li>
                  <li>Any integrations (Shopify, NetSuite, SAP, Zendesk)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesGrid
        badge="Contact"
        headline="Other ways to reach us"
        subheadline="Sales, support, and business hours—pick the channel that fits your workflow."
        features={otherWays}
      />

      <TestimonialsAnimated
        headline="Fast onboarding. Clear outcomes."
        subheadline="What teams say after switching to a more visible logistics workflow."
        testimonials={testimonials}
        autoplay
      />

      <FAQAccordion
        headline="Contact FAQs"
        subheadline="Before you send a message, here are quick answers."
        items={faqItems}
      />
    </div>
  );
}
