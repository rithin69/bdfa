import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About',     path: '/about', hash: null },
    { label: 'Services',  path: null,     hash: '#services' },
    { label: 'Portfolio', path: null,     hash: '#portfolio' },
    { label: 'Process',   path: null,     hash: '#process' },
    { label: 'Contact',   path: '/contact',     hash: null  },
  ]

  const isActive = (path) => location.pathname === path

  const linkStyle = (path) => ({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    color: isActive(path) ? '#C9A84C' : 'rgba(245,240,232,0.6)',
    fontSize: '10px',
    letterSpacing: '0.25em',
    fontWeight: '400',
    transition: 'color 0.3s',
    fontFamily: 'ErasMedium, sans-serif',
    fontStyle: 'normal',
  })

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-bdf-black/95 backdrop-blur-sm border-b border-gold/10 py-4'
        : 'bg-gradient-to-b from-bdf-black/90 to-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontStyle: 'normal' }}>
          <div className="flex flex-col leading-none">
            <span style={{ fontFamily: 'ErasMedium, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '0.3em', color: '#F5F0E8', fontStyle: 'normal' }}>BDF</span>
            <span style={{ fontFamily: 'ErasMedium, sans-serif', fontWeight: 300, fontSize: '8px', letterSpacing: '0.4em', color: '#C9A84C', marginTop: '2px', fontStyle: 'normal' }}>ARCHITECTURAL</span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(({ label, path, hash }) =>
            path ? (
              <button key={label} onClick={() => navigate(path)}
                style={linkStyle(path)}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = isActive(path) ? '#C9A84C' : 'rgba(245,240,232,0.6)'}>
                {label.toUpperCase()}
              </button>
            ) : (
              <a key={label} href={hash}
                style={{ textDecoration: 'none', color: 'rgba(245,240,232,0.6)', fontSize: '10px', letterSpacing: '0.25em', fontWeight: '400', transition: 'color 0.3s', fontFamily: 'ErasMedium, sans-serif', fontStyle: 'normal' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.6)'}>
                {label.toUpperCase()}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <button className="hidden md:block text-[9px] tracking-[0.3em] font-semibold text-bdf-black bg-gold hover:bg-gold-light transition-colors duration-300 px-6 py-3"
          style={{ fontFamily: 'ErasMedium, sans-serif', fontStyle: 'normal' }}>
          GET IN TOUCH
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-px bg-bdf-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-bdf-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-bdf-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bdf-dark border-t border-gold/10 px-8 py-6 flex flex-col gap-5">
          {links.map(({ label, path, hash }) =>
            path ? (
              <button key={label} onClick={() => { navigate(path); setMenuOpen(false) }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', color: isActive(path) ? '#C9A84C' : 'rgba(245,240,232,0.7)', fontSize: '11px', letterSpacing: '0.25em', fontFamily: 'ErasMedium, sans-serif', fontStyle: 'normal' }}>
                {label.toUpperCase()}
              </button>
            ) : (
              <a key={label} href={hash} onClick={() => setMenuOpen(false)}
                style={{ textDecoration: 'none', color: 'rgba(245,240,232,0.7)', fontSize: '11px', letterSpacing: '0.25em', fontFamily: 'ErasMedium, sans-serif', fontStyle: 'normal' }}>
                {label.toUpperCase()}
              </a>
            )
          )}
          <button className="mt-2 text-[9px] tracking-[0.3em] font-semibold text-bdf-black bg-gold px-6 py-3 self-start"
            style={{ fontFamily: 'ErasMedium, sans-serif', fontStyle: 'normal' }}>
            GET IN TOUCH
          </button>
        </div>
      )}
    </nav>
  )
}