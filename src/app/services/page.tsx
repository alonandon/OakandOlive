import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Health & Wellness Services',
  description: 'Explore Oak & Olive\'s full range of health and wellness services in Rochester, NY — nutrition counseling, wellness coaching, yoga, massage therapy, stress management, and corporate wellness.',
  path: '/services',
})

const services = [
  {
    id: 'nutrition',
    title: 'Nutrition Counseling',
    tagline: 'Personalized nutrition that fits your real life.',
    description: 'Our registered dietitian-nutritionists work with you one-on-one to create an individualized nutrition plan that aligns with your health goals, preferences, and lifestyle. No rigid meal plans, no unsustainable diets — just practical, evidence-based guidance that lasts.',
    details: [
      'Comprehensive dietary assessment',
      'Personalized meal planning and guidance',
      'Metabolic health and weight management',
      'Chronic disease nutrition (diabetes, heart disease, IBS)',
      'Sports and performance nutrition',
      'Pediatric and family nutrition',
      'Eating disorder recovery support',
      'Pregnancy and postpartum nutrition',
    ],
    who: 'Anyone looking to improve their relationship with food, manage a health condition through diet, or optimize their energy and performance.',
    format: 'In-person (Rochester, NY) or virtual',
    duration: '60-minute initial · 45-minute follow-ups',
    color: 'olive',
  },
  {
    id: 'coaching',
    title: 'Wellness Coaching',
    tagline: 'Whole-life transformation, one habit at a time.',
    description: 'Our Board-Certified Health & Wellness Coaches use motivational interviewing, behavioral science, and deep listening to help you build the habits, mindset, and routines that support the life you want. Whether you\'re navigating burnout, seeking better balance, or working toward a major life change — we meet you exactly where you are.',
    details: [
      'One-on-one coaching sessions',
      'Goal setting and accountability',
      'Habit formation and behavior change',
      'Burnout recovery and resilience building',
      'Work-life balance strategies',
      'Sleep optimization',
      'Mindset and motivation coaching',
      'Lifestyle and identity alignment',
    ],
    who: 'Individuals feeling stuck, overwhelmed, or ready for meaningful change in any area of their health and life.',
    format: 'In-person (Rochester, NY) or virtual',
    duration: '60-minute sessions · packages available',
    color: 'sage',
  },
  {
    id: 'yoga',
    title: 'Yoga & Movement',
    tagline: 'Movement that honors your body at any level.',
    description: 'Our yoga and movement classes are designed to be accessible, welcoming, and deeply effective. Led by experienced instructors with training across multiple yoga traditions, our classes help you build strength, flexibility, and body awareness — while cultivating the inner calm that ripples into every area of your life.',
    details: [
      'Beginner-friendly group classes',
      'Vinyasa flow (all levels)',
      'Gentle and restorative yoga',
      'Yin yoga for deep release',
      'Private one-on-one sessions',
      'Corporate yoga programs',
      'Prenatal yoga (specialized sessions)',
      'Meditation and breathwork integration',
    ],
    who: 'Complete beginners through experienced practitioners. Anyone seeking improved flexibility, strength, stress relief, or mindful movement.',
    format: 'In-person at our Rochester studio',
    duration: '60–90 minutes per class',
    color: 'olive',
  },
  {
    id: 'massage',
    title: 'Massage Therapy',
    tagline: 'Healing touch for body and mind.',
    description: 'Our licensed massage therapists provide therapeutic massage in a calm, professional setting in Rochester. Whether you\'re carrying the tension of a demanding week, recovering from an injury, or simply seeking rest, our massage services offer genuine relief and restoration.',
    details: [
      'Swedish relaxation massage',
      'Deep tissue and sports massage',
      'Trigger point therapy',
      'Myofascial release',
      'Prenatal massage',
      'Chronic pain management massage',
      'Post-surgical recovery support',
      'Corporate chair massage (on-site)',
    ],
    who: 'Anyone dealing with muscle tension, chronic pain, stress, injury recovery, or seeking regular relaxation and body maintenance.',
    format: 'In-person at our Rochester location',
    duration: '60, 75, or 90-minute sessions',
    color: 'sage',
  },
  {
    id: 'stress',
    title: 'Stress Management',
    tagline: 'Calm is a skill you can learn.',
    description: 'Chronic stress is one of the greatest threats to long-term health — and one of the most underaddressed. Our stress management programs combine evidence-based approaches including mindfulness, breathwork, cognitive-behavioral strategies, and somatic practices to help you build lasting resilience and calm.',
    details: [
      'Mindfulness-Based Stress Reduction (MBSR)',
      'Breathwork and nervous system regulation',
      'Cognitive-behavioral stress management',
      'Sleep and recovery optimization',
      'Burnout assessment and recovery',
      'Anxiety management strategies',
      'Somatic body-based practices',
      'Customized stress management plans',
    ],
    who: 'Anyone experiencing chronic stress, anxiety, burnout, sleep issues, or difficulty finding calm in their daily life.',
    format: 'In-person (Rochester) or virtual',
    duration: '60-minute sessions · group workshops available',
    color: 'olive',
  },
  {
    id: 'corporate',
    title: 'Corporate Wellness',
    tagline: 'Healthier teams. Stronger organizations.',
    description: 'We partner with Rochester-area businesses to design and deliver customized corporate wellness programs that genuinely move the needle — on employee health, engagement, and retention. From lunch-and-learn nutrition workshops to on-site yoga and stress management, we bring wellness to your workplace.',
    details: [
      'Workplace wellness program design',
      'On-site and virtual lunch-and-learns',
      'Group nutrition workshops',
      'Stress management for teams',
      'On-site yoga and movement sessions',
      'Chair massage for employees',
      'Employee wellness challenges',
      'Mental wellness and resilience workshops',
    ],
    who: 'Rochester businesses of all sizes — from startups to large enterprises — seeking to invest in their most important asset: their people.',
    format: 'On-site (your Rochester location) or virtual',
    duration: 'Custom packages — monthly, quarterly, or annual',
    color: 'sage',
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
          <span className="section-label text-olive-300">What We Offer</span>
          <h1 id="services-hero-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-3xl leading-tight">
            Health &amp; Wellness Services in Rochester, NY
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-2xl leading-relaxed mb-8">
            Six specialized services. One connected team. All under one roof in Rochester. Whether you&apos;re starting your wellness journey or deepening an existing practice, we have the expertise to support you.
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
                  <span className="section-label">Service 0{index + 1}</span>
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
            Not Sure Where to Start?
          </h2>
          <p className="font-sans text-olive-100 leading-relaxed mb-8">
            Book a free 20-minute discovery call with our team. We&apos;ll help you understand which service — or combination of services — is the right fit for your goals.
          </p>
          <Link href="/contact" className="btn-white px-8 py-4">
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
