import { FadeIn } from "@/components/animations/FadeIn"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn>
          <h1 className="text-4xl font-extrabold tracking-tighter text-foreground mb-6">About Me</h1>
        </FadeIn>

        <div className="prose prose-gray max-w-none text-muted-foreground">
          <FadeIn delay={0.1}>
            <p className="text-xl leading-relaxed text-foreground font-medium mb-10">
              I am a Strategic Management student at Brigham Young University with a passion for decoding complexity and driving meaningful organizational change.
            </p>
          </FadeIn>

          <div className="w-full h-px bg-border my-10" />

          <FadeIn delay={0.2} className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">The Background</h3>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p>
                My journey into strategy consulting didn't begin in a boardroom. It started with a fundamental interest in how people, processes, and incentives align to create outcomes. At BYU, the Strategic Management program has given me the rigorous frameworks to analyze markets and competitive dynamics.
              </p>
              <p>
                But theories are only as good as their execution. I've always biased toward action—whether that's analyzing real-world data as an undergraduate researcher or launching digital infrastructure for a boutique consulting firm.
              </p>
            </div>
          </FadeIn>

          <div className="w-full h-px bg-border/50 my-10" />

          <FadeIn delay={0.3} className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Leadership & People</h3>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p>
                Consulting is ultimately a relationship business. For two years, I served in a mission leadership role where I was responsible for leading and mentoring over 80 individuals. 
              </p>
              <p>
                That experience was a crucible for developing empathy, communication skills, and the ability to motivate a team through difficult challenges. I conducted extensive trainings, managed performance improvement initiatives, and learned how to connect with people from vastly different backgrounds to achieve a unified goal.
              </p>
            </div>
          </FadeIn>

          <div className="w-full h-px bg-border/50 my-10" />

          <FadeIn delay={0.4} className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">The Transition</h3>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p>
                Transitioning into business, I carried these leadership lessons into a Field Strategy & Sales Lead role. By recruiting, training, and managing a small sales team, I bridged the gap between strategic planning and on-the-ground execution. We didn't just hit targets—I personally generated $80K in 4 months and supported the team in driving $140K in total revenue.
              </p>
              <p>
                Today, my focus is purely on strategy consulting. I want to partner with leaders to solve their most ambiguous problems, relying on structured problem-solving, deep analysis, and a bias for execution.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
