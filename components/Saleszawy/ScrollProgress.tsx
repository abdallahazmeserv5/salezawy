"use client"

import React from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-100 h-1 origin-[0%] bg-linear-to-r from-sales-purple via-sales-accent to-sales-purple"
      style={{ scaleX }}
    />
  )
}
