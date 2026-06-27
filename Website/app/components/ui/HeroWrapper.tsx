import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

interface HeroWrapperProps {
  children: ReactNode;
}

export function HeroWrapper({ children }: HeroWrapperProps) {
  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <div className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    </div>
  );
}
