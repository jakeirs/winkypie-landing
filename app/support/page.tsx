import type { Metadata } from 'next'
import Link from 'next/link'

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

export const metadata: Metadata = {
  title: 'Support | WinkyPie',
  description: 'Get help and support for the WinkyPie app. Contact our support team or find answers to frequently asked questions.',
}

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">&#128521;</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">WinkyPie Support</h1>
            <p className="text-muted text-lg">We&apos;re here to help!</p>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-center mb-10">
            <h2 className="text-foreground text-xl font-semibold mb-4">Contact Our Support Team</h2>
            <a
              href="mailto:winkypie.app@gmail.com"
              className="inline-block bg-foreground text-background px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              winkypie.app@gmail.com
            </a>
          </div>

          <h2 className="text-2xl font-semibold text-foreground mb-4">How Can We Help?</h2>
          <p className="text-muted mb-4">Our support team is available to assist you with:</p>
          <ul className="text-muted mb-10 pl-6 space-y-2">
            <li>Account and subscription questions</li>
            <li>Technical issues with the app</li>
            <li>Photo generation problems</li>
            <li>Billing and payment inquiries</li>
            <li>Feature requests and feedback</li>
            <li>Privacy and data concerns</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="bg-card rounded-xl p-6 mb-10 space-y-0">
            <div className="pb-4 mb-4 border-b border-border">
              <strong className="text-foreground block mb-1">How do I cancel my subscription?</strong>
              <p className="text-muted text-sm m-0">You can manage your subscription through your device&apos;s App Store settings. Go to Settings &gt; [Your Name] &gt; Subscriptions on iOS.</p>
            </div>
            <div className="pb-4 mb-4 border-b border-border">
              <strong className="text-foreground block mb-1">How do I restore my purchases?</strong>
              <p className="text-muted text-sm m-0">Open WinkyPie, go to Settings, and tap &quot;Restore Purchases&quot; to restore any previous subscriptions.</p>
            </div>
            <div className="pb-4 mb-4 border-b border-border">
              <strong className="text-foreground block mb-1">How do I delete my account?</strong>
              <p className="text-muted text-sm m-0">You can delete your account from the Settings screen in the app. This will permanently remove all your data.</p>
            </div>
            <div>
              <strong className="text-foreground block mb-1">Is my data secure?</strong>
              <p className="text-muted text-sm m-0">Yes! Your selfie is securely sent to our AI service for generation only and automatically deleted from servers within 7 days. Generated photos are saved locally on your device. Read our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for details.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Response Time</h2>
          <p className="text-muted mb-10">We typically respond to support requests within 24-48 hours during business days. For urgent issues, please include &quot;URGENT&quot; in your email subject line.</p>

          <div className="text-center pt-6 border-t border-border">
            <Link href="/" className="text-primary hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
