export default function LandingHero() {
  return (
    <section className="relative w-full font-dm-sans px-6 pt-4 pb-0 bg-[var(--color-bg-warm)]">
      <div className="relative w-full h-[700px] bg-[var(--color-hero-bg)] overflow-hidden rounded-[24px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/main-images/hero-bg.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0A1A2E70 0%, #0A1A2E30 35%, #0A1A2E20 65%, #0A1A2E60 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 px-[120px] py-[60px] text-center">
        {/* Headline */}
        <div className="flex flex-col items-center gap-0">
          <h1
            className="font-fraunces text-[72px] font-semibold text-white leading-[1.1] tracking-[-2px] text-center"
          >
            Trusted intelligence for
          </h1>
          <h1
            className="font-fraunces text-[72px] font-semibold text-white leading-[1.1] tracking-[-2px] text-center"
          >
            national scale operations
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base text-white/80 leading-[1.6] max-w-[600px] text-center">
        ConscienceAI delivers trusted, AI-native intelligence embedded directly into mission critical operations enabling reliable, real time decision making.
        </p>
      </div>

      {/* Logo Bar */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center gap-3 px-[120px]">
        <span className="font-fraunces text-2xl font-semibold italic text-white/80 tracking-wide">Trusted By</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/main-images/SCILogo.png" alt="SCI Logo" className="h-24 object-contain opacity-90" />
      </div>
      </div>
    </section>
  );
}
