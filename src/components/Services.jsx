import React from 'react'

const services = [
  { num: '01', title: 'Luxury Interiors', desc: 'Bespoke interior design for high-end residential properties. From concept to completion, we craft spaces that reflect your lifestyle and personality.' },
  { num: '02', title: 'Architectural Design', desc: 'Full architectural services for new builds and extensions. We combine structural precision with aesthetic vision to create homes that last generations.' },
  { num: '03', title: 'Commercial Spaces', desc: 'Office fit-outs, retail environments and hospitality spaces designed to impress clients and inspire teams. Function meets exceptional design.' },
  { num: '04', title: 'Project Management', desc: "End-to-end project management from planning permission through to final handover. We handle every detail so you don't have to." },
  { num: '05', title: '3D Visualisation', desc: 'Photorealistic renders and walkthroughs of your space before a single brick is laid. See your vision before construction begins.' },
  { num: '06', title: 'Space Planning', desc: 'Strategic space planning for maximum impact and flow. We optimise every square metre to ensure your space works as beautifully as it looks.' },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-bdf-black px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-px bg-gold" />
          <span className="text-[10px] tracking-[0.45em] text-gold font-semibold">WHAT WE DO</span>
        </div>

        <h2 className="font-cormorant font-light text-bdf-white mb-16 leading-tight"
          style={{ fontSize: 'clamp(38px,4vw,58px)' }}>
          Our <span className="text-gold">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.num}
              className="group bg-white rounded-sm border border-gold/20 hover:border-gold/60 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* gold top bar */}
              <div className="h-1 w-full bg-gold/30 group-hover:bg-gold transition-colors duration-300" />

              <div className="p-8">
                <div className="font-cormorant font-light text-6xl text-gold leading-none mb-5 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                  {s.num}
                </div>
                <div className="text-[13px] tracking-[0.12em] font-bold text-bdf-white mb-3">
                  {s.title.toUpperCase()}
                </div>
                <div className="w-8 h-px bg-gold mb-4" />
                <div className="text-[13px] text-bdf-white/80 leading-relaxed">
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
