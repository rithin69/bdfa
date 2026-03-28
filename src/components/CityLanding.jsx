import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { cities } from '../data/cityData'
import useResponsive from '../hooks/useResponsive'

const products = [
  { name: 'Bifold Doors', slug: 'aluminium-bifold-doors', icon: '🪟' },
  { name: 'Sliding Doors', slug: 'aluminium-sliding-doors', icon: '🚪' },
  { name: 'Aluminium Windows', slug: 'aluminium-windows', icon: '🏠' },
  { name: 'Skylights', slug: 'skylights-roof-lights', icon: '☀️' },
  { name: 'Winter Gardens', slug: 'winter-gardens', icon: '🌿' },
  { name: 'Entrance Doors', slug: 'aluminium-entrance-doors', icon: '🔑' },
]

export default function CityLanding() {
  const { city: citySlug } = useParams()
  const navigate = useNavigate()
  const { isMobile } = useResponsive()
  const city = cities.find(c => c.slug === citySlug)

  if (!city) {
    return (
      <div style={{ minHeight: '100vh', background: '#F7F4F0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
        <h1 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 600, margin: 0 }}>Area Not Found</h1>
        <button onClick={() => navigate('/')} style={{ background: '#0ABAB5', border: 'none', padding: '14px 32px', color: '#1C2B2B', fontSize: '11px', letterSpacing: '2.5px', fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase' }}>
          Back to Home
        </button>
      </div>
    )
  }

  const title = `Bifold Doors ${city.name} | Sliding Doors & Windows | BDF Architectural`
  const metaDesc = `BDF Architectural supplies and installs premium bifold doors, sliding doors, aluminium windows and skylights in ${city.name}. Free quote: 01895 439 199.`

  return (
    <div style={{ background: '#F7F4F0', minHeight: '100vh' }}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`https://www.bdfa.uk/areas/${city.slug}`} />
        <meta property="og:url" content={`https://www.bdfa.uk/areas/${city.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={`https://www.bdfa.uk${city.heroImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={`https://www.bdfa.uk${city.heroImage}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "BDF Architectural",
          "url": "https://www.bdfa.uk",
          "telephone": "+441895439199",
          "description": metaDesc,
          "areaServed": city.name,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bingley, The Common",
            "addressLocality": "West Drayton",
            "addressRegion": "Middlesex",
            "postalCode": "UB7 7HQ",
            "addressCountry": "GB"
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bdfa.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Areas We Cover", "item": "https://www.bdfa.uk/areas" },
            { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://www.bdfa.uk/areas/${city.slug}` }
          ]
        })}</script>
      </Helmet>

      {/* Hero */}
      <div style={{ position: 'relative', height: isMobile ? '360px' : '480px', overflow: 'hidden' }}>
        <img
          src={city.heroImage}
          alt={`Bifold Doors ${city.name}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,43,43,0.55) 0%, rgba(28,43,43,0.75) 100%)' }} />
        <div style={{ position: 'absolute', bottom: isMobile ? '32px' : '56px', left: isMobile ? '20px' : '64px', right: isMobile ? '20px' : '64px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'rgba(247,244,240,0.8)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(247,244,240,0.4)' }}>›</span>
            <span style={{ color: '#0ABAB5' }}>Areas We Cover</span>
            <span style={{ color: 'rgba(247,244,240,0.4)' }}>›</span>
            <span style={{ color: '#F7F4F0' }}>{city.name}</span>
          </nav>
          <p style={{ color: '#0ABAB5', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 12px' }}>
            Bifold Doors & Windows
          </p>
          <h1 style={{ color: '#F7F4F0', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 600, margin: 0, lineHeight: 1.15 }}>
            {city.name}
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '48px 16px 80px' : '72px 64px 100px' }}>

        {/* Intro */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '64px', alignItems: 'start', marginBottom: '80px' }}>
          <div>
            <h2 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 600, margin: '0 0 20px', lineHeight: 1.3 }}>
              Premium Bifold Doors & Glazing in {city.name}
            </h2>
            <p style={{ color: '#444', fontSize: '15px', lineHeight: 1.85, margin: '0 0 24px' }}>
              {city.description}
            </p>
            <p style={{ color: '#444', fontSize: '15px', lineHeight: 1.85, margin: '0 0 32px' }}>
              {city.nearbyNote} We offer free surveys, bespoke measurements, and a full supply-and-install service. All our aluminium systems are manufactured to order and installed by our experienced, directly employed teams.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{ background: '#0ABAB5', color: '#1C2B2B', padding: '14px 28px', fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:01895439199"
                style={{ border: '1.5px solid #0ABAB5', color: '#0ABAB5', padding: '14px 28px', fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}
              >
                01895 439 199
              </a>
            </div>
          </div>

          {/* Key areas */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(10,186,181,0.2)' }}>
            <h3 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 600, margin: '0 0 20px' }}>
              Areas We Cover in {city.name}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {city.keyAreas.map(area => (
                <span key={area} style={{ background: 'rgba(10,186,181,0.08)', border: '1px solid rgba(10,186,181,0.25)', color: '#1C2B2B', fontSize: '12px', padding: '6px 14px', borderRadius: '20px' }}>
                  {area}
                </span>
              ))}
            </div>
            <p style={{ color: '#888', fontSize: '12px', marginTop: '20px', marginBottom: 0, lineHeight: 1.6 }}>
              Not listed? We cover all areas across {city.region}. Contact us to check availability in your area.
            </p>
          </div>
        </div>

        {/* Products */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 600, margin: '0 0 8px', textAlign: 'center' }}>
            Our Products in {city.name}
          </h2>
          <p style={{ color: '#666', fontSize: '14px', textAlign: 'center', margin: '0 0 40px' }}>
            Every product is bespoke, made to measure, and installed by our expert teams.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
            {products.map(prod => (
              <Link
                key={prod.slug}
                to={`/products/${prod.slug}`}
                style={{
                  textDecoration: 'none', background: '#fff', borderRadius: '12px', padding: '24px',
                  border: '1px solid rgba(10,186,181,0.15)', textAlign: 'center',
                  transition: 'box-shadow 0.25s, transform 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(10,186,181,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
              >
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{prod.icon}</div>
                <h3 style={{ color: '#1C2B2B', fontSize: '14px', fontWeight: 600, margin: '0 0 4px' }}>{prod.name}</h3>
                <p style={{ color: '#0ABAB5', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>in {city.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Why BDF */}
        <div style={{ background: '#1C2B2B', borderRadius: '16px', padding: isMobile ? '40px 24px' : '56px 64px' }}>
          <h2 style={{ color: '#F7F4F0', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 600, margin: '0 0 12px', textAlign: 'center' }}>
            Why Choose BDF Architectural in {city.name}?
          </h2>
          <p style={{ color: 'rgba(247,244,240,0.6)', fontSize: '14px', textAlign: 'center', margin: '0 0 40px' }}>
            Over a decade of experience. Thousands of satisfied customers across the UK.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { title: 'Free Survey & Quote', body: 'We visit your property, take precise measurements, and provide a detailed, no-obligation quote at no charge.' },
              { title: 'Supply & Install', body: 'Our directly employed teams handle everything from delivery to installation, ensuring a perfect result every time.' },
              { title: 'Premium Systems', body: 'We supply Schuco, Cortizo, and other market-leading aluminium systems — the same products used on prestige commercial projects.' },
              { title: 'Bespoke Made to Measure', body: 'Every product is manufactured to your exact specifications. No standard sizes — everything is built for your opening.' },
              { title: 'Aftersales Support', body: 'We are here after installation too. All our work is fully guaranteed and we offer comprehensive aftercare support.' },
              { title: 'Trusted Reviews', body: 'Our 5-star reviews reflect our commitment to quality, craftsmanship, and customer service on every project.' },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ width: '36px', height: '3px', background: '#0ABAB5', marginBottom: '14px' }} />
                <h3 style={{ color: '#F7F4F0', fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(247,244,240,0.65)', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              to="/contact"
              style={{ background: '#0ABAB5', color: '#1C2B2B', padding: '16px 40px', fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}
            >
              Get a Free Quote in {city.name}
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
