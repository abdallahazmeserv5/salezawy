"use client"

import React, { useState, useRef } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (itemsRef.current) {
      const children = itemsRef.current.children
      gsap.set(children, { y: 20, opacity: 0 })
      gsap.to(children, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none",
          once: true
        }
      })
    }
    ScrollTrigger.refresh()
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-16 bg-sales-bg font-almarai">
      <Container className="space-y-12 md:space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold flex justify-center gap-2 items-center text-white">
            <span>أسئلة</span>
            <span>شائعة</span>
          </h2>
          <p className="text-white/60">كل ما تحتاج لمعرفته حول سيلزاوي وكيفية البدء</p>
        </div>

        {/* FAQ Table Container */}
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
          <div ref={itemsRef}>
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                className={cn(
                  "group border-white/10 transition-all duration-300",
                  index !== faqs.length - 1 && "border-b"
                )}
              >
                <div 
                  className={cn(
                    "grid grid-cols-[60px_1fr_60px] md:grid-cols-[80px_1fr_80px] min-h-[80px] md:min-h-[90px] transition-colors duration-300",
                    openId === faq.id ? "bg-white/[0.04]" : "hover:bg-white/[0.03]"
                  )}
                >
                  {/* Left: Plus/Minus Icon Column */}
                  <div className="flex items-center justify-center border-l border-white/10">
                    <button 
                      onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                      className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                        openId === faq.id ? "bg-[#F03606] text-white" : "text-white/40 group-hover:text-white"
                      )}
                    >
                      {openId === faq.id ? (
                        <Minus className="w-4 h-4" strokeWidth={3} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={3} />
                      )}
                    </button>
                  </div>

                  {/* Center: Question Text Column */}
                  <button 
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="flex-1 px-4 md:px-8 py-4 flex items-center justify-end"
                  >
                    <span className={cn(
                      "text-base md:text-lg font-bold transition-colors",
                      openId === faq.id ? "text-white" : "text-white group-hover:text-sales-accent"
                    )}>
                      {faq.question}
                    </span>
                  </button>

                  {/* Right: Number Column */}
                  <div className="flex items-center justify-center border-r border-white/10">
                    <span className={cn(
                      "text-xl font-bold font-poppins transition-colors",
                      openId === faq.id ? "text-sales-accent" : "text-white/20"
                    )}>
                      {faq.id}
                    </span>
                  </div>
                </div>

                {/* Answer row */}
                <div className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden">
                    <div className="flex">
                      {/* Empty spacer for icon column */}
                      <div className="w-[60px] md:w-[80px] border-l border-white/10" />
                      
                      {/* Content area */}
                      <div className="flex-1 px-4 md:px-8 pb-6 pt-2">
                        <div className="border-t border-white/5 pt-4">
                          <p className="text-white/60 leading-relaxed text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>

                      {/* Empty spacer for number column */}
                      <div className="w-[60px] md:w-[80px] border-r border-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

