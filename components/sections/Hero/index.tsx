'use client'

import { useRef, useEffect } from 'react'

import { trackDownloadClick } from '@/lib/gtag'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.currentTime >= 44) {
        video.playbackRate = 0.5
      } else if (video.currentTime >= 14) {
        video.playbackRate = 4
      } else {
        video.playbackRate = 2
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Transform any selfie into a{' '}
              <span className="gradient-text">Pro Photo</span>
            </h1>

            <p className="text-base sm:text-xl text-muted mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Choose from 500+ poses for men and women. AI-powered but realistic results from just one selfie. Generated photos are saved locally on your device.
            </p>

            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
              <a
                href="https://apps.apple.com/us/app/winkypie/id6757441777"
                onClick={() => trackDownloadClick('hero_button')}
                aria-label="Download WinkyPie on the App Store"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-60">Download on the</div>
                  <div className="text-xl font-semibold leading-tight">App Store</div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Private
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Realistic Results
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free to Try
              </span>
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-in">
            <div className="phone-mockup">
              <div className="phone-button-right" style={{ top: '8rem', height: '3rem' }} />
              <div className="phone-button-left" style={{ top: '5.5rem', height: '1.5rem' }} />
              <div className="phone-button-left" style={{ top: '8rem', height: '2.5rem' }} />
              <div className="phone-button-left" style={{ top: '11rem', height: '2.5rem' }} />
              <div className="phone-screen w-55 h-110 sm:w-70 sm:h-140 relative">
                <video
                  ref={videoRef}
                  src="/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
