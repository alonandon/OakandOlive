import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/seo'

const services = [
  { label: 'Chiropractic Manipulative Therapy', href: '/services#chiropractic' },
  { label: 'Blood Flow Restriction Therapy',    href: '/services#bfrt' },
  { label: 'Cupping Therapy',                   href: '/services#cupping' },
  { label: 'Spinal Decompression Therapy',      href: '/services#decompression' },
  { label: 'Soft-Tissue Mobilization',          href: '/services#iastm' },
  { label: 'Shockwave Therapy',                 href: '/services#shockwave' },
  { label: 'Nerve Flossing',                    href: '/services#nerve-flossing' },
  { label: 'Nutrition for a Lifetime',          href: '/services#nutrition' },
  { label: 'Exercise Programming',              href: '/services#exercise' },
]

const quickLinks = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about' },
  { label: 'Treatments',  href: '/services' },
  { label: 'Conditions',  href: '/conditions' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog',        href: '/blog' },
  { label: 'Contact',     href: '/contact' },
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
              <Image src="/logo.png" alt="Oak & Olive Chiropractic" width={1500} height={1500} className="h-12 w-auto" />
            </div>
            <p className="font-sans text-sm text-cream-300 leading-relaxed">
              Rochester&apos;s trusted chiropractic practice. We combine expert spinal care, injury rehabilitation, and hands-on treatment to help you move better, feel better, and live fully.
            </p>
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
                  2316 Lyell Ave, Suite 2<br />Rochester, NY 14606
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
                Monday: 12pm – 5pm<br />
                Tuesday: 8am – 6pm<br />
                Wednesday: 8am – 6pm<br />
                Thursday: 8am – 5pm<br />
                Friday: 8am – 5pm
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
