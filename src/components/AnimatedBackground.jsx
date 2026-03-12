import React, { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating orbs with random properties
    const createOrb = () => {
      const orb = document.createElement('div')
      const size = Math.random() * 200 + 80
      const duration = Math.random() * 12 + 20
      const delay = Math.random() * 8
      const startX = Math.random() * window.innerWidth
      const startY = Math.random() * window.innerHeight
      const colors = [
        'rgba(59, 130, 246, 0.15)',
        'rgba(30, 64, 175, 0.12)',
        'rgba(59, 130, 246, 0.1)',
        'rgba(96, 165, 250, 0.1)',
      ]
      const color = colors[Math.floor(Math.random() * colors.length)]

      orb.className = 'animated-orb'
      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${startX}px;
        top: ${startY}px;
        background: radial-gradient(circle at 30% 30%, ${color}, transparent);
        border-radius: 50%;
        filter: blur(50px);
        pointer-events: none;
        z-index: -1;
        opacity: 0;
        animation: floatOrb ${duration}s ease-in-out ${delay}s infinite;
      `

      container.appendChild(orb)
    }

    // Create multiple layers of orbs for depth
    const orbCount = Math.floor(Math.random() * 5) + 8
    for (let i = 0; i < orbCount; i++) {
      createOrb()
    }

    // Add animated mesh gradient elements - multiple layers
    const createMeshLayer = (index) => {
      const mesh = document.createElement('div')
      mesh.className = 'animated-mesh'
      const animations = ['meshShift', 'meshShiftAlt', 'meshShiftSlow']
      const animation = animations[index % animations.length]
      
      mesh.style.cssText = `
        position: fixed;
        width: 120%;
        height: 120%;
        top: -10%;
        left: -10%;
        pointer-events: none;
        z-index: ${-2 - index};
        opacity: ${0.2 - index * 0.05};
        animation: ${animation} ${18 + index * 4}s ease-in-out infinite;
        background: linear-gradient(
          ${45 + index * 15}deg,
          #3b82f6 0%,
          transparent 50%,
          #1e3a8a 100%
        );
        filter: blur(${80 + index * 20}px);
      `
      container.appendChild(mesh)
    }

    // Create multiple mesh layers
    for (let i = 0; i < 3; i++) {
      createMeshLayer(i)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    />
  )
}
