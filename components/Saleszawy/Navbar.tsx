"use client"

import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const navLinks = [
  { name: "الرئيسية", href: "#", active: true },
  { name: "المميزات", href: "#" },
  { name: "خدماتنا", href: "#", hasDropdown: true },
  { name: "عملائنا", href: "#" },
  { name: "إتصل بنا", href: "#" },
]

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
    },
    { scope: navRef }
  )

  return (
    <nav
      ref={navRef}
      className="fixed top-[20px] left-1/2 z-50 -translate-x-1/2 overflow-hidden rounded-t-[24px] bg-[url('/images/header-image.png')] bg-cover bg-center bg-no-repeat font-almarai selection:bg-sales-accent/30"
    >
      <Container className="flex min-h-[96px] items-center justify-between py-[16px]">
        {/* Logo Section (Far Right in RTL) */}
        <div className="flex items-center gap-[12px]">
          <Image
            src="/images/salezawy.png"
            alt="Saleszawy Logo"
            width={157}
            height={54}
            className="rounded-[12px] object-contain"
          />
        </div>

        {/* Navigation Links (Center) */}
        <ul className="hidden items-center gap-[32px] xl:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-[6px] text-[15px] transition-all duration-300 hover:text-white",
                  link.active
                    ? "font-bold text-white"
                    : "font-normal text-[#A1A1AA]"
                )}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="h-[16px] w-[16px] opacity-70" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions: Search & Register (Left) */}
        <div className="flex items-center gap-[16px]">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="بحث ذكي..."
              className="h-[40px] w-[240px] rounded-[10px] border border-white/5 bg-[#18181B]/60 pr-[40px] pl-[16px] text-[13px] text-white backdrop-blur-md transition-all duration-300 placeholder:text-white/40 focus:border-white/20 focus:bg-[#18181B]/80 focus:outline-none"
            />
            <Search className="absolute top-1/2 right-[12px] h-[16px] w-[16px] -translate-y-1/2 text-white/50" />
          </div>

          <button className="flex h-[40px] items-center justify-center rounded-[10px] border border-white/10 bg-transparent px-[24px] text-[14px] font-medium text-white transition-all duration-300 hover:bg-white/5">
            تسجيل
          </button>
        </div>
      </Container>
    </nav>
  )
}
