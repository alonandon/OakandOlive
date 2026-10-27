import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Insurance We Accept',
  description:
    "Oak & Olive Chiropractic in Rochester, NY is in-network with BlueCross BlueShield, Aetna, MVP, and Medicare, and accepts no-fault auto and workers' compensation cases. Call to verify your benefits.",
  path: '/insurance',
})

const healthPlans = ['BlueCross BlueShield', 'Aetna', 'MVP Health Care']

const injuryCoverage = [
  {
    name: 'No-Fault / Auto Insurance (PIP)',
    description:
      "Hurt in a car accident? New York no-fault coverage typically pays for chiropractic care regardless of who was at fault. Bring your claim number and the insurance carrier's information to your first visit and we'll handle the billing.",
    link: { href: '/blog/signs-you-should-see-a-chiropractor-rochester', label: 'When to see a chiropractor after an injury' },
  },
  {
    name: "Workers' Compensation",
    description:
      "Injured on the job? Chiropractic care is a covered benefit under New York workers' compensation. Bring your WCB case number and your employer's carrier information and we'll coordinate with the board and your carrier.",
    link: { href: '/blog/desk-job-spine-health-rochester', label: 'Protecting your spine at work' },
  },
]

const steps = [
  {
    title: 'Call or book online',
    body: 'Let us know your insurance when you schedule. Have your member ID card handy.',
  },
  {
    title: 'We verify your benefits',
    body: 'Our team checks your coverage before your first visit, including copays, deductibles, and visit limits.',
  },
  {
    title: 'No surprises',
    body: "We'll explain any out-of-pocket costs upfront, so you know exactly what to expect before treatment starts.",
  },
]

const insuranceFaqs = [
  {
    question: 'Do I need a referral to use my insurance for chiropractic care?',
    answer:
      'Usually not. Chiropractors are primary care providers for musculoskeletal conditions in New York State, so you can schedule directly. Some plans require a referral for coverage, and our team will help you sort that out before your visit.',
  },
  {
    question: "What if my insurance isn't listed?",
    answer:
      "Call us at (585) 429-5100. Plans change often, and we can check your specific coverage and talk through your options before you book.",
  },
  {
    question: 'What should I bring to my first visit?',
    answer:
      "Bring your insurance card and a photo ID. For an auto accident or work injury, also bring your claim or case number and the carrier's contact information.",
  },
]

export default function InsurancePage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Insurance', url: `${siteConfig.url}/insurance` },
  ])
  const faqMarkup = faqSchema(insuranceFaqs)
  const tel = `tel:${siteConfig.phone.replace(/\D/g, '')}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMarkup) }} />

      {/* Hero */}
      <section className="bg-olive-950 pt-32 pb-20 relative overflow-hidden" aria-labelledby="insurance-hero-heading">
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
              <li className="text-white" aria-current="page">Insurance</li>
            </ol>
          </nav>
          <span className="section-label text-olive-300">Insurance &amp; Billing</span>
          <h1 id="insurance-hero-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-3xl leading-tight">
            Insurance We Accept
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-2xl leading-relaxed">
            Oak &amp; Olive Chiropractic works with major health plans, auto insurance, and workers&apos; compensation in Rochester, NY. We verify your benefits before your first visit so there are no surprises.
          </p>
        </div>
      </section>

      {/* In-network health plans */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="plans-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Health Insurance</span>
            <h2 id="plans-heading" className="section-heading mt-3 mb-4">In-Network Plans</h2>
            <p className="font-sans text-bark-muted max-w-2xl mx-auto leading-relaxed">
              We are in-network with the following plans. Coverage varies by policy, so we always confirm your specific benefits before treatment.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {healthPlans.map((plan) => (
              <li key={plan} className="bg-olive-50 border border-olive-100 rounded-2xl p-7 text-center">
                <svg className="w-8 h-8 mx-auto mb-4 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <h3 className="font-serif text-xl text-bark">{plan}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Medicare */}
      <section className="py-20 lg:py-28 bg-cream-50" aria-labelledby="medicare-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Medicare</span>
          <h2 id="medicare-heading" className="section-heading mt-3 mb-5">We Accept Medicare</h2>
          <p className="font-sans text-bark-muted leading-relaxed mb-4">
            Oak &amp; Olive accepts Medicare. Medicare covers chiropractic adjustments of the spine when they are medically necessary to treat a specific problem, such as a misaligned joint causing pain or limited movement.
          </p>
          <p className="font-sans text-bark-muted leading-relaxed">
            Medicare does not cover every service we offer, such as exams, X-rays, soft-tissue therapies, or ongoing maintenance care. We&apos;ll go over exactly what is covered and any out-of-pocket costs with you before treatment begins.
          </p>
        </div>
      </section>

      {/* Auto & workers' comp */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="injury-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Injury Claims</span>
            <h2 id="injury-heading" className="section-heading mt-3 mb-4">Auto Accidents &amp; Work Injuries</h2>
            <p className="font-sans text-bark-muted max-w-2xl mx-auto leading-relaxed">
              Getting evaluated promptly after an injury matters for both your recovery and your claim.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {injuryCoverage.map((item) => (
              <div key={item.name} className="bg-cream-50 border border-cream-200 rounded-2xl p-8">
                <h3 className="font-serif text-2xl text-bark mb-3">{item.name}</h3>
                <p className="font-sans text-bark-muted text-sm leading-relaxed mb-5">{item.description}</p>
                <Link href={item.link.href} className="font-sans text-sm font-medium text-olive-700 hover:text-olive-900 transition-colors">
                  {item.link.label} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-cream-50" aria-labelledby="verify-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">How It Works</span>
            <h2 id="verify-heading" className="section-heading mt-3">Verifying Your Benefits</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-olive-950 text-white font-serif text-xl mb-4">
                  {i + 1}
                </span>
                <h3 className="font-serif text-xl text-bark mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-bark-muted leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Insurance FAQs */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="insurance-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="insurance-faq-heading" className="section-heading text-center mb-10">Common Insurance Questions</h2>
          <dl className="space-y-6">
            {insuranceFaqs.map((faq) => (
              <div key={faq.question} className="bg-cream-50 border border-cream-200 rounded-2xl p-7">
                <dt className="font-serif text-lg text-bark mb-2">{faq.question}</dt>
                <dd className="font-sans text-sm text-bark-muted leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="font-sans text-sm text-bark-muted text-center mt-8">
            More questions? See our <Link href="/faq" className="text-olive-700 hover:text-olive-900 underline">full FAQ</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-cream-50" aria-labelledby="insurance-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Get Started</span>
          <h2 id="insurance-cta-heading" className="section-heading mt-3 mb-5">
            Not Sure If You&apos;re Covered?
          </h2>
          <p className="font-sans text-bark-muted max-w-xl mx-auto leading-relaxed mb-8">
            Give us a call and we&apos;ll check your benefits for you. New patients are welcome, and no referral is needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={tel} className="btn-primary px-8 py-4 text-base">
              Call {siteConfig.phone}
            </a>
            <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4 text-base">
              Schedule an Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
