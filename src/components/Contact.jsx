import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import useResponsive from '../hooks/useResponsive'
import { submitWebsiteForm } from '../utils/formSubmission'

const showroomAddress = 'Bingley, The Common, West Drayton, Middlesex, UB7 7HQ'
const mapQuery = encodeURIComponent(`BDF Architectural, ${showroomAddress}`)
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`
const embedMapUrl = `https://www.google.com/maps?q=${mapQuery}&z=17&output=embed`

const contactInfo = [
  {
    label: 'OFFICE PHONE',
    value: '01895 439 199',
    href: 'tel:01895439199',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'FREE PHONE',
    value: '0800 999 5575',
    href: 'tel:08009995575',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        <circle cx="12" cy="12" r="3" stroke="#0ABAB5" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    label: 'EMAIL',
    value: 'info@bdfa.uk',
    href: 'mailto:info@bdfa.uk',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'ADDRESS',
    value: showroomAddress,
    href: directionsUrl,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

const hours = [
  { day: 'Monday',    time: '09:00 – 17:00' },
  { day: 'Tuesday',   time: '09:00 – 17:00' },
  { day: 'Wednesday', time: '09:00 – 17:00' },
  { day: 'Thursday',  time: '09:00 – 17:00' },
  { day: 'Friday',    time: '09:00 – 17:00' },
  { day: 'Saturday',  time: '09:00 – 17:00' },
  { day: 'Sunday',    time: 'Closed' },
]

const socials = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/448009995575',
    color: '#25D366',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    color: '#1877F2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    color: '#E4405F',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
]

const products = [
  'Bifold Doors', 'Sliding Doors', 'Slim Line Edition',
  'Windows', 'Roof Systems', 'Entrance Doors',
]

export default function Contact() {
  const { isMobile } = useResponsive()
  const [form, setForm] = useState({ name: '', email: '', enquiry: '' })
  const [selected, setSelected] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [focused, setFocused] = useState('')

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
        subject: 'New Get In Touch enquiry from bdfa.uk',
      })
      formElement.reset()
      setError('')
      setForm({ name: '', email: '', enquiry: '' })
      setSelected([])
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
    } catch (submissionError) {
      setError('Submission failed. Please try again or email info@bdfa.uk.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle = (field) => ({
    width: '100%',
    padding: '16px 18px',
    background: 'rgba(28,43,43,0.04)',
    border: `1px solid ${focused === field ? '#0ABAB5' : 'rgba(10,186,181,0.45)'}`,
    color: '#1C2B2B',
    fontSize: '13px',
    fontFamily: 'ErasMedium, sans-serif',
    outline: 'none',
    transition: 'border-color 0.3s',
    borderRadius: 0,
    boxSizing: 'border-box',
  })

  const today = new Date().toLocaleDateString('en-GB', { weekday: 'long' })

  return (
    <div style={{ background: '#F7F4F0', color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif' }}>
      <Helmet>
        <title>Contact BDF Architectural | Free Quote | 01895 439 199</title>
        <meta name="description" content="Contact BDF Architectural for a free quote on bifold doors, sliding doors, and aluminium windows. Visit our showroom in West Drayton, Middlesex or call 01895 439 199." />
        <link rel="canonical" href="https://www.bdfa.uk/contact" />
        <meta property="og:url" content="https://www.bdfa.uk/contact" />
        <meta property="og:title" content="Contact BDF Architectural | Free Quote" />
      </Helmet>

      <style>{`
        .contact-input::placeholder { color: rgba(28,43,43,0.45); }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes checkPop { 0%{transform:scale(0)} 70%{transform:scale(1.2)} 100%{transform:scale(1)} }
        @media (max-width: 768px) {
          .contact-shell-pad {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .contact-main-grid,
          .contact-products-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-map-strip {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', height: '55vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=90" alt="Contact"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,43,43,0.82)' }} />
        <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '3px', background: 'linear-gradient(to bottom, transparent, #0ABAB5 30%, #0ABAB5 70%, transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to bottom, transparent, #F7F4F0)' }} />

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 32px', animation: 'fadeUp 1s ease both' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: '#0ABAB5' }} />
            <span style={{ fontSize: '9px', letterSpacing: '5px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>REACH OUT TO US</span>
            <div style={{ width: '40px', height: '1px', background: '#0ABAB5' }} />
          </div>
          <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(56px,8vw,110px)', fontWeight: 300, color: '#F7F4F0', margin: '0 0 16px', lineHeight: 1 }}>
            Get In <span style={{ color: '#0ABAB5' }}>Touch</span>
          </h1>
          <p style={{ fontSize: '12px', letterSpacing: '3px', color: 'rgba(247,244,240,0.8)', fontFamily: 'ErasMedium, sans-serif', textTransform: 'uppercase' }}>
            We'd Love To Hear From You
          </p>
        </div>
      </section>

      {/* ══ MAIN CONTENT ══ */}
      <section className="contact-shell-pad" style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '48px 16px' : '80px 64px' }}>
        <div className="contact-main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? '40px' : '80px' }}>

          {/* ── LEFT: FORM ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', background: '#0ABAB5', flexShrink: 0 }} />
              <span style={{ fontSize: '9px', letterSpacing: '5px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>SEND A MESSAGE</span>
            </div>
            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(32px,3vw,48px)', fontWeight: 300, color: '#1C2B2B', margin: '0 0 12px', lineHeight: 1.2 }}>
              Fill In The <span style={{ color: '#0ABAB5' }}>Form Below</span>
            </h2>
            <p style={{ fontSize: '13px', color: 'rgba(28,43,43,0.72)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.9, margin: '0 0 36px' }}>
              Thank you for considering our bifold doors. If you have any questions or would like to schedule a consultation, please don't hesitate to get in touch.
            </p>

            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px', gap: '20px', textAlign: 'center', border: '1px solid rgba(10,186,181,0.2)', background: 'rgba(10,186,181,0.04)' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(10,186,181,0.12)', border: '2px solid #0ABAB5', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'checkPop 0.5s ease both' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div style={{ fontSize: '22px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', fontWeight: 700 }}>Message Sent!</div>
                <div style={{ fontSize: '13px', color: 'rgba(28,43,43,0.5)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.9 }}>
                  Thank you for reaching out.<br />We'll get back to you very shortly.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input type="hidden" name="form_type" value="Get In Touch" />
                <input type="hidden" name="selected_products" value={selected.join(', ')} />

                {/* Name */}
                <div>
                  <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.8)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '8px' }}>
                    NAME <span style={{ color: '#0ABAB5' }}>*</span>
                  </label>
                  <input required type="text" placeholder="Your full name"
                    className="contact-input"
                    name="name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle('name')}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.8)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '8px' }}>
                    EMAIL <span style={{ color: '#0ABAB5' }}>*</span>
                  </label>
                  <input required type="email" placeholder="Your email address"
                    className="contact-input"
                    name="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle('email')}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                {/* Products */}
                <div>
                  <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.8)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '12px' }}>
                    PRODUCTS OF INTEREST
                  </label>
                  <div className="contact-products-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {products.map(p => (
                      <div key={p} onClick={() => toggleProduct(p)}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '11px 14px', border: `1px solid ${selected.includes(p) ? '#0ABAB5' : 'rgba(28,43,43,0.18)'}`, background: selected.includes(p) ? '#1C2B2B' : '#FFFFFF', transition: 'all 0.2s', userSelect: 'none' }}>
                        <div style={{ width: '16px', height: '16px', border: `1.5px solid ${selected.includes(p) ? '#0ABAB5' : 'rgba(28,43,43,0.45)'}`, background: selected.includes(p) ? '#0ABAB5' : 'transparent', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                          {selected.includes(p) && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1C2B2B" strokeWidth="3.5">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          )}
                        </div>
                        <span style={{ fontSize: '11px', color: selected.includes(p) ? '#F7F4F0' : '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', fontWeight: 500 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquiry */}
                <div>
                  <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.8)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '8px' }}>
                    ENQUIRY <span style={{ color: '#0ABAB5' }}>*</span>
                  </label>
                  <textarea required rows={5} placeholder="Tell us about your project and requirements..."
                    className="contact-input"
                    name="enquiry"
                    value={form.enquiry}
                    onChange={e => setForm({ ...form, enquiry: e.target.value })}
                    style={{ ...inputStyle('enquiry'), resize: 'vertical', minHeight: '130px' }}
                    onFocus={() => setFocused('enquiry')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                {error && (
                  <div style={{ fontSize: '12px', color: '#C24F4F', lineHeight: 1.6 }}>
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button type="submit"
                  disabled={submitting}
                  style={{ background: '#0ABAB5', border: 'none', padding: '18px', color: '#1C2B2B', fontSize: '11px', letterSpacing: '4px', fontWeight: 700, fontFamily: 'ErasMedium, sans-serif', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#7DD8D6' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#0ABAB5' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C2B2B" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  {submitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

              </form>
            )}
          </div>

          {/* ── RIGHT: INFO ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Contact details */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '1px', background: '#0ABAB5', flexShrink: 0 }} />
                <span style={{ fontSize: '9px', letterSpacing: '5px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>CONTACT DETAILS</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px 20px', border: '1px solid rgba(10,186,181,0.35)', textDecoration: 'none', transition: 'all 0.3s', background: 'rgba(28,43,43,0.03)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ABAB5'; e.currentTarget.style.background = 'rgba(10,186,181,0.07)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(10,186,181,0.35)'; e.currentTarget.style.background = 'rgba(28,43,43,0.03)' }}>
                    <div style={{ width: '40px', height: '40px', border: '1px solid rgba(10,186,181,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(28,43,43,0.8)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '4px' }}>{item.label}</div>
                      <div style={{ fontSize: '14px', color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', fontWeight: 500, lineHeight: 1.5 }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Opening Hours */}
            <div style={{ border: '1px solid rgba(10,186,181,0.4)', padding: '28px 24px', background: 'rgba(10,186,181,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span style={{ fontSize: '9px', letterSpacing: '4px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>OPENING HOURS</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {hours.map((h, i) => {
                  const isToday = h.day === today
                  return (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < hours.length - 1 ? '1px solid rgba(28,43,43,0.1)' : 'none', background: isToday ? 'rgba(10,186,181,0.05)' : 'transparent', padding: '10px 8px', margin: '0 -8px' }}>
                      <span style={{ fontSize: '12px', color: isToday ? '#0ABAB5' : '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', fontWeight: isToday ? 600 : 500 }}>
                        {h.day} {isToday && <span style={{ fontSize: '9px', background: '#0ABAB5', color: '#1C2B2B', padding: '2px 6px', marginLeft: '6px', letterSpacing: '1px' }}>TODAY</span>}
                      </span>
                      <span style={{ fontSize: '12px', color: h.time === 'Closed' ? 'rgba(28,43,43,0.45)' : isToday ? '#0ABAB5' : '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', fontWeight: isToday ? 600 : 500 }}>
                        {h.time}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '1px', background: '#0ABAB5', flexShrink: 0 }} />
                <span style={{ fontSize: '9px', letterSpacing: '5px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>FOLLOW US</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer"
                    style={{ width: '52px', height: '52px', border: '1px solid rgba(10,186,181,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(28,43,43,0.7)', textDecoration: 'none', transition: 'all 0.3s', position: 'relative' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color; e.currentTarget.style.background = `${s.color}15` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(10,186,181,0.4)'; e.currentTarget.style.color = 'rgba(28,43,43,0.7)'; e.currentTarget.style.background = 'transparent' }}>
                    {s.icon}
                    <span style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', fontSize: '8px', letterSpacing: '1px', color: 'rgba(28,43,43,0.6)', whiteSpace: 'nowrap', fontFamily: 'ErasMedium, sans-serif' }}>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ MAP STRIP ══ */}
      <section className="contact-map-strip" style={{ borderTop: '1px solid rgba(10,186,181,0.1)', background: '#1C2B2B', padding: isMobile ? '40px 16px' : '56px 64px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
            <div style={{ width: '40px', height: '1px', background: '#0ABAB5', flexShrink: 0 }} />
            <span style={{ fontSize: '9px', letterSpacing: '5px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>VISIT THE SHOWROOM</span>
          </div>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open directions to BDF Architectural in Google Maps"
            style={{ position: 'relative', display: 'block', minHeight: '460px', overflow: 'hidden', border: '1px solid rgba(10,186,181,0.22)', textDecoration: 'none', background: '#D8E0DC', boxShadow: '0 20px 60px rgba(0,0,0,0.22)' }}
          >
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ position: 'absolute', inset: 0, border: 0, display: 'block', filter: 'saturate(0.9) contrast(1.02)', pointerEvents: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BDF Architectural showroom location"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(28,43,43,0.52) 0%, rgba(28,43,43,0.14) 26%, rgba(28,43,43,0.08) 100%)', pointerEvents: 'none' }} />
          </a>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <div className="contact-shell-pad" style={{ background: '#0ABAB5', padding: isMobile ? '32px 16px' : '40px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ fontSize: '9px', letterSpacing: '4px', color: 'rgba(28,43,43,0.5)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '6px' }}>PREFER TO CALL?</div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(24px,3vw,40px)', fontWeight: 300, color: '#1C2B2B' }}>
            We're here Monday – Saturday
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="tel:01895439199" style={{ textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(28,43,43,0.5)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '2px' }}>OFFICE</div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '1px' }}>01895 439 199</div>
          </a>
          <div style={{ width: '1px', height: '40px', background: 'rgba(28,43,43,0.2)' }} />
          <a href="tel:08009995575" style={{ textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(28,43,43,0.5)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '2px' }}>FREE PHONE</div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', letterSpacing: '1px' }}>0800 999 5575</div>
          </a>
        </div>
      </div>

    </div>
  )
}
