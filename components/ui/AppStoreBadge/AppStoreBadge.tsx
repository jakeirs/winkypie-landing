'use client'

import { trackDownloadClick } from '@/lib/gtag'

const APP_STORE_URL = 'https://apps.apple.com/us/app/winkypie/id6757441777'

type AppStoreBadgeProps = {
  trackingLabel: string
  size?: 'sm' | 'md'
  variant?: 'light' | 'dark'
  className?: string
}

export default function AppStoreBadge({
  trackingLabel,
  size = 'md',
  variant = 'light',
  className = '',
}: AppStoreBadgeProps) {
  const sizing =
    size === 'sm'
      ? { pad: 'px-3 py-1.5 gap-2', icon: 'w-6 h-6', top: 'text-[9px]', bottom: 'text-[15px]' }
      : { pad: 'px-4 py-2.5 gap-2.5', icon: 'w-8 h-8', top: 'text-[11px]', bottom: 'text-[19px]' }

  const palette =
    variant === 'dark'
      ? 'bg-black text-white border-white/15 hover:bg-zinc-900'
      : 'bg-white text-black border-black/10 hover:bg-zinc-50'

  return (
    <a
      href={APP_STORE_URL}
      onClick={() => trackDownloadClick(trackingLabel)}
      aria-label="Download WinkyPie on the App Store"
      className={`inline-flex items-center justify-center rounded-xl border shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all ${sizing.pad} ${palette} ${className}`}
    >
      <svg
        className={sizing.icon}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="text-left leading-tight">
        <span className={`block ${sizing.top} opacity-70`}>Download on the</span>
        <span className={`block ${sizing.bottom} font-semibold tracking-tight`}>App Store</span>
      </span>
    </a>
  )
}
