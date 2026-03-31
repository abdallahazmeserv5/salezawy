"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TiltCard } from "@/components/ui/tilt-card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const reviews = [
  {
    text: "تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته",
    author: "سامي رضوان",
    role: "Ceo",
    avatar: "https://i.pravatar.cc/150?u=sami",
  },
  {
    text: "النظام متكامل وبسيط جداً في التعامل، ساعدنا كثير في تنظيم مبيعاتنا وزيادة سرعة الرد على العملاء",
    author: "أحمد علي",
    role: "Marketing Manager",
    avatar: "https://i.pravatar.cc/150?u=ahmed",
  },
  {
    text: "تجربة رائعة ودعم فني متميز، أنصح به لكل صاحب تجارة إلكترونية يريد التوسع",
    author: "ياسر محمود",
    role: "Founder",
    avatar: "https://i.pravatar.cc/150?u=yasser",
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      // Card Entrance
      gsap.set(cardRef.current, { opacity: 0, scale: 0.95 })
      gsap.to(cardRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
          once: true,
        },
      })

      ScrollTrigger.refresh()
    },
    { scope: containerRef }
  )

  // Animate text when active index changes
  useGSAP(
    () => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        )
      }
    },
    { dependencies: [active], scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-sales-bg py-8 font-almarai"
    >
      <Container>
        <TiltCard>
          <div
            ref={cardRef}
            className="glass-card relative flex flex-col items-center gap-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-[30px] md:flex-row md:p-14"
          >
            {/* Big Quotation Mark */}
            <div className="pointer-events-none absolute top-10 right-10 font-serif text-[200px] leading-none text-white/5 select-none">
              99
            </div>

            <div className="relative z-10 flex-1">
              <p
                ref={textRef}
                className="mb-8 text-xl leading-relaxed font-medium text-white md:text-2xl"
              >
                {reviews[active].text}
              </p>

              <div>
                <h4 className="text-xl font-bold text-white">
                  {reviews[active].author}
                </h4>
                <p className="text-sm text-white/40 italic">
                  {reviews[active].role}
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-row justify-center gap-4 md:flex-col">
              {reviews.map((rev, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-16 w-16 overflow-hidden rounded-2xl border-2 p-0.5 transition-all md:h-20 md:w-20 ${active === i ? "scale-110 border-sales-accent" : "border-transparent opacity-40 hover:opacity-100"}`}
                >
                  <Image
                    src={rev.avatar}
                    alt={rev.author}
                    width={80}
                    height={80}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </TiltCard>
      </Container>
    </section>
  )
}
