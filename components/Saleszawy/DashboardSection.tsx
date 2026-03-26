"use client"

import React from "react"
import Image from "next/image"
import { TrendingUp, Users, Clock, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export function DashboardSection() {
  return (
    <section className="rtl relative overflow-hidden bg-sales-bg py-24 text-right font-almarai">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sales-purple/20 blur-[150px]" />

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl space-y-20">
        {/* Dashboard Mockup Grid */}
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Dashboard Left Column (Metrics) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 space-y-6 lg:order-1 lg:col-span-8"
          >
            <div className="glass-nav group relative overflow-hidden rounded-[32px] border border-white/10 p-8">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-sales-accent/10 blur-3xl" />

              <div className="flex flex-col gap-8 md:flex-row">
                {/* Metric 1 */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sales-accent/20">
                        <Users className="h-5 w-5 text-sales-accent" />
                      </div>
                      <span className="font-medium text-white">
                        العملاء الجدد
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold text-green-400">
                      +56% <TrendingUp className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-poppins text-4xl font-bold text-white">
                      5,020
                    </h3>
                    <p className="text-sm text-white/40">
                      مقارنة بالشهر الماضي
                    </p>
                  </div>
                  {/* Mini Sparkline Placeholder */}
                  <div className="flex h-16 w-full items-end gap-1">
                    {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-sales-accent/20 transition-all duration-500 group-hover:bg-sales-accent/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="hidden w-px bg-white/10 md:block" />

                {/* Metric 2 */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
                        <Clock className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="font-medium text-white">
                        سرعة الاستجابة
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold text-blue-400">
                      -20% <TrendingUp className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-poppins text-4xl font-bold text-white">
                      40,420
                    </h3>
                    <p className="text-sm text-white/40">
                      متوسط الثانية الواحدة
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-3 rtl:space-x-reverse">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-sales-bg bg-sales-purple text-[10px] text-white"
                        >
                          <Image
                            src={`https://i.pravatar.cc/100?u=${i}`}
                            alt="user"
                            width={32}
                            height={32}
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-white/40">
                      فريق عملك متصل الآن
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Card */}
            <div className="glass-nav group rounded-[32px] border border-white/10 p-8">
              <div className="mb-8 flex items-center justify-between text-right">
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-white">
                    إحصائيات المبيعات
                  </h4>
                  <p className="text-sm text-white/40">
                    تحليل الدخل الشهري للسنة الحالية
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-sales-accent" />
                    <span className="font-poppins text-xs text-white/60">
                      Income
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="font-poppins text-xs text-white/60">
                      Sales
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex h-[300px] w-full items-end justify-between gap-4 font-poppins text-[10px] text-white/30">
                {[
                  "JAN",
                  "FEB",
                  "MAR",
                  "APR",
                  "MAY",
                  "JUN",
                  "JUL",
                  "AUG",
                  "SEP",
                  "OCT",
                  "NOV",
                  "DEC",
                ].map((m, i) => (
                  <div
                    key={m}
                    className="flex flex-1 flex-col items-center gap-3"
                  >
                    <div className="flex h-[250px] w-full flex-col justify-end gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{
                          height: `${[40, 60, 45, 90, 65, 80, 55, 95, 70, 85, 50, 75][i % 12]}%`,
                        }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className="w-full cursor-pointer rounded-t-md bg-sales-accent/30 transition-all hover:bg-sales-accent/60"
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{
                          height: `${[30, 50, 35, 80, 55, 70, 45, 85, 60, 75, 40, 65][i % 12]}%`,
                        }}
                        transition={{ duration: 1, delay: i * 0.05 + 0.1 }}
                        className="w-full cursor-pointer rounded-t-md bg-blue-500/30 transition-all hover:bg-blue-500/60"
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
            className="order-1 space-y-8 lg:order-2 lg:col-span-4"
          >
            <div className="space-y-6">
              <div className="bg-sales-primary flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-[0_0_30px_rgba(251,67,44,0.3)]">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-3xl leading-tight font-bold text-white md:text-4xl">
                إحصائيات خاصة <br />
                <span className="text-sales-gradient">بكل عميل</span>
              </h3>
              <p className="text-lg leading-relaxed text-white/60">
                تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن
                لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته وأهدافه
                البيعية.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "تحليل ذكي لسلوك العملاء",
                "تقارير دورية تلقائية",
                "تتبع المبيعات لحظة بلحظة",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sales-accent/20">
                    <ArrowUpRight className="h-3 w-3 text-sales-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="rounded-full border border-white/20 px-8 py-3 font-bold text-white transition-all hover:bg-white hover:text-black">
              أكتشف كل المميزات
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
