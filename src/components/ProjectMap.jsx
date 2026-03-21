import React, { useState, useEffect, useRef } from 'react'

const projectSites = [
  { name: 'Bentley Way House',    location: 'Stanmore, London',      lat: 51.6193, lng: -0.3125 },
  { name: 'Petworth Lodge',       location: 'Kingston upon Thames',   lat: 51.4085, lng: -0.3064 },
  { name: 'Brae Cottage',         location: 'Bookham, Surrey',        lat: 51.2811, lng: -0.3731 },
  { name: 'Bouchers Hill House',  location: 'North Tawton, Exeter',   lat: 50.7938, lng: -3.9029 },
  { name: 'Hartland Drive House', location: 'Edgware, Middlesex',     lat: 51.6130, lng: -0.2748 },
  { name: 'Bedford Residence',    location: 'Bedford',                lat: 52.1362, lng: -0.4667 },
]

export default function ProjectMap() {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (mapInstanceRef.current) return // already initialised

    // Dynamically load Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link')
      link.id = 'leaflet-css'
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    // Dynamically load Leaflet JS then init map
    const existingScript = document.getElementById('leaflet-js')
    const init = () => {
      const L = window.L
      if (!L || !mapRef.current) return

      const map = L.map(mapRef.current, {
        center: [51.8, -1.5],
        zoom: 7,
        scrollWheelZoom: false,
        zoomControl: true,
      })
      mapInstanceRef.current = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 19,
      }).addTo(map)

      projectSites.forEach((site) => {
        const marker = L.circleMarker([site.lat, site.lng], {
          radius: 10,
          fillColor: '#0ABAB5',
          fillOpacity: 0.88,
          color: '#F7F4F0',
          weight: 2,
        }).addTo(map)

        marker.bindTooltip(
          `<div style="font-family:ErasMedium,sans-serif;font-size:12px;font-weight:700;color:#1C2B2B">${site.name}</div>
           <div style="font-family:ErasMedium,sans-serif;font-size:10px;color:rgba(28,43,43,0.6)">${site.location}</div>`,
          { direction: 'top', offset: [0, -12], className: 'bdf-map-tooltip' }
        )

        marker.on('mouseover', () => setActive(site))
        marker.on('mouseout', () => setActive(null))
      })
    }

    if (existingScript) {
      init()
    } else {
      const script = document.createElement('script')
      script.id = 'leaflet-js'
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      script.onload = init
      document.head.appendChild(script)
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <section style={{ background: '#0D1B2A', padding: '80px 0 0' }}>

      {/* Header */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px 40px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0ABAB5', boxShadow: '0 0 8px #0ABAB5' }} />
            <span style={{ fontSize: '10px', letterSpacing: '4px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif' }}>PROJECT LOCATIONS</span>
          </div>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(34px,4vw,54px)', fontWeight: 300, color: '#F7F4F0', margin: '0 0 10px', lineHeight: 1.1 }}>
            Where We Build
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(247,244,240,0.5)', fontFamily: 'ErasMedium, sans-serif', lineHeight: 1.8, maxWidth: '400px', margin: 0 }}>
            Precision glazing installations spanning London, the Home Counties and the South West.
          </p>
        </div>

        {/* Info card */}
        <div style={{ background: 'rgba(10,186,181,0.07)', border: '1px solid rgba(10,186,181,0.22)', borderRadius: '8px', padding: '20px 28px', minWidth: '210px' }}>
          <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(247,244,240,0.4)', fontFamily: 'ErasMedium, sans-serif', marginBottom: '6px' }}>REGION</div>
          {active ? (
            <>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', marginBottom: '2px' }}>{active.name}</div>
              <div style={{ fontSize: '11px', color: 'rgba(247,244,240,0.55)', fontFamily: 'ErasMedium, sans-serif' }}>{active.location} · United Kingdom</div>
            </>
          ) : (
            <>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', marginBottom: '2px' }}>United Kingdom</div>
              <div style={{ fontSize: '11px', color: 'rgba(247,244,240,0.5)', fontFamily: 'ErasMedium, sans-serif' }}>Hover a pin to see details</div>
            </>
          )}
        </div>
      </div>

      {/* Map */}
      <div style={{ padding: '0 64px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(10,186,181,0.15)', height: '460px' }}>
          <div ref={mapRef} style={{ height: '100%', width: '100%', background: '#0D1B2A' }} />
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '18px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(247,244,240,0.3)', fontFamily: 'ErasMedium, sans-serif' }}>
          {projectSites.length} PROJECT SITES
        </span>
        <a href="#portfolio" style={{ fontSize: '11px', letterSpacing: '2px', color: '#0ABAB5', fontFamily: 'ErasMedium, sans-serif', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          FULL PROJECT INDEX
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
