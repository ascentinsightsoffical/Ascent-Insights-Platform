import type { ReactNode } from "react";
import { Card } from "./Card";

interface FeatureCardProps {
  title: string;
  description: string;
  badge?: string;
  icon?: ReactNode;
}

export function FeatureCard({ title, description, badge, icon }: FeatureCardProps) {
  return (
    <Card className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <div className="rounded-2xl bg-slate-100 px-3 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
          {badge ?? "Capability"}
        </div>
        {icon ? <div>{icon}</div> : null}
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
        <p className="text-sm leading-7 text-slate-600">{description}</p>
      </div>
    </Card>
  );
}
