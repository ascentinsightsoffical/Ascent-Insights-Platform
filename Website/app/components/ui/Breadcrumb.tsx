import { Link } from "react-router";
import { classNames } from "../../utils/classNames";

interface BreadcrumbProps {
  items: Array<{ label: string; path: string }>;
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.path} className="inline-flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            <Link className="transition hover:text-slate-900" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
