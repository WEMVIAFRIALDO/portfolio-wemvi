import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProjectPlaceholderProps {
  label: string;
  large?: boolean;
  className?: string;
}

/** Bingkai bergaya hero untuk proyek yang belum punya screenshot. */
export function ProjectPlaceholder({
  label,
  large,
  className,
}: ProjectPlaceholderProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "@container relative flex items-center justify-center overflow-hidden bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[20px_20px] p-4",
        className,
      )}
    >
      <span
        className={cn(
          "text-center font-display leading-[0.9] font-bold tracking-tight text-primary uppercase",
          large ? "text-[16cqw]" : "text-[11cqw]",
        )}
      >
        {label}
      </span>
    </div>
  );
}

interface ProjectVisualProps {
  project: Project;
  sizes: string;
  className?: string;
}

/** Menampilkan `project.image`; kalau belum ada, placeholder. */
export function ProjectVisual({ project, sizes, className }: ProjectVisualProps) {
  if (!project.image) {
    return (
      <ProjectPlaceholder
        label={project.title}
        large={project.featured}
        className={className}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      <Image
        src={project.image}
        alt={`Tampilan ${project.title}`}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
