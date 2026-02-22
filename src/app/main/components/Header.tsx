export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-4 w-full font-dm-sans">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/main" className="font-dm-sans text-xl font-bold text-[var(--color-dark)] hover:opacity-80 transition-opacity">ConscienceAI</a>
      </div>

      {/* Nav */}
      <nav className="flex items-center gap-9">
        {[
          { label: "Product", href: "/main/product" },
          { label: "About", href: "https://theconscience.co/" },
          { label: "Careers", href: "/main/careers" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-[15px] font-medium text-[var(--color-muted)] hover:text-[var(--color-dark)] transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <div className="flex items-center">
        <a
          href="https://calendly.com/aditya-theconscience/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[var(--color-dark)] px-6 py-[10px] text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Book a demo
        </a>
      </div>
    </header>
  );
}
