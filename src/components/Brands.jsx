import React from 'react'
import { useNavigate } from 'react-router-dom'

const brands = [
  {
    name: 'Schüco',
    country: 'Germany',
    since: '1951',
    badge: 'Authorised Fabricator',
    description: 'German precision engineering. Schüco systems set the benchmark for thermal performance, slim sightlines, and architectural quality worldwide.',
    products: ['ASS 70 Sliding Doors', 'AS FD 75/90.HI Bifold', 'AWS 70 Windows', 'CMC 50 Winter Gardens'],
    accentColor: '#003B6F',
    slug: 'schuco-ass70hi-bifold-doors',
  },
  {
    name: 'Cortizo',
    country: 'Spain',
    since: '1971',
    badge: 'Authorised Fabricator',
    description: 'European excellence at exceptional value. Cortizo delivers outstanding thermal performance and contemporary aesthetics across their full product range.',
    products: ['Cor Vision Sliding Doors', 'Cortizo Bifold Plus', 'Arch Invisible Windows', 'Cortizo Entrance Doors'],
    accentColor: '#B8001C',
    slug: 'cortizo-bifold-doors',
  },
]

export default function Brands() {
  const navigate = useNavigate()

  return (
    <section style={{ background: '#0D1B2A', padding: '80px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#0ABAB5' }} />
            <span style={{ fontFamily: 'ErasMedium, sans-serif', fontSize: '10px', letterSpacing: '4px', color: '#0ABAB5', fontWeight: 600 }}>
              AUTHORISED FABRICATOR & INSTALLER
            </span>
            <div style={{ width: '40px', height: '1px', background: '#0ABAB5' }} />
          </div>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: '#F7F4F0', margin: 0, lineHeight: 1.2 }}>
            Premium Systems from the <span style={{ color: '#0ABAB5' }}>World's Best</span>
          </h2>
          <p style={{ fontFamily: 'ErasMedium, sans-serif', fontSize: '14px', color: 'rgba(247,244,240,0.75)', marginTop: '16px', maxWidth: '560px', margin: '16px auto 0', lineHeight: 1.8 }}>
            We are authorised fabricators and installers of both Schüco and Cortizo — two of Europe's most respected aluminium system manufacturers.
          </p>
        </div>

        {/* Brand cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '64px' }}>
          {brands.map(brand => (
            <div
              key={brand.name}
              style={{
                background: 'rgba(247,244,240,0.03)',
                border: '1px solid rgba(247,244,240,0.08)',
                borderRadius: '4px',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(10,186,181,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(247,244,240,0.08)'}
            >
              {/* Top accent bar */}
              <div style={{ height: '3px', background: `linear-gradient(90deg, ${brand.accentColor}, #0ABAB5)` }} />

              <div style={{ padding: '36px 32px' }}>

                {/* Brand name + badge */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px', gap: '16px' }}>
                  <div>
                    <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '48px', fontWeight: 600, color: '#F7F4F0', lineHeight: 1, letterSpacing: '-1px' }}>
                      {brand.name}
                    </div>
                    <div style={{ fontFamily: 'ErasMedium, sans-serif', fontSize: '10px', letterSpacing: '3px', color: 'rgba(247,244,240,0.4)', marginTop: '6px' }}>
                      {brand.country} · EST. {brand.since}
                    </div>
                  </div>
                  <div style={{
                    background: 'rgba(10,186,181,0.1)',
                    border: '1px solid rgba(10,186,181,0.3)',
                    borderRadius: '4px',
                    padding: '6px 12px',
                    fontFamily: 'ErasMedium, sans-serif',
                    fontSize: '9px',
                    letterSpacing: '1.5px',
                    color: '#0ABAB5',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    {brand.badge}
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontFamily: 'ErasMedium, sans-serif', fontSize: '13px', color: 'rgba(247,244,240,0.85)', lineHeight: 1.8, margin: '0 0 24px' }}>
                  {brand.description}
                </p>

                {/* Product list */}
                <div style={{ borderTop: '1px solid rgba(247,244,240,0.07)', paddingTop: '20px', marginBottom: '28px' }}>
                  <div style={{ fontFamily: 'ErasMedium, sans-serif', fontSize: '9px', letterSpacing: '3px', color: '#0ABAB5', marginBottom: '12px' }}>
                    SYSTEMS WE INSTALL
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {brand.products.map(p => (
                      <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0ABAB5', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'ErasMedium, sans-serif', fontSize: '12px', color: 'rgba(247,244,240,0.9)' }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate(`/products/${brand.slug}`)}
                  style={{
                    fontFamily: 'ErasMedium, sans-serif',
                    background: 'none',
                    border: '1.5px solid rgba(10,186,181,0.4)',
                    color: '#0ABAB5',
                    fontSize: '10px',
                    letterSpacing: '2.5px',
                    padding: '12px 24px',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    width: '100%',
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#0ABAB5'; e.currentTarget.style.color = '#0D1B2A' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#0ABAB5' }}
                >
                  View {brand.name} Products
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div style={{ borderTop: '1px solid rgba(247,244,240,0.07)', paddingTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          {[
            { label: 'Authorised Fabricator', sub: 'Schüco & Cortizo certified' },
            { label: 'Made to Measure', sub: 'Every product bespoke' },
            { label: 'PAS 24 Security', sub: 'Enhanced security certified' },
            { label: '5-Star Rated', sub: 'Verified Trustpilot reviews' },
            { label: 'Supply & Install', sub: 'Full UK coverage' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ width: '3px', height: '36px', background: '#0ABAB5', borderRadius: '2px', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontFamily: 'ErasMedium, sans-serif', fontSize: '12px', color: '#F7F4F0', fontWeight: 700 }}>{item.label}</div>
                <div style={{ fontFamily: 'ErasMedium, sans-serif', fontSize: '11px', color: 'rgba(247,244,240,0.65)', marginTop: '3px' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
