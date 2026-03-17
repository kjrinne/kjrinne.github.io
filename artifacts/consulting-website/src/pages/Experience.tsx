import { FadeIn } from "@/components/animations/FadeIn"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    role: "Business Strategy Intern",
    company: "River Beacon Consulting",
    period: "Recent",
    skills: ["Strategy Execution", "Digital Infrastructure", "Project Management"],
    bullets: [
      "Built and launched website and comprehensive digital infrastructure to establish firm presence.",
      "Organized project workflows, standardizing processes to support growth strategy execution.",
      "Collaborated on client deliverables and strategic planning documents."
    ]
  },
  {
    role: "Field Strategy & Sales Lead",
    company: "Sales Organization",
    period: "Past",
    skills: ["Sales Leadership", "Recruiting", "Revenue Generation", "Performance Reviews"],
    bullets: [
      "Generated $80K in personal revenue over a focused 4-month period.",
      "Contributed to and drove $140K in total team revenue through strategic territory planning.",
      "Recruited, trained, and actively led a small, high-performing sales team.",
      "Conducted regular performance reviews and iterated on strategy to optimize conversion rates."
    ]
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Brigham Young University",
    period: "Past",
    skills: ["Data Analysis", "Research", "Strategic Insights"],
    bullets: [
      "Analyzed large datasets to extract meaningful trends and patterns.",
      "Contributed to research-backed strategy insights for academic publication and practical application.",
      "Synthesized complex qualitative and quantitative data into clear reports."
    ]
  },
  {
    role: "Mission Leadership Role",
    company: "Volunteer Organization",
    period: "2 Years",
    skills: ["Mentorship", "Training", "Team Management", "Public Speaking"],
    bullets: [
      "Led, managed, and mentored an organization of 80+ individuals over a two-year period.",
      "Designed and conducted widespread training programs focused on performance improvement and goal setting.",
      "Resolved conflicts and facilitated regular 1-on-1 strategy and wellness checks."
    ]
  }
]

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn>
          <h1 className="text-4xl font-extrabold tracking-tighter text-foreground mb-4">Experience</h1>
          <p className="text-lg text-muted-foreground mb-16">
            A track record of leadership, execution, and analytical problem-solving.
          </p>
        </FadeIn>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative pl-8 md:pl-0">
                {/* Timeline line for mobile */}
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-border" />
                <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />

                <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3 pt-1">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{exp.period}</p>
                  </div>
                  
                  <div className="md:col-span-9 bg-white border border-border rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-base font-medium text-muted-foreground mb-4">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-muted-foreground">
                          <span className="mr-3 text-primary mt-1.5 text-[10px]">■</span>
                          <span className="leading-relaxed text-sm sm:text-base">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
