import { FadeIn } from "@/components/animations/FadeIn"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Lock } from "lucide-react"

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn>
          <h1 className="text-4xl font-extrabold tracking-tighter text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground mb-16">
            Execution-focused initiatives and digital builds.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Active Project */}
          <FadeIn delay={0.1}>
            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge>Completed</Badge>
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl">River Beacon Consulting</CardTitle>
                <CardDescription className="mt-2">
                  Digital Infrastructure & Strategy Support
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Built the foundational digital presence and supported strategy execution for a boutique consulting project. Designed web infrastructure and organized comprehensive project workflows to ensure smooth delivery.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <Badge variant="secondary" className="text-[10px]">Web Infrastructure</Badge>
                  <Badge variant="secondary" className="text-[10px]">Operations</Badge>
                  <Badge variant="secondary" className="text-[10px]">Strategy Execution</Badge>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Placeholder 1 */}
          <FadeIn delay={0.2}>
            <Card className="h-full flex flex-col bg-secondary/30 border-dashed">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="bg-transparent text-muted-foreground border-muted-foreground/30">In Pipeline</Badge>
                  <Lock className="w-5 h-5 text-muted-foreground/50" />
                </div>
                <CardTitle className="text-xl text-muted-foreground">Market Entry Analysis</CardTitle>
                <CardDescription className="mt-2">
                  Consumer Tech Sector
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center flex-1 min-h-[150px]">
                <p className="text-sm font-medium text-muted-foreground/70 uppercase tracking-widest">Coming Soon</p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Placeholder 2 */}
          <FadeIn delay={0.3}>
            <Card className="h-full flex flex-col bg-secondary/30 border-dashed">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="bg-transparent text-muted-foreground border-muted-foreground/30">In Pipeline</Badge>
                  <Lock className="w-5 h-5 text-muted-foreground/50" />
                </div>
                <CardTitle className="text-xl text-muted-foreground">Pricing Strategy</CardTitle>
                <CardDescription className="mt-2">
                  B2B SaaS
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center flex-1 min-h-[150px]">
                <p className="text-sm font-medium text-muted-foreground/70 uppercase tracking-widest">Coming Soon</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
