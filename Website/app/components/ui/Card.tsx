import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        "rounded-[20px] border border-white/10 bg-[#0A1045] p-6 transition-all duration-200 hover:shadow-[0_0_20px_rgba(61,123,255,0.15)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
