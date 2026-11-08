import { ArrowUpRight } from "lucide-react";
import type { BioLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function LinkButton({ label, href, icon: Icon, variant }: BioLink) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex min-h-14 items-center gap-4 rounded-xl border px-5 py-4",
        "transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        "motion-safe:active:scale-[0.985]",
        "motion-reduce:transition-none",
        isPrimary
          ? [
              "border-primary bg-primary text-primary-foreground",
              "hover:bg-primary-hover",
              "motion-safe:hover:-translate-y-0.5",
              "hover:shadow-[0_8px_24px_rgba(255,28,38,0.16)]",
            ]
          : [
              "border-foreground bg-background text-foreground",
              "hover:border-primary hover:bg-primary/5",
              "motion-safe:hover:-translate-y-0.5",
              "hover:shadow-sm",
            ],
      )}
    >
      <Icon
        className={cn(
          "size-5 shrink-0 transition-colors duration-200",
          !isPrimary && "group-hover:text-primary",
        )}
        strokeWidth={1.75}
        aria-hidden="true"
      />

      <span className="flex-1 text-left text-base font-medium tracking-tight">
        {label}
      </span>

      <ArrowUpRight
        className={cn(
          "size-4 shrink-0 transition-[transform,color,opacity] duration-200",
          "motion-safe:group-hover:-translate-y-0.5",
          "motion-safe:group-hover:translate-x-0.5",
          isPrimary
            ? "opacity-90"
            : "text-muted-foreground group-hover:text-primary",
        )}
        strokeWidth={1.75}
        aria-hidden="true"
      />

      <span className="sr-only">(abre em nova aba)</span>
    </a>
  );
}
