'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/seo'

const navLinks = [
  { label: 'Home',        href: '/' },
  { label: 'About',       href: '/about' },
  { label: 'Treatments',  href: '/services' },
  { label: 'Conditions',  href: '/conditions' },
  { label: 'New Patients', href: '/faq' },
  { label: 'Blog',        href: '/blog' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white shadow-sm border-b border-cream-200'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group" aria-label={siteConfig.name}>
            <span className="font-serif text-xl md:text-2xl text-olive-700 group-hover:text-olive-800 transition-colors">
              Oak &amp; Olive
            </span>
            <span className="font-sans text-[10px] md:text-xs tracking-widest text-bark-muted uppercase">
              Chiropractic
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors duration-150 hover:text-olive-600 ${
                  pathname === link.href
                    ? 'text-olive-700 border-b-2 border-olive-500 pb-0.5'
                    : 'text-bark-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs text-bark-muted font-sans hidden lg:block">
              {siteConfig.phone}
            </span>
            <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-5 py-2.5">
              Schedule an Appointment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-bark-light hover:text-olive-700 hover:bg-cream-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Open'} menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-cream-200 px-4 pt-4 pb-6 space-y-1 shadow-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2.5 rounded-md font-sans text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-olive-50 text-olive-700'
                  : 'text-bark-light hover:bg-cream-100 hover:text-olive-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-cream-200 mt-3 space-y-2">
            <p className="px-3 text-xs text-bark-muted font-sans">{siteConfig.phone}</p>
            <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center mt-2 flex">
              Schedule an Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
