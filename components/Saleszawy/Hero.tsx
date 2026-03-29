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

  useGSAP(
    () => {
      // Initial states (Fail-safe: only hidden if JS runs)
      gsap.set(
        [
          textRef.current,
          h1Ref.current,
          h2Ref.current,
          pRef.current,
          btnRef.current,
          imageRef.current,
        ],
        {
          opacity: 0,
        }
      )
      gsap.set([h1Ref.current, h2Ref.current, btnRef.current], { y: 20 })
      gsap.set(textRef.current, { x: 50 })
      gsap.set(imageRef.current, { scale: 0.95 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      })

      tl.to(textRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          h1Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          h2Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          pRef.current,
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          btnRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        )

      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
        },
      })

      ScrollTrigger.refresh()
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="rtl relative flex min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-sales-bg pt-[100px] text-right font-almarai"
    >
      {/* Background Glows (Approximate from image) */}
      <div className="absolute inset-0 z-0">
        <div className="pointer-events-none absolute top-[10%] left-[5%] h-[600px] w-[600px] rounded-full bg-[#fb432c]/5 blur-[120px]" />
        <div className="pointer-events-none absolute right-[10%] bottom-[15%] h-[500px] w-[500px] rounded-full bg-[#27213b]/20 blur-[150px]" />
        <div className="pointer-events-none absolute top-[30%] right-[15%] h-[400px] w-[400px] rounded-full bg-[#0ea5e9]/10 blur-[100px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-between gap-[40px] lg:flex-row">
        {/* Image Side (Left in RTL, Right in UI) */}
        <div
          ref={imageRef}
          className="relative flex flex-1 items-center justify-center pt-10"
        >
          {/* Subtle Glow Behind Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[300px] w-[300px] rounded-full bg-linear-to-tr from-[#38BDF8]/20 to-[#C084FC]/20 blur-[80px]" />
          </div>

          <div className="relative h-[424px] w-full mask-[radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)]">
            {/* Robot and Phone Illustration */}
            <Image
              src="/images/home/phone.webp"
              alt="AI Robot Assistant"
              fill
              className="object-contain"
              priority
            />

            <Image
              src="/images/home/robots.svg"
              alt="AI Robot Assistant"
              width={300}
              height={300}
              className="absolute left-1/2 top-[40%] z-10 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Text Side (Right in RTL, Left in UI) */}
        <div ref={textRef} className="max-w-[850px] flex-1">
          <div className="space-y-[24px]">
            <div className="space-y-[16px]">
              <h1
                ref={h1Ref}
                className="text-[48px] leading-[1.1] font-extrabold text-white lg:text-[64px]"
              >
                <span className="bg-linear-to-l from-[#C084FC] via-[#38BDF8] to-[#2DD4BF] bg-clip-text text-transparent">
                  مساعد AI ذكي
                </span>{" "}
                للمبيعات
              </h1>

              <h2
                ref={h2Ref}
                className="text-[32px] leading-tight font-bold text-white lg:text-[48px]"
              >
                يتولي عميلك بشكل كامل
              </h2>
            </div>

            <p
              ref={pRef}
              className="max-w-[600px] text-[16px] leading-[1.6] font-medium text-white/50 lg:text-[18px]"
            >
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص.
            </p>

            <div ref={btnRef} className="pt-[20px]">
              <button className="group relative flex items-center gap-[12px] overflow-hidden rounded-[14px] border border-[#fb432c]/30 bg-transparent px-[36px] py-[14px] font-bold text-white transition-all hover:border-[#fb432c]/60">
                <div className="absolute inset-0 bg-linear-to-r from-[#fb432c]/10 to-transparent opacity-50 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 text-[18px]">بدأ التجــربة</span>
                <ArrowRight className="relative z-10 h-[20px] w-[20px] transform transition-transform group-hover:-translate-x-[4px]" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
