"use client"

import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer
      dir="rtl"
      className="font-cairo relative w-full overflow-hidden border-t border-white/[0.04] bg-[#050505]"
    >
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[1000px] -translate-x-1/2 rounded-full bg-[#C38CF5]/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C38CF5]/[0.02] blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1919px] px-[196px] py-[80px]">
        {/* Main Content Grid */}
        <div className="flex items-start justify-between gap-[60px]">
          {/* 1. Branding Section (Far Right in RTL) */}
          <div className="flex max-w-[360px] flex-col items-end">
            <div className="mb-[28px] flex items-center gap-[15px]">
              <div className="flex flex-col items-end">
                <span className="font-josefin text-[26px] leading-tight font-bold tracking-tight text-white">
                  Saleszawy
                </span>
                <span className="text-[14px] leading-none font-light text-white/40">
                  سيلزاوي
                </span>
              </div>
              <div className="flex h-[50px] w-[50px] rotate-3 transform items-center justify-center rounded-[14px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <svg
                  width="28"
                  height="28"
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
            <p className="mb-[32px] text-right text-[14.5px] leading-[24px] font-light text-[#A7B2C9] opacity-70">
              المنصة الأذكى لإدارة مبيعاتك وعملائك في مكان واحد. نساعدك على
              النمو من خلال أتمتة المحادثات وتحويل الزوار إلى عملاء دائمين.
            </p>
          </div>

          {/* 2. Navigation Columns */}
          <div className="flex items-start gap-[100px]">
            {/* Quick Links */}
            <div className="flex min-w-[120px] flex-col items-end">
              <h4 className="mb-[24px] text-[15px] font-bold tracking-wide text-white">
                روابط سريعة
              </h4>
              <ul className="flex flex-col items-end gap-[14px]">
                {["الرئيسية", "المميزات", "الأسعار", "شرح النظام"].map(
                  (text, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="text-[14px] font-light text-[#A7B2C9] transition-all duration-300 hover:text-[#C38CF5]"
                      >
                        {text}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Support */}
            <div className="flex min-w-[120px] flex-col items-end">
              <h4 className="mb-[24px] text-[15px] font-bold tracking-wide text-white">
                مركز الدعم
              </h4>
              <ul className="flex flex-col items-end gap-[14px]">
                {[
                  "مركز المساعدة",
                  "الأسئلة الشائعة",
                  "تواصل معنا",
                  "المدونة",
                ].map((text, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="text-[14px] font-light text-[#A7B2C9] transition-all duration-300 hover:text-[#C38CF5]"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex min-w-[120px] flex-col items-end">
              <h4 className="mb-[24px] text-[15px] font-bold tracking-wide text-white">
                سياساتنا
              </h4>
              <ul className="flex flex-col items-end gap-[14px]">
                {["الشروط والأحكام", "سياسة الخصوصية", "اتفاقية الاستخدام"].map(
                  (text, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="text-[14px] font-light text-[#A7B2C9] transition-all duration-300 hover:text-[#C38CF5]"
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
          <div className="flex w-[320px] flex-col items-end">
            <h4 className="mb-[20px] text-[15px] font-bold tracking-wide text-white">
              النشرة البريدية
            </h4>
            <p className="mb-[20px] text-right text-[13px] text-[#A7B2C9]/60">
              انضم إلى أكثر من 5000 علامة تجارية تثق بنا.
            </p>
            <div className="group relative w-full">
              <div className="flex items-center rounded-[14px] border border-white/10 bg-white/[0.03] p-[5px] transition-all duration-300 group-focus-within:border-[#C38CF5]/50 group-focus-within:bg-white/[0.05]">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="h-[46px] w-full bg-transparent px-[15px] text-right text-[14px] text-white outline-none placeholder:text-white/20"
                />
                <button className="h-[46px] rounded-[11px] bg-[#C38CF5] px-[24px] text-[13px] font-bold whitespace-nowrap text-[#050505] shadow-lg transition-all duration-300 hover:bg-[#b070f0]">
                  إشتراك
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Secondary Bar */}
        <div className="mt-[80px] flex items-center justify-between border-t border-white/[0.05] pt-[35px]">
          {/* Social Links (Right aligned in RTL) */}
          <div className="flex items-center gap-[24px]">
            {[
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
              {
                icon: () => (
                  <svg
                    width="18"
                    height="18"
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
                <social.icon size={19} />
              </Link>
            ))}
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-[30px]">
            <Link
              href="#"
              className="text-[12px] text-[#A7B2C9]/40 transition-colors duration-300 hover:text-white"
            >
              حقوق الطبع
            </Link>
            <Link
              href="#"
              className="text-[12px] text-[#A7B2C9]/40 transition-colors duration-300 hover:text-white"
            >
              سياسة الموقع
            </Link>
          </div>

          {/* Copyright (Left aligned in RTL) */}
          <p className="text-[12px] font-light text-white/20">
            © 2026 تم التطوير بواسطة{" "}
            <span className="text-white/40">سيرف 5</span>. جميع الحقوق محفوظة لـ{" "}
            <span className="text-white/40">سيلزاوي</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
