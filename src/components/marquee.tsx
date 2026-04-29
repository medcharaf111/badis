import { cn } from "@/lib/cn";

export function Marquee({
  items,
  reverse = false,
  slow = false,
  separator = "/",
  variant = "default",
}: {
  items: string[];
  reverse?: boolean;
  slow?: boolean;
  separator?: string;
  variant?: "default" | "navy" | "yellow";
}) {
  const styles =
    variant === "navy"
      ? "bg-navy text-white border-y border-navy-line"
      : variant === "yellow"
      ? "bg-yellow text-navy-deep"
      : "bg-bg-soft text-ink rule-top rule-bottom";

  return (
    <div className={cn("overflow-hidden py-3.5 select-none", styles)}>
      <div
        className={cn(
          "flex whitespace-nowrap min-w-[200%]",
          slow ? "marquee-track-slow" : "marquee-track",
          reverse && "marquee-reverse"
        )}
      >
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className="flex shrink-0 items-center gap-10 pr-10"
            aria-hidden={dup === 1 ? "true" : undefined}
          >
            {items.map((item, i) => (
              <li
                key={`${dup}-${i}`}
                className="flex items-center gap-10 font-display text-sm uppercase tracking-wider font-bold"
              >
                <span>{item}</span>
                <span
                  aria-hidden
                  className={
                    variant === "yellow"
                      ? "text-navy-deep/60"
                      : variant === "navy"
                      ? "text-yellow"
                      : "text-blue-500"
                  }
                >
                  {separator}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
