'use client'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

import { trackDownloadClick } from '@/lib/gtag'

export function CTA() {
  return (
    <section id="download" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll animation="scale-in">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary" />
            <div className="absolute inset-0 bg-[url('/sample.jpg')] opacity-10 bg-cover bg-center" />

            <div className="relative p-8 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Ready to transform your photos?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Transform your selfies into stunning professional photos — no
                photoshoot required. Download now and get started for free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="#"
                  onClick={() => trackDownloadClick('cta_button')}
                  aria-label="Download WinkyPie on the App Store"
                  className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-black/80 transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
              </div>

              <p className="text-sm text-white/60">
                Free to download. Premium features available.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
