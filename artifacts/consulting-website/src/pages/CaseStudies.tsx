import { FadeIn } from "@/components/animations/FadeIn"

const cases = [
  {
    title: "Growth Strategy for a Regional Pest Control Company",
    problem: "Stagnant revenue growth, over-reliance on door-to-door sales.",
    approach: "Market segmentation, competitive analysis, digital channel assessment.",
    insights: "Untapped commercial segment, weak digital presence, strong local brand equity.",
    recommendation: "Expand into commercial accounts, invest in SEO/digital marketing, formalize referral program.",
  },
  {
    title: "Scaling a Service-Based Startup Through Digital Channels",
    problem: "Service-based startup struggling to scale beyond local referrals.",
    approach: "Customer journey mapping, funnel analysis, channel benchmarking.",
    insights: "High CAC from referrals alone, strong conversion once leads arrive, missed content marketing opportunities.",
    recommendation: "Launch targeted digital ad campaigns, build content strategy, implement CRM for lead nurturing.",
  },
  {
    title: "Improving Operational Performance in a Team-Based Organization",
    problem: "Declining team performance and inconsistent output quality.",
    approach: "Root cause analysis, individual performance reviews, process mapping.",
    insights: "Unclear expectations, lack of structured feedback loops, low morale from recognition gaps.",
    recommendation: "Implement weekly 1:1s, create performance scorecards, build structured recognition program.",
  },
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen px-8 pt-36 pb-20">
      <FadeIn>
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-16">Projects</p>
      </FadeIn>
      <div className="max-w-3xl space-y-24">
        {cases.map((study, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Case {String(idx + 1).padStart(2, "0")}</p>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-10 leading-snug">
                {study.title}
              </h2>

              <div className="space-y-8">
                {[
                  { label: "Problem", content: study.problem },
                  { label: "Approach", content: study.approach },
                  { label: "Insights", content: study.insights },
                  { label: "Recommendation", content: study.recommendation },
                ].map(({ label, content }) => (
                  <div key={label} className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-8">
                    <p className="text-xs tracking-widest uppercase text-muted-foreground sm:pt-0.5">{label}</p>
                    <p className="sm:col-span-3 text-sm text-muted-foreground leading-relaxed">{content}</p>
                  </div>
                ))}
              </div>

              {idx < cases.length - 1 && (
                <div className="mt-16 border-t border-border/40" />
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
