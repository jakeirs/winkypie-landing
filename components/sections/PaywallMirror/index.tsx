import AppStoreBadge from '@/components/ui/AppStoreBadge/AppStoreBadge'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

export function PaywallMirror() {
  return (
    <section id="download" className="px-4 py-14 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll animation="scale-in">
          <div className="animated-border-card shadow-2xl">
            <div className="animated-border-card-inner">
              <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center">
                <h2 className="font-serif text-white text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-semibold tracking-tight mb-5">
                  Be the right{' '}
                  <em className="gradient-text">swipe</em>.
                </h2>

                <p className="text-white/85 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed max-w-2xl mx-auto mb-9">
                  One selfie. ~30 seconds. Pick from 300+ pro poses — or upload your own
                  reference. AI photos that match what dating apps actually reward.
                </p>

                <div className="flex justify-center mb-5">
                  <AppStoreBadge trackingLabel="paywall_badge" size="md" variant="light" />
                </div>

                <p className="text-white/70 text-[12px] sm:text-[13px] max-w-md mx-auto leading-relaxed">
                  Free trial available in-app. Manage or cancel anytime in your App Store
                  account settings.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
