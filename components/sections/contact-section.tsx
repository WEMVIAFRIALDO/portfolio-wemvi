import { ArrowUpRight } from "lucide-react";
import { contactLinks } from "@/components/sections/contact-links";
import { Card } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="CONTACT" title="Kontak">
      <RevealGroup>
        <ul className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <RevealItem className="h-full">
                <a
                  href={href}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group block h-full rounded-lg"
                >
                  <Card className="flex h-full items-center gap-4 border-border p-6 transition-colors duration-300 group-hover:border-primary/50">
                    <Icon aria-hidden className="size-6 shrink-0 text-primary" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-base font-bold">
                        {label}
                      </span>
                      <span className="mt-1 block text-base break-words text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                    />
                  </Card>
                </a>
              </RevealItem>
            </li>
          ))}
        </ul>
      </RevealGroup>
    </Section>
  );
}
