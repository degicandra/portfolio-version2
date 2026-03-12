import { useState, useEffect, useRef } from 'react'

export function useParallax(offset = 0.5) {
  const [offset_value, setOffset] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementTop = elementRef.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        const parallaxValue = (windowHeight - elementTop) * offset
        setOffset(parallaxValue)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return { elementRef, offset: offset_value }
}

export function useParallaxElement() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}
