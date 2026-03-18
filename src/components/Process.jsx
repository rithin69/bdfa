import React from 'react'

const steps = [
  { num: '01', title: 'DISCOVERY', desc: 'We begin with an in-depth consultation to understand your vision, lifestyle, budget and timeline. This shapes everything that follows.' },
  { num: '02', title: 'CONCEPT DESIGN', desc: 'Our designers develop mood boards, space plans and 3D visualisations so you can see and feel your future space before it exists.' },
  { num: '03', title: 'DEVELOPMENT', desc: 'Detailed drawings, material specifications and contractor coordination. Every element is resolved before a single tool is picked up.' },
  { num: '04', title: 'DELIVERY', desc: 'We oversee construction and installation, ensuring the finished result matches the design vision perfectly — on time and on budget.' },
]

export function Process() {
  return (
    <section id="process" className="py-32 px-8 bg-bdf-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-10 h-px bg-gold" />
          <span className="text-[9px] tracking-[0.5em] text-gold">HOW WE WORK</span>
        </div>
        <h2 className="font-cormorant font-light text-bdf-white mb-20 leading-tight"
          style={{ fontSize: 'clamp(36px,4vw,56px)' }}>
          Our <em className="text-gold">Process</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <div key={i} className={`pr-10 ${i < steps.length - 1 ? 'lg:border-r border-gold/10' : ''} mb-12 lg:mb-0`}>
              <div className="font-cormorant font-light text-6xl text-gold/15 leading-none mb-5">
                {s.num}
              </div>
              <div className="w-8 h-px bg-gold mb-5" />
              <div className="text-[10px] tracking-[0.2em] font-semibold text-bdf-white mb-3">
                {s.title}
              </div>
              <div className="text-[11px] text-bdf-white/40 leading-loose font-light">
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
  return (
    <div className="px-8 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gold px-16 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-[9px] tracking-[0.4em] text-bdf-black/50 mb-3">
              START YOUR PROJECT
            </div>
            <h3 className="font-cormorant font-light text-bdf-black leading-tight"
              style={{ fontSize: 'clamp(30px,3vw,44px)' }}>
              Ready to build something<br />
              <em>extraordinary?</em>
            </h3>
          </div>
          <button className="flex-shrink-0 text-[9px] tracking-[0.4em] font-bold text-bdf-white bg-bdf-black hover:opacity-85 transition-opacity duration-300 px-10 py-5">
            BOOK A CONSULTATION
          </button>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  const services = ['Luxury Interiors', 'Architectural Design', 'Commercial Spaces', 'Project Management', '3D Visualisation']
  const company  = ['About Us', 'Our Team', 'Portfolio', 'Awards', 'Careers']
  const contact  = ['info@bdfarchitectural.co.uk', '+44 20 0000 0000', 'London, UK', 'Instagram', 'LinkedIn']

  return (
    <footer id="contact" className="bg-bdf-dark2 border-t border-gold/10 pt-16 pb-10 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-montserrat font-extrabold text-3xl tracking-[0.35em] text-bdf-white">BDF</div>
            <div className="font-montserrat font-light text-[9px] tracking-[0.4em] text-gold mt-1 mb-5">ARCHITECTURAL</div>
            <p className="text-[11px] text-bdf-white/30 leading-loose font-light">
              Luxury interiors and architectural design for residential and commercial clients.<br />
              <em className="text-gold/60 not-italic">Luxury, From the Inside Out.</em>
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="text-[8px] tracking-[0.4em] text-gold mb-5">SERVICES</div>
            {services.map(s => (
              <a key={s} href="#services" className="hover-gold-line block text-[11px] text-bdf-white/40 hover:text-bdf-white transition-colors duration-300 mb-3 tracking-wide font-light">
                {s}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <div className="text-[8px] tracking-[0.4em] text-gold mb-5">COMPANY</div>
            {company.map(c => (
              <a key={c} href="#" className="hover-gold-line block text-[11px] text-bdf-white/40 hover:text-bdf-white transition-colors duration-300 mb-3 tracking-wide font-light">
                {c}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="text-[8px] tracking-[0.4em] text-gold mb-5">CONTACT</div>
            {contact.map(c => (
              <a key={c} href="#" className="hover-gold-line block text-[11px] text-bdf-white/40 hover:text-bdf-white transition-colors duration-300 mb-3 tracking-wide font-light">
                {c}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bdf-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[9px] tracking-[0.2em] text-bdf-white/20">
            © 2024 BDF ARCHITECTURAL. ALL RIGHTS RESERVED.
          </span>
          <div className="w-10 h-px bg-gold opacity-40" />
          <span className="text-[9px] tracking-[0.2em] text-bdf-white/20">
            LUXURY, FROM THE INSIDE OUT
          </span>
        </div>
      </div>
    </footer>
  )
}
