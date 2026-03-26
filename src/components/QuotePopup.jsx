import React, { useState } from 'react'
import useResponsive from '../hooks/useResponsive'
import { submitWebsiteForm } from '../utils/formSubmission'

const products = [
  'Bifold Doors', 'Sliding Doors', 'Slim Line Edition',
  'Windows', 'Roof Systems', 'Entrance Doors',
]

export default function QuotePopup() {
  const { isMobile } = useResponsive()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState([])
  const [form, setForm] = useState({ name: '', email: '', phone: '', enquiry: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [hovered, setHovered] = useState(false)

  const toggleProduct = (p) => {
    setSelected(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formElement = e.currentTarget
    setSubmitting(true)
    setError('')

    try {
      await submitWebsiteForm(formElement, {
        subject: 'New Free Quote enquiry from bdfa.uk',
        products: selected,
        source: 'Quote Popup',
      })
      formElement.reset()
      setError('')
      setForm({ name: '', email: '', phone: '', enquiry: '' })
      setSelected([])
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setOpen(false)
      }, 3000)
    } catch (submissionError) {
      setError('Submission failed. Please try again or email info@bdfa.uk.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: '#FFFFFF',
    border: '1px solid rgba(28,43,43,0.22)',
    color: '#1C2B2B',
    fontSize: '12px',
    fontFamily: 'ErasMedium, sans-serif',
    fontWeight: 500,
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
        top: isMobile ? 'auto' : '50%',
        bottom: isMobile ? '16px' : 'auto',
        transform: isMobile ? 'none' : 'translateY(-50%)',
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
        {!isMobile && (
        <div style={{
          background: '#EDF8F8',
          border: '1px solid rgba(10,186,181,0.35)',
          borderRight: 'none',
          borderRadius: '8px 0 0 0',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '-4px 0 20px rgba(0,0,0,0.5)',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span style={{ fontSize: '11px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '1px', whiteSpace: 'nowrap', fontWeight: 600 }}>
            0800 999 5575
          </span>
        </div>
        )}

        {/* Main CTA button — big, obvious, pulsing */}
        <button
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: hovered ? '#7DD8D6' : '#0ABAB5',
            border: 'none',
            borderRadius: '8px 0 0 8px',
            padding: '16px 20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: hovered
              ? '-6px 0 30px rgba(10,186,181,0.5)'
              : '-4px 0 20px rgba(10,186,181,0.3)',
            transition: 'all 0.3s ease',
            transform: hovered ? 'translateX(-4px)' : 'translateX(0)',
            animation: 'tabPulse 2.5s ease-in-out infinite',
          }}
        >
          {/* Icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2B2B" strokeWidth="2.5">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
          </svg>

          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '8px', letterSpacing: '2px', color: 'rgba(28,43,43,0.6)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '2px' }}>
              {/* NO OBLIGATION */}
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '1px', whiteSpace: 'nowrap' }}>
              FREE QUOTE
            </div>
          </div>

          {/* Arrow indicator */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C2B2B" strokeWidth="2.5"
            style={{ transition: 'transform 0.3s', transform: hovered ? 'translateX(-3px)' : 'translateX(0)' }}>
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        {/* Click me hint */}
        {/* <div style={{
          background: '#F7F4F0',
          border: '1px solid rgba(10,186,181,0.2)',
          borderRight: 'none',
          borderRadius: '0 0 0 6px',
          padding: '5px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0ABAB5', animation: 'dotPulse 1.5s ease-in-out infinite' }} />
          <span style={{ fontSize: '9px', color: 'rgba(28,43,43,0.4)', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '1px', whiteSpace: 'nowrap' }}>
            CLICK TO OPEN
          </span>
        </div> */}
      </div>

      <style>{`
        @keyframes tabPulse {
          0%, 100% { box-shadow: -4px 0 20px rgba(10,186,181,0.3); }
          50%       { box-shadow: -4px 0 32px rgba(10,186,181,0.55); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.3); }
        }
        .quote-input::placeholder { color: rgba(28,43,43,0.72); }
        .quote-input:focus { border-color: #0ABAB5 !important; }
        @media (max-width: 768px) {
          .quote-products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ══ SLIDE-IN PANEL ══ */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: open ? '0' : (isMobile ? '-100vw' : '-500px'),
        width: isMobile ? '100vw' : '460px',
        maxWidth: '100vw',
        height: '100vh',
        background: '#F7F4F0',
        borderLeft: '1px solid rgba(10,186,181,0.2)',
        zIndex: 1000,
        transition: 'right 0.45s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}>

        {/* Header */}
        <div style={{ background: '#0ABAB5', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <div style={{ fontSize: '9px', letterSpacing: '4px', color: 'rgba(28,43,43,0.55)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '4px' }}>NO OBLIGATION</div>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '2px' }}>GET A FREE QUOTE</div>
          </div>
          <button onClick={() => setOpen(false)}
            style={{ background: 'rgba(28,43,43,0.18)', border: 'none', width: '38px', height: '38px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0, transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(28,43,43,0.35)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(28,43,43,0.18)'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C2B2B" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Phone strip */}
        <div style={{ background: '#EDF8F8', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid rgba(10,186,181,0.1)', flexShrink: 0 }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(10,186,181,0.1)', border: '1px solid rgba(10,186,181,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(28,43,43,0.65)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '2px' }}>OR CALL US FREE</div>
            <a href="tel:08009995575" style={{ fontSize: '20px', fontWeight: 700, color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '2px', textDecoration: 'none' }}>
              0800 999 5575
            </a>
          </div>
        </div>

        {/* Form body */}
        <div style={{ padding: '24px 28px', flex: 1 }}>
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '20px', textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(10,186,181,0.12)', border: '2px solid #0ABAB5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div style={{ fontSize: '20px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', fontWeight: 700 }}>Thank You!</div>
              <div style={{ fontSize: '13px', color: 'rgba(28,43,43,0.55)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.9 }}>
                We've received your enquiry.<br />We'll be in touch very shortly.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="hidden" name="form_type" value="Free Quote" />
              <input type="hidden" name="selected_products" value={selected.join(', ')} />

              <p style={{ fontSize: '12px', color: 'rgba(28,43,43,0.82)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.8, margin: '0 0 8px' }}>
                Fill in the form below and we will get back to you with a free, no-obligation quote.
              </p>

              {[
                { label: 'NAME', key: 'name', type: 'text', placeholder: 'Your full name' },
                { label: 'EMAIL', key: 'email', type: 'email', placeholder: 'Your email address' },
                { label: 'PHONE', key: 'phone', type: 'tel', placeholder: 'Your phone number' },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.88)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '7px' }}>
                    {label} <span style={{ color: '#0ABAB5' }}>*</span>
                  </label>
                  <input required type={type} placeholder={placeholder}
                    className="quote-input"
                    name={key}
                    value={form[key]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0ABAB5'}
                    onBlur={e => e.target.style.borderColor = 'rgba(10,186,181,0.25)'}
                  />
                </div>
              ))}

              {/* Products */}
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.88)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '10px' }}>
                  PRODUCTS OF INTEREST <span style={{ color: '#0ABAB5' }}>*</span>
                </label>
                <div className="quote-products-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {products.map(p => (
                    <div key={p} onClick={() => toggleProduct(p)}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '10px 12px', border: `1px solid ${selected.includes(p) ? '#0ABAB5' : 'rgba(28,43,43,0.18)'}`, background: selected.includes(p) ? '#1C2B2B' : '#FFFFFF', transition: 'all 0.2s', userSelect: 'none' }}>
                      <div style={{ width: '16px', height: '16px', border: `1.5px solid ${selected.includes(p) ? '#0ABAB5' : 'rgba(28,43,43,0.55)'}`, background: selected.includes(p) ? '#0ABAB5' : 'transparent', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                        {selected.includes(p) && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1C2B2B" strokeWidth="3.5">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        )}
                      </div>
                      <span style={{ fontSize: '10px', color: selected.includes(p) ? '#F7F4F0' : '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '0.5px', lineHeight: 1.3 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquiry */}
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.88)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '7px' }}>
                  ENQUIRY <span style={{ color: '#0ABAB5' }}>*</span>
                </label>
                <textarea required rows={4} placeholder="Tell us about your project..."
                  className="quote-input"
                  name="enquiry"
                  value={form.enquiry}
                  onChange={e => setForm({ ...form, enquiry: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  onFocus={e => e.target.style.borderColor = '#0ABAB5'}
                  onBlur={e => e.target.style.borderColor = 'rgba(10,186,181,0.25)'}
                />
              </div>

              {error && (
                <div style={{ fontSize: '12px', color: '#C24F4F', lineHeight: 1.6 }}>
                  {error}
                </div>
              )}

              <button type="submit"
                disabled={submitting}
                style={{ background: '#0ABAB5', border: 'none', padding: '17px', color: '#1C2B2B', fontSize: '11px', letterSpacing: '3px', fontWeight: 700, fontFamily: 'ErasMedium, sans-serif', cursor: 'pointer', transition: 'all 0.3s', marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#7DD8D6'; e.currentTarget.style.letterSpacing = '4px' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0ABAB5'; e.currentTarget.style.letterSpacing = '3px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C2B2B" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                {submitting ? 'SENDING...' : 'SUBMIT ENQUIRY'}
              </button>

            </form>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(28,43,43,0.6)', zIndex: 999, backdropFilter: 'blur(3px)' }} />
      )}
    </>
  )
}
