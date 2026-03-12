import React, { useState, useEffect } from 'react'
import profileImg from '../assets/images/profile2.png'
import downloadCV from '../assets/doc/CV-Degi-Candra-Kamarullah.pdf'

export default function Home({ onSeeProjects }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="section landing" data-aos="fade-up">
      {/* Parallax background gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(
          circle at ${50 + scrollY * 0.05}% ${50 + scrollY * 0.03}%,
          rgba(59, 130, 246, 0.1) 0%,
          transparent 50%
        )`,
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'background 0.1s ease-out'
      }} />

      <div className="hero-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content" style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0.5, 1 - scrollY / 1000)
        }}>
          <h1>Hi, I'm Degi Candra</h1>
          <p className="subtitle">I am an IT Application Staff and IT Support Specialist with 6 years experience in managing business applications, providing technical support, and ensuring systems run smoothly.</p>
          <div className="cta">
            <button onClick={onSeeProjects}>See projects</button>
            <a
              className="secondary-btn"
              href={downloadCV}
              download="CV-Degi-Candra-Kamarullah.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-image" style={{
          transform: `translateY(${scrollY * 0.15}px) scale(${1 - scrollY * 0.0001})`,
        }}>
          <img 
            src={profileImg}
            alt="Profile" 
            className="profile-img"
          />
        </div>
      </div>
    </section>
  )
}
