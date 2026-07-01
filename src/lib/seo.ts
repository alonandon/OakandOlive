export const siteConfig = {
  name: 'Oak & Olive Chiropractic',
  shortName: 'Oak & Olive',
  description:
    'Rochester\'s trusted chiropractic practice. Expert spinal care, injury rehabilitation, and hands-on treatment to help you move better, feel better, and live fully.',
  url: 'https://www.oakandolivewellness.com',
  city: 'Rochester',
  state: 'NY',
  zip: '14606',
  address: '2316 Lyell Ave, Suite 2, Rochester, NY 14606',
  phone: '(585)429-5100',
  email: 'dr.alex@oakolivehealth.com',
  googleAnalyticsId: 'G-2NS7VYHRTW',
  twitterHandle: '@oakandoliveny',
  keywords: [
    'chiropractor Rochester NY',
    'chiropractic care Rochester',
    'spinal decompression Rochester NY',
    'shockwave therapy Rochester',
    'cupping therapy Rochester NY',
    'blood flow restriction therapy Rochester',
    'nerve flossing Rochester',
    'chiropractic adjustment Rochester NY',
    'injury rehabilitation Rochester',
    'nutrition counseling Rochester NY',
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
