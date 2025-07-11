'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-8">We're sorry, but something unexpected happened.</p>
        <button
          onClick={reset}
          className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors mr-4"
        >
          Try again
        </button>
        <a 
          href="/" 
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  )
} 