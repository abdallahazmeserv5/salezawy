"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"

const tiers = [
  {
    name: "الخطة الأساسية",
    price: "50",
    features: [
      "50 عميل فقط",
      "دعم فني مستمر",
      "تقارير يومية وشهرية",
      "6 شهور فقط",
      "إستجابة عالية"
    ],
    highlight: false
  },
  {
    name: "الخطة المقترحة",
    price: "1,250",
    features: [
      "50 عميل فقط",
      "دعم فني مستمر",
      "تقارير يومية وشهرية",
      "6 شهور فقط",
      "إستجابة عالية"
    ],
    highlight: true,
    badge: "الخطة المقترحة"
  },
  {
    name: "الخطة الماسية",
    price: "50",
    features: [
      "50 عميل فقط",
      "دعم فني مستمر",
      "تقارير يومية وشهرية",
      "6 شهور فقط",
      "إستجابة عالية"
    ],
    highlight: false
  }
]

export function Pricing() {
  return (
    <section className="bg-sales-bg py-24 font-almarai rtl text-right relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto flex flex-col items-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sales-accent font-bold mb-4"
            >
              يمكنك إختيار خطتك الآن بمميزات تناسب فئتك
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full">
                {tiers.map((tier, i) => (
                    <motion.div 
                      key={i}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative rounded-[32px] p-10 flex flex-col transition-all duration-500 hover:scale-[1.02] ${tier.highlight ? 'bg-[#050505] border border-white/10 shadow-[0_0_80px_rgba(87,144,255,0.1)]' : 'bg-white border border-black/5 shadow-sm'}`}
                    >
                        {tier.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sales-secondary text-white px-6 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                                <Zap className="w-3 h-3 fill-white" />
                                {tier.badge}
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className={`text-xl font-bold mb-4 ${tier.highlight ? 'text-sales-secondary' : 'text-sales-bg/40'}`}>{tier.name}</h3>
                            <div className="flex items-baseline gap-2">
                                <span className={`text-5xl font-extrabold ${tier.highlight ? 'text-white' : 'text-sales-bg'}`}>{tier.price}</span>
                                <span className={tier.highlight ? 'text-white/40' : 'text-sales-bg/40'}>ج.م/ شهريا</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {tier.features.map((feat, j) => (
                                <li key={j} className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${tier.highlight ? 'bg-white/10 text-white' : 'bg-sales-bg/5 text-sales-bg'}`}>
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className={`text-sm ${tier.highlight ? 'text-white/70' : 'text-sales-bg/60'}`}>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-2xl font-bold transition-all ${tier.highlight ? 'bg-white text-sales-bg hover:opacity-90' : 'bg-sales-bg/5 text-sales-bg/40 hover:bg-sales-bg/10'}`}>
                            إشترك الآن
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
