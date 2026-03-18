import React from 'react'

const services = [
  { num: '01', title: 'LUXURY INTERIORS', desc: 'Bespoke interior design for high-end residential properties. From concept to completion, we craft spaces that reflect your lifestyle and personality.' },
  { num: '02', title: 'ARCHITECTURAL DESIGN', desc: 'Full architectural services for new builds and extensions. We combine structural precision with aesthetic vision to create homes that last generations.' },
  { num: '03', title: 'COMMERCIAL SPACES', desc: "Office fit-outs, retail environments and hospitality spaces designed to impress clients and inspire teams. Function meets exceptional design." },
  { num: '04', title: 'PROJECT MANAGEMENT', desc: "End-to-end project management from planning permission through to final handover. We handle every detail so you don't have to." },
  { num: '05', title: '3D VISUALISATION', desc: 'Photorealistic renders and walkthroughs of your space before a single brick is laid. See your vision before construction begins.' },
  { num: '06', title: 'SPACE PLANNING', desc: 'Strategic space planning for maximum impact and flow. We optimise every square metre to ensure your space works as beautifully as it looks.' },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-bdf-black px-8" style={{ fontFamily: 'ErasMedium, sans-serif' }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-5">
          <div className="w-10 h-px bg-gold" />
          <span className="text-[9px] tracking-[0.5em] text-gold" style={{ fontFamily: 'ErasMedium, sans-serif' }}>WHAT WE DO</span>
        </div>

        <h2 className="font-cormorant font-light text-bdf-white mb-16 leading-tight"
          style={{ fontSize: 'clamp(36px,4vw,56px)' }}>
          Our <em className="text-gold">Services</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/5">
          {services.map((s) => (
            <div key={s.num}
              className="service-card-hover bg-bdf-dark2 p-12 border border-gold/8 hover:bg-[#1a1a1a] hover:border-gold/20 transition-all duration-400 cursor-default group"
            >
              <div className="font-cormorant font-light text-5xl text-gold/20 leading-none mb-6 group-hover:text-gold/35 transition-colors duration-400">
                {s.num}
              </div>
              <div className="text-[10px] tracking-[0.2em] font-semibold text-bdf-white mb-4"
                style={{ fontFamily: 'ErasMedium, sans-serif' }}>
                {s.title}
              </div>
              <div className="text-[11px] text-bdf-white/40 leading-relaxed"
                style={{ fontFamily: 'ErasMedium, sans-serif' }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}