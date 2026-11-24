import { siteConfig } from './seo'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    // "Chiropractor" is schema.org's MedicalBusiness subtype for this practice
    // (the previous "HealthClub" type describes a gym).
    '@type': 'Chiropractor',
    '@id': `${siteConfig.url}/#practice`,
    name: siteConfig.name,
    legalName: 'Performance Health Chiropractic of Rochester, P.C.',
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/logo.png`,
    telephone: '+1-585-429-5100',
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2316 Lyell Ave, Suite 2',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.zip,
      addressCountry: 'US',
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=2316+Lyell+Ave+Suite+2+Rochester+NY+14606',
    areaServed: [
      { '@type': 'City', name: 'Rochester', sameAs: 'https://en.wikipedia.org/wiki/Rochester,_New_York' },
      { '@type': 'City', name: 'Greece' },
      { '@type': 'City', name: 'Gates' },
      { '@type': 'City', name: 'Chili' },
    ],
    medicalSpecialty: 'Chiropractic',
    founder: {
      '@type': 'Person',
      name: 'Dr. Alex Eckert, D.C.',
      jobTitle: 'Chiropractor',
    },
    // TODO: add `openingHoursSpecification` (must match Google Business Profile
    // exactly) and `sameAs` links to the practice's real Facebook / Instagram /
    // Google Business Profile URLs. The previous values were placeholders.
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
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
        width: 1500,
        height: 1500,
      },
    },
  }
}
