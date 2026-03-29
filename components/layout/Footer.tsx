"use client"

import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"

export function Footer() {
  return (
    <footer
      className="font-cairo relative w-full overflow-hidden border-t border-white/[0.04] bg-[#050505]"
    >
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[1000px] -translate-x-1/2 rounded-full bg-[#C38CF5]/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C38CF5]/[0.02] blur-[150px]" />

      <Container className="relative z-10 py-8 md:py-12">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* 1. Branding Section (Far Right in RTL) */}
          <div className="flex w-full lg:max-w-[320px] flex-col items-center lg:items-end text-center lg:text-start">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex flex-col items-center lg:items-end">
                <span className="font-josefin text-xl lg:text-2xl leading-tight font-bold tracking-tight text-white">
                  Saleszawy
                </span>
                <span className="text-[10px] lg:text-xs leading-none font-light text-white/40">
                  سيلزاوي
                </span>
              </div>
              <div className="flex h-10 w-10 lg:h-12 lg:w-12 rotate-3 transform items-center justify-center rounded-xl bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#050505]"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
            </div>
            <p className="mb-6 text-[13px] lg:text-[14px] leading-relaxed font-light text-[#A7B2C9] opacity-70">
              المنصة الأذكى لإدارة مبيعاتك وعملائك في مكان واحد. نساعدك على
              النمو من خلال أتمتة المحادثات وتحويل الزوار إلى عملاء دائمين.
            </p>
          </div>

          {/* 2. Navigation Columns */}
          <div className="grid w-full grid-cols-2 lg:flex lg:w-auto lg:items-start gap-6 md:gap-8 lg:gap-20">
            {/* Quick Links */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-start">
              <h4 className="mb-4 text-[14px] font-bold tracking-wide text-white uppercase">
                روابط سريعة
              </h4>
              <ul className="flex flex-col items-center lg:items-end gap-2.5">
                {["الرئيسية", "المميزات", "الأسعار", "شرح النظام"].map(
                  (text, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="text-[13px] font-light text-[#A7B2C9] transition-all duration-300 hover:text-[#C38CF5]"
                      >
                        {text}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-start">
              <h4 className="mb-4 text-[14px] font-bold tracking-wide text-white uppercase">
                سياساتنا
              </h4>
              <ul className="flex flex-col items-center lg:items-end gap-2.5">
                {["الشروط والأحكام", "سياسة الخصوصية", "اتفاقية الاستخدام"].map(
                  (text, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="text-[13px] font-light text-[#A7B2C9] transition-all duration-300 hover:text-[#C38CF5]"
                      >
                        {text}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* 3. Newsletter Section (Far Left) */}
          <div className="flex w-full lg:w-[280px] flex-col items-center lg:items-end text-center lg:text-start">
            <h4 className="mb-4 text-[14px] font-bold tracking-wide text-white uppercase">
              النشرة البريدية
            </h4>
            <p className="mb-4 text-xs text-[#A7B2C9]/60">
              انضم إلى أكثر من 5000 علامة تجارية تثق بنا.
            </p>
            <div className="group relative w-full max-w-sm lg:max-w-none">
              <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.03] p-1 transition-all duration-300 group-focus-within:border-[#C38CF5]/50 group-focus-within:bg-white/[0.05]">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="h-10 w-full bg-transparent px-4 text-start text-xs text-white outline-none placeholder:text-white/20"
                />
                <button className="h-10 rounded-lg bg-[#C38CF5] px-5 text-[12px] font-bold whitespace-nowrap text-[#050505] shadow-lg transition-all duration-300 hover:bg-[#b070f0]">
                  إشتراك
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Secondary Bar */}
        <div className="mt-10 md:mt-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 border-t border-white/[0.05] pt-8">
          {/* Copyright */}
          <p className="text-[10px] font-light text-white/20 text-center lg:text-start">
            © 2026 تم التطوير بواسطة{" "}
            <span className="text-white/40">سيرف 5</span>. جميع الحقوق محفوظة لـ{" "}
            <span className="text-white/40">سيلزاوي</span>
          </p>

          {/* Center Links */}
          <div className="flex items-center gap-6 lg:gap-8">
            <Link
              href="#"
              className="text-[11px] text-[#A7B2C9]/40 transition-colors duration-300 hover:text-white"
            >
              حقوق الطبع
            </Link>
            <Link
              href="#"
              className="text-[11px] text-[#A7B2C9]/40 transition-colors duration-300 hover:text-white"
            >
              سياسة الموقع
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
              {
                icon: () => (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: "#",
              },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="text-white/30 transition-all duration-300 hover:text-white"
              >
                <social.icon size={17} />
              </Link>
            ))}
          </div>
        </div>
        </Container>
    </footer>
  )
}
