import React, { useEffect, useState, useRef } from 'react'

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Mouse tracking for interactive elements
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Canvas animation background
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const particles = []
    
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2
        this.life = 1
      }
      
      update() {
        this.x += this.vx
        this.y += this.vy
        this.life -= 0.005
        
        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }
      
      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.life * 0.3})`
        ctx.fillRect(this.x, this.y, this.size, this.size)
      }
    }
    
    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p, i) => {
        p.update()
        p.draw()
        
        if (p.life <= 0) {
          particles[i] = new Particle()
        }
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #0f1419 100%)'
    }}>
      {/* Canvas background animation */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.6
        }}
      />
      
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        pointerEvents: 'none',
        transition: 'background 0.1s ease-out'
      }} />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '800px',
          padding: '24px',
          animation: isVisible ? 'fadeInUp 0.8s ease-out' : 'none'
        }}
      >
        {/* Animated greeting */}
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '20px',
          marginBottom: '24px',
          animation: isVisible ? 'fadeInDown 0.6s ease-out 0.2s both' : 'none'
        }}>
          <span style={{ color: '#3b82f6', fontSize: '14px', fontWeight: '600' }}>
            👋 Welcome to my digital workspace
          </span>
        </div>

        {/* Main heading with gradient */}
        <h1 style={{
          background: 'linear-gradient(135deg, #e0e5ec 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: '56px',
          fontWeight: '800',
          marginBottom: '16px',
          lineHeight: '1.2',
          animation: isVisible ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none'
        }}>
          Full-Stack Developer & Frontend Enthusiast
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '18px',
          color: '#a0aec0',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px',
          animation: isVisible ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none'
        }}>
          Crafting elegant digital experiences with React, Vue, and modern web technologies. 
          Passionate about clean code, performance, and creating interfaces that delight users.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: isVisible ? 'fadeInUp 0.8s ease-out 0.3s both' : 'none'
        }}>
          <a
            href="#projects"
            style={{
              padding: '14px 32px',
              background: '#3b82f6',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '15px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#2563eb'
              e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#3b82f6'
              e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)'
            }}
          >
            Explore My Work
          </a>

          <a
            href="#contact"
            style={{
              padding: '14px 32px',
              background: 'transparent',
              color: '#3b82f6',
              border: '1.5px solid rgba(59, 130, 246, 0.5)',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '15px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(59, 130, 246, 0.08)'
              e.target.style.borderColor = 'rgba(59, 130, 246, 0.7)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)'
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: isVisible ? 'float 2s ease-in-out infinite' : 'none'
        }}
      >
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid rgba(59, 130, 246, 0.4)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '8px'
        }}>
          <div
            style={{
              width: '4px',
              height: '8px',
              background: '#3b82f6',
              borderRadius: '4px',
              animation: 'float 2s ease-in-out infinite'
            }}
          />
        </div>
      </div>
    </section>
  )
}
