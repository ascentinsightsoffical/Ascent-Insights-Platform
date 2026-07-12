import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={classNames("py-16 sm:py-20", className)}>{children}</section>
  );
}
