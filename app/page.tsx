import { DashboardSection } from "@/components/Saleszawy/DashboardSection"
import { Footer } from "@/components/layout/Footer"
import { ExtendedFeatures } from "@/components/Saleszawy/ExtendedFeatures"
import { FAQSection } from "@/components/Saleszawy/FAQSection"
import { Hero } from "@/components/Saleszawy/Hero"
import { Navbar } from "@/components/Saleszawy/Navbar"
import { PlanSection } from "@/components/Saleszawy/PlanSection"
import { SmartFeatures } from "@/components/Saleszawy/SmartFeatures"
import { SocialProof } from "@/components/Saleszawy/SocialProof"
import { Testimonials } from "@/components/Saleszawy/Testimonials"

export default function Page() {
  return (
    <main className="min-h-screen scroll-smooth bg-sales-bg selection:bg-sales-accent/30">
      <Hero />
      <SocialProof />
      <ExtendedFeatures />
      <DashboardSection />
      <SmartFeatures />
      <Testimonials />
      <PlanSection />
      <FAQSection />
    </main>
  )
}
