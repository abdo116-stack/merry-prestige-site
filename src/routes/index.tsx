import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { FloatingActions } from "@/components/FloatingActions";
import {
  About,
  Contact,
  Creations,
  Experience,
  Footer,
  InstagramSection,
  Traiteur,
  Trust,
} from "@/components/Sections";
import { site } from "@/lib/site";

const title = "Merry Prestige | Pâtisserie & Traiteur à Casablanca";
const description =
  "Merry Prestige – Pâtisserie & Traiteur à Casablanca. Découvrez nos créations gourmandes, plateaux, services traiteur et solutions pour vos événements à Hay Chrifa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Merry Prestige",
          description,
          image: "/favicon.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenue Dakhla, à côté du marché Hay Chrifa",
            addressLocality: "Casablanca",
            addressCountry: "MA",
          },
          telephone: site.phones,
          openingHours: "Mo-Su 09:00-21:00",
          sameAs: [site.instagram],
          servesCuisine: ["Pâtisserie", "Traiteur"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Creations />
        <Gallery />
        <Traiteur />
        <Experience />
        <About />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
