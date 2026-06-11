import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'
import { getRecentPosts, formatDate } from '@/lib/blog'


export const metadata: Metadata = {
  title: `${siteConfig.name} | Chiropractic Care in Rochester, NY`,
  description:
    'Oak & Olive Chiropractic — Rochester\'s trusted chiropractic practice. Expert spinal care, injury rehabilitation, and hands-on treatment. Book a consultation today.',
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `${siteConfig.name} | Chiropractic Care in Rochester, NY`,
    description: 'Rochester\'s trusted chiropractic practice. Expert spinal care, injury rehabilitation, and hands-on treatment to help you move better, feel better, and live fully.',
    url: siteConfig.url,
  },
}

const services = [
  {
    id: 'chiropractic',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Chiropractic Manipulative Therapy',
    description: 'Hands-on spinal adjustments to restore proper alignment, reduce pain, and improve your body\'s natural movement patterns.',
  },
  {
    id: 'bfrt',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Blood Flow Restriction Therapy (BFRT)',
    description: 'Low-load exercise with specialized cuffs that safely promote muscle growth and strength — ideal for injury recovery.',
  },
  {
    id: 'cupping',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Cupping Therapy',
    description: 'Ancient technique using suction cups to release muscle tension, improve circulation, and accelerate soft-tissue healing.',
  },
  {
    id: 'decompression',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    title: 'Flexion Distraction & Spinal Decompression Therapy',
    description: 'Gentle, non-surgical decompression to relieve disc pressure, reduce nerve pain, and restore spinal mobility.',
  },
  {
    id: 'iastm',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Instrument Assisted Soft-Tissue Mobilization',
    description: 'Specialized tools to break down scar tissue and fascial restrictions, restoring normal tissue function and reducing chronic pain.',
  },
  {
    id: 'shockwave',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Shockwave Therapy',
    description: 'High-energy acoustic wave treatment that stimulates healing in tendons, muscles, and connective tissue — proven for chronic conditions.',
  },
  {
    id: 'nerve-flossing',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: 'Nerve Flossing',
    description: 'Targeted neurodynamic techniques to mobilize irritated nerves, reduce pain, and restore normal nerve function throughout the body.',
  },
  {
    id: 'nutrition',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m-7-9H4m16 0h-1M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707.707M17.657 6.343l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    title: 'Nutrition for a Lifetime',
    description: 'Personalized nutrition guidance rooted in real-life sustainability — designed to fuel your recovery and long-term health.',
  },
  {
    id: 'exercise',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Exercise Programming',
    description: 'Customized movement programs to complement your chiropractic care, build strength, and prevent future injury.',
  },
]


export default function HomePage() {
  const recentPosts = getRecentPosts(3)

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center bg-olive-950 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-olive-700/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage-700/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            <span className="inline-block section-label text-olive-300 mb-5">
              Rochester, NY Chiropractic Care
            </span>
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Rooted in Wellness.{' '}
              <span className="text-olive-300">Grown for You.</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-cream-200 leading-relaxed max-w-2xl mb-10">
              Rochester&apos;s trusted chiropractic practice. We combine expert spinal care, injury rehabilitation, and hands-on treatment to help you move better, feel better, and live fully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-white text-base px-8 py-4">
                Schedule an Appointment
              </a>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-sans font-semibold text-base rounded-md hover:border-white/60 hover:bg-white/10 transition-all duration-200">
                Explore Our Treatments
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {['Chiropractic Care', 'Spinal Decompression', 'Shockwave Therapy', 'Nutrition & Exercise'].map((s) => (
                <span key={s} className="flex items-center gap-1.5 font-sans text-sm text-olive-200">
                  <svg className="w-3.5 h-3.5 text-olive-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-olive-300">
          <span className="font-sans text-xs tracking-widest uppercase">Discover</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-below-fold py-20 lg:py-28 bg-cream-50 leaf-pattern" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">What We Offer</span>
            <h2 id="services-heading" className="section-heading mt-3 mb-5">
              Individualized Chiropractic Care for Rochester
            </h2>
            <p className="font-sans text-bark-muted max-w-2xl mx-auto leading-relaxed">
              Every patient receives a care plan designed with one goal in mind: helping you build and maintain a healthier life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="card group p-7 hover:border-olive-200"
              >
                <div className="w-12 h-12 bg-olive-100 text-olive-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-olive-600 group-hover:text-white transition-all duration-200">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl text-bark mb-2 group-hover:text-olive-700 transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-bark-muted leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 font-sans text-sm font-medium text-olive-600 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary px-8 py-3.5">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Treat ── */}
      <section className="section-below-fold py-20 lg:py-28 bg-white" aria-labelledby="conditions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Conditions</span>
            <h2 id="conditions-heading" className="section-heading mt-3 mb-5">
              What We Treat
            </h2>
            <p className="font-sans text-bark-muted max-w-2xl mx-auto leading-relaxed">
              We help patients recover from a wide range of musculoskeletal conditions — whether you&apos;re dealing with everyday aches or a complex injury.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              'Lower Back Pain',
              'Neck Pain & Stiffness',
              'Sciatica & Nerve Pain',
              'Headaches & Migraines',
              'Sports & Athletic Injuries',
              'Auto Accident / Whiplash',
              'Disc Herniation',
              'Shoulder Pain',
              'Hip & Knee Pain',
              'Plantar Fasciitis',
            ].map((condition) => (
              <div
                key={condition}
                className="flex items-center gap-3 bg-cream-50 border border-cream-200 rounded-xl px-5 py-4"
              >
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-olive-500" />
                <span className="font-sans text-sm font-medium text-bark">{condition}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/conditions" className="btn-secondary px-8 py-3.5">
              View All Conditions
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="section-below-fold py-20 lg:py-28 bg-white" aria-labelledby="about-teaser-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-olive-800 to-olive-950 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-olive-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-label">Our Story</span>
              <h2 id="about-teaser-heading" className="section-heading mt-3 mb-6">
                Wellness Rooted in Rochester Community
              </h2>
              <div className="space-y-4 font-sans text-bark-muted leading-relaxed">
                <p>
                  Oak &amp; Olive Chiropractic was born out of a simple belief: that everyone deserves access to the care we would expect and hope for our own family. Founded by Dr. Alex Eckert, D.C. in the heart of Rochester, NY, we continue to build deep roots in this remarkable city. From the Finger Lakes to the neighborhoods of Greece, Gates, Spencerport, Brighton and beyond, we are proud to be Rochester&apos;s go-to chiropractic resource.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/about" className="btn-primary px-7 py-3.5">
                  Meet the Doctor
                </Link>
                <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-secondary px-7 py-3.5">
                  Schedule an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-below-fold py-20 lg:py-28 bg-sage-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Client Stories</span>
            <h2 id="testimonials-heading" className="section-heading mt-3">
              What Our Rochester Clients Say
            </h2>
          </div>

          <div id="shapo-widget-9351899923fd5046a50b" />
          <Script
            id="shapo-embed-js"
            src="https://cdn.shapo.io/js/embed.js"
            strategy="lazyOnload"
          />

        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section className="section-below-fold py-20 lg:py-28 bg-white" aria-labelledby="blog-preview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="section-label">Wellness Insights</span>
              <h2 id="blog-preview-heading" className="section-heading mt-3">
                From the Oak &amp; Olive Blog
              </h2>
            </div>
            <Link href="/blog" className="btn-secondary px-6 py-3 whitespace-nowrap self-start md:self-auto">
              View All Posts
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col">
                {/* Category badge */}
                <div className="h-44 bg-gradient-to-br from-olive-800 to-olive-950 flex items-end p-5">
                  <span className="inline-block bg-olive-500/80 text-white font-sans text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-sans text-xs text-bark-muted mb-2">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                  <h3 className="font-serif text-lg text-bark leading-snug mb-3 group-hover:text-olive-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-sans text-sm text-bark-muted leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 font-sans text-sm font-medium text-olive-600 group-hover:gap-2 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-below-fold py-20 lg:py-28 bg-cream-100" aria-labelledby="final-cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Get Started Today</span>
          <h2 id="final-cta-heading" className="section-heading mt-3 mb-5">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="font-sans text-bark-muted max-w-xl mx-auto leading-relaxed mb-8">
            Take the first step toward a healthier, more balanced life. Book a free 20-minute consultation with one of our Rochester chiropractic experts — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-base">
              Schedule an Appointment
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="btn-secondary px-8 py-4 text-base">
              Call {siteConfig.phone}
            </a>
          </div>
          <p className="font-sans text-xs text-bark-muted mt-6">
            Serving Rochester, Greece, Gates, Spencerport, Brighton &amp; surrounding communities
          </p>
        </div>
      </section>
    </>
  )
}
