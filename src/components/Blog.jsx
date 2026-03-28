import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import useResponsive from '../hooks/useResponsive'

export default function Blog() {
  const { isMobile } = useResponsive()

  return (
    <div style={{ background: '#F7F4F0', minHeight: '100vh' }}>
      <Helmet>
        <title>Blog & Guides | Bifold Doors, Windows & Glazing | BDF Architectural</title>
        <meta name="description" content="Expert guides on bifold doors, sliding doors, aluminium windows and glazing from BDF Architectural. Covering costs, comparisons, installation and more." />
        <link rel="canonical" href="https://www.bdfa.uk/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bdfa.uk/blog" />
        <meta property="og:title" content="Blog & Guides | BDF Architectural" />
        <meta property="og:description" content="Expert guides on bifold doors, sliding doors, aluminium windows and glazing." />
        <meta property="og:image" content="https://www.bdfa.uk/products/Cover-Image-00-1920x600.jpg.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog & Guides | BDF Architectural" />
        <meta name="twitter:description" content="Expert guides on bifold doors, sliding doors, aluminium windows and glazing." />
        <meta name="twitter:image" content="https://www.bdfa.uk/products/Cover-Image-00-1920x600.jpg.webp" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "BDF Architectural Blog",
          "url": "https://www.bdfa.uk/blog",
          "description": "Expert guides on bifold doors, sliding doors, aluminium windows and glazing",
          "publisher": {
            "@type": "Organization",
            "name": "BDF Architectural",
            "url": "https://www.bdfa.uk",
            "logo": { "@type": "ImageObject", "url": "https://www.bdfa.uk/logo.png" }
          }
        })}</script>
      </Helmet>

      {/* Hero */}
      <div style={{
        background: '#1C2B2B', padding: isMobile ? '100px 20px 56px' : '120px 64px 72px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#0ABAB5', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>
          Knowledge Hub
        </p>
        <h1 style={{ color: '#F7F4F0', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, margin: '0 0 16px', lineHeight: 1.15 }}>
          Blog & Guides
        </h1>
        <p style={{ color: 'rgba(247,244,240,0.7)', fontSize: '16px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
          Expert advice on bifold doors, sliding doors, aluminium windows and everything in between.
        </p>
      </div>

      {/* Posts grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '48px 16px 80px' : '72px 64px 100px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '32px',
        }}>
          {blogPosts.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(10,186,181,0.15)', transition: 'box-shadow 0.25s, transform 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(10,186,181,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={post.heroImage}
                  alt={post.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ background: 'rgba(10,186,181,0.1)', color: '#0ABAB5', fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#999', fontSize: '11px' }}>
                    {new Date(post.publishDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <h2 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 600, margin: '0 0 12px', lineHeight: 1.4 }}>
                  {post.title}
                </h2>
                <p style={{ color: '#555', fontSize: '13px', lineHeight: 1.7, margin: '0 0 20px', flex: 1 }}>
                  {post.excerpt}
                </p>
                <span style={{ color: '#0ABAB5', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Read More
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5H13M9 1L13 5L9 9" stroke="#0ABAB5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
