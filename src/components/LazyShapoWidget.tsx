'use client'

import { useEffect, useRef } from 'react'

const WIDGET_ID = 'shapo-widget-9351899923fd5046a50b'
const EMBED_SRC = 'https://cdn.shapo.io/js/embed.js'

// Loads the Shapo reviews embed only when the container is about to scroll
// into view, instead of on every page load. The embed script, its iframe,
// its avatar images and its resource hints are all third-party work that
// previously ran even for visitors who never reached this section.
export default function LazyShapoWidget() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let loaded = false
    const load = () => {
      if (loaded) return
      loaded = true
      const script = document.createElement('script')
      script.id = 'shapo-embed-js'
      script.src = EMBED_SRC
      script.async = true
      document.body.appendChild(script)
    }

    if (!('IntersectionObserver' in window)) {
      load()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect()
          load()
        }
      },
      { rootMargin: '600px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // min-height matches the rendered widget so the page doesn't jump when it loads
  return <div ref={ref} id={WIDGET_ID} className="min-h-[320px] md:min-h-[498px]" />
}
