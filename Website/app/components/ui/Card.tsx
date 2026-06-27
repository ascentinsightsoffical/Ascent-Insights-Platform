import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={classNames("rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_24px_52px_rgba(15,23,42,0.08)]", className)}>
      {children}
    </div>
  );
}
