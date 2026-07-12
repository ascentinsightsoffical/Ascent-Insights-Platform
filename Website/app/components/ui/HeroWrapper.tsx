import type { ReactNode } from "react";

interface HeroWrapperProps {
  children: ReactNode;
}

export function HeroWrapper({ children }: HeroWrapperProps) {
  return (
    <div
      className="min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage:
          "url('/Carousel4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    </div>
  );
}
