export default function FeatureGrid() {
  return (
    <section className="w-full h-[560px] flex gap-4 px-12 font-dm-sans">
      {/* Card 1 — AI Voice Call Visualization */}
      <div className="flex-1 rounded-[16px] overflow-hidden relative" style={{ background: "linear-gradient(160deg, #0A1628 0%, #0D2045 40%, #0A1628 100%)" }}>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20" style={{ width: 280, height: 280, background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full px-6 py-8">

          {/* Top label */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/90 tracking-wide">AI CALL IN PROGRESS</span>
          </div>

          {/* Avatar row */}
          <div className="flex items-center gap-6 w-full justify-center">
            {/* AI Avatar */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-blue-400/60" style={{ background: "linear-gradient(135deg, #1E40AF, #3B82F6)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.9)" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="18" cy="6" r="3" fill="#60A5FA" />
                  <path d="M16.5 6h3M18 4.5v3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[10px] text-blue-300 font-semibold tracking-widest">AI AGENT</span>
            </div>

            {/* Waveform */}
            <div className="flex items-center gap-[3px]">
              {[14, 22, 32, 18, 40, 26, 44, 30, 38, 20, 34, 16, 28].map((h, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: 3,
                    height: h,
                    background: `linear-gradient(to top, #3B82F6, #60A5FA)`,
                    opacity: 0.7 + (i % 3) * 0.1,
                    animation: `wave ${0.8 + (i % 4) * 0.15}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.07}s`,
                  }}
                />
              ))}
            </div>

            {/* User Avatar */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-white/30" style={{ background: "linear-gradient(135deg, #374151, #6B7280)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.9)" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[10px] text-white/50 font-semibold tracking-widest">USER</span>
            </div>
          </div>

          {/* Transcript bubble */}
          <div className="w-full bg-white/8 backdrop-blur-sm border border-white/15 rounded-[12px] px-4 py-3">
            <p className="text-[11px] text-white/50 mb-1 font-medium">AI Agent · just now</p>
            <p className="text-[13px] text-white/90 leading-[1.5]">&quot;Your shipment #SCI-4821 has cleared customs and is on track for delivery by 14:00 today.&quot;</p>
          </div>

          {/* Call controls */}
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="white"/></svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-500/80 border border-red-400/50 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>
          </div>

        </div>

        <style>{`
          @keyframes wave {
            from { transform: scaleY(0.4); }
            to { transform: scaleY(1); }
          }
        `}</style>
      </div>

      {/* Card 2 — Built for scale */}
      <div className="flex-1 flex flex-col justify-between rounded-[16px] bg-[#FAF6F3] p-7 px-6">
        <h3 className="font-fraunces text-2xl font-semibold text-[var(--color-dark)]">
          Built for scale
        </h3>

        <div className="flex flex-col gap-2 py-5">
          <div className="flex items-center self-start rounded-lg bg-[#34A853] px-3 py-[6px]">
            <span className="text-xs font-semibold text-white">5263</span>
          </div>
          <div className="flex items-center gap-2 rounded-[10px] border border-[var(--color-border)] bg-white px-[14px] py-[10px] w-full">
            <span className="rounded-full bg-[#34A853]" style={{ width: 20, height: 20, display: "inline-block" }} />
            <span className="text-[13px] font-medium text-[var(--color-dark)]">Incoming call</span>
            <span className="text-xs text-[var(--color-muted-light)] ml-1">(555) 123-4567</span>
          </div>
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[15px] font-semibold text-[var(--color-dark)]">AI workers are always on call</p>
          <p className="text-[13px] text-[var(--color-muted)] leading-[1.5] max-w-[260px]">
            Tasks scale up and down with demand. AI workers are always ready with guaranteed up time.
          </p>
        </div>
      </div>

      {/* Card 3 — Performance (coral) */}
      <div className="flex-1 flex flex-col justify-between rounded-[16px] bg-[#D4644E] p-7 px-6">
        <h3 className="font-fraunces text-2xl font-semibold text-white">
          Performance you can trust
        </h3>

        <div className="flex items-center justify-center flex-1">
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 140,
              height: 140,
              border: "10px solid rgba(255,255,255,0.25)",
            }}
          >
            <div className="flex flex-col items-center gap-[2px]">
              <span className="text-xs text-white/70">calls / hr</span>
              <span className="font-fraunces text-[36px] font-semibold text-white leading-none">
                4231
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[15px] font-semibold text-white">Measure success at every step</p>
          <p className="text-[13px] text-white/80 leading-[1.5] max-w-[260px]">
            Measure and compare performance across every version of your AI workforce.
          </p>
        </div>
      </div>

      {/* Card 4 — Built-in supervision */}
      <div className="flex-1 flex flex-col justify-between rounded-[16px] bg-[#FAF6F3] p-7 px-6">
        <h3 className="font-fraunces text-2xl font-semibold text-[var(--color-dark)]">
          Built-in supervision
        </h3>

        <div className="flex flex-col gap-[10px] py-4">
          {[
            { name: "ConscienceAI", time: "2:12 PM", color: "#2D2522", text: "We're offering $1600 on this one would you like to book it?" },
            { name: "Carrier", time: "2:13 PM", color: "#6B5E5E", text: "What about $1800?" },
            { name: "ConscienceAI", time: "2:13 PM", color: "#2D2522", text: "I could do $1650", accent: true },
          ].map((msg, i) => (
            <div key={i} className="flex gap-2">
              <span className="rounded-full shrink-0 mt-1" style={{ width: 24, height: 24, backgroundColor: msg.color }} />
              <div className="flex flex-col gap-[2px]">
                <div className="flex items-center gap-[6px]">
                  <span className="text-[11px] font-semibold text-[var(--color-dark)]">{msg.name}</span>
                  <span className="text-[10px] text-[var(--color-muted-light)]">{msg.time}</span>
                </div>
                <p className={`text-xs leading-[1.4] max-w-[220px] ${msg.accent ? "text-[#D4644E]" : "text-[var(--color-dark)]"}`}>
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[15px] font-semibold text-[var(--color-dark)]">Smart auditing with AI</p>
          <p className="text-[13px] text-[var(--color-muted)] leading-[1.5] max-w-[260px]">
            The AI auditor acts as a safety net, making sure AI workers communicate as intended.
          </p>
        </div>
      </div>
    </section>
  );
}
