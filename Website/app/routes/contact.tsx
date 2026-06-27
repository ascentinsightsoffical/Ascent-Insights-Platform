import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export function meta() {
  return [
    { title: "Contact | Ascent Insights" },
    { name: "description", content: "A placeholder contact page for future client engagement, partnerships, and platform discussions." },
  ];
}

export default function Contact() {
  return (
    <div>
      <Section className="bg-slate-950 text-white">
        <Container>
          <PageHeader
            eyebrow="Contact"
            title="Connect with Ascent Insights for future transformation dialogue."
            description="This page represents the public engagement entry point for advisory, research, and platform collaboration." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
            <h2 className="text-2xl font-semibold text-slate-950">Engagement placeholder</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              A polished contact experience will be implemented later, supporting inquiry, partnerships, and strategic briefings.
            </p>
            <Button className="mt-6">Request information</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
