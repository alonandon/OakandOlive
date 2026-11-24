import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { conditions, serviceLabels } from '@/lib/conditions'

export const metadata: Metadata = buildMetadata({
  title: 'Conditions We Treat in Rochester, NY',
  description:
    'Oak & Olive Chiropractic treats back pain, neck pain, sciatica, headaches, disc herniation, sports injuries, shoulder, hip, knee, and heel pain in Rochester, NY.',
  path: '/conditions',
})

export default function ConditionsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-olive-950 pt-32 pb-20 lg:pt-40 lg:pb-28" aria-labelledby="conditions-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block section-label text-olive-300 mb-5">Rochester, NY</span>
          <h1 id="conditions-hero-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Conditions We Treat
          </h1>
          <p className="font-sans text-lg text-cream-200 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re in acute pain or managing a chronic condition, Dr. Alex Eckert provides expert, personalized care to help you get back to the life you love.
          </p>
        </div>
      </section>

      {/* ── Conditions Grid ── */}
      <section className="py-20 lg:py-28 bg-cream-50 leaf-pattern" aria-labelledby="conditions-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="conditions-list-heading" className="sr-only">List of conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((condition) => (
              <div key={condition.slug} id={condition.slug} className="card p-8 scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-2.5 h-2.5 mt-2 rounded-full bg-olive-500" />
                  <div>
                    <h3 className="font-serif text-xl text-bark mb-2">
                      <Link href={`/conditions/${condition.slug}`} className="hover:text-olive-700 transition-colors">
                        {condition.name}
                      </Link>
                    </h3>
                    <p className="font-sans text-sm text-bark-muted leading-relaxed">{condition.summary}</p>
                    <Link
                      href={`/conditions/${condition.slug}`}
                      className="inline-block mt-3 font-sans text-sm font-semibold text-olive-700 hover:text-olive-900 transition-colors"
                    >
                      Learn about {condition.name.toLowerCase()} treatment &rarr;
                    </Link>
                    {condition.services.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {condition.services.map((serviceId) => (
                          <Link
                            key={serviceId}
                            href={`/services#${serviceId}`}
                            className="inline-block bg-cream-100 hover:bg-cream-200 text-bark-muted hover:text-bark text-xs font-sans px-3 py-1 rounded-full transition-colors"
                          >
                            {serviceLabels[serviceId]}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="conditions-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Get Started</span>
          <h2 id="conditions-cta-heading" className="section-heading mt-3 mb-5">
            Don&apos;t See Your Condition?
          </h2>
          <p className="font-sans text-bark-muted max-w-xl mx-auto leading-relaxed mb-8">
            We treat many more musculoskeletal and neuromusculoskeletal conditions. Schedule a consultation and Dr. Eckert will evaluate your case personally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-base">
              Schedule an Appointment
            </a>
            <Link href="/services" className="btn-secondary px-8 py-4 text-base">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
