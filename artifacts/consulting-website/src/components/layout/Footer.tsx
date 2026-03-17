import { Link } from "wouter"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="text-lg font-bold tracking-tighter text-foreground block mb-2">
            [Name]
          </Link>
          <p className="text-sm text-muted-foreground">
            Strategic Thinker. Operator. Aspiring Consultant.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="mailto:hello@example.com" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Email
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground text-center md:text-right">
          © {currentYear} [Name]. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
