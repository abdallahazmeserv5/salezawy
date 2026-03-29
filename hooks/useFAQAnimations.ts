import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useFAQAnimations() {
  const containerRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      // 1. Header Animation (Title and Description)
      if (headerRef.current) {
        const headerElements = headerRef.current.children
        gsap.fromTo(
          headerElements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // 2. FAQ List Container Animation
      if (listRef.current) {
        gsap.fromTo(
          listRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // 3. Staggered Initial Items Entry Animation
      if (itemsRef.current.length > 0) {
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }
    },
    { scope: containerRef }
  )

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el)
    }
  }

  return { containerRef, headerRef, listRef, addToRefs }
}
