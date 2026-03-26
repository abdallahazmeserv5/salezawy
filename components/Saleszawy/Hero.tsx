"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const pRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Initial states (Fail-safe: only hidden if JS runs)
    gsap.set([textRef.current, h1Ref.current, h2Ref.current, pRef.current, btnRef.current, imageRef.current], { 
      opacity: 0 
    })
    gsap.set([h1Ref.current, h2Ref.current, btnRef.current], { y: 20 })
    gsap.set(textRef.current, { x: 50 })
    gsap.set(imageRef.current, { scale: 0.95 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
      }
    })

    tl.to(textRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(h1Ref.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.6")
    .to(h2Ref.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.4")
    .to(pRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")
    .to(btnRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.2")

    gsap.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
      }
    })

    ScrollTrigger.refresh()
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative w-full min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-sales-bg font-almarai rtl text-right pt-[100px]">
      {/* Background Glows (Approximate from image) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[#fb432c]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-[#27213b]/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-[#0ea5e9]/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <Container className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-[40px]">
        {/* Text Side (Right in RTL, Left in UI) */}
        <div ref={textRef} className="flex-1 max-w-[850px] text-right">
          <div className="space-y-[24px]">
            <div className="space-y-[16px]">
              <h1 
                ref={h1Ref}
                className="text-[48px] lg:text-[64px] font-extrabold leading-[1.1] text-white"
              >
                <span className="bg-linear-to-l from-[#C084FC] via-[#38BDF8] to-[#2DD4BF] bg-clip-text text-transparent">
                  مساعد AI ذكي
                </span>{" "}
                للمبيعات
              </h1>
              
              <h2 
                ref={h2Ref}
                className="text-[32px] lg:text-[48px] font-bold text-white leading-tight"
              >
                يتولي عميلك بشكل كامل
              </h2>
            </div>

            <p 
              ref={pRef}
              className="text-[16px] lg:text-[18px] text-white/50 max-w-[600px] leading-[1.6] font-medium"
            >
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص.
            </p>

            <div 
              ref={btnRef}
              className="pt-[20px]"
            >
              <button className="flex items-center gap-[12px] bg-transparent border border-[#fb432c]/30 hover:border-[#fb432c]/60 text-white font-bold py-[14px] px-[36px] rounded-[14px] transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-[#fb432c]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-[18px] relative z-10">بدأ التجــربة</span>
                <ArrowRight className="w-[20px] h-[20px] relative z-10 transform group-hover:-translate-x-[4px] transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Image Side (Left in RTL, Right in UI) */}
        <div 
          ref={imageRef}
          className="flex-1 relative flex justify-center items-center"
        >
          <div className="relative w-[400px] h-[500px] lg:w-[700px] lg:h-[750px]">
             {/* Robot and Phone Illustration */}
             <Image 
              src="/images/saleszawy/ai-robot.png"
              alt="AI Robot Assistant"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
