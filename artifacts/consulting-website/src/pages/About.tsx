import { FadeIn } from "@/components/animations/FadeIn"

export default function About() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: text */}
      <div className="px-8 pt-36 pb-20 max-w-3xl">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-12">About</p>
          <p className="text-2xl sm:text-3xl font-light text-foreground leading-relaxed mb-16">
            The most important thing I have learned is how to make someone feel like they belong.
          </p>
        </FadeIn>

        <div className="space-y-16 text-base text-muted-foreground leading-loose">
          <FadeIn delay={0.1}>
            <p>
              I grew up at the crossroads of many different worlds. A faith minority in a diverse community, a rock climber who also spent afternoons tutoring kids in downtown Boston, a kid who made a point of sitting with the people nobody else knew how to talk to. I learned that the walls between people are often thinner than they appear, and that crossing them looks like more than just being polite. That became who I am. Not intentionally. Just by living. Bridges don't build themselves.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              The thread continued everywhere I went. A year at BYU Hawaii, learning to spearfish and living alongside students from seventy countries. A couple of months of traveling through unfamiliar cities, sleeping on couches, befriending strangers, taking buses to explore the vast unknown. Two years in Finland, knocking on doors through cold dark winters, learning the language, connecting with strangers, and coming to love the people I served. An upcoming service trip to Romania, leading 20 youth in working with refugee and Roma communities. Each chapter was different, but the instinct was the same. Walk toward what's unfamiliar. Figure out what connects. Unfamiliar ground has always been my best classroom.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p>
              I started college thinking I wanted to work in data analytics. Turns out what I actually love is not just the data, but the layer beyond: the frameworks, the strategy, the presenting, the building of ideas. The technical and the strategic both feel like home. I switched to business, found my way to case competitions, and something clicked into place. The bridge building, the language learning, the years of crossing into worlds that weren't mine. It was all pointing somewhere. I'm starting to see where.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p>
              Strategy | Leadership | Systems | AI Integration
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
