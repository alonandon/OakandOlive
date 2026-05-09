import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description: 'Meet the Oak & Olive Health & Wellness team — Rochester NY\'s trusted wellness experts. Learn our story, mission, and values that guide everything we do.',
  path: '/about',
})

const team = [
  {
    name: 'Dr. Claire Ashford',
    title: 'Founder & Lead Wellness Director',
    credentials: 'PhD, RDN, CDCES',
    bio: 'Dr. Ashford founded Oak & Olive after 15 years of clinical practice in Rochester, driven by a vision of making holistic, personalized wellness care accessible to every member of the community. She specializes in metabolic health, sports nutrition, and integrative wellness.',
    specialty: 'Nutrition & Metabolic Health',
  },
  {
    name: 'Sarah Mendez',
    title: 'Registered Dietitian-Nutritionist',
    credentials: 'MS, RDN, CDN',
    bio: 'Sarah brings a warm, evidence-based approach to nutrition counseling. A Rochester native, she is passionate about helping local families build sustainable healthy habits that fit real life — not just a textbook.',
    specialty: 'Family & Pediatric Nutrition',
  },
  {
    name: 'Marcus Thompson',
    title: 'Certified Wellness Coach & Stress Specialist',
    credentials: 'MS, NBC-HWC',
    bio: 'Marcus is a Board-Certified Health & Wellness Coach with a master\'s in mind-body medicine. He specializes in stress management, burnout recovery, and habit transformation, and has helped hundreds of Rochester professionals reclaim balance.',
    specialty: 'Stress Management & Coaching',
  },
  {
    name: 'Priya Nair',
    title: 'Yoga Director & Movement Specialist',
    credentials: 'E-RYT 500, YACEP',
    bio: 'Priya has been teaching yoga in the Rochester area for over a decade. With training in Hatha, Vinyasa, and Yin yoga, she creates classes that honor every body and every experience level — from first-timers to committed practitioners.',
    specialty: 'Yoga & Movement',
  },
  {
    name: 'David Kowalski',
    title: 'Licensed Massage Therapist',
    credentials: 'LMT, NCTMB',
    bio: 'David brings 10 years of therapeutic massage experience to Oak & Olive. Trained in Swedish, deep tissue, trigger point, and myofascial release techniques, he helps clients move and feel better — often when nothing else has worked.',
    specialty: 'Therapeutic Massage',
  },
  {
    name: 'Aisha Grant',
    title: 'Corporate Wellness Coordinator',
    credentials: 'MBA, CWP',
    bio: 'Aisha leads our corporate wellness division, designing programs for Rochester-area businesses that reduce burnout, improve engagement, and create lasting cultural change. She believes healthy teams build better organizations.',
    specialty: 'Corporate Wellness',
  },
]

const values = [
  {
    title: 'Whole-Person Care',
    description: 'We see you as a complete human being — not just a diagnosis, a goal weight, or a fitness metric. Our approach addresses body, mind, and life circumstances together.',
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
    title: 'Compassionate Without Judgment',
    description: 'Everyone\'s journey is different. We meet every client exactly where they are — no judgment, no shame, no one-size-fits-all mandates.',
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
            Where Wellness Meets Community
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-2xl leading-relaxed">
            Born in Rochester, grown by the community — Oak &amp; Olive is more than a wellness center. We&apos;re a place where neighbors become healthier versions of themselves, guided by experts who genuinely care.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="section-label">How We Started</span>
              <h2 id="story-heading" className="section-heading mt-3 mb-6">
                A Rochester Practice Built on Purpose
              </h2>
              <div className="space-y-4 font-sans text-bark-muted leading-relaxed">
                <p>
                  Oak &amp; Olive Health &amp; Wellness was founded by Dr. Claire Ashford in 2012 after she spent over a decade watching patients in Rochester&apos;s clinical system struggle to access consistent, personalized wellness support. She believed — and still believes — that preventative, holistic care should be the norm, not a luxury.
                </p>
                <p>
                  The name &ldquo;Oak &amp; Olive&rdquo; was chosen intentionally. The oak tree is a symbol of strength, longevity, and deep roots — much like the Rochester community itself. The olive branch represents healing, peace, and vitality. Together, they capture what we aspire to offer every person who walks through our doors.
                </p>
                <p>
                  What started as a single-practitioner nutrition practice has grown into a full-spectrum wellness center with a team of six specialists, serving hundreds of Rochester-area clients every year — from the South Wedge to Pittsford, from Webster to Irondequoit.
                </p>
                <p>
                  We&apos;re proud to be part of the fabric of this city. We sponsor local wellness events, partner with Rochester-area businesses for corporate wellness programs, and actively work to make health education accessible to all members of our community.
                </p>
              </div>
            </div>

            <div className="space-y-5">
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
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-cream-50" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">The People Behind Your Wellness</span>
            <h2 id="team-heading" className="section-heading mt-3">
              Meet Our Rochester Team
            </h2>
            <p className="font-sans text-bark-muted max-w-2xl mx-auto mt-4 leading-relaxed">
              Each member of our team was chosen not just for their credentials, but for their passion, empathy, and commitment to the Rochester community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card p-7">
                <div className="w-16 h-16 bg-olive-100 rounded-2xl flex items-center justify-center mb-5">
                  <span className="font-serif text-2xl text-olive-700 font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="mb-3">
                  <h3 className="font-serif text-xl text-bark">{member.name}</h3>
                  <p className="font-sans text-xs text-olive-600 font-semibold tracking-wide mt-0.5">{member.credentials}</p>
                  <p className="font-sans text-sm text-bark-muted mt-1">{member.title}</p>
                </div>
                <p className="font-sans text-sm text-bark-muted leading-relaxed mb-4">{member.bio}</p>
                <span className="inline-block bg-cream-200 text-bark font-sans text-xs font-medium px-3 py-1 rounded-full">
                  {member.specialty}
                </span>
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
            Oak &amp; Olive serves clients throughout the Rochester, NY metro area including the City of Rochester, Pittsford, Brighton, Webster, Irondequoit, Penfield, Fairport, Greece, and beyond. We also offer virtual appointments for clients across New York State.
          </p>
          <Link href="/contact" className="btn-white px-8 py-4">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
