import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import CursorSpotlight from './components/CursorSpotlight'
import BackToTop from './components/BackToTop'

export default function App() {
  const sections = [
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'gallery', title: 'Gallery' },
    { id: 'contact', title: 'Contact' }
  ]

  const [active, setActive] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // Ensure page starts at the top on initial load
    window.scrollTo(0, 0);
    
    const obs = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter(e => e.isIntersecting)
        if (visibleSections.length > 0) {
          // Mark the topmost visible section as active
          const topmost = visibleSections.reduce((top, current) => {
            return current.boundingClientRect.top < top.boundingClientRect.top ? current : top
          })
          setActive(topmost.target.id)
        }
      },
      { root: null, rootMargin: '0px 0px -70% 0px', threshold: 0 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 120
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
      // Close sidebar on mobile after navigation
      if (window.innerWidth <= 768) {
        setSidebarOpen(false)
      }
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="app-root" ref={containerRef}>
      <CursorSpotlight />
      <Sidebar items={sections} active={active} onNavigate={scrollTo} className={sidebarOpen ? 'active' : ''} />

      <button 
        className={`hamburger ${sidebarOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <main className="content">
        <Home onSeeProjects={() => scrollTo('projects')} />
        <About />
        <Experience />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      
      <BackToTop />
    </div>
  )
}
