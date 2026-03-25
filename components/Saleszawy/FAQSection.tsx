"use client"

import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

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
  const [openId, setOpenId] = useState<string | null>("01")

  return (
    <section className="py-24 bg-sales-bg font-almarai rtl text-right">
      <div className="w-[90%] max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            أسئلة <span className="text-sales-accent">شائعة</span>
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
                "group rounded-[24px] border transition-all duration-300 overflow-hidden",
                openId === faq.id 
                  ? "bg-white/5 border-sales-accent/30" 
                  : "bg-white/2 border-white/10 hover:border-white/20"
              )}
            >
              <button 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-right"
              >
                <div className="flex items-center gap-6">
                  <span className={cn(
                    "text-2xl font-bold font-poppins transition-colors",
                    openId === faq.id ? "text-sales-accent" : "text-white/20"
                  )}>
                    {faq.id}
                  </span>
                  <span className="text-lg md:text-xl font-bold text-white group-hover:text-sales-accent transition-colors">
                    {faq.question}
                  </span>
                </div>
                
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500",
                  openId === faq.id ? "bg-sales-accent rotate-180" : "bg-white/5"
                )}>
                  {openId === faq.id ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white/40" />
                  )}
                </div>
              </button>

              <div className={cn(
                "grid transition-all duration-300 ease-in-out",
                openId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <p className="p-8 pt-0 text-white/60 leading-relaxed text-lg border-t border-white/5 mt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
