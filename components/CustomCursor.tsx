'use client'

import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isMoving, setIsMoving] = useState(false)
  let timeout: NodeJS.Timeout

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        cursorRef.current.style.opacity = "1" // Make cursor visible when moving
      }

      setIsMoving(true)

      createGlowTrail(e.clientX, e.clientY)

      // Reset fade timeout
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setIsMoving(false)
      }, 1000) // Cursor fades away after 1 second of inactivity
    }

    const createGlowTrail = (x: number, y: number) => {
      const glow = document.createElement('div')
      glow.className = 'glow-trail'
      glow.style.left = `${x}px`
      glow.style.top = `${y}px`

      document.body.appendChild(glow)

      setTimeout(() => {
        glow.remove()
      }, 600)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeout)
    }
  }, [])

  return <div ref={cursorRef} className={`neon-cursor ${isMoving ? '' : 'fade-out'}`} />
}

export default CustomCursor
