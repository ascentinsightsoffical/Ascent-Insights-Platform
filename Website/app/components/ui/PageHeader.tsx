import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
}

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <header className={classNames("space-y-4", className)}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">{eyebrow}</p> : null}
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="max-w-3xl text-base leading-8 text-slate-600">{description}</p>
    </header>
  );
}
