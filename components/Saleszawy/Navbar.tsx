"use client"

import React, { useRef } from "react"
import Link from "next/link"

import { Search, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Logo } from "@/components/Saleszawy/Logo"

const navLinks = [
  { name: "الرئيسية", href: "#hero", active: true },
  { name: "شركاؤنا", href: "#social-proof" },
  { name: "المميزات", href: "#features" },
  { name: "لوحة القيادة", href: "#dashboard" },
  { name: "مميزات ذكية", href: "#smart-features" },
  { name: "عملائنا", href: "#testimonials" },
  { name: "الأسعار", href: "#plans" },
  { name: "الأسئلة", href: "#faq" },
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
      className="fixed top-[20px] left-1/2 z-50 container mx-auto w-[calc(100%-32px)] xl:w-full -translate-x-1/2 overflow-hidden rounded-[24px] 2xl:rounded-t-[24px] 2xl:rounded-b-none bg-[#18181B]/80 backdrop-blur-md 2xl:bg-transparent 2xl:backdrop-blur-none 2xl:bg-[url('/images/header-image.png')] bg-cover bg-center bg-no-repeat px-4 font-almarai selection:bg-sales-accent/30 border border-white/5 2xl:border-none"
    >
      <Container className="flex min-h-[96px] items-center justify-between py-[16px]">
        {/* Logo Section (Far Right in RTL) */}
        <Logo />

        {/* Navigation Links (Center) */}
        <ul className="hidden items-center gap-[12px] xl:gap-[24px] xl:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-[6px] text-[14px] xl:text-[15px] transition-all duration-300 hover:text-white",
                  link.active
                    ? "font-bold text-white"
                    : "font-normal text-[#A1A1AA]"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions: Search & Register (Left) */}
        <div className="flex items-center gap-[16px]">
          <div className="relative hidden xl:block">
            <input
              type="text"
              placeholder="بحث ذكي..."
              className="h-[40px] w-[240px] rounded-[10px] border border-white/5 bg-[#18181B]/60 pr-[40px] pl-[16px] text-[13px] text-white backdrop-blur-md transition-all duration-300 placeholder:text-white/40 focus:border-white/20 focus:bg-[#18181B]/80 focus:outline-none"
            />
            <Search className="absolute top-1/2 right-[12px] h-[16px] w-[16px] -translate-y-1/2 text-white/50" />
          </div>

          <button className="hidden sm:flex h-[40px] items-center justify-center rounded-[10px] border border-white/10 bg-transparent px-[24px] text-[14px] font-medium text-white transition-all duration-300 hover:bg-white/5">
            تسجيل
          </button>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="xl:hidden flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-white/10 bg-transparent text-white transition-all duration-300 hover:bg-white/5">
                <Menu className="h-[20px] w-[20px]" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] border-white/10 bg-[#09090B] font-almarai sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Logo />
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <SheetTrigger asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            "block rounded-md px-4 py-3 text-[16px] transition-all duration-300 hover:bg-white/5 hover:text-white",
                            link.active
                              ? "font-bold text-white bg-white/5"
                              : "font-normal text-[#A1A1AA]"
                          )}
                        >
                          {link.name}
                        </Link>
                      </SheetTrigger>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                  <button className="flex h-[40px] w-full items-center justify-center rounded-[10px] border border-white/10 bg-transparent px-[24px] text-[14px] font-medium text-white transition-all duration-300 hover:bg-white/5">
                    تسجيل
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  )
}
