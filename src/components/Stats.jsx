import React from 'react'

const stats = [
  { num: '20+', label: 'YEARS EXPERIENCE' },
  { num: '340+', label: 'PROJECTS COMPLETED' },
  { num: '98%', label: 'CLIENT SATISFACTION' },
  { num: '24', label: 'AWARDS WON' },
]

export default function Stats() {
  return (
    <div className="bg-bdf-dark2 border-t border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-9 text-center ${i < stats.length - 1 ? 'border-r border-bdf-white/5' : ''}`}
            >
              <span className="font-cormorant font-light text-5xl text-gold block leading-none mb-2">
                {s.num}
              </span>
              <span className="text-[8px] tracking-[0.25em] text-bdf-white/60 block">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
