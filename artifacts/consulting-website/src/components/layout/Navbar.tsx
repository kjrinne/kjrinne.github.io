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
      <Link href="/" className="text-sm font-medium tracking-widest uppercase text-foreground hover:opacity-50 transition-opacity">
        Kai Rinne
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
