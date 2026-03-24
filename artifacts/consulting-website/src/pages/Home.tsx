import { FadeIn } from "@/components/animations/FadeIn"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      {/* Left: text */}
      <div className="flex flex-col justify-center px-8 lg:px-16 pt-32 pb-16">
        <FadeIn>
          <h1 className="text-[16vw] sm:text-[12vw] lg:text-[8vw] font-bold tracking-tighter text-foreground leading-[0.9] mb-10">
            Kai<br />Rinne
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-sm font-light leading-relaxed">
                        Pre-Business at BYU<br />
                        Strategy, leadership, and systems
          </p>
        </FadeIn>
      </div>

  )
}
