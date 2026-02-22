const features = [
  {
    num: "01",
    title: "Fully custom workflows",
    desc: "Give an AI worker instructions and access to the systems and tools needed to accomplish its goal.",
  },
  {
    num: "02",
    title: "Integration into any system",
    desc: "Leverage a native integration or connect to any system via API, webhook, or AI browser agents.",
  },
  {
    num: "03",
    title: "Highly skilled execution across all channels",
    desc: "Whether it's engaging in conversation, parsing a document, or applying advanced reasoning, AI workers get the job done.",
  },
  {
    num: "04",
    title: "Escalation & collaboration",
    desc: "Keeping stakeholders looped in with smart alerts and hand-offs - never drop the ball again.",
  },
  {
    num: "05",
    title: "Extraction & analysis of data",
    desc: "Every piece of information is extracted on every task - powering insight & efficiency across the organization.",
  },
];

export default function FeatureListSection() {
  return (
    <section className="w-full px-12 py-[60px] bg-[var(--color-bg-warm)] font-dm-sans">
      <div className="flex flex-col w-[500px]">
        {features.map((f, i) => (
          <div
            key={f.num}
            className={`flex items-center justify-between py-5 border-t border-[var(--color-border)] ${
              i === features.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="flex flex-col gap-2 max-w-[420px]">
              <p className="text-base font-semibold text-[var(--color-dark)]">{f.title}</p>
              <p className="text-sm text-[var(--color-muted)] leading-[1.5]">{f.desc}</p>
            </div>
            <span className="text-sm font-medium text-[var(--color-muted-light)] shrink-0 ml-4">
              {f.num}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
