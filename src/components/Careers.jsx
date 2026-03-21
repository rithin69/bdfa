import React, { useState } from 'react'

const roles = [
  {
    title: 'Senior Architect',
    dept: 'DESIGN',
    type: 'Full Time',
    location: 'West Drayton, Middlesex',
    salary: '£45,000 – £60,000',
    positions: 2,
    desc: 'We are looking for experienced architects to join our growing design team. You will be responsible for creating innovative glazing and door solutions for high-end residential and commercial projects.',
    requirements: ['5+ years architectural experience', 'Proficiency in AutoCAD & Revit', 'Strong portfolio of completed projects', 'Excellent communication skills'],
  },
  {
    title: 'Installation Engineer',
    dept: 'INSTALLATION',
    type: 'Full Time',
    location: 'London & South East',
    salary: '£30,000 – £40,000',
    positions: 3,
    desc: 'Immediate positions available for skilled installation engineers. You will be installing premium Schuco and Cortizo bifold door and glazing systems across luxury residential properties.',
    requirements: ['Experience in glazing or construction', 'Full UK driving licence', 'CSCS card preferred', 'Strong attention to detail'],
  },
  {
    title: 'Site Manager',
    dept: 'OPERATIONS',
    type: 'Full Time',
    location: 'West Drayton, Middlesex',
    salary: '£38,000 – £48,000',
    positions: 1,
    desc: 'We are seeking a proactive site manager to oversee multiple installation projects simultaneously. You will coordinate teams, liaise with clients and ensure every project is delivered on time and to the highest standard.',
    requirements: ['3+ years site management experience', 'SMSTS or equivalent qualification', 'Strong leadership skills', 'Excellent organisational ability'],
  },
  {
    title: 'Sales Consultant',
    dept: 'SALES',
    type: 'Full Time',
    location: 'West Drayton, Middlesex',
    salary: '£28,000 + Commission',
    positions: 2,
    desc: 'Join our sales team and help customers find the perfect glazing solution for their home or business. You will manage the full sales process from initial enquiry through to order confirmation.',
    requirements: ['Proven sales track record', 'Interest in architecture or interiors', 'Excellent interpersonal skills', 'Target-driven mindset'],
  },
  {
    title: 'Factory Operator',
    dept: 'MANUFACTURING',
    type: 'Full Time',
    location: 'West Drayton, Middlesex',
    salary: '£26,000 – £32,000',
    positions: 3,
    desc: 'We are expanding our manufacturing team and looking for skilled operators to work with premium aluminium systems. Full training provided on Schuco and Cortizo product ranges.',
    requirements: ['Experience in manufacturing preferred', 'Good mechanical aptitude', 'Ability to read technical drawings', 'Reliable and punctual'],
  },
  {
    title: 'Customer Service Executive',
    dept: 'CUSTOMER CARE',
    type: 'Full Time',
    location: 'West Drayton, Middlesex',
    salary: '£24,000 – £28,000',
    positions: 2,
    desc: 'A fantastic opportunity to join our customer care team. You will be the first point of contact for our clients, managing enquiries, scheduling and aftercare to ensure an outstanding experience.',
    requirements: ['Previous customer service experience', 'Excellent telephone manner', 'Proficient in Microsoft Office', 'Calm under pressure'],
  },
]

const perks = [
  { icon: '💷', title: 'Competitive Pay', desc: 'Market-leading salaries reviewed annually' },
  { icon: '📈', title: 'Career Growth', desc: 'Clear progression pathways and development plans' },
  { icon: '🏖️', title: 'Annual Leave', desc: '28 days holiday including bank holidays' },
  { icon: '🤝', title: 'Team Culture', desc: 'Supportive, inclusive and collaborative environment' },
  { icon: '🔧', title: 'Training', desc: 'Fully funded training on premium product ranges' },
  { icon: '🚗', title: 'Travel', desc: 'Travel allowance for site-based roles' },
]

const deptColors = {
  DESIGN: '#7B68EE',
  INSTALLATION: '#20B2AA',
  OPERATIONS: '#0ABAB5',
  SALES: '#E8756A',
  MANUFACTURING: '#5B9BD5',
  'CUSTOMER CARE': '#78C87A',
}

export default function Careers() {
  const [activeRole, setActiveRole] = useState(null)
  const [filter, setFilter] = useState('ALL')
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const depts = ['ALL', ...Array.from(new Set(roles.map(r => r.dept)))]
  const filtered = filter === 'ALL' ? roles : roles.filter(r => r.dept === filter)

  const handleApply = (role) => {
    setActiveRole(role)
    setForm(f => ({ ...f, role: role.title }))
    setTimeout(() => {
      document.getElementById('apply').scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setActiveRole(null)
      setForm({ name: '', email: '', phone: '', role: '', message: '' })
    }, 4000)
  }

  const inputStyle = (field) => ({
    width: '100%',
    padding: '14px 18px',
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

  return (
    <div style={{ background: '#F7F4F0', color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif' }}>

      <style>{`
        .careers-input::placeholder { color: rgba(28,43,43,0.45); }
        .careers-input option { background: #F7F4F0; color: #1C2B2B; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes checkPop { 0%{transform:scale(0)} 70%{transform:scale(1.2)} 100%{transform:scale(1)} }
        @keyframes slowZoom { from{transform:scale(1)} to{transform:scale(1.06)} }
        .role-card:hover .role-arrow { transform: translateX(4px) !important; }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '100px',
      }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90"
          alt="Careers"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', animation: 'slowZoom 14s ease-in-out infinite alternate' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(28,43,43,0.95) 40%, rgba(28,43,43,0.5) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '3px', background: 'linear-gradient(to bottom, transparent, #0ABAB5 30%, #0ABAB5 70%, transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to bottom, transparent, #F7F4F0)' }} />

        <div style={{ position: 'relative', zIndex: 10, padding: '60px 64px', maxWidth: '800px', animation: 'fadeUp 1s ease both' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: '#0ABAB5' }} />
            <span style={{ fontSize: '9px', letterSpacing: '5px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>JOIN OUR TEAM</span>
          </div>
          <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(56px,8vw,110px)', fontWeight: 300, color: '#F7F4F0', margin: '0 0 24px', lineHeight: 1 }}>
            Build Your<br /><span style={{ color: '#0ABAB5' }}>Career</span><br />With Us
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(247,244,240,0.8)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.9, margin: '0 0 40px', maxWidth: '520px' }}>
            We are focusing on delivering brilliant services and providing our customers with a great experience. Bring your enthusiasm and we'll support you every step of the way.
          </p>
          {/* <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => document.getElementById('roles').scrollIntoView({ behavior: 'smooth' })}
              style={{ background: '#0ABAB5', border: 'none', padding: '16px 36px', color: '#1C2B2B', fontSize: '10px', letterSpacing: '3px', fontWeight: 700, fontFamily: 'ErasMedium, sans-serif', cursor: 'pointer', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#7DD8D6'}
              onMouseLeave={e => e.currentTarget.style.background = '#0ABAB5'}>
              VIEW OPEN ROLES
            </button>
            <a href="mailto:info@bifolddoorfactory.co.uk"
              style={{ border: '1px solid rgba(28,43,43,0.4)', padding: '16px 36px', color: 'rgba(28,43,43,0.7)', fontSize: '10px', letterSpacing: '3px', fontFamily: 'ErasMedium, sans-serif', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ABAB5'; e.currentTarget.style.color = '#0ABAB5' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(28,43,43,0.4)'; e.currentTarget.style.color = 'rgba(28,43,43,0.7)' }}>
              SEND YOUR CV
            </a>
          </div> */}

          {/* <div style={{ display: 'flex', gap: '48px', marginTop: '64px' }}>
            {[
              { num: roles.reduce((a, r) => a + r.positions, 0), label: 'Open Positions' },
              { num: roles.length, label: 'Departments Hiring' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '56px', fontWeight: 300, color: '#0ABAB5', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(28,43,43,0.4)', fontFamily: 'ErasMedium, sans-serif', marginTop: '6px', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ══ PERKS ══ */}
      {/* <section style={{ background: '#EDF8F8', borderTop: '1px solid rgba(10,186,181,0.12)', borderBottom: '1px solid rgba(10,186,181,0.12)', padding: '80px 64px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <div style={{ width: '40px', height: '1px', background: '#0ABAB5' }} />
            <span style={{ fontSize: '9px', letterSpacing: '5px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>WHY WORK WITH US</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {perks.map((p, i) => (
              <div key={i}
                style={{ background: '#F7F4F0', padding: '36px 32px', border: '1px solid rgba(10,186,181,0.08)', transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(10,186,181,0.3)'; e.currentTarget.style.background = '#223333' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(10,186,181,0.08)'; e.currentTarget.style.background = '#1C2B2B' }}>
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{p.icon}</div>
                <div style={{ fontSize: '12px', letterSpacing: '2px', fontWeight: 700, color: '#1C2B2B', fontFamily: 'ErasMedium, sans-serif', marginBottom: '10px', textTransform: 'uppercase' }}>{p.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(28,43,43,0.45)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.7 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══ ROLES ══ */}
     

      {/* ══ APPLICATION FORM ══ */}
      <section id="apply" style={{ background: '#EDF8F8', borderTop: '1px solid rgba(10,186,181,0.35)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#0ABAB5' }} />
            <span style={{ fontSize: '9px', letterSpacing: '5px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>JOIN US</span>
          </div>
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(32px,4vw,56px)', fontWeight: 300, color: '#1C2B2B', margin: '0 0 12px' }}>
            Apply For A <span style={{ color: '#0ABAB5' }}>Position</span>
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(28,43,43,0.72)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.9, margin: '0 0 48px' }}>
            Send us your details and we'll be in touch. You can also send your CV directly to{' '}
            <a href="mailto:info@bifolddoorfactory.co.uk" style={{ color: '#0ABAB5', textDecoration: 'none' }}>info@bifolddoorfactory.co.uk</a>
          </p>

          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 20px', gap: '20px', textAlign: 'center', border: '1px solid rgba(10,186,181,0.2)', background: 'rgba(10,186,181,0.04)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(10,186,181,0.12)', border: '2px solid #0ABAB5', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'checkPop 0.5s ease both' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div style={{ fontSize: '24px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', fontWeight: 700 }}>Application Received!</div>
              <div style={{ fontSize: '14px', color: 'rgba(28,43,43,0.72)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.9 }}>
                Thank you for your interest in joining BDF.<br />We will review your application and be in touch shortly.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {activeRole && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', background: 'rgba(10,186,181,0.08)', border: '1px solid rgba(10,186,181,0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ fontSize: '12px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', fontWeight: 600 }}>Applying for: {activeRole.title}</span>
                  </div>
                  <button type="button" onClick={() => setActiveRole(null)}
                    style={{ background: 'none', border: 'none', color: 'rgba(28,43,43,0.65)', cursor: 'pointer', fontSize: '20px', lineHeight: 1 }}>×</button>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { label: 'FULL NAME', key: 'name', type: 'text', placeholder: 'Your full name' },
                  { label: 'EMAIL ADDRESS', key: 'email', type: 'email', placeholder: 'Your email address' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.8)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '8px' }}>
                      {label} <span style={{ color: '#0ABAB5' }}>*</span>
                    </label>
                    <input required type={type} placeholder={placeholder} className="careers-input"
                      value={form[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      style={inputStyle(key)}
                      onFocus={() => setFocused(key)}
                      onBlur={() => setFocused('')} />
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.8)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '8px' }}>
                    PHONE NUMBER
                  </label>
                  <input type="tel" placeholder="Your phone number" className="careers-input"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle('phone')}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused('')} />
                </div>
                <div>
                  <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.8)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '8px' }}>
                    POSITION APPLYING FOR <span style={{ color: '#0ABAB5' }}>*</span>
                  </label>
                  <select required className="careers-input"
                    value={form.role}
                    onChange={e => setForm({ ...form, role: e.target.value })}
                    style={{ ...inputStyle('role'), cursor: 'pointer' }}
                    onFocus={() => setFocused('role')}
                    onBlur={() => setFocused('')}>
                    <option value="">Select a position</option>
                    {roles.map(r => (
                      <option key={r.title} value={r.title}>{r.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(28,43,43,0.8)', fontFamily: 'ErasMedium, sans-serif', display: 'block', marginBottom: '8px' }}>
                  COVER MESSAGE <span style={{ color: '#0ABAB5' }}>*</span>
                </label>
                <textarea required rows={5} placeholder="Tell us about yourself, your experience and why you'd like to join BDF..." className="careers-input"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '140px' }}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <p style={{ fontSize: '12px', color: 'rgba(28,43,43,0.65)', fontFamily: 'ErasMedium, sans-serif', margin: 0 }}>
                  Or email your CV to{' '}
                  <a href="mailto:info@bifolddoorfactory.co.uk" style={{ color: '#0ABAB5', textDecoration: 'none' }}>info@bifolddoorfactory.co.uk</a>
                </p>
                <button type="submit"
                  style={{ background: '#0ABAB5', border: 'none', padding: '18px 48px', color: '#1C2B2B', fontSize: '11px', letterSpacing: '4px', fontWeight: 700, fontFamily: 'ErasMedium, sans-serif', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}
                  onMouseEnter={e => e.currentTarget.style.background = '#7DD8D6'}
                  onMouseLeave={e => e.currentTarget.style.background = '#0ABAB5'}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C2B2B" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  SUBMIT APPLICATION
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <div style={{ background: '#0ABAB5', padding: '48px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ fontSize: '9px', letterSpacing: '4px', color: 'rgba(28,43,43,0.5)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '6px' }}>QUESTIONS ABOUT A ROLE?</div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(24px,3vw,42px)', fontWeight: 300, color: '#1C2B2B' }}>
            We'd love to hear from you
          </div>
        </div>
        <a href="mailto:info@bifolddoorfactory.co.uk"
          style={{ background: '#F7F4F0', padding: '18px 40px', color: '#1C2B2B', fontSize: '10px', letterSpacing: '3px', fontFamily: 'ErasMedium, sans-serif', fontWeight: 700, textDecoration: 'none', transition: 'opacity 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
          info@bifolddoorfactory.co.uk
        </a>
      </div>

    </div>
  )
}