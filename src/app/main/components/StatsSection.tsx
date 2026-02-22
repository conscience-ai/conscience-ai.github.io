const stats = [
  [
    {
      value: "100%",
      label: "Response rate",
      desc: "Stay on top of everything, all the time. Nothing slips through the cracks.",
    },
    {
      value: "0min",
      label: "First response time",
      desc: "Provide best-in-class customer service and beat the competition.",
    },
  ],
  [
    {
      value: "120x",
      label: "ROI",
      desc: "On $$$ generating tasks.",
    },
    {
      value: "10x",
      label: "Cost reduction",
      desc: "On manual overhead.",
    },
  ],
];

export default function StatsSection() {
  return (
    <section className="w-full flex gap-20 px-12 py-[100px] bg-[#FFFBF7] font-dm-sans">
      {/* Left */}
      <div className="flex flex-col gap-6 w-[450px] shrink-0">
        <div className="flex flex-col gap-0">
          <h2 className="font-fraunces text-[52px] font-semibold text-[var(--color-dark)] leading-[1.1] tracking-[-1px]">
            Redefining
          </h2>
          <h2 className="font-fraunces text-[52px] italic text-[var(--color-muted-light)] leading-[1.1] tracking-[-1px]">
            your velocity
          </h2>
          <h2 className="font-fraunces text-[52px] italic text-[var(--color-muted-light)] leading-[1.1] tracking-[-1px]">
            &amp; scale
          </h2>
        </div>
        <div>
          <a
            href="https://calendly.com/aditya-theconscience/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[var(--color-dark)] px-7 py-[14px] text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Book a demo
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col flex-1">
        {stats.map((row, ri) => (
          <div
            key={ri}
            className={`flex gap-10 border-t border-[var(--color-border)] ${ri === 0 ? "pb-10" : ""}`}
          >
            {row.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 flex-1 pt-6">
                <span className="font-fraunces text-[56px] font-semibold text-[var(--color-dark)] leading-none tracking-[-2px]">
                  {stat.value}
                </span>
                <span className="text-[15px] font-semibold text-[var(--color-dark)]">
                  {stat.label}
                </span>
                <p className="text-sm text-[var(--color-muted)] leading-[1.5] max-w-[280px]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
