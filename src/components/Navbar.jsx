import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { productData } from '../data/productData'
import useResponsive from '../hooks/useResponsive'

const productCategories = [
  {
    name: 'Bi-Fold Doors',
    id: 'bifold',
    items: ['Aluminium Bifold Doors', 'Bi Folding Doors External', 'Bi Folding Internal Doors', 'Schuco AS FD 75/90.HI', 'Schuco ASS70.HI Bifold Doors', 'Schuco Cornerless Bifold Doors', 'Cortizo Bifold Doors', 'Cortizo Bifold Plus Doors', 'Trade Only Bifold Doors'],
  },
  {
    name: 'Sliding Doors',
    id: 'sliding',
    items: ['Schuco ASS 50 Sliding Door', 'Schuco ASE 60/80 Sliding Doors', 'Schuco ASS 70 Slimline', 'Schuco ASS 77 PD Panorama', 'Cortizo Cor Vision Sliding Doors', 'Cortizo Cor Vision Plus', 'Trade Only Sliding Doors'],
  },
  {
    name: 'Windows',
    id: 'windows',
    items: ['Schuco AWS 70 High Insulated', 'Schuco AWS 70 Sc Slimline', 'Schuco AWS 70 Tilt & Turn', 'Cortizo Sliding Windows', 'Cortizo Arch Invisible Tilt & Turn'],
  },
  {
    name: 'Roof Systems',
    id: 'roof',
    items: ['BDF Lantern Skylight', 'BDF Flat Sky Light', 'Schuco CMC 50 HI Winter Gardens', 'Architectural Glass & Structural Glazing'],
  },
  {
    name: 'Entrance Doors',
    id: 'entrance',
    items: ['Schuco Front Doors', 'Cortizo Entrance Doors', 'Aluprof MB-79N Panel Door', 'Aluprof MB-86N Panel Door', 'Aluprof MB-104 Passive Panel Door', 'Aluprof MB-86N Pivot Door', 'BDF Glazed & Commercial Doors'],
  },
]

export default function Navbar() {
  const { isMobile } = useResponsive()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [expandedMobileCategories, setExpandedMobileCategories] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const productsRef = useRef(null)
  const closeTimer = useRef(null)

  const isHome = location.pathname === '/'
  const onHero = isHome && !scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Close dropdown on route change
  useEffect(() => {
    setProductsOpen(false)
    setMenuOpen(false)
    setMobileProductsOpen(false)
    setExpandedMobileCategories({})
  }, [location.pathname])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = previousOverflow || ''
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobile, menuOpen])

  const openDropdown = () => {
    clearTimeout(closeTimer.current)
    setProductsOpen(true)
  }
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120)
  }

  const goToPortfolio = () => {
    navigate('/#portfolio')
    setMenuOpen(false)
  }

  const toggleMobileCategory = (categoryId) => {
    setExpandedMobileCategories((current) => ({
      ...current,
      [categoryId]: !current[categoryId],
    }))
  }

  const normalizeProductName = (value) =>
    value
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()

  const getProductPath = (categoryId, itemName) => {
    const normalizedItem = normalizeProductName(itemName)
    const entries = Object.entries(productData).filter(([, product]) => product.categoryId === categoryId)

    const exactMatch = entries.find(([, product]) => normalizeProductName(product.name) === normalizedItem)
    if (exactMatch) return `/products/${exactMatch[0]}`

    const partialMatch = entries.find(([, product]) => {
      const normalizedProduct = normalizeProductName(product.name)
      return normalizedProduct.includes(normalizedItem) || normalizedItem.includes(normalizedProduct)
    })
    if (partialMatch) return `/products/${partialMatch[0]}`

    return `/products#${categoryId}`
  }

  const links = [
    { label: 'About',     path: '/about',   hash: null },
    { label: 'Portfolio', path: null,        hash: '#portfolio' },
    { label: 'Areas',     path: '/areas',    hash: null },
    { label: 'Blog',      path: '/blog',     hash: null },
    { label: 'Careers',   path: '/careers',  hash: null },
  ]

  const isActive = (path) => location.pathname === path
  const defaultLinkColor = onHero ? '#F7F4F0' : '#1C2B2B'

  const linkStyle = (path) => ({
    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
    color: isActive(path) ? '#0ABAB5' : defaultLinkColor,
    fontSize: '12px', letterSpacing: '0.18em', fontWeight: '700',
    transition: 'color 0.3s', fontFamily: 'ErasMedium, sans-serif', fontStyle: 'normal',
  })

  const navBg = onHero ? 'transparent' : 'rgba(247,244,240,0.98)'
  const navBorder = onHero ? 'none' : scrolled ? '1px solid rgba(10,186,181,0.2)' : '1px solid rgba(10,186,181,0.12)'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${onHero ? '' : 'backdrop-blur-sm'} ${scrolled && !onHero ? 'py-1' : 'py-2'}`}
      style={{ background: navBg, borderBottom: navBorder }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4">

        {/* Logo */}
        <button onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <img
            src="/bdfa-logo.webp"
            alt="BDF Architectural"
            style={{
              height: isMobile ? '62px' : '78px',
              width: 'auto',
              filter: onHero ? 'brightness(0) invert(1)' : 'none',
              transition: 'filter 0.5s',
            }}
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">

          {/* Products mega-dropdown trigger */}
          <div ref={productsRef} style={{ position: 'relative' }}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}>
            <button
              onClick={() => navigate('/products')}
              style={{ ...linkStyle('/products'), display: 'flex', alignItems: 'center', gap: '5px' }}
              onMouseEnter={e => e.currentTarget.querySelector('span').style.color = '#0ABAB5'}
              onMouseLeave={e => e.currentTarget.querySelector('span').style.color = isActive('/products') ? '#0ABAB5' : defaultLinkColor}>
              <span style={{ color: isActive('/products') ? '#0ABAB5' : defaultLinkColor, transition: 'color 0.3s', fontSize: '12px', letterSpacing: '0.18em', fontWeight: 700, fontFamily: 'ErasMedium, sans-serif' }}>
                PRODUCTS
              </span>
              <svg style={{ transition: 'transform 0.3s', transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.7 }}
                width="10" height="10" viewBox="0 0 24 24" fill="none"
                stroke={isActive('/products') ? '#0ABAB5' : defaultLinkColor} strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            {/* Mega Dropdown */}
            {productsOpen && (
              <div
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                style={{
                  position: 'fixed', top: scrolled ? '64px' : '80px', left: 0, right: 0,
                  background: 'rgba(247,244,240,0.99)', backdropFilter: 'blur(12px)',
                  borderTop: '2px solid #0ABAB5', borderBottom: '1px solid rgba(10,186,181,0.2)',
                  boxShadow: '0 20px 60px rgba(28,43,43,0.12)',
                  zIndex: 100, padding: '40px 0', transition: 'top 0.3s',
                }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>

                  {/* Header row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '32px', height: '1px', background: '#0ABAB5' }} />
                      <span style={{ fontSize: '9px', letterSpacing: '4px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>ALL PRODUCTS</span>
                    </div>
                    <button
                      onClick={() => { navigate('/products'); setProductsOpen(false) }}
                      style={{ background: 'none', border: 'none', fontSize: '10px', letterSpacing: '2px', color: '#0ABAB5', cursor: 'pointer', fontFamily: 'ErasMedium, sans-serif', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      VIEW ALL PRODUCTS
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  </div>

                  {/* Columns */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0' }}>
                    {productCategories.map((cat, ci) => (
                      <div key={cat.id}
                        style={{ paddingRight: '24px', borderRight: ci < productCategories.length - 1 ? '1px solid rgba(10,186,181,0.12)' : 'none', paddingLeft: ci > 0 ? '24px' : '0' }}>
                        <button
                          onClick={() => { navigate(`/products#${cat.id}`); setProductsOpen(false) }}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                          <span style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: 700, color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif' }}>
                            {cat.name.toUpperCase()}
                          </span>
                        </button>
                        <div style={{ width: '24px', height: '1px', background: '#0ABAB5', marginBottom: '14px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {cat.items.map((item, ii) => (
                            <button key={ii}
                              onClick={() => { navigate(getProductPath(cat.id, item)); setProductsOpen(false) }}
                              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '3px 0', textAlign: 'left', fontSize: '11px', color: 'rgba(28,43,43,0.65)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.4, transition: 'color 0.2s' }}
                              onMouseEnter={e => e.currentTarget.style.color = '#0ABAB5'}
                              onMouseLeave={e => e.currentTarget.style.color = 'rgba(28,43,43,0.65)'}>
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Other links */}
          {links.map(({ label, path, hash }) =>
            path ? (
              <button key={label} onClick={() => navigate(path)}
                style={linkStyle(path)}
                onMouseEnter={e => e.currentTarget.style.color = '#0ABAB5'}
                onMouseLeave={e => e.currentTarget.style.color = isActive(path) ? '#0ABAB5' : defaultLinkColor}>
                {label.toUpperCase()}
              </button>
            ) : (
              <button key={label} onClick={goToPortfolio}
                type="button"
                style={{ textDecoration: 'none', color: defaultLinkColor, fontSize: '12px', letterSpacing: '0.18em', fontWeight: '700', transition: 'color 0.3s', fontFamily: 'ErasMedium, sans-serif', fontStyle: 'normal' }}
                onMouseEnter={e => e.currentTarget.style.color = '#0ABAB5'}
                onMouseLeave={e => e.currentTarget.style.color = defaultLinkColor}>
                {label.toUpperCase()}
              </button>
            )
          )}
        </div>

        {/* CTA */}
        <button className="hidden md:block text-[9px] tracking-[0.3em] font-semibold text-bdf-black bg-gold hover:bg-gold-light transition-colors duration-300 px-6 py-3"
          style={{ fontFamily: 'ErasMedium, sans-serif' }}
          onClick={() => navigate('/contact')}>
          GET IN TOUCH
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 transition-all duration-300 ${onHero ? 'bg-[#F7F4F0]' : 'bg-bdf-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${onHero ? 'bg-[#F7F4F0]' : 'bg-bdf-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${onHero ? 'bg-[#F7F4F0]' : 'bg-bdf-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: '#F7F4F0',
            borderTop: '1px solid rgba(10,186,181,0.2)',
            maxHeight: 'calc(100vh - 72px)',
            overflowY: 'auto',
          }}
          className="md:hidden px-4 sm:px-6 py-5 flex flex-col gap-4"
        >

          {/* Products in mobile */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', textAlign: 'left', color: isActive('/products') ? '#0ABAB5' : '#1C2B2B', fontSize: '13px', letterSpacing: '0.18em', fontWeight: '700', fontFamily: 'ErasMedium, sans-serif', display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'space-between' }}>
              PRODUCTS
              <svg style={{ transition: 'transform 0.3s', transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0)' }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {mobileProductsOpen && (
              <div style={{ marginTop: '12px', paddingLeft: '16px', borderLeft: '2px solid rgba(10,186,181,0.3)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {productCategories.map(cat => (
                  <div key={cat.id}>
                    <button
                      onClick={() => { navigate(`/products#${cat.id}`); setMenuOpen(false) }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: '10px', letterSpacing: '2px', fontWeight: 700, color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '6px' }}>
                      {cat.name.toUpperCase()}
                    </button>
                    {(expandedMobileCategories[cat.id] ? cat.items : cat.items.slice(0, 4)).map((item, i) => (
                      <button
                        key={i}
                        onClick={() => { navigate(getProductPath(cat.id, item)); setMenuOpen(false) }}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '3px 0', textAlign: 'left', fontSize: '11px', color: 'rgba(28,43,43,0.65)', fontFamily: 'ErasMedium, sans-serif', display: 'block', width: '100%' }}
                      >
                        {item}
                      </button>
                    ))}
                    {cat.items.length > 4 && (
                      <button
                        type="button"
                        onClick={() => toggleMobileCategory(cat.id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0 0', fontSize: '10px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', marginTop: '2px' }}
                      >
                        {expandedMobileCategories[cat.id] ? 'Show less' : `+${cat.items.length - 4} more`}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Other links */}
          {links.map(({ label, path, hash }) =>
            path ? (
              <button key={label} onClick={() => { navigate(path); setMenuOpen(false) }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', textAlign: 'left', color: isActive(path) ? '#0ABAB5' : '#1C2B2B', fontSize: '13px', letterSpacing: '0.18em', fontWeight: '700', fontFamily: 'ErasMedium, sans-serif', fontStyle: 'normal' }}>
                {label.toUpperCase()}
              </button>
            ) : (
              <button key={label} onClick={goToPortfolio}
                type="button"
                style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none', color: '#1C2B2B', fontSize: '13px', letterSpacing: '0.18em', fontWeight: '700', fontFamily: 'ErasMedium, sans-serif', fontStyle: 'normal', padding: '4px 0', display: 'block', textAlign: 'left' }}>
                {label.toUpperCase()}
              </button>
            )
          )}
          <button className="mt-2 text-[9px] tracking-[0.3em] font-semibold text-bdf-black bg-gold px-6 py-3 self-start"
            style={{ fontFamily: 'ErasMedium, sans-serif' }}
            onClick={() => { navigate('/contact'); setMenuOpen(false) }}>
            GET IN TOUCH
          </button>
        </div>
      )}
    </nav>
  )
}
