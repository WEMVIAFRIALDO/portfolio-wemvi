import { CodeXml, Users, Wrench } from "lucide-react";
import { LearningVisual } from "@/components/sections/learning-visual";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skills } from "@/data/portfolio";

const skillGroups = [
  { title: "Bahasa", icon: CodeXml, items: skills.languages },
  { title: "Framework & Tools", icon: Wrench, items: skills.frameworksAndTools },
  { title: "Soft Skill", icon: Users, items: skills.softSkills },
];

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="SKILLS" title="Keahlian">
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, items }) => (
          <RevealItem key={title} className="sm:max-lg:last:col-span-2">
            <Card className="h-full border-border transition-colors duration-300 hover:border-primary/50">
              <CardHeader>
                <Icon aria-hidden className="mb-3 size-6 text-primary" />
                <CardTitle className="font-display text-xl font-bold">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>

      <RevealGroup className="mt-4">
        <RevealItem>
          <Card className="relative flex flex-col overflow-hidden border-border lg:h-125 lg:flex-row">
            <div className="relative z-10 flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-12">
              <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Sedang Dipelajari
              </h3>
              <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
                {skills.learning.focus}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {skills.learning.topics.map((topic) => (
                  <li key={topic}>
                    <Badge variant="accent">{topic}</Badge>
                  </li>
                ))}
              </ul>
            </div>
            <LearningVisual />
          </Card>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}
