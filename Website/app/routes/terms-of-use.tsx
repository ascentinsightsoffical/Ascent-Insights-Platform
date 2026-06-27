import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";

export function meta() {
  return [
    { title: "Terms of Use | Ascent Insights" },
    { name: "description", content: "Placeholder terms of use for the Ascent Insights public platform, reflecting enterprise-grade expectations and future legal clarity." },
  ];
}

export default function TermsOfUse() {
  return (
    <div>
      <Section className="bg-slate-950 text-white">
        <Container>
          <PageHeader
            eyebrow="Terms of Use"
            title="A placeholder guide to future usage terms for the public site." 
            description="This page will be updated with terms that support client, partner, and public use of the platform experience." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
            <h2 className="text-2xl font-semibold text-slate-950">Usage guidance</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Placeholder content that will be replaced with terms describing how visitors may engage with the public website and future platform features.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
