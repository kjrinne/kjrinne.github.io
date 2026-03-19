import { FadeIn } from "@/components/animations/FadeIn"

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: text */}
      <div className="flex flex-col justify-center px-8 lg:px-16 pt-32 pb-16">
        <FadeIn>
          <h1 className="text-[16vw] sm:text-[12vw] lg:text-[8vw] font-bold tracking-tighter text-foreground leading-[0.9] mb-10">
            Kai<br />Rinne
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-sm font-light leading-relaxed">
            Strategic Management student at BYU.<br />
            Strategy, leadership, and execution.
          </p>
        </FadeIn>
      </div>

      {/* Right: photo */}
      <div className="hidden lg:block relative h-screen sticky top-0">
        <img
          src={`${import.meta.env.BASE_URL}profile-photo.png`}
          alt="Kai Rinne"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    </div>
  )
}
