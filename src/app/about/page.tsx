import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description: 'Meet Dr. Alex Eckert and the Oak & Olive Chiropractic team — Rochester NY\'s trusted chiropractic care. Learn our story, mission, and values that guide everything we do.',
  path: '/about',
})

const values = [
  {
    title: 'Whole-Person Care',
    description: 'We see you as a complete human being — not just a diagnosis or a set of symptoms. Our approach addresses body, mind, and life circumstances together.',
  },
  {
    title: 'Evidence-Based Practice',
    description: 'Every recommendation we make is grounded in current science. We stay on top of the latest research so you don\'t have to sort through conflicting advice alone.',
  },
  {
    title: 'Community Rooted',
    description: 'We are a Rochester business, through and through. We invest in our community, partner with local organizations, and take pride in the health of our city.',
  },
  {
    title: 'Patient First, Always',
    description: 'We treat every patient the way we\'d treat our own family — with genuine attention, honest guidance, and care that never cuts corners.',
  },
  {
    title: 'Always Learning, Always Growing',
    description: 'Medicine evolves, and so do we. We\'re committed to staying at the forefront of chiropractic and rehabilitation science — because our patients deserve a provider who never stops improving.',
  },
]

export default function AboutPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'About', url: `${siteConfig.url}/about` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-olive-950 pt-32 pb-20 relative overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-olive-700/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-sm text-olive-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg></li>
              <li className="text-white" aria-current="page">About</li>
            </ol>
          </nav>
          <span className="section-label text-olive-300">Our Story</span>
          <h1 id="about-hero-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-3xl leading-tight">
            Healthcare that Cares
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-2xl leading-relaxed">
            Born in Rochester, grown by the community — Oak &amp; Olive is more than a chiropractic clinic. We&apos;re a place where we become healthier versions of ourselves, guided by experts who genuinely care.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-16">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              <Image
                src="/doctor.jpg"
                alt="Dr. Alex Eckert, D.C. — founder of Oak & Olive Chiropractic"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <span className="section-label">How We Started</span>
              <h2 id="story-heading" className="section-heading mt-3 mb-6">
                A Rochester Practice Built with Purpose
              </h2>
              <div className="space-y-4 font-sans text-bark-muted leading-relaxed">
                <p>
                  Oak &amp; Olive Chiropractic was founded by Dr. Alex Eckert, D.C. in 2021 — originally under the name Performance Health Clinic of Rochester — with a straightforward belief: that every patient deserves the same standard of care you&apos;d want for your own family.
                </p>
                <p>
                  Dr. Eckert earned his Bachelor of Science in Exercise Science from the University at Buffalo before graduating summa cum laude with his Doctorate in Chiropractic from the University of Bridgeport. After beginning his career in New Jersey, he returned home to Rochester with a clear purpose: to bring exceptional, patient-first chiropractic care to the community that raised him.
                </p>
                <p>
                  The name Oak &amp; Olive isn&apos;t a marketing decision. Oak and Olive are Dr. Eckert&apos;s children — and they&apos;re the reason this practice exists the way it does. Their names serve as a daily reminder of what matters most: that every person who walks through this door is someone&apos;s family. A parent, a child, a partner, a friend. That&apos;s the standard of care we hold ourselves to, every single day.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-cream-50 border border-cream-200 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-olive-500 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-bark mb-1.5">{v.title}</h3>
                    <p className="font-sans text-sm text-bark-muted leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Local commitment */}
      <section className="py-16 bg-olive-700" aria-labelledby="local-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="local-heading" className="font-serif text-3xl md:text-4xl text-white mb-4">
            Proudly Serving Greater Rochester
          </h2>
          <p className="font-sans text-olive-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Oak &amp; Olive serves patients throughout the Rochester, NY metro area including the City of Rochester, Pittsford, Brighton, Irondequoit, Penfield, Chili, Greece, Gates, and beyond.
          </p>
          <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-white px-8 py-4">
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </>
  )
}
