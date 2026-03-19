import { FadeIn } from "@/components/animations/FadeIn"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-8 pt-16 pb-16">
      <div>
        <FadeIn>
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[9vw] font-bold tracking-tighter text-foreground leading-[0.9] mb-10">
            Kai<br />Rinne
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-sm font-light leading-relaxed">
            Strategic Management student at BYU.<br />
            Strategy, leadership, and execution.
          </p>
        </FadeIn>
      </div>

    </div>
  )
}
