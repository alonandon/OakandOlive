import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'About Us & Our Team',
  description: 'Meet Dr. Alex Eckert, Dr. Fred SanFilipo, and the Oak & Olive Chiropractic team — Rochester NY\'s trusted chiropractic care. Learn our story, mission, and values that guide everything we do.',
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
          <span className="section-label text-olive-300">Our Team</span>
          <h1 id="about-hero-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-3xl leading-tight">
            Meet the Team Behind Oak &amp; Olive
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-2xl leading-relaxed">
            Born in Rochester, grown by the community — Oak &amp; Olive is more than a chiropractic clinic. We&apos;re a place where we become healthier versions of ourselves, guided by experts who genuinely care.
          </p>
          <a href="#our-team" className="inline-flex items-center gap-2 mt-8 font-sans text-sm font-semibold text-olive-200 hover:text-white transition-colors">
            Meet our doctors
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </a>
        </div>
      </section>

      {/* Our Team */}
      <section id="our-team" className="py-20 lg:py-28 bg-white scroll-mt-24" aria-labelledby="team-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
            <span className="section-label">Our Doctors</span>
            <h2 id="team-heading" className="section-heading mt-3 mb-4">Our Team</h2>
            <p className="font-sans text-bark-muted leading-relaxed">
              Experienced, evidence-based chiropractors who treat every patient like family.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Dr. Alex Eckert */}
            <article id="dr-alex-eckert" className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-14 items-start scroll-mt-24" aria-labelledby="alex-heading">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 shadow-lg">
                <Image
                  src="/doctor.jpg"
                  alt="Dr. Alex Eckert, D.C. — founder of Oak & Olive Chiropractic"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <div>
                <span className="inline-block font-sans text-xs font-semibold tracking-widest uppercase bg-olive-100 text-olive-700 rounded-full px-3 py-1">Founder &amp; Chiropractor</span>
                <h3 id="alex-heading" className="font-serif text-3xl md:text-4xl text-bark mt-4 mb-1">Dr. Alex Eckert, D.C.</h3>
                <p className="font-sans text-sm text-olive-700 font-semibold mb-6">BS, Exercise Science · Doctor of Chiropractic, summa cum laude</p>
                <div className="space-y-4 font-sans text-bark-muted leading-relaxed">
                  <p>
                    Oak &amp; Olive Chiropractic was founded by Dr. Alex Eckert, D.C. in 2021 — originally under the name Performance Health Clinic of Rochester — with a straightforward belief: that every patient deserves the same standard of care you&apos;d want for your own family.
                  </p>
                  <p>
                    Dr. Eckert earned his Bachelor of Science in Exercise Science from the University at Buffalo before graduating summa cum laude with his Doctorate in Chiropractic from the University of Bridgeport. After beginning his career in New Jersey, he returned home to Rochester with a clear purpose: to bring exceptional, patient-first chiropractic care to the community that raised him.
                  </p>
                </div>
              </div>
            </article>

            <div className="border-t border-cream-200" aria-hidden="true" />

            {/* Dr. Fred SanFilipo */}
            <article id="dr-fred-sanfilipo" className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-14 items-start scroll-mt-24" aria-labelledby="fred-heading">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 shadow-lg">
                <Image
                  src="/Fred%20jpg.avif"
                  alt="Dr. Fred SanFilipo, DC, DACBO — chiropractic orthopedist at Oak & Olive Chiropractic"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div>
                <span className="inline-block font-sans text-xs font-semibold tracking-widest uppercase bg-olive-100 text-olive-700 rounded-full px-3 py-1">Chiropractic Orthopedist</span>
                <h3 id="fred-heading" className="font-serif text-3xl md:text-4xl text-bark mt-4 mb-1">Dr. Fred SanFilipo, DC, DACBO</h3>
                <p className="font-sans text-sm text-olive-700 font-semibold mb-6">BS, Biology · Doctor of Chiropractic · Board Certified in Chiropractic Orthopedics</p>
                <div className="space-y-4 font-sans text-bark-muted leading-relaxed">
                  <p>
                    We&apos;re proud to welcome Dr. Fred SanFilipo to the Oak &amp; Olive team. With more than 45 years of clinical experience, Dr. SanFilipo has spent his career providing evidence-based, patient-centered care for musculoskeletal conditions here in the Rochester area.
                  </p>
                  <p>
                    Dr. SanFilipo earned his Bachelor of Science in Biology from St. Bonaventure University and his Doctor of Chiropractic from New York Chiropractic College (now Northeast College of Health Sciences). He completed postgraduate orthopedic studies at National College of Chiropractic and is board certified in Chiropractic Orthopedics. He also holds certifications in managing TMJ disorders, whiplash-associated disorders, and soft tissue disorders.
                  </p>
                  <p>
                    Dr. SanFilipo taught clinical sciences at New York Chiropractic College for more than 25 years and has served as an examiner for the National Board of Chiropractic Examiners. He is a Fellow of the International Academy of Neuromusculoskeletal Medicine, a member of the American Chiropractic Association, and has volunteered his time treating uninsured and underinsured patients at Mercy Outreach Health Center and St. Joseph&apos;s Neighborhood Center.
                  </p>
                  <p>
                    Outside the office, Dr. SanFilipo and his wife Michelle have been married for more than 40 years and have four grown children and nine grandchildren. He&apos;s an avid outdoorsman who enjoys gardening and time with his grandkids.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Story + values */}
      <section className="py-20 lg:py-28 bg-cream-50" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="section-label">Our Story</span>
            <h2 id="story-heading" className="section-heading mt-3 mb-6">
              A Rochester Practice Built with Purpose
            </h2>
            <p className="font-sans text-bark-muted leading-relaxed">
              The name Oak &amp; Olive isn&apos;t a marketing decision. Oak and Olive are Dr. Eckert&apos;s children — and they&apos;re the reason this practice exists the way it does. Their names serve as a daily reminder of what matters most: that every person who walks through this door is someone&apos;s family. A parent, a child, a partner, a friend. That&apos;s the standard of care we hold ourselves to, every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-cream-200 rounded-xl p-6">
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
