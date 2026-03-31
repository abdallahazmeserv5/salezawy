"use client"

import React, { useRef } from "react"
import {
  Users,
  MessageSquare,
  Network,
  UserPlus,
  Server,
  Send,
  Slack,
  Github,
  Mail,
  Bell,
  Shield,
  Database,
  Layout,
  Command,
  Bot,
} from "lucide-react"
import { DirectionProvider } from "@/components/ui/direction"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const FeatureCard = ({
  children,
  title,
  className = "",
  variant = "standard",
  index = 0,
}: {
  children: React.ReactNode
  title: string
  className?: string
  variant?: "wide" | "standard"
  index?: number
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      })
    },
    { scope: cardRef }
  )

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/5 bg-[#080808] p-4 transition-all duration-700 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] md:p-8 ${variant === "wide" ? "md:col-span-2" : "col-span-1"} ${className}`}
    >
      {/* Decorative inner glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 mb-8 flex flex-1 items-center justify-center">
        {children}
      </div>

      <h3 className="relative z-10 text-center text-xl font-bold text-white/90 md:text-2xl">
        {title}
      </h3>
    </div>
  )
}

export const SmartFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#000000] py-6"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-purple-600/5 blur-[120px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-5 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-semibold text-blue-400"
          >
            نظام ذكي متكامل
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-2xl font-black tracking-tight text-white sm:text-3xl md:text-7xl"
          >
            كيف يعمل{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              النظام؟
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-lg text-white/50 md:text-xl"
          >
            مميزات متعددة في مكان واحد تمنحك التحكم الكامل في مبيعاتك من خلال
            أحدث تقنيات الأتمتة والذكاء الاصطناعي
          </motion.p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Card 1: Wide Left - AI Analysis */}
          <FeatureCard
            title="تحليل ذكي لمحادثات وبيانات العميل"
            variant="wide"
            className="min-h-[280px] md:min-h-[420px]"
            index={0}
          >
            <div className="relative flex h-full w-full items-center justify-center p-4">
              {/* Central Glowing AI Node */}
              <div className="relative z-20 flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/20 blur-2xl" />
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#121212] shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <Bot className="h-10 w-10 text-blue-400" />
                </div>
              </div>

              {/* Animated Connection Lines */}
              <svg
                className="absolute inset-0 h-full w-full opacity-30"
                viewBox="0 0 500 300"
              >
                <defs>
                  <linearGradient
                    id="pathGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M100,50 Q250,150 250,150"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <path
                  d="M400,50 Q250,150 250,150"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <path
                  d="M100,250 Q250,150 250,150"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <path
                  d="M400,250 Q250,150 250,150"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
              </svg>

              {/* Surrounding Nodes */}
              <div className="absolute top-10 left-20 flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/5">
                <Users className="h-5 w-5 text-white/40" />
              </div>
              <div className="absolute top-10 right-20 flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/5">
                <MessageSquare className="h-5 w-5 text-white/40" />
              </div>
              <div className="absolute bottom-10 left-20 flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/5">
                <Send className="h-5 w-5 text-white/40" />
              </div>
              <div className="absolute right-20 bottom-10 flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/5">
                <Mail className="h-5 w-5 text-white/40" />
              </div>
            </div>
          </FeatureCard>

          {/* Card 2: Database / Customer Info */}
          <FeatureCard
            title="بيانات كل عميل بين يديك"
            className="min-h-[280px] md:min-h-[420px]"
            index={1}
          >
            <div className="flex w-full flex-col gap-4 rounded-2xl border border-white/5 bg-[#0C0C0C] p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="h-3 w-20 rounded-full bg-white/10" />
                <Database className="h-4 w-4 text-blue-400" />
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-1.5 w-12 rounded-full bg-white/5" />
                  <div className="h-8 w-full rounded-lg border border-white/5 bg-white/5" />
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-8 rounded-full bg-white/5" />
                  <div className="h-8 w-full rounded-lg border border-white/5 bg-white/5" />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["LLM", "Web", "HTTP", "Save"].map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md px-2 py-1 text-[10px] font-bold ${tag === "Save" ? "bg-blue-500 text-white" : "border border-white/5 bg-white/5 text-white/40"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Card 3: Notifications - Hidden on Mobile */}
          <FeatureCard
            title="إشعارات ذكية من الأداة"
            className="hidden min-h-[420px] md:flex"
            index={2}
          >
            <div className="relative flex w-full flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 rounded-xl border border-white/5 bg-[#0C0C0C] p-4 transition-all duration-300 hover:border-blue-500/20 ${i === 2 ? "relative -right-4 border-blue-500/20 bg-blue-500/5" : ""}`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${i === 2 ? "bg-blue-500/20" : "bg-white/5"}`}
                  >
                    <Bell
                      className={`h-5 w-5 ${i === 2 ? "text-blue-400" : "text-white/20"}`}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-16 rounded-full bg-white/20" />
                    <div className="h-1.5 w-24 rounded-full bg-white/5" />
                  </div>
                </div>
              ))}
              <div className="absolute -right-2 -bottom-2 flex h-10 w-10 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <span className="text-sm font-black text-red-500">Del</span>
              </div>
            </div>
          </FeatureCard>

          {/* Card 4: AI Agent Profile */}
          <FeatureCard
            title="بائع ذكي يغنيك عن فريق كامل"
            className="min-h-[280px] md:min-h-[420px]"
            index={3}
          >
            <div className="relative flex items-center justify-center">
              <div className="animate-spin-slow h-32 w-32 rounded-full border border-dashed border-white/10" />
              <div className="absolute flex h-24 w-24 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#121212]">
                  <UserPlus className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 rounded-full border border-blue-500/30 bg-blue-500 px-3 py-1 text-[10px] font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                AI Agent
              </div>
            </div>
          </FeatureCard>

          {/* Card 5: Integrations Node - Hidden on Mobile */}
          <FeatureCard
            title="تنسيق كامل بين الشركة وعملائها"
            className="hidden min-h-[420px] md:flex"
            index={4}
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center gap-12">
                <div className="flex gap-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:bg-white/10">
                    <Slack className="h-6 w-6 text-white/50" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:bg-white/10">
                    <Layout className="h-6 w-6 text-white/50" />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    <Command className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Connection glow */}
              <div className="absolute top-1/2 left-1/2 h-px w-32 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>
          </FeatureCard>

          {/* Card 6: Wide Right - Clients Board - Hidden on Mobile */}
          <FeatureCard
            title="إيميل خاص بتحديثات كل عميل"
            variant="wide"
            className="hidden min-h-[420px] md:flex"
            index={5}
          >
            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/5 bg-[#0C0C0C] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                    <Mail className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="h-2 w-24 rounded-full bg-white/20" />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-white/10" />
                  <div className="h-2 w-2 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="space-y-3 p-4">
                {[1, 2, 3].map((row) => (
                  <div
                    key={row}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-transparent">
                      <Users className="h-5 w-5 text-white/20" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-1/3 rounded-full bg-white/20" />
                      <div className="h-1.5 w-full rounded-full bg-white/5" />
                    </div>
                    <div className="flex h-7 w-20 items-center justify-center rounded-md border border-white/10 bg-white/5">
                      <div className="h-1 w-10 rounded-full bg-white/10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FeatureCard>
        </div>
      </Container>

      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
