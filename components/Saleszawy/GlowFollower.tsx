"use client"

import React, { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export const GlowFollower = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for the movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25, restDelta: 0.001 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25, restDelta: 0.001 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [mouseX, mouseY, isVisible])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-99"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease"
      }}
    >
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="absolute h-[300px] w-[300px] rounded-full bg-purple-500/15 blur-[80px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </motion.div>
  )
}
