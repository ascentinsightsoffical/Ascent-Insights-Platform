import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

interface FooterSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function FooterSection({ title, children, className }: FooterSectionProps) {
  return (
    <div className={classNames("space-y-3", className)}>
      <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9CA3AF]">{title}</h2>
      <div className="space-y-2 text-sm text-[#6B7280]">{children}</div>
    </div>
  );
}
