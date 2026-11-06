import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <Section id="education" eyebrow="EDUCATION" title="Pendidikan">
      <RevealGroup className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <RevealItem key={item.school}>
            <Card className="h-full border-border p-6 transition-colors duration-300 hover:border-primary/50">
              <GraduationCap aria-hidden className="size-6 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                {item.school}
              </h3>
              <p className="mt-2 font-display text-sm text-primary">
                {item.program}
              </p>
              {item.institution && (
                <p className="mt-3 text-base text-muted-foreground">
                  {item.institution}
                </p>
              )}
              {item.period && (
                <p className="mt-1 text-base text-muted-foreground">
                  {item.period}
                </p>
              )}
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
