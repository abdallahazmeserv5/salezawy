"use client"

import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { useFAQAnimations } from "@/hooks/useFAQAnimations"

const faqs = [
  {
    id: "01",
    question: "ماهو الغرض من الخدمة؟",
    answer:
      "تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته وأهدافه البيعية.",
  },
  {
    id: "02",
    question: "هل يوجد تطبيق للخدمة علي ios ؟",
    answer:
      "نعم، النظام متاح كتطبيق ويب متجاوب تماماً، ونعمل حالياً على إطلاق النسخة الخاصة بنظام iOS و Android قريباً جداً.",
  },
  {
    id: "03",
    question: "ماهي خطوات الإشــتراك في الخدمــة؟",
    answer:
      "الأمر بسيط جداً، قم بالضغط على زر 'بدأ التجربة'، سجل بياناتك، وستصلك رسالة ترحيبية تشرح لك كافة الخطوات للبدء.",
  },
  {
    id: "04",
    question: "ما هو سعر الإشتراك وأفضل خطة مقترحة؟",
    answer:
      "نوفر خططاً مرنة تبدأ من الخطة المجانية للتجربة وصولاً إلى خطط الشركات الكبرى. ننصح دائماً بالبدء بالخطة 'الاحترافية' للحصول على أفضل النتائج.",
  },
  {
    id: "05",
    question: "هل يمكنني إلغاء الإشتراك في أي وقت؟",
    answer:
      "بالتأكيد، لا يوجد أي التزام طويل الأمد. يمكنك إلغاء أو تغيير خطتك في أي وقت من خلال لوحة التحكم الخاصة بك.",
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("03")
  const { containerRef, headerRef, listRef, addToRefs } = useFAQAnimations()

  return (
    <section ref={containerRef as React.RefObject<HTMLSelectElement | null>} className="bg-sales-bg py-6 font-almarai overflow-hidden md:py-12">
      <Container className="space-y-8 md:space-y-16">
        {/* Header */}
        <div ref={headerRef} className="space-y-4 text-center min-h-[100px]">
          <h2 className="flex items-center justify-center gap-2 text-3xl font-extrabold text-white md:text-4xl">
            <span>أسئلة</span>
            <span>شائعة</span>
          </h2>
          <p className="text-white/60">
            كل ما تحتاج لمعرفته حول سيلزاوي وكيفية البدء
          </p>
        </div>

        {/* FAQ Table Container */}
        <div ref={listRef} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] min-h-[400px]">
          <div>
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                ref={addToRefs}
                className={cn(
                  "group border-white/10 transition-all duration-300",
                  index !== faqs.length - 1 && "border-b"
                )}
              >
                <div
                  className={cn(
                    "grid min-h-[80px] grid-cols-[60px_1fr_60px] transition-colors duration-300 md:min-h-[90px] md:grid-cols-[80px_1fr_80px]",
                    openId === faq.id
                      ? "bg-white/[0.04]"
                      : "hover:bg-white/[0.03]"
                  )}
                >
                  {/* Right: Number Column */}
                  <div className="flex items-center justify-center border-r border-white/10">
                    <span
                      className={cn(
                        "font-poppins text-xl font-bold transition-colors",
                        openId === faq.id
                          ? "text-sales-accent"
                          : "text-white/20"
                      )}
                    >
                      {faq.id}
                    </span>
                  </div>

                  {/* Center: Question Text Column */}
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="flex flex-1 items-center px-4 py-4 md:px-8"
                  >
                    <span
                      className={cn(
                        "text-base font-bold transition-colors md:text-lg",
                        openId === faq.id
                          ? "text-white"
                          : "text-white group-hover:text-sales-accent"
                      )}
                    >
                      {faq.question}
                    </span>
                  </button>

                  {/* Left: Plus/Minus Icon Column */}
                  <div className="flex items-center justify-center border-l border-white/10">
                    <button
                      onClick={() =>
                        setOpenId(openId === faq.id ? null : faq.id)
                      }
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
                        openId === faq.id
                          ? "bg-[#F03606] text-white"
                          : "text-white/40 group-hover:text-white"
                      )}
                    >
                      {openId === faq.id ? (
                        <Minus className="h-4 w-4" strokeWidth={3} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={3} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Answer row */}
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openId === faq.id
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="flex">
                      {/* Empty spacer for icon column */}
                      <div className="w-[60px] border-l border-white/10 md:w-[80px]" />

                      {/* Content area */}
                      <div className="flex-1 px-4 pt-2 pb-6 md:px-8">
                        <div className="border-t border-white/5 pt-4">
                          <p className="text-sm leading-relaxed text-white/60 md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>

                      {/* Empty spacer for number column */}
                      <div className="w-[60px] border-r border-white/10 md:w-[80px]" />
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
