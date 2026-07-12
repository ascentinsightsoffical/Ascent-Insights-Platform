import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { FeatureCard } from "../components/ui/FeatureCard";

export function meta() {
  return [
    { title: "Insights | Ascent Insights" },
    { name: "description", content: "A placeholder for insights that translate strategy, transformation, and AI into actionable leadership narratives." },
  ];
}

export default function Insights() {
  return (
    <div>
      <Section className="bg-gradient-hero text-white">
        <Container>
          <PageHeader
            eyebrow="Insights"
            title="Ideas and perspectives for practice-focused leaders."
            description="This section will be a home for thought leadership grounded in practical outcomes and digital transformation experience." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <FeatureCard
              badge="Perspective"
              title="Executive clarity"
              description="Translate complex strategy into concise, executable direction for leadership teams."
            />
            <FeatureCard
              badge="Practice"
              title="Execution lens"
              description="Surface what matters most for operational delivery and sustainable capability building."
            />
            <FeatureCard
              badge="Context"
              title="Platform viewpoint"
              description="Position digital experience and AI intelligence as enablers of broader organizational change."
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}
