'use client'

import { useEffect, useRef, useState } from 'react'

// Chrome's native loading="lazy" on iframes fires from well outside the
// viewport, so the Google Maps embed (~500 KB of third-party JS) still loaded
// on page load for this short page. This only sets the iframe src once the
// container is within ~200px of the viewport.
export default function LazyGoogleMap({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="aspect-[16/6] rounded-2xl border border-olive-200 overflow-hidden shadow-sm bg-olive-50"
    >
      {visible && (
        <iframe
          src={src}
          title={title}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  )
}
