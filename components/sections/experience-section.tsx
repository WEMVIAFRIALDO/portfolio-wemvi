import { Card } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  const timeline = [...experiences].sort((a, b) => b.year - a.year);

  return (
    <Section id="experience" eyebrow="EXPERIENCE" title="Pengalaman">
      <RevealGroup>
        <ol className="ml-1.5 flex flex-col gap-6 border-l border-border">
          {timeline.map((item) => (
            <li key={`${item.organization}-${item.year}`}>
              <RevealItem className="relative pl-6 sm:pl-10">
                <span
                  aria-hidden
                  className="absolute top-8 -left-[6.5px] size-3 rounded-full bg-primary ring-4 ring-background"
                />
                <Card className="border-border p-6 transition-colors duration-300 hover:border-primary/50">
                  <p className="font-display text-sm font-bold text-primary">
                    {item.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-lg text-muted-foreground">
                    {item.organization}
                  </p>
                </Card>
              </RevealItem>
            </li>
          ))}
        </ol>
      </RevealGroup>
    </Section>
  );
}
