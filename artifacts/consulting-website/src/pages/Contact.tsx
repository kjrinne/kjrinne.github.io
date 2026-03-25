import { useState } from "react"
import { FadeIn } from "@/components/animations/FadeIn"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({ title: "Sent.", description: "I'll be in touch soon." })
      ;(e.target as HTMLFormElement).reset()
    }, 1000)
  }

  return (
    <div className="min-h-screen px-8 pt-36 pb-20 max-w-xl">
      <FadeIn>
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-12">Contact</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground leading-tight mb-6">
          Let's talk.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-16 font-light">
          Open to consulting opportunities, case competitions, and strategic conversations.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
              Name
            </label>
            <input
              id="name"
              required
              placeholder="Your name"
              className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="What's on your mind?"
              className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="text-sm tracking-widest uppercase text-foreground hover:opacity-50 transition-opacity disabled:opacity-30"
          >
            {isSubmitting ? "Sending..." : "Send →"}
          </button>
        </form>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-20 pt-10 border-t border-border/40 space-y-3">
          <a href="mailto:hello@kairinne.com" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
            hello@kairinne.com
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn ↗
          </a>
        </div>
      </FadeIn>
    </div>
  )
}
