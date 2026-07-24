import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto text-center")}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className={cn("section-copy", align === "center" && "mx-auto")}>{description}</p>
    </div>
  );
}