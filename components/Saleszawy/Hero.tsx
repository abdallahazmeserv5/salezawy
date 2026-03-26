"use client"

import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative w-full min-h-[952px] flex flex-col items-center justify-center overflow-hidden bg-[#050505] font-almarai rtl text-right pt-[120px]">
      {/* Background Glows (Approximate from image) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[#fb432c]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-[#27213b]/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-[#0ea5e9]/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] px-[80px] lg:px-[160px] flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        {/* Text Side (Right in RTL, Left in UI) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-[850px] text-right"
        >
          <div className="space-y-[32px]">
            <div className="space-y-[16px]">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-[64px] lg:text-[86px] font-extrabold leading-[1.1] text-white"
              >
                <span className="bg-gradient-to-l from-[#C084FC] via-[#38BDF8] to-[#2DD4BF] bg-clip-text text-transparent">
                  مساعد AI ذكي
                </span>{" "}
                للمبيعات
              </motion.h1>
              
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-[48px] lg:text-[64px] font-bold text-white leading-tight"
              >
                يتولي عميلك بشكل كامل
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[20px] lg:text-[24px] text-white/50 max-w-[680px] leading-[1.6] font-medium"
            >
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص.
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="pt-[20px]"
            >
              <button className="flex items-center gap-[12px] bg-transparent border border-[#fb432c]/30 hover:border-[#fb432c]/60 text-white font-bold py-[18px] px-[48px] rounded-[18px] transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fb432c]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-[20px] relative z-10">بدأ التجــربة</span>
                <ArrowRight className="w-[20px] h-[20px] relative z-10 transform group-hover:-translate-x-[4px] transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Side (Left in RTL, Right in UI) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative flex justify-center items-center"
        >
          <div className="relative w-[500px] h-[600px] lg:w-[850px] lg:h-[900px]">
             {/* Robot and Phone Illustration */}
             <Image 
              src="/images/saleszawy/ai-robot.png"
              alt="AI Robot Assistant"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
