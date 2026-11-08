import type { LucideIcon } from "lucide-react";
import { Globe, MapPin, MessageCircle, UtensilsCrossed } from "lucide-react";

export type BioLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  variant: "primary" | "outline";
};

export const bioLinks: BioLink[] = [
  {
    label: "Ver o cardápio",
    href: "https://emierre.com/facaseupedido/sushi/cardapio.html",
    icon: UtensilsCrossed,
    variant: "primary",
  },
  {
    label: "Falar no WhatsApp",
    href: "https://wa.me/message/D6X5CDP2CUFYH1",
    icon: MessageCircle,
    variant: "outline",
  },
  {
    label: "Como chegar",
    href: "https://maps.app.goo.gl/ubqXRUZE4irmDXfX9",
    icon: MapPin,
    variant: "outline",
  },
];

export const instagramUrl = "https://instagram.com/okamysushibar";

export const logoSrc = "/images/okamy-logo.webp";
