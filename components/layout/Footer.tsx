"use client"

import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Logo } from "@/components/Saleszawy/Logo"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const footerLines = footerRef.current?.querySelectorAll(".footer-line")
    const footerLinks = footerRef.current?.querySelectorAll(".footer-link")

    if (footerLines) {
      gsap.from(footerLines, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      })
    }

    if (footerLinks) {
      gsap.from(footerLinks, {
        x: 10,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        delay: 0.4,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      })
    }
  }, { scope: footerRef })

  return (
    <footer ref={footerRef} className="font-almarai relative w-full overflow-hidden border-t border-white/5 bg-sales-bg pt-16 pb-8 md:pt-24 lg:pt-32">
      {/* Premium Background Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-full -translate-x-1/2 rounded-full bg-sales-purple/10 blur-[150px] opacity-20" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-sales-accent/10 blur-[150px] opacity-10" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand & Mission - 4 Columns */}
          <div className="footer-line lg:col-span-4">
            <div className="mb-6 flex items-center gap-3">
              <Logo />
            </div>
            <p className="max-w-[340px] text-[15px] leading-[1.8] text-white/50">
              المنصة الأذكى لإدارة مبيعاتك وعملائك في مكان واحد. نساعدك على النمو من خلال أتمتة المحادثات وتحويل الزوار إلى عملاء دائمين بأحدث تقنيات الذكاء الاصطناعي.
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                {
                  icon: () => (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  href: "#",
                },
              ].map((social, i) => (
                <MagneticButton key={i}>
                  <Link
                    href={social.href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all duration-300 hover:border-sales-purple/50 hover:bg-sales-purple/20 hover:text-sales-purple"
                  >
                    <social.icon size={18} />
                  </Link>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Navigation - 5 Columns */}
          <div className="footer-line grid grid-cols-2 gap-8 md:grid-cols-2 lg:col-span-5 lg:pl-12">
            <div>
              <h4 className="mb-6 text-[16px] font-bold tracking-wide text-white">روابط سريعة</h4>
              <ul className="flex flex-col gap-4">
                {["الرئيسية", "المميزات", "الأسعار", "شرح النظام", "المدونة"].map((text, i) => (
                  <li key={i} className="footer-link">
                    <Link href="#" className="group flex items-center gap-2 text-[14px] text-white/40 transition-colors duration-300 hover:text-white">
                      <span className="h-px w-0 bg-sales-purple transition-all duration-300 group-hover:w-3" />
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-[16px] font-bold tracking-wide text-white">الدعم والسياسات</h4>
              <ul className="flex flex-col gap-4">
                {["الشروط والأحكام", "سياسة الخصوصية", "اتفاقية الاستخدام", "التواصل معنا", "الأسئلة الشائعة"].map((text, i) => (
                  <li key={i} className="footer-link">
                    <Link href="#" className="group flex items-center gap-2 text-[14px] text-white/40 transition-colors duration-300 hover:text-white">
                      <span className="h-px w-0 bg-sales-purple transition-all duration-300 group-hover:w-3" />
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter - 3 Columns */}
          <div className="footer-line lg:col-span-3">
            <div className="rounded-[24px] border border-white/5 bg-white/2 p-6 backdrop-blur-xl">
              <h4 className="mb-3 text-[16px] font-bold text-white">النشرة البريدية</h4>
              <p className="mb-6 text-[13px] text-white/40 leading-relaxed">
                انضم إلى أكثر من 5000 علامة تجارية تثق بنا واحصل على آخر التحديثات.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition-all focus:border-sales-purple/50 focus:ring-1 focus:ring-sales-purple/20"
                />
                <MagneticButton className="w-full">
                  <button className="h-12 w-full rounded-xl bg-white text-[14px] font-bold text-black shadow-xl shadow-white/5 transition-all duration-300 hover:bg-white/90 active:scale-[0.98]">
                    إشتراك الآن
                  </button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent md:mt-24" />

        {/* Lower Bar */}
        <div className="flex flex-col-reverse items-center justify-between gap-6 py-8 md:flex-row">
          <p className="text-[12px] text-white/20">
            © 2026 تم التطوير بواسطة <span className="text-white/40">سيرف 5</span>. جميع الحقوق محفوظة لـ <span className="text-white/40 font-bold">سيلزاوي</span>
          </p>
          
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[12px] text-white/20 transition-colors duration-300 hover:text-white/60">English Version</Link>
            <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">System Status: Online</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
