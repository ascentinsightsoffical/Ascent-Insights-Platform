import { Link } from "react-router";
import type { AnchorHTMLAttributes } from "react";
import { classNames } from "../../utils/classNames";

interface NavigationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export function NavigationLink({ to, className, children, ...props }: NavigationLinkProps) {
  return (
    <Link to={to} className={classNames("text-sm font-medium text-slate-700 transition hover:text-slate-950", className)} {...props}>
      {children}
    </Link>
  );
}
