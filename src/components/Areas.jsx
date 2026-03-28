import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { cities } from '../data/cityData'
import useResponsive from '../hooks/useResponsive'

export default function Areas() {
  const { isMobile } = useResponsive()

  return (
    <div style={{ background: '#F7F4F0', minHeight: '100vh' }}>
      <Helmet>
        <title>Areas We Cover | Bifold Doors & Windows Across the UK | BDF Architectural</title>
        <meta name="description" content="BDF Architectural supplies and installs bifold doors, sliding doors, aluminium windows and skylights across London, Surrey, Berkshire, Essex, Kent and the UK. Find your area." />
        <link rel="canonical" href="https://www.bdfa.uk/areas" />
        <meta property="og:url" content="https://www.bdfa.uk/areas" />
        <meta property="og:title" content="Areas We Cover | BDF Architectural" />
        <meta property="og:description" content="Premium bifold doors and glazing across London, Surrey, Berkshire, Essex, Kent and the UK." />
        <meta property="og:image" content="https://www.bdfa.uk/products/Cover-Image-00-1920x600.jpg.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Areas We Cover | BDF Architectural" />
        <meta name="twitter:description" content="Premium bifold doors and glazing across London, Surrey, Berkshire, Essex, Kent and the UK." />
        <meta name="twitter:image" content="https://www.bdfa.uk/products/Cover-Image-00-1920x600.jpg.webp" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bdfa.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Areas We Cover", "item": "https://www.bdfa.uk/areas" }
          ]
        })}</script>
      </Helmet>

      {/* Hero */}
      <div style={{ background: '#1C2B2B', padding: isMobile ? '100px 20px 56px' : '120px 64px 72px', textAlign: 'center' }}>
        <p style={{ color: '#0ABAB5', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>
          UK Wide Coverage
        </p>
        <h1 style={{ color: '#F7F4F0', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, margin: '0 0 20px', lineHeight: 1.15 }}>
          Areas We Cover
        </h1>
        <p style={{ color: 'rgba(247,244,240,0.7)', fontSize: '16px', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto' }}>
          Based in West Drayton, Middlesex, BDF Architectural supplies and installs premium bifold doors, sliding doors, aluminium windows and skylights across London and the UK.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '48px 16px 80px' : '72px 64px 100px' }}>

        {/* Area cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          {cities.map(city => (
            <Link
              key={city.slug}
              to={`/areas/${city.slug}`}
              style={{ textDecoration: 'none', display: 'block', position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '240px' }}
              onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.06)'}
              onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
            >
              <img
                src={city.heroImage}
                alt={`Bifold Doors ${city.name}`}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,43,43,0.85) 0%, rgba(28,43,43,0.3) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                <p style={{ color: '#0ABAB5', fontSize: '9px', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 6px' }}>
                  {city.region}
                </p>
                <h2 style={{ color: '#F7F4F0', fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 600, margin: '0 0 8px', lineHeight: 1.2 }}>
                  {city.name}
                </h2>
                <span style={{ color: '#0ABAB5', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  View Area
                  <svg width="12" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5H13M9 1L13 5L9 9" stroke="#0ABAB5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* "Don't see your area?" CTA */}
        <div style={{ background: '#1C2B2B', borderRadius: '16px', padding: isMobile ? '40px 24px' : '56px 64px', textAlign: 'center' }}>
          <h2 style={{ color: '#F7F4F0', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 600, margin: '0 0 16px' }}>
            Don't See Your Area?
          </h2>
          <p style={{ color: 'rgba(247,244,240,0.65)', fontSize: '15px', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto 32px' }}>
            We cover the whole of the UK. If your area isn't listed above, contact us and we'll let you know if we can help with your project.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#0ABAB5', color: '#1C2B2B', padding: '14px 32px', fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
              Contact Us
            </Link>
            <a href="tel:01895439199" style={{ border: '1.5px solid rgba(247,244,240,0.3)', color: '#F7F4F0', padding: '14px 32px', fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
              01895 439 199
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
