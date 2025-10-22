import "./globals.css";
import type { Metadata } from "next";
import site from "@/data/site.json";
import Header from "@/components/layout/Header.client";
import Footer from "@/components/layout/Footer";
import { clampNavToMinimal } from "@/lib/utils";

const metadataBase = new URL("https://TravelAgency.elixflare.com");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "TravelAgency Elixflare — Calm Eastern Cape Tours",
    template: "%s — TravelAgency Elixflare"
  },
  description: "Simple, scenic tours from Port Elizabeth (Gqeberha). Browse uncluttered itineraries and calm day trips.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "TravelAgency Elixflare",
    description: "Calm Eastern Cape tours from Port Elizabeth",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelAgency Elixflare",
    description: "Calm Eastern Cape tours from Port Elizabeth",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = site.theme;
  const layout = site.layout;
  const nav = clampNavToMinimal(site.nav);
  return (
    <html lang="en" dir="ltr">
      <body
        style={{
          ["--brand" as any]: theme.brand,
          ["--accent" as any]: theme.accent,
          ["--bg" as any]: theme.bg,
          ["--fg" as any]: theme.fg,
          ["--sectionY" as any]: layout.sectionY,
          ["--sliderHeight" as any]: layout.sliderHeight,
        }}
        className="min-h-screen antialiased selection:bg-[var(--brand)]/20 selection:text-[var(--fg)]"
      >
        <Header nav={nav} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
