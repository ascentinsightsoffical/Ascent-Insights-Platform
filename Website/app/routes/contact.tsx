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
      <Section className="bg-gradient-hero text-white">
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
          <div className="rounded-[32px] border border-white/10 bg-[#0A1045] p-10 shadow-[0_24px_56px_rgba(5,8,45,0.3)]">
            <h2 className="text-2xl font-semibold text-white">Engagement placeholder</h2>
            <p className="mt-4 text-sm leading-7 text-[#9CA3AF]">
              A polished contact experience will be implemented later, supporting inquiry, partnerships, and strategic briefings.
            </p>
            <Button className="mt-6">Request information</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
