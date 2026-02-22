import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ConscienceAI — Trusted intelligence for national-scale operations",
  description:
    "ConscienceAI is an AI-native operating system that embeds intelligence directly into enterprise workflows, purpose-built for India's Public Sector Undertakings.",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${fraunces.variable} ${dmSans.variable} font-dm-sans antialiased bg-[var(--color-bg-warm)]`}
      style={
        {
          "--font-fraunces-loaded": "Fraunces",
          "--font-dm-sans-loaded": "DM Sans",
        } as React.CSSProperties
      }
    >
      <style>{`
        .font-fraunces { font-family: var(--font-fraunces), serif; }
        .font-dm-sans  { font-family: var(--font-dm-sans), sans-serif; }
      `}</style>
      {children}
    </div>
  );
}
