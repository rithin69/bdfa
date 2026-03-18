import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyUs from './components/WhyUs'
import { Process, CTABanner, Footer } from './components/Process'
import AboutUs from './components/AboutUs'
import QuotePopup from './components/QuotePopup'
import Contact from './components/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <CTABanner />
    </>
  )
}

export default function App() {
  return (
    <main className="bg-bdf-black text-bdf-white font-montserrat overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <QuotePopup />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  )
}