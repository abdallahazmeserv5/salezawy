"use client"

import React from "react"
import { Users, Star, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export function SocialProof() {
  return (
    <section className="bg-sales-bg py-16 font-almarai rtl text-right">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                <span className="text-sales-accent">+2,750</span> عمـيل <br />
                يثقــون بنا
            </h2>
            <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-sales-accent fill-sales-accent" />
                ))}
                <span className="text-white/60 text-sm mr-2">(4.9/5 تقييم العملاء)</span>
            </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center md:justify-end gap-x-12 gap-y-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        >
           <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-2"
            >
                <ShieldCheck className="w-8 h-8 text-white" />
                <span className="text-white font-bold text-xl uppercase tracking-widest font-poppins">Secure</span>
           </motion.div>
           <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
                <Users className="w-8 h-8 text-white" />
                <span className="text-white font-bold text-xl tracking-widest font-poppins">Community</span>
           </motion.div>
        </motion.div>
      </div>

      {/* Subtle Divider */}
      <div className="w-full h-px bg-linear-to-l from-transparent via-white/10 to-transparent mt-16" />
    </section>
  )
}
