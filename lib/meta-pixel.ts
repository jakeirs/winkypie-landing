export type MetaStandardEvent =
  | 'PageView'
  | 'ViewContent'
  | 'Lead'
  | 'CompleteRegistration'
  | 'InitiateCheckout'
  | 'Subscribe'
  | 'Contact'
  | 'Search'

export type MetaEventParams = {
  content_name?: string
  content_category?: string
  content_ids?: string[]
  content_type?: string
  value?: number
  currency?: string
  status?: string
  [key: string]: string | number | boolean | string[] | undefined
}

type MetaEventOptions = {
  eventID?: string
}

interface Fbq {
  (command: 'init', pixelId: string, advancedMatching?: Record<string, string>): void
  (
    command: 'track',
    eventName: MetaStandardEvent,
    params?: MetaEventParams,
    options?: MetaEventOptions,
  ): void
  (
    command: 'trackCustom',
    eventName: string,
    params?: MetaEventParams,
    options?: MetaEventOptions,
  ): void
  (command: 'consent', action: 'grant' | 'revoke'): void
}

declare global {
  interface Window {
    fbq?: Fbq
  }
}

export function createEventId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `evt-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

export function metaTrack(
  eventName: MetaStandardEvent,
  params?: MetaEventParams,
  eventId?: string,
): void {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', eventName, params, { eventID: eventId ?? createEventId() })
}

export function metaTrackCustom(
  eventName: string,
  params?: MetaEventParams,
  eventId?: string,
): void {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('trackCustom', eventName, params, { eventID: eventId ?? createEventId() })
}
