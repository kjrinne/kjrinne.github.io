import { Link } from "wouter"
import { FadeIn } from "@/components/animations/FadeIn"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-8 pt-32 pb-16">
      <div className="flex-1 flex flex-col justify-center">
        <FadeIn>
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[9vw] font-bold tracking-tighter text-foreground leading-[0.9] mb-10">
            Kai<br />Rinne.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-sm font-light leading-relaxed">
            Strategic Management student at BYU.<br />
            Strategy, leadership, and execution.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.3}>
        <div className="flex gap-8 pt-16">
          <Link href="/about" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/case-studies" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Work
          </Link>
          <Link href="/contact" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}
