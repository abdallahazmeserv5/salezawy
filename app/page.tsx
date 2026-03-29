import { DashboardSection } from "@/components/Saleszawy/DashboardSection"
import { ExtendedFeatures } from "@/components/Saleszawy/ExtendedFeatures"
import { FAQSection } from "@/components/Saleszawy/FAQSection"
import { Hero } from "@/components/Saleszawy/Hero"
import { PlanSection } from "@/components/Saleszawy/PlanSection"
import { SmartFeatures } from "@/components/Saleszawy/SmartFeatures"
import { SocialProof } from "@/components/Saleszawy/SocialProof"
import { Testimonials } from "@/components/Saleszawy/Testimonials"

export default function Page() {
  return (
    <main className="min-h-screen scroll-smooth bg-sales-bg selection:bg-sales-accent/30">
      <div id="hero"><Hero /></div>
      <div id="social-proof"><SocialProof /></div>
      <div id="features"><ExtendedFeatures /></div>
      <div id="dashboard"><DashboardSection /></div>
      <div id="smart-features"><SmartFeatures /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="plans"><PlanSection /></div>
      <div id="faq"><FAQSection /></div>
    </main>
  )
}
