const CONSENT_COOKIE = 'winky_cookie_consent'
const CONSENT_MAX_AGE = 365 * 24 * 60 * 60 // 365 days in seconds

export type ConsentValue = 'granted' | 'denied'

export function getConsentCookie(): ConsentValue | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`))
  const value = match?.[1]
  if (value === 'granted' || value === 'denied') return value
  return null
}

export function setConsentCookie(value: ConsentValue): void {
  document.cookie = `${CONSENT_COOKIE}=${value}; max-age=${CONSENT_MAX_AGE}; path=/; SameSite=Lax; Secure`
  window.dispatchEvent(new Event('consentChanged'))
}

export function hasConsentCookie(): boolean {
  return getConsentCookie() !== null
}
