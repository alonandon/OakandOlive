import Link from 'next/link'
import { siteConfig } from '@/lib/seo'

const services = [
  { label: 'Nutrition Counseling', href: '/services#nutrition' },
  { label: 'Wellness Coaching',    href: '/services#coaching' },
  { label: 'Yoga & Movement',      href: '/services#yoga' },
  { label: 'Massage Therapy',      href: '/services#massage' },
  { label: 'Stress Management',    href: '/services#stress' },
  { label: 'Corporate Wellness',   href: '/services#corporate' },
]

const quickLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog',     href: '/blog' },
  { label: 'FAQ',      href: '/faq' },
  { label: 'Contact',  href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bark text-cream-100" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-4">
            <div>
              <p className="font-serif text-2xl text-white">Oak &amp; Olive</p>
              <p className="font-sans text-xs tracking-widest text-cream-300 uppercase mt-0.5">
                Health &amp; Wellness
              </p>
            </div>
            <p className="font-sans text-sm text-cream-300 leading-relaxed">
              Rochester&apos;s trusted destination for holistic health and wellness. We help you grow stronger, healthier, and more balanced — rooted in care, grown for life.
            </p>
            <div className="flex gap-4 pt-1">
              <a
                href="https://www.facebook.com/oakandolivewellness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-cream-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/oakandolivewellness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-cream-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest text-cream-300 uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="font-sans text-sm text-cream-200 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest text-cream-300 uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-cream-200 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / NAP */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest text-cream-300 uppercase mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-olive-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-sans text-sm text-cream-200 leading-relaxed">
                  500 East Avenue<br />Rochester, NY 14604
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-olive-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="font-sans text-sm text-cream-200 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-olive-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${siteConfig.email}`} className="font-sans text-sm text-cream-200 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </address>
            <div className="mt-5 pt-5 border-t border-bark-light">
              <p className="font-sans text-xs text-cream-300">
                <strong className="text-cream-200">Hours:</strong><br />
                Mon–Fri: 8am – 6pm<br />
                Saturday: 9am – 2pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-bark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-xs text-cream-300 text-center sm:text-left">
            &copy; {year} {siteConfig.name}. All rights reserved. Serving Rochester, NY &amp; surrounding communities.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="font-sans text-xs text-cream-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-sans text-xs text-cream-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
