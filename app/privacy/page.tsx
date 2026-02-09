import Link from 'next/link'

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

export const metadata = {
  title: 'Privacy Policy | WinkyPie',
  description: 'Privacy Policy for WinkyPie app.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted">
            <p>Last updated: January 2025</p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to WinkyPie. We respect your privacy and are committed to protecting your personal data.
              This privacy policy explains how we handle your information when you use our app.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Data We Collect</h2>
            <p>
              WinkyPie is designed with privacy in mind. Your photos are processed and stored locally on your device.
              We do not upload, access, or store your images on our servers.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Data</h2>
            <p>
              The only data we collect is anonymous usage analytics to improve our app.
              This includes app performance metrics and feature usage statistics.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data at any time.
              Since photos are stored locally, you have full control over them.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@winkypie.com
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
