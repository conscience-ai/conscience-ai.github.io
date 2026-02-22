export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-bg-warm)] font-dm-sans px-12 pb-12 pt-6">
      <div className="w-full bg-[var(--color-dark)] rounded-[24px] px-12 py-16 flex flex-col gap-12">
        {/* Top row */}
        <div className="flex items-start justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <a href="/main" className="font-dm-sans text-xl font-bold text-white hover:opacity-80 transition-opacity">ConscienceAI</a>
            </div>
            <p className="text-sm text-white/50 max-w-[280px] leading-[1.6]">
              The AI-native operating system that knows your business and acts in real time.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-[1px]">Company</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "About us", href: "https://theconscience.co/" },
                  { label: "Careers", href: "/main/careers" },
                  { label: "Contact us", href: "https://calendly.com/aditya-theconscience/30min" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-[1px]">Product</p>
              <div className="flex flex-col gap-3">
                {[{ label: "Product", href: "/main/product" }].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <p className="text-sm text-white/70">Ready to get started?</p>
            <a
              href="https://calendly.com/aditya-theconscience/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* Bottom row */}
        <div className="flex items-center">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} ConscienceAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
