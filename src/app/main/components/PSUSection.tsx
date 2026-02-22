export default function PSUSection() {
  return (
    <section className="w-full px-12 py-20 font-dm-sans">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14 gap-4">
        <p className="text-[13px] font-semibold text-[var(--color-muted)] tracking-[1px] uppercase">
          Industry Focus
        </p>
        <h2 className="font-fraunces text-[48px] font-semibold text-[var(--color-dark)] leading-[1.1] tracking-[-1px] max-w-[720px]">
          Built for PSUs of India
        </h2>
        <p className="text-base text-[var(--color-muted)] leading-[1.7] max-w-[620px]">
          ConscienceAI is purpose-built for India&apos;s Public Sector Undertakings — delivering
          AI-native automation that respects sovereignty, security, and the scale of national
          infrastructure across Shipping, Energy, and Manufacturing.
        </p>
      </div>

      {/* Bottom compliance note */}
      <div className="mt-10 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#2D2522" strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
          <span className="text-[13px] font-semibold text-[var(--color-dark)]">Government-grade compliance</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="18" height="11" rx="2" stroke="#2D2522" strokeWidth="1.6"/>
            <path d="M7 11V7a5 5 0 0110 0v4" stroke="#2D2522" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          <span className="text-[13px] font-semibold text-[var(--color-dark)]">Data sovereignty & on-premise ready</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#2D2522" strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
          <span className="text-[13px] font-semibold text-[var(--color-dark)]">Aligned with MeitY & NIC standards</span>
        </div>
      </div>
    </section>
  );
}
