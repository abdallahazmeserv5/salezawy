import { Geist_Mono, Inter, Poppins, Almarai } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { DirectionProvider } from "@/components/ui/direction"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Saleszawy/Navbar"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-almarai",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        poppins.variable,
        almarai.variable
      )}
    >
      <body>
        <ThemeProvider>
          <DirectionProvider dir="rtl">
            <Navbar />
            {children}
            <Footer />
          </DirectionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
