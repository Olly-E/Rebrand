'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const Eye = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number }
}) => {
  const eyeRef = useRef<HTMLDivElement | null>(null)
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 })

  const eyeSize = 40
  const pupilSize = 10
  const movementRange = eyeSize - pupilSize

  useEffect(() => {
    if (!eyeRef.current) return

    const { left, top, width, height } = eyeRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    // Calculate offset
    const deltaX = mousePosition.x - centerX
    const deltaY = mousePosition.y - centerY

    // Normalize movement within range
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)
    let pupilX = deltaX
    let pupilY = deltaY

    if (distance > movementRange) {
      const angle = Math.atan2(deltaY, deltaX)
      pupilX = Math.cos(angle) * movementRange
      pupilY = (Math.sin(angle) * movementRange) / 3
    }

    setPupilPos({ x: pupilX, y: pupilY })
  }, [mousePosition]) // Run effect when mouse moves

  return (
    <div
      ref={eyeRef}
      className="relative w-[85.97px] h-[41px] bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg"
    >
      {/* Pupil */}
      <motion.div
        className="absolute w-[30px] h-[30px] bg-black rounded-full"
        animate={{ x: pupilPos.x, y: pupilPos.y }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.1 }} // Faster & Smoother
      />
    </div>
  )
}

export const EyeMouseEffectAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="flex items-center relative justify-center -mb-[155.12px] w-[311.33px] h-[155.12px] bg-red-state">
      {/* Eyes Container */}
      <div className="flex gap-10">
        {[0, 1].map((index) => (
          <Eye key={index} mousePosition={mousePosition} />
        ))}
      </div>
    </div>
  )
}
