import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/components/sections/project-visual";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function ProjectDetails({ project }: { project: Project }) {
  const links = [
    { label: "GitHub", href: project.github },
    ...(project.demo ? [{ label: "Demo", href: project.demo }] : []),
  ];

  return (
    <div
      className={cn(
        "flex flex-1 flex-col p-6",
        project.featured && "sm:p-8 lg:p-12",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        {project.featured && <Badge variant="accent">Proyek Unggulan</Badge>}
        {project.status && <Badge variant="accent">{project.status}</Badge>}
        <p className="font-display text-sm text-muted-foreground">
          {project.year} · {project.role}
        </p>
      </div>

      <h3
        className={cn(
          "mt-4 font-display font-bold tracking-tight",
          project.featured ? "text-4xl sm:text-5xl" : "text-2xl",
        )}
      >
        {/* after:inset-0 membuat seluruh kartu bisa diklik; link GitHub/Demo berada di atasnya. */}
        <Link
          href={`/projects/${project.id}`}
          className="rounded-sm transition-colors duration-300 group-hover:text-primary after:absolute after:inset-0"
        >
          {project.title}
        </Link>
      </h3>
      {project.subtitle && (
        <p className="mt-2 font-display text-sm text-primary">
          {project.subtitle}
        </p>
      )}
      <p className="mt-4 text-base text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-auto flex w-fit flex-wrap gap-4 pt-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label} ${project.title}`}
            className="inline-flex min-h-11 items-center gap-1 rounded-sm font-display text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
          >
            {link.label}
            <ArrowUpRight aria-hidden className="size-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" eyebrow="PROJECTS" title="Proyek">
      <RevealGroup className="grid gap-4">
        {featured.map((project) => (
          <RevealItem key={project.id}>
            <Card className="group relative flex flex-col overflow-hidden border-primary/50 md:flex-row">
              <ProjectVisual
                project={project}
                sizes="(min-width: 768px) 576px, 100vw"
                className="aspect-video md:aspect-auto md:w-1/2"
              />
              <ProjectDetails project={project} />
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>

      <RevealGroup className="mt-4 grid gap-4 lg:grid-cols-3">
        {others.map((project) => (
          <RevealItem key={project.id}>
            <Card className="group relative flex h-full flex-col overflow-hidden border-border md:max-lg:flex-row transition-colors duration-300 hover:border-primary/50">
              <ProjectVisual
                project={project}
                sizes="(min-width: 768px) 384px, 100vw"
                className="aspect-video md:max-lg:aspect-auto md:max-lg:w-2/5 md:max-lg:shrink-0"
              />
              <ProjectDetails project={project} />
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
