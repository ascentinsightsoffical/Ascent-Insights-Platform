import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Button } from "../components/ui/Button";

export function meta() {
  return [
    { title: "Research | Ascent Insights" },
    { name: "description", content: "Ascent Insights research is focused on strategic insights, platform readiness, and the evolving role of AI in organizational transformation." },
  ];
}

export default function Research() {
  return (
    <div>
      <Section className="bg-slate-950 text-white">
        <Container>
          <PageHeader
            eyebrow="Research"
            title="Rigorous perspectives on transformation, trust, and digital leadership."
            description="Future research and papers will share evidence-based thinking for leaders shaping resilient institutions." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionTitle
                eyebrow="In focus"
                title="Research directions for today’s enterprise challenges"
                description="Emerging topics will include market strategy, technology governance, digital equity, and AI capability design."
              />
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-xl font-semibold text-slate-950">Research agenda</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Build a research practice that supports practical decisions, executive confidence, and sector-level transformation leadership.
              </p>
              <Button className="mt-6" variant="secondary">
                Explore topics
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
