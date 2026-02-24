'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-bold gradient-text mb-4">Oops</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Something went wrong</h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center btn-gradient text-white font-semibold px-6 py-3 rounded-full"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
