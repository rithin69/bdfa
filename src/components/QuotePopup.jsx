import React, { useState } from 'react'

const products = [
  'Bifold Doors', 'Sliding Doors', 'Slim Line Edition',
  'Windows', 'Roof Systems', 'Entrance Doors',
]

export default function QuotePopup() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState([])
  const [form, setForm] = useState({ name: '', email: '', phone: '', enquiry: '' })
  const [submitted, setSubmitted] = useState(false)
  const [hovered, setHovered] = useState(false)

  const toggleProduct = (p) => {
    setSelected(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setOpen(false)
      setForm({ name: '', email: '', phone: '', enquiry: '' })
      setSelected([])
    }, 3000)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(245,240,232,0.05)',
    border: '1px solid rgba(201,168,76,0.25)',
    color: '#F0EBE0',
    fontSize: '12px',
    fontFamily: 'ErasMedium, sans-serif',
    outline: 'none',
    transition: 'border-color 0.3s',
    borderRadius: 0,
    boxSizing: 'border-box',
  }

  return (
    <>
      {/* ══ FLOATING BUTTON — very obvious ══ */}
      <div style={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 998,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '2px',
        transition: 'opacity 0.3s',
        opacity: open ? 0 : 1,
        pointerEvents: open ? 'none' : 'auto',
      }}>

        {/* Phone pill */}
        <div style={{
          background: '#111111',
          border: '1px solid rgba(201,168,76,0.35)',
          borderRight: 'none',
          borderRadius: '8px 0 0 0',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '-4px 0 20px rgba(0,0,0,0.5)',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span style={{ fontSize: '11px', color: '#C9A84C', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '1px', whiteSpace: 'nowrap', fontWeight: 600 }}>
            0800 999 5575
          </span>
        </div>

        {/* Main CTA button — big, obvious, pulsing */}
        <button
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: hovered ? '#E8D5A3' : '#C9A84C',
            border: 'none',
            borderRadius: '8px 0 0 8px',
            padding: '16px 20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: hovered
              ? '-6px 0 30px rgba(201,168,76,0.5)'
              : '-4px 0 20px rgba(201,168,76,0.3)',
            transition: 'all 0.3s ease',
            transform: hovered ? 'translateX(-4px)' : 'translateX(0)',
            animation: 'tabPulse 2.5s ease-in-out infinite',
          }}
        >
          {/* Icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2.5">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
          </svg>

          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '8px', letterSpacing: '2px', color: 'rgba(8,8,8,0.6)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '2px' }}>
              {/* NO OBLIGATION */}
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#080808', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '1px', whiteSpace: 'nowrap' }}>
              FREE QUOTE
            </div>
          </div>

          {/* Arrow indicator */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2.5"
            style={{ transition: 'transform 0.3s', transform: hovered ? 'translateX(-3px)' : 'translateX(0)' }}>
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        {/* Click me hint */}
        {/* <div style={{
          background: '#080808',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRight: 'none',
          borderRadius: '0 0 0 6px',
          padding: '5px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', animation: 'dotPulse 1.5s ease-in-out infinite' }} />
          <span style={{ fontSize: '9px', color: 'rgba(245,240,232,0.4)', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '1px', whiteSpace: 'nowrap' }}>
            CLICK TO OPEN
          </span>
        </div> */}
      </div>

      <style>{`
        @keyframes tabPulse {
          0%, 100% { box-shadow: -4px 0 20px rgba(201,168,76,0.3); }
          50%       { box-shadow: -4px 0 32px rgba(201,168,76,0.55); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.3); }
        }
        .quote-input::placeholder { color: rgba(245,240,232,0.25); }
        .quote-input:focus { border-color: #C9A84C !important; }
      `}</style>

      {/* ══ SLIDE-IN PANEL ══ */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: open ? '0' : '-500px',
        width: '460px',
        maxWidth: '100vw',
        height: '100vh',
        background: '#0A0A0A',
        borderLeft: '1px solid rgba(201,168,76,0.2)',
        zIndex: 1000,
        transition: 'right 0.45s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}>

        {/* Header */}
        <div style={{ background: '#C9A84C', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <div style={{ fontSize: '9px', letterSpacing: '4px', color: 'rgba(8,8,8,0.55)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '4px' }}>NO OBLIGATION</div>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#080808', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '2px' }}>GET A FREE QUOTE</div>
          </div>
          <button onClick={() => setOpen(false)}
            style={{ background: 'rgba(8,8,8,0.18)', border: 'none', width: '38px', height: '38px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0, transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(8,8,8,0.35)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(8,8,8,0.18)'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Phone strip */}
        <div style={{ background: '#111', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid rgba(201,168,76,0.1)', flexShrink: 0 }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(245,240,232,0.35)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '2px' }}>OR CALL US FREE</div>
            <a href="tel:08009995575" style={{ fontSize: '20px', fontWeight: 700, color: '#C9A84C', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '2px', textDecoration: 'none' }}>
              0800 999 5575
            </a>
          </div>
        </div>

        {/* Form body */}
        <div style={{ padding: '24px 28px', flex: 1 }}>
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '20px', textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(201,168,76,0.12)', border: '2px solid #C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div style={{ fontSize: '20px', color: '#C9A84C', fontFamily: 'ErasMedium, sans-serif', fontWeight: 700 }}>Thank You!</div>
              <div style={{ fontSize: '13px', color: 'rgba(245,240,232,0.55)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.9 }}>
                We've received your enquiry.<br />We'll be in touch very shortly.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              <p style={{ fontSize: '12px', color: 'rgba(245,240,232,0.45)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.8, margin: '0 0 8px' }}>
                Fill in the form below and we will get back to you with a free, no-obligation quote.
              </p>

              {[
                { label: 'NAME', key: 'name', type: 'text', placeholder: 'Your full name' },
                { label: 'EMAIL', key: 'email', type: 'email', placeholder: 'Your email address' },
                { label: 'PHONE', key: 'phone', type: 'tel', placeholder: 'Your phone number' },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(245,240,232,0.5)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '7px' }}>
                    {label} <span style={{ color: '#C9A84C' }}>*</span>
                  </label>
                  <input required type={type} placeholder={placeholder}
                    className="quote-input"
                    value={form[key]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
                  />
                </div>
              ))}

              {/* Products */}
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(245,240,232,0.5)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '10px' }}>
                  PRODUCTS OF INTEREST <span style={{ color: '#C9A84C' }}>*</span>
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {products.map(p => (
                    <div key={p} onClick={() => toggleProduct(p)}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '10px 12px', border: `1px solid ${selected.includes(p) ? '#C9A84C' : 'rgba(201,168,76,0.15)'}`, background: selected.includes(p) ? 'rgba(201,168,76,0.08)' : 'rgba(245,240,232,0.02)', transition: 'all 0.2s', userSelect: 'none' }}>
                      <div style={{ width: '16px', height: '16px', border: `1.5px solid ${selected.includes(p) ? '#C9A84C' : 'rgba(245,240,232,0.25)'}`, background: selected.includes(p) ? '#C9A84C' : 'transparent', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                        {selected.includes(p) && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="3.5">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        )}
                      </div>
                      <span style={{ fontSize: '10px', color: selected.includes(p) ? '#F0EBE0' : 'rgba(245,240,232,0.45)', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '0.5px', lineHeight: 1.3 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquiry */}
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(245,240,232,0.5)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '7px' }}>
                  ENQUIRY <span style={{ color: '#C9A84C' }}>*</span>
                </label>
                <textarea required rows={4} placeholder="Tell us about your project..."
                  className="quote-input"
                  value={form.enquiry}
                  onChange={e => setForm({ ...form, enquiry: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  onFocus={e => e.target.style.borderColor = '#C9A84C'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
                />
              </div>

              <button type="submit"
                style={{ background: '#C9A84C', border: 'none', padding: '17px', color: '#080808', fontSize: '11px', letterSpacing: '3px', fontWeight: 700, fontFamily: 'ErasMedium, sans-serif', cursor: 'pointer', transition: 'all 0.3s', marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#E8D5A3'; e.currentTarget.style.letterSpacing = '4px' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.letterSpacing = '3px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                SUBMIT ENQUIRY
              </button>

            </form>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(8,8,8,0.6)', zIndex: 999, backdropFilter: 'blur(3px)' }} />
      )}
    </>
  )
}