import { Link, useLocation } from "wouter"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { X, Menu } from "lucide-react"

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/case-studies", label: "Work" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [location] = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between bg-white/90 backdrop-blur-sm">
      <Link href="/" className="hover:opacity-70 transition-opacity">
        <svg width="36" height="36" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
          <rect width="180" height="180" fill="#ffffff"/>
          <rect x="4" y="4" width="172" height="172" fill="none" stroke="#111111" strokeWidth="8"/>
          <text x="90" y="127" fontSize="90" fontFamily="-apple-system,BlinkMacSystemFont,Inter,Arial,sans-serif" fill="#111111" textAnchor="middle" fontWeight="800" letterSpacing="-4">KR</text>
        </svg>
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm tracking-wide transition-opacity",
              location === link.href
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground hover:opacity-70"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        className="md:hidden text-foreground"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col gap-8 px-8 py-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-light text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
