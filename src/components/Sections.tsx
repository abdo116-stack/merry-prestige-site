import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import atelier from "@/assets/atelier.jpg";
import { Reveal } from "@/components/Reveal";
import {
  categories,
  galleryItems,
  navLinks,
  site,
  steps,
  traiteurUnivers,
  wa,
  waMessages,
} from "@/lib/site";
import { images } from "@/lib/site";

export function Trust() {
  const stats = [
    { value: "200K+", label: "Followers" },
    { value: "4+", label: "Univers gourmands" },
    { value: site.hours, label: "Ouvert tous les jours" },
    { value: "Casablanca", label: "Hay Chrifa" },
  ];
  return (
    <section className="border-b border-border bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="text-center">
          <p className="font-serif text-xl text-foreground sm:text-2xl">
            Une communauté de plus de 200K passionnés
          </p>
        </Reveal>
        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-serif text-2xl text-foreground sm:text-3xl">
                  {s.value}
                </span>
                <span className="mt-2 block text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                  {s.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Creations() {
  return (
    <section id="creations" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Nos créations</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Des créations préparées avec passion, pensées pour émerveiller.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal as="article" key={c.name} delay={i * 100} className="group">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={c.image}
                  alt={`${c.name} — Merry Prestige, pâtisserie et traiteur à Casablanca`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-foreground">{c.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              <a
                href={wa(waMessages.product)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-5 inline-block text-[0.68rem] tracking-[0.22em] text-foreground uppercase"
              >
                Découvrir
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Traiteur() {
  return (
    <section id="traiteur" className="bg-foreground py-24 text-hero-foreground lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="eyebrow text-accent">Traiteur</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Votre événement mérite une expérience à la hauteur.
          </h2>
          <p className="mt-6 max-w-xl text-hero-foreground/70">
            Merry Prestige vous accompagne pour vos réceptions, célébrations et moments d'exception
            avec des créations gourmandes et une présentation soignée.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
            {traiteurUnivers.map((u) => (
              <li
                key={u}
                className="border-b border-hero-foreground/15 pb-3 text-sm text-hero-foreground/85"
              >
                {u}
              </li>
            ))}
          </ul>
          <a
            href={wa(waMessages.event)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-10"
          >
            Parler de mon événement
          </a>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          <img
            src={images.traiteur}
            alt="Buffet traiteur élégant préparé par Merry Prestige à Casablanca"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-sm object-cover"
          />
          <img
            src={images.evenements}
            alt="Table de réception et pièce montée pour un événement à Casablanca"
            loading="lazy"
            className="mt-10 aspect-[3/4] w-full rounded-sm object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="evenements" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">L'expérience</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Quatre étapes, un événement sans détour.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 100} className="border-t border-border pt-6">
              <span className="font-serif text-3xl text-accent">{s.n}</span>
              <h3 className="mt-4 font-serif text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="apropos" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <img
            src={atelier}
            alt="Préparation à la main d'une pâtisserie Merry Prestige"
            loading="lazy"
            width={1200}
            height={1408}
            className="w-full rounded-sm object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="order-1 lg:order-2">
          <img src={logo} alt="Monogramme Merry Prestige" width={64} height={64} className="h-16 w-16" />
          <p className="eyebrow mt-8">À propos</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Le goût du détail.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Merry Prestige imagine des créations gourmandes pensées pour accompagner les moments qui
            comptent. Pâtisserie, plateaux et service traiteur se rencontrent autour d'une même
            exigence : proposer une expérience aussi belle que savoureuse.
          </p>
          <a
            href={wa(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark mt-10"
          >
            Nous écrire
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function InstagramSection() {
  const grid = galleryItems.slice(0, 6);
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">{site.instagramHandle}</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Suivez notre univers gourmand
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Retrouvez nos dernières créations et inspirations sur Instagram.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {grid.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 80}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-sm"
              >
                <img
                  src={g.image}
                  alt={`${g.title} — publication Merry Prestige sur Instagram`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-foreground/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-hero-foreground" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-dark">
            Voir Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Venez nous rendre visite
          </h2>

          <p className="mt-8 font-serif text-2xl text-foreground">{site.name}</p>
          <p className="text-[0.62rem] tracking-[0.28em] text-muted-foreground uppercase">
            {site.tagline}
          </p>

          <ul className="mt-8 space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {site.address}
                <br />
                {site.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span>{site.hours}</span>
            </li>
            {site.phones.map((p) => (
              <li key={p} className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <a href={`tel:${p.replace(/\s/g, "")}`} className="link-underline">
                  {p}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${site.phones[0]?.replace(/\s/g, "")}`} className="btn-dark">
              Appeler
            </a>
            <a
              href={wa(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              WhatsApp
            </a>
            <a href={site.maps} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Itinéraire
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="min-h-[360px] overflow-hidden rounded-sm border border-border">
          <iframe
            title="Localisation de Merry Prestige à Casablanca"
            src={site.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[360px] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground pt-20 pb-28 text-hero-foreground md:pb-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img src={logo} alt="Logo Merry Prestige" width={56} height={56} className="h-14 w-14" loading="lazy" />
            <p className="mt-5 font-serif text-2xl">{site.name}</p>
            <p className="text-[0.62rem] tracking-[0.28em] text-hero-foreground/60 uppercase">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Navigation pied de page">
            <p className="text-[0.62rem] tracking-[0.28em] text-accent uppercase">Navigation</p>
            <ul className="mt-5 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-hero-foreground/75 hover:text-hero-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.62rem] tracking-[0.28em] text-accent uppercase">Nous trouver</p>
            <address className="mt-5 space-y-2 text-sm not-italic text-hero-foreground/75">
              <p>
                {site.address}
                <br />
                {site.city}
              </p>
              <p>{site.hours}</p>
              {site.phones.map((p) => (
                <p key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-hero-foreground">
                    {p}
                  </a>
                </p>
              ))}
            </address>
            <div className="mt-5 flex gap-4 text-sm">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-underline">
                Instagram
              </a>
              <a href={wa(waMessages.general)} target="_blank" rel="noopener noreferrer" className="link-underline">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 border-t border-hero-foreground/15 pt-6 text-xs text-hero-foreground/50">
          © 2026 Merry Prestige. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
