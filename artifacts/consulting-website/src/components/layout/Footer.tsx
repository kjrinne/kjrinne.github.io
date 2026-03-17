export function Footer() {
  return (
    <footer className="px-8 py-8 flex items-center justify-between border-t border-border/40 mt-32">
      <span className="text-xs tracking-widest uppercase text-muted-foreground">
        © {new Date().getFullYear()} Kai Rinne
      </span>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
      >
        LinkedIn
      </a>
    </footer>
  )
}
