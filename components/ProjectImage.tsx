import { type Ref } from "react";
import { cn } from "@/lib/utils";
import type { ProjectImage as ProjectImageData } from "@/data/projects";

type ProjectImageProps = {
  image: ProjectImageData;
  alt: string;
  className?: string;
  ref?: Ref<HTMLDivElement>;
};

export function ProjectImage({
  image,
  alt,
  className,
  ref,
}: ProjectImageProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br",
        image.gradient,
        className
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="select-none font-display text-7xl font-bold tracking-tight text-white/30 sm:text-8xl">
          {image.initials}
        </span>
      </div>
      <div
        className="absolute left-4 top-4 flex items-center gap-1.5 rounded-lg bg-black/25 px-2.5 py-1.5 backdrop-blur-sm"
        aria-hidden="true"
      >
        <span className="size-2.5 rounded-full bg-white/50" />
        <span className="size-2.5 rounded-full bg-white/50" />
        <span className="size-2.5 rounded-full bg-white/50" />
      </div>
      <span className="sr-only">{alt}</span>
    </div>
  );
}
