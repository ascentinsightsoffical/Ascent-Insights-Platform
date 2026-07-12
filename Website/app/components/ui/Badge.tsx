import { classNames } from "../../utils/classNames";

interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full border border-[#3E7BFF]/30 bg-[#2648D8]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#3E7BFF]",
      )}
    >
      {label}
    </span>
  );
}
