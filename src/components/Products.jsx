import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const categories = [
  {
    id: 'bifold',
    num: '01',
    name: 'Bi-Fold Doors',
    tagline: 'Seamlessly connect indoor and outdoor living spaces with our premium aluminium bifold systems. Made to measure, UK-wide installation.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    products: [
      { slug: 'aluminium-bifold-doors', name: 'Aluminium Bifold Doors', desc: 'Slim frames and smooth folding. Ideal for residential or commercial projects. Made to measure, UK-wide installation.' },
      { slug: 'bi-folding-doors-external', name: 'Bi Folding Doors External', desc: 'Weatherproof, secure and energy-efficient. Range of styles available with UK-wide installation.' },
      { slug: 'bi-folding-internal-doors', name: 'Bi Folding Internal Doors', desc: 'Transform your space with internal bifold doors. Made to measure with a full range of styles for homes and businesses.' },
      { slug: '2-panel-bifold-doors', name: '2 Panel Bifold Doors', desc: 'Perfect for small patios or interiors. Slim aluminium and energy-efficient uPVC options available.' },
      { slug: '3-panel-bifold-door', name: '3 Panel Bifold Door', desc: 'Ideal for patios and open-plan homes. Made-to-measure in aluminium or uPVC with UK-wide installation.' },
      { slug: '4-panel-bifold-door', name: '4 Panel Bifold Door', desc: 'For patios and open-plan living. Made-to-measure in aluminium or uPVC with UK-wide installation.' },
      { slug: '5-panel-bifold-door', name: '5 Panel Bifold Door', desc: 'True wall of glass for large openings (3.5–5.5m). Flexible 4+1 or 2+3 configurations, traffic door option available.' },
      { slug: 'schuco-as-fd-7590-hi', name: 'Schuco AS FD 75/90.HI Folding Sliding Door System', desc: 'The newest bifold door system by Schuco — a leading German aluminium systems company, manufactured in the UK.' },
      { slug: 'schuco-ass70hi-bifold-doors', name: 'Schuco ASS70.HI Bifold Doors', desc: 'High-insulated folding door; leaves fold easily inward or outward and slide for a seamless transition.' },
      { slug: 'schuco-cornerless-bifold-doors', name: 'Schuco Cornerless Bifold Doors', desc: 'Ideal for large openings, corner locations, garden spaces and commercial installations including hotels and restaurants.' },
      { slug: 'cortizo-bifold-doors', name: 'Cortizo Bifold Doors', desc: 'Contemporary slim design — perfect for self-builds, renovations or house extensions.' },
      { slug: 'cortizo-bifold-plus-doors', name: 'Cortizo Bifold Plus Doors', desc: 'Premium bifold door system from Cortizo, combining slim sightlines with outstanding thermal performance.' },
      { slug: 'trade-only-bifold-doors', name: 'Trade Only Bifold Doors', desc: 'Supply-only bifold doors from Schuco and Cortizo for professional installers and builders. Competitive pricing, reliable delivery.' },
    ],
  },
  {
    id: 'sliding',
    num: '02',
    name: 'Sliding Doors',
    tagline: 'Slim-line elegance with maximum glass area. Our sliding systems set new standards in thermal insulation, design and comfort.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=85',
    products: [
      { slug: 'schuco-ass-50-sliding-door', name: 'Schuco ASS 50 Sliding Door', desc: 'Thermally insulated sliding and lift-and-slide system with narrow face widths, supporting leaf weights up to 300 kg.' },
      { slug: 'schuco-ase-6080-sliding-doors', name: 'Schuco ASE 60/80 Sliding Doors', desc: 'Sets new standards in thermal insulation, design and comfort for modern residential and commercial projects.' },
      { slug: 'schuco-ass-70-slimline-sliding-door', name: 'Schuco ASS 70 High Insulated Slimline Sliding Door', desc: 'High-insulation lift-and-slide system fulfilling the most stringent energy-saving regulations.' },
      { slug: 'schuco-ass-77-pd-panorama-sliding-doors', name: 'Schuco ASS 77 PD Panorama Sliding Doors', desc: 'Makes large-scale sliding systems with maximum transparency possible — perfect for panoramic views.' },
      { slug: 'cortizo-cor-vision-sliding-doors', name: 'Cortizo Cor Vision Sliding Doors', desc: 'Offers maximum light and is an excellent space-saving installation for modern homes.' },
      { slug: 'cortizo-cor-vision-plus-sliding-doors', name: 'Cortizo Cor Vision Plus Sliding Doors', desc: 'Minimalistic sliding system specifically suitable for large dimensions, allowing maximum luminosity.' },
      { slug: 'trade-only-sliding-doors', name: 'Trade Only Sliding Doors', desc: 'Supply-only sliding doors from top brands for professional trade customers. Reliable delivery and competitive pricing.' },
    ],
  },
  {
    id: 'windows',
    num: '03',
    name: 'Windows',
    tagline: 'High-performance aluminium window systems built for thermal efficiency, security and lasting architectural beauty.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85',
    products: [
      { slug: 'schuco-aws-70-high-insulated-windows', name: 'Schuco AWS 70 High Insulated Windows', desc: 'High-insulation system fulfilling even the most stringent energy-saving regulations for residential and commercial projects.' },
      { slug: 'schuco-aws-70-sc-slimline', name: 'Schuco AWS 70 Sc Slimline', desc: 'Outward-opening window with thermally insulated system aimed at the residential and light commercial market.' },
      { slug: 'schuco-aws-70-tilt-and-turn-windows', name: 'Schuco AWS 70 Aluminium Tilt and Turn Windows', desc: 'New aluminium outward-opening window range with class-leading features based on interchangeable components.' },
      { slug: 'cortizo-sliding-windows', name: 'Cortizo Sliding Windows', desc: 'High-quality aluminium sliding windows; reliable and durable with exceptionally high standards of finish.' },
      { slug: 'cortizo-arch-invisible-tilt-turn-window', name: 'Cortizo Arch Invisible Tilt & Turn Window', desc: 'The first invisible-handle opening tilt and turn window on the market. Slimline with hidden handles and hinges.' },
    ],
  },
  {
    id: 'roof',
    num: '04',
    name: 'Roof Systems',
    tagline: 'Bring floods of natural light into any space with our premium skylight, lantern and winter garden systems.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85',
    products: [
      { slug: 'bdf-lantern-skylight', name: 'BDF Lantern Skylight', desc: 'Slim and elegant roof profile with excellent thermal performance — beautifully designed to maximise natural light.' },
      { slug: 'bdf-flat-sky-light', name: 'BDF Flat Sky Light', desc: 'Manufactured to the highest standard. Glazed edge to edge for minimalist styling; taped and bonded for complete weather tightness.' },
      { slug: 'schuco-cmc-50-hi-winter-gardens', name: 'Schuco CMC 50 HI Winter Gardens', desc: 'Conservatory system with components perfectly matched to one another; individually tailored to the style of your home.' },
      { slug: 'architectural-glass-structural-glazing', name: 'Architectural Glass & Structural Glazing', desc: 'Completely flush-fitted design providing architecturally high-quality solutions using BDF structural glazing systems.' },
    ],
  },
  {
    id: 'entrance',
    num: '05',
    name: 'Entrance Doors',
    tagline: 'Make a lasting first impression with our architectural entrance door collection — combining security, insulation and stunning design.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=85',
    products: [
      { slug: 'schuco-front-doors', name: 'Schuco Front Doors', desc: 'Contemporary range with stunning designs. Highest thermal insulation values with full protection against wind, water and severe weather.' },
      { slug: 'cortizo-entrance-doors', name: 'Cortizo Entrance Doors', desc: 'Premium entrance doors from Cortizo aluminium systems, combining slim sightlines with exceptional performance.' },
      { slug: 'bdf-glazed-and-commercial-doors', name: 'BDF Glazed and Commercial Doors', desc: 'Glazed and commercial door solutions from BDF — ideal for offices, retail spaces and high-end commercial projects.' },
    ],
  },
]

function ProductRow({ product, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px',
        padding: '16px 20px', width: '100%', textAlign: 'left', cursor: 'pointer', border: 'none',
        borderLeft: `3px solid ${hovered ? '#0ABAB5' : 'rgba(10,186,181,0.25)'}`,
        background: hovered ? 'rgba(10,186,181,0.06)' : 'rgba(28,43,43,0.03)',
        transition: 'all 0.25s ease', fontFamily: 'ErasMedium, sans-serif',
        marginBottom: '2px',
      }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '12.5px', color: '#1C2B2B', fontWeight: 700, lineHeight: 1.4, marginBottom: product.desc ? '5px' : 0 }}>
          {product.name}
        </div>
        {product.desc && (
          <div style={{ fontSize: '11px', color: 'rgba(28,43,43,0.6)', lineHeight: 1.6 }}>
            {product.desc}
          </div>
        )}
      </div>
      <svg style={{ flexShrink: 0, marginTop: '3px', opacity: hovered ? 1 : 0.3, transition: 'opacity 0.25s, transform 0.25s', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}
        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2.5">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    </button>
  )
}

function CategoryCard({ cat, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', aspectRatio: '3/4' }}>
      <img src={cat.image} alt={cat.name}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.07)' : 'scale(1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: hovered ? 'rgba(28,43,43,0.72)' : 'rgba(28,43,43,0.55)', transition: 'background 0.4s' }} />
      {/* Tiffany bottom accent */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#0ABAB5', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 0.4s ease', transformOrigin: 'left' }} />
      <div style={{ position: 'absolute', inset: 0, padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ fontSize: '9px', letterSpacing: '4px', color: '#0ABAB5', marginBottom: '8px', fontFamily: 'ErasMedium, sans-serif' }}>
          {cat.num}
        </div>
        <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(20px,2vw,28px)', fontWeight: 300, color: '#F7F4F0', margin: '0 0 8px', lineHeight: 1.1 }}>
          {cat.name}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '1px', background: '#0ABAB5' }} />
          <span style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(247,244,240,0.75)', fontFamily: 'ErasMedium, sans-serif' }}>
            {cat.products.length} PRODUCTS
          </span>
        </div>
      </div>
    </div>
  )
}


export default function Products() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('bifold')
  const sectionRefs = useRef({})

  // Track which section is in view for tab highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveTab(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    categories.forEach(cat => {
      const el = document.getElementById(cat.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ background: '#F7F4F0', color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif' }}>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slowZoom { from{transform:scale(1)} to{transform:scale(1.06)} }
        .tab-link { transition: color 0.3s, border-color 0.3s; }
        .tab-link:hover { color: #1C2B2B !important; }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', height: '65vh', minHeight: '480px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=90" alt="Products"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', animation: 'slowZoom 16s ease-in-out infinite alternate' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(28,43,43,0.92) 50%, rgba(28,43,43,0.6) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '3px', background: 'linear-gradient(to bottom, transparent, #0ABAB5 30%, #0ABAB5 70%, transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to bottom, transparent, #F7F4F0)' }} />

        <div style={{ position: 'relative', zIndex: 10, padding: '0 72px', animation: 'fadeUp 1s ease both', maxWidth: '720px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <div style={{ width: '40px', height: '1px', background: '#0ABAB5' }} />
            <span style={{ fontSize: '9px', letterSpacing: '5px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>PREMIUM ALUMINIUM SYSTEMS</span>
          </div>
          <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(56px,7vw,100px)', fontWeight: 300, color: '#F7F4F0', margin: '0 0 20px', lineHeight: 1 }}>
            Our <span style={{ color: '#0ABAB5' }}>Products</span>
          </h1>
          <p style={{ fontSize: '13px', letterSpacing: '1.5px', color: 'rgba(247,244,240,0.82)', maxWidth: '460px', lineHeight: 2, margin: 0 }}>
            Schuco and Cortizo systems — engineered for performance, crafted for beauty. Trusted by architects and developers across the UK.
          </p>
        </div>

        {/* Product count badge */}
        <div style={{ position: 'absolute', bottom: '200px', right: '72px', zIndex: 10, textAlign: 'right' }}>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '72px', fontWeight: 300, color: 'rgba(10,186,181,0.25)', lineHeight: 1 }}>
            {categories.reduce((a, c) => a + c.products.length, 0)}+
          </div>
          <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(247,244,240,0.6)', fontFamily: 'ErasMedium, sans-serif' }}>PRODUCTS</div>
        </div>
      </section>

      {/* ══ CATEGORY OVERVIEW CARDS ══ */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 72px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{ width: '40px', height: '1px', background: '#0ABAB5' }} />
          <span style={{ fontSize: '9px', letterSpacing: '5px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>BROWSE BY CATEGORY</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
          {categories.map(cat => (
            <CategoryCard key={cat.id} cat={cat} onClick={() => scrollTo(cat.id)} />
          ))}
        </div>
      </div>

      {/* ══ STICKY TABS ══ */}
      <div style={{ position: 'sticky', top: '68px', zIndex: 30, background: 'rgba(247,244,240,0.98)', borderBottom: '1px solid rgba(10,186,181,0.2)', backdropFilter: 'blur(10px)', marginTop: '60px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px', display: 'flex', overflowX: 'auto' }}>
          {categories.map(cat => (
            <button key={cat.id}
              className="tab-link"
              onClick={() => scrollTo(cat.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '18px 20px',
                fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700, fontFamily: 'ErasMedium, sans-serif',
                color: activeTab === cat.id ? '#0ABAB5' : 'rgba(28,43,43,0.55)',
                borderBottom: activeTab === cat.id ? '2px solid #0ABAB5' : '2px solid transparent',
                whiteSpace: 'nowrap', transition: 'all 0.3s',
              }}>
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* ══ PRODUCT SECTIONS ══ */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px 100px' }}>
        {categories.map((cat, ci) => (
          <section key={cat.id} id={cat.id} style={{ paddingTop: '80px' }}>

            {/* Section header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'start', gap: '24px', marginBottom: '48px' }}>
              <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                {/* Big number */}
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(72px,8vw,110px)', fontWeight: 300, color: 'rgba(10,186,181,0.15)', lineHeight: 0.85, flexShrink: 0, marginTop: '8px', userSelect: 'none' }}>
                  {cat.num}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '32px', height: '1px', background: '#0ABAB5' }} />
                    <span style={{ fontSize: '9px', letterSpacing: '4px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>{cat.products.length} PRODUCTS</span>
                  </div>
                  <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, color: '#1C2B2B', margin: '0 0 10px', lineHeight: 1.1 }}>
                    {cat.name}
                  </h2>
                  <p style={{ fontSize: '13px', color: 'rgba(28,43,43,0.65)', lineHeight: 1.9, margin: 0, maxWidth: '480px' }}>
                    {cat.tagline}
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate('/contact')}
                style={{ background: '#0ABAB5', border: 'none', padding: '14px 28px', color: '#1C2B2B', fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700, fontFamily: 'ErasMedium, sans-serif', cursor: 'pointer', transition: 'all 0.3s', flexShrink: 0, marginTop: '4px' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1C2B2B'; e.currentTarget.style.color = '#F7F4F0' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0ABAB5'; e.currentTarget.style.color = '#1C2B2B' }}>
                ENQUIRE NOW
              </button>
            </div>

            {/* Content: products + image */}
            <div style={{ display: 'grid', gridTemplateColumns: ci % 2 === 0 ? '1.5fr 1fr' : '1fr 1.5fr', gap: '48px', alignItems: 'start' }}>

              {/* Products list — alternates side */}
              {ci % 2 === 0 ? (
                <>
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                      {cat.products.map((p, pi) => (
                        <ProductRow key={pi} product={p} onClick={() => navigate('/products/' + p.slug)} />
                      ))}
                    </div>
                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '11px', color: 'rgba(28,43,43,0.6)', fontFamily: 'ErasMedium, sans-serif' }}>Click any product for details</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(28,43,43,0.4)" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </div>
                  </div>
                  <div style={{ position: 'sticky', top: '140px', overflow: 'hidden' }}>
                    <img src={cat.image} alt={cat.name} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '16px 20px', background: '#1C2B2B', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '24px', height: '1px', background: '#0ABAB5' }} />
                      <span style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(247,244,240,0.75)', fontFamily: 'ErasMedium, sans-serif' }}>SCHUCO & CORTIZO CERTIFIED</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ position: 'sticky', top: '140px', overflow: 'hidden' }}>
                    <img src={cat.image} alt={cat.name} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '16px 20px', background: '#1C2B2B', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '24px', height: '1px', background: '#0ABAB5' }} />
                      <span style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(247,244,240,0.75)', fontFamily: 'ErasMedium, sans-serif' }}>SCHUCO & CORTIZO CERTIFIED</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2px' }}>
                      {cat.products.map((p, pi) => (
                        <ProductRow key={pi} product={p} onClick={() => navigate('/products/' + p.slug)} />
                      ))}
                    </div>
                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '11px', color: 'rgba(28,43,43,0.6)', fontFamily: 'ErasMedium, sans-serif' }}>Click any product for details</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(28,43,43,0.4)" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>

            {ci < categories.length - 1 && (
              <div style={{ marginTop: '80px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(10,186,181,0.2)' }} />
                <div style={{ width: '6px', height: '6px', background: '#0ABAB5', transform: 'rotate(45deg)', flexShrink: 0 }} />
                <div style={{ flex: 1, height: '1px', background: 'rgba(10,186,181,0.2)' }} />
              </div>
            )}
          </section>
        ))}
      </div>

      {/* ══ CTA BANNER ══ */}
      <div style={{ background: '#0ABAB5', padding: '64px 72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
        <div>
          <div style={{ fontSize: '9px', letterSpacing: '4px', color: 'rgba(28,43,43,0.6)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '10px' }}>
            CAN'T FIND WHAT YOU NEED?
          </div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 300, color: '#1C2B2B', lineHeight: 1.15 }}>
            We supply many more products.<br />Just ask our team.
          </div>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => navigate('/contact')}
            style={{ background: '#1C2B2B', border: 'none', padding: '20px 44px', color: '#F7F4F0', fontSize: '10px', letterSpacing: '3px', fontWeight: 700, fontFamily: 'ErasMedium, sans-serif', cursor: 'pointer', transition: 'opacity 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            GET IN TOUCH
          </button>
          <a href="tel:08009995575"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', padding: '12px 24px', border: '1px solid rgba(28,43,43,0.3)', transition: 'background 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(28,43,43,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <span style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(28,43,43,0.65)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '2px' }}>FREE PHONE</span>
            <span style={{ fontSize: '18px', fontWeight: 700, color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '1px' }}>0800 999 5575</span>
          </a>
        </div>
      </div>

    </div>
  )
}
