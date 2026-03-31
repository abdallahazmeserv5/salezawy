"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MagneticButton } from "@/components/ui/magnetic-button"

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
  const glow1Ref = useRef<HTMLDivElement>(null)
  const glow2Ref = useRef<HTMLDivElement>(null)
  const glow3Ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Mouse move parallax
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const xPos = (clientX / window.innerWidth - 0.5) * 2
        const yPos = (clientY / window.innerHeight - 0.5) * 2

        gsap.to(glow1Ref.current, { x: xPos * 30, y: yPos * 30, duration: 2, ease: "power2.out" })
        gsap.to(glow2Ref.current, { x: xPos * -40, y: yPos * -40, duration: 2.5, ease: "power2.out" })
        gsap.to(glow3Ref.current, { x: xPos * 20, y: yPos * 20, duration: 1.5, ease: "power2.out" })
        gsap.to(imageRef.current, { rotateY: xPos * 5, rotateX: yPos * -5, duration: 2, ease: "power2.out" })
      }

      window.addEventListener("mousemove", handleMouseMove)

      // Initial states
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
      gsap.set([h1Ref.current, h2Ref.current, btnRef.current], { y: 30 })
      gsap.set(textRef.current, { x: 30 })
      gsap.set(imageRef.current, { scale: 0.9, rotateY: 10 })

      const tl = gsap.timeline({
        delay: 0.2
      })

      tl.to(textRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        h1Ref.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .to(
        h2Ref.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        pRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        btnRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )

      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1.5,
        ease: "power4.out",
      })

      // Floating animation for images
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Background floating shapes
      gsap.to(".floating-shape", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      })

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-sales-bg pt-[40px] font-almarai md:pt-[60px]"
    >
      {/* Background Glows & Floating Elements */}
      <div className="absolute inset-0 z-0 select-none">
        <div ref={glow1Ref} className="pointer-events-none absolute top-[10%] left-[5%] h-[600px] w-[600px] rounded-full bg-sales-purple/10 blur-[120px]" />
        <div ref={glow2Ref} className="pointer-events-none absolute right-[10%] bottom-[15%] h-[500px] w-[500px] rounded-full bg-sales-accent/10 blur-[150px]" />
        <div ref={glow3Ref} className="pointer-events-none absolute top-[30%] right-[15%] h-[400px] w-[400px] rounded-full bg-sales-primary/10 blur-[100px]" />
        
        {/* Decorative Floating Shapes */}
        <div className="floating-shape absolute top-1/4 left-1/3 h-8 w-8 rounded-lg bg-sales-purple/20 backdrop-blur-sm" />
        <div className="floating-shape absolute bottom-1/3 right-1/4 h-12 w-12 rounded-full bg-sales-accent/10 backdrop-blur-sm" />
        <div className="floating-shape absolute top-1/2 right-[10%] h-6 w-6 rotate-45 bg-sales-primary/20 backdrop-blur-sm" />
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

          <div className="relative aspect-square w-full max-w-[375px] lg:h-[450px] lg:w-[450px] lg:max-w-none">
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
              className="absolute top-[40%] left-1/2 z-10 w-[60%] max-w-[225px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-2xl lg:max-w-none"
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
                className="text-[32px] leading-[1.1] font-extrabold text-white sm:text-[40px] md:text-[50px] lg:text-[64px]"
              >
                <span className="bg-linear-to-l from-sales-purple via-[#38BDF8] to-sales-accent bg-clip-text text-transparent">
                  مساعد AI ذكي
                </span>{" "}
                للمبيعات
              </h1>

              <h2
                ref={h2Ref}
                className="text-[24px] leading-tight font-bold text-white sm:text-[28px] md:text-[36px] lg:text-[48px]"
              >
                يتولى عميلك بشكل كامل
              </h2>
            </div>

            <p
              ref={pRef}
              className="max-w-[600px] text-[16px] leading-[1.6] font-medium text-white/50 lg:text-[18px]"
            >
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص.
            </p>

            <div ref={btnRef} className="pt-[20px] flex gap-4">
              <MagneticButton>
                <button className="group relative flex items-center gap-[12px] overflow-hidden rounded-[14px] bg-white px-[32px] py-[14px] font-bold text-black transition-all hover:bg-white/90 shadow-[0_10px_40px_rgba(255,255,255,0.15)]">
                  <span className="relative z-10 text-[16px]">ابدأ التجربة مجاناً</span>
                  <ArrowRight className="relative z-10 h-[18px] w-[18px] transform transition-transform group-hover:-translate-x-[4px]" />
                </button>
              </MagneticButton>
              <MagneticButton>
                <button className="group relative flex items-center gap-[12px] overflow-hidden rounded-[14px] border border-white/10 bg-white/5 px-[32px] py-[14px] font-bold text-white transition-all hover:bg-white/10">
                  <span className="relative z-10 text-[16px]">تواصل معنا</span>
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
