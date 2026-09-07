import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { navLinks, site, wa, waMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/90 py-2 backdrop-blur-md"
          : "border-b border-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-10">
        <a href="#accueil" className="flex items-center gap-3" aria-label={`${site.name} — accueil`}>
          <img
            src={logo}
            alt="Logo Merry Prestige"
            width={40}
            height={40}
            className={cn("transition-all duration-500", scrolled ? "h-9 w-9" : "h-11 w-11")}
          />
          <span className="leading-tight">
            <span className="block font-serif text-lg tracking-[0.14em] text-foreground uppercase">
              Merry Prestige
            </span>
            <span className="block text-[0.6rem] tracking-[0.34em] text-muted-foreground uppercase">
              Pâtisserie • Traiteur
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Navigation principale">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-xs tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={wa(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden sm:inline-flex"
          >
            Commander
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-0 -z-10 origin-top bg-background px-6 pt-28 pb-12 transition-all duration-500 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 font-serif text-2xl text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={wa(waMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn-gold mt-8 w-full justify-center"
        >
          Commander sur WhatsApp
        </a>
      </div>
    </header>
  );
}
