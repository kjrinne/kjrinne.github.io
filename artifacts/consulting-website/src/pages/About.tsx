import { FadeIn } from "@/components/animations/FadeIn"

export default function About() {
  return (
    <div className="min-h-screen px-8 pt-36 pb-20 max-w-3xl">
      <FadeIn>
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-12">About</p>
        <p className="text-2xl sm:text-3xl font-light text-foreground leading-relaxed mb-16">
          I'm a Strategic Management student at BYU who thinks like a consultant, leads like an operator, and connects like a human.
        </p>
      </FadeIn>

      <div className="space-y-16 text-base text-muted-foreground leading-loose">
        <FadeIn delay={0.1}>
          <p>
            My path into strategy didn't start in a classroom. For two years I led a team of 80+ people in a mission leadership role — conducting trainings, managing performance, and learning how to motivate people through difficult circumstances. That experience shaped how I approach every problem: with empathy first, then structure.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p>
            When I transitioned into business, I carried those lessons directly into the field. As a Sales Lead I recruited and managed a small team, generated $80K in personal revenue in four months, and contributed to $140K in total team output. Strategy isn't a slide deck — it's what happens when you're face to face with the customer.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p>
            At BYU's Strategic Management program I've layered frameworks and analytical rigor onto that operational foundation. I've worked as an undergraduate research assistant, supported a boutique consulting firm's digital infrastructure, and spent time studying how organizations grow, stall, and transform.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p>
            I'm drawn to the messiest problems — the ones where the answer isn't obvious and the path forward requires both clear thinking and genuine trust. That's where I do my best work.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
