"use client"

import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const faqs = [
  {
    id: "01",
    question: "ماهو الغرض من الخدمة؟",
    answer: "تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته وأهدافه البيعية."
  },
  {
    id: "02",
    question: "هل يوجد تطبيق للخدمة علي ios ؟",
    answer: "نعم، النظام متاح كتطبيق ويب متجاوب تماماً، ونعمل حالياً على إطلاق النسخة الخاصة بنظام iOS و Android قريباً جداً."
  },
  {
    id: "03",
    question: "ماهي خطوات الإشــتراك في الخدمــة؟",
    answer: "الأمر بسيط جداً، قم بالضغط على زر 'بدأ التجربة'، سجل بياناتك، وستصلك رسالة ترحيبية تشرح لك كافة الخطوات للبدء."
  },
  {
    id: "04",
    question: "ما هو سعر الإشتراك وأفضل خطة مقترحة؟",
    answer: "نوفر خططاً مرنة تبدأ من الخطة المجانية للتجربة وصولاً إلى خطط الشركات الكبرى. ننصح دائماً بالبدء بالخطة 'الاحترافية' للحصول على أفضل النتائج."
  },
  {
    id: "05",
    question: "هل يمكنني إلغاء الإشتراك في أي وقت؟",
    answer: "بالتأكيد، لا يوجد أي التزام طويل الأمد. يمكنك إلغاء أو تغيير خطتك في أي وقت من خلال لوحة التحكم الخاصة بك."
  }
]

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("03")

  return (
    <section className="py-24 bg-sales-bg font-almarai rtl text-right">
      <div className="w-[90%] max-w-4xl mx-auto space-y-12 md:space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold flex justify-center gap-2 items-center">
            <span className="text-sales-accent">أسئلة</span>
            <span className="text-white">شائعة</span>
          </h2>
          <p className="text-white/60">كل ما تحتاج لمعرفته حول سيلزاوي وكيفية البدء</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={faq.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "group rounded-[16px] border transition-all duration-300 overflow-hidden relative",
                openId === faq.id 
                  ? "bg-white/[0.04] border-sales-accent/40" 
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              )}
            >
              <button 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="relative w-full flex items-center h-[80px] md:h-[90px] px-6 md:px-8"
              >
                {/* Right: Number */}
                <div className="absolute right-6 md:right-8 flex items-center">
                  <span className={cn(
                    "text-xl font-bold font-poppins transition-colors",
                    openId === faq.id ? "text-sales-accent" : "text-white/20"
                  )}>
                    {faq.id}
                  </span>
                </div>

                {/* Center: Question Text */}
                <div className="flex-1 flex justify-center text-center px-16">
                  <span className={cn(
                    "text-base md:text-lg font-bold transition-colors",
                    openId === faq.id ? "text-white" : "text-white group-hover:text-sales-accent"
                  )}>
                    {faq.question}
                  </span>
                </div>
                
                {/* Left: Plus/Minus Icon */}
                <div className="absolute left-6 md:left-8 flex items-center">
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                    openId === faq.id ? "bg-[#F03606] text-white" : "bg-white/5 text-white/40 group-hover:bg-white/10"
                  )}>
                    {openId === faq.id ? (
                      <Minus className="w-4 h-4" strokeWidth={3} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={3} />
                    )}
                  </div>
                </div>
              </button>

              <div className={cn(
                "grid transition-all duration-300 ease-in-out",
                openId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-white/60 leading-relaxed text-sm md:text-base text-right max-w-full">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
