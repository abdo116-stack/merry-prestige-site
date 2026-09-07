import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { galleryFilters, galleryItems, wa, waMessages, type GalleryItem } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<string>("Tous");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = galleryItems.filter((i) => filter === "Tous" || i.category === filter);

  return (
    <section id="galerie" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Galerie</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Notre univers en images
          </h2>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-2" delay={80}>
          {galleryFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-5 py-2 text-[0.68rem] tracking-[0.18em] uppercase transition-colors",
                filter === f
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative block w-full overflow-hidden rounded-sm text-left"
              >
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.category} Merry Prestige Casablanca`}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105",
                    item.tall ? "aspect-[3/4]" : "aspect-square",
                  )}
                />
                <span className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.02_60/0.8),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span className="block font-serif text-xl text-hero-foreground">{item.title}</span>
                  <span className="mt-1 block text-[0.62rem] tracking-[0.24em] text-accent uppercase">
                    Voir
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90svh] w-full max-w-3xl overflow-auto rounded-sm bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Fermer"
              className="absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={active.image}
              alt={active.title}
              className="max-h-[55svh] w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <p className="eyebrow">{active.category}</p>
              <h3 className="mt-3 font-serif text-2xl text-foreground">{active.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{active.description}</p>
              <a
                href={wa(waMessages.product)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6 w-full justify-center sm:w-auto"
              >
                Commander sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
