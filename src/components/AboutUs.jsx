import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'

const stats = [
  { num: '20', suffix: '+', label: 'Years Experience' },
  { num: '10000', suffix: '+', label: 'Satisfied Customers' },
  { num: '5', suffix: '', label: 'Regions Covered' },
  { num: '100', suffix: '%', label: 'Quality Guaranteed' },
]

const carouselSlides = [
  { img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=90', title: 'Luxury Bifold Doors', sub: 'RESIDENTIAL EXCELLENCE', location: 'London, UK', tag: 'Schuco AS FD 75/90' },
  { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=90', title: 'Floor to Ceiling Glazing', sub: 'COMMERCIAL PROJECTS', location: 'Surrey, UK', tag: 'Cortizo Bifold Plus' },
  { img: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1920&q=90', title: 'Modern Interior Design', sub: 'INTERIOR SOLUTIONS', location: 'Essex, UK', tag: 'Schuco ASS 70' },
  { img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=90', title: 'Contemporary Homes', sub: 'ARCHITECTURAL DESIGN', location: 'Kent, UK', tag: 'Cortizo Cor Vision' },
  { img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=90', title: 'Premium Sliding Doors', sub: 'SLIDING DOOR SYSTEMS', location: 'Berkshire, UK', tag: 'Schuco ASS 77 PD' },
]

const values = [
  { title: 'Unique Designs', short: 'DESIGN', desc: 'We have designed and perfected innovative solutions to enhance the aesthetics of your home. With an extensive range of styles and colours, you have imaginative ways to open and close space.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=90', num: '01' },
  { title: 'Expert Installation', short: 'INSTALL', desc: 'Our highly skilled team carries out all installations to the highest standard. Every member has undergone full training to ensure the process runs smoothly from start to finish.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=90', num: '02' },
  { title: 'Excellent Service', short: 'SERVICE', desc: 'We value every individual and will always put your interests first. We aim to put all our efforts into achieving the best results that meet and exceed all of your expectations.', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=90', num: '03' },
  { title: 'Unbeatable Prices', short: 'PRICING', desc: 'As manufacturers we offer high-quality windows, doors and roof solutions at the most competitive prices. We ensure you always receive excellent products at the best prices available.', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=90', num: '04' },
]

const testimonials = [
  { quote: 'Excellent service from the time I spoke to Narinderpal.', name: 'Leo', location: 'Trustpilot - Jan 2026', project: 'Aluminium Bifold Doors', rating: 5 },
  { quote: 'These doors are the showstopper of the house.', name: 'Mikki', location: 'Trustpilot - Jul 2025', project: 'Cortizo Cor Vision Slider', rating: 5 },
  { quote: 'The process from start to finish was transparent and professional.', name: 'Robert Dunne', location: 'Farnham - Trustpilot - Apr 2025', project: 'Bifold Door Installation', rating: 5 },
  { quote: 'Great Cortizo products and professional service.', name: 'J G', location: 'Trustpilot - Feb 2026', project: 'Cortizo Windows and Doors', rating: 5 },
  { quote: 'Absolutely fantastic service from Narinderpal and the team.', name: 'Ajay Kamboj', location: 'Trustpilot - May 2025', project: 'Double Glazing Installation', rating: 5 },
  { quote: 'Best price and best customer service I\'ve experienced from a business.', name: 'Nick Jones', location: 'Trustpilot - Mar 2025', project: 'Bifolds, Sliding Door and Lantern', rating: 5 },
]

const products = [
  'Bi-Folding Doors', 'Sliding Doors', 'Windows', 'Curtain Walling',
  'Structural Glazing', 'Roof Systems', 'Lantern Skylights', 'Entrance Doors',
]

// Global text styles — consistent across whole page
const T = {
  eyebrow: { fontSize: '10px', letterSpacing: '5px', color: '#0ABAB5', fontWeight: 500, textTransform: 'uppercase', fontFamily: '"Montserrat", sans-serif' },
  h1: { fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, color: '#1C2B2B', lineHeight: 1 },
  h2: { fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, color: '#1C2B2B', lineHeight: 1.2 },
  h3: { fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, color: '#1C2B2B', lineHeight: 1.3 },
  body: { fontSize: '14px', color: '#3A5252', lineHeight: 2, fontWeight: 400, fontFamily: '"Montserrat", sans-serif' },
  small: { fontSize: '11px', letterSpacing: '2px', color: '#4A6464', fontWeight: 400, fontFamily: '"Montserrat", sans-serif' },
  label: { fontSize: '9px', letterSpacing: '4px', color: '#0ABAB5', fontWeight: 500, textTransform: 'uppercase', fontFamily: '"Montserrat", sans-serif' },
  nav: { fontSize: '11px', letterSpacing: '3px', color: '#3A5252', fontWeight: 400, fontFamily: '"Montserrat", sans-serif' },
}

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const p = Math.min((ts - startTime) / duration, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(e * target))
      if (p < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [start])
  return count
}

function StatCard({ num, suffix, label, index, visible }) {
  const count = useCountUp(parseInt(num), 2200 + index * 300, visible)
  return (
    <div className="about-stats-card" style={{ padding: '48px 24px', textAlign: 'center', borderRight: index < 3 ? '1px solid rgba(10,186,181,0.12)' : 'none', flex: 1 }}>
      <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(48px,5vw,72px)', fontWeight: 300, color: '#0ABAB5', lineHeight: 1, marginBottom: '10px' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ ...T.small, color: '#507070' }}>{label}</div>
    </div>
  )
}

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [activeValue, setActiveValue] = useState(0)
  const statsRef = useRef(null)
  const slideTimer = useRef(null)

  const startSlide = () => {
    clearInterval(slideTimer.current)
    slideTimer.current = setInterval(() => setCurrentSlide(p => (p + 1) % carouselSlides.length), 5000)
  }

  useEffect(() => { startSlide(); return () => clearInterval(slideTimer.current) }, [])

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(p => (p + 1) % testimonials.length), 5500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true) }, { threshold: 0.2 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  const goSlide = (i) => { setCurrentSlide(i); startSlide() }

  const goldLine = <div style={{ width: '48px', height: '1px', background: '#0ABAB5', flexShrink: 0 }} />

  return (
    <div style={{ background: '#F7F4F0', color: '#1C2B2B', fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}>
      <Helmet>
        <title>About BDF Architectural | Premium Door & Window Specialists Since 2012</title>
        <meta name="description" content="Learn about BDF Architectural, West Drayton's leading supplier of Schüco and Cortizo bifold doors, sliding doors, and aluminium windows. Serving London & South East since 2012." />
        <link rel="canonical" href="https://www.bdfa.uk/about" />
        <meta property="og:url" content="https://www.bdfa.uk/about" />
        <meta property="og:title" content="About BDF Architectural | Premium Door & Window Specialists" />
      </Helmet>

      <style>{`
        @keyframes slowZoom { 0%{transform:scale(1)} 100%{transform:scale(1.08)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes lineGrow { from{width:0} to{width:48px} }
        @keyframes pulse { 0%,100%{opacity:0.4;transform:scaleY(0.8)} 50%{opacity:1;transform:scaleY(1)} }
        @keyframes slideUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        * { box-sizing: border-box; }
        @media(max-width:768px){
          .split-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .hide-mobile { display: none !important; }
          .carousel-controls { bottom: 40px !important; right: 24px !important; }
          .carousel-info { left: 24px !important; bottom: 40px !important; }
          .about-shell-pad { padding-left: 16px !important; padding-right: 16px !important; }
          .about-shell-pad-lg { padding-left: 16px !important; padding-right: 16px !important; }
          .about-intro-copy,
          .about-products-copy,
          .about-values-copy,
          .about-testimonials {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .about-values-copy {
            padding-bottom: 48px !important;
          }
          .about-products-list { grid-template-columns: 1fr !important; gap: 0 !important; }
          .about-values-image,
          .about-products-image { display: none !important; }
          .about-value-item { padding-left: 18px !important; }
          .about-value-row {
            align-items: flex-start !important;
            gap: 16px !important;
            padding: 22px 0 !important;
          }
          .about-value-number {
            width: 48px !important;
            font-size: 42px !important;
          }
          .about-value-title {
            margin-bottom: 10px !important;
            font-size: 12px !important;
            line-height: 1.5 !important;
            color: #1C2B2B !important;
          }
          .about-value-desc {
            max-height: 260px !important;
            line-height: 1.9 !important;
          }
          .about-value-icon { margin-top: 2px !important; }
          .about-gold-cta { padding: 40px 24px !important; }
          .about-testimonial-quote {
            font-size: clamp(20px, 7vw, 28px) !important;
            line-height: 1.45 !important;
          }
          .about-cinematic-copy {
            padding: 24px !important;
          }
        }
        @media(max-width:480px){
          .stats-grid { grid-template-columns: 1fr !important; }
          .about-stats-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(10,186,181,0.12);
          }
          .about-hero-title {
            font-size: clamp(48px, 16vw, 72px) !important;
          }
        }
      `}</style>

      {/* ════════════════════════════════════════ */}
      {/* HERO — dark enough overlay for text     */}
      {/* ════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=90"
          alt="Luxury interior"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', animation: 'slowZoom 14s ease-in-out infinite alternate' }}
        />

        {/* HEAVY dark overlay so ALL text is readable */}
        <div style={{ position: 'absolute', inset: 0, background: '#1C2B2B', opacity: 0.78 }} />
        {/* Extra gradient for depth */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,43,43,0.2) 0%, transparent 40%, rgba(28,43,43,0.95) 100%)' }} />

        {/* Gold left bar */}
        <div style={{ position: 'absolute', left: 0, top: '15%', bottom: '15%', width: '3px', background: 'linear-gradient(to bottom, transparent, #0ABAB5 30%, #0ABAB5 70%, transparent)' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 32px', maxWidth: '960px', width: '100%' }}>

          {/* Eyebrow line */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '32px', animation: 'fadeIn 1s ease 0.3s both', opacity: 0 }}>
            <div style={{ height: '1px', background: '#0ABAB5', width: '48px' }} />
            <span style={{ ...T.eyebrow }}>Who We Are</span>
            <div style={{ height: '1px', background: '#0ABAB5', width: '48px' }} />
          </div>

          {/* ABOUT US — giant */}
          <h1 className="about-hero-title" style={{ ...T.h1, color: '#F7F4F0', fontSize: 'clamp(64px,10vw,130px)', margin: '0 0 32px', animation: 'fadeUp 1s ease 0.5s both', opacity: 0 }}>
            About <span style={{ color: '#0ABAB5', fontStyle: 'normal' }}>Us</span>
          </h1>

          {/* SUPPLIER LINE — white box behind text for guaranteed visibility */}
          <div style={{ display: 'inline-block', background: 'rgba(28,43,43,0.65)', backdropFilter: 'blur(8px)', border: '1px solid rgba(10,186,181,0.3)', padding: '16px 40px', marginBottom: '20px', animation: 'fadeUp 1s ease 0.7s both', opacity: 0 }}>
            <p style={{ fontSize: 'clamp(15px,2vw,22px)', letterSpacing: '3px', color: '#F7F4F0', fontWeight: 600, margin: 0, textTransform: 'uppercase', fontFamily: '"Montserrat", sans-serif' }}>
              We Are One Of Schuco's Leading Suppliers
            </p>
          </div>

          <p style={{ ...T.small, display: 'block', color: 'rgba(247,244,240,0.75)', letterSpacing: '4px', animation: 'fadeUp 1s ease 0.9s both', opacity: 0, textTransform: 'uppercase' }}>
            Delivering Excellence Across The UK For Over 20 Years
          </p>
        </div>

        {/* Scroll line */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 10, animation: 'fadeIn 1s ease 1.5s both', opacity: 0 }}>
          <span style={{ ...T.label, color: 'rgba(247,244,240,0.7)' }}>Scroll</span>
          <div style={{ width: '1px', height: '56px', background: 'linear-gradient(to bottom, #0ABAB5, transparent)', animation: 'pulse 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/* STATS                                  */}
      {/* ════════════════════════════════════════ */}
      <div ref={statsRef} style={{ background: '#EDF8F8', borderTop: '1px solid rgba(10,186,181,0.15)', borderBottom: '1px solid rgba(10,186,181,0.15)' }}>
        <div className="stats-grid" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s, i) => <StatCard key={i} {...s} index={i} visible={statsVisible} />)}
        </div>
      </div>

      {/* ════════════════════════════════════════ */}
      {/* INTRO SPLIT                            */}
      {/* ════════════════════════════════════════ */}
      <section className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '680px' }}>
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=90" alt="Interior"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,43,43,0.2)' }} />
          <div style={{ position: 'absolute', bottom: '32px', left: '32px', background: 'rgba(28,43,43,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(10,186,181,0.4)', padding: '14px 22px' }}>
            <div style={{ ...T.eyebrow, fontSize: '12px' }}>Est. 2004</div>
            <div style={{ ...T.small, color: '#608080', marginTop: '3px' }}>Over Two Decades of Excellence</div>
          </div>
        </div>

        <div className="about-intro-copy" style={{ background: '#EDF8F8', display: 'flex', alignItems: 'center', padding: '80px 72px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              {goldLine}
              <span style={T.eyebrow}>Our Story</span>
            </div>
            <h2 style={{ ...T.h2, fontSize: 'clamp(36px,4vw,58px)', margin: '0 0 28px' }}>
              Glazing &amp; Door<br />
              <span style={{ color: '#0ABAB5', fontStyle: 'normal' }}>Specialists</span>
            </h2>
            <p style={{ ...T.body, margin: '0 0 18px' }}>
              BDF Architectural have been delivering high-quality glazing and door solutions for over 20 years. We have provided stunning bifolding doors, sliding doors, windows, roof systems, curtain walling and structural glazing services to countless customers across the UK.
            </p>
            <p style={{ ...T.body, margin: '0 0 40px' }}>
              We have partnered with{' '}
              <span style={{ color: '#0ABAB5', fontWeight: 600 }}>Schuco</span> and{' '}
              <span style={{ color: '#0ABAB5', fontWeight: 600 }}>Cortizo</span>{' '}
              — meeting the highest requirements of design, comfort, soundproofing, energy efficiency and security.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {['Schuco', 'Cortizo'].map(p => (
                <div key={p}
                  style={{ border: '1px solid rgba(10,186,181,0.35)', padding: '14px 24px', cursor: 'default', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ABAB5'; e.currentTarget.style.background = 'rgba(10,186,181,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(10,186,181,0.35)'; e.currentTarget.style.background = 'transparent' }}>
                  <div style={{ ...T.eyebrow, fontSize: '11px' }}>{p}</div>
                  <div style={{ ...T.small, color: '#608080', marginTop: '3px' }}>Official Partner</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/* FULL SCREEN CAROUSEL                   */}
      {/* ════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
        {carouselSlides.map((slide, i) => (
          <div key={i} style={{ position: 'absolute', inset: 0, opacity: i === currentSlide ? 1 : 0, transition: 'opacity 1.2s ease', zIndex: i === currentSlide ? 1 : 0 }}>
            <img src={slide.img} alt={slide.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transform: i === currentSlide ? 'scale(1.04)' : 'scale(1)', transition: 'transform 7s ease' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,43,43,0.92) 0%, rgba(28,43,43,0.3) 60%, rgba(28,43,43,0.15) 100%)' }} />
          </div>
        ))}

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to bottom, #1C2B2B, transparent)', zIndex: 5 }} />

        {/* Slide info */}
        <div className="carousel-info" style={{ position: 'absolute', bottom: '90px', left: '64px', zIndex: 10 }} key={currentSlide}>
          <div style={{ ...T.eyebrow, marginBottom: '14px', animation: 'slideUp 0.7s ease both' }}>{carouselSlides[currentSlide].sub}</div>
          <h2 style={{ ...T.h2, color: '#F7F4F0', fontSize: 'clamp(40px,6vw,84px)', margin: '0 0 18px', animation: 'slideUp 0.7s ease 0.1s both', opacity: 0 }}>
            {carouselSlides[currentSlide].title}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', animation: 'slideUp 0.7s ease 0.2s both', opacity: 0 }}>
            <div style={{ width: '20px', height: '1px', background: '#0ABAB5' }} />
            <span style={{ ...T.nav, color: 'rgba(247,244,240,0.75)' }}>{carouselSlides[currentSlide].location}</span>
            <span style={{ ...T.label, border: '1px solid rgba(10,186,181,0.35)', padding: '4px 12px', fontSize: '8px' }}>{carouselSlides[currentSlide].tag}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="carousel-controls" style={{ position: 'absolute', bottom: '90px', right: '64px', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px' }}>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontSize: '32px', fontWeight: 300, color: '#0ABAB5', lineHeight: 1 }}>{String(currentSlide + 1).padStart(2, '0')}</span>
            <span style={{ ...T.small, color: 'rgba(247,244,240,0.6)' }}>/ {String(carouselSlides.length).padStart(2, '0')}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['←', '→'].map((arrow, i) => (
              <button key={arrow} onClick={() => goSlide(i === 0 ? (currentSlide - 1 + carouselSlides.length) % carouselSlides.length : (currentSlide + 1) % carouselSlides.length)}
                style={{ width: '50px', height: '50px', border: '1px solid rgba(247,244,240,0.4)', background: 'transparent', color: '#F7F4F0', fontSize: '18px', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ABAB5'; e.currentTarget.style.color = '#0ABAB5'; e.currentTarget.style.background = 'rgba(10,186,181,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(247,244,240,0.4)'; e.currentTarget.style.color = '#F7F4F0'; e.currentTarget.style.background = 'transparent' }}>
                {arrow}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {carouselSlides.map((_, i) => (
              <button key={i} onClick={() => goSlide(i)}
                style={{ width: i === currentSlide ? '32px' : '7px', height: '7px', background: i === currentSlide ? '#0ABAB5' : 'rgba(247,244,240,0.35)', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'all 0.4s', padding: 0 }} />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'rgba(247,244,240,0.2)', zIndex: 10 }}>
          <div style={{ height: '100%', background: '#0ABAB5', width: `${((currentSlide + 1) / carouselSlides.length) * 100}%`, transition: 'width 0.6s ease' }} />
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/* VALUES ACCORDION                       */}
      {/* ════════════════════════════════════════ */}
      <section style={{ background: '#F7F4F0' }}>
        <div className="about-shell-pad-lg" style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 64px 60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            {goldLine}
            <span style={T.eyebrow}>Why Choose Us</span>
          </div>
          <h2 style={{ ...T.h2, fontSize: 'clamp(36px,4vw,62px)', margin: 0 }}>
            Our <span style={{ color: '#0ABAB5', fontStyle: 'normal' }}>Commitment</span> To You
          </h2>
        </div>

        <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div className="about-values-copy" style={{ padding: '0 0 80px 64px' }}>
            {values.map((v, i) => (
              <div key={i} className="about-value-item" onClick={() => setActiveValue(i)}
                style={{ borderBottom: '1px solid rgba(28,43,43,0.06)', borderLeft: `3px solid ${i === activeValue ? '#0ABAB5' : 'transparent'}`, paddingLeft: '28px', cursor: 'pointer', transition: 'all 0.3s', background: i === activeValue ? 'rgba(10,186,181,0.03)' : 'transparent' }}>
                <div className="about-value-row" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '28px 0 28px' }}>
                  <span className="about-value-number" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '52px', fontWeight: 300, color: i === activeValue ? 'rgba(10,186,181,0.6)' : 'rgba(10,186,181,0.15)', width: '64px', flexShrink: 0, lineHeight: 1, transition: 'color 0.3s' }}>{v.num}</span>
                  <div style={{ flex: 1 }}>
                    <div className="about-value-title" style={{ fontSize: '13px', letterSpacing: '3px', fontWeight: 600, color: '#1C2B2B', marginBottom: i === activeValue ? '14px' : 0, transition: 'all 0.3s', textTransform: 'uppercase', fontFamily: '"Montserrat", sans-serif' }}>{v.title}</div>
                    <div className="about-value-desc" style={{ ...T.body, fontSize: '13px', maxHeight: i === activeValue ? '160px' : 0, overflow: 'hidden', transition: 'max-height 0.5s ease, opacity 0.4s', opacity: i === activeValue ? 1 : 0 }}>{v.desc}</div>
                  </div>
                  <div className="about-value-icon" style={{ color: i === activeValue ? '#0ABAB5' : '#1C2B2B', fontSize: '22px', transition: 'all 0.3s', transform: i === activeValue ? 'rotate(90deg)' : 'none', flexShrink: 0 }}>›</div>
                </div>
              </div>
            ))}
          </div>
          <div className="about-values-image" style={{ position: 'relative', minHeight: '560px', overflow: 'hidden' }}>
            {values.map((v, i) => (
              <div key={i} style={{ position: 'absolute', inset: 0, opacity: i === activeValue ? 1 : 0, transition: 'opacity 0.7s ease' }}>
                <img src={v.img} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,43,43,0.2)' }} />
              </div>
            ))}
            <div style={{ position: 'absolute', top: '28px', right: '28px', zIndex: 10, background: 'rgba(28,43,43,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(10,186,181,0.4)', padding: '10px 18px' }}>
              <span style={{ ...T.label, fontSize: '9px' }}>{values[activeValue].short}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/* PRODUCTS                               */}
      {/* ════════════════════════════════════════ */}
      <section className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }}>
        <div className="about-products-copy" style={{ background: '#EDF8F8', display: 'flex', alignItems: 'center', padding: '80px 72px' }}>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              {goldLine}
              <span style={T.eyebrow}>What We Offer</span>
            </div>
            <h2 style={{ ...T.h2, fontSize: 'clamp(36px,4vw,58px)', margin: '0 0 20px' }}>
              Our <span style={{ color: '#0ABAB5', fontStyle: 'normal' }}>Products</span>
            </h2>
            <p style={{ ...T.body, margin: '0 0 40px' }}>
              As glazing and door specialists we offer an extensive range of premium styles and colours to add a modern touch to both traditional and contemporary homes across the UK.
            </p>
            <div className="about-products-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }}>
              {products.map((p, i) => (
                <div key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 0', borderBottom: '1px solid rgba(28,43,43,0.06)', cursor: 'default' }}
                  onMouseEnter={e => e.currentTarget.querySelector('span').style.color = '#0ABAB5'}
                  onMouseLeave={e => e.currentTarget.querySelector('span').style.color = '#507070'}>
                  <div style={{ width: '5px', height: '5px', background: '#0ABAB5', borderRadius: '1px', flexShrink: 0 }} />
                  <span style={{ ...T.small, color: '#507070', transition: 'color 0.3s' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-products-image" style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=900&q=90" alt="Interior"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,43,43,0.15)' }} />
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/* TESTIMONIALS                           */}
      {/* ════════════════════════════════════════ */}
      <section className="about-testimonials" style={{ background: '#F7F4F0', padding: '100px 64px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            {goldLine}
            <span style={T.eyebrow}>What Our Clients Say</span>
          </div>
          <h2 style={{ ...T.h2, fontSize: 'clamp(36px,4vw,62px)', margin: '0 0 64px' }}>
            Client <span style={{ color: '#0ABAB5', fontStyle: 'normal' }}>Testimonials</span>
          </h2>

          <div style={{ position: 'relative' }}>
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '220px', color: 'rgba(10,186,181,0.05)', position: 'absolute', top: '-80px', left: '-16px', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>"</div>

            <div key={testimonialIdx} style={{ animation: 'slideUp 0.7s ease both', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '5px', marginBottom: '28px' }}>
                {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#0ABAB5"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>

              <p className="about-testimonial-quote" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(22px,3vw,40px)', fontWeight: 300, color: '#1C2B2B', lineHeight: 1.55, margin: '0 0 40px', maxWidth: '820px' }}>
                "{testimonials[testimonialIdx].quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <div style={{ width: '52px', height: '52px', background: 'rgba(10,186,181,0.12)', border: '1px solid rgba(10,186,181,0.35)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '22px', color: '#0ABAB5', fontWeight: 300 }}>
                    {testimonials[testimonialIdx].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '13px', letterSpacing: '2px', fontWeight: 600, color: '#1C2B2B', marginBottom: '5px', fontFamily: '"Montserrat", sans-serif' }}>
                    {testimonials[testimonialIdx].name}
                  </div>
                  <div style={{ ...T.label, fontSize: '9px', color: '#0ABAB5' }}>
                    {testimonials[testimonialIdx].location} · {testimonials[testimonialIdx].project}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '52px' }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)}
                  style={{ width: i === testimonialIdx ? '36px' : '8px', height: '8px', background: i === testimonialIdx ? '#0ABAB5' : 'rgba(28,43,43,0.35)', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'all 0.4s', padding: 0 }} />
              ))}
              <span style={{ ...T.small, color: '#608080', marginLeft: '8px' }}>
                {String(testimonialIdx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/* CINEMATIC BANNER                       */}
      {/* ════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: '55vh', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=90"
          alt="Luxury home" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,43,43,0.78)' }} />
        <div className="about-cinematic-copy" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '32px', zIndex: 1 }}>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(28px,4vw,60px)', fontWeight: 300, color: '#F7F4F0', lineHeight: 1.35, margin: '0 0 14px' }}>
            Join tens of thousands of satisfied customers
          </p>
          <p style={{ ...T.small, color: 'rgba(247,244,240,0.75)', margin: '0 0 40px', letterSpacing: '4px', textTransform: 'uppercase' }}>
            Who have transformed their homes across the UK
          </p>
          <button
            style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '10px', letterSpacing: '4px', fontWeight: 700, color: '#1C2B2B', background: '#0ABAB5', border: 'none', padding: '18px 48px', cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#7DD8D6' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#0ABAB5' }}>
            Get A Free Quote
          </button>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/* GOLD CTA BANNER                        */}
      {/* ════════════════════════════════════════ */}
      <div className="about-shell-pad" style={{ padding: '80px 64px', background: '#F7F4F0' }}>
        <div className="about-gold-cta" style={{ maxWidth: '1280px', margin: '0 auto', background: '#0ABAB5', padding: '64px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '9px', letterSpacing: '4px', color: 'rgba(28,43,43,0.5)', marginBottom: '12px', textTransform: 'uppercase', fontFamily: '"Montserrat", sans-serif' }}>Get In Touch Today</div>
            <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(32px,3.5vw,54px)', fontWeight: 300, color: '#1C2B2B', margin: 0, lineHeight: 1.2 }}>
              Ready to transform<br /><span style={{ fontStyle: 'normal' }}>your space?</span>
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flexShrink: 0 }}>
            <button
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '10px', letterSpacing: '4px', fontWeight: 700, color: '#1C2B2B', background: '#F7F4F0', border: 'none', padding: '18px 44px', cursor: 'pointer', transition: 'opacity 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Get A Free Quote
            </button>
            <a href="tel:08009995575" style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '14px', letterSpacing: '3px', fontWeight: 600, color: '#1C2B2B', textAlign: 'center', textDecoration: 'none' }}>
              0800 999 5575
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}
