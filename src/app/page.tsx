import type { Metadata } from 'next'
import Link from 'next/link'
import LeadCapture from '@/components/LeadCapture'
import { siteConfig } from '@/lib/seo'
import { getRecentPosts, formatDate } from '@/lib/blog'

export const metadata: Metadata = {
  title: `${siteConfig.name} | Health & Wellness in Rochester, NY`,
  description:
    'Oak & Olive Health & Wellness — Rochester\'s trusted destination for nutrition counseling, wellness coaching, yoga, massage therapy, and stress management. Book a free consultation today.',
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `${siteConfig.name} | Health & Wellness in Rochester, NY`,
    description: 'Rochester\'s trusted destination for holistic health and wellness. Expert nutrition, coaching, yoga, massage, and more.',
    url: siteConfig.url,
  },
}

const services = [
  {
    id: 'nutrition',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m-7-9H4m16 0h-1M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707.707M17.657 6.343l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    title: 'Nutrition Counseling',
    description: 'Personalized nutrition plans designed around your unique body, health history, and goals — no cookie-cutter diets here.',
  },
  {
    id: 'coaching',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Wellness Coaching',
    description: 'One-on-one coaching that goes beyond fitness to address your whole life — habits, mindset, relationships, and purpose.',
  },
  {
    id: 'yoga',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Yoga & Movement',
    description: 'Welcoming yoga and movement classes for all levels — from gentle beginners to advanced practitioners. In-person in Rochester.',
  },
  {
    id: 'massage',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    title: 'Massage Therapy',
    description: 'Swedish, deep tissue, and therapeutic massage from licensed practitioners. Restore your body and quiet your mind.',
  },
  {
    id: 'stress',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: 'Stress Management',
    description: 'Mindfulness, breathwork, and evidence-based techniques to help you find calm — even in the middle of a Rochester winter.',
  },
  {
    id: 'corporate',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Corporate Wellness',
    description: 'Customized wellness programs for Rochester businesses. Invest in your team\'s health and watch productivity and morale soar.',
  },
]

const testimonials = [
  {
    quote: "Oak & Olive completely transformed my relationship with food and my body. After years of yo-yo dieting, I finally have a sustainable approach to nutrition that I actually enjoy. I can't recommend their team enough.",
    name: 'Sarah M.',
    location: 'Rochester, NY',
    service: 'Nutrition Counseling',
  },
  {
    quote: "I came to Oak & Olive completely burned out and barely functioning. My wellness coach helped me rebuild my routines from the ground up. Six months later, I feel like a completely different person — calmer, stronger, and more focused.",
    name: 'James T.',
    location: 'Pittsford, NY',
    service: 'Wellness Coaching',
  },
  {
    quote: "The yoga classes here are unlike anything else in Rochester. The instructors are incredibly skilled and the atmosphere is so welcoming. I went from a complete beginner to attending three classes a week and loving every minute.",
    name: 'Maria L.',
    location: 'Brighton, NY',
    service: 'Yoga & Movement',
  },
]

const stats = [
  { value: '500+', label: 'Rochester Clients Served' },
  { value: '12+', label: 'Years of Experience' },
  { value: '6',   label: 'Wellness Services' },
  { value: '98%', label: 'Client Satisfaction Rate' },
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
              Rochester, NY Health &amp; Wellness
            </span>
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Rooted in Wellness.{' '}
              <span className="text-olive-300">Grown for You.</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-cream-200 leading-relaxed max-w-2xl mb-10">
              Rochester&apos;s trusted health and wellness destination. We combine expert nutrition counseling, mindful movement, and holistic coaching to help you live your strongest, most balanced life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white text-base px-8 py-4">
                Book a Free Consultation
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-sans font-semibold text-base rounded-md hover:border-white/60 hover:bg-white/10 transition-all duration-200">
                Explore Our Services
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {['Nutrition Counseling', 'Wellness Coaching', 'Yoga & Movement', 'Massage Therapy'].map((s) => (
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

      {/* ── Trust Bar ── */}
      <section className="bg-cream-100 border-y border-cream-200 py-8" aria-label="Key stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-cream-300">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <p className="font-serif text-3xl md:text-4xl text-olive-700 font-bold">{stat.value}</p>
                <p className="font-sans text-xs text-bark-muted mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 lg:py-28 bg-cream-50 leaf-pattern" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">What We Offer</span>
            <h2 id="services-heading" className="section-heading mt-3 mb-5">
              Comprehensive Wellness Services<br className="hidden md:block" /> for Rochester Residents
            </h2>
            <p className="font-sans text-bark-muted max-w-2xl mx-auto leading-relaxed">
              Every service we offer is designed with one goal in mind: helping you build a healthier, more vibrant life — on your terms, at your pace.
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

      {/* ── About Teaser ── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="about-teaser-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-olive-800 to-olive-950 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-12 h-12 text-olive-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="font-serif text-2xl text-white leading-snug mb-3">
                    &ldquo;True wellness begins with a single, courageous step toward change.&rdquo;
                  </p>
                  <p className="font-sans text-sm text-olive-200">— The Oak &amp; Olive Team</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-lg px-6 py-4 border border-cream-200">
                <p className="font-serif text-2xl text-olive-700 font-bold">12+</p>
                <p className="font-sans text-xs text-bark-muted">Years serving<br/>Rochester, NY</p>
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
                  Oak &amp; Olive Health &amp; Wellness was born out of a simple belief: that everyone deserves access to expert, compassionate wellness care — right here in their own community.
                </p>
                <p>
                  Founded in the heart of Rochester, NY, we&apos;ve spent over a decade building deep roots in this remarkable city. From the Finger Lakes to the neighborhoods of Pittsford, Brighton, Webster, and beyond, we are proud to be Rochester&apos;s go-to wellness resource.
                </p>
                <p>
                  Our team of registered dietitians, certified wellness coaches, yoga instructors, and massage therapists all share a common philosophy: <em>true wellness is not a destination — it&apos;s a practice.</em> And we&apos;re here to walk that path with you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/about" className="btn-primary px-7 py-3.5">
                  Meet Our Team
                </Link>
                <Link href="/contact" className="btn-secondary px-7 py-3.5">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 lg:py-28 bg-sage-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Client Stories</span>
            <h2 id="testimonials-heading" className="section-heading mt-3">
              What Our Rochester Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-cream-200 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="font-sans text-bark-muted leading-relaxed text-sm flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-olive-100 rounded-full flex items-center justify-center font-serif text-olive-700 font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-bark">{t.name}</p>
                    <p className="font-sans text-xs text-bark-muted">{t.location} · {t.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="blog-preview-heading">
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

      {/* ── Lead Capture ── */}
      <LeadCapture />

      {/* ── Final CTA ── */}
      <section className="py-20 lg:py-28 bg-cream-100" aria-labelledby="final-cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Get Started Today</span>
          <h2 id="final-cta-heading" className="section-heading mt-3 mb-5">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="font-sans text-bark-muted max-w-xl mx-auto leading-relaxed mb-8">
            Take the first step toward a healthier, more balanced life. Book a free 20-minute consultation with one of our Rochester wellness experts — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Book a Free Consultation
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="btn-secondary px-8 py-4 text-base">
              Call {siteConfig.phone}
            </a>
          </div>
          <p className="font-sans text-xs text-bark-muted mt-6">
            Serving Rochester, Pittsford, Brighton, Webster, Irondequoit &amp; surrounding communities
          </p>
        </div>
      </section>
    </>
  )
}
