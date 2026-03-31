"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTilt } from "@/hooks/useTilt"

export const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
