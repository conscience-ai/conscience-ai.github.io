import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookMyContainer – SCI Edition",
  description: "Enterprise container booking and voyage management for Shipping Corporation of India",
};

export default function BookMyContainerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif", minHeight: "100vh", background: "#F0F2F5" }}>
      {children}
    </div>
  );
}
