import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Chiropractic Treatments',
  description: 'Chiropractic treatments in Rochester, NY — CMT, flexion distraction, IASTM, shockwave therapy, BFRT, cupping, nerve flossing, nutrition, and exercise programming. All under one roof.',
  path: '/services',
})

const services = [
  {
    id: 'cmt',
    title: 'Chiropractic Manipulative Therapy (CMT)',
    tagline: 'Precise, hands-on care to restore movement and reduce pain.',
    description: 'Chiropractic Manipulative Therapy (CMT) uses precise, hands-on spinal adjustments to restore proper movement, reduce joint restriction, and reduce pain.',
    details: [
      'Comprehensive spinal and extremity assessment',
      'High-velocity low-amplitude (HVLA) adjustments',
      'Instrument-assisted adjusting (Activator) when appropriate',
      'Drop-table technique for comfort and precision',
      'Flexion-distraction for disc-related complaints',
      'Extremity adjusting (shoulder, knee, ankle, wrist)',
      'Post-adjustment mobility and movement guidance',
    ],
    who: 'Neck pain, back pain, headaches, joint dysfunction, and anyone looking to maintain spinal health over time.',
    format: 'In-person at our Rochester, NY location',
    duration: 'Included in every visit',
    color: 'olive',
  },
  {
    id: 'flexion-distraction',
    title: 'Flexion Distraction & Spinal Decompression',
    tagline: 'Gentle, non-surgical relief for disc and nerve pressure.',
    description: 'Flexion distraction and spinal decompression therapy is a gentle, non-surgical approach to relieving pressure on intervertebral discs and compressed spinal nerves. Using a specialized table, rhythmic traction is applied to the spine — reducing disc bulge, relieving nerve irritation, and restoring normal spinal mobility without pain or twisting forces.',
    details: [
      'Segmental flexion distraction technique',
      'Lumbar and cervical decompression protocols',
      'Nerve root and disc pressure reduction',
      'Integration with chiropractic adjustment and soft tissue care',
      'Home traction and positioning guidance when appropriate',
    ],
    who: 'Disc herniations, bulging discs, sciatica, lumbar stenosis, and radiating arm or leg pain.',
    format: 'In-person at our Rochester, NY location',
    duration: '10–20 minutes (often combined with CMT)',
    color: 'sage',
  },
  {
    id: 'iastm',
    title: 'Instrument Assisted Soft-Tissue Mobilization (IASTM)',
    tagline: 'Targeted soft-tissue treatment to break down adhesions and restore function.',
    description: 'Instrument Assisted Soft-Tissue Mobilization (IASTM) uses specially designed stainless steel tools to detect and treat areas of soft-tissue dysfunction — including scar tissue, fascial adhesions, and fibrotic tissue that builds up after injury or repetitive strain. The tools allow for precise application of controlled pressure, promoting tissue remodeling and restoring normal function.',
    details: [
      'IASTM assessment and tissue mapping',
      'Treatment of upper and lower extremity soft tissue',
      'Spinal and paraspinal fascial release',
      'Tendon and ligament remodeling protocols',
      'Post-treatment stretching and movement integration',
    ],
    who: 'Scar tissue, chronic tendinopathy, repetitive strain injuries, post-surgical adhesions, and restricted range of motion.',
    format: 'In-person at our Rochester, NY location',
    duration: '10–15 minutes per region (typically combined with your visit)',
    color: 'olive',
  },
  {
    id: 'shockwave',
    title: 'Shockwave Therapy',
    tagline: 'Evidence-based acoustic wave therapy for chronic tendon conditions.',
    description: 'Shockwave therapy delivers high-energy acoustic waves to injured or chronically painful tissue, stimulating the body\'s natural repair process at a cellular level. It\'s one of the most evidence-supported non-surgical options for conditions that haven\'t responded to other conservative care — and results are often felt within just a few sessions.',
    details: [
      'Radial shockwave protocols',
      'Tendon and calcification treatment',
      'Trigger point shockwave application',
      'Combination with exercise rehabilitation',
      'Typical course: 4–8 sessions',
    ],
    who: 'Plantar fasciitis, Achilles tendinopathy, calcific shoulder tendinitis, lateral epicondylitis (tennis elbow), patellar tendinopathy, and other chronic tendon conditions.',
    format: 'In-person at our Rochester, NY location',
    duration: '10–15 minutes per area',
    color: 'sage',
  },
  {
    id: 'bfrt',
    title: 'Blood Flow Restriction Therapy (BFRT)',
    tagline: 'Rebuild strength with less stress on healing tissue.',
    description: 'Blood Flow Restriction Therapy (BFRT) uses specialized cuffs to partially restrict venous blood flow during low-load exercise, triggering muscle growth and healing. The result: meaningful rehabilitation progress with significantly less stress on healing tissue — making it ideal for post-injury and post-surgical recovery.',
    details: [
      'Limb occlusion pressure assessment for personalized cuff settings',
      'Upper and lower extremity BFRT protocols',
      'Integration with active rehabilitation exercise',
      'Progress tracking and load progression',
      'Education on home program carry-over',
    ],
    who: 'Injury recovery, post-surgical rehab, muscle atrophy, and anyone who needs to rebuild strength without heavy loading.',
    format: 'In-person at our Rochester, NY location',
    duration: '20–30 minutes (often combined with your chiropractic visit)',
    color: 'olive',
  },
  {
    id: 'cupping',
    title: 'Cupping Therapy',
    tagline: 'Decompress tissue, improve circulation, and accelerate healing.',
    description: 'Cupping therapy uses suction cups placed on the skin to lift soft tissue, improve local circulation, and release fascial restrictions. Unlike traditional massage that compresses tissue, cupping decompresses it — creating space, improving blood flow, and accelerating the body\'s natural healing process.',
    details: [
      'Static and dynamic cupping techniques',
      'Myofascial decompression (movement-based cupping)',
      'Integration with soft-tissue and chiropractic care',
      'Post-cupping mobility work',
    ],
    who: 'Muscle tension, myofascial restrictions, chronic tightness, athletic recovery, and poor circulation in localized areas.',
    format: 'In-person at our Rochester, NY location',
    duration: '15–20 minutes (typically combined with your chiropractic visit)',
    color: 'sage',
  },
  {
    id: 'nerve-flossing',
    title: 'Nerve Flossing',
    tagline: 'Restore nerve mobility to relieve radiating pain and tingling.',
    description: 'Nerve flossing — also called neural mobilization or neurodynamic technique — uses controlled movement sequences to gently mobilize irritated or compressed nerves through their surrounding tissue. When a nerve loses its ability to glide freely, it can generate pain, tingling, and weakness far from the original problem site. Nerve flossing restores that mobility.',
    details: [
      'Upper and lower extremity neurodynamic assessment',
      'Median, ulnar, radial, sciatic, and femoral nerve techniques',
      'Active and passive neural mobilization',
      'Integration with spinal manipulation and decompression',
      'Personalized home nerve flossing program',
    ],
    who: 'Sciatica, carpal tunnel, thoracic outlet syndrome, cervical radiculopathy, and any radiating, burning, or tingling pain along a nerve pathway.',
    format: 'In-person at our Rochester, NY location (with home exercise instruction)',
    duration: '10–15 minutes (combined with your chiropractic visit)',
    color: 'olive',
  },
  {
    id: 'nutrition',
    title: 'Nutrition for a Lifetime',
    tagline: 'Good nutrition isn\'t a diet — it\'s a foundation.',
    description: 'Our nutrition guidance is designed to maintain optimal function over the long term. We focus on practical, sustainable habits rooted in evidence — not rigid plans or short-term fixes. With so much information available on the topic, we\'ve boiled a diet down to its most simple and effective form.',
    details: [
      'Macronutrient guidance for tissue repair',
      'Supplement recommendations (when appropriate)',
      'Weight and metabolic health guidance',
      'Sports and performance nutrition',
      'Practical meal planning frameworks',
    ],
    who: 'Patients seeking to support recovery through diet, manage inflammation, improve energy, or build sustainable long-term eating habits.',
    format: 'In-person or integrated into your chiropractic visit',
    duration: 'Woven into your ongoing care plan',
    color: 'sage',
  },
  {
    id: 'exercise',
    title: 'Exercise Programming',
    tagline: 'Chiropractic care gets you out of pain — exercise programming keeps you there.',
    description: 'Every patient receives individualized movement recommendations to complement their in-office treatment, build functional strength, and reduce the risk of re-injury. Whether you\'re brand new to structured exercise or a seasoned athlete, your program is built around your goals and your life.',
    details: [
      'Functional movement screening',
      'Personalized corrective exercise programs',
      'Strength and conditioning programming (beginner through advanced)',
      'Sport-specific and return-to-activity protocols',
      'Mobility and flexibility programming',
      'Home and gym-based program options',
      'Progress reassessment and program updates',
    ],
    who: 'Anyone looking to build strength, prevent re-injury, return to sport, or develop a sustainable active lifestyle alongside their chiropractic care.',
    format: 'In-person instruction with take-home programming',
    duration: 'Integrated into your care plan',
    color: 'olive',
  },
]

export default function ServicesPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-olive-950 pt-32 pb-20 relative overflow-hidden" aria-labelledby="services-hero-heading">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sage-700/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/4" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-sm text-olive-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg></li>
              <li className="text-white" aria-current="page">Services</li>
            </ol>
          </nav>
          <span className="section-label text-olive-300">How We Help</span>
          <h1 id="services-hero-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-3xl leading-tight">
            Chiropractic Treatments in Rochester, NY
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-2xl leading-relaxed mb-8">
            Hands-on care. Evidence-based treatment. Built around you. Rochester&apos;s trusted chiropractic practice offering nine specialized treatments — all under one roof, all designed to help you move better, feel better, and stay better.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-sans text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="divide-y divide-cream-200">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 lg:py-28 ${index % 2 === 0 ? 'bg-white' : 'bg-cream-50'}`}
            aria-labelledby={`${service.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${index % 2 !== 0 ? 'lg:flex lg:flex-row-reverse' : ''}`}>
                <div>
                  <span className="section-label">Treatment 0{index + 1}</span>
                  <h2 id={`${service.id}-heading`} className="section-heading mt-2 mb-2">
                    {service.title}
                  </h2>
                  <p className="font-serif text-lg text-olive-600 italic mb-5">{service.tagline}</p>
                  <p className="font-sans text-bark-muted leading-relaxed mb-6">{service.description}</p>

                  <div className="bg-cream-50 border border-cream-200 rounded-xl p-5 mb-6 space-y-2">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-olive-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span className="font-sans text-sm text-bark"><strong>Format:</strong> {service.format}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-olive-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="font-sans text-sm text-bark"><strong>Duration:</strong> {service.duration}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-olive-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      <span className="font-sans text-sm text-bark"><strong>Best for:</strong> {service.who}</span>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary px-7 py-3.5">
                    Book {service.title}
                  </Link>
                </div>

                <div className="bg-cream-50 border border-cream-200 rounded-2xl p-8">
                  <h3 className="font-serif text-xl text-bark mb-5">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-olive-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span className="font-sans text-sm text-bark-muted">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-olive-700" aria-labelledby="services-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta-heading" className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to feel better?
          </h2>
          <p className="font-sans text-olive-100 leading-relaxed mb-8">
            Your first step starts here. Schedule an appointment below or call for a consultation with Dr. Alex and see if we are the most appropriate next step in your care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white px-8 py-4">
              Book an Appointment
            </Link>
            <a href="tel:5854295100" className="font-sans font-semibold text-white border-2 border-white/60 hover:border-white px-8 py-4 rounded-lg transition-colors">
              Call (585) 429-5100
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
