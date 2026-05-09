export const siteConfig = {
  name: 'Oak & Olive Health & Wellness',
  shortName: 'Oak & Olive',
  description:
    'Rochester\'s trusted health and wellness destination. Expert nutrition counseling, wellness coaching, yoga, massage therapy, and stress management — serving Rochester, NY and surrounding communities.',
  url: 'https://www.oakandolivewellness.com',
  city: 'Rochester',
  state: 'NY',
  zip: '14604',
  address: '500 East Avenue, Rochester, NY 14604',
  phone: '(585) 555-0192',
  email: 'hello@oakandolivewellness.com',
  googleAnalyticsId: 'G-XXXXXXXXXX',
  twitterHandle: '@oakandoliveny',
  keywords: [
    'health and wellness Rochester NY',
    'wellness center Rochester',
    'nutrition counseling Rochester NY',
    'wellness coaching Rochester',
    'yoga Rochester NY',
    'massage therapy Rochester',
    'holistic health Rochester NY',
    'stress management Rochester',
    'corporate wellness Rochester NY',
    'health coach Rochester NY',
  ],
}

export function buildMetadata({
  title,
  description,
  path = '',
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  noIndex?: boolean
}) {
  const url = `${siteConfig.url}${path}`
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${title} | ${siteConfig.name}`,
      description,
      site: siteConfig.twitterHandle,
    },
  }
}
