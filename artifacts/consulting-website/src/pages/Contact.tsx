import { useState } from "react"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      })
      ;(e.target as HTMLFormElement).reset()
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6">
              Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Open to consulting opportunities, case competitions, and strategic conversations. Whether you have a specific problem to solve or just want to network, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:hello@example.com" className="text-sm">hello@example.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm">linkedin.com/in/username</a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="border-border shadow-md">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll respond as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="Jane Doe" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="jane@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="How can we work together?"
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send className="ml-2 w-4 h-4" /></>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>

        </div>
      </div>
    </div>
  )
}
