import type { ReactNode } from "react";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-block rounded-md bg-primary px-2.5 py-1 font-display text-sm font-bold tracking-wider text-primary-foreground">
      {children}
    </p>
  );
}

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="scroll-mt-20 bg-background px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <RevealGroup className="mb-10 lg:mb-16">
          <RevealItem>
            <Eyebrow>{eyebrow}</Eyebrow>
          </RevealItem>
          <RevealItem>
            <h2
              id={titleId}
              className="mt-4 font-display text-5xl font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl"
            >
              {title}
            </h2>
          </RevealItem>
        </RevealGroup>
        {children}
      </div>
    </section>
  );
}
