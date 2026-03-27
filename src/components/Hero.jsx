import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import useResponsive from '../hooks/useResponsive'

export default function Hero() {
  const navigate = useNavigate()
  const { isMobile } = useResponsive()
  return (
    <>
    <Helmet>
      <title>BDF Architectural | Bifold Doors, Sliding Doors & Windows | West Drayton</title>
      <meta name="description" content="BDF Architectural supply and install premium bifold doors, sliding doors, aluminium windows and skylights across London, Berkshire, Essex, Kent, Surrey & Sussex. Call 01895 439 199 for a free quote." />
      <link rel="canonical" href="https://www.bdfa.uk/" />
      <meta property="og:url" content="https://www.bdfa.uk/" />
      <meta property="og:title" content="BDF Architectural | Bifold Doors, Sliding Doors & Windows" />
      <meta property="og:description" content="BDF Architectural supply and install premium bifold doors, sliding doors, aluminium windows and skylights across London & South East. Call 01895 439 199 for a free quote." />
      <meta property="og:image" content="https://www.bdfa.uk/hero-poster.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="BDF Architectural | Bifold Doors, Sliding Doors & Windows" />
      <meta name="twitter:description" content="Premium bifold doors, sliding doors, aluminium windows and skylights. Supply & installation across London & South East. Free quote: 01895 439 199." />
      <meta name="twitter:image" content="https://www.bdfa.uk/hero-poster.jpg" />
    </Helmet>
    <section id="about" className="relative min-h-screen flex items-center bg-bdf-black overflow-hidden">

      {/* VIDEO BACKGROUND — put hero.mp4 inside /public folder */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero1.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.jpg"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1C2B2B]/65 z-10" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-bdf-black to-transparent z-10" />

      {/* Gold left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold z-20 opacity-60" />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.025] z-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#0ABAB5 1px, transparent 1px), linear-gradient(90deg, #0ABAB5 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-16 pt-28 md:pt-32 pb-16 md:pb-20 w-full" style={{ fontFamily: 'ErasMedium, sans-serif' }}>
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="animate-fade-up flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-10 h-px bg-gold" />
            <span className="text-[8px] md:text-[9px] tracking-[0.32em] md:tracking-[0.5em] text-gold" style={{ fontFamily: 'ErasMedium, sans-serif' }}>
              LUXURY ARCHITECTURE & INTERIORS
            </span>
          </div>

          {/* Title */}
          <h1
            className="animate-fade-up-delay font-cormorant font-light leading-[1.05] mb-8 text-[#F7F4F0]"
            style={{ fontSize: isMobile ? 'clamp(42px, 12vw, 60px)' : 'clamp(52px, 7vw, 92px)' }}
          >
            Designing<br />
            Spaces That<br />
            <em className="text-gold not-italic">Inspire</em>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-[10px] md:text-[11px] tracking-[0.12em] md:tracking-[0.15em] text-[#F7F4F0]/60 leading-6 md:leading-8 mb-10 md:mb-12 max-w-md"
            style={{ fontFamily: 'ErasMedium, sans-serif' }}>
            WE CREATE HIGH-END RESIDENTIAL AND COMMERCIAL
            INTERIORS THAT REDEFINE MODERN LUXURY LIVING.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
            <a href="#portfolio" className="text-[9px] tracking-[0.28em] md:tracking-[0.35em] font-semibold text-bdf-black bg-gold hover:bg-gold-light transition-colors duration-300 px-7 md:px-9 py-4"
              style={{ fontFamily: 'ErasMedium, sans-serif', textDecoration: 'none', display: 'inline-block' }}>
              VIEW OUR WORK
            </a>
            <button className="text-[9px] tracking-[0.28em] md:tracking-[0.35em] text-[#F7F4F0] border border-bdf-white/30 hover:border-gold hover:text-gold transition-all duration-300 px-7 md:px-9 py-4"
              style={{ fontFamily: 'ErasMedium, sans-serif' }}
              onClick={() => navigate('/about')}>
              OUR STORY
            </button>
          </div>
        </div>
      </div>

      {/* EST tag */}
      <div className="absolute bottom-6 md:bottom-10 right-4 md:right-16 z-20">
        <span className="text-[8px] tracking-[0.3em] text-[#F7F4F0]/55" style={{ fontFamily: 'ErasMedium, sans-serif' }}>EST. 2012</span>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up-delay-3 absolute bottom-6 md:bottom-10 left-4 md:left-16 z-20 flex items-center gap-3 md:gap-4">
        <div className="animate-scroll-pulse w-px h-14 bg-gold opacity-40" />
        <span className="text-[8px] tracking-[0.4em] text-[#F7F4F0]/60" style={{ fontFamily: 'ErasMedium, sans-serif' }}>SCROLL</span>
      </div>

    </section>
    </>
  )
}
