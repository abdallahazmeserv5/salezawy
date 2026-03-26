"use client"

import React from "react"
import { motion } from "framer-motion"
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

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
}

const progressVariants = (width: string) => ({
  hidden: { width: 0 },
  visible: { 
    width: width,
    transition: { duration: 1, ease: "easeInOut", delay: 0.5 }
  },
})

export function DashboardSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0D0D11] py-24 font-almarai rtl text-right">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-[60%] -translate-y-1/2 rounded-full bg-sales-purple/5 blur-[120px]" />
        <div className="absolute -top-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-sales-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:flex-row"
        >
          {/* Main Content Area (Now on the left/center in RTL) */}
          <div className="flex-1 space-y-6">
            {/* Header Area */}
            <motion.div variants={itemVariants} className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-xl font-bold text-white/50">لوحة التقارير التحليلية</h2>
                <h1 className="text-3xl font-extrabold text-white">مرحباً بعودتك!</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <input 
                    type="text" 
                    placeholder="بحث عن عميل..." 
                    className="w-full rounded-full border border-white/10 bg-white/5 py-2 pr-10 pl-4 text-sm text-white focus:border-sales-purple/50 focus:outline-none"
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
            </motion.div>

            {/* Dashboard Stats Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Customer Status Card */}
              <motion.div variants={itemVariants} className="rounded-[24px] border border-white/10 bg-[#16161D] p-6 shadow-2xl transition-all hover:border-white/20">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">حالة العملاء</h3>
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
              </motion.div>

              {/* Communication by Country */}
              <motion.div variants={itemVariants} className="rounded-[24px] border border-white/10 bg-[#16161D] p-6 shadow-2xl transition-all hover:border-white/20">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">التواصل حسب الدولة (%)</h3>
                  <Globe className="h-5 w-5 text-white/40" />
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
                        <motion.div 
                          variants={progressVariants(item.percentage)}
                          className="h-full rounded-full bg-[#00C2A7]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Activities */}
              <motion.div variants={itemVariants} className="rounded-[24px] border border-white/10 bg-[#16161D] p-6 shadow-2xl transition-all hover:border-white/20">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">الفواتير والصفقات</h3>
                  <CreditCard className="h-5 w-5 text-white/40" />
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
              </motion.div>
            </div>

            {/* Performance Table */}
            <motion.div variants={itemVariants} className="overflow-hidden rounded-[24px] border border-white/10 bg-[#16161D] shadow-2xl">
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
                      <motion.tr 
                        key={i} 
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                        className="text-sm text-white/80 transition-colors"
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
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: row.pct }}
                                  transition={{ duration: 0.8, delay: 0.8 + (i * 0.1) }}
                                  className="h-full rounded-full bg-sales-purple" 
                                />
                             </div>
                             <span className="text-xs">{row.pct}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-bold text-[#00C2A7]">{row.commission}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Area (Now on the right in RTL) */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-[280px]"
          >
            <div className="h-full space-y-8 rounded-[24px] border border-white/10 bg-[#16161D] p-6 shadow-2xl">
              {/* Brand Logo */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sales-purple">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-black text-white tracking-widest">SERV5</span>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <NavItem icon={<LayoutDashboard size={20} />} label="لوحات التحكم" active />
                <NavItem icon={<Users size={20} />} label="المبيعات والعملاء" hasSub />
                <NavItem icon={<MessageSquare size={20} />} label="المحادثات والرسائل" badge="١٢" />
                <NavItem icon={<Settings size={20} />} label="الإعدادات العامة" />
                <NavItem icon={<Globe size={20} />} label="التغطية والنشاط" />
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
                 <button className="w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    تطوير الخطة
                 </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function NavItem({ icon, label, active = false, hasSub = false, badge = null }: { 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean, 
  hasSub?: boolean,
  badge?: string 
}) {
  return (
    <div className={`
      group flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 transition-colors
      ${active ? 'bg-sales-purple text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}
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

function MoreVerticalIcon() {
  return (
    <div className="flex cursor-pointer flex-col gap-0.5 opacity-40 hover:opacity-100 transition-opacity">
      <div className="h-0.5 w-0.5 rounded-full bg-white" />
      <div className="h-0.5 w-0.5 rounded-full bg-white" />
      <div className="h-0.5 w-0.5 rounded-full bg-white" />
    </div>
  )
}
