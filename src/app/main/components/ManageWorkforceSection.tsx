const manageCols = [
  [
    {
      icon: "💾",
      title: "Remove data silos",
      desc: "Access information from every system in one place and in natural language.",
    },
    {
      icon: "⚡",
      title: "Iterate on operating procedures",
      desc: "Implement new procedures or logic with no wait time, no training, and measure the results.",
    },
  ],
  [
    {
      icon: "🖥",
      title: "Deploy your workforce",
      desc: "Make decisions and deploy your AI workforce to execute with a simple command.",
    },
    {
      icon: "⊞",
      title: "View from the control tower",
      desc: "Integrate into your own UI or leverage ConscienceAI's tailored control tower view.",
    },
  ],
];

export default function ManageWorkforceSection() {
  return (
    <section className="w-full px-12 py-20 bg-[#FAF6F3] flex flex-col gap-16 font-dm-sans">
      <div className="flex gap-[60px] w-full">
        {/* Left */}
        <div className="flex flex-col gap-0 w-[460px] shrink-0">
          <p className="text-[13px] font-semibold text-[var(--color-muted)] tracking-[1px] uppercase mb-6">
            Manage Your Workforce
          </p>
          <h2 className="font-fraunces text-[52px] font-semibold text-[var(--color-dark)] leading-[1.1] tracking-[-1px]">
            Access information
          </h2>
          <h2 className="font-fraunces text-[52px] italic text-[var(--color-muted-light)] leading-[1.1] tracking-[-1px]">
            and deploy your
          </h2>
          <h2 className="font-fraunces text-[52px] italic text-[var(--color-muted-light)] leading-[1.1] tracking-[-1px]">
            AI team
          </h2>
        </div>

        {/* Right — feature icons */}
        <div className="flex gap-10 flex-1">
          {manageCols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-10 flex-1">
              {col.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-base font-semibold text-[var(--color-dark)]">{item.title}</p>
                  <p className="text-sm text-[var(--color-muted)] leading-[1.5] max-w-[280px]">{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
