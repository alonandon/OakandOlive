import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Oak & Olive Chiropractic (Performance Health Chiropractic of Rochester, P.C.) — how we collect, use, and protect your information.',
  path: '/privacy',
})

const EFFECTIVE_DATE = 'June 20, 2026'
const LEGAL_NAME = 'Performance Health Chiropractic of Rochester, P.C.'
const DBA = 'Oak & Olive Chiropractic'
const ADDRESS = '2316 Lyell Ave, Suite 2, Rochester, NY 14606'
const EMAIL = 'dr.alex@oakolivehealth.com'

export default function PrivacyPolicyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Privacy Policy', url: `${siteConfig.url}/privacy` },
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
              <li className="text-white" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
          <span className="section-label text-olive-300">Legal</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-3xl leading-tight">
            Privacy Policy
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

            {/* Who We Are */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">1. Who We Are</h2>
              <p>
                This Privacy Policy applies to {LEGAL_NAME}, doing business as {DBA}{' '}
                (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), located at {ADDRESS}.
                We operate the website at <strong>oakolivehealth.com</strong> (the &ldquo;Site&rdquo;).
              </p>
              <p className="mt-3">
                Questions about this Policy may be directed to us at{' '}
                <a href={`mailto:${EMAIL}`} className="text-olive-700 hover:text-olive-900 underline">{EMAIL}</a>.
              </p>
            </div>

            {/* What We Collect */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">2. Information We Collect</h2>
              <p>We collect information in the following ways:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>
                  <strong>Information you provide voluntarily.</strong> When you fill out our contact form,
                  you may provide your name, email address, phone number, and the content of your message.
                </li>
                <li>
                  <strong>Automatically collected information.</strong> When you visit the Site, our web
                  server and any analytics tools we use may automatically collect your IP address, browser
                  type, referring URL, pages visited, and the date and time of your visit.
                </li>
                <li>
                  <strong>Cookies and similar technologies.</strong> We may use cookies and similar tracking
                  technologies to enhance your experience and understand how the Site is used. See
                  Section&nbsp;6 for more detail.
                </li>
              </ul>
              <p className="mt-4 text-sm bg-olive-50 border border-olive-100 rounded-xl p-4">
                <strong>Important Notice:</strong> This website is not a patient portal and is not used
                to collect, transmit, or store protected health information (PHI) as defined by HIPAA.
                Do not submit sensitive medical information through our contact form. Clinical records
                and health information are handled separately through our practice management systems
                under our Notice of Privacy Practices, which you receive upon becoming a patient.
              </p>
            </div>

            {/* How We Use It */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>Respond to your inquiries and schedule appointments;</li>
                <li>Operate, maintain, and improve the Site;</li>
                <li>Understand how visitors use the Site so we can make it better;</li>
                <li>Comply with applicable legal obligations; and</li>
                <li>Communicate with you about our services when you have requested it.</li>
              </ul>
              <p className="mt-3">
                We do <strong>not</strong> sell, rent, or trade your personal information to third parties
                for their own marketing purposes.
              </p>
            </div>

            {/* Sharing */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">4. How We Share Your Information</h2>
              <p>We may share your information in limited circumstances:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>
                  <strong>Service providers.</strong> We may share data with third-party vendors who help
                  us operate the Site (e.g., web hosting, email delivery, analytics). These vendors are
                  contractually obligated to protect your data and may not use it for their own purposes.
                </li>
                <li>
                  <strong>Legal requirements.</strong> We may disclose information if required by law,
                  court order, or government authority, or to protect the rights, property, or safety of
                  our practice, patients, or the public.
                </li>
                <li>
                  <strong>Business transfers.</strong> In the event of a merger, acquisition, or sale of
                  practice assets, your information may be transferred as part of that transaction.
                </li>
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">5. Data Retention</h2>
              <p>
                We retain contact form submissions and related correspondence for as long as necessary to
                respond to your inquiry and for a reasonable period thereafter to address any follow-up
                questions. Website analytics data is retained in accordance with our analytics
                provider&apos;s data retention settings. We will delete or anonymize your information
                when it is no longer needed for the purposes described in this Policy.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">6. Cookies &amp; Analytics</h2>
              <p>
                We may use cookies — small text files stored on your device — to understand how visitors
                use our Site. These may include:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>
                  <strong>Strictly necessary cookies</strong> required for the Site to function (e.g.,
                  form security tokens).
                </li>
                <li>
                  <strong>Analytics cookies</strong> (e.g., Google Analytics) that help us understand
                  aggregate traffic patterns. These cookies collect anonymized data and do not identify
                  you personally.
                </li>
              </ul>
              <p className="mt-3">
                You may disable cookies through your browser settings; however, doing so may affect the
                functionality of certain features. To opt out of Google Analytics tracking, you may use
                the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive-700 hover:text-olive-900 underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">7. Your Rights &amp; Choices</h2>
              <p>You have the right to:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>Request access to personal information we hold about you;</li>
                <li>Request correction of inaccurate information;</li>
                <li>Request deletion of your personal information, subject to applicable legal requirements;</li>
                <li>Opt out of any marketing communications at any time by contacting us.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{' '}
                <a href={`mailto:${EMAIL}`} className="text-olive-700 hover:text-olive-900 underline">{EMAIL}</a>.
                We will respond within a reasonable timeframe.
              </p>
              <p className="mt-3">
                <strong>California residents:</strong> Under the California Consumer Privacy Act (CCPA),
                you have additional rights, including the right to know what personal information we
                collect and the right to request deletion. We do not sell personal information. To
                exercise your CCPA rights, contact us using the information in Section&nbsp;1.
              </p>
            </div>

            {/* Children */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">8. Children&apos;s Privacy</h2>
              <p>
                The Site is not directed to children under 13. We do not knowingly collect personal
                information from children under 13. If you believe we have inadvertently collected
                such information, please contact us and we will delete it promptly.
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">9. Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect
                the information we collect against unauthorized access, disclosure, alteration, or
                destruction. However, no method of transmission over the internet or electronic storage
                is completely secure. We cannot guarantee absolute security.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">10. Third-Party Links</h2>
              <p>
                The Site may contain links to third-party websites (e.g., our patient booking portal,
                social media profiles). We are not responsible for the privacy practices of those sites
                and encourage you to review their privacy policies before providing any personal
                information.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="font-serif text-2xl text-bark mb-4">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the
                effective date at the top of this page. We encourage you to review this Policy
                periodically. Continued use of the Site after changes are posted constitutes your
                acceptance of the updated Policy.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-olive-50 border border-olive-100 rounded-2xl p-8">
              <h2 className="font-serif text-2xl text-bark mb-3">12. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
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
