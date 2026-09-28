import { FadeIn } from "@/components/animations/FadeIn"

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-8 lg:px-16 pt-32 pb-16">
      {/* Left: text */}
      <div className="flex flex-col justify-center">
        <FadeIn>
          <h1 className="text-[16vw] sm:text-[12vw] lg:text-[8vw] font-bold tracking-tighter text-foreground leading-[0.9] mb-10">
            Kai<br />Rinne
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-sm font-light leading-relaxed">
            Economics and Strategy at BYU<br />
            Strategy, leadership, and systems
          </p>
        </FadeIn>
      </div>

      {/* Right: photo */}
      <FadeIn delay={0.15}>
        <img
          src={`${import.meta.env.BASE_URL}kai-portrait.jpg`}
          alt="Kai Rinne"
          className="w-full max-w-md lg:ml-auto aspect-[4/5] object-cover object-top"
        />
      </FadeIn>
    </div>
  )
}
