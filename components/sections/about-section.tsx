import { BriefcaseBusiness, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/portfolio";

const facts = [
  { label: "Asal", value: profile.origin, icon: MapPin },
  { label: "Peran", value: profile.role, icon: BriefcaseBusiness },
];

export function AboutSection() {
  return (
    <Section id="about" eyebrow="ABOUT" title="Tentang Saya">
      <RevealGroup className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        <RevealItem className="lg:col-span-3">
          <p className="max-w-2xl text-xl leading-relaxed text-foreground lg:text-2xl lg:leading-relaxed">
            {profile.about}
          </p>
        </RevealItem>

        <div className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {facts.map(({ label, value, icon: Icon }) => (
            <RevealItem key={label}>
              <Card className="border-border p-6 transition-colors duration-300 hover:border-primary/50">
                <div className="flex items-center gap-2">
                  <Icon aria-hidden className="size-5 text-primary" />
                  <h3 className="font-display text-base font-bold">{label}</h3>
                </div>
                <p className="mt-3 text-base text-muted-foreground">{value}</p>
              </Card>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </Section>
  );
}
