import { FadeIn } from "@/components/animations/FadeIn"

const experiences = [
  {
    role: "Business Strategy Intern",
    company: "River Beacon Consulting",
    period: "Recent",
    bullets: [
      "Built and launched website and digital infrastructure",
      "Organized project workflows to support growth strategy execution",
      "Collaborated on client deliverables and strategic planning documents",
    ],
  },
  {
    role: "Field Strategy & Sales Lead",
    company: "Sales Organization",
    period: "Past",
    bullets: [
      "Generated $80K in personal revenue over four months",
      "Contributed to $140K in total team revenue",
      "Recruited, trained, and led a small sales team",
      "Conducted performance reviews and iterated on strategy",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Brigham Young University",
    period: "Past",
    bullets: [
      "Analyzed datasets to extract meaningful trends",
      "Contributed to research-backed strategy insights",
      "Synthesized complex data into clear reports",
    ],
  },
  {
    role: "Mission Leadership",
    company: "Volunteer Organization",
    period: "2 Years",
    bullets: [
      "Led and mentored 80+ individuals over two years",
      "Designed and conducted performance training programs",
      "Managed conflict resolution and individual development",
    ],
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen px-8 pt-36 pb-20">
      <FadeIn>
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-16">Experience</p>
      </FadeIn>

      <div className="max-w-3xl space-y-20">
        {experiences.map((exp, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-12">
              <div className="sm:col-span-1 pt-1">
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{exp.period}</p>
              </div>
              <div className="sm:col-span-3">
                <h3 className="text-lg font-semibold text-foreground mb-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-6">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                      — {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
