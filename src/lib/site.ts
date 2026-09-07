// Toute l'information éditable du site (contacts, textes, catégories).
import patisseries from "@/assets/patisseries.jpg";
import plateaux from "@/assets/plateaux.jpg";
import traiteur from "@/assets/traiteur.jpg";
import evenements from "@/assets/evenements.jpg";
import gateaux from "@/assets/gateaux.jpg";
import salees from "@/assets/salees.jpg";
import marocain from "@/assets/marocain.jpg";
import atelier from "@/assets/atelier.jpg";

export const site = {
  name: "Merry Prestige",
  tagline: "Pâtisserie & Traiteur",
  address: "Avenue Dakhla, à côté du marché Hay Chrifa",
  city: "Casablanca, Maroc",
  hours: "09h00 – 21h00",
  phones: ["+212 664 646 256", "+212 664 646 775"],
  whatsapp: "212664646256",
  instagram: "https://www.instagram.com/merry_prestige/",
  instagramHandle: "@merry_prestige",
  maps: "https://www.google.com/maps/search/?api=1&query=Merry+Prestige+Avenue+Dakhla+Hay+Chrifa+Casablanca",
  mapsEmbed:
    "https://www.google.com/maps?q=Avenue%20Dakhla%20Hay%20Chrifa%20Casablanca&output=embed",
};

export const wa = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const waMessages = {
  general:
    "Bonjour Merry Prestige, je souhaite avoir plus d'informations sur vos créations.",
  event:
    "Bonjour Merry Prestige, je souhaite demander des informations pour un événement.",
  product:
    "Bonjour Merry Prestige, je souhaite commander / demander des informations sur une création.",
};

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos créations", href: "#creations" },
  { label: "Pâtisserie", href: "#galerie" },
  { label: "Traiteur", href: "#traiteur" },
  { label: "Événements", href: "#evenements" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export const categories = [
  {
    name: "Pâtisseries",
    image: patisseries,
    description:
      "Des pièces fines travaillées à la main, pensées pour la finesse du goût et la beauté du détail.",
  },
  {
    name: "Plateaux",
    image: plateaux,
    description:
      "Assortiments marocains et créations gourmandes présentés avec soin pour vos tables d'exception.",
  },
  {
    name: "Traiteur",
    image: traiteur,
    description:
      "Pièces salées, buffets et service traiteur pour accompagner vos réceptions du début à la fin.",
  },
  {
    name: "Événements",
    image: evenements,
    description:
      "Mariages, fêtes et cérémonies : une présentation soignée à la hauteur de vos moments précieux.",
  },
];

export type GalleryItem = {
  image: string;
  title: string;
  description: string;
  category: "Pâtisserie" | "Plateaux" | "Traiteur" | "Événements";
  tall?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    image: patisseries,
    title: "Pièces fines",
    description: "Une sélection de pâtisseries individuelles, travaillées à la main.",
    category: "Pâtisserie",
    tall: true,
  },
  {
    image: plateaux,
    title: "Assortiment marocain",
    description: "Un plateau généreux de douceurs marocaines pour vos réceptions.",
    category: "Plateaux",
  },
  {
    image: gateaux,
    title: "Gâteaux & douceurs",
    description: "Des gâteaux de célébration à la finition élégante.",
    category: "Pâtisserie",
  },
  {
    image: salees,
    title: "Pièces salées",
    description: "Bouchées salées raffinées pour cocktails et réceptions.",
    category: "Traiteur",
    tall: true,
  },
  {
    image: traiteur,
    title: "Buffets",
    description: "Une mise en scène soignée, pensée dans le moindre détail.",
    category: "Traiteur",
  },
  {
    image: evenements,
    title: "Réceptions",
    description: "Des tables de fête qui marquent les esprits.",
    category: "Événements",
    tall: true,
  },
  {
    image: marocain,
    title: "Douceurs marocaines",
    description: "L'hospitalité marocaine servie avec le thé.",
    category: "Plateaux",
  },
  {
    image: atelier,
    title: "Le geste",
    description: "Chaque création passe entre nos mains, une à une.",
    category: "Pâtisserie",
  },
];

export const galleryFilters = [
  "Tous",
  "Pâtisserie",
  "Plateaux",
  "Traiteur",
  "Événements",
] as const;

export const traiteurUnivers = [
  "Mariages",
  "Fêtes",
  "Réceptions",
  "Événements professionnels",
  "Buffets",
  "Cérémonies",
];

export const steps = [
  { n: "01", title: "Choisissez votre formule", text: "Pâtisserie, plateaux, buffet ou service complet." },
  { n: "02", title: "Échangez avec notre équipe", text: "Un échange simple sur WhatsApp pour cadrer vos besoins." },
  { n: "03", title: "Personnalisez votre événement", text: "Quantités, présentation et sélection adaptées à votre réception." },
  { n: "04", title: "Profitez de votre réception", text: "Nous préparons, vous savourez le moment." },
];

export const images = { patisseries, plateaux, traiteur, evenements, gateaux, salees, marocain, atelier };
