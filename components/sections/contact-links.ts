import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/ui/brand-icons";
import { contact } from "@/data/portfolio";

/** Teks tampilan diambil dari URL di data, jadi cukup mengubah data/portfolio.ts. */
const lastSegment = (url: string) => url.split("/").pop() ?? url;

/** "6285280513096" menjadi "+62 852-8051-3096". */
function formatPhone(digits: string) {
  const local = digits.replace(/^62/, "");
  return `+62 ${local.slice(0, 3)}-${local.slice(3, 7)}-${local.slice(7)}`;
}

export const contactLinks = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    value: formatPhone(lastSegment(contact.whatsapp)),
    href: contact.whatsapp,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "GitHub",
    value: lastSegment(contact.github),
    href: contact.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "Instagram",
    value: `@${lastSegment(contact.instagram)}`,
    href: contact.instagram,
    icon: InstagramIcon,
    external: true,
  },
];
