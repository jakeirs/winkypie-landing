'use client'

import { useRef, useEffect } from 'react'

import Button from '@/components/ui/Button/Button'

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
              One selfie is enough. Pick a pose, generate magic, and own the spotlight.
              Your photos stay private on your device.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <Button href="#download" size="lg">
                Download Free
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-muted">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free to Try</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-in">
            <div className="phone-mockup">
              <div className="phone-screen w-55 h-110 sm:w-70 sm:h-140 relative">
                <video
                  ref={videoRef}
                  src="/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
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
