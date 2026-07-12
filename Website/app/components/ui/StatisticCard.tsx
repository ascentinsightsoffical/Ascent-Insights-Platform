import type { ReactNode } from "react";
import { Card } from "./Card";

interface StatisticCardProps {
  value: string;
  label: string;
  description: string;
  icon?: ReactNode;
}

export function StatisticCard({ value, label, description, icon }: StatisticCardProps) {
  return (
    <Card className="space-y-4 border border-white/10 bg-[#0A1045]">
      <div className="flex items-center gap-4">
        {icon ? <div className="text-[#3E7BFF]">{icon}</div> : null}
        <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-white">{label}</h3>
        <p className="text-sm leading-7 text-[#9CA3AF]">{description}</p>
      </div>
    </Card>
  );
}
