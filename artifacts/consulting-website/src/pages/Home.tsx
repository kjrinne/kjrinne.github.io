import { Link } from "wouter"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Briefcase, Lightbulb } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center">
        <div className="absolute inset-0 -z-10 opacity-40">
          <img 
            src={`${import.meta.env.BASE_URL}images/abstract-hero.png`} 
            alt="Abstract Background" 
            className="w-full h-full object-cover object-right-top"
          />
        </div>
        
        <FadeIn className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-[1.1]">
            Strategic Thinker.<br />
            Operator.<br />
            Aspiring Consultant.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I break down complex problems, build structured solutions, and execute with discipline. BYU Strategic Management student with experience in strategy, sales leadership, and research.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/case-studies">
              <Button size="lg" className="w-full sm:w-auto text-base">
                View My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                Get in Touch
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* What I Do */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-12">What I Do</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle>Strategy & Problem Solving</CardTitle>
                <CardDescription className="mt-2">
                  Applying frameworks to untangle ambiguity and chart a clear path forward for businesses and organizations.
                </CardDescription>
              </CardHeader>
            </Card>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle>Leadership & Execution</CardTitle>
                <CardDescription className="mt-2">
                  Turning high-level strategy into ground-level action. Proven track record leading teams and driving revenue.
                </CardDescription>
              </CardHeader>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle>Data & Analysis</CardTitle>
                <CardDescription className="mt-2">
                  Leveraging quantitative and qualitative data to support research-backed insights and actionable recommendations.
                </CardDescription>
              </CardHeader>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <FadeIn>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Experience Highlights</h2>
            <Link href="/experience" className="hidden sm:flex text-sm font-medium text-primary items-center hover:underline">
              View full timeline <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
        
        <div className="space-y-6">
          {[
            {
              role: "Business Strategy Intern",
              company: "River Beacon Consulting",
              desc: "Built and launched digital infrastructure and organized project workflows to support growth strategy execution."
            },
            {
              role: "Field Strategy & Sales Lead",
              company: "Sales Organization",
              desc: "Generated $80K personal revenue in 4 months, recruited and led a small sales team contributing to $140K total revenue."
            },
            {
              role: "Mission Leadership",
              company: "Volunteer Organization",
              desc: "Led and mentored 80+ individuals over 2 years, conducting trainings and driving performance improvements."
            }
          ].map((exp, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="group border border-border/50 rounded-xl p-6 hover:border-border transition-colors bg-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground md:max-w-xl">{exp.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-6 sm:hidden">
          <Link href="/experience">
            <Button variant="outline" className="w-full">
              View full timeline
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border bg-secondary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Case Study</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Growth Strategy for a Regional Pest Control Company
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full"></div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">The Problem</h4>
                  <p className="text-sm text-muted-foreground">Stagnant revenue growth and over-reliance on door-to-door sales channels.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full"></div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">The Recommendation</h4>
                  <p className="text-sm text-muted-foreground">Expand into commercial accounts and invest in structured digital marketing.</p>
                </div>
              </div>
            </div>
            <Link href="/case-studies">
              <Button>
                Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative h-64 lg:h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg border border-border">
            {/* corporate business chart analyzing growth - abstract */}
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
              alt="Data analysis" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-medium text-sm tracking-widest uppercase mb-2 text-white/80">Strategy</p>
                <p className="text-xl font-bold">Unlocking Commercial Growth</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
