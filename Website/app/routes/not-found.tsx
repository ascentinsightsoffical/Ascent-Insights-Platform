import { Link } from "react-router";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export function meta() {
  return [
    { title: "404 | Ascent Insights" },
    { name: "description", content: "Page not found. The Ascent Insights public experience is under development." },
  ];
}

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-600">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Page not found</h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            The route you requested is not yet available on the public website. Return to the homepage to continue exploring Ascent Insights.
          </p>
          <Link to="/" className="mt-8 inline-flex">
            <Button variant="secondary">Back to home</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
