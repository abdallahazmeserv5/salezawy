"use client"

import { useState, useRef, useEffect } from "react"
import { 
  Users, 
  Settings, 
  Bell, 
  Calendar, 
  Search, 
  ChevronDown, 
  LayoutDashboard, 
  MessageSquare, 
  Globe, 
  CreditCard,
  User
} from "lucide-react"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function DashboardSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mainContentRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const [activeTab, setActiveTab] = useState("dashboard")
  const [isLoading, setIsLoading] = useState(false)
  const [isSyncing, setIsSyncing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState("الآن")

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSyncing(true)
      setTimeout(() => {
        setIsSyncing(false)
        setLastUpdated("الآن")
      }, 2000)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return
    setIsLoading(true)
    setTimeout(() => {
      setActiveTab(tab)
      setIsLoading(false)
    }, 400)
  }

  useGSAP(() => {
    // Reset positions before animating
    const items = mainContentRef.current?.querySelectorAll('[data-gsap="item"]')
    if (items) {
      gsap.set(items, { clearProps: "all" })
    }

    // Main Content Stagger
    if (mainContentRef.current) {
      const items = mainContentRef.current.querySelectorAll('[data-gsap="item"]')
      gsap.set(items, { opacity: 0, y: 20 })
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top bottom-=100",
          once: true
        }
      })
    }

    // Sidebar Entry (only on mount)
    if (!containerRef.current?.dataset.mounted) {
      gsap.set(sidebarRef.current, { opacity: 0, y: 20 })
      gsap.to(sidebarRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out"
      })
      if (containerRef.current) containerRef.current.dataset.mounted = "true"
    }

    // Progress Bars Animation
    const progressBars = mainContentRef.current?.querySelectorAll('[data-gsap="progress"]')
    progressBars?.forEach((bar) => {
      const targetWidth = bar.getAttribute('data-width')
      gsap.fromTo(bar, 
        { width: 0 },
        { 
          width: targetWidth || 0,
          duration: 1.2,
          ease: "power2.inOut",
          delay: 0.2
        }
      )
    })
  }, { scope: containerRef, dependencies: [activeTab] })

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-[#0D0D11] py-16 font-almarai rtl text-right">
      {/* Mobile Bottom Navigation - Only visible on small screens */}
      <div className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t border-white/10 bg-[#16161D]/80 p-3 backdrop-blur-xl lg:hidden">
        <MobileNavItem icon={<LayoutDashboard size={20} />} active={activeTab === "dashboard"} onClick={() => handleTabChange("dashboard")} />
        <MobileNavItem icon={<Users size={20} />} active={activeTab === "sales"} onClick={() => handleTabChange("sales")} />
        <MobileNavItem icon={<MessageSquare size={20} />} active={activeTab === "messages"} onClick={() => handleTabChange("messages")} />
        <MobileNavItem icon={<Settings size={20} />} active={activeTab === "settings"} onClick={() => handleTabChange("settings")} />
      </div>
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-[60%] -translate-y-1/2 rounded-full bg-sales-purple/5 blur-[120px]" />
        <div className="absolute -top-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-sales-accent/5 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 lg:h-[800px] lg:flex-row">
          {/* Main Content Area (Now on the left/center in RTL) */}
          <div 
            ref={mainContentRef} 
            className="flex-1 space-y-6 lg:h-full lg:overflow-y-auto lg:pr-4 custom-scrollbar"
            style={{ 
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(147, 51, 234, 0.3) transparent'
            }}
          >
            {/* Header Area */}
            <div data-gsap="item" className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sales-accent opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sales-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white/50">
                    {activeTab === "dashboard" && "لوحة التقارير التحليلية"}
                    {activeTab === "sales" && "المبيعات والعملاء"}
                    {activeTab === "messages" && "المحادثات والرسائل"}
                    {activeTab === "settings" && "الإعدادات العامة"}
                    {activeTab === "tracking" && "التغطية والنشاط"}
                  </h2>
                  <h1 className="text-3xl font-extrabold text-white">
                    {activeTab === "dashboard" ? "مرحباً بعودتك!" : "إدارة النظام"}
                  </h1>
                  <p className="mt-1 text-xs text-white/30 flex items-center gap-2">
                    {isSyncing ? (
                      <span className="flex items-center gap-1 text-sales-accent">
                        <span className="h-2 w-2 animate-spin rounded-full border-2 border-sales-accent border-t-transparent" />
                        جاري المزامنة...
                      </span>
                    ) : (
                      `آخر تحديث: ${lastUpdated}`
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <input 
                    type="text" 
                    placeholder="بحث عن عميل..." 
                    className="w-full rounded-full border border-white/10 bg-white/5 py-2 pr-10 pl-4 text-sm text-white transition-all focus:border-sales-purple/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sales-purple/20"
                  />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-sales-accent" />
                </div>
              </div>
            </div>

            {/* Content Area */}
            {isLoading ? (
              <div className="flex min-h-[400px] items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-sales-purple border-t-transparent" />
              </div>
            ) : (
              <div className="space-y-6">
                {activeTab === "dashboard" ? (
                  <>
                    {/* Dashboard Stats Grid */}
                    <div className="grid gap-6 lg:grid-cols-3">
                      {/* Customer Status Card */}
                      <div data-gsap="item" className="group relative rounded-[24px] border border-white/10 bg-[#16161D] p-5 shadow-2xl transition-all duration-500 hover:border-sales-purple/50 hover:bg-[#1a1a24] hover:shadow-sales-purple/10">
                        <div className="absolute inset-0 rounded-[24px] bg-linear-to-br from-sales-purple/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative z-10 mb-6 flex items-center justify-between">
                          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-sales-purple">حالة العملاء</h3>
                          <MoreVerticalIcon />
                        </div>
                        <div className="space-y-4">
                          {[
                            { label: "Closed_won", count: 9, color: "bg-[#00C2A7]" },
                            { label: "Contacted", count: 46, color: "bg-sales-purple" },
                            { label: "New", count: 2033, color: "bg-white/20" },
                            { label: "Attempt to Contact", count: 12, color: "bg-sales-accent" },
                          ].map((status, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className={`h-2 w-2 rounded-full ${status.color}`} />
                                <span className="text-sm text-white/60">{status.label}</span>
                              </div>
                              <span className="text-sm font-bold text-white">{status.count}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8">
                           <div className="flex h-2 w-full overflow-hidden rounded-full bg-white/5">
                              <div className="h-full bg-[#00C2A7]" style={{ width: '15%' }} />
                              <div className="h-full bg-sales-purple" style={{ width: '35%' }} />
                              <div className="h-full bg-white/20" style={{ width: '40%' }} />
                              <div className="h-full bg-sales-accent" style={{ width: '10%' }} />
                           </div>
                        </div>
                      </div>

                      {/* Communication by Country */}
                      <div data-gsap="item" className="group relative rounded-[24px] border border-white/10 bg-[#16161D] p-5 shadow-2xl transition-all duration-500 hover:border-[#00C2A7]/50 hover:bg-[#161f1d] hover:shadow-[#00C2A7]/10">
                        <div className="absolute inset-0 rounded-[24px] bg-linear-to-br from-[#00C2A7]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative z-10 mb-6 flex items-center justify-between">
                          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#00C2A7]">التواصل حسب الدولة (%)</h3>
                          <Globe className="h-5 w-5 text-white/40 group-hover:text-[#00C2A7] transition-colors" />
                        </div>
                        <div className="space-y-6">
                          {[
                            { country: "Other", percentage: "90.91%", color: "#00C2A7" },
                            { country: "Jordan", percentage: "9.09%", color: "#00C2A7" },
                            { country: "Saudi Arabia", percentage: "0%", color: "#00C2A7" },
                          ].map((item, i) => (
                            <div key={i} className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-white/60">{item.country}</span>
                                <span className="font-bold text-white">{item.percentage}</span>
                              </div>
                              <div className="h-1.5 w-full rounded-full bg-white/5">
                                <div 
                                  data-gsap="progress"
                                  data-width={item.percentage}
                                  className="h-full rounded-full bg-[#00C2A7]"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recent Activities */}
                      <div data-gsap="item" className="group relative rounded-[24px] border border-white/10 bg-[#16161D] p-5 shadow-2xl transition-all duration-500 hover:border-sales-accent/50 hover:bg-[#1f1a16] hover:shadow-sales-accent/10">
                        <div className="absolute inset-0 rounded-[24px] bg-linear-to-br from-sales-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative z-10 mb-6 flex items-center justify-between">
                          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-sales-accent">الفواتير والصفقات</h3>
                          <CreditCard className="h-5 w-5 text-white/40 group-hover:text-sales-accent transition-colors" />
                        </div>
                        <div className="space-y-4">
                          {[
                            { user: "محمد العوضي", action: "صفقة جديدة مكتملة", time: "منذ دقيقتين", value: "+$1,200" },
                            { user: "AI Bot Sales", action: "تحديث حالة عميل", time: "منذ ساعة", value: null },
                            { user: "سارة محمود", action: "تم إصدار فاتورة", time: "منذ ٣ ساعات", value: "$450" },
                          ].map((activity, i) => (
                            <div key={i} className="group flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/60">
                                <User className="h-5 w-5" />
                              </div>
                              <div className="flex flex-1 flex-col overflow-hidden">
                                <span className="truncate text-sm font-bold text-white">{activity.user}</span>
                                <span className="truncate text-xs text-white/40">{activity.action}</span>
                              </div>
                              <div className="flex flex-col items-end whitespace-nowrap">
                                {activity.value && <span className="text-sm font-bold text-[#00C2A7]">{activity.value}</span>}
                                <span className="text-[10px] text-white/30">{activity.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Performance Table */}
                    <div data-gsap="item" className="overflow-hidden rounded-[24px] border border-white/10 bg-[#16161D] shadow-2xl">
                      <div className="border-b border-white/10 p-6">
                        <h3 className="text-lg font-bold text-white">أداء الموظفين والتغطية الدولية</h3>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-right">
                          <thead>
                            <tr className="border-b border-white/5 bg-white/5 text-sm text-white/40">
                              <th className="px-6 py-4 font-medium">اسم الموظف</th>
                              <th className="px-6 py-4 font-medium">عدد المكالمات</th>
                              <th className="px-6 py-4 font-medium">الدول النشطة</th>
                              <th className="px-6 py-4 font-medium">النسبة المئوية</th>
                              <th className="px-6 py-4 font-medium">العمولة المستحقة</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {[
                              { name: "محمد سيلز", calls: 154, country: "Jordan", pct: "75%", commission: "$1,200", status: "نشط" },
                              { name: "AI Sales Bot", calls: 890, country: "Global", pct: "98%", commission: "$0", status: "متصل" },
                              { name: "أحمد مبيعات", calls: 42, country: "Saudi Arabia", pct: "30%", commission: "$450", status: "خامل" },
                            ].map((row, i) => (
                              <tr 
                                key={i} 
                                className="text-sm text-white/80 transition-colors hover:bg-white-[0.02]"
                              >
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-lg bg-sales-purple/20 text-sales-purple flex items-center justify-center">
                                      <User className="h-4 w-4" />
                                    </div>
                                    <span className="font-bold">{row.name}</span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-white/60">{row.calls}</td>
                                <td className="px-6 py-4">
                                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs">{row.country}</span>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                     <div className="h-1.5 w-16 rounded-full bg-white/5">
                                        <div 
                                          data-gsap="progress"
                                          data-width={row.pct}
                                          className="h-full rounded-full bg-sales-purple" 
                                        />
                                     </div>
                                     <span className="text-xs">{row.pct}</span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-[#00C2A7]">{row.commission}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  <div data-gsap="item" className="flex min-h-[400px] flex-col items-center justify-center rounded-[24px] border border-dashed border-white/20 bg-white/5 p-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sales-purple/20 text-sales-purple">
                      <LayoutDashboard className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">قيد التطوير</h3>
                    <p className="mt-2 text-white/40">هذه الصفحة قيد التطوير حالياً في الإصدار التجريبي.</p>
                    <button 
                      onClick={() => setActiveTab("dashboard")}
                      className="mt-6 rounded-xl bg-sales-purple px-6 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
                    >
                      العودة للرئيسية
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

          {/* Sidebar Area (Now on the right in RTL) */}
          <div 
            ref={sidebarRef}
            className="hidden lg:block lg:w-[280px]"
          >
            <div className="sticky top-0 h-full space-y-8 rounded-[24px] border border-white/10 bg-[#16161D] p-6 shadow-2xl">
              {/* Brand Logo */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sales-purple">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-black text-white tracking-widest">SERV5</span>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <NavItem 
                  icon={<LayoutDashboard size={20} />} 
                  label="لوحات التحكم" 
                  active={activeTab === "dashboard"} 
                  onClick={() => handleTabChange("dashboard")}
                />
                <NavItem 
                  icon={<Users size={20} />} 
                  label="المبيعات والعملاء" 
                  hasSub 
                  active={activeTab === "sales"} 
                  onClick={() => handleTabChange("sales")}
                />
                <NavItem 
                  icon={<MessageSquare size={20} />} 
                  label="المحادثات والرسائل" 
                  badge="١٢" 
                  active={activeTab === "messages"} 
                  onClick={() => handleTabChange("messages")}
                />
                <NavItem 
                  icon={<Settings size={20} />} 
                  label="الإعدادات العامة" 
                  active={activeTab === "settings"} 
                  onClick={() => handleTabChange("settings")}
                />
                <NavItem 
                  icon={<Globe size={20} />} 
                  label="التغطية والنشاط" 
                  active={activeTab === "tracking"} 
                  onClick={() => handleTabChange("tracking")}
                />
              </nav>

              <div className="mt-12 space-y-4">
                 <div className="rounded-2xl bg-sales-purple/10 p-4 border border-sales-purple/20">
                    <p className="text-xs text-white/60 mb-2">استخدام النظام</p>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-white">٨٥٪ من السعة</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-sales-purple w-[85%]" />
                    </div>
                 </div>
                  <button 
                    onClick={() => handleTabChange("dashboard")}
                    className="w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    تطوير الخطة
                  </button>
              </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function NavItem({ icon, label, active = false, hasSub = false, badge = null, onClick }: { 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean, 
  hasSub?: boolean,
  badge?: string | null,
  onClick?: () => void
}) {
  return (
    <div 
      onClick={onClick}
      className={`
      group flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 transition-all duration-300
      ${active ? 'bg-sales-purple text-white shadow-lg shadow-sales-purple/20 scale-[1.02]' : 'text-white/40 hover:bg-white/5 hover:text-white'}
    `}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {badge && <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-sales-accent px-1 text-[10px] font-bold text-white">{badge}</span>}
        {hasSub && <ChevronDown size={14} className="opacity-40" />}
      </div>
    </div>
  )
}

function MobileNavItem({ icon, active, onClick }: { 
  icon: React.ReactNode, 
  active: boolean, 
  onClick: () => void 
}) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 p-2 transition-all ${active ? 'text-sales-purple scale-110' : 'text-white/40'}`}
    >
      {icon}
    </button>
  )
}

function MoreVerticalIcon() {
  return (
    <div className="flex cursor-pointer flex-col gap-0.5 opacity-40 hover:opacity-100 transition-opacity">
      <div className="h-0.5 w-0.5 rounded-full bg-white" />
      <div className="h-0.5 w-0.5 rounded-full bg-white" />
      <div className="h-0.5 w-0.5 rounded-full bg-white" />
    </div>
  )
}

