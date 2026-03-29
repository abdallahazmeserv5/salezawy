import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-[12px]", className)}>
      <Image
        src="/images/salezawy.png"
        alt="Saleszawy Logo"
        width={157}
        height={54}
        className="rounded-[12px] object-contain"
      />
    </div>
  )
}
