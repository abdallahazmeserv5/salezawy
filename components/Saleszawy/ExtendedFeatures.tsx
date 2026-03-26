"use client"

import React from "react"
import { motion } from "framer-motion"
import { Users, Clock, TrendingUp } from "lucide-react"

export function ExtendedFeatures() {
  return (
    <section className="bg-[#121115] py-24 font-almarai rtl text-right overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sales-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sales-secondary/20 blur-[120px] rounded-full" />
      </div>

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white text-center flex items-center gap-4"
          >
             <span className="text-white/20">{'['}</span> مميزات متعددة في مكان واحد <span className="text-white/20">{']'}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: New Customers / Response Time */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-[32px] p-8 min-h-[470px] flex flex-col justify-between"
          >
            <div className="flex flex-col gap-8">
              <div className="bg-white/5 rounded-2xl p-6 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-white/40 text-xs mb-1">New customers</p>
                    <h3 className="text-2xl font-bold text-white">5020</h3>
                  </div>
                  <Users className="w-5 h-5 text-sales-accent" />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  <span>56% vs last month</span>
                </div>
                {/* Floating "Respons time" badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 -bottom-4 bg-[#1e1b2e] rounded-2xl p-4 shadow-2xl border border-white/10 w-48"
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white/60 text-[10px]">Respons time</p>
                    <Clock className="w-3 h-3 text-sales-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-white">40,420</h4>
                  <p className="text-[10px] text-sales-accent mt-1">20% ↑ vs Fast month</p>
                </motion.div>
              </div>
            </div>
            
            <div className="mt-auto">
                <h4 className="text-xl font-bold text-white mb-2">إحصائيات خاصة بكل عميل</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته
                </p>
            </div>
          </motion.div>

          {/* Card 2: Income Analysis */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card rounded-[32px] p-8 min-h-[470px] flex flex-col justify-between"
          >
            <div className="bg-white/5 rounded-2xl p-6">
               <div className="flex justify-between items-center mb-6">
                 <div>
                   <p className="text-white/40 text-[10px]">Income Analysis</p>
                   <h3 className="text-2xl font-bold text-white">$10,8900</h3>
                 </div>
                 <div className="bg-green-400/10 text-green-400 text-[10px] px-2 py-1 rounded-md flex items-center gap-1">
                   <TrendingUp className="w-3 h-3" />
                   <span>18.7%</span>
                 </div>
               </div>
               {/* Simple Bar Chart Mockup */}
               <div className="flex items-end justify-between h-32 gap-1">
                 {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95].map((h, i) => (
                   <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.05) }}
                    className="flex-1 bg-sales-secondary/40 rounded-t-sm relative group"
                   >
                     <div className="absolute inset-0 bg-sales-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                   </motion.div>
                 ))}
               </div>
               <div className="flex justify-between mt-2 text-[8px] text-white/20">
                 <span>Activity</span>
                 <div className="flex gap-2">
                   <span className="text-sales-secondary">Quarter</span>
                   <span>Semester</span>
                   <span className="bg-sales-primary text-white px-1 rounded">Annual</span>
                 </div>
               </div>
            </div>

            <div className="mt-8">
                <h4 className="text-xl font-bold text-white mb-2">إحصائيات خاصة بكل عميل</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته
                </p>
            </div>
          </motion.div>

          {/* Card 3: Over Time Line Chart */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card rounded-[32px] p-8 min-h-[470px] flex flex-col justify-between"
          >
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="mb-6">
                <p className="text-white/40 text-[10px]">Over time</p>
                <h3 className="text-2xl font-bold text-white">$73,094.23</h3>
              </div>
              {/* Simple Line Chart Mockup */}
              <div className="relative h-32 w-full">
                <svg viewBox="0 0 200 100" className="w-full h-full">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    d="M0,50 Q25,30 50,55 T100,20 T150,60 T200,40"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FB432C" />
                      <stop offset="100%" stopColor="#FF591E" />
                    </linearGradient>
                  </defs>
                  {/* Glowing point */}
                  <motion.circle 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    cx="100" cy="20" r="4" fill="#FB432C"
                    className="drop-shadow-[0_0_8px_#FB432C]"
                  />
                </svg>
                <div className="flex justify-between mt-4 text-[10px] text-white/40">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span className="bg-sales-primary text-white px-2 py-0.5 rounded-full">March</span>
                  <span>Apr</span>
                  <span>May</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
                <h4 className="text-xl font-bold text-white mb-2">إحصائيات خاصة بكل عميل</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
