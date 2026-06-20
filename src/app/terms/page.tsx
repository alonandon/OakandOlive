import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'Terms of Service for Oak & Olive Chiropractic (Performance Health Chiropractic of Rochester, P.C.) — the rules governing your use of our website.',
  path: '/terms',
})

const EFFECTIVE_DATE = 'June 20, 2026'
const LEGAL_NAME = 'Performance Health Chiropractic of Rochester, P.C.'
const DBA = 'Oak & Olive Chiropractic'
const ADDRESS = '2316 Lyell Ave, Suite 2, Rochester, NY 14606'
const EMAIL = 'dr.alex@oakolivehealth.com'

export default function TermsOfServicePage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Terms of Service', url: `${siteConfig.url}/terms` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-olive-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage-700/20 rounded-full blur-3xl -translate-x-1/4 translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-sm text-olive-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-white" aria-current="page">Terms of Service</li>
            </ol>
          </nav>
          <span className="section-label text-olive-300">Legal</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-3xl leading-tight">
            Terms of Service
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-2xl leading-relaxed">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-bark max-w-none font-sans text-bark-muted leading-relaxed space-y-10">

            {/* Agreement */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">1. Agreement to These Terms</h2>
              <p>
                By accessing or using the website at <strong>oakolivehealth.com</strong> (the
                &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).
                If you do not agree, please do not use the Site.
              </p>
              <p className="mt-3">
                The Site is operated by {LEGAL_NAME}, doing business as {DBA}{' '}
                (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), located at {ADDRESS}.
              </p>
            </div>

            {/* Not Medical Advice */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">2. No Medical Advice</h2>
              <p className="bg-olive-50 border border-olive-100 rounded-xl p-4">
                <strong>The content on this Site is provided for general informational purposes only
                and does not constitute medical advice, diagnosis, or treatment.</strong> Nothing on
                this Site should be used as a substitute for professional medical advice from a
                licensed healthcare provider who knows your individual circumstances. Always seek the
                advice of your physician, chiropractor, or other qualified health professional with
                any questions you may have regarding a medical condition.
              </p>
              <p className="mt-4">
                If you are experiencing a medical emergency, call <strong>911</strong> or go to the
                nearest emergency room immediately. Do not rely on this Site for emergency medical
                information.
              </p>
            </div>

            {/* Permitted Use */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">3. Permitted Use of the Site</h2>
              <p>You may use the Site for lawful purposes only. You agree not to:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>Use the Site in any way that violates applicable federal, state, or local law;</li>
                <li>Transmit any unsolicited or unauthorized advertising or promotional material;</li>
                <li>Attempt to gain unauthorized access to any part of the Site or its related systems;</li>
                <li>Interfere with or disrupt the integrity or performance of the Site;</li>
                <li>Use any automated tool (scraper, bot, crawler) to collect data from the Site without
                  our prior written consent; or</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person
                  or entity.</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">4. Intellectual Property</h2>
              <p>
                All content on the Site — including text, photographs, graphics, logos, and the overall
                design — is the property of {LEGAL_NAME} or its content licensors and is protected by
                applicable copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-3">
                You may view and print pages from the Site for your own personal, non-commercial use.
                You may not reproduce, distribute, modify, create derivative works of, publicly display,
                or otherwise exploit any content from the Site without our prior written permission.
              </p>
            </div>

            {/* Appointment Requests */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">5. Appointment Requests &amp; Contact Forms</h2>
              <p>
                Submitting an inquiry or appointment request through the Site does not guarantee an
                appointment or establish a patient-provider relationship. A relationship is established
                only when we have confirmed your appointment and you have presented for your first visit.
              </p>
              <p className="mt-3">
                Please do not submit sensitive medical or personal health information through our contact
                form. For clinical communications, use the secure patient portal or contact our office
                by phone.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">6. Third-Party Links</h2>
              <p>
                The Site may contain links to third-party websites, including our online booking portal
                and social media profiles. These links are provided for your convenience only. We have
                no control over, and assume no responsibility for, the content, privacy policies, or
                practices of any third-party sites. Accessing third-party sites is at your own risk.
              </p>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">7. Disclaimers</h2>
              <p>
                THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
                WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES
                OR OTHER HARMFUL COMPONENTS.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">8. Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, {LEGAL_NAME.toUpperCase()}, ITS
                OWNERS, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO
                YOUR USE OF, OR INABILITY TO USE, THE SITE OR ITS CONTENT — EVEN IF WE HAVE BEEN
                ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mt-3">
                OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM THESE TERMS OR YOUR USE OF THE
                SITE SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless {LEGAL_NAME}, its owners, officers,
                employees, and agents from and against any claims, liabilities, damages, judgments,
                awards, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising
                out of or relating to your violation of these Terms or your use of the Site.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">10. Governing Law &amp; Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State
                of New York, without regard to its conflict-of-law provisions. Any dispute arising under
                these Terms shall be resolved exclusively in the state or federal courts located in
                Monroe County, New York, and you consent to personal jurisdiction in those courts.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">11. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. When we make changes, we will
                update the effective date above. Your continued use of the Site after any changes
                constitutes your acceptance of the revised Terms. We encourage you to review these
                Terms periodically.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">12. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision
                will be limited or eliminated to the minimum extent necessary, and the remaining
                provisions will continue in full force and effect.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-olive-50 border border-olive-100 rounded-2xl p-8">
              <h2 className="font-serif text-2xl text-bark mb-3">13. Contact Us</h2>
              <p>If you have questions about these Terms, please contact us:</p>
              <address className="not-italic mt-4 space-y-1 text-bark">
                <p><strong>{LEGAL_NAME}</strong></p>
                <p>d/b/a {DBA}</p>
                <p>{ADDRESS}</p>
                <p>
                  <a href={`mailto:${EMAIL}`} className="text-olive-700 hover:text-olive-900 underline">{EMAIL}</a>
                </p>
              </address>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
