import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export function meta() {
  return [
    { title: "About | Ascent Insights" },
    { name: "description", content: "Learn how Ascent Insights brings disciplined strategy, digital transformation, and AI intelligence to organizations with African leadership and global ambition." },
  ];
}

export default function About() {
  return (
    <div>
      <Section className="bg-slate-950 text-white">
        <Container>
          <PageHeader
            eyebrow="About"
            title="A platform-minded advisory practice for the next generation of organizations."
            description="We support leaders who are shaping resilient institutions across public, private, and digital ecosystems in Africa and beyond."
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">Organizational focus</p>
              <p className="text-base leading-8 text-slate-700">
                Ascent Insights is built to connect strategy, digital capability, and intelligent platforms. Our foundational work supports sustainable growth, innovation, and societal impact.
              </p>
              <p className="text-base leading-8 text-slate-700">
                We partner with executive teams to define direction, unlock execution confidence, and align technology investments with long-term value.
              </p>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-xl font-semibold text-slate-950">Consistent structure</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Every engagement is framed around governance, capability, and platform architecture—designed to be accessible, measurable, and future-ready.
              </p>
              <Button className="mt-6">Explore our values</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
