'use client'

import { useEffect } from 'react'

const INTERACTION_EVENTS = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const
const FALLBACK_DELAY_MS = 4000

// GA4 with the gtag.js download deferred until the first user interaction,
// or FALLBACK_DELAY_MS after mount, whichever comes first. gtag() and the
// config call are queued in dataLayer straight away, so nothing is lost once
// the script loads. Only visitors who leave before either trigger fires
// (no interaction, under ~4s) go uncounted.
export default function DeferredAnalytics({ id }: { id: string }) {
  useEffect(() => {
    const w = window as unknown as {
      dataLayer: unknown[]
      gtag: (...args: unknown[]) => void
    }
    w.dataLayer = w.dataLayer || []
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments)
    }
    w.gtag('js', new Date())
    w.gtag('config', id)

    let started = false
    let timer = 0

    const cleanup = () => {
      INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, start))
      window.clearTimeout(timer)
    }

    function start() {
      if (started) return
      started = true
      cleanup()
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
      document.head.appendChild(script)
    }

    INTERACTION_EVENTS.forEach((e) =>
      window.addEventListener(e, start, { passive: true, once: true })
    )
    timer = window.setTimeout(start, FALLBACK_DELAY_MS)

    return cleanup
  }, [id])

  return null
}
