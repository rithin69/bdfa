import { useNavigate, Link } from 'react-router-dom'

const services = [
  {
    num: '01',
    title: 'Bifold Doors',
    slug: 'aluminium-bifold-doors',
    desc: 'Slim-framed aluminium bifold doors that open your home to the outside. Available in 2–5 panel configurations, made to measure for any opening size.',
    img: '/products/bi-fold-1.jpg',
  },
  {
    num: '02',
    title: 'Sliding Doors',
    slug: 'schuco-ass-70-slimline-sliding-door',
    desc: 'Floor-to-ceiling sliding door systems with ultra-slim sightlines. Schuco and Cortizo systems available for residential and commercial projects.',
    img: '/products/GoogleDrive_Schuco-sliding-door-ASS70-hi-iver-1024x600.jpg.webp',
  },
  {
    num: '03',
    title: 'Aluminium Windows',
    slug: 'schuco-aws-70-high-insulated-windows',
    desc: 'Casement, tilt & turn and slimline aluminium windows. Thermally broken frames, high U-values, and any RAL colour to match your property.',
    img: '/products/schuco-windows-16-950x726.jpg.webp',
  },
  {
    num: '04',
    title: 'Skylights & Roof Lights',
    slug: 'bdf-lantern-skylight',
    desc: 'Lantern rooflights and flat skylights that flood interiors with natural light. Structural glazing and roof systems for extensions and orangeries.',
    img: '/products/TRI2112-scaled.jpg',
  },
  {
    num: '05',
    title: 'Winter Gardens',
    slug: 'schuco-cmc-50-hi-winter-gardens',
    desc: 'Glazed extensions and winter garden structures using premium Schuco CMC systems. Bring the outdoors in all year round with beautiful, thermally efficient glazing.',
    img: '/products/Winter-garden.jpg.webp',
  },
  {
    num: '06',
    title: 'Entrance Doors',
    slug: 'schuco-front-doors',
    desc: 'Statement aluminium entrance doors for homes and commercial properties. Schuco and Cortizo systems with multi-point locking and premium hardware.',
    img: '/products/Vrata17A1.png.webp',
  },
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <section id="services" className="py-28 bg-bdf-black px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-px bg-gold" />
          <span className="text-[10px] tracking-[0.45em] text-gold font-semibold">WHAT WE SUPPLY & INSTALL</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="font-cormorant font-light text-bdf-white leading-tight"
            style={{ fontSize: 'clamp(38px,4vw,58px)' }}>
            Our <span className="text-gold">Products</span>
          </h2>
          <Link
            to="/products"
            className="self-start md:self-auto text-[10px] tracking-[0.3em] text-gold border border-gold/40 hover:border-gold px-6 py-3 transition-colors duration-300"
            style={{ fontFamily: 'ErasMedium, sans-serif', textDecoration: 'none' }}>
            VIEW ALL PRODUCTS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.num}
              to={`/products/${s.slug}`}
              className="group text-left bg-transparent border border-white/8 hover:border-gold/50 transition-all duration-300 overflow-hidden rounded-sm"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 font-cormorant font-light text-3xl text-gold/50 group-hover:text-gold/80 transition-colors duration-300 leading-none">
                  {s.num}
                </div>
              </div>

              <div className="p-6">
                <div className="text-[13px] tracking-[0.12em] font-bold text-bdf-white mb-2"
                  style={{ fontFamily: 'ErasMedium, sans-serif' }}>
                  {s.title.toUpperCase()}
                </div>
                <div className="w-8 h-px bg-gold mb-4 group-hover:w-16 transition-all duration-300" />
                <div className="text-[13px] text-bdf-white/70 leading-relaxed mb-5">
                  {s.desc}
                </div>
                <span className="text-[10px] tracking-[0.3em] text-gold flex items-center gap-2"
                  style={{ fontFamily: 'ErasMedium, sans-serif' }}>
                  LEARN MORE
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5H13M9 1L13 5L9 9" stroke="#0ABAB5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
