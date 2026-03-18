import React from 'react'

const reasons = [
  {
    title: 'LUXURY RESIDENTIAL',
    desc: 'From grand country houses to contemporary London apartments, we deliver interiors that exceed expectations every time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-5 h-5">
        <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"/>
      </svg>
    ),
  },
  {
    title: 'COMMERCIAL EXPERTISE',
    desc: 'World-class commercial design for offices, retail and hospitality. Spaces that drive business performance and impress clients.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
      </svg>
    ),
  },
  {
    title: 'BESPOKE DESIGN',
    desc: 'Every project is unique. We never use templates — each space is designed from scratch around your specific brief and lifestyle.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-5 h-5">
        <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/>
      </svg>
    ),
  },
  {
    title: 'AWARD WINNING',
    desc: '24 industry awards recognising our commitment to design excellence, client satisfaction and construction quality.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-5 h-5">
        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
      </svg>
    ),
  },
]

const HouseSketch = () => (
  <svg viewBox="0 0 400 500" fill="none" className="w-4/5 h-4/5 opacity-60">
    <polyline points="200,30 20,160 380,160" stroke="#C9A84C" strokeWidth="2.5" strokeLinejoin="miter"/>
    <rect x="20" y="160" width="360" height="280" stroke="#C9A84C" strokeWidth="2"/>
    <line x1="20" y1="160" x2="100" y2="220" stroke="#C9A84C" strokeWidth="1.5"/>
    <line x1="380" y1="160" x2="300" y2="220" stroke="#C9A84C" strokeWidth="1.5"/>
    <line x1="20" y1="440" x2="100" y2="380" stroke="#C9A84C" strokeWidth="1.5"/>
    <line x1="380" y1="440" x2="300" y2="380" stroke="#C9A84C" strokeWidth="1.5"/>
    <rect x="100" y="220" width="200" height="160" stroke="#C9A84C" strokeWidth="1.5"/>
    <rect x="160" y="320" width="80" height="120" stroke="#C9A84C" strokeWidth="1.5"/>
    <rect x="50" y="240" width="36" height="36" stroke="#C9A84C" strokeWidth="1"/>
    <rect x="314" y="240" width="36" height="36" stroke="#C9A84C" strokeWidth="1"/>
    {[120,200,280].map(x => <line key={x} x1={x} y1="160" x2={x} y2="440" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3"/>)}
    {[300,360].map(y => <line key={y} x1="20" y1={y} x2="380" y2={y} stroke="#C9A84C" strokeWidth="0.5" opacity="0.3"/>)}
    <rect x="260" y="40" width="20" height="50" stroke="#C9A84C" strokeWidth="1.5"/>
    <line x1="10" y1="160" x2="10" y2="440" stroke="#C9A84C" strokeWidth="0.8" opacity="0.35"/>
    <line x1="6" y1="160" x2="14" y2="160" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
    <line x1="6" y1="440" x2="14" y2="440" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
    <line x1="20" y1="455" x2="380" y2="455" stroke="#C9A84C" strokeWidth="0.8" opacity="0.35"/>
    <line x1="20" y1="451" x2="20" y2="459" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
    <line x1="380" y1="451" x2="380" y2="459" stroke="#C9A84C" strokeWidth="1" opacity="0.35"/>
  </svg>
)

export default function WhyUs() {
  return (
    <section className="py-32 bg-bdf-dark2">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">

        {/* Left: text */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-gold" />
            <span className="text-[9px] tracking-[0.5em] text-gold">WHY BDF</span>
          </div>
          <h2 className="font-cormorant font-light text-bdf-white mb-12 leading-tight"
            style={{ fontSize: 'clamp(36px,4vw,56px)' }}>
            Built on<br /><em className="text-gold">Excellence</em>
          </h2>

          <div className="flex flex-col">
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`flex gap-6 py-7 ${i < reasons.length - 1 ? 'border-b border-bdf-white/5' : ''}`}
              >
                <div className="w-10 h-10 flex-shrink-0 border border-gold/30 flex items-center justify-center mt-0.5">
                  {r.icon}
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] font-semibold text-bdf-white mb-2">
                    {r.title}
                  </div>
                  <div className="text-[11px] text-bdf-white/40 leading-loose font-light">
                    {r.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: architectural sketch */}
        <div className="relative h-[500px] border border-gold/10 hidden lg:block">
          <div className="absolute inset-0 bg-bdf-black flex items-center justify-center">
            <HouseSketch />
          </div>
          {/* Gold bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
        </div>

      </div>
    </section>
  )
}
