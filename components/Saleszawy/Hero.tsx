"use client"

import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-48 pb-20 overflow-hidden bg-sales-bg font-almarai rtl text-right">
      {/* Background Noise Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: "url('/images/saleszawy/noise-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.07, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-[10%] w-[300px] h-[300px] bg-sales-accent blur-[100px] rounded-full" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-sales-purple blur-[120px] rounded-full" 
      />

      {/* Hero Content Container */}
      <div className="relative z-10 w-[90%] max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl lg:text-7xl font-bold leading-[1.1] text-white"
            >
              <span className="text-sales-accent">مساعد AI</span> ذكي <br />
              للمبيعات
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl lg:text-3xl font-medium text-white/90"
            >
              يتولى عميلك بشكل كامل
            </motion.p>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="flex items-center gap-2 bg-sales-primary hover:opacity-90 text-white font-bold py-4 px-10 rounded-full transition-all group">
              بدأ التجــربة
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x--1" />
            </button>
            <button className="text-white hover:text-sales-accent transition-colors font-medium px-8 py-4">
              إكتشف المزيد
            </button>
          </motion.div>
        </motion.div>

        {/* AI Robot Image Illustration */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative flex justify-center items-center"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[400px] h-[500px] lg:w-[500px] lg:h-[600px]"
          >
             <Image 
              src="/images/saleszawy/ai-robot.png"
              alt="AI Robot Assistant"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(251,67,44,0.15)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
