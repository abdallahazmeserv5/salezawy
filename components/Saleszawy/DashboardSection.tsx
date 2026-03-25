"use client"

import React from "react"
import Image from "next/image"
import { TrendingUp, Users, Clock, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export function DashboardSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-sales-bg font-almarai rtl text-right">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-sales-purple/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            كيف يعمل <span className="text-sales-accent">النظام؟</span>
          </h2>
          <p className="text-xl text-white/60">
            مميزات متعددة في مكان واحد تمنحك التحكم الكامل في مبيعاتك
          </p>
        </div>

        {/* Dashboard Mockup Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Dashboard Left Column (Metrics) */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6 order-2 lg:order-1"
          >
             <div className="glass-nav rounded-[32px] p-8 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sales-accent/10 blur-3xl rounded-full" />
                
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Metric 1 */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-sales-accent/20 flex items-center justify-center">
                          <Users className="w-5 h-5 text-sales-accent" />
                        </div>
                        <span className="text-white font-medium">العملاء الجدد</span>
                      </div>
                      <span className="text-green-400 text-sm font-bold flex items-center gap-1">
                        +56% <TrendingUp className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-4xl font-bold text-white font-poppins">5,020</h3>
                      <p className="text-white/40 text-sm">مقارنة بالشهر الماضي</p>
                    </div>
                    {/* Mini Sparkline Placeholder */}
                    <div className="h-16 w-full flex items-end gap-1">
                      {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-sales-accent/20 rounded-t-sm group-hover:bg-sales-accent/40 transition-all duration-500" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  <div className="w-px bg-white/10 hidden md:block" />

                   {/* Metric 2 */}
                   <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-white font-medium">سرعة الاستجابة</span>
                      </div>
                      <span className="text-blue-400 text-sm font-bold flex items-center gap-1">
                        -20% <TrendingUp className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-4xl font-bold text-white font-poppins">40,420</h3>
                      <p className="text-white/40 text-sm">متوسط الثانية الواحدة</p>
                    </div>
                     <div className="flex items-center gap-2">
                         <div className="flex -space-x-3 rtl:space-x-reverse">
                             {[1,2,3,4].map(i => (
                                 <div key={i} className="w-8 h-8 rounded-full border-2 border-sales-bg bg-sales-purple flex items-center justify-center text-[10px] text-white overflow-hidden">
                                     <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="user" width={32} height={32} />
                                 </div>
                             ))}
                         </div>
                         <span className="text-white/40 text-xs">فريق عملك متصل الآن</span>
                     </div>
                  </div>
                </div>
             </div>

             {/* Chart Card */}
             <div className="glass-nav rounded-[32px] p-8 border border-white/10 group">
                <div className="flex items-center justify-between mb-8 text-right">
                  <div className="space-y-1">
                    <h4 className="text-white font-bold text-xl">إحصائيات المبيعات</h4>
                    <p className="text-white/40 text-sm">تحليل الدخل الشهري للسنة الحالية</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-sales-accent" />
                      <span className="text-white/60 text-xs font-poppins">Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-white/60 text-xs font-poppins">Sales</span>
                    </div>
                  </div>
                </div>

                <div className="h-[300px] w-full flex items-end justify-between gap-4 font-poppins text-[10px] text-white/30">
                  {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map((m, i) => (
                    <div key={m} className="flex-1 flex flex-col items-center gap-3">
                      <div className="w-full flex flex-col justify-end gap-1 h-[250px]">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${[40, 60, 45, 90, 65, 80, 55, 95, 70, 85, 50, 75][i % 12]}%` }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className="w-full bg-sales-accent/30 rounded-t-md hover:bg-sales-accent/60 transition-all cursor-pointer" 
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${[30, 50, 35, 80, 55, 70, 45, 85, 60, 75, 40, 65][i % 12]}%` }}
                          transition={{ duration: 1, delay: i * 0.05 + 0.1 }}
                          className="w-full bg-blue-500/30 rounded-t-md hover:bg-blue-500/60 transition-all cursor-pointer" 
                        />
                      </div>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
             </div>
          </motion.div>

          {/* Feature Text Column */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-6">
               <div className="w-16 h-16 rounded-2xl bg-sales-primary flex items-center justify-center text-white shadow-[0_0_30px_rgba(251,67,44,0.3)]">
                  <TrendingUp className="w-8 h-8" />
               </div>
               <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                 إحصائيات خاصة <br />
                 <span className="text-sales-gradient">بكل عميل</span>
               </h3>
               <p className="text-lg text-white/60 leading-relaxed">
                 تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته وأهدافه البيعية.
               </p>
            </div>

            <ul className="space-y-4">
              {[
                "تحليل ذكي لسلوك العملاء",
                "تقارير دورية تلقائية",
                "تتبع المبيعات لحظة بلحظة"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-sales-accent/20 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-sales-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="text-white font-bold border border-white/20 rounded-full px-8 py-3 hover:bg-white hover:text-black transition-all">
              أكتشف كل المميزات
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
