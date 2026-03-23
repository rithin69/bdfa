import React from 'react'
import { useNavigate } from 'react-router-dom'
import useResponsive from '../hooks/useResponsive'

const steps = [
  { num: '01', title: 'Discovery', desc: 'We begin with an in-depth consultation to understand your vision, lifestyle, budget and timeline. This shapes everything that follows.' },
  { num: '02', title: 'Concept Design', desc: 'Our designers develop mood boards, space plans and 3D visualisations so you can see and feel your future space before it exists.' },
  { num: '03', title: 'Development', desc: 'Detailed drawings, material specifications and contractor coordination. Every element is resolved before a single tool is picked up.' },
  { num: '04', title: 'Delivery', desc: 'We oversee construction and installation, ensuring the finished result matches the design vision perfectly — on time and on budget.' },
]

export function Process() {
  return (
    <section id="process" className="py-28 px-8 bg-bdf-dark">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-px bg-gold" />
          <span className="text-[10px] tracking-[0.45em] text-gold font-semibold">HOW WE WORK</span>
        </div>

        <h2 className="font-cormorant font-light text-bdf-white mb-16 leading-tight"
          style={{ fontSize: 'clamp(38px,4vw,58px)' }}>
          Our <span className="text-gold">Process</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {/* connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] w-full h-px border-t-2 border-dashed border-gold/30 z-0" />
              )}

              {/* number circle */}
              <div className="relative z-10 w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mb-6 bg-bdf-black">
                <span className="font-cormorant font-light text-2xl text-gold">{s.num}</span>
              </div>

              <div className="text-[14px] tracking-[0.1em] font-bold text-bdf-white mb-3">
                {s.title.toUpperCase()}
              </div>
              <div className="w-8 h-px bg-gold mb-4" />
              <div className="text-[13px] text-bdf-white/80 leading-relaxed">
                {s.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export function CTABanner() {
  const navigate = useNavigate()
  return (
    <div className="px-8 pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gold px-16 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-[10px] tracking-[0.4em] text-[#1C2B2B]/70 mb-3 font-semibold">
              START YOUR PROJECT
            </div>
            <h3 className="font-cormorant font-light text-[#1C2B2B] leading-tight"
              style={{ fontSize: 'clamp(30px,3vw,44px)' }}>
              Ready to build something extraordinary?
            </h3>
          </div>
          <button className="flex-shrink-0 text-[10px] tracking-[0.4em] font-bold text-white bg-[#1C2B2B] hover:opacity-85 transition-opacity duration-300 px-10 py-5"
            onClick={() => navigate('/contact')}>
            BOOK A CONSULTATION
          </button>
        </div>
      </div>
    </div>
  )
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/448009995575',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
]

export function Footer() {
  const navigate = useNavigate()
  const { isMobile } = useResponsive()

  const navLinks = [
    { label: 'About',     action: () => navigate('/about') },
    { label: 'Portfolio', action: () => { window.location.hash = '#portfolio' } },
    { label: 'Careers',   action: () => navigate('/careers') },
    { label: 'Contact',   action: () => navigate('/contact') },
  ]

  const S = { fontFamily: 'ErasMedium, sans-serif' }

  return (
    <footer id="footer" style={{ background: '#0D1B2A' }}>

      {/* ── MAIN SPLIT ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '48px 16px' : '80px 64px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1px 1fr', gap: isMobile ? '32px' : '0', alignItems: 'stretch' }}>

        {/* LEFT — CTA */}
        <div style={{ paddingRight: isMobile ? '0' : '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ width: '32px', height: '1px', background: '#0ABAB5' }} />
            <span style={{ ...S, fontSize: '10px', letterSpacing: '4px', color: '#0ABAB5' }}>LET'S BUILD TOGETHER</span>
          </div>

          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(36px,3.5vw,54px)', fontWeight: 300, color: '#F7F4F0', lineHeight: 1.12, margin: '0 0 24px' }}>
            Ready to Build<br />
            <span style={{ color: '#0ABAB5' }}>Something<br />Remarkable?</span>
          </h2>

          <p style={{ ...S, fontSize: '14px', color: 'rgba(247,244,240,0.55)', lineHeight: 1.85, margin: '0 0 40px', maxWidth: '380px' }}>
            Partner with BDF Architectural to bring your most ambitious glazing vision to life across London and the UK.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/contact')}
              style={{ ...S, background: '#0ABAB5', border: 'none', color: '#0D1B2A', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, padding: '16px 32px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'background 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#7DD8D6'}
              onMouseLeave={e => e.currentTarget.style.background = '#0ABAB5'}>
              Start a Conversation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <a href="#portfolio"
              style={{ ...S, background: 'transparent', border: '1.5px solid rgba(247,244,240,0.25)', color: '#F7F4F0', fontSize: '12px', letterSpacing: '2px', fontWeight: 600, padding: '16px 32px', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'border-color 0.3s, color 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ABAB5'; e.currentTarget.style.color = '#0ABAB5' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(247,244,240,0.25)'; e.currentTarget.style.color = '#F7F4F0' }}>
              Explore Projects
            </a>
          </div>
        </div>

        {/* VERTICAL DIVIDER */}
        {!isMobile && <div style={{ width: '1px', background: 'rgba(247,244,240,0.08)', margin: '0' }} />}

        {/* RIGHT — CONTACT INFO */}
        <div style={{ ...S, paddingLeft: isMobile ? '0' : '72px', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontStyle: 'normal' }}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{ ...S, fontSize: '18px', fontWeight: 600, color: '#F4F7FB', letterSpacing: '0.2px', lineHeight: 1.2, marginBottom: '8px', fontStyle: 'normal' }}>BDF Architectural</div>
            <div style={{ ...S, fontSize: '10px', letterSpacing: '4px', color: '#0ABAB5' }}>EST. 2006 · BUILDING EXCELLENCE</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '32px' }}>
            {/* Address */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="1.8" style={{ marginTop: '3px', flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <div style={{ ...S, fontSize: '13px', color: 'rgba(229,236,246,0.9)', lineHeight: 1.55, fontWeight: 500, fontStyle: 'normal' }}>Bingley, The Common, West Drayton</div>
                <div style={{ ...S, fontSize: '13px', color: 'rgba(247,244,240,0.5)', lineHeight: 1.6 }}>Middlesex, UB7 7HQ · United Kingdom</div>
              </div>
            </div>

            {/* Phones */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="1.8" style={{ marginTop: '3px', flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <div>
                <a href="tel:01895439199" style={{ ...S, fontSize: '13px', color: 'rgba(229,236,246,0.9)', textDecoration: 'none', fontWeight: 500, display: 'block', transition: 'color 0.2s', fontStyle: 'normal', lineHeight: 1.55 }}
                  onMouseEnter={e => e.currentTarget.style.color = '#0ABAB5'}
                  onMouseLeave={e => e.currentTarget.style.color = '#F7F4F0'}>01895 439 199</a>
                <a href="tel:08009995575" style={{ ...S, fontSize: '13px', color: 'rgba(135,153,181,0.78)', textDecoration: 'none', display: 'block', transition: 'color 0.2s', fontStyle: 'normal', lineHeight: 1.55, marginTop: '2px' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#0ABAB5'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,244,240,0.5)'}>0800 999 5575 (Free)</a>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="1.8" style={{ flexShrink: 0 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:info@bdfa.uk" style={{ ...S, fontSize: '13px', color: 'rgba(229,236,246,0.9)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s', fontStyle: 'normal', lineHeight: 1.55 }}
                onMouseEnter={e => e.currentTarget.style.color = '#0ABAB5'}
                onMouseLeave={e => e.currentTarget.style.color = '#F7F4F0'}>info@bdfa.uk</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: '1px solid rgba(247,244,240,0.07)', maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '20px 16px' : '20px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        {/* Nav links */}
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {navLinks.map(l => (
            <button key={l.label} onClick={l.action}
              style={{ ...S, background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', color: 'rgba(247,244,240,0.45)', letterSpacing: '1px', padding: 0, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F7F4F0'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,244,240,0.45)'}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <span style={{ ...S, fontSize: '11px', color: 'rgba(247,244,240,0.3)', letterSpacing: '1px' }}>
          © 2026 BDF Architectural. All rights reserved.
        </span>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {socialLinks.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              style={{ width: '36px', height: '36px', border: '1px solid rgba(247,244,240,0.12)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(247,244,240,0.4)', textDecoration: 'none', transition: 'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ABAB5'; e.currentTarget.style.color = '#0ABAB5' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(247,244,240,0.12)'; e.currentTarget.style.color = 'rgba(247,244,240,0.4)' }}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
