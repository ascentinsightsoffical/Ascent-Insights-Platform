import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { FeatureCard } from "../components/ui/FeatureCard";

export function meta() {
  return [
    { title: "Industries | Ascent Insights" },
    { name: "description", content: "Industry-focused transformation services for public institutions, financial services, technology, and infrastructure." },
  ];
}

export default function Industries() {
  return (
    <div>
      <Section className="bg-slate-950 text-white">
        <Container>
          <PageHeader
            eyebrow="Industries"
            title="Trusted guidance for organizations across multiple sectors."
            description="Ascent Insights is positioned to serve leaders in sectors that require disciplined execution and innovation at scale." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <FeatureCard
              badge="Public Sector"
              title="Institutional transformation"
              description="Support public organizations with policy, service design, and digital operations."
            />
            <FeatureCard
              badge="Financial"
              title="Financial services"
              description="Deliver modern customer journeys, data strategy, and risk-aware digital products."
            />
            <FeatureCard
              badge="Infrastructure"
              title="Large-scale programs"
              description="Align complex initiatives with governance, stakeholder trust, and measurable value."
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}
