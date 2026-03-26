"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronDown, MoreHorizontal } from "lucide-react"

export function MultiFeatures() {
  return (
    <section className="relative w-full min-h-[822px] bg-[#121115] py-[120px] overflow-hidden font-almarai rtl text-right">
      {/* Background Decorative Elements matches the main frame fills */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-sales-accent/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sales-purple/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1351px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-[60px]">
        {/* Left Column: Metrics & Visuals (from Column 3590:6095) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-[497px] min-h-[470px] bg-[#28272D] rounded-[28px] p-8 border border-white/5 shadow-2xl overflow-hidden"
        >
          {/* Metric Item 1: New Customers (3590:6097) */}
          <div className="space-y-[20.45px]">
            <div className="flex items-center justify-between gap-[6.82px]">
              <span className="text-[18px] font-medium text-[#F7F7F7]">New customers</span>
              <button className="text-white/40 hover:text-white transition-colors">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-end gap-[13.64px]">
              <div className="flex flex-col gap-[8px]">
                <span className="text-4xl font-bold text-white tracking-tight">5,020</span>
                <div className="flex items-center gap-[6.82px]">
                   <div className="flex items-center gap-1 text-sales-accent bg-sales-accent/10 px-2 py-0.5 rounded-full text-sm">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>56%</span>
                  </div>
                  <span className="text-[#605959] text-[14px]">vs last month</span>
                </div>
              </div>
              {/* Simple Chart Visualization Placeholder */}
              <div className="flex-1 h-[60px] flex items-end gap-1 px-2">
                {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex-1 bg-sales-accent/40 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Graph overlay from Figma */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] opacity-20 pointer-events-none">
             <svg viewBox="0 0 497 200" className="w-full h-full">
                <path d="M0 150 Q 120 180 240 100 T 497 50" fill="none" stroke="#FB432C" strokeWidth="2" />
                <path d="M0 160 Q 120 190 240 110 T 497 60" fill="none" stroke="#5E6AD2" strokeWidth="1" />
             </svg>
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-right space-y-8"
        >
          <div className="inline-block px-4 py-2 bg-sales-accent/10 rounded-full border border-sales-accent/20">
            <span className="text-sales-accent text-sm font-bold uppercase tracking-wider">Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-[1.2]">
            نظام ذكي <br />
            <span className="text-sales-accent">يحلل كل شيء</span> <br />
            من أجلك
          </h2>

          <p className="text-[#605959] text-xl max-w-xl font-medium leading-relaxed">
            مساعدنا الذكي ليس مجرد أداة مبيعات، بل هو شريك يراقب الأرقام، يحلل الأنماط، ويقترح عليك دائماً الخطوة التالية الأفضل.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
             <div className="space-y-3">
                <div className="w-12 h-12 bg-sales-primary rounded-xl flex items-center justify-center">
                   <ArrowUpRight className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">زيادة المبيعات</h3>
                <p className="text-white/50 text-sm">يقوم النظام بتحسين كل فرصة بيع لضمان أعلى معدل تحويل ممكن.</p>
             </div>
             <div className="space-y-3">
                <div className="w-12 h-12 bg-sales-secondary rounded-xl flex items-center justify-center">
                   <MoreHorizontal className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">توفير الوقت</h3>
                <p className="text-white/50 text-sm">أتمتة كاملة للعمليات الروتينية ليتفرغ فريقك لما هو أهم فعلاً.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
