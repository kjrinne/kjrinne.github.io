import { FadeIn } from "@/components/animations/FadeIn"

const projects = [
  {
    name: "River Beacon Consulting",
    type: "Digital Infrastructure & Strategy",
    status: "Completed",
    description:
      "Built the digital presence and supported strategy execution for a boutique consulting firm. Designed web infrastructure and organized project workflows to ensure smooth client delivery.",
  },
  {
    name: "Market Entry Analysis",
    type: "Consumer Tech Sector",
    status: "In pipeline",
    description: null,
  },
  {
    name: "Pricing Strategy",
    type: "B2B SaaS",
    status: "In pipeline",
    description: null,
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen px-8 pt-36 pb-20">
      <FadeIn>
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-16">Projects</p>
      </FadeIn>

      <div className="max-w-3xl space-y-12">
        {projects.map((project, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-12 py-8 border-t border-border/40">
              <div className="sm:col-span-1">
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{project.status}</p>
              </div>
              <div className="sm:col-span-3">
                <h3 className="text-base font-semibold text-foreground mb-1">{project.name}</h3>
                <p className="text-xs tracking-wide text-muted-foreground mb-4">{project.type}</p>
                {project.description ? (
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                ) : (
                  <p className="text-sm text-muted-foreground/40 italic">Coming soon</p>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
