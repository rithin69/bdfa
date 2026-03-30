import { useEffect, useState } from 'react'

function getViewport() {
  if (typeof window === 'undefined') {
    return { width: 1280, isMobile: false, isTablet: false }
  }

  const width = window.innerWidth
  return {
    width,
    isMobile: width <= 768,
    isTablet: width <= 1024,
  }
}

export default function useResponsive() {
  const [viewport, setViewport] = useState({ width: 1280, isMobile: false, isTablet: false })

  useEffect(() => {
    setViewport(getViewport())
    const handleResize = () => setViewport(getViewport())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return viewport
}
