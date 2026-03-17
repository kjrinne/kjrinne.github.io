import { FadeIn } from "@/components/animations/FadeIn"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cases = [
  {
    title: "Growth Strategy for a Regional Pest Control Company",
    problem: "Stagnant revenue growth, over-reliance on door-to-door sales.",
    approach: "Market segmentation, competitive analysis, digital channel assessment.",
    insights: "Untapped commercial segment, weak digital presence, strong local brand equity.",
    recommendation: "Expand into commercial accounts, invest in SEO/digital marketing, formalize referral program."
  },
  {
    title: "Scaling a Service-Based Startup Through Digital Channels",
    problem: "Service-based startup struggling to scale beyond local referrals.",
    approach: "Customer journey mapping, funnel analysis, channel benchmarking.",
    insights: "High CAC from referrals alone, strong conversion once leads arrive, missed opportunities in content marketing.",
    recommendation: "Launch targeted digital ad campaigns, build content strategy, implement CRM for lead nurturing."
  },
  {
    title: "Improving Operational Performance in a Team-Based Organization",
    problem: "Declining team performance and inconsistent output quality.",
    approach: "Root cause analysis, individual performance reviews, process mapping.",
    insights: "Unclear expectations, lack of structured feedback loops, low morale from recognition gaps.",
    recommendation: "Implement weekly 1:1s, create performance scorecards, build structured recognition program."
  }
]

export default function CaseStudies() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 relative">
      <div className="absolute top-0 left-0 w-full h-96 -z-10 opacity-30 pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}images/case-study-bg.png`} 
          alt="Topographic abstract background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn>
          <h1 className="text-4xl font-extrabold tracking-tighter text-foreground mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Simulated and real-world strategic frameworks applied to business and organizational challenges.
          </p>
        </FadeIn>

        <div className="space-y-16">
          {cases.map((study, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group border border-border bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-secondary/50 p-6 sm:p-8 border-b border-border">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">{study.title}</h2>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Case {idx + 1}</span>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">The Problem</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">The Approach</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.approach}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Key Insights</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.insights}</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Recommendation</h4>
                      <p className="text-sm font-medium text-foreground leading-relaxed">{study.recommendation}</p>
                    </div>
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
