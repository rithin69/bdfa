import React from 'react'

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-bdf-black overflow-hidden">

      {/* VIDEO BACKGROUND — put hero.mp4 inside /public folder */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.jpg"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-bdf-black/65 z-10" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bdf-black to-transparent z-10" />

      {/* Gold left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold z-20 opacity-60" />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.025] z-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 pt-32 pb-20 w-full" style={{ fontFamily: 'ErasMedium, sans-serif' }}>
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="animate-fade-up flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-gold" />
            <span className="text-[9px] tracking-[0.5em] text-gold" style={{ fontFamily: 'ErasMedium, sans-serif' }}>
              LUXURY ARCHITECTURE & INTERIORS
            </span>
          </div>

          {/* Title */}
          <h1
            className="animate-fade-up-delay font-cormorant font-light leading-[1.05] mb-8 text-bdf-white"
            style={{ fontSize: 'clamp(52px, 7vw, 92px)' }}
          >
            Designing<br />
            Spaces That<br />
            <em className="text-gold not-italic">Inspire</em>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-[11px] tracking-[0.15em] text-bdf-white/60 leading-8 mb-12 max-w-md"
            style={{ fontFamily: 'ErasMedium, sans-serif' }}>
            WE CREATE HIGH-END RESIDENTIAL AND COMMERCIAL
            INTERIORS THAT REDEFINE MODERN LUXURY LIVING.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
            <button className="text-[9px] tracking-[0.35em] font-semibold text-bdf-black bg-gold hover:bg-gold-light transition-colors duration-300 px-9 py-4"
              style={{ fontFamily: 'ErasMedium, sans-serif' }}>
              VIEW OUR WORK
            </button>
            <button className="text-[9px] tracking-[0.35em] text-bdf-white border border-bdf-white/30 hover:border-gold hover:text-gold transition-all duration-300 px-9 py-4"
              style={{ fontFamily: 'ErasMedium, sans-serif' }}>
              OUR STORY
            </button>
          </div>
        </div>
      </div>

      {/* EST tag */}
      <div className="absolute bottom-10 right-8 md:right-16 z-20">
        <span className="text-[8px] tracking-[0.3em] text-bdf-white/20" style={{ fontFamily: 'ErasMedium, sans-serif' }}>EST. 2012</span>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up-delay-3 absolute bottom-10 left-8 md:left-16 z-20 flex items-center gap-4">
        <div className="animate-scroll-pulse w-px h-14 bg-gold opacity-40" />
        <span className="text-[8px] tracking-[0.4em] text-bdf-white/25" style={{ fontFamily: 'ErasMedium, sans-serif' }}>SCROLL</span>
      </div>

    </section>
  )
}