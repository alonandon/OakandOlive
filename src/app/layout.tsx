import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DeferredAnalytics from '@/components/DeferredAnalytics'
import { siteConfig } from '@/lib/seo'
import { localBusinessSchema } from '@/lib/schema'

const playfair = Playfair_Display({
  subsets: ['latin'],
  // 400 covers headings; 700 is needed for the font-serif + font-bold
  // author-initial avatars on blog pages. Weight 900 is unused sitewide,
  // so it's omitted to avoid preloading a font file nothing renders with
  // (PageSpeed: reduces competing requests during the critical render path).
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

const lato = Lato({
  subsets: ['latin'],
  // 300 and 900 are unused sitewide (no font-light/font-black utilities
  // appear anywhere) — trimmed for the same reason as Playfair above.
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Health & Wellness in Rochester, NY`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Health & Wellness in Rochester, NY`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_TOKEN',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = localBusinessSchema()

  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        {/* GA4: gtag.js downloads on first interaction or after ~4s (see component) */}
        <DeferredAnalytics id={siteConfig.googleAnalyticsId} />
      </body>
    </html>
  )
}
