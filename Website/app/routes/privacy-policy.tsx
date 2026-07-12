import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";

export function meta() {
  return [
    { title: "Privacy Policy | Ascent Insights" },
    { name: "description", content: "Placeholder privacy policy content reflecting the public website's future commitment to data responsibility and trust." },
  ];
}

export default function PrivacyPolicy() {
  return (
    <div>
      <Section className="bg-gradient-hero text-white">
        <Container>
          <PageHeader
            eyebrow="Privacy Policy"
            title="A placeholder policy for future data and privacy guidance."
            description="This page will be updated with governance details that support trust, transparency, and compliance." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="rounded-[32px] border border-white/10 bg-[#0A1045] p-10 shadow-[0_24px_56px_rgba(5,8,45,0.3)]">
            <h2 className="text-2xl font-semibold text-white">Data responsibility</h2>
            <p className="mt-4 text-sm leading-7 text-[#9CA3AF]">
              Placeholder information about how the site will handle personal and organizational data when the website is fully built.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
