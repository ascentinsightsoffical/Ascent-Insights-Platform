import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { FeatureCard } from "../components/ui/FeatureCard";

export function meta() {
  return [
    { title: "Academy | Ascent Insights" },
    { name: "description", content: "A preview of future learning and capability-building programs for executives and transformation teams." },
  ];
}

export default function Academy() {
  return (
    <div>
      <Section className="bg-gradient-hero text-white">
        <Container>
          <PageHeader
            eyebrow="Academy"
            title="A learning framework for leaders building digitally enabled organizations."
            description="This section will anchor capability development, executive education, and digital upskilling in future releases." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <FeatureCard
              badge="Executive"
              title="Leadership development"
              description="Equip leaders with the language and decisiveness needed for transformation."
            />
            <FeatureCard
              badge="Capability"
              title="Team enablement"
              description="Build internal digital and AI literacy with structured learning pathways."
            />
            <FeatureCard
              badge="Practice"
              title="Workshop design"
              description="Create disciplined discovery and momentum for high-value programs."
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}
