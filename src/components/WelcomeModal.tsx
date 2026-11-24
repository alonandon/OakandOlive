'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// One-time announcement pop-up. Once a visitor closes it (or clicks through),
// we remember that in localStorage so it never shows to them again.
// Bump STORAGE_KEY for a future announcement so everyone sees the new one.
const STORAGE_KEY = 'oo-welcome-dr-sanfilipo-dismissed'
const SHOW_DELAY_MS = 1500

export default function WelcomeModal() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let dismissed = false
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      // Storage blocked (private mode etc.): fall back to sessionStorage-free
      // behavior and just show it; closing still hides it for this page view.
    }
    if (dismissed) return
    const t = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function dismiss() {
    setOpen(false)
    try {
      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bark/60 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-modal-heading"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-olive-950 px-6 pt-8 pb-6 text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-olive-700/30 rounded-full blur-2xl pointer-events-none" />
          <button
            ref={closeRef}
            type="button"
            onClick={dismiss}
            aria-label="Close announcement"
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-olive-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span className="relative section-label text-olive-300">New to Our Team</span>
          <h2 id="welcome-modal-heading" className="relative font-serif text-3xl text-white mt-2 leading-tight">
            Welcome, Dr. Fred SanFilipo!
          </h2>
        </div>
        <div className="px-6 py-6 text-center">
          <p className="font-sans text-bark-muted leading-relaxed mb-6">
            We&apos;re excited to announce that Dr. Fred SanFilipo, DC, DACBO, has joined the Oak &amp; Olive team. A board-certified chiropractic orthopedist, Dr. SanFilipo brings more than 45 years of clinical experience caring for patients across Rochester.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about#our-team" onClick={dismiss} className="btn-primary">
              Meet Dr. SanFilipo
            </Link>
            <button type="button" onClick={dismiss} className="btn-secondary">
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
