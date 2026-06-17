const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://winkypie.app'

const mobileApplication = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'WinkyPie',
  alternateName: 'WinkyPie — Pro photos. No photographer.',
  operatingSystem: 'iOS',
  applicationCategory: 'PhotoApplication',
  description:
    'AI-generated pro photos for dating profiles, built from one selfie. 300+ pro poses or upload your own.',
  url: SITE_URL,
  downloadUrl: 'https://apps.apple.com/us/app/winkypie/id6757441777',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free trial, in-app subscription unlocks full features.',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Minimax Development',
    url: SITE_URL,
  },
}

type FaqItem = { question: string; answer: string }

export function MobileAppStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileApplication) }}
    />
  )
}

export function FaqStructuredData({ faqs }: { faqs: FaqItem[] }) {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
