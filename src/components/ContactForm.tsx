'use client'

import { useState } from 'react'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const services = [
  'Nutrition Counseling',
  'Wellness Coaching',
  'Yoga & Movement',
  'Massage Therapy',
  'Stress Management',
  'Corporate Wellness',
  'General Inquiry',
]

export default function ContactForm() {
  const [form, setForm]       = useState<FormState>(initialState)
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialState)
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Unable to send your message. Please call us or try again later.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-olive-50 border border-olive-200 rounded-xl p-8 text-center">
        <div className="w-14 h-14 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-bark mb-2">Message Received!</h3>
        <p className="font-sans text-bark-muted leading-relaxed">
          Thank you for reaching out to Oak &amp; Olive. A member of our team will be in touch within one business day. We look forward to supporting your wellness journey.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary mt-6 text-sm px-5 py-2.5"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-sans text-sm font-medium text-bark mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-4 py-3 border border-cream-300 rounded-lg bg-white font-sans text-sm text-bark placeholder-bark-muted/50 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-sans text-sm font-medium text-bark mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full px-4 py-3 border border-cream-300 rounded-lg bg-white font-sans text-sm text-bark placeholder-bark-muted/50 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block font-sans text-sm font-medium text-bark mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(585) 555-0100"
            className="w-full px-4 py-3 border border-cream-300 rounded-lg bg-white font-sans text-sm text-bark placeholder-bark-muted/50 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="service" className="block font-sans text-sm font-medium text-bark mb-1.5">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-cream-300 rounded-lg bg-white font-sans text-sm text-bark focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition appearance-none cursor-pointer"
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-sm font-medium text-bark mb-1.5">
          Tell Us About Your Goals <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Share a little about what you're looking for — we'd love to learn how we can help..."
          className="w-full px-4 py-3 border border-cream-300 rounded-lg bg-white font-sans text-sm text-bark placeholder-bark-muted/50 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <p className="font-sans text-sm text-red-700">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full sm:w-auto px-8 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Sending…
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="font-sans text-xs text-bark-muted">
        We respect your privacy and will never share your information. By submitting this form, you agree to be contacted by Oak &amp; Olive Health &amp; Wellness.
      </p>
    </form>
  )
}
