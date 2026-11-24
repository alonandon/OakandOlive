import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { conditions, getCondition, serviceLabels } from '@/lib/conditions'
import { getBlogPost } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

const BOOKING_URL = 'https://practice.chirotouch.com/portal/OakOliveChiropractic'

export async function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const condition = getCondition(params.slug)
  if (!condition) return {}
  return buildMetadata({
    title: condition.metaTitle,
    description: condition.metaDescription,
    path: `/conditions/${condition.slug}`,
  })
}

function Chevron() {
  return (
    <li aria-hidden="true">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </li>
  )
}

export default function ConditionPage({ params }: Props) {
  const condition = getCondition(params.slug)
  if (!condition) notFound()

  const pageUrl = `${siteConfig.url}/conditions/${condition.slug}`
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Conditions', url: `${siteConfig.url}/conditions` },
    { name: condition.name, url: pageUrl },
  ])
  const faqMarkup = faqSchema(condition.faqs)

  const relatedPosts = condition.relatedPosts
    .map((slug) => getBlogPost(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  const otherConditions = conditions.filter((c) => c.slug !== condition.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMarkup) }} />

      {/* Hero */}
      <section className="bg-olive-950 pt-32 pb-16 lg:pt-40 lg:pb-20" aria-labelledby="condition-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-olive-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <Chevron />
              <li><Link href="/conditions" className="hover:text-white transition-colors">Conditions</Link></li>
              <Chevron />
              <li className="text-white" aria-current="page">{condition.name}</li>
            </ol>
          </nav>
          <h1 id="condition-heading" className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6">
            {condition.heading}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-white px-8 py-4 text-base justify-center">
              Book an Appointment
            </a>
            <a href="tel:+15854295100" className="btn-secondary px-8 py-4 text-base justify-center bg-transparent text-white border-white/40 hover:bg-white/10">
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <article className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
            <div className="prose-wellness">
              {condition.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}

              <h2>Common symptoms</h2>
              <ul>
                {condition.symptoms.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              <h2>What causes it</h2>
              <ul>
                {condition.causes.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>

              <h2>How we treat {condition.name.toLowerCase()} at Oak &amp; Olive</h2>
              {condition.approach.map((p) => (
                <p key={p}>{p}</p>
              ))}

              <h3>Treatments that may be part of your plan</h3>
              <ul>
                {condition.services.map((id) => (
                  <li key={id}>
                    <Link href={`/services#${id}`}>{serviceLabels[id] ?? id}</Link>
                  </li>
                ))}
              </ul>

              <h2>When to seek urgent care instead</h2>
              <p>Call your doctor or go to the emergency room if you have:</p>
              <ul>
                {condition.redFlags.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>

              <h2>Frequently asked questions</h2>
              {condition.faqs.map((f) => (
                <div key={f.question}>
                  <h3>{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}

              {relatedPosts.length > 0 && (
                <>
                  <h2>Further reading</h2>
                  <ul>
                    {relatedPosts.map((post) => (
                      <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h2>Visit our Rochester office</h2>
              <p>
                Oak &amp; Olive Chiropractic is at {siteConfig.address}, convenient to Greece, Gates, Chili, and the
                west side of Rochester. New patients are welcome, and no referral is needed.{' '}
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book online</a> or call{' '}
                <a href="tel:+15854295100">{siteConfig.phone}</a>.
              </p>
              <p>
                <em>
                  This page is for general education and isn&apos;t a substitute for an individual exam or medical
                  advice.
                </em>
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28" aria-label="Sidebar">
              <div className="bg-olive-700 rounded-2xl p-6 text-center">
                <p className="font-serif text-lg text-white mb-2">Ready to feel better?</p>
                <p className="font-sans text-sm text-olive-100 mb-5 leading-relaxed">
                  Schedule a visit with Dr. Alex Eckert.
                </p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-white w-full justify-center text-sm px-4 py-3">
                  Book an Appointment
                </a>
                <p className="font-sans text-xs text-olive-200 mt-3">{siteConfig.phone}</p>
              </div>

              <div className="bg-cream-50 border border-cream-200 rounded-2xl p-6">
                <h2 className="font-serif text-lg text-bark mb-4">Other conditions we treat</h2>
                <ul className="space-y-2">
                  {otherConditions.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/conditions/${c.slug}`}
                        className="font-sans text-sm text-bark-muted hover:text-olive-700 transition-colors"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
