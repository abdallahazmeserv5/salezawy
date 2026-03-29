"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const reviews = [
  {
    text: "تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته",
    author: "سامي رضوان",
    role: "Ceo",
    avatar: "https://i.pravatar.cc/150?u=sami"
  },
  {
    text: "النظام متكامل وبسيط جداً في التعامل، ساعدنا كثير في تنظيم مبيعاتنا وزيادة سرعة الرد على العملاء",
    author: "أحمد علي",
    role: "Marketing Manager",
    avatar: "https://i.pravatar.cc/150?u=ahmed"
  },
  {
    text: "تجربة رائعة ودعم فني متميز، أنصح به لكل صاحب تجارة إلكترونية يريد التوسع",
    author: "ياسر محمود",
    role: "Founder",
    avatar: "https://i.pravatar.cc/150?u=yasser"
  }
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
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
        once: true
      }
    })

    ScrollTrigger.refresh()
  }, { scope: containerRef })

  // Animate text when active index changes
  useGSAP(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current, 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      )
    }
  }, { dependencies: [active], scope: containerRef })

  return (
    <section ref={containerRef} className="bg-sales-bg py-16 font-almarai relative overflow-hidden">
      <Container>
        <div 
          ref={cardRef}
          className="glass-card rounded-[32px] p-10 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center gap-10 border border-white/10 bg-white/5 backdrop-blur-[30px]"
        >
          {/* Big Quotation Mark */}
          <div className="absolute top-10 right-10 text-[200px] leading-none text-white/5 font-serif select-none pointer-events-none">
            99
          </div>

          <div className="flex-1 relative z-10">
             <p 
               ref={textRef}
               className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8"
             >
               {reviews[active].text}
             </p>
             
             <div>
                <h4 className="text-xl font-bold text-white">{reviews[active].author}</h4>
                <p className="text-white/40 text-sm italic">{reviews[active].role}</p>
             </div>
          </div>

          <div className="flex flex-row md:flex-col gap-4 relative z-10 justify-center">
            {reviews.map((rev, i) => (
              <button 
                key={i}
                onClick={() => setActive(i)}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 transition-all p-0.5 ${active === i ? 'border-sales-accent scale-110' : 'border-transparent opacity-40 hover:opacity-100'}`}
              >
                <Image 
                  src={rev.avatar} 
                  alt={rev.author} 
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-xl"
                />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

