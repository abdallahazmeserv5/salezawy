"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function SocialProof() {
  // We have 11 logos, let's repeat some or just show 11.
  // The screenshot shows 12. Let's use 12 slots.
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2] 

  return (
    <section className="bg-sales-bg py-20 font-almarai rtl text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            <span className="text-sales-accent">+2,750</span> عميل يثقون بنا
          </h2>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-6 border-t border-r border-white/10">
          {logos.map((n, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-8 border-b border-l border-white/10 h-32 md:h-40 group"
            >
              <div className="relative w-full h-full flex items-center justify-center opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image 
                  src={`/images/saleszawy/logos/logo-${n}.svg`} 
                  alt={`Partner Logo ${i + 1}`} 
                  width={140} 
                  height={45} 
                  className="max-h-8 md:max-h-10 w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

