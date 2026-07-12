import { Link } from "react-router";
import type { AnchorHTMLAttributes } from "react";
import { classNames } from "../../utils/classNames";

interface NavigationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export function NavigationLink({ to, className, children, ...props }: NavigationLinkProps) {
  return (
    <Link
      to={to}
      className={classNames(
        "text-sm font-medium text-[#9CA3AF] transition hover:text-[#3E7BFF]",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
