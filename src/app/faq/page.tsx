import type { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'FAQ — Frequently Asked Questions',
  description: 'Everything you need to know about Oak & Olive Chiropractic — our treatments, insurance, appointments, and what to expect as a new patient in Rochester, NY.',
  path: '/faq',
})

const faqsForSchema = [
  {
    question: 'What is Oak & Olive Chiropractic, and what makes it different?',
    answer: "Oak & Olive Chiropractic is a Rochester, NY chiropractic practice founded and operated by Dr. Alex Eckert, DC. Unlike high-volume clinics, Oak & Olive takes a one-on-one approach — every visit is with Dr. Eckert, every treatment plan is built around your specific presentation, and care doesn't stop at the adjustment. We combine spinal manipulation with advanced soft-tissue therapies, rehabilitation, and exercise programming to address the root cause of your pain, not just the symptom.",
  },
  {
    question: 'What conditions do you treat?',
    answer: "We treat a wide range of musculoskeletal conditions, including low back pain, neck pain, sciatica, disc herniations, headaches, shoulder pain, hip pain, knee pain, sports injuries, auto accident injuries, and workplace injuries. Whether you're dealing with a new acute injury or chronic pain you've been managing for years, we'll build a plan to get you moving better. Not sure if we can help? Call us — we'll give you a straight answer.",
  },
  {
    question: 'What treatments and therapies do you offer?',
    answer: "Oak & Olive offers a comprehensive suite of chiropractic and adjunct therapies, including: Chiropractic Manipulative Therapy — expert spinal and extremity adjustments; Flexion-Distraction Therapy — gentle spinal decompression for disc and nerve conditions; Shockwave Therapy — non-invasive treatment for tendinopathies and chronic soft-tissue injuries; Blood Flow Restriction Training (BFRT) — advanced rehab tool for building strength with minimal load; Cupping Therapy — myofascial decompression for muscle tension and mobility; IASTM (Instrument-Assisted Soft-Tissue Mobilization) — targeted treatment for scar tissue and fascial restriction; Nerve Flossing — neural mobilization techniques for radiating pain and nerve tension; Exercise Programming — individualized rehab and performance programming; Nutrition for a Lifetime — practical nutritional guidance to support recovery and long-term health.",
  },
  {
    question: 'Do you accept insurance?',
    answer: "Yes. Oak & Olive is in-network with several major insurance plans, including BlueCross BlueShield, Aetna, MVP Medicare, workers' compensation, and no-fault/auto insurance (PIP). We recommend calling our office before your first visit so we can verify your specific benefits and explain any out-of-pocket costs upfront — no surprises.",
  },
  {
    question: 'What should I expect at my first appointment?',
    answer: "Your first visit typically runs 45–60 minutes. Dr. Eckert will conduct a thorough intake covering your health history, current complaints, and goals. From there, he'll perform a focused orthopedic and neurological examination and, if clinically indicated, discuss any imaging needs. You'll leave with a clear diagnosis, a proposed treatment plan, and — in most cases — your first treatment on that same visit. You don't need a referral to be seen.",
  },
  {
    question: 'How long are follow-up appointments?',
    answer: "Follow-up visits are typically 15–30 minutes depending on the complexity of your care and which therapies are included. We don't rush patients through — if a visit runs long because it needs to, it runs long.",
  },
  {
    question: 'Do I need a referral to see a chiropractor?',
    answer: "No. Chiropractors are primary care providers for musculoskeletal conditions in New York State. You can schedule directly without a referral from your primary care physician. If your insurance requires a referral for coverage purposes, our team can help you navigate that before your visit.",
  },
  {
    question: 'Where are you located, and what are your hours?',
    answer: "We're located at 2316 Lyell Ave, Suite 2, Rochester, NY 14606 — convenient to Greece, Gates, Chili, and the west side of Rochester. Hours: Monday: 12:00 PM – 5:00 PM; Tuesday: 8:00 AM – 6:00 PM; Wednesday: 8:00 AM – 6:00 PM; Thursday: 8:00 AM – 5:00 PM; Friday: 8:00 AM – 5:00 PM.",
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can book online through our patient portal at any time, or call us at (585) 429-5100 during office hours. New patients are welcome — no referral needed.',
  },
  {
    question: 'Is chiropractic care safe?',
    answer: "Yes. Chiropractic care is one of the safest non-invasive treatments available for musculoskeletal conditions. Serious adverse events are extremely rare. Dr. Eckert conducts a thorough examination before any treatment to ensure chiropractic is appropriate for you, and will always discuss your options so you can make an informed decision about your care.",
  },
  {
    question: 'Do you treat auto accident and workers’ compensation injuries?',
    answer: "Yes. Oak & Olive accepts both no-fault (PIP) auto insurance and workers' compensation cases. If you've been injured in a car accident or on the job, chiropractic care is often a covered benefit — and getting evaluated promptly matters for both your recovery and your claim. Contact us and we'll walk you through the process.",
  },
  {
    question: 'Can you work alongside my other healthcare providers?',
    answer: "Absolutely. We regularly co-manage patients with primary care physicians, orthopedic surgeons, physical therapists, and pain management specialists. If imaging, specialist referral, or co-management is appropriate for your case, we'll coordinate that directly. Good care doesn't happen in a silo.",
  },
]

const faqs = [
  {
    question: 'What is Oak & Olive Chiropractic, and what makes it different?',
    answer: (
      <p>Oak &amp; Olive Chiropractic is a Rochester, NY chiropractic practice founded and operated by Dr. Alex Eckert, DC. Unlike high-volume clinics, Oak &amp; Olive takes a one-on-one approach — every visit is with Dr. Eckert, every treatment plan is built around your specific presentation, and care doesn&apos;t stop at the adjustment. We combine spinal manipulation with advanced soft-tissue therapies, rehabilitation, and exercise programming to address the root cause of your pain, not just the symptom.</p>
    ),
  },
  {
    question: 'What conditions do you treat?',
    answer: (
      <p>We treat a wide range of musculoskeletal conditions, including low back pain, neck pain, sciatica, disc herniations, headaches, shoulder pain, hip pain, knee pain, sports injuries, auto accident injuries, and workplace injuries. Whether you&apos;re dealing with a new acute injury or chronic pain you&apos;ve been managing for years, we&apos;ll build a plan to get you moving better. Not sure if we can help? Call us — we&apos;ll give you a straight answer.</p>
    ),
  },
  {
    question: 'What treatments and therapies do you offer?',
    answer: (
      <>
        <p className="mb-3">Oak &amp; Olive offers a comprehensive suite of chiropractic and adjunct therapies, including:</p>
        <ul className="space-y-1.5">
          <li><span className="font-medium text-bark">Chiropractic Manipulative Therapy</span> — expert spinal and extremity adjustments</li>
          <li><span className="font-medium text-bark">Flexion-Distraction Therapy</span> — gentle spinal decompression for disc and nerve conditions</li>
          <li><span className="font-medium text-bark">Shockwave Therapy</span> — non-invasive treatment for tendinopathies and chronic soft-tissue injuries</li>
          <li><span className="font-medium text-bark">Blood Flow Restriction Training (BFRT)</span> — advanced rehab tool for building strength with minimal load</li>
          <li><span className="font-medium text-bark">Cupping Therapy</span> — myofascial decompression for muscle tension and mobility</li>
          <li><span className="font-medium text-bark">IASTM (Instrument-Assisted Soft-Tissue Mobilization)</span> — targeted treatment for scar tissue and fascial restriction</li>
          <li><span className="font-medium text-bark">Nerve Flossing</span> — neural mobilization techniques for radiating pain and nerve tension</li>
          <li><span className="font-medium text-bark">Exercise Programming</span> — individualized rehab and performance programming</li>
          <li><span className="font-medium text-bark">Nutrition for a Lifetime</span> — practical nutritional guidance to support recovery and long-term health</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Do you accept insurance?',
    answer: (
      <p>Yes. Oak &amp; Olive is in-network with several major insurance plans, including BlueCross BlueShield, Aetna, MVP Medicare, workers&apos; compensation, and no-fault/auto insurance (PIP). We recommend calling our office before your first visit so we can verify your specific benefits and explain any out-of-pocket costs upfront — no surprises.</p>
    ),
  },
  {
    question: 'What should I expect at my first appointment?',
    answer: (
      <p>Your first visit typically runs 45–60 minutes. Dr. Eckert will conduct a thorough intake covering your health history, current complaints, and goals. From there, he&apos;ll perform a focused orthopedic and neurological examination and, if clinically indicated, discuss any imaging needs. You&apos;ll leave with a clear diagnosis, a proposed treatment plan, and — in most cases — your first treatment on that same visit. You don&apos;t need a referral to be seen.</p>
    ),
  },
  {
    question: 'How long are follow-up appointments?',
    answer: (
      <p>Follow-up visits are typically 15–30 minutes depending on the complexity of your care and which therapies are included. We don&apos;t rush patients through — if a visit runs long because it needs to, it runs long.</p>
    ),
  },
  {
    question: 'Do I need a referral to see a chiropractor?',
    answer: (
      <p>No. Chiropractors are primary care providers for musculoskeletal conditions in New York State. You can schedule directly without a referral from your primary care physician. If your insurance requires a referral for coverage purposes, our team can help you navigate that before your visit.</p>
    ),
  },
  {
    question: 'Where are you located, and what are your hours?',
    answer: (
      <>
        <p className="mb-3">We&apos;re located at 2316 Lyell Ave, Suite 2, Rochester, NY 14606 — convenient to Greece, Gates, Chili, and the west side of Rochester.</p>
        <p className="font-medium text-bark mb-2">Hours:</p>
        <ul className="space-y-1">
          <li>Monday: 12:00 PM – 5:00 PM</li>
          <li>Tuesday: 8:00 AM – 6:00 PM</li>
          <li>Wednesday: 8:00 AM – 6:00 PM</li>
          <li>Thursday: 8:00 AM – 5:00 PM</li>
          <li>Friday: 8:00 AM – 5:00 PM</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How do I schedule an appointment?',
    answer: (
      <p>You can book online through our patient portal at any time, or call us at (585) 429-5100 during office hours. New patients are welcome — no referral needed.</p>
    ),
  },
  {
    question: 'Is chiropractic care safe?',
    answer: (
      <p>Yes. Chiropractic care is one of the safest non-invasive treatments available for musculoskeletal conditions. Serious adverse events are extremely rare. Dr. Eckert conducts a thorough examination before any treatment to ensure chiropractic is appropriate for you, and will always discuss your options so you can make an informed decision about your care.</p>
    ),
  },
  {
    question: 'Do you treat auto accident and workers’ compensation injuries?',
    answer: (
      <p>Yes. Oak &amp; Olive accepts both no-fault (PIP) auto insurance and workers&apos; compensation cases. If you&apos;ve been injured in a car accident or on the job, chiropractic care is often a covered benefit — and getting evaluated promptly matters for both your recovery and your claim. Contact us and we&apos;ll walk you through the process.</p>
    ),
  },
  {
    question: 'Can you work alongside my other healthcare providers?',
    answer: (
      <p>Absolutely. We regularly co-manage patients with primary care physicians, orthopedic surgeons, physical therapists, and pain management specialists. If imaging, specialist referral, or co-management is appropriate for your case, we&apos;ll coordinate that directly. Good care doesn&apos;t happen in a silo.</p>
    ),
  },
]

export default function FaqPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'FAQ', url: `${siteConfig.url}/faq` },
  ])
  const faqMarkup = faqSchema(faqsForSchema)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMarkup) }} />

      {/* Hero */}
      <section className="bg-olive-950 pt-32 pb-20 relative overflow-hidden" aria-labelledby="faq-hero-heading">
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
              <li className="text-white" aria-current="page">FAQ</li>
            </ol>
          </nav>
          <span className="section-label text-olive-300">Frequently Asked Questions</span>
          <h1 id="faq-hero-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-3xl leading-tight">
            Your Questions, Answered
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-2xl leading-relaxed">
            Everything you need to know about Oak &amp; Olive Chiropractic — our treatments, insurance, appointments, and what to expect as a new patient in Rochester, NY.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="faq-list-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-list-heading" className="sr-only">Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />

          {/* Still have questions */}
          <div className="mt-14 bg-olive-50 border border-olive-100 rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl text-bark mb-3">Still Have Questions?</h2>
            <p className="font-sans text-bark-muted text-sm leading-relaxed mb-6">
              We&apos;re happy to chat. Reach out to our Rochester team and we&apos;ll get back to you within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary px-7 py-3.5">
                Contact Us
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="btn-secondary px-7 py-3.5">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
