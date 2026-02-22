"use client";

import { useState } from "react";

const features = [
  {
    num: "01",
    title: "Fully custom workflows",
    desc: "Give an AI worker instructions and access to the systems and tools needed to accomplish its goal.",
    verb: "Orchestrate",
    image: "/main-images/workflow-page.png",
    w: 2044, h: 1276,
  },
  {
    num: "02",
    title: "Integration into any system",
    desc: "Leverage a native integration or connect to any system via API, webhook, or AI browser agents.",
    verb: "integrate",
    image: "/main-images/integrations-page.png",
    w: 1400, h: 895,
  },
  {
    num: "03",
    title: "Highly skilled execution across all channels",
    desc: "Whether it's engaging in conversation, parsing a document, or applying advanced reasoning, AI workers get the job done.",
    verb: "coordinate",
    image: "/main-images/workflow-diagram.png",
    w: 912, h: 768,
    maxWidth: "55%",
  },
  {
    num: "04",
    title: "Escalation & collaboration",
    desc: "Keeping stakeholders looped in with smart alerts and hand-offs - never drop the ball again.",
    verb: "speak",
    image: "/main-images/ai-conversation.png",
    w: 1204, h: 980,
  },
  {
    num: "05",
    title: "Extraction & analysis of data",
    desc: "Every piece of information is extracted on every task - powering insight & efficiency across the organization.",
    verb: "think",
    image: "/main-images/analytics-dashboard.png",
    w: 1280, h: 900,
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const f = features[active];

  return (
    <section className="flex w-full px-12 py-12 gap-12 bg-[var(--color-bg-warm)] font-dm-sans items-start">
      {/* Left column — fixed width */}
      <div className="flex flex-col w-[480px] shrink-0">
        <p className="text-[13px] font-semibold text-[var(--color-muted)] tracking-[1px] uppercase mb-4">
          Build AI Workers
        </p>
        <div className="flex flex-col gap-0 mb-4">
          <h2 className="font-fraunces text-[52px] font-semibold text-[var(--color-dark)] leading-[1.1] tracking-[-1px]">
            AI workers that
          </h2>
          <h2
            key={active}
            className="font-fraunces text-[52px] font-semibold italic text-[var(--color-muted-light)] leading-[1.1] tracking-[-1px] animate-fadeIn"
          >
            {f.verb}
          </h2>
        </div>
        <p className="text-base text-[var(--color-muted)] leading-[1.6] max-w-[380px] mb-6">
          Build fully custom AI workers that handle tasks across the organization.
        </p>
        {/* Feature list */}
        <div className="flex flex-col">
          {features.map((feat, i) => (
            <button
              key={feat.num}
              onClick={() => setActive(i)}
              className={`text-left flex items-start justify-between py-5 border-t border-[var(--color-border)] transition-all duration-200 ${
                i === features.length - 1 ? "border-b" : ""
              } ${active === i ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
            >
              <div className="flex flex-col gap-1 max-w-[400px]">
                <p className={`text-[15px] font-semibold transition-colors ${active === i ? "text-[var(--color-dark)]" : "text-[var(--color-muted)]"}`}>
                  {feat.title}
                </p>
                {active === i && (
                  <p className="text-sm text-[var(--color-muted)] leading-[1.5] mt-1 animate-fadeIn">
                    {feat.desc}
                  </p>
                )}
              </div>
              <span className="text-sm font-medium text-[var(--color-muted-light)] shrink-0 ml-4 mt-[2px]">
                {feat.num}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right — dynamically sized to image's natural aspect ratio */}
      <div className="flex-1 min-w-0">
        <div
          key={active}
          className="relative rounded-[20px] overflow-hidden animate-fadeIn"
          style={{
            width: f.maxWidth ?? "100%",
            paddingBottom: `calc(${f.maxWidth ?? "100%"} * ${f.h / f.w})`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={f.image}
            alt={f.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.35s ease both; }
      `}</style>
    </section>
  );
}
