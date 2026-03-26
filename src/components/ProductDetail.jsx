import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { productData } from '../data/productData'
import useResponsive from '../hooks/useResponsive'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { isMobile } = useResponsive()
  const product = productData[slug]
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', background: '#F7F4F0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
        <h1 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 600, margin: 0 }}>
          Product Not Found
        </h1>
        <p style={{ color: '#1C2B2B', fontSize: '15px', margin: 0 }}>This product doesn't exist or the link may be incorrect.</p>
        <button
          onClick={() => navigate('/products')}
          style={{ background: '#0ABAB5', border: 'none', padding: '14px 32px', color: '#F7F4F0', fontSize: '11px', letterSpacing: '2.5px', fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase' }}
        >
          Back to Products
        </button>
      </div>
    )
  }

  const allImages = Array.from(
    new Set([product.heroImage, ...(product.gallery || [])].filter(Boolean))
  )

  useEffect(() => {
    setActiveImage(0)
  }, [slug])

  return (
    <div style={{ background: '#F7F4F0', minHeight: '100vh' }}>
      <Helmet>
        <title>{product.name} | BDF Architectural</title>
        <meta name="description" content={product.description.slice(0, 160)} />
        <link rel="canonical" href={`https://www.bdfa.uk/products/${slug}`} />
        <meta property="og:url" content={`https://www.bdfa.uk/products/${slug}`} />
        <meta property="og:title" content={`${product.name} | BDF Architectural`} />
        <meta property="og:description" content={product.description.slice(0, 160)} />
        <meta property="og:image" content={`https://www.bdfa.uk${product.heroImage}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": `https://www.bdfa.uk${product.heroImage}`,
          "brand": { "@type": "Brand", "name": "BDF Architectural" },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "GBP",
            "seller": { "@type": "Organization", "name": "BDF Architectural" }
          }
        })}</script>
      </Helmet>
      <style>{`
        @media (max-width: 768px) {
          .product-detail-main,
          .product-detail-breadcrumb,
          .product-detail-title {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .product-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .product-detail-hero {
            height: 420px !important;
          }
          .product-detail-spec-row {
            flex-direction: column !important;
          }
          .product-detail-spec-label {
            width: 100% !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(10,186,181,0.2) !important;
          }
          .product-detail-cta-actions {
            width: 100%;
            flex-direction: column;
          }
          .product-detail-cta-actions button {
            width: 100%;
          }
          .product-detail-cta {
            padding: 32px 20px !important;
          }
        }
      `}</style>

      {/* ── Hero ── */}
      <div className="product-detail-hero" style={{ position: 'relative', width: '100%', height: '500px' }}>
        <img
          src={product.heroImage || allImages[0]}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Dark overlay for readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,43,43,0.65) 0%, rgba(28,43,43,0.45) 50%, rgba(28,43,43,0.7) 100%)' }} />

        {/* Breadcrumb */}
        <div className="product-detail-breadcrumb" style={{ position: 'absolute', top: 0, left: 0, right: 0, paddingTop: isMobile ? '84px' : '96px', paddingLeft: '64px', paddingRight: '64px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: isMobile ? '9px' : '10px', letterSpacing: isMobile ? '1px' : '2px', textTransform: 'uppercase', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'rgba(247,244,240,0.85)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(247,244,240,0.5)' }}>›</span>
            <Link to="/products" style={{ color: 'rgba(247,244,240,0.85)', textDecoration: 'none' }}>Products</Link>
            <span style={{ color: 'rgba(247,244,240,0.5)' }}>›</span>
            <span style={{ color: 'rgba(247,244,240,0.85)' }}>{product.category}</span>
            <span style={{ color: 'rgba(247,244,240,0.5)' }}>›</span>
            <span style={{ color: '#F7F4F0' }}>{product.name}</span>
          </nav>
        </div>

        {/* Title */}
        <div className="product-detail-title" style={{ position: 'absolute', bottom: isMobile ? '32px' : '48px', left: '64px', right: '64px' }}>
          <p style={{ color: '#0ABAB5', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 10px', fontWeight: 600 }}>
            {product.category}
          </p>
          <h1 style={{ color: '#F7F4F0', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 600, margin: 0, lineHeight: 1.15 }}>
            {product.name}
          </h1>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="product-detail-main" style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '48px 16px' : '72px 64px' }}>
        <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* Left: Description + Features */}
          <div>
            <h2 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: 600, margin: '0 0 20px' }}>
              Overview
            </h2>
            <p style={{ color: '#1C2B2B', fontSize: '15px', lineHeight: 1.85, margin: '0 0 48px' }}>
              {product.description}
            </p>

            {product.features && product.features.length > 0 && (
              <>
                <h2 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: 600, margin: '0 0 20px' }}>
                  Key Features
                </h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <span style={{
                        marginTop: '3px', flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                        background: 'rgba(10,186,181,0.12)', border: '1.5px solid #0ABAB5',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#0ABAB5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span style={{ color: '#1C2B2B', fontSize: '14px', lineHeight: 1.7 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Right: Gallery + Specs */}
          <div>
            {/* Gallery */}
            {allImages.length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', height: '320px', marginBottom: '12px' }}>
                  <img
                    src={allImages[activeImage]}
                    alt={`${product.name} ${activeImage + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'all 0.4s ease' }}
                  />
                </div>
                {allImages.length > 1 && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {allImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        style={{
                          width: '72px', height: '54px', borderRadius: '8px', overflow: 'hidden',
                          border: i === activeImage ? '2px solid #0ABAB5' : '2px solid transparent',
                          opacity: i === activeImage ? 1 : 0.55,
                          cursor: 'pointer', padding: 0, transition: 'all 0.2s ease', flexShrink: 0,
                        }}
                      >
                        <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Specs */}
            {product.specs && product.specs.length > 0 && (
              <>
                <h2 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: 600, margin: '0 0 20px' }}>
                  Specifications
                </h2>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(10,186,181,0.3)' }}>
                  {product.specs.map((s, i) => (
                    <div
                      className="product-detail-spec-row"
                      key={i}
                      style={{
                        display: 'flex',
                        borderBottom: i < product.specs.length - 1 ? '1px solid rgba(10,186,181,0.2)' : 'none',
                      }}
                    >
                      <div className="product-detail-spec-label" style={{
                        padding: '13px 16px', fontSize: '11px', fontWeight: 700, letterSpacing: '1px',
                        textTransform: 'uppercase', flexShrink: 0, width: '40%',
                        background: 'rgba(10,186,181,0.08)', color: '#0ABAB5',
                        borderRight: '1px solid rgba(10,186,181,0.2)',
                      }}>
                        {s.label}
                      </div>
                      <div style={{ padding: '13px 16px', fontSize: '13px', color: '#1C2B2B', flex: 1, lineHeight: 1.5 }}>
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="product-detail-cta" style={{
          marginTop: '80px', borderRadius: '16px', padding: '56px 64px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap',
          background: 'rgba(10,186,181,0.08)', border: '1px solid rgba(10,186,181,0.3)',
        }}>
          <div>
            <h3 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 600, margin: '0 0 8px' }}>
              Interested in {product.name}?
            </h3>
            <p style={{ color: '#1C2B2B', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>
              Get a free, no-obligation quote tailored to your project. Our team is ready to help.
            </p>
          </div>
          <div className="product-detail-cta-actions" style={{ display: 'flex', gap: '16px', flexShrink: 0, flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/products')}
              style={{
                border: '1.5px solid #0ABAB5', background: 'transparent', color: '#0ABAB5',
                padding: '14px 28px', fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700,
                textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0ABAB5'; e.currentTarget.style.color = '#F7F4F0' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0ABAB5' }}
            >
              All Products
            </button>
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: '#0ABAB5', border: 'none', color: '#1C2B2B',
                padding: '14px 28px', fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700,
                textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
