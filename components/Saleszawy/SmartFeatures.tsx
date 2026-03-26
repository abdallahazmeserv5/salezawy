import React from "react"
import { Users, MessageSquare, Network, UserPlus, Server } from "lucide-react"

export const SmartFeatures = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 py-[60px] md:px-8 md:py-[80px]">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <h2 className="text-4xl font-extrabold text-white md:text-6xl">
          كيف يعمل <span className="text-sales-accent">النظام؟</span>
        </h2>
        <p className="text-xl text-white/60">
          مميزات متعددة في مكان واحد تمنحك التحكم الكامل في مبيعاتك
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Wide */}
        <div className="group relative col-span-1 flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#3A3A3A] to-[#1F1F1F] p-[32px] transition-all hover:border-white/20 md:col-span-2 lg:col-span-2">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-[50px] -right-[50px] h-[200px] w-[200px] rounded-full bg-white/5 blur-[60px]"></div>

          <div className="relative z-10 mb-[24px] flex flex-1 items-center justify-center">
            {/* Abstract Graphic */}
            <div className="relative flex h-[180px] w-full items-center justify-between px-[20px]">
              <div className="relative z-10 rounded-[16px] border border-white/10 bg-[#2A2A2A] p-[16px] shadow-lg">
                <div className="absolute inset-0 rounded-full bg-green-500/20 blur-[20px]"></div>
                <span className="text-[32px] font-bold text-white">AI</span>
              </div>

              {/* Connecting lines */}
              <div className="absolute inset-0 -z-0 flex items-center justify-center">
                <div className="h-[2px] w-[60%] bg-gradient-to-r from-transparent via-[#4A4A4A] to-transparent"></div>
                <div className="absolute h-[80px] w-[60%] translate-x-[20px] -translate-y-[40px] transform rounded-br-[16px] border-r-2 border-b-2 border-[#4A4A4A] opacity-30"></div>
                <div className="absolute h-[80px] w-[60%] translate-x-[20px] translate-y-[40px] transform rounded-tr-[16px] border-t-2 border-r-2 border-blue-500/30"></div>
              </div>

              <div className="z-10 flex flex-col gap-[20px]">
                <div className="rounded-[12px] border border-white/10 bg-[#2A2A2A] p-[12px] shadow-lg">
                  <Users className="h-[24px] w-[24px] text-white/80" />
                </div>
                <div className="rounded-[12px] border border-white/10 bg-[#2A2A2A] p-[12px] shadow-lg">
                  <MessageSquare className="h-[24px] w-[24px] text-white/80" />
                </div>
              </div>
            </div>
          </div>
          <h3 className="z-10 text-center text-[24px] leading-[1.3] font-semibold text-white/90">
            تحليل ذكي لمحادثات وبيانات العميل
          </h3>
        </div>

        {/* Card 2: Narrow */}
        <div className="group relative col-span-1 flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#3A3A3A] to-[#1F1F1F] p-[32px] transition-all hover:border-white/20">
          <div className="relative z-10 mb-[24px] flex w-full flex-1 flex-col items-center justify-center gap-[12px]">
            {/* Mock UI Form */}
            <div className="flex w-[80%] flex-col gap-[12px] rounded-[16px] border border-white/5 bg-[#222222] p-[16px] shadow-inner">
              <div
                className="flex w-full flex-col gap-[4px] text-left"
                dir="ltr"
              >
                <span className="text-[10px] text-white/50">Name</span>
                <div className="h-[24px] w-full rounded-[8px] border border-white/5 bg-[#1A1A1A]"></div>
              </div>
              <div
                className="flex w-full flex-col gap-[4px] text-left"
                dir="ltr"
              >
                <span className="text-[10px] text-white/50">Value</span>
                <div className="h-[24px] w-full rounded-[8px] border border-white/5 bg-[#1A1A1A]"></div>
              </div>
            </div>

            <div className="my-[8px] flex h-[24px] w-[24px] items-center justify-center rounded-full border border-white/10 bg-[#444] shadow-lg">
              <span className="text-[14px] text-white">+</span>
            </div>

            {/* Pills */}
            <div
              className="flex flex-wrap items-center justify-center gap-[8px]"
              dir="ltr"
            >
              <span className="rounded-full border border-white/10 bg-[#2A2A2A] px-[10px] py-[4px] text-[10px] text-white/70">
                Text
              </span>
              <span className="rounded-full border border-white/10 bg-[#2A2A2A] px-[10px] py-[4px] text-[10px] text-white/70">
                LLM
              </span>
              <span className="rounded-full border border-white/10 bg-[#2A2A2A] px-[10px] py-[4px] text-[10px] text-white/70">
                Web
              </span>
              <span className="rounded-full border border-white/10 bg-[#2A2A2A] px-[10px] py-[4px] text-[10px] text-white/70">
                HTTP
              </span>
            </div>
          </div>
          <h3 className="z-10 mt-auto text-center text-[18px] font-semibold text-white/90">
            بيانات كل عميل بين يديك
          </h3>
        </div>

        {/* Card 3: Narrow */}
        <div className="group relative col-span-1 flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#3A3A3A] to-[#1F1F1F] p-[32px] transition-all hover:border-white/20">
          <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-black/20 to-transparent"></div>
          <div className="relative z-10 mb-[24px] flex w-full flex-1 flex-col items-center justify-center">
            {/* Mock UI Card */}
            <div
              className="flex w-[90%] flex-col gap-[16px] rounded-[16px] border border-white/5 bg-[#1E1E1E] p-[20px] shadow-2xl"
              dir="ltr"
            >
              <div className="flex items-center gap-[12px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-indigo-500/20">
                  <Server className="h-[12px] w-[12px] text-indigo-400" />
                </div>
                <span className="text-[12px] font-medium text-white/80">
                  ELI5 Account
                </span>
              </div>
              <div className="h-[2px] w-full bg-white/5"></div>
              <p className="text-[10px] leading-[1.6] text-white/40">
                This is a sample data output which we can replace.
              </p>
              <div className="mt-[8px] grid grid-cols-2 gap-[8px]">
                <div className="flex items-center justify-center rounded-[8px] border border-red-500/20 bg-red-500/5 py-[8px]">
                  <span className="text-[10px] text-red-400">Delete</span>
                </div>
                <div className="flex items-center justify-center rounded-[8px] bg-white/5 py-[8px] transition-colors hover:bg-white/10">
                  <span className="text-[10px] text-white/80">Save</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="z-10 mt-auto text-center text-[18px] font-semibold text-white/90">
            إشعارات ذكية من الأداة
          </h3>
        </div>

        {/* Card 4: Narrow */}
        <div className="group relative col-span-1 flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#3A3A3A] to-[#1F1F1F] p-[32px] transition-all hover:border-white/20">
          <div className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="relative z-10 mb-[24px] flex flex-1 items-center justify-center">
            <div className="flex items-center rounded-[16px] border border-white/10 bg-[#2A2A2A] p-[4px]">
              <div className="border-r border-white/10 px-[20px] py-[16px]">
                <UserPlus className="h-[24px] w-[24px] text-white/50" />
              </div>
              <div className="px-[20px] py-[16px]">
                <span className="text-[18px] font-bold text-white">AI</span>
              </div>
            </div>
          </div>
          <h3 className="z-10 mt-auto text-center text-[18px] font-semibold text-white/90">
            بائع ذكي يغنيك عن فريق كامل
          </h3>
        </div>

        {/* Card 5: Narrow */}
        <div className="group relative col-span-1 flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#3A3A3A] to-[#1F1F1F] p-[32px] transition-all hover:border-white/20">
          {/* Background rays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

          <div className="relative z-10 mb-[24px] flex flex-1 flex-col items-center justify-center gap-[40px]">
            <div className="rounded-[12px] border border-white/10 bg-[#2A2A2A] px-[32px] py-[12px] shadow-lg">
              <Network className="h-[16px] w-[16px] text-white/40" />
            </div>

            {/* Center Connection */}
            <div className="relative flex w-full items-center justify-center">
              <div className="absolute inset-x-0 h-[1px] border-t border-dashed border-white/20"></div>
              <div className="z-10 rounded-full border border-white/10 bg-[#000] px-[24px] py-[8px] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
              </div>

              {/* Glowing Dot */}
              <div className="absolute top-1/2 left-[30%] h-[12px] w-[12px] -translate-y-1/2 rounded-full bg-blue-500 blur-[4px]"></div>
            </div>
          </div>
          <h3 className="z-10 mt-auto text-center text-[18px] font-semibold text-white/90">
            تنسيق كامل بين الشركة وعملائها
          </h3>
        </div>

        {/* Card 6: Wide */}
        <div className="group relative col-span-1 flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#3A3A3A] to-[#1F1F1F] p-[32px] transition-all hover:border-white/20 md:col-span-2 lg:col-span-2">
          <div className="absolute top-[80px] -right-[40px] h-[150px] w-[150px] rounded-full bg-pink-500/10 blur-[80px]"></div>

          <div className="relative z-10 mb-[24px] flex flex-1 items-center justify-center">
            {/* Envelope and Chat Visual */}
            <div className="relative mt-[40px] h-[200px] w-[300px]">
              {/* Back flap of envelope */}
              <div className="absolute inset-x-0 bottom-0 h-[120px] skew-x-12 transform rounded-t-[16px] border border-white/5 bg-[#222] opacity-40"></div>

              {/* Chat Bubbles */}
              <div
                className="absolute top-0 right-[10%] left-[20%] flex flex-col gap-[16px]"
                dir="ltr"
              >
                <div className="flex -rotate-2 transform items-center gap-[12px] self-end rounded-full border border-white/5 bg-[#1A1A1A] px-[24px] py-[12px] shadow-lg">
                  <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full border border-white/10 bg-[#333]">
                    <Users className="h-[10px] w-[10px] text-white/50" />
                  </div>
                  <div className="h-[6px] w-[80px] rounded-full bg-[#333]"></div>
                </div>

                <div className="mt-[8px] flex rotate-1 transform items-center gap-[12px] self-start rounded-full border border-white/5 bg-[#222222] px-[24px] py-[12px] shadow-lg">
                  <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full border border-green-500/30 bg-green-500/20">
                    <Users className="h-[10px] w-[10px] text-green-400" />
                  </div>
                  <div className="h-[6px] w-[100px] rounded-full bg-[#444]"></div>
                </div>

                <div className="mt-[8px] flex -rotate-1 transform items-center gap-[12px] self-end rounded-full border border-white/5 bg-[#1A1A1A] px-[24px] py-[12px] shadow-lg">
                  <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full border border-white/10 bg-[#333]">
                    <Users className="h-[10px] w-[10px] text-white/50" />
                  </div>
                  <div className="h-[6px] w-[60px] rounded-full bg-[#333]"></div>
                </div>
              </div>

              {/* Front flap of envelope */}
              <div className="absolute inset-x-0 bottom-0 h-[100px]">
                <div className="clip-path-polygon-[0_100%,50%_0,100%_100%] flex h-full w-full items-center justify-center rounded-[12px] rounded-b-none border-t border-t-white/10 bg-[#2A2A2A] shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
                  <div className="h-0 w-0 border-r-[150px] border-b-[100px] border-l-[150px] border-r-transparent border-b-[#1A1A1A] border-l-transparent"></div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="relative z-10 mt-auto text-center text-[24px] font-semibold text-white/90">
            إيميل خاص بتحديثات كل عميل
          </h3>
        </div>
      </div>
    </section>
  )
}
