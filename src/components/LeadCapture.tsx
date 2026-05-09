'use client'

import { useState } from 'react'

export default function LeadCapture() {
  const [email, setEmail]     = useState('')
  const [name, setName]       = useState('')
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: 'Newsletter signup', service: 'Newsletter' }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-olive-700 py-16 lg:py-20" aria-labelledby="lead-capture-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block font-sans text-xs font-semibold tracking-widest text-olive-200 uppercase mb-4">
          Free Wellness Resource
        </span>
        <h2
          id="lead-capture-heading"
          className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight"
        >
          Start Your Wellness Journey Today
        </h2>
        <p className="font-sans text-olive-100 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Join our Rochester wellness community and receive our free guide:{' '}
          <em>&ldquo;10 Daily Habits for a Healthier Life&rdquo;</em> — plus monthly wellness tips, local events, and exclusive offers.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-6 inline-block">
            <p className="font-serif text-xl text-white">Welcome to the Oak &amp; Olive community!</p>
            <p className="font-sans text-olive-100 text-sm mt-2">
              Check your inbox for your free wellness guide.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your first name"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-olive-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-white/40 transition"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-olive-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-white/40 transition"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-white px-6 py-3 whitespace-nowrap disabled:opacity-60"
            >
              {status === 'loading' ? 'Signing up…' : 'Get Free Guide'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="font-sans text-red-200 text-sm mt-3">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <p className="font-sans text-xs text-olive-200 mt-4">
          No spam, ever. Unsubscribe anytime. We&apos;re based in Rochester, NY and only send content worth reading.
        </p>
      </div>
    </section>
  )
}
