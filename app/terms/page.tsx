import Link from 'next/link'

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

export const metadata = {
  title: 'Terms of Service | WinkyPie',
  description: 'Terms of Service for WinkyPie app.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted">
            <p>Last updated: January 2025</p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using WinkyPie, you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our app.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Use of Service</h2>
            <p>
              WinkyPie provides AI-powered photo transformation services. You agree to use the service
              only for lawful purposes and in accordance with these terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Content</h2>
            <p>
              You retain ownership of all photos you upload and generate. You are responsible for ensuring
              you have the rights to any content you upload to the app.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Subscriptions</h2>
            <p>
              Premium features require a subscription. Subscriptions auto-renew unless cancelled.
              You can manage your subscription through your device&apos;s app store.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              WinkyPie is provided &quot;as is&quot; without warranties of any kind. We are not liable for any
              damages arising from your use of the app.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at legal@winkypie.com
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
