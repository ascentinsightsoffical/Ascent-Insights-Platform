import { HeroWrapper } from "../components/ui/HeroWrapper";
import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { SectionTitle } from "../components/ui/SectionTitle";
import { FeatureCard } from "../components/ui/FeatureCard";
import { StatisticCard } from "../components/ui/StatisticCard";
import { Button } from "../components/ui/Button";

export function meta() {
  return [
    { title: "Home | Ascent Insights" },
    { name: "description", content: "Ascent Insights brings enterprise transformation, digital strategy, and AI intelligence to African and global leaders." },
  ];
}

export default function Home() {
  return (
    <div>
      <HeroWrapper>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">Strategic transformation</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Intelligent digital leadership for Africa and global markets.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Build a resilient enterprise platform foundation that aligns strategy, people, data, and AI for measurable impact.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button>Explore services</Button>
                <Button variant="secondary">View research</Button>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-slate-100 shadow-[0_48px_100px_rgba(15,23,42,0.35)]">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Program focus</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Platform-ready experience design</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                A foundation for public engagement, client journeys, internal operations, and AI-enabled transformation at scale.
              </p>
            </div>
          </div>
        </Container>
      </HeroWrapper>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Why Ascent"
            title="A disciplined approach to platform, people, and performance"
            description="We help organizations navigate strategic priorities with clarity, build digital capability with confidence, and create sustainable value through practical innovation."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              badge="Strategy"
              title="Business-led transformation"
              description="Clarify ambition, align operating models, and connect technology to organizational purpose."
            />
            <FeatureCard
              badge="Digital"
              title="Enterprise platform delivery"
              description="Design scalable experiences across public, client, and foundation systems for measurable outcomes."
            />
            <FeatureCard
              badge="AI"
              title="Intelligent decisioning"
              description="Set a practical roadmap for AI adoption with governance, capability, and human-centered value."
            />
          </div>
        </Container>
      </Section>
      <Section className="bg-slate-100">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Market signal"
                title="Measured advisory for complex challenges"
                description="Ascent Insights combines rigor, local leadership, and digital poise to support ambitious enterprises and public institutions."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <StatisticCard value="12+" label="Transformation programs" description="Delivered across strategy, digital, and AI advisory engagements." />
              <StatisticCard value="8" label="Industry sectors" description="Supporting public and private organizations with platform-driven growth." />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-600">Ready for next phase</p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Future-fit digital transformation starts with architecture.</h2>
                <p className="max-w-2xl text-sm leading-7 text-slate-600">
                  Prepare your organization for the next wave of AI, platform, and customer engagement without sacrificing rigor or credibility.
                </p>
              </div>
              <Button variant="secondary">Start with a framework</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
