import { classNames } from "../../utils/classNames";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <div className={classNames("space-y-3", className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-600">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="max-w-3xl text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}
