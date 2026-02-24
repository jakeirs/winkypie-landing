import Link from 'next/link'

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl sm:text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Page not found</h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center btn-gradient text-white font-semibold px-6 py-3 rounded-full"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
