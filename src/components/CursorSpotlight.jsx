import React, { useState, useEffect } from 'react'

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="cursor-spotlight"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      <div
        className="spotlight"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(127,0,255,0.15) 0%, rgba(127,0,255,0.08) 30%, rgba(0,219,222,0.06) 50%, transparent 70%)',
          transform: `translate(${position.x - 250}px, ${position.y - 250}px)`,
          transition: 'none',
          opacity: isVisible ? 1 : 0,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          filter: 'blur(30px)'
        }}
      />
    </div>
  )
}