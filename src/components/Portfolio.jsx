import React from 'react'

const projects = [
  { cat: 'RESIDENTIAL', name: 'Hampstead Private Villa', span: 'row-span-2', bg: 'from-[#1c1c1c] to-[#0a0a0a]' },
  { cat: 'COMMERCIAL',  name: 'Mayfair Office Suite',   span: '',           bg: 'from-[#161616] to-[#0f0f0f]' },
  { cat: 'RESIDENTIAL', name: 'Kensington Family Home', span: '',           bg: 'from-[#141414] to-[#0a0a0a]' },
  { cat: 'INTERIOR',    name: 'Chelsea Penthouse',      span: '',           bg: 'from-[#1a1a1a] to-[#111111]' },
  { cat: 'COMMERCIAL',  name: 'Canary Wharf HQ',        span: '',           bg: 'from-[#121212] to-[#0c0c0c]' },
]

const BuildingSvg = ({ index }) => {
  const svgs = [
    // Tall tower
    <svg key={0} viewBox="0 0 400 600" fill="none" className="w-full h-full opacity-25">
      <rect x="60" y="100" width="280" height="400" stroke="#C9A84C" strokeWidth="1.5"/>
      {[200,300,400].map(y => <line key={y} x1="60" y1={y} x2="340" y2={y} stroke="#C9A84C" strokeWidth="0.8"/>)}
      {[160,240].map(x => <line key={x} x1={x} y1="100" x2={x} y2="500" stroke="#C9A84C" strokeWidth="0.8"/>)}
      <polyline points="200,20 60,100 340,100" fill="none" stroke="#C9A84C" strokeWidth="2"/>
      <line x1="200" y1="20" x2="200" y2="0" stroke="#C9A84C" strokeWidth="1.5"/>
    </svg>,
    // Office
    <svg key={1} viewBox="0 0 400 280" fill="none" className="w-full h-full opacity-25">
      <rect x="40" y="40" width="320" height="200" stroke="#C9A84C" strokeWidth="1.5"/>
      <line x1="40" y1="120" x2="360" y2="120" stroke="#C9A84C" strokeWidth="0.8"/>
      <rect x="140" y="120" width="120" height="120" stroke="#C9A84C" strokeWidth="1"/>
      {[100,160,220,280,320].map(x => <line key={x} x1={x} y1="40" x2={x} y2="240" stroke="#C9A84C" strokeWidth="0.4" opacity="0.4"/>)}
    </svg>,
    // House
    <svg key={2} viewBox="0 0 400 280" fill="none" className="w-full h-full opacity-25">
      <polyline points="200,20 20,200 380,200" stroke="#C9A84C" strokeWidth="2"/>
      <rect x="20" y="200" width="360" height="60" stroke="#C9A84C" strokeWidth="1.5"/>
      <rect x="60" y="210" width="60" height="50" stroke="#C9A84C" strokeWidth="1"/>
      <rect x="170" y="210" width="60" height="50" stroke="#C9A84C" strokeWidth="1"/>
      <rect x="280" y="210" width="60" height="50" stroke="#C9A84C" strokeWidth="1"/>
    </svg>,
    // Penthouse
    <svg key={3} viewBox="0 0 400 280" fill="none" className="w-full h-full opacity-25">
      <rect x="40" y="40" width="140" height="200" stroke="#C9A84C" strokeWidth="1.5"/>
      <rect x="220" y="80" width="140" height="160" stroke="#C9A84C" strokeWidth="1.5"/>
      <line x1="180" y1="40" x2="220" y2="80" stroke="#C9A84C" strokeWidth="1"/>
      <rect x="60" y="100" width="40" height="30" stroke="#C9A84C" strokeWidth="0.8"/>
      <rect x="120" y="100" width="40" height="30" stroke="#C9A84C" strokeWidth="0.8"/>
    </svg>,
    // Commercial HQ
    <svg key={4} viewBox="0 0 400 280" fill="none" className="w-full h-full opacity-25">
      <rect x="60" y="30" width="280" height="220" stroke="#C9A84C" strokeWidth="1.5"/>
      <line x1="60" y1="30" x2="130" y2="90" stroke="#C9A84C" strokeWidth="1"/>
      <line x1="340" y1="30" x2="270" y2="90" stroke="#C9A84C" strokeWidth="1"/>
      <rect x="130" y="90" width="140" height="160" stroke="#C9A84C" strokeWidth="1"/>
      {[150,180,210,240,270,300].map(x => <line key={x} x1={x} y1="30" x2={x} y2="250" stroke="#C9A84C" strokeWidth="0.4" opacity="0.4"/>)}
    </svg>,
  ]
  return svgs[index] || svgs[0]
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="pb-32">
      <div className="max-w-7xl mx-auto px-8 mb-14">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-10 h-px bg-gold" />
          <span className="text-[9px] tracking-[0.5em] text-gold">OUR WORK</span>
        </div>
        <h2 className="font-cormorant font-light text-bdf-white leading-tight"
          style={{ fontSize: 'clamp(36px,4vw,56px)' }}>
          Featured <em className="text-gold">Projects</em>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1"
          style={{ gridTemplateRows: '320px 320px' }}>
          {projects.map((p, i) => (
            <div
              key={i}
              className={`portfolio-item relative overflow-hidden cursor-pointer bg-gradient-to-br ${p.bg} ${p.span}`}
            >
              {/* SVG illustration */}
              <div className="portfolio-img absolute inset-0">
                <BuildingSvg index={i} />
              </div>

              {/* Always visible bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-bdf-black/95 to-transparent">
                <div className="text-[8px] tracking-[0.3em] text-gold mb-1">{p.cat}</div>
                <div className="font-cormorant font-light text-xl text-bdf-white">{p.name}</div>
              </div>

              {/* Hover overlay */}
              <div className="portfolio-overlay absolute inset-0 border border-gold/30 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* View all CTA */}
      <div className="max-w-7xl mx-auto px-8 mt-12 flex justify-center">
        <button className="text-[9px] tracking-[0.35em] font-light text-bdf-white border border-bdf-white/20 hover:border-gold hover:text-gold transition-all duration-300 px-10 py-4">
          VIEW ALL PROJECTS
        </button>
      </div>
    </section>
  )
}
