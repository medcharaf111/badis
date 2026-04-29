import { cn } from "@/lib/cn";

export function SectionLabel({
  index,
  title,
  className,
  variant = "light",
}: {
  index: string;
  title: string;
  className?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div className={cn("flex items-center gap-3 label-mono", className)}>
      <span aria-hidden className="h-1.5 w-1.5 bg-yellow rounded-full" />
      <span className={cn("tnum", isDark ? "text-yellow" : "text-yellow-deep")}>
        {index}
      </span>
      <span aria-hidden className={cn("h-px w-8", isDark ? "bg-white/30" : "bg-rule")} />
      <span className={isDark ? "text-white/70" : "text-steel-500"}>{title}</span>
    </div>
  );
}
