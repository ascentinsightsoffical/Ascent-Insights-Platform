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
    <Card className="space-y-4 bg-slate-50 border-slate-200">
      <div className="flex items-center gap-4">
        {icon ? <div className="text-slate-500">{icon}</div> : null}
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-slate-900">{label}</h3>
        <p className="text-sm leading-7 text-slate-600">{description}</p>
      </div>
    </Card>
  );
}
