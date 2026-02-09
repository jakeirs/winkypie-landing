import Link from 'next/link'

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

export const metadata = {
  title: 'Support | WinkyPie',
  description: 'Get help and support for WinkyPie app.',
}

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Support</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted">
            <p>
              Need help with WinkyPie? We&apos;re here to assist you. Below you&apos;ll find answers to common
              questions and ways to reach our support team.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Common Issues</h2>

            <div className="space-y-4">
              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">App won&apos;t generate photos</h3>
                <p className="text-sm">Make sure you have a stable internet connection and have granted the app camera permissions.</p>
              </div>

              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Photos look distorted</h3>
                <p className="text-sm">Try using a clear, well-lit selfie with your face clearly visible. Avoid photos with filters or heavy makeup.</p>
              </div>

              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Subscription issues</h3>
                <p className="text-sm">Manage your subscription through the App Store (iOS) or Google Play Store (Android). Contact us if you need further assistance.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Support</h2>
            <p>
              For additional help, please email us at <a href="mailto:support@winkypie.com" className="text-primary hover:underline">support@winkypie.com</a>
            </p>
            <p>
              We typically respond within 24-48 hours.
            </p>

            <div className="mt-12">
              <Link href="/" className="text-primary hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
