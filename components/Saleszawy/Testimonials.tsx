"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const reviews = [
  {
    text: "تمنح المستخدم تجربة أكثر مرونة وراحة. من خلال هذه الخاصية يمكن لكل مستخدم ضبط النظام أو التطبيق بما يتناسب مع احتياجاته",
    author: "سامي رضوان",
    role: "Ceo",
    avatar: "https://i.pravatar.cc/150?u=sami"
  },
  {
    text: "النظام متكامل وبسيط جداً في التعامل، ساعدنا كثير في تنظيم مبيعاتنا وزيادة سرعة الرد على العملاء",
    author: "أحمد علي",
    role: "Marketing Manager",
    avatar: "https://i.pravatar.cc/150?u=ahmed"
  },
  {
    text: "تجربة رائعة ودعم فني متميز، أنصح به لكل صاحب تجارة إلكترونية يريد التوسع",
    author: "ياسر محمود",
    role: "Founder",
    avatar: "https://i.pravatar.cc/150?u=yasser"
  }
]

export function Testimonials() {
  const [active, setActive] = React.useState(0)

  return (
    <section className="bg-sales-bg py-24 font-almarai rtl text-right relative overflow-hidden">
      <div className="w-[90%] max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card rounded-[40px] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 border border-white/10 bg-white/5 backdrop-blur-[30px]"
        >
          {/* Big Quotation Mark */}
          <div className="absolute top-10 right-10 text-[200px] leading-none text-white/5 font-serif select-none pointer-events-none">
            99
          </div>

          <div className="flex-1 relative z-10">
             <motion.p 
               key={active}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-10"
             >
               {reviews[active].text}
             </motion.p>
             
             <div>
                <h4 className="text-xl font-bold text-white">{reviews[active].author}</h4>
                <p className="text-white/40 text-sm italic">{reviews[active].role}</p>
             </div>
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            {reviews.map((rev, i) => (
              <button 
                key={i}
                onClick={() => setActive(i)}
                className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all p-0.5 ${active === i ? 'border-sales-accent scale-110' : 'border-transparent opacity-40 hover:opacity-100'}`}
              >
                <Image 
                  src={rev.avatar} 
                  alt={rev.author} 
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-xl"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
