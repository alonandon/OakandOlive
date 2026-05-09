import { siteConfig } from './seo'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HealthClub', 'LocalBusiness'],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '500 East Avenue',
      addressLocality: 'Rochester',
      addressRegion: 'NY',
      postalCode: '14604',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.1566,
      longitude: -77.6088,
    },
    areaServed: [
      { '@type': 'City', name: 'Rochester', sameAs: 'https://en.wikipedia.org/wiki/Rochester,_New_York' },
      { '@type': 'City', name: 'Pittsford' },
      { '@type': 'City', name: 'Brighton' },
      { '@type': 'City', name: 'Webster' },
      { '@type': 'City', name: 'Irondequoit' },
      { '@type': 'City', name: 'Penfield' },
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
    ],
    priceRange: '$$',
    sameAs: [
      'https://www.facebook.com/oakandolivewellness',
      'https://www.instagram.com/oakandolivewellness',
    ],
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function articleSchema({
  title,
  description,
  datePublished,
  dateModified,
  slug,
  authorName,
}: {
  title: string
  description: string
  datePublished: string
  dateModified: string
  slug: string
  authorName: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified,
    url: `${siteConfig.url}/blog/${slug}`,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}
