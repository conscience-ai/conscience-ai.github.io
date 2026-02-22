export default function ReliabilitySection() {
  return (
    <section className="w-full flex gap-20 px-12 py-20 bg-[#FFFBF7] font-dm-sans">
      {/* Left */}
      <div className="flex flex-col gap-0 w-[450px] shrink-0">
        <h2 className="font-fraunces text-[52px] font-semibold text-[var(--color-dark)] leading-[1.1] tracking-[-1px]">
          Reliability &amp;
        </h2>
        <h2 className="font-fraunces text-[52px] italic text-[var(--color-muted-light)] leading-[1.1] tracking-[-1px]">
          observability
        </h2>
        <h2 className="font-fraunces text-[52px] italic text-[var(--color-muted-light)] leading-[1.1] tracking-[-1px]">
          at scale
        </h2>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-6 flex-1 justify-center">
        <p className="text-base text-[var(--color-muted)] leading-[1.6] max-w-[450px]">
          Robust auditing and performance reporting so you can be sure your AI team is always doing
          their best work.
        </p>
        <div>
          <a
            href="https://calendly.com/aditya-theconscience/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[var(--color-dark)] bg-white px-7 py-[14px] text-sm font-semibold text-[var(--color-dark)] hover:bg-gray-50 transition-colors"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
