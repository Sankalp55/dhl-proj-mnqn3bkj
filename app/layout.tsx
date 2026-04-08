import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { NavbarSticky } from "@/components/blocks/NavbarSticky";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DHL Logistics — Shipping, Freight & Fulfillment",
  description:
    "Modern DHL logistics website blueprint with animated hero, services, pricing toggle, testimonials, FAQs, integrations, and a client-side contact form.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "DHL Logistics — Shipping, Freight & Fulfillment",
    description:
      "Fast, reliable shipping and logistics—built for modern businesses.",
    type: "website",
    url: "https://example.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Services overview", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    title: "Get updates",
    links: [{ label: "Newsletter (section-based)", href: "/#cta" }],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <NavbarSticky
          logo="DHL"
          navItems={navItems}
          ctaLabel="Get a quote"
          ctaHref="/contact"
        />

        <main className="flex-1">{children}</main>

        <FooterMultiColumn
          brand="DHL Logistics"
          description="Fast, reliable shipping and logistics—built for modern businesses. Visibility-first workflows, business-ready SLAs, and integrations that fit your stack."
          columns={footerColumns}
          copyright="© 2026 DHL (demo site blueprint). All rights reserved."
        />
      </body>
    </html>
  );
}
