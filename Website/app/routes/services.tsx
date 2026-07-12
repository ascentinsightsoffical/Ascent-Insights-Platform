import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { FeatureCard } from "../components/ui/FeatureCard";

export function meta() {
  return [
    { title: "Services | Ascent Insights" },
    { name: "description", content: "Review Ascent Insights service pillars across strategy, digital platforms, and AI intelligence for enterprise transformation." },
  ];
}

export default function Services() {
  return (
    <div>
      <Section className="bg-gradient-hero text-white">
        <Container>
          <PageHeader
            eyebrow="Services"
            title="A structured service offering aligned to enterprise transformation and digital acceleration."
            description="These placeholder service experiences highlight the kind of disciplined capability that will shape future Ascent offerings." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <FeatureCard
              badge="Strategy"
              title="Strategic advisory"
              description="Define outcomes, align leadership, and set the roadmap for credible transformation."
            />
            <FeatureCard
              badge="Platform"
              title="Digital experience"
              description="Create cohesive public and client experiences that support long-term platform growth."
            />
            <FeatureCard
              badge="AI"
              title="Intelligence"
              description="Plan responsible AI capabilities that enhance decision making and institutional performance."
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}
