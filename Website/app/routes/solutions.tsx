import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { FeatureCard } from "../components/ui/FeatureCard";

export function meta() {
  return [
    { title: "Solutions | Ascent Insights" },
    { name: "description", content: "Explore solution themes that connect transformation, product thinking, and technology delivery with strategic outcomes." },
  ];
}

export default function Solutions() {
  return (
    <div>
      <Section className="bg-slate-950 text-white">
        <Container>
          <PageHeader
            eyebrow="Solutions"
            title="Frameworks for modern enterprise and digital product execution."
            description="The solution themes here reflect the platform mindset and the capability architecture we will build out over time." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <FeatureCard
              badge="Platform"
              title="Ecosystem design"
              description="Define connected workflows, data flows, and digital touchpoints across journeys."
            />
            <FeatureCard
              badge="Experiences"
              title="Customer & client journeys"
              description="Map every experience to value and create flexible delivery approaches."
            />
            <FeatureCard
              badge="Governance"
              title="Operating models"
              description="Design governance that keeps strategy, delivery, and AI aligned and accountable."
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}
