import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export function meta() {
  return [
    { title: "Careers | Ascent Insights" },
    { name: "description", content: "Discover future career opportunities as Ascent Insights builds its enterprise platform, research, and AI intelligence practice." },
  ];
}

export default function Careers() {
  return (
    <div>
      <Section className="bg-gradient-hero text-white">
        <Container>
          <PageHeader
            eyebrow="Careers"
            title="Join a practice focused on strategic transformation and platform excellence."
            description="Ascent Insights is preparing to grow a team of consultative operators, digital builders, and change leaders." 
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="rounded-[32px] border border-white/10 bg-[#0A1045] p-10 shadow-[0_24px_56px_rgba(5,8,45,0.3)]">
            <h2 className="text-2xl font-semibold text-white">Current opportunities</h2>
            <p className="mt-4 text-sm leading-7 text-[#9CA3AF]">
              The public website foundation is aimed at supporting future recruitment, capability building, and a culture of African leadership with global standards.
            </p>
            <Button className="mt-6">Learn about the team</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
