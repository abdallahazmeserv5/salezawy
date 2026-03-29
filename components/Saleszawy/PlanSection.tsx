"use client"

import React, { useRef, useState } from "react"
import { Check, Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type Tier = {
  name: string;
  price: string;
  description?: string;
  features: string[];
  highlight: boolean;
  badge?: string;
}

const allTiers: Record<string, Tier[]> = {
  "شامل": [
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
    },
    {
      name: "الخطة المقترحة",
      price: "1,250",
      description: "تمنح المستخدم تجربة أكثر مرونة وراحة، حيث من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته.",
      features: [
        "منتجات غير محدودة",
        "دعم فني مستمر",
        "تقارير يومية وشهرية",
        "تحديثات مجانية",
        "إستجابة عالية"
      ],
      highlight: true,
      badge: "الخطة المقترحة"
    },
    {
      name: "الخطة المخصصة",
      price: "5,000",
      features: [
        "غير محدود",
        "دعم فني خاص",
        "تقارير متقدمة",
        "وصول للـ API",
        "مدير حساب مخصص"
      ],
      highlight: false
    }
  ],
  "متاجر": [
    {
      name: "البداية",
      price: "35",
      features: [
        "مدفوعات إلكترونية",
        "إدارة منتجات بسيطة",
        "تقارير مبيعات",
        "دعم عبر التذاكر"
      ],
      highlight: false
    },
    {
      name: "متجر متكامل",
      price: "900",
      description: "كل أدوات الإدارة المطلوبة لنقل متجرك لمستوى أعلى بمرونة كبيرة.",
      features: [
        "إدارة مخزون متقدمة",
        "ربط شركات الشحن",
        "مدفوعات دولية",
        "دعم فني مباشر"
      ],
      highlight: true,
      badge: "الأكثر طلباً"
    },
    {
      name: "المؤسسات",
      price: "3,500",
      features: [
        "إدارة فروع المتجر",
        "ربط مع ERP",
        "تقارير ضريبية مفصلة",
        "استضافة خاصة"
      ],
      highlight: false
    }
  ],
  "مطاعم": [
    {
      name: "كافيه صغير",
      price: "40",
      features: [
        "منيو إلكتروني QR",
        "إدارة طاولات",
        "نظام نقاط بيع بسيط",
        "دعم فني سريع"
      ],
      highlight: false
    },
    {
      name: "مطعم متكامل",
      price: "1,100",
      description: "إدارة مطعمك بكفاءة عالية، مع متابعة الطلبات وحجوزات الطاولات.",
      features: [
        "نظام KDS للمطبخ",
        "ربط مع تطبيقات التوصيل",
        "إدارة مخزون المكونات",
        "نظام الولاء"
      ],
      highlight: true,
      badge: "الخيار الأفضل"
    },
    {
      name: "سلسلة مطاعم",
      price: "4,000",
      features: [
        "إدارة فروع متعددة",
        "مستودع مركزي",
        "صلاحيات مستخدمين تفصيلية",
        "تحليلات أداء متقدمة"
      ],
      highlight: false
    }
  ],
  "شركات": [
    {
      name: "ستارت أب",
      price: "80",
      features: [
        "نظام فواتير وعروض سعر",
        "إدارة عملاء CRM",
        "متابعة مهام فريق العمل",
        "مستخدمين 2 فقط"
      ],
      highlight: false
    },
    {
      name: "الأعمال",
      price: "2,000",
      description: "باقة مخصصة لتحسين سير العمل ومتابعة مؤشرات أداء الشركة بدقة.",
      features: [
        "نظام ERP متكامل",
        "شؤون موظفين ورواتب",
        "نقاط البيع والفروع",
        "10 مستخدمين"
      ],
      highlight: true,
      badge: "رائج جداً"
    },
    {
      name: "الشركات الكبرى",
      price: "6,500",
      features: [
        "تخصيص كامل",
        "عدد مستخدمين غير محدود",
        "إستضافة خوادم خاصة",
        "دعم فني واستشارات إدارية"
      ],
      highlight: false
    }
  ]
}

export function PlanSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)

  const [selectedCategory, setSelectedCategory] = useState("شامل")
  const [selectedPeriod, setSelectedPeriod] = useState("سنوي")

  const categories = ["شامل", "متاجر", "مطاعم", "شركات"]
  const periods = [
    { id: "شهري", label: "شهري" },
    { id: "سنوي", label: "سنوي", discount: "وفر 20%" }
  ]

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 1024px)': { active: false }
      }
    },
    [
      AutoScroll({ 
        playOnInit: true, 
        stopOnInteraction: false,
        speed: 1
      })
    ]
  )

  useGSAP(() => {
    // Header Entry
    gsap.set(headerRef.current, { opacity: 0, y: 20 })
    gsap.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top bottom-=80",
        toggleActions: "play none none none",
        once: true
      }
    })

    // Tiers Stagger
    const slides = viewportRef.current?.querySelectorAll('.flex-\\[0_0_85\\%\\]')
    if (slides && slides.length > 0) {
      gsap.set(slides, { opacity: 0, y: 30 })
      gsap.to(slides, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: viewportRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
          once: true
        }
      })
    }

    ScrollTrigger.refresh()
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="bg-[#050505] py-[80px] font-almarai relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#fb432c]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-[#2dd4bf]/5 blur-[100px] rounded-full pointer-events-none" />
      </div>
      
      <Container className="relative z-10 flex flex-col items-center">
        <div
           ref={headerRef}
           className="text-center mb-[50px]"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-[12px]">إختر خطتك</h2>
          <p className="text-white/40 text-[18px] md:text-[20px] font-medium">
            يمكنك إختيار خطتك الآن بمميزات تناسب فئتك
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-col items-center justify-center gap-[24px] mb-[40px] w-full z-20">
          {/* Category Tabs */}
          <div className="flex items-center p-[6px] bg-[#0f1116]/90 border border-white/5 rounded-full backdrop-blur-md shadow-inner">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-[20px] md:px-[28px] py-[10px] rounded-full text-[14px] md:text-[15px] font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-white/10 text-white shadow-[0_2px_20px_rgba(255,255,255,0.05)]"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Period Tabs */}
          <div className="flex items-center p-[6px] bg-[#0f1116]/90 border border-white/5 rounded-full backdrop-blur-md shadow-inner">
            {periods.map(period => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`px-[20px] md:px-[28px] py-[10px] rounded-full text-[14px] md:text-[15px] font-bold transition-all duration-300 flex items-center gap-[10px] ${
                  selectedPeriod === period.id
                    ? "bg-white text-sales-bg shadow-[0_4px_25px_rgba(255,255,255,0.2)]"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {period.label}
                {period.discount && (
                  <span className={`text-[11px] px-[8px] py-[2px] rounded-full font-extrabold ${
                    selectedPeriod === period.id 
                      ? "bg-sales-bg/10 text-sales-bg" 
                      : "bg-[#2dd4bf]/20 text-[#2dd4bf]"
                  }`}>
                    {period.discount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div 
          className="w-full overflow-hidden" 
          ref={(node) => {
            emblaRef(node)
            viewportRef.current = node
          }}
        >
          <div className="flex touch-pan-y">
            {(allTiers[selectedCategory] || allTiers["شامل"]).map((tier, i) => {
              const numPrice = parseInt(tier.price.replace(/,/g, ''));
              let displayedPrice = tier.price;
              if (!isNaN(numPrice) && selectedPeriod === "سنوي") {
                displayedPrice = (numPrice * 12 * 0.8).toLocaleString("en-US");
              }

              return (
              <div 
                key={`${selectedCategory}-${i}`} 
                className="flex-[0_0_85%] min-w-0 pl-[24px] md:flex-[0_0_45%] lg:flex-[0_0_33.333%]"
              >
                <div
                  className={`relative rounded-[32px] p-[40px] flex flex-col transition-all duration-500 min-h-[660px] border h-full ${
                    tier.highlight 
                      ? 'bg-linear-to-b from-[#1a1426] to-[#0a0712] text-white shadow-[0_0_80px_rgba(192,132,252,0.1)] z-20 scale-[0.98] border-white/10' 
                      : 'bg-[#0f1116]/50 text-white/40 border-white/5 backdrop-blur-sm'
                  }`}
                >
                  {/* Badge for highlighted plan */}
                  {tier.highlight && (
                    <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 bg-[#1a1426] border border-white/10 px-[20px] py-[6px] rounded-full flex items-center gap-[8px]">
                       <span className="text-white text-[13px] font-medium">{tier.badge}</span>
                       <div className="w-[18px] h-[18px] bg-linear-to-br from-[#c084fc] to-[#5e6ad2] rounded-full flex items-center justify-center">
                          <Star className="w-[10px] h-[10px] fill-white text-white" />
                       </div>
                    </div>
                  )}

                  {/* Icon Placeholder */}
                  <div className="flex justify-end mb-[24px]">
                    <div className={`w-[42px] h-[42px] rounded-[14px] flex items-center justify-center ${tier.highlight ? 'bg-white/5 border border-white/10 shadow-inner' : 'bg-white/5 border border-white/5'}`}>
                      <div className={`w-[18px] h-[18px] rounded-sm transform rotate-45 ${tier.highlight ? 'bg-[#c084fc]' : 'bg-[#5e6ad2]/50'}`} />
                    </div>
                  </div>

                  {/* Price and Name */}
                  <div className="mb-[32px]">
                    <h3 className={`text-[16px] font-bold mb-[8px] ${tier.highlight ? 'text-white/60' : 'text-white/30'}`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-[12px]">
                       <span className={`text-[52px] font-extrabold leading-none ${tier.highlight ? 'text-white' : 'text-white/90'}`}>
                        {displayedPrice}
                      </span>
                      <span className={`text-[15px] font-medium ${tier.highlight ? 'text-white/40' : 'text-white/30'}`}>
                        {selectedPeriod === "سنوي" ? "ج.م / سنوياً" : "ج.م / شهرياً"}
                      </span>
                    </div>
                  </div>

                  {/* Description (Middle only) */}
                  {tier.highlight && (
                    <p className="text-[14px] text-white/50 leading-[1.6] mb-[32px] font-medium">
                      {tier.description}
                    </p>
                  )}

                  {/* Action Button */}
                  <button 
                    className={`w-full py-[16px] rounded-[20px] font-bold text-[18px] transition-all mb-[40px] ${
                      tier.highlight 
                        ? 'bg-white text-[#050505] hover:bg-white/90 shadow-[0_10px_40px_rgba(255,255,255,0.1)]' 
                        : 'bg-white/5 text-white/30 hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {tier.highlight ? 'إشترك الآن' : 'إشترك'}
                  </button>

                  {/* Features List */}
                  <ul className="space-y-[20px] flex-1">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-[16px] group">
                        <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                          tier.highlight 
                            ? 'border-white/10 bg-white/5 text-white' 
                            : 'border-white/5 bg-white/[0.02] text-white/20'
                        }`}>
                          <Check className="w-[14px] h-[14px]" />
                        </div>
                        <span className={`text-[15px] font-medium transition-colors ${tier.highlight ? 'text-white/70' : 'text-white/40'}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              )
            })}
          </div>
        </div>

      </Container>
    </section>
  )
}

