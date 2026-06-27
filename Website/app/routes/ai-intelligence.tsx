import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { FeatureCard } from "../components/ui/FeatureCard";

export function meta() {
  return [
    { title: "AI Intelligence | Ascent Insights" },
    { name: "description", content: "An overview of future AI intelligence capabilities for organizations seeking trustworthy, scalable adoption." },
  ];
}

export default function AIIntelligence() {
  return (
    <div>
      <Section className="bg-slate-950 text-white">
        <Container>
          <PageHeader
            eyebrow="AI Intelligence"
            title="Aligning AI strategy with enterprise capability and governance."
            description="Our platform foundation will ensure AI adoption is practical, ethical, and aligned to organizational goals." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <FeatureCard
              badge="Vision"
              title="Responsible AI"
              description="Design AI experiences that reflect trust, fairness, and executive accountability."
            />
            <FeatureCard
              badge="Capability"
              title="Analytics to action"
              description="Connect insight, decision support, and operations in a coherent intelligence roadmap."
            />
            <FeatureCard
              badge="Integration"
              title="Platform alignment"
              description="Build AI into enterprise systems with a focus on scale and user adoption."
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}
