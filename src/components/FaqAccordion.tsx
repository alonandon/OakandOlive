'use client'

import { useState } from 'react'

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-cream-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-cream-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-serif text-lg text-bark leading-snug">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center transition-transform duration-200 mt-0.5 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="border-t border-cream-200 pt-4">
            <p className="font-sans text-bark-muted leading-relaxed text-sm">{answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FaqAccordion({ faqs }: { faqs: FaqItemProps[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <FaqItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}
