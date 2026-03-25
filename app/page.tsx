import { Navbar } from "@/components/Saleszawy/Navbar"
import { Hero } from "@/components/Saleszawy/Hero"
import { SocialProof } from "@/components/Saleszawy/SocialProof"
import { DashboardSection } from "@/components/Saleszawy/DashboardSection"
import { FAQSection } from "@/components/Saleszawy/FAQSection"
import { Footer } from "@/components/Saleszawy/Footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-sales-bg selection:bg-sales-accent/30">
      <Navbar />
      <Hero />
      <SocialProof />
      <DashboardSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
