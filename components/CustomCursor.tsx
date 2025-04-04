'use client'

import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }

      createGlowTrail(e.clientX, e.clientY)
    }

    const createGlowTrail = (x: number, y: number) => {
      const glow = document.createElement('div')
      glow.className = 'glow-trail'
      glow.style.left = `${x}px`
      glow.style.top = `${y}px`

      document.body.appendChild(glow)

      setTimeout(() => {
        glow.remove()
      }, 600) // Match with CSS animation duration
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div ref={cursorRef} className="neon-cursor" />
}

export default CustomCursor
