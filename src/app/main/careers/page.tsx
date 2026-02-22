import Header from "../components/Header";
import Footer from "../components/Footer";

const departments = [
  { name: "Engineering", count: 0 },
  { name: "Product", count: 0 },
  { name: "Sales & Partnerships", count: 0 },
  { name: "Operations", count: 0 },
];

export default function CareersPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-bg-warm)] font-dm-sans">
      <Header />

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-12 py-24 gap-5">
        <p className="text-[13px] font-semibold text-[var(--color-muted)] tracking-[1px] uppercase">
          Careers at ConscienceAI
        </p>
        <h1 className="font-fraunces text-[56px] font-semibold text-[var(--color-dark)] leading-[1.1] tracking-[-1.5px] max-w-[700px]">
          We will be commencing hiring shortly
        </h1>
        <p className="text-base text-[var(--color-muted)] leading-[1.7] max-w-[560px]">
          We are building the intelligence layer for India&apos;s public sector. When we open
          roles, we will be looking for exceptional people who care deeply about national
          infrastructure, AI, and long-term impact.
        </p>
        <a
          href="https://calendly.com/aditya-theconscience/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--color-dark)] px-7 py-[14px] text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
      </section>

      {/* Dashboard */}
      <section className="px-12 pb-24">
        <div className="w-full rounded-[20px] border border-[var(--color-border)] bg-white overflow-hidden">

          {/* Table header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-[var(--color-border)]">
            <h2 className="font-fraunces text-xl font-semibold text-[var(--color-dark)]">Open Positions</h2>
            <span className="text-sm text-[var(--color-muted)]">Hiring opens soon</span>
          </div>

          {/* Department rows */}
          {departments.map((dept, i) => (
            <div
              key={dept.name}
              className={`flex items-center justify-between px-8 py-6 ${i !== departments.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-[var(--color-bg-warm)] flex items-center justify-center">
                  <span className="text-base">
                    {dept.name === "Engineering" && "⚙️"}
                    {dept.name === "Product" && "🧩"}
                    {dept.name === "Sales & Partnerships" && "🤝"}
                    {dept.name === "Operations" && "📋"}
                  </span>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[var(--color-dark)]">{dept.name}</p>
                  <p className="text-[13px] text-[var(--color-muted)]">No open roles yet</p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[var(--color-muted)]">
                Coming soon
              </span>
            </div>
          ))}

          {/* Empty state footer */}
          <div className="flex flex-col items-center gap-3 px-8 py-12 bg-[var(--color-bg-warm)] border-t border-[var(--color-border)]">
            <div className="w-12 h-12 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-xl">
              📬
            </div>
            <p className="text-[15px] font-semibold text-[var(--color-dark)]">Stay in the loop</p>
            <p className="text-sm text-[var(--color-muted)] max-w-[380px] text-center leading-[1.6]">
              We&apos;ll be announcing roles soon. Reach out if you&apos;re passionate about AI for India&apos;s public sector.
            </p>
            <a
              href="https://calendly.com/aditya-theconscience/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)] hover:bg-[var(--color-bg-warm)] transition-colors"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <div className="flex-1" />
      <Footer />
    </main>
  );
}
