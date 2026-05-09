import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description: 'Contact Oak & Olive Health & Wellness in Rochester, NY. Book a free consultation, ask a question, or learn more about our services. We\'d love to hear from you.',
  path: '/contact',
})

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    label: 'Visit Us',
    value: '500 East Avenue\nRochester, NY 14604',
    href: 'https://maps.google.com/?q=500+East+Avenue+Rochester+NY+14604',
    linkText: 'Get Directions',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: 'Call Us',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\D/g, '')}`,
    linkText: 'Call Now',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Email Us',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    linkText: 'Send an Email',
  },
]

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday',        time: '9:00 AM – 2:00 PM' },
  { day: 'Sunday',          time: 'Closed' },
]

export default function ContactPage() {
  const schema = breadcrumbSchema([
    { name: 'Home',    url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-olive-950 pt-32 pb-20 relative overflow-hidden" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-olive-700/25 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-sm text-olive-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg></li>
              <li className="text-white" aria-current="page">Contact</li>
            </ol>
          </nav>
          <span className="section-label text-olive-300">Let&apos;s Connect</span>
          <h1 id="contact-hero-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-2xl leading-tight">
            Start Your Wellness Journey Today
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-xl leading-relaxed">
            Whether you&apos;re ready to book or just have questions, we&apos;d love to hear from you. Our Rochester team typically responds within one business day.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 id="contact-form-heading" className="section-subheading mb-4">
                  Get in Touch
                </h2>
                <p className="font-sans text-bark-muted leading-relaxed">
                  We&apos;re here for you — whatever stage of your wellness journey you&apos;re on. Reach out via the form, call us directly, or stop by our Rochester studio.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                {contactDetails.map((c) => (
                  <div key={c.label} className="flex gap-4 p-5 bg-cream-50 border border-cream-200 rounded-xl">
                    <div className="w-11 h-11 bg-olive-100 text-olive-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-bark-muted uppercase tracking-wide mb-1">
                        {c.label}
                      </p>
                      <p className="font-sans text-sm text-bark whitespace-pre-line">{c.value}</p>
                      <a href={c.href} className="font-sans text-sm text-olive-600 hover:text-olive-800 font-medium mt-1 inline-block transition-colors">
                        {c.linkText} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="p-6 bg-olive-50 border border-olive-100 rounded-xl">
                <h3 className="font-serif text-lg text-bark mb-4">Office Hours</h3>
                <div className="space-y-2.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center">
                      <span className="font-sans text-sm text-bark">{h.day}</span>
                      <span className={`font-sans text-sm font-medium ${h.time === 'Closed' ? 'text-bark-muted' : 'text-olive-700'}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-xs text-bark-muted mt-4 pt-4 border-t border-olive-100">
                  Virtual appointments available outside regular hours by arrangement.
                </p>
              </div>

              {/* Service area */}
              <div className="p-5 bg-cream-50 border border-cream-200 rounded-xl">
                <h3 className="font-sans text-xs font-semibold text-bark-muted uppercase tracking-wide mb-3">
                  Service Area
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Rochester', 'Pittsford', 'Brighton', 'Webster', 'Irondequoit', 'Penfield', 'Fairport', 'Greece', 'Virtual (NY State)'].map((area) => (
                    <span key={area} className="bg-white border border-cream-300 font-sans text-xs text-bark-muted px-3 py-1 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-cream-200 rounded-2xl shadow-sm p-8 md:p-10">
                <h2 className="font-serif text-2xl text-bark mb-2">Send Us a Message</h2>
                <p className="font-sans text-sm text-bark-muted mb-8">
                  Fill out the form below and a member of our team will be in touch within one business day.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-cream-50 border-t border-cream-200" aria-label="Location map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl text-bark">Find Us in Rochester</h2>
            <p className="font-sans text-sm text-bark-muted mt-2">500 East Avenue, Rochester, NY 14604</p>
          </div>
          <div className="aspect-[16/6] bg-olive-100 rounded-2xl flex items-center justify-center border border-olive-200 overflow-hidden">
            <div className="text-center">
              <svg className="w-10 h-10 text-olive-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <p className="font-sans text-sm text-bark-muted mb-3">500 East Avenue, Rochester, NY 14604</p>
              <a
                href="https://maps.google.com/?q=500+East+Avenue+Rochester+NY+14604"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
          <p className="font-sans text-xs text-bark-muted text-center mt-4">
            Embed your Google Maps iframe here — replace this placeholder with your actual embed code.
          </p>
        </div>
      </section>
    </>
  )
}
