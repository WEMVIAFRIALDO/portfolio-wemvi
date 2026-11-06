import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectPlaceholder } from "@/components/sections/project-visual";
import { SiteFooter } from "@/components/sections/site-footer";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/brand-icons";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/ui/portfolio-hero";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section";
import { getProject, projects, type Project } from "@/data/portfolio";

const PLACEHOLDER_COUNT = 3;

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};

  return {
    title: `${project.title} — Wemvi Afrialdo`,
    description: project.description,
  };
}

function Gallery({ project }: { project: Project }) {
  const screenshots =
    project.gallery ?? (project.image ? [project.image] : []);
  const frame = "aspect-video overflow-hidden rounded-lg border border-border";

  return (
    <RevealGroup className="grid gap-4 md:grid-cols-3">
      {screenshots.map((src, i) => (
        <RevealItem key={src}>
          <div className={`relative bg-background ${frame}`}>
            <Image
              src={src}
              alt={`Screenshot ${project.title} ${i + 1}`}
              fill
              sizes="(min-width: 768px) 384px, 100vw"
              className="object-contain"
            />
          </div>
        </RevealItem>
      ))}
      {screenshots.length === 0 &&
        Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
          <RevealItem key={i}>
            <ProjectPlaceholder
              label={String(i + 1).padStart(2, "0")}
              className={frame}
            />
          </RevealItem>
        ))}
    </RevealGroup>
  );
}

function ProjectSkeleton() {
  return (
    <div aria-hidden className="mt-10 min-h-svh animate-pulse">
      <div className="h-7 w-24 rounded-md bg-muted" />
      <div className="mt-4 h-10 w-3/4 rounded-md bg-muted sm:h-16 lg:h-20" />
      <div className="mt-10 h-48 rounded-lg bg-muted lg:mt-16" />
    </div>
  );
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const facts = [
    { label: "Tahun", value: project.year },
    { label: "Peran", value: project.role },
  ];

  return (
    <>
      <RevealGroup className="mt-10">
        <RevealItem>
          <Eyebrow>PROJECTS</Eyebrow>
        </RevealItem>
        <RevealItem>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
        </RevealItem>
        {project.subtitle && (
          <RevealItem>
            <p className="mt-4 font-display text-base text-primary sm:text-lg">
              {project.subtitle}
            </p>
          </RevealItem>
        )}
      </RevealGroup>

      <RevealGroup className="mt-10 grid gap-8 md:grid-cols-3 lg:mt-16 lg:gap-12">
        <RevealItem className="md:col-span-2">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Deskripsi
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground lg:text-xl lg:leading-relaxed">
            {project.description}
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight">
            Teknologi
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </RevealItem>

        <RevealItem>
          <Card className="border-border p-6">
            <dl className="grid gap-4">
              {project.status && (
                <div>
                  <dt className="font-display text-sm font-bold">Status</dt>
                  <dd className="mt-2">
                    <Badge variant="accent">{project.status}</Badge>
                  </dd>
                </div>
              )}
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-display text-sm font-bold">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-base text-muted-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 grid gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants()}
              >
                <GithubIcon aria-hidden className="size-4" />
                Lihat Kode di GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline" })}
                >
                  <ArrowUpRight aria-hidden className="size-4" />
                  Lihat Demo
                </a>
              )}
            </div>
          </Card>
        </RevealItem>
      </RevealGroup>

      <section aria-labelledby="gallery-title" className="mt-16 lg:mt-24">
        <h2
          id="gallery-title"
          className="mb-6 font-display text-2xl font-bold tracking-tight"
        >
          Galeri
        </h2>
        <Gallery project={project} />
      </section>
    </>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="bg-background px-4 pt-28 pb-20 sm:px-6 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#projects"
            className={buttonVariants({ variant: "outline" })}
          >
            <ArrowLeft aria-hidden className="size-4" />
            Kembali ke Halaman Utama
          </Link>
          <Suspense fallback={<ProjectSkeleton />}>
            <ProjectContent params={params} />
          </Suspense>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
