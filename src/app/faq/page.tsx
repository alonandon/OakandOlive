import type { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'FAQ — Frequently Asked Questions',
  description: 'Answers to the most common questions about Oak & Olive Health & Wellness in Rochester, NY — our services, insurance, appointments, and how to get started.',
  path: '/faq',
})

const faqs = [
  {
    question: 'What services does Oak & Olive Health & Wellness offer?',
    answer: 'We offer six core services at our Rochester, NY location: Nutrition Counseling with Registered Dietitian-Nutritionists, Wellness Coaching with Board-Certified Health & Wellness Coaches, Yoga & Movement classes for all levels, Massage Therapy (Swedish, deep tissue, therapeutic), Stress Management programs, and Corporate Wellness programs for Rochester-area businesses. Many services are also available virtually.',
  },
  {
    question: 'Where are you located in Rochester, NY?',
    answer: 'Our wellness center is located at 500 East Avenue, Rochester, NY 14604. We serve clients from across the Greater Rochester area including Pittsford, Brighton, Webster, Irondequoit, Penfield, Fairport, Greece, and beyond. We also offer virtual appointments for clients throughout New York State.',
  },
  {
    question: 'Do you accept health insurance?',
    answer: 'Some of our services — particularly nutrition counseling with our Registered Dietitian-Nutritionists — may be covered by health insurance, especially if you have a documented medical condition such as diabetes, obesity, or heart disease. We recommend contacting your insurance provider to verify your benefits. Our team can help you navigate the process. Wellness coaching, yoga, massage therapy, and stress management are typically paid out-of-pocket, though some HSA and FSA accounts may cover certain services.',
  },
  {
    question: 'How do I get started?',
    answer: "The easiest way to get started is to book a free 20-minute discovery consultation through our website or by calling us at (585) 555-0192. During this call, one of our wellness professionals will learn about your goals and recommend the service or services that best fit your needs. There's no commitment required — it's simply a conversation to help us understand how we can best support you.",
  },
  {
    question: 'Do you offer virtual appointments?',
    answer: 'Yes! Nutrition counseling, wellness coaching, and stress management sessions are all available virtually via secure video call. This makes our services accessible to clients throughout the Greater Rochester area and across New York State who prefer the convenience of remote care. In-person services like yoga classes and massage therapy take place at our Rochester studio.',
  },
  {
    question: 'What makes Oak & Olive different from other wellness centers in Rochester?',
    answer: "A few things set us apart. First, we offer a truly integrated team — rather than seeing separate practitioners in separate locations, all of our specialists work together under one roof and collaborate on your care. Second, we take a whole-person approach: we don't just focus on one aspect of your health, but help you understand how nutrition, movement, stress, sleep, and mindset all interconnect. Third, we are deeply rooted in the Rochester community — we've been here for over 12 years and are genuinely invested in the health of our city.",
  },
  {
    question: 'How long are sessions?',
    answer: "Session lengths vary by service. Initial nutrition counseling appointments are typically 60 minutes; follow-ups are 45 minutes. Wellness coaching and stress management sessions run 60 minutes. Yoga classes are 60–90 minutes. Massage therapy sessions are available in 60, 75, or 90-minute increments. Corporate wellness sessions are customized based on your team's needs.",
  },
  {
    question: 'Do you offer packages or membership options?',
    answer: 'Yes! We offer multi-session packages for nutrition counseling, wellness coaching, and massage therapy that provide savings versus single-session pricing. We are also developing a wellness membership program for clients who want ongoing, multi-service access. Contact us for current package pricing and availability.',
  },
  {
    question: "Is Oak & Olive right for me if I'm just starting my wellness journey?",
    answer: "Absolutely — beginners are exactly who we're here for. Whether you've never worked with a wellness professional before or you're returning to health after a difficult period, we meet you exactly where you are. Our team is warm, non-judgmental, and deeply experienced in helping people take their first steps. There is no 'wrong' starting point.",
  },
  {
    question: 'Do you work with corporate clients in Rochester?',
    answer: "Yes! Our corporate wellness division works with businesses throughout the Rochester area to design customized employee wellness programs. We offer on-site and virtual lunch-and-learns, team yoga and movement sessions, stress management workshops, nutritional cooking demonstrations, and more. Contact us to discuss a custom program for your Rochester business.",
  },
]

export default function FaqPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'FAQ', url: `${siteConfig.url}/faq` },
  ])
  const faqMarkup = faqSchema(faqs)

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
            Everything you need to know about Oak &amp; Olive Health &amp; Wellness — our services, our team, and how to get started in Rochester, NY.
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
