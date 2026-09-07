import { Home, LayoutGrid, MapPin, MessageCircle } from "lucide-react";
import { site, wa, waMessages } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={wa(waMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire à Merry Prestige sur WhatsApp"
        className="fixed right-5 bottom-24 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_-12px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105 md:bottom-8"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>

      <nav
        aria-label="Navigation rapide"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-border bg-background/95 backdrop-blur-md md:hidden"
      >
        <a href="#accueil" className="flex flex-col items-center gap-1 py-3 text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
          <Home className="h-4 w-4" aria-hidden="true" /> Accueil
        </a>
        <a href="#creations" className="flex flex-col items-center gap-1 py-3 text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
          <LayoutGrid className="h-4 w-4" aria-hidden="true" /> Créations
        </a>
        <a
          href={wa(waMessages.product)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-[0.6rem] tracking-[0.14em] text-accent uppercase"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
        </a>
        <a href="#contact" className="flex flex-col items-center gap-1 py-3 text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
          <MapPin className="h-4 w-4" aria-hidden="true" /> Contact
        </a>
      </nav>
      <span className="sr-only">{site.name}</span>
    </>
  );
}
