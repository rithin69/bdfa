import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import { Process, Footer } from './components/Process'
import AboutUs from './components/AboutUs'
import QuotePopup from './components/QuotePopup'
import Contact from './components/Contact'
import Careers from './components/Careers'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Brands from './components/Brands'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Areas from './components/Areas'
import CityLanding from './components/CityLanding'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      page_path: pathname + hash,
      page_title: document.title,
    })
  }, [pathname, hash])

  useEffect(() => {
    if (!hash) return

    const id = hash.replace('#', '')
    const scrollToTarget = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    scrollToTarget()
    const timeoutId = window.setTimeout(scrollToTarget, 120)

    return () => window.clearTimeout(timeoutId)
  }, [hash, pathname])

  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Brands />
      <Process />
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
        <Route path="/careers" element={<Careers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/areas/:city" element={<CityLanding />} />
      </Routes>
      <Footer />
    </main>
  )
}
