"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, X, Instagram, Linkedin, Send } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative pt-24 pb-12 bg-sales-bg border-t border-white/5 font-almarai rtl text-right overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sales-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sales-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-2xl tracking-tight">Saleszawy</span>
                <span className="text-white/40 text-xs text-right">سيلزاوي</span>
              </div>
            </div>
            
            <p className="text-white/60 leading-relaxed text-lg max-w-sm">
              مساعد AI ذكي للمبيعات يتولى عميلك بشكل كامل ويمنحك تجربة أكثر مرونة وراحة لتحقيق أهدافك البيعية.
            </p>

            <div className="flex items-center gap-4">
              {[Facebook, X, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-sales-accent hover:border-sales-accent transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-xl">روابط هامة</h4>
            <ul className="space-y-4">
              {["العلامات التجارية", "شرح النظام", "المميزات", "أسئلة شائعة", "إتصل بنا"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-xl">الدعم</h4>
            <ul className="space-y-4">
              {["الشروط والأحكام", "سياسة الخصوصية", "مركز المساعدة", "خدماتنا"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-xl">إشترك في النشرة</h4>
            <p className="text-white/40 text-sm">كن أول من يعرف عن التحديثات والمميزات الجديدة.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني..."
                className="w-full bg-white/3 border border-white/10 rounded-2xl py-4 pr-12 pl-6 text-white focus:outline-none focus:border-sales-accent transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-sales-accent transition-colors">
                 <Send size={18} />
              </div>
              <button className="mt-4 w-full bg-sales-primary hover:opacity-90 text-white font-bold py-4 rounded-2xl transition-all">
                إشتراك الآن
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-sm">
            جميع الحقوق محفوظة @ سيلزاوي 2026. تم التطوير بواسطة سيرف 5
          </p>
          <div className="flex items-center gap-8">
            <Image 
                src="/images/saleszawy/openai-logo.svg" 
                alt="AI Powered" 
                width={80} 
                height={20} 
                className="opacity-20 grayscale brightness-200"
            />
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
