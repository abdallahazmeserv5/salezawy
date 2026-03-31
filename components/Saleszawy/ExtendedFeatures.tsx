"use client"

import React, { useRef, useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useTilt } from "@/hooks/useTilt"
import { motion } from "framer-motion"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ExtendedFeatures() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLHeadingElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)
  const floatingBadgeRef = useRef<HTMLDivElement>(null)
  const chartBarsRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const circleRef = useRef<SVGCircleElement>(null)
  
  const [activeMonth, setActiveMonth] = useState(2);
  const monthData = [
    { name: 'Jan', x: 25, y: 38, value: 45201.50 },
    { name: 'Feb', x: 70, y: 38, value: 58940.00 },
    { name: 'March', x: 100, y: 30, value: 73094.23 },
    { name: 'Apr', x: 150, y: 20, value: 89400.10 },
    { name: 'May', x: 200, y: 65, value: 61200.00 },
  ];
  const activeMonthData = monthData[activeMonth];
  const monthValueRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!monthValueRef.current) return;
    const el = monthValueRef.current;
    const currentStr = el.innerHTML.replace(/[^0-9.-]+/g,"");
    const currentVal = parseFloat(currentStr);
    
    // If it hasn't animated from 0 yet or is invalid, do not run our manual override here.
    if (!currentVal || currentVal === 0) return; 

    const obj = { val: currentVal };
    gsap.to(obj, {
      val: activeMonthData.value,
      duration: 0.8,
      ease: "power3.out",
      onUpdate: () => {
        el.innerHTML = "$" + obj.val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
    });
  }, [activeMonth, activeMonthData.value]);

  useGSAP(() => {
    // Header Entry
    gsap.set(headerRef.current, { y: 20, opacity: 0 })
    gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      }
    })

    // Card 1
    gsap.set(card1Ref.current, { y: 50, opacity: 0 })
    gsap.to(card1Ref.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      }
    })

    // Floating Badge Animation
    gsap.to(floatingBadgeRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })

    // Card 2
    gsap.set(card2Ref.current, { y: 50, opacity: 0 })
    gsap.to(card2Ref.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: card2Ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      }
    })

    // Staggered Bars in Card 2
    if (chartBarsRef.current) {
      gsap.utils.toArray(chartBarsRef.current.children).forEach((el: unknown, i: number) => {
        const bar = el as HTMLElement;
        const targetHeight = parseFloat(bar.style.height || "50");
        
        gsap.fromTo(bar, 
          { height: "0%" },
          {
            height: `${targetHeight}%`,
            duration: 1,
            delay: i * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: chartBarsRef.current,
              start: "top bottom-=100",
              once: true
            },
            onComplete: () => {
              gsap.to(bar, {
                height: `${Math.max(15, Math.min(100, targetHeight + (Math.random() * 30 - 15)))}%`, 
                duration: 1 + Math.random() * 0.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
              })
            }
          }
        )
      })
    }

    // Animate Numbers
    const numberTargets = containerRef.current?.querySelectorAll('.animate-number');
    if (numberTargets) {
      numberTargets.forEach((el: unknown) => {
        const hElement = el as HTMLElement;
        const targetStr = hElement.getAttribute('data-value') || "0";
        const target = parseFloat(targetStr);
        const prefix = hElement.getAttribute('data-prefix') || "";
        const suffix = hElement.getAttribute('data-suffix') || "";
        const isDecimal = hElement.hasAttribute('data-decimal');
        
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: hElement,
            start: "top bottom-=50",
            once: true
          },
          onUpdate: () => {
            if (isDecimal) {
              hElement.innerHTML = prefix + obj.val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + suffix;
            } else {
              hElement.innerHTML = prefix + Math.floor(obj.val).toLocaleString('en-US') + suffix;
            }
          }
        });
      });
    }

    // Card 3
    gsap.set(card3Ref.current, { y: 50, opacity: 0 })
    gsap.to(card3Ref.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: card3Ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      }
    })

    // Path animation in Card 3
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      gsap.fromTo(pathRef.current, 
        { strokeDasharray: length, strokeDashoffset: length },
        { 
          strokeDashoffset: 0, 
          duration: 2, 
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: pathRef.current,
            start: "top bottom-=100",
            once: true
          }
        }
      )
    }

    // Circle animation in Card 3
    gsap.set(circleRef.current, { opacity: 0 })
    gsap.to(circleRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: 2,
      scrollTrigger: {
        trigger: pathRef.current,
        start: "top bottom-=100",
        once: true
      }
    })

    ScrollTrigger.refresh()
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#121115] py-6 font-almarai md:py-10">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sales-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sales-secondary/20 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center mb-6 md:mb-10">
          <h2 
            ref={headerRef}
            className="text-3xl md:text-4xl font-extrabold text-white text-center flex items-center gap-4"
          >
             <span className="text-white/20">{'['}</span> مميزات متعددة في مكان واحد <span className="text-white/20">{']'}</span>
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            breakpoints: {
              '(min-width: 768px)': { active: false },
            },
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="flex md:grid md:grid-cols-3 md:gap-8 md:ml-0">
            <CarouselItem className="md:pl-0 md:basis-auto w-full shrink-0 basis-full">
              {/* Card 1: New Customers / Response Time */}
              <FeatureCardWrapper>
                <div 
                  ref={card1Ref}
                  className="bg-[#131217]/90 backdrop-blur-md border border-white/4 rounded-[32px] p-6 lg:p-8 min-h-[420px] mx-4 md:mx-0 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] group relative overflow-hidden"
                >
                  {/* Soft background glow tied to hover */}
                  <div className="absolute inset-0 bg-linear-to-tr from-[#0ea5e9]/0 via-[#0ea5e9]/0 to-[#0ea5e9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[32px]" />

                  <div className="relative h-[260px] w-full flex-1 mb-4 pointer-events-none">
                    {/* Back Card: New Customers */}
                    <div className="absolute top-2 left-0 w-[70%] bg-[#1A1A22]/40 border border-white/2 rounded-[24px] p-6 opacity-80 backdrop-blur-xl transition-all duration-500 group-hover:scale-95 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:opacity-40">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[#8e8d93] font-semibold text-[14px]">New customers</span>
                        <div className="flex flex-col gap-1 pr-2">
                          <div className="w-[3px] h-[3px] rounded-full bg-[#00DDA2]"></div>
                          <div className="w-[3px] h-[3px] rounded-full bg-[#0ea5e9]"></div>
                          <div className="w-[3px] h-[3px] rounded-full bg-[#0ea5e9]"></div>
                        </div>
                      </div>
                      <h3 className="text-[24px] font-bold text-[#8e8d93] mb-4 animate-number" data-value="5020">0</h3>
                      <div className="flex items-center gap-1 text-[12px] font-bold text-[#00DDA2]/50">
                        <span>56%</span>
                        <span className="text-[14px]">↓</span>
                      </div>
                    </div>

                    {/* Front Card: Respons time */}
                    <div ref={floatingBadgeRef} className="absolute top-[64px] right-0 left-[20%] z-10 pointer-events-auto">
                      <div className="bg-[#1C1C22]/95 border border-white/5 rounded-[24px] p-6 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:border-white/10 group-hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.15)]">
                        <div className="text-right mb-4">
                          <span className="text-white font-semibold text-[16px]">Respons time</span>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-[28px] font-bold text-white animate-number" data-value="40420">0</h3>
                        </div>
                        <div className="flex justify-between items-end w-full">
                          <div className="flex items-center gap-1.5 text-[12px]">
                            <span className="text-white font-semibold">20%</span>
                            <span className="text-[#0ea5e9] text-[15px] leading-none mb-0.5">↑</span>
                            <span className="text-[#6C6B71] font-medium ml-1">vs Fast month</span>
                          </div>
                          
                          <div className="w-[60px] h-[20px] relative -bottom-1">
                            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                              <path 
                                d="M0,25 L5,25 L10,20 L15,30 L20,15 L25,35 L35,20 L40,25 L50,10 L55,5 L60,15 L65,10 L70,25 L75,20 L80,20 L85,25 L90,10 L95,15 L100,5" 
                                fill="none" 
                                stroke="#0ea5e9" 
                                strokeWidth="2.5" 
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto text-right flex flex-col items-end relative z-10" dir="rtl">
                      <h4 className="text-[22px] font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#0ea5e9]">إحصائيات خاصة بكل عميل</h4>
                      <p className="text-[#8E8D93] text-[15px] leading-[1.8] max-w-[95%]">
                        تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته
                      </p>
                  </div>
                </div>
              </FeatureCardWrapper>
            </CarouselItem>

            <CarouselItem className="md:pl-0 md:basis-auto w-full shrink-0 basis-full">
              {/* Card 2: Income Analysis */}
              <FeatureCardWrapper>
                <div 
                  ref={card2Ref}
                  className="bg-[#131217]/90 backdrop-blur-md border border-white/4 rounded-[32px] p-6 lg:p-8 min-h-[420px] mx-4 md:mx-0 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] group relative overflow-hidden"
                >
                  {/* Soft background glow tied to hover */}
                  <div className="absolute inset-0 bg-linear-to-tr from-[#0ea5e9]/0 via-[#0ea5e9]/0 to-[#0ea5e9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[32px]" />

                  <div className="bg-[#1A1A22] border border-white/3 rounded-[24px] p-6 h-[260px] flex flex-col relative overflow-hidden pointer-events-all">
                    
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4 z-10 relative">
                      <div className="flex flex-col gap-1 w-full">
                        <p className="text-[#8e8d93] text-[13px] font-medium">Income Analysis</p>
                        <div className="flex items-center gap-4 mt-1">
                          <h3 className="text-[26px] font-bold text-white tracking-tight animate-number" data-value="108900" data-prefix="$">0</h3>
                          <div className="flex items-center gap-3">
                            <div className="bg-white text-[#00DDA2] text-[11px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-sm h-6">
                              <span className="text-[12px] leading-none mb-0.5">↗</span> <span className="pt-px">18.7%</span>
                            </div>
                            <span className="text-[#55545A] font-medium text-[13px]">Vs this month</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Activity & Tabs */}
                    <div className="flex justify-between items-end mb-4 z-10 relative">
                      <div className="flex flex-col">
                        <span className="text-[#55545A] font-bold text-[11px] mb-0.5">Activity</span>
                        <span className="text-[#0ea5e9]/10 text-[13px] font-medium leading-none tracking-wide">Online users</span>
                      </div>
                      <div className="flex bg-white rounded-[4px] overflow-hidden self-start">
                        <div className="text-[#8e8d93] text-[10px] font-bold px-3 py-1 border-r border-[#E5E5E5] cursor-pointer hover:bg-gray-50 transition-colors">Quarter</div>
                        <div className="text-[#8e8d93] text-[10px] font-bold px-3 py-1 border-r border-[#E5E5E5] cursor-pointer hover:bg-gray-50 transition-colors">Semester</div>
                        <div className="bg-[#0ea5e9] text-white text-[10px] font-bold px-3 py-1 cursor-pointer hover:bg-[#0c90ce] transition-colors">Annual</div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="flex flex-row flex-1 w-full relative z-10 min-h-[100px] mt-2">
                      {/* Y-Axis */}
                      <div className="flex flex-col justify-between h-full text-[9px] text-[#55545A] font-bold w-4 mr-3 z-10 opacity-70" style={{ paddingBottom: '14%' }}>
                        <span className="leading-none">6k</span>
                        <span className="leading-none">5k</span>
                        <span className="leading-none">4k</span>
                        <span className="leading-none">3k</span>
                        <span className="leading-none">2k</span>
                        <span className="leading-none">1k</span>
                      </div>
                      
                      <div className="flex-1 w-full h-full relative pl-1">
                        {/* Background tracks */}
                        <div className="absolute inset-0 flex items-end justify-between h-full w-full">
                          {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                              <div key={i} className="w-[4px] sm:w-[5px] h-full bg-white/4 rounded-full" />
                          ))}
                        </div>
                        {/* Foreground animated bars */}
                        <div ref={chartBarsRef} className="absolute inset-0 flex items-end justify-between h-full w-full">
                          {[12, 35, 52, 28, 22, 48, 12, 18, 25, 5, 26, 42].map((h, i) => (
                            <div 
                              key={i}
                              className="w-[4px] sm:w-[5px] bg-[#0ea5e9] rounded-full relative overflow-hidden"
                              style={{ height: `${h}%` }}
                            >
                              <div className="absolute inset-0 bg-white/30 opacity-0" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-right flex flex-col items-end" dir="rtl">
                      <h4 className="text-[22px] font-bold text-white mb-3">إحصائيات خاصة بكل عميل</h4>
                      <p className="text-[#8E8D93] text-[15px] leading-[1.8] max-w-[95%]">
                        تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته
                      </p>
                  </div>
                </div>
              </FeatureCardWrapper>
            </CarouselItem>

            <CarouselItem className="md:pl-0 md:basis-auto w-full shrink-0 basis-full">
              {/* Card 3: Over Time Line Chart */}
              <FeatureCardWrapper>
                <div 
                  ref={card3Ref}
                  className="bg-[#131217]/90 backdrop-blur-md border border-white/4 rounded-[32px] p-6 lg:p-8 min-h-[420px] mx-4 md:mx-0 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] group relative overflow-hidden"
                >
                  {/* Soft background glow tied to hover */}
                  <div className="absolute inset-0 bg-linear-to-tr from-[#0ea5e9]/0 via-[#0ea5e9]/0 to-[#0ea5e9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[32px]" />

                  <div className="bg-[#1A1A22] border border-white/3 rounded-[24px] p-6 h-[260px] flex flex-col relative overflow-hidden pointer-events-all">
                    <div className="mb-4 border-b border-white/[0.04] pb-4 z-10 relative">
                      <p className="text-[#8e8d93] text-[13px] mb-1 font-medium">Over time</p>
                      <h3 ref={monthValueRef} className="text-[26px] font-bold text-white tracking-tight animate-number" data-value={activeMonthData.value} data-prefix="$" data-decimal>0</h3>
                    </div>
                    
                    <div className="absolute inset-0 top-[90px] w-full flex-1">
                      <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Fill Area */}
                        <path 
                          d="M0,60 C15,40 20,38 25,38 C35,38 40,48 45,48 C55,48 60,38 70,38 C80,38 85,45 90,45 C95,45 98,30 100,30 C105,30 110,45 115,45 C125,45 140,20 150,20 C160,20 165,45 175,45 C185,45 190,65 200,65 L200,100 L0,100 Z"
                          fill="url(#areaGradient)"
                        />

                        {/* Vertical line indicator */}
                        <line 
                          x1={activeMonthData.x} y1={activeMonthData.y} x2={activeMonthData.x} y2="100" 
                          stroke="white" strokeOpacity="0.1" strokeWidth="1" 
                          className="transition-all duration-500 ease-out" style={{ transitionProperty: 'x1, x2, y1, y2' }}
                        />

                        {/* Line */}
                        <path 
                          ref={pathRef}
                          d="M0,60 C15,40 20,38 25,38 C35,38 40,48 45,48 C55,48 60,38 70,38 C80,38 85,45 90,45 C95,45 98,30 100,30 C105,30 110,45 115,45 C125,45 140,20 150,20 C160,20 165,45 175,45 C185,45 190,65 200,65"
                          fill="none"
                          stroke="#0ea5e9"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Point */}
                        <circle 
                          ref={circleRef}
                          cx={activeMonthData.x} cy={activeMonthData.y} r="4.5" 
                          fill="#1A1A22" 
                          className="stroke-[#0ea5e9] transition-all duration-500 ease-out" style={{ transitionProperty: 'cx, cy' }}
                          strokeWidth="3"
                        />
                        {/* Inner small point for extra realism */}
                        <circle 
                          cx={activeMonthData.x} cy={activeMonthData.y} r="1.5" 
                          fill="white" 
                          className="transition-all duration-500 ease-out" style={{ transitionProperty: 'cx, cy' }}
                        />
                      </svg>
                    </div>

                    <div className="absolute left-6 right-6 bottom-4 flex justify-between items-center z-10 px-2 cursor-pointer">
                      {monthData.map((m, idx) => (
                        <span 
                          key={m.name}
                          onClick={() => setActiveMonth(idx)}
                          className={`text-[13px] font-medium text-center transition-all duration-300 py-[6px] rounded-full
                            ${activeMonth === idx 
                              ? "bg-[#0ea5e9] text-white shadow-[0_4px_16px_rgba(14,165,233,0.35)] min-w-[76px] px-4" 
                              : "text-[#6C6B71] w-[48px] hover:text-white"
                            }`}
                        >
                          {m.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 text-right flex flex-col items-end" dir="rtl">
                      <h4 className="text-[22px] font-bold text-white mb-3">إحصائيات خاصة بكل عميل</h4>
                      <p className="text-[#8E8D93] text-[15px] leading-[1.8] max-w-[95%]">
                        تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته
                      </p>
                  </div>
                </div>
              </FeatureCardWrapper>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  )
}

const FeatureCardWrapper = ({ children }: { children: React.ReactNode }) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  )
}

