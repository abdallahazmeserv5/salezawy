"use client"

import React from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Marquee } from "@/components/shadcn-space/animations/marquee"

const logosRow1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const logosRow2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const LogoItem = ({ n, index }: { n: number, index: number }) => (
  <div 
    className="shrink-0 flex items-center justify-center p-6 border border-white/10 h-24 md:h-28 w-44 md:w-64 group bg-white/5 rounded-2xl mx-3 transition-colors hover:bg-white/10"
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

export function SocialProof() {
  return (
    <section className="bg-sales-bg py-24 font-almarai text-center overflow-hidden">
      <div>
        {/* Title Section */}
        <Container className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            <span className="text-sales-accent">+2,750</span> عميل يثقون بنا
          </h2>
        </Container>

        {/* Marquee Container exactly aligned to the user's snippet */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-10 select-none">
          <Marquee pauseOnHover className="[--duration:35s]">
            {logosRow1.map((n, i) => (
              <LogoItem key={`row1-${i}`} n={n} index={i} />
            ))}
          </Marquee>
          
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {logosRow2.map((n, i) => (
              <LogoItem key={`row2-${i}`} n={n} index={i} />
            ))}
          </Marquee>
          
          <div className="from-sales-bg pointer-events-none absolute inset-y-0 left-0 w-32 md:w-96 bg-linear-to-r"></div>
          <div className="from-sales-bg pointer-events-none absolute inset-y-0 right-0 w-32 md:w-96 bg-linear-to-l"></div>
        </div>
      </div>
    </section>
  )
}

