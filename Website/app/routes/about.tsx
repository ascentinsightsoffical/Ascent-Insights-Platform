import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";

export function meta() {
  return [
    { title: "About | Ascent Insights" },
    { name: "description", content: "Ascent Insights is a strategic management and organizational transformation firm helping organizations solve complex challenges, unlock sustainable growth, and build resilient systems for the future." },
  ];
}

export default function About() {
  return (
    <div>
      <Section className="bg-slate-950 text-white">
        <Container>
          <PageHeader
            eyebrow="About"
            title="Building Better Organizations. Creating Lasting Impact."
            description="At Ascent Insights, we believe that every organization has the potential to achieve extraordinary results when strategy, leadership, people, and technology work together with purpose."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-10">
            <div className="space-y-8">
              <p className="text-base leading-8 text-slate-700">
                We are a strategic management and organizational transformation firm dedicated to helping businesses, governments, development organizations, and institutions solve complex challenges, unlock sustainable growth, and build resilient organizations for the future.
              </p>
              <p className="text-base leading-8 text-slate-700">
                Founded in 2020, Ascent Insights was established with a simple but powerful belief: organizations do not struggle because they lack ideas—they struggle because execution, leadership, systems, and strategy are often disconnected. Our role is to bridge that gap through collaborative strategic interventions that transform vision into measurable results.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Our Purpose</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                We exist to help organizations make better decisions, execute with confidence, and create sustainable value.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Every engagement is built around one objective: enabling our clients to become stronger, more agile, and better prepared for an increasingly complex world.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Rather than offering isolated recommendations, we work alongside our clients to design practical strategies, strengthen leadership capabilities, optimize organizational systems, and build the foundations required for long-term success.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Our Vision</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                To become Africa's leading intelligence-powered organizational transformation platform.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Our ambition extends beyond traditional consulting. We are building an ecosystem that combines world-class consulting expertise, organizational intelligence, research, and artificial intelligence to help organizations transform continuously in an evolving business environment.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Our Mission</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                To empower organizations through strategic insight, collaborative expertise, and innovative solutions that drive measurable transformation, sustainable growth, and lasting impact.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">What Makes Us Different</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">Strategy Before Solutions</h3>
                    <p className="mt-3 text-base leading-8 text-slate-700">
                      We believe sustainable success begins with understanding—not assumptions. Every recommendation is grounded in rigorous analysis, evidence-based thinking, and a deep understanding of each client's unique environment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">Collaborative Expertise</h3>
                    <p className="mt-3 text-base leading-8 text-slate-700">
                      Complex challenges require multidisciplinary thinking. We bring together specialists across strategy, leadership, business development, governance, organizational effectiveness, finance, technology, and legal advisory to deliver integrated solutions rather than isolated advice.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">Transformation, Not Transactions</h3>
                    <p className="mt-3 text-base leading-8 text-slate-700">
                      Our work does not end with delivering reports. We partner with organizations throughout their transformation journey, helping turn strategy into execution and measurable outcomes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">Intelligence-Driven Consulting</h3>
                    <p className="mt-3 text-base leading-8 text-slate-700">
                      We are investing in the future of consulting by combining human expertise with artificial intelligence, research capabilities, and digital platforms that enhance decision-making, accelerate insights, and improve organizational performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Our Core Pillars</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">Strategy</h3>
                    <p className="mt-3 text-base leading-8 text-slate-700">
                      Helping organizations define where they are going, identify opportunities, navigate uncertainty, and build competitive advantage.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">People</h3>
                    <p className="mt-3 text-base leading-8 text-slate-700">
                      Strengthening leadership, organizational culture, talent development, and performance to create high-performing teams.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">Process</h3>
                    <p className="mt-3 text-base leading-8 text-slate-700">
                      Designing efficient systems, improving operational excellence, and enabling organizations to execute consistently and scale sustainably.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Who We Serve</h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  We work with organizations across both the public and private sectors, including:
                </p>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
                  <li>Corporations</li>
                  <li>Small and Medium Enterprises (SMEs)</li>
                  <li>Government Ministries and Agencies</li>
                  <li>County Governments</li>
                  <li>Development Partners</li>
                  <li>Non-Governmental Organizations</li>
                  <li>Educational Institutions</li>
                  <li>International Organizations</li>
                  <li>Startups and Emerging Enterprises</li>
                </ul>
                <p className="mt-6 text-base leading-8 text-slate-700">
                  Regardless of size or sector, our commitment remains the same: delivering practical solutions that create measurable value.
                </p>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Looking Ahead</h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  The future of Ascent Insights is rooted in continuous innovation.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  We are building an integrated ecosystem that combines consulting, research, professional development, artificial intelligence, digital products, and organizational intelligence into a unified platform that enables transformation at scale.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Our long-term vision is not simply to advise organizations—it is to become the trusted operating partner that helps them learn faster, make better decisions, adapt confidently, and thrive in a rapidly changing world.
                </p>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-semibold tracking-tight text-white">Our Promise</h2>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  Every organization deserves more than advice.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  It deserves a partner committed to understanding its challenges, unlocking its potential, and delivering solutions that create meaningful, measurable, and lasting impact.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  At Ascent Insights, we don't just help organizations solve today's problems—we help them build tomorrow's possibilities.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
