declare global {
  interface Window {
    gtag: (...args: [string, ...unknown[]]) => void
  }
}

export function trackEvent(
  action: string,
  params: Record<string, string | number>,
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params)
  }
}

export function trackDownloadClick(label: string) {
  trackEvent('download_click', {
    event_category: 'conversion',
    event_label: label,
  })
}

export function trackScrollDepth(depth: 25 | 50 | 75 | 100) {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    value: depth,
  })
}

export function trackSectionView(section: string) {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: section,
  })
}

export function trackFaqExpand(question: string) {
  trackEvent('faq_expand', {
    event_category: 'engagement',
    event_label: question,
  })
}
