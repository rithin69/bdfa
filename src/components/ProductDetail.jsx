import React, { useEffect, useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { productData } from '../data/productData'
import useResponsive from '../hooks/useResponsive'

function getRelatedProducts(currentSlug, categoryId) {
  return Object.entries(productData)
    .filter(([slug, p]) => slug !== currentSlug && p.categoryId === categoryId)
    .slice(0, 4)
    .map(([slug, p]) => ({ slug, name: p.name, heroImage: p.heroImage, category: p.category }))
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { isMobile } = useResponsive()
  const product = productData[slug]
  const [activeImage, setActiveImage] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)
  const toggleFaq = useCallback((i) => setOpenFaq(prev => prev === i ? null : i), [])

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', background: '#F7F4F0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
        <h1 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 600, margin: 0 }}>
          Product Not Found
        </h1>
        <p style={{ color: '#1C2B2B', fontSize: '15px', margin: 0 }}>This product doesn't exist or the link may be incorrect.</p>
        <Link
          to="/products"
          style={{ background: '#0ABAB5', padding: '14px 32px', color: '#F7F4F0', fontSize: '11px', letterSpacing: '2.5px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}
        >
          Back to Products
        </Link>
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} | BDF Architectural`} />
        <meta name="twitter:description" content={product.description.slice(0, 160)} />
        <meta name="twitter:image" content={`https://www.bdfa.uk${product.heroImage}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": `https://www.bdfa.uk${product.heroImage}`,
          "brand": { "@type": "Brand", "name": "BDF Architectural" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "6",
            "bestRating": "5",
            "worstRating": "1"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": product.categoryId === 'bifold' ? "2500" : product.categoryId === 'sliding' ? "2000" : product.categoryId === 'entrance' ? "1500" : product.categoryId === 'windows' ? "800" : product.categoryId === 'roof' ? "1500" : "800",
            "priceCurrency": "GBP",
            "priceValidUntil": "2026-12-31",
            "url": `https://www.bdfa.uk/products/${slug}`,
            "seller": { "@type": "Organization", "name": "BDF Architectural" },
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "GBP"
              },
              "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "GB"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 14,
                  "maxValue": 42,
                  "unitCode": "DAY"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 1,
                  "maxValue": 3,
                  "unitCode": "DAY"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "GB",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 14,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `Do you install ${product.name}?`,
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, BDF Architectural offers full supply and professional installation across the UK. Our experienced team handles everything from survey to completion." }
            },
            {
              "@type": "Question",
              "name": `Are your ${product.name} made to measure?`,
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, every product is manufactured to your exact specifications. We offer bespoke sizing to fit any opening, whether standard or non-standard." }
            },
            {
              "@type": "Question",
              "name": `What colours are available for ${product.name}?`,
              "acceptedAnswer": { "@type": "Answer", "text": "We offer a wide range of powder-coated finishes including anthracite grey, white, black, and dual-colour options. RAL colours are available on request." }
            },
            {
              "@type": "Question",
              "name": `What warranty do you offer on ${product.name}?`,
              "acceptedAnswer": { "@type": "Answer", "text": "All our products come with a comprehensive manufacturer's warranty. Contact us for specific warranty details for this product." }
            },
            {
              "@type": "Question",
              "name": "How do I get a quote?",
              "acceptedAnswer": { "@type": "Answer", "text": "You can get a free, no-obligation quote by filling in our contact form, using the Free Quote button on our website, or calling us on 01895 439 199 or freephone 0800 999 5575." }
            }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bdfa.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.bdfa.uk/products" },
            { "@type": "ListItem", "position": 3, "name": product.category, "item": `https://www.bdfa.uk/products#${product.category?.toLowerCase()}` },
            { "@type": "ListItem", "position": 4, "name": product.name, "item": `https://www.bdfa.uk/products/${slug}` }
          ]
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
          .faq-section {
            padding: 0 0 !important;
          }
        }
        .faq-item {
          border-bottom: 1px solid rgba(10,186,181,0.2);
        }
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          text-align: left;
          font-family: inherit;
          gap: 16px;
        }
        .faq-question:hover .faq-question-text {
          color: #0ABAB5;
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
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
                <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '12px', background: '#f0eeeb', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '220px', maxHeight: '420px' }}>
                  <img
                    src={allImages[activeImage]}
                    alt={`${product.name} ${activeImage + 1}`}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'contain', display: 'block', transition: 'all 0.4s ease' }}
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
                        <img src={img} alt={`${product.name} view ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/* ── FAQ Section ── */}
        {(() => {
          const faqs = [
            {
              q: `Do you install ${product.name}?`,
              a: 'Yes, BDF Architectural offers full supply and professional installation across the UK. Our experienced team handles everything from survey to completion, ensuring a perfect, long-lasting fit.'
            },
            {
              q: `Are your ${product.name} made to measure?`,
              a: 'Absolutely. Every product is manufactured to your exact specifications. We offer bespoke sizing to fit any opening, whether standard or non-standard — no matter how complex the shape or dimensions.'
            },
            {
              q: `What colours are available for ${product.name}?`,
              a: 'We offer a wide range of powder-coated finishes including anthracite grey, white, black, and dual-colour options. All standard RAL colours are available on request, giving you complete creative control over your project.'
            },
            {
              q: `What warranty do you offer on ${product.name}?`,
              a: 'All our products come with a comprehensive manufacturer\'s warranty. Our aluminium frames and hardware are built to last decades with minimal maintenance. Contact us for specific warranty terms for this product.'
            },
            {
              q: 'How long does installation take?',
              a: 'Most residential installations are completed within one to two days. Larger commercial or multi-product projects may take longer. We\'ll give you a clear timeline when we survey your property and provide your quote.'
            },
            {
              q: 'How do I get a quote?',
              a: 'Getting a quote is simple and free. Fill in our online contact form, click the Free Quote button on our website, or call us directly on 01895 439 199 or freephone 0800 999 5575. We\'ll arrange a survey at a time convenient for you.'
            },
          ]
          return (
            <section className="faq-section" style={{ marginTop: '80px', marginBottom: '0' }} aria-label="Frequently Asked Questions">
              <h2 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 600, margin: '0 0 8px' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: '#555', fontSize: '14px', margin: '0 0 32px', lineHeight: 1.6 }}>
                Everything you need to know about our {product.name}.
              </p>
              <div style={{ borderTop: '1px solid rgba(10,186,181,0.2)' }}>
                {faqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="faq-question-text" style={{
                        fontSize: '15px', fontWeight: 600, color: openFaq === i ? '#0ABAB5' : '#1C2B2B',
                        lineHeight: 1.5, transition: 'color 0.2s',
                      }}>
                        {faq.q}
                      </span>
                      <span style={{
                        flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%',
                        background: openFaq === i ? '#0ABAB5' : 'rgba(10,186,181,0.1)',
                        border: '1.5px solid #0ABAB5',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.25s',
                      }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s' }}>
                          <path d="M6 1V11M1 6H11" stroke={openFaq === i ? '#F7F4F0' : '#0ABAB5'} strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <div
                      className="faq-answer"
                      style={{ maxHeight: openFaq === i ? '300px' : '0', paddingBottom: openFaq === i ? '20px' : '0' }}
                    >
                      <p style={{ color: '#444', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })()}

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
            <Link
              to="/products"
              style={{
                border: '1.5px solid #0ABAB5', background: 'transparent', color: '#0ABAB5',
                padding: '14px 28px', fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700,
                textTransform: 'uppercase', transition: 'all 0.25s', textDecoration: 'none', display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0ABAB5'; e.currentTarget.style.color = '#F7F4F0' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0ABAB5' }}
            >
              All Products
            </Link>
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
        {/* ── Related Products ── */}
        {(() => {
          const related = getRelatedProducts(slug, product.categoryId)
          if (!related.length) return null
          return (
            <section style={{ marginTop: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <div style={{ width: '32px', height: '1px', background: '#0ABAB5' }} />
                <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#0ABAB5', fontWeight: 700, textTransform: 'uppercase' }}>
                  You Might Also Like
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
                {related.map(p => (
                  <Link
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    style={{ textDecoration: 'none', display: 'block', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(10,186,181,0.15)', background: '#fff', transition: 'transform 0.25s, box-shadow 0.25s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(10,186,181,0.12)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div style={{ height: '140px', overflow: 'hidden', background: '#f0eeeb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={p.heroImage}
                        alt={p.name}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transition: 'transform 0.4s' }}
                      />
                    </div>
                    <div style={{ padding: '14px 16px' }}>
                      <p style={{ color: '#0ABAB5', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 4px' }}>
                        {p.category}
                      </p>
                      <h3 style={{ color: '#1C2B2B', fontSize: '13px', fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                        {p.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })()}

      </div>
    </div>
  )
}
