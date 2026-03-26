"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const LogoItem = ({ n, index }: { n: number, index: number }) => (
  <div 
    className="shrink-0 flex items-center justify-center p-6 border border-white/10 h-24 md:h-28 w-44 md:w-64 group bg-white/5 rounded-2xl mx-3"
  >
    <div className="relative w-full h-full flex items-center justify-center opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500">
      <Image 
        src={`/images/saleszawy/logos/logo-${n}.svg`} 
        alt={`Partner Logo ${index + 1}`} 
        width={160} 
        height={50} 
        className="max-h-10 md:max-h-12 w-auto object-contain"
        onError={() => {
          console.log(`Missing logo ${n}`)
        }}
      />
    </div>
  </div>
)

const LogoSet = ({ logos, prefix }: { logos: number[], prefix: string }) => (
  <div className="flex shrink-0">
    {logos.map((n, i) => (
      <LogoItem key={`${prefix}-${i}`} n={n} index={i} />
    ))}
  </div>
)

export function SocialProof() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  // Use more logos per row to ensure a wider set that covers the whole screen
  const logosRow1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const logosRow2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

  useGSAP(() => {
    // Title Entry - Keep it simple
    gsap.from(titleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top bottom-=50",
        toggleActions: "play none none none",
        once: true
      }
    })

    // Marquee Row 1 - Moving Left
    // Animated by -50% because we have two identical sets of logos
    const tl1 = gsap.to(row1Ref.current, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    })

    // Marquee Row 2 - Moving Right
    // Starts at -50% and moves to 0%
    gsap.set(row2Ref.current, { xPercent: -50 })
    const tl2 = gsap.to(row2Ref.current, {
      xPercent: 0,
      duration: 40,
      ease: "none",
      repeat: -1,
    })

    // Pause on hover
    const handleMouseEnter = () => {
      tl1.pause()
      tl2.pause()
    }
    const handleMouseLeave = () => {
      tl1.play()
      tl2.play()
    }

    const logosParent = logosRef.current
    if (logosParent) {
      logosParent.addEventListener("mouseenter", handleMouseEnter)
      logosParent.addEventListener("mouseleave", handleMouseLeave)
    }

    ScrollTrigger.refresh()

    return () => {
      if (logosParent) {
        logosParent.removeEventListener("mouseenter", handleMouseEnter)
        logosParent.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="bg-sales-bg py-24 font-almarai rtl text-center overflow-hidden">
      <div>
        
        {/* Title Section */}
        <Container 
          ref={titleRef}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            <span className="text-sales-accent">+2,750</span> عميل يثقون بنا
          </h2>
        </Container>

        {/* Marquee Container */}
        <div ref={logosRef} className="relative space-y-10 select-none cursor-pointer">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-96 bg-linear-to-r from-sales-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-96 bg-linear-to-l from-sales-bg to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="flex overflow-hidden">
            <div ref={row1Ref} className="flex shrink-0 whitespace-nowrap">
              <LogoSet logos={logosRow1} prefix="row1-set1" />
              <LogoSet logos={logosRow1} prefix="row1-set2" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden">
            <div ref={row2Ref} className="flex shrink-0 whitespace-nowrap">
              <LogoSet logos={logosRow2} prefix="row2-set1" />
              <LogoSet logos={logosRow2} prefix="row2-set2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


