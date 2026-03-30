import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | BDF Architectural</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-8xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg opacity-70 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-gold text-bdf-black px-8 py-3 font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>
    </>
  )
}
