import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";

export function meta() {
  return [
    { title: "Terms of Service | Ascent Insights" },
    { name: "description", content: "Terms of Service for the Ascent Insights website and digital platforms, covering eligibility, services, AI use, privacy, and governing law." },
  ];
}

export default function TermsOfUse() {
  return (
    <div>
      <Section className="bg-gradient-hero text-white">
        <Container>
          <PageHeader
            eyebrow="Terms of Service"
            title="Terms of Service"
            description="Effective July 6, 2026. These Terms govern your access to and use of the Ascent Insights website, digital platforms, and services."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="space-y-10">
              <div className="rounded-[32px] border border-white/10 bg-[#0A1045] p-10 shadow-[0_24px_56px_rgba(5,8,45,0.3)]">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#3E7BFF]">Effective Date</p>
                <p className="mt-4 text-base leading-8 text-[#D1D5DB]">July 6, 2026</p>
              </div>

              <div className="space-y-8">
                <section id="welcome" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">Welcome</h2>
                  <p className="text-base leading-8 text-slate-700">
                    Welcome to the Ascent Insights website and digital platforms ("Platform"). These Terms of Service ("Terms") govern your access to and use of our website, client portals, digital products, artificial intelligence tools, research materials, and consulting services.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you should discontinue use of the Platform.
                  </p>
                </section>

                <section id="about" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">1. About Ascent Insights</h2>
                  <p className="text-base leading-8 text-slate-700">
                    Ascent Insights Ltd ("Ascent Insights", "we", "our", or "us") is a strategy, management, business development, legal, and organizational transformation consulting firm that provides advisory services, research, digital platforms, training, and technology-enabled solutions to organizations across public and private sectors.
                  </p>
                </section>

                <section id="eligibility" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">2. Eligibility</h2>
                  <p className="text-base leading-8 text-slate-700">
                    You must be at least 18 years old or have the legal authority to represent an organization to use our services.
                  </p>
                  <p className="text-base leading-8 text-slate-700">By using this Platform, you confirm that:</p>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
                    <li>You have legal capacity to enter into this agreement.</li>
                    <li>Information you provide is accurate and current.</li>
                    <li>You will comply with all applicable laws and regulations.</li>
                  </ul>
                </section>

                <section id="services" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">3. Services</h2>
                  <p className="text-base leading-8 text-slate-700">
                    Ascent Insights may provide services including but not limited to:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
                    <li>Strategy consulting</li>
                    <li>Organizational transformation</li>
                    <li>Leadership advisory</li>
                    <li>Business development consulting</li>
                    <li>Legal consulting</li>
                    <li>Public sector advisory</li>
                    <li>Research and analytics</li>
                    <li>Training and executive education</li>
                    <li>AI-powered advisory tools</li>
                    <li>Digital assessments</li>
                    <li>Client collaboration portals</li>
                    <li>Knowledge resources and publications</li>
                  </ul>
                  <p className="text-base leading-8 text-slate-700">
                    Some services may require separate engagement agreements.
                  </p>
                </section>

                <section id="professional-advice" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">4. Professional Advice</h2>
                  <p className="text-base leading-8 text-slate-700">
                    Information provided on this Platform is for general informational purposes only.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Nothing on this Platform constitutes legal, financial, investment, tax, accounting, or professional advice unless explicitly provided through a formal written engagement between Ascent Insights and a client.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Users should seek appropriate professional advice before making significant business decisions.
                  </p>
                </section>

                <section id="client-engagements" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">5. Client Engagements</h2>
                  <p className="text-base leading-8 text-slate-700">
                    Consulting services are governed by separate engagement letters, proposals, or contracts.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Where conflicts exist between these Terms and a signed client agreement, the signed agreement shall prevail.
                  </p>
                </section>

                <section id="user-accounts" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">6. User Accounts</h2>
                  <p className="text-base leading-8 text-slate-700">
                    Certain services require registration.
                  </p>
                  <p className="text-base leading-8 text-slate-700">You agree to:</p>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
                    <li>Keep login credentials confidential.</li>
                    <li>Maintain accurate account information.</li>
                    <li>Notify us immediately of unauthorized account use.</li>
                    <li>Accept responsibility for activities conducted under your account.</li>
                  </ul>
                  <p className="text-base leading-8 text-slate-700">
                    We reserve the right to suspend or terminate accounts that violate these Terms.
                  </p>
                </section>

                <section id="ai-services" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">7. Artificial Intelligence Services</h2>
                  <p className="text-base leading-8 text-slate-700">
                    Our Platform may include AI-powered assistants and intelligent tools.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    These services are designed to support—not replace—professional judgment.
                  </p>
                  <p className="text-base leading-8 text-slate-700">While we strive for accuracy, AI-generated responses:</p>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
                    <li>May contain errors or omissions.</li>
                    <li>Should not be relied upon as the sole basis for business decisions.</li>
                    <li>Do not constitute professional consulting advice.</li>
                    <li>Should be independently verified where appropriate.</li>
                  </ul>
                  <p className="text-base leading-8 text-slate-700">
                    Ascent Insights does not guarantee that AI-generated content will always be complete, accurate, or suitable for your specific circumstances.
                  </p>
                </section>

                <section id="intellectual-property" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">8. Intellectual Property</h2>
                  <p className="text-base leading-8 text-slate-700">
                    Unless otherwise stated, all content on this Platform—including:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
                    <li>Reports</li>
                    <li>Research</li>
                    <li>Methodologies</li>
                    <li>Frameworks</li>
                    <li>Graphics</li>
                    <li>Logos</li>
                    <li>Videos</li>
                    <li>Software</li>
                    <li>AI models</li>
                    <li>Digital tools</li>
                    <li>Training materials</li>
                  </ul>
                  <p className="text-base leading-8 text-slate-700">
                    is the intellectual property of Ascent Insights and is protected by applicable copyright, trademark, and intellectual property laws.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    No content may be copied, reproduced, distributed, modified, or commercially exploited without prior written permission.
                  </p>
                </section>

                <section id="client-content" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">9. Client Content</h2>
                  <p className="text-base leading-8 text-slate-700">
                    You retain ownership of materials you submit to Ascent Insights.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    By submitting information, you grant Ascent Insights the limited right to use such information solely for providing requested services.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    We will not sell client confidential information.
                  </p>
                </section>

                <section id="confidentiality" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">10. Confidentiality</h2>
                  <p className="text-base leading-8 text-slate-700">
                    We recognize that many client engagements involve confidential information.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Unless required by law or expressly authorized by the client, we will take reasonable measures to protect confidential information shared through our Platform or consulting engagements.
                  </p>
                </section>

                <section id="acceptable-use" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">11. Acceptable Use</h2>
                  <p className="text-base leading-8 text-slate-700">You agree not to:</p>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
                    <li>Violate any applicable laws.</li>
                    <li>Attempt unauthorized access to our systems.</li>
                    <li>Upload malicious software.</li>
                    <li>Interfere with Platform operations.</li>
                    <li>Reverse engineer our software.</li>
                    <li>Misrepresent your identity.</li>
                    <li>Use our services for fraudulent or unlawful purposes.</li>
                  </ul>
                  <p className="text-base leading-8 text-slate-700">
                    Violation of these Terms may result in immediate suspension or termination of access.
                  </p>
                </section>

                <section id="third-party-services" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">12. Third-Party Services</h2>
                  <p className="text-base leading-8 text-slate-700">
                    Our Platform may integrate with third-party providers including cloud infrastructure, analytics platforms, communication tools, payment providers, or artificial intelligence services.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    We are not responsible for the content, availability, or privacy practices of third-party services.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Your use of those services is governed by their respective terms.
                  </p>
                </section>

                <section id="availability" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">13. Availability</h2>
                  <p className="text-base leading-8 text-slate-700">
                    We strive to provide reliable access to our Platform.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    However, we do not guarantee uninterrupted availability and reserve the right to:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
                    <li>Modify features</li>
                    <li>Update services</li>
                    <li>Perform maintenance</li>
                    <li>Suspend services</li>
                    <li>Discontinue products</li>
                  </ul>
                  <p className="text-base leading-8 text-slate-700">
                    without prior notice where reasonably necessary.
                  </p>
                </section>

                <section id="limitation-of-liability" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">14. Limitation of Liability</h2>
                  <p className="text-base leading-8 text-slate-700">
                    To the fullest extent permitted by law, Ascent Insights shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from the use of our Platform or services.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Our total liability relating to any claim shall not exceed the amount paid by the client for the specific service giving rise to the claim, unless otherwise required by law.
                  </p>
                </section>

                <section id="indemnification" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">15. Indemnification</h2>
                  <p className="text-base leading-8 text-slate-700">
                    You agree to indemnify and hold harmless Ascent Insights, its employees, consultants, directors, and partners from claims, liabilities, damages, losses, and expenses arising from:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
                    <li>Your use of the Platform.</li>
                    <li>Violation of these Terms.</li>
                    <li>Infringement of third-party rights.</li>
                    <li>Misuse of our services.</li>
                  </ul>
                </section>

                <section id="privacy" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">16. Privacy</h2>
                  <p className="text-base leading-8 text-slate-700">
                    Your use of the Platform is also governed by our Privacy Policy, which explains how personal information is collected, used, stored, and protected.
                  </p>
                </section>

                <section id="changes" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">17. Changes to These Terms</h2>
                  <p className="text-base leading-8 text-slate-700">
                    We may update these Terms periodically to reflect changes in our services, technology, or legal obligations.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Updated Terms become effective upon publication on this Platform.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Continued use of the Platform constitutes acceptance of the revised Terms.
                  </p>
                </section>

                <section id="governing-law" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">18. Governing Law</h2>
                  <p className="text-base leading-8 text-slate-700">
                    These Terms shall be governed by and interpreted in accordance with the laws of the Republic of Kenya.
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Any disputes arising under these Terms shall be subject to the jurisdiction of the competent courts of Kenya unless otherwise agreed in writing.
                  </p>
                </section>

                <section id="termination" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">19. Termination</h2>
                  <p className="text-base leading-8 text-slate-700">
                    We reserve the right to suspend or terminate access to the Platform if:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
                    <li>These Terms are violated.</li>
                    <li>Fraudulent activity is detected.</li>
                    <li>Security risks arise.</li>
                    <li>Required by law.</li>
                  </ul>
                  <p className="text-base leading-8 text-slate-700">
                    Termination does not affect obligations that, by their nature, survive termination.
                  </p>
                </section>

                <section id="contact" className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-950">20. Contact Information</h2>
                  <p className="text-base leading-8 text-slate-700">
                    For questions regarding these Terms, please contact:
                  </p>
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    <strong>Ascent Insights Ltd</strong>
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Email: <a href="mailto:legal@ascentinsights.co.ke" className="text-[#3E7BFF]">legal@ascentinsights.co.ke</a>
                  </p>
                  <p className="text-base leading-8 text-slate-700">
                    Website: <a href="http://www.ascentinsights.co.ke/" className="text-[#3E7BFF]">www.ascentinsights.co.ke</a>
                  </p>
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    <strong>Last Updated:</strong> July 6, 2026
                  </p>
                </section>
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-[28px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_24px_56px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900/70">Jump to</p>
                <nav className="mt-6 space-y-2" aria-label="Terms section links">
                  <a href="#welcome" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Welcome</a>
                  <a href="#about" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">About Ascent Insights</a>
                  <a href="#eligibility" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Eligibility</a>
                  <a href="#services" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Services</a>
                  <a href="#professional-advice" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Professional Advice</a>
                  <a href="#client-engagements" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Client Engagements</a>
                  <a href="#user-accounts" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">User Accounts</a>
                  <a href="#ai-services" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">AI Services</a>
                  <a href="#intellectual-property" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Intellectual Property</a>
                  <a href="#confidentiality" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Confidentiality</a>
                  <a href="#acceptable-use" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Acceptable Use</a>
                  <a href="#third-party-services" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Third-Party Services</a>
                  <a href="#availability" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Availability</a>
                  <a href="#limitation-of-liability" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Limitation of Liability</a>
                  <a href="#indemnification" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Indemnification</a>
                  <a href="#privacy" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Privacy</a>
                  <a href="#changes" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Changes to Terms</a>
                  <a href="#governing-law" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Governing Law</a>
                  <a href="#termination" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Termination</a>
                  <a href="#contact" className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Contact Information</a>
                </nav>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </div>
  );
}
