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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl glass-nav rounded-[28px] px-8 py-3 flex items-center justify-between font-almarai rtl"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-sales-accent rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">S</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-lg tracking-tight">Saleszawy</span>
          <span className="text-white/60 text-[10px] text-right">سيلزاوي</span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-sales-accent flex items-center gap-1",
                link.active ? "text-sales-accent" : "text-white/70"
              )}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          </li>
        ))}
      </ul>

      {/* Actions: Search & Register */}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="بحث ذكي..."
            className="bg-white/5 border border-white/10 rounded-full py-1.5 pr-10 pl-4 text-xs text-white focus:outline-none focus:border-sales-accent w-48 transition-all"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
        </div>
        
        <button className="bg-white text-black text-sm font-bold px-6 py-2 rounded-lg hover:bg-white/90 transition-colors">
          تسجيل
        </button>
      </div>
    </motion.nav>
  )
}
