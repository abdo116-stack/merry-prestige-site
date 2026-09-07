import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";
import { wa, waMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  const step = (i: number) =>
    cn(
      "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
      ready ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    ) + ` delay-[${i}ms]`;

  return (
    <section id="accueil" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={hero}
        alt="Assortiment de pâtisseries fines Merry Prestige à Casablanca"
        width={1920}
        height={1280}
        fetchPriority="high"
        className={cn(
          "absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[2600ms] ease-out motion-reduce:transition-none",
          ready ? "scale-100" : "scale-110",
        )}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,oklch(0.16_0.02_60/0.92),oklch(0.16_0.02_60/0.55)_45%,oklch(0.16_0.02_60/0.3))]" />

      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-28 md:pb-24 lg:px-10">
        <div className="max-w-3xl">
          <p style={{ transitionDelay: "80ms" }} className={step(80)}>
            <span className="inline-flex items-center rounded-full border border-hero-foreground/25 px-4 py-1.5 text-[0.62rem] tracking-[0.3em] text-hero-foreground/80 uppercase">
              Pâtisserie • Traiteur • Événements
            </span>
          </p>

          <p
            style={{ transitionDelay: "180ms" }}
            className={cn(step(180), "mt-8 font-serif text-sm tracking-[0.42em] text-accent uppercase")}
          >
            Merry Prestige
          </p>

          <h1
            style={{ transitionDelay: "260ms" }}
            className={cn(
              step(260),
              "mt-4 font-serif text-4xl leading-[1.08] text-hero-foreground sm:text-5xl lg:text-7xl",
            )}
          >
            L'élégance du goût,
            <br />
            l'excellence du savoir-faire.
          </h1>

          <p
            style={{ transitionDelay: "380ms" }}
            className={cn(step(380), "mt-6 max-w-xl text-base text-hero-foreground/75 sm:text-lg")}
          >
            Des créations raffinées pour vos moments les plus précieux. Pâtisserie & traiteur à
            Casablanca, Hay Chrifa.
          </p>

          <div
            style={{ transitionDelay: "500ms" }}
            className={cn(step(500), "mt-10 flex flex-col gap-3 sm:flex-row")}
          >
            <a
              href={wa(waMessages.product)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold justify-center"
            >
              Commander sur WhatsApp
            </a>
            <a href="#creations" className="btn-outline-light justify-center">
              Découvrir nos créations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
