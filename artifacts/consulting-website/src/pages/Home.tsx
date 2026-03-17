import { Link } from "wouter"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            BYU Strategic Management · Aspiring Consultant
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground leading-[1.0] mb-8">
            Kai Rinne.
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-4 font-light">
            Strategic thinker. Operator. I break down complex problems, build structured solutions, and execute with discipline.
          </p>
          <div className="w-16 h-px bg-border my-10" />
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about">
              <Button size="lg" className="text-base px-8">
                My Story
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="text-base px-8">
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
