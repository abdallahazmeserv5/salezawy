"use client"

import React from "react"
import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navLinks = [
  { name: "الرئيسية", href: "#", active: true },
  { name: "المميزات", href: "#" },
  { name: "خدماتنا", href: "#", hasDropdown: true },
  { name: "عملائنا", href: "#" },
  { name: "إتصل بنا", href: "#" },
]

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      dir="rtl"
      className="fixed top-[24px] left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1529px] h-[83px] glass-nav rounded-[28px] px-[50px] py-[15px] flex items-center justify-between font-almarai selection:bg-sales-accent/30"
    >
      {/* Logo Section (Far Right in RTL) */}
      <div className="flex items-center gap-[12px]">
        <div className="w-[40px] h-[40px] bg-sales-accent rounded-[12px] flex items-center justify-center shadow-lg shadow-sales-accent/20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4ZM12 20C9.33 20 7.01 18.67 5.6 16.63C5.64 14.5 9.87 13.33 12 13.33C14.13 13.33 18.36 14.5 18.4 16.63C16.99 18.67 14.67 20 12 20Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="flex flex-col items-start leading-[1.2]">
          <span className="text-white font-bold text-[22px] tracking-[-0.02em] font-poppins">Saleszawy</span>
          <span className="text-white/60 text-[12px] font-medium tracking-wide">سيلزاوي</span>
        </div>
      </div>

      {/* Navigation Links (Center) */}
      <ul className="hidden xl:flex items-center gap-[25px]">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                "text-[16px] font-medium transition-all duration-300 hover:text-sales-accent flex items-center gap-[6px]",
                link.active ? "text-sales-accent font-bold" : "text-white/70"
              )}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-[16px] h-[16px] opacity-40" />}
            </Link>
          </li>
        ))}
      </ul>

      {/* Actions: Search & Register (Left) */}
      <div className="flex items-center gap-[24px]">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="بحث ذكي..."
            dir="rtl"
            className="bg-white/[0.05] border border-white/10 rounded-full py-[10px] pr-[48px] pl-[20px] text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-sales-accent/50 focus:bg-white/[0.08] w-[240px] transition-all duration-300"
          />
          <Search className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-white/40" />
        </div>
        
        <button className="bg-transparent border border-white/20 text-white text-[15px] font-bold px-[32px] py-[10px] rounded-[12px] hover:bg-white hover:text-black hover:border-white transition-all duration-300">
          تسجيل
        </button>
      </div>
    </motion.nav>
  )
}
