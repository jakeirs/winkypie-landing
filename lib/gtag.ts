declare global {
  interface Window {
    gtag: (...args: [string, ...unknown[]]) => void
  }
}

export function trackEvent(
  action: string,
  params: Record<string, string>,
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
