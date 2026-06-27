import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames("mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
