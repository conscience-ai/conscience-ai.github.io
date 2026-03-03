"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, Save, Send, ChevronDown, Check, TriangleAlert,
  Brain, Activity, CreditCard, Wind, BarChart3, ShieldCheck, ChevronRight, ChevronLeft,
} from "lucide-react";
import { Sidebar } from "../components/Sidebar";

const STEPS = ["A", "B", "C", "D"];
const STEP_LABELS = ["Voyage Selection", "Container Details", "Customer Info", "Pricing Summary"];

function SectionHeader({ step, label, complete }: { step: string; label: string; complete: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <div style={{ width: 28, height: 28, borderRadius: 6, background: complete ? "#16A34A" : "#1A3A5C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {complete ? <Check size={14} color="white" /> : <span style={{ color: "white", fontSize: 12, fontWeight: 700 }}>{step}</span>}
      </div>
      <span style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>{label}</span>
    </div>
  );
}

function FormRow({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#64748B", letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 5 }}>
        {label}{required && <span style={{ color: "#DC2626", marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inp = { width: "100%", height: 36, padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: 6, fontSize: 13, color: "#1E293B", background: "#FFFFFF", outline: "none", boxSizing: "border-box" as const };
const sel = { ...inp, appearance: "none" as const, cursor: "pointer" };

export default function NewBookingPage() {
  const [aiOpen, setAiOpen] = useState(true);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (idx: number) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F0F2F5" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* Top bar */}
        <div style={{ height: 60, background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <Link href="/bookmycontainer/dashboard" style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #E2E8F0", borderRadius: 8, color: "#64748B", textDecoration: "none" }}>
            <ArrowLeft size={16} />
          </Link>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: "#1E293B", flex: 1, margin: 0 }}>New Container Booking</h1>
          <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 16px", height: 36, background: "#F0F2F5", border: "1px solid #E2E8F0", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "#1E293B", cursor: "pointer" }}>
            <Save size={14} /> Save Draft
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 16px", height: 36, background: "#2563EB", border: "none", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "white", cursor: "pointer" }}>
            <Send size={14} /> Submit for Approval
          </button>
        </div>

        {/* Progress steps */}
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", height: 48 }}>
            {STEPS.map((s, i) => (
              <div key={s} style={{ display: "flex", alignItems: "center" }}>
                <button onClick={() => toggleStep(i)} style={{
                  display: "flex", alignItems: "center", gap: 8, background: "transparent", border: "none", cursor: "pointer",
                  padding: "4px 8px", borderRadius: 4,
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    background: completedSteps.has(i) ? "#16A34A" : "#2563EB",
                    color: "white", fontSize: 11, fontWeight: 700,
                  }}>
                    {completedSteps.has(i) ? <Check size={12} /> : s}
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 500, color: completedSteps.has(i) ? "#16A34A" : "#1E293B", whiteSpace: "nowrap" }}>
                    {STEP_LABELS[i]}
                  </span>
                </button>
                {i < STEPS.length - 1 && <ChevronRight size={14} color="#CBD5E1" style={{ margin: "0 4px" }} />}
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* Form */}
          <div style={{ flex: 1, padding: 24, overflowY: "auto" }}>

            {/* A: Voyage Selection */}
            <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E2E8F0", padding: 20, marginBottom: 16 }}>
              <SectionHeader step="A" label="Voyage Selection" complete={completedSteps.has(0)} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <FormRow label="Origin Port" required>
                  <div style={{ position: "relative" }}>
                    <select style={sel}><option>Mumbai (INBOM)</option><option>JNPT (INJNP)</option><option>Chennai (INMAA)</option></select>
                    <ChevronDown size={14} color="#94A3B8" style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  </div>
                </FormRow>
                <FormRow label="Destination Port" required>
                  <div style={{ position: "relative" }}>
                    <select style={sel}><option>Dubai (AEDXB)</option><option>Singapore (SGSIN)</option><option>Colombo (LKCMB)</option></select>
                    <ChevronDown size={14} color="#94A3B8" style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  </div>
                </FormRow>
                <FormRow label="Voyage" required>
                  <div style={{ position: "relative" }}>
                    <select style={sel}><option>SCI-MUM-DXB-204 (Dep 08 Mar)</option><option>SCI-MUM-DXB-207 (Dep 15 Mar)</option></select>
                    <ChevronDown size={14} color="#94A3B8" style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  </div>
                </FormRow>
                <FormRow label="Booking Date" required>
                  <input type="date" defaultValue="2026-03-03" style={inp} />
                </FormRow>
              </div>
            </div>

            {/* B: Container Details */}
            <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E2E8F0", padding: 20, marginBottom: 16 }}>
              <SectionHeader step="B" label="Container Details" complete={completedSteps.has(1)} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                <FormRow label="Container Type" required>
                  <div style={{ position: "relative" }}>
                    <select style={sel}><option>20ft Standard (TEU×1)</option><option>40ft Standard (TEU×2)</option><option>40ft High Cube</option><option>Reefer 40ft</option></select>
                    <ChevronDown size={14} color="#94A3B8" style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  </div>
                </FormRow>
                <FormRow label="Quantity" required>
                  <input type="number" defaultValue="20" min={1} style={inp} />
                </FormRow>
                <FormRow label="Total TEU">
                  <input type="text" value="40 TEU" readOnly style={{ ...inp, background: "#F8FAFC", color: "#64748B" }} />
                </FormRow>
                <FormRow label="Cargo Type" required>
                  <div style={{ position: "relative" }}>
                    <select style={sel}><option>Dry General</option><option>Hazardous (IMO)</option><option>Reefer</option><option>Out of Gauge</option></select>
                    <ChevronDown size={14} color="#94A3B8" style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  </div>
                </FormRow>
                <FormRow label="Commodity">
                  <input type="text" defaultValue="Petrochemicals" style={inp} />
                </FormRow>
                <FormRow label="Total Weight (MT)">
                  <input type="number" defaultValue="420" style={inp} />
                </FormRow>
              </div>
            </div>

            {/* C: Customer Info */}
            <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E2E8F0", padding: 20, marginBottom: 16 }}>
              <SectionHeader step="C" label="Customer Information" complete={completedSteps.has(2)} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <FormRow label="Company Name" required>
                  <input type="text" defaultValue="HPCL Mumbai" style={inp} />
                </FormRow>
                <FormRow label="GST Number" required>
                  <div style={{ position: "relative" }}>
                    <input type="text" defaultValue="27AAACH7409R1ZZ" maxLength={15} style={{ ...inp, paddingRight: 36 }} />
                    <div style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "#DCFCE7", borderRadius: 4, padding: "2px 6px", display: "flex", alignItems: "center", gap: 3 }}>
                      <Check size={10} color="#16A34A" />
                      <span style={{ fontSize: 10, color: "#16A34A", fontWeight: 600 }}>Verified</span>
                    </div>
                  </div>
                </FormRow>
                <FormRow label="IEC Code" required>
                  <input type="text" defaultValue="AAACH7409R" maxLength={10} style={inp} />
                </FormRow>
                <FormRow label="Contact Person">
                  <input type="text" defaultValue="Suresh Patel" style={inp} />
                </FormRow>
                <div>
                  <FormRow label="Credit Limit">
                    <input type="text" value="₹12.0 Cr" readOnly style={{ ...inp, background: "#F8FAFC", color: "#64748B" }} />
                  </FormRow>
                </div>
                <div>
                  <FormRow label="Outstanding Credit">
                    <div style={{ position: "relative" }}>
                      <input type="text" value="₹9.2 Cr (77% utilized)" readOnly style={{ ...inp, background: "#FEF9C3", border: "1px solid #FDE68A", color: "#1E293B" }} />
                    </div>
                  </FormRow>
                </div>
              </div>
              <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 6, padding: "10px 14px", marginTop: 8, display: "flex", alignItems: "flex-start", gap: 8 }}>
                <TriangleAlert size={14} color="#F59E0B" style={{ flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontSize: 12, color: "#92400E" }}>Warning: Customer credit utilization at 77%. Verify payment terms before submission.</span>
              </div>
            </div>

            {/* D: Pricing Summary */}
            <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E2E8F0", padding: 20 }}>
              <SectionHeader step="D" label="Pricing Summary" complete={completedSteps.has(3)} />
              <div style={{ maxWidth: 420 }}>
                {[
                  { label: "Base Freight (40 TEU × ₹38,000)", value: "₹15,20,000" },
                  { label: "Port Handling Charges",            value: "₹52,500" },
                  { label: "Documentation Fee",               value: "₹7,500" },
                ].map((r) => (
                  <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F1F5F9" }}>
                    <span style={{ fontSize: 13, color: "#64748B" }}>{r.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#1E293B" }}>{r.value}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #E2E8F0" }}>
                  <span style={{ fontSize: 13, color: "#64748B" }}>Sub-total</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#1E293B" }}>₹15,80,000</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: 13, color: "#64748B" }}>GST (18%)</span>
                  <span style={{ fontSize: 13, color: "#64748B" }}>₹2,84,400</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 4px", background: "#F8FAFC", margin: "0 -4px", borderRadius: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#1E293B" }}>Total Amount</span>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#1A3A5C" }}>₹18,64,400</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  <span style={{ fontSize: 12, color: "#64748B" }}>Estimated Margin</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#16A34A" }}>18.4% (₹2,88,000)</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Intelligence Panel */}
          <div style={{
            width: aiOpen ? 400 : 52,
            background: "#1A3A5C",
            flexShrink: 0,
            transition: "width 0.2s ease",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* Toggle */}
            <button
              onClick={() => setAiOpen(!aiOpen)}
              style={{
                position: "absolute", left: aiOpen ? 0 : "50%", top: "50%",
                transform: aiOpen ? "translateY(-50%)" : "translate(-50%, -50%)",
                width: 24, height: 24, background: "#2563EB", border: "none", borderRadius: "50%",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 10, flexShrink: 0,
              }}
            >
              {aiOpen ? <ChevronRight size={12} color="white" /> : <ChevronLeft size={12} color="white" />}
            </button>

            {aiOpen && (
              <div style={{ padding: 20, overflowY: "auto", height: "100%" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                  <Brain size={18} color="#60A5FA" />
                  <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>AI Intelligence</span>
                  <span style={{ background: "#16A34A", color: "white", fontSize: 10, fontWeight: 700, borderRadius: 10, padding: "1px 8px", marginLeft: "auto" }}>● LIVE</span>
                </div>

                {/* Metrics */}
                {[
                  { label: "CAPACITY CHECK",   value: "78%",  sub: "Available on SCI-MUM-DXB-204", color: "#F59E0B", Icon: Activity, ok: null },
                  { label: "MARGIN ANALYSIS",  value: "18.4%",sub: "Above 15% target",              color: "#16A34A", Icon: BarChart3, ok: true },
                  { label: "CREDIT RISK",       value: "67/100",sub: "Medium risk — monitor",       color: "#F59E0B", Icon: CreditCard, ok: null },
                  { label: "CONGESTION RISK",   value: "LOW",  sub: "Dubai port normal ops",        color: "#16A34A", Icon: Wind, ok: true },
                  { label: "NO-SHOW RISK",      value: "8%",   sub: "Below 10% threshold",          color: "#16A34A", Icon: ShieldCheck, ok: true },
                ].map((m) => (
                  <div key={m.label} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid #1E3A5F" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, color: "#5B8DB8", letterSpacing: 0.8, textTransform: "uppercase" }}>{m.label}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: m.color }}>{m.value}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#A8C4E0" }}>{m.sub}</div>
                    {m.label === "CAPACITY CHECK" && (
                      <div style={{ marginTop: 6, height: 4, background: "#1E3A5F", borderRadius: 2 }}>
                        <div style={{ width: "78%", height: "100%", background: "#F59E0B", borderRadius: 2 }} />
                      </div>
                    )}
                    {m.label === "CREDIT RISK" && (
                      <div style={{ marginTop: 6, height: 4, background: "#1E3A5F", borderRadius: 2 }}>
                        <div style={{ width: "67%", height: "100%", background: "#F59E0B", borderRadius: 2 }} />
                      </div>
                    )}
                  </div>
                ))}

                {/* Compliance */}
                <div style={{ marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid #1E3A5F" }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "#5B8DB8", letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 6 }}>COMPLIANCE CHECK</div>
                  {["GST Verified", "IEC Code Valid", "IMDG Class Cleared", "Sanctions Screening OK"].map((c) => (
                    <div key={c} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                      <Check size={12} color="#16A34A" />
                      <span style={{ fontSize: 11, color: "#A8C4E0" }}>{c}</span>
                    </div>
                  ))}
                </div>

                {/* Recommendation */}
                <div style={{ background: "#1E3A5F", borderRadius: 8, padding: 14, marginBottom: 16 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "#5B8DB8", letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 8 }}>AI RECOMMENDATION</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div style={{ background: "#16A34A", borderRadius: 6, padding: "4px 12px" }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>APPROVE</span>
                    </div>
                    <span style={{ fontSize: 12, color: "#A8C4E0" }}>Confidence: High</span>
                  </div>
                  <p style={{ fontSize: 11, color: "#A8C4E0", margin: 0, lineHeight: 1.5 }}>
                    Booking meets margin, capacity, and compliance criteria. Credit risk is moderate — recommend one-time advance payment clause.
                  </p>
                </div>

                <button style={{ width: "100%", padding: "10px 0", background: "#2563EB", border: "none", borderRadius: 6, color: "white", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <Brain size={14} /> Run Full AI Check
                </button>
              </div>
            )}

            {!aiOpen && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 80, gap: 16 }}>
                <Brain size={18} color="#60A5FA" />
                <span style={{ color: "#5B8DB8", fontSize: 10, fontWeight: 700, writingMode: "vertical-rl", letterSpacing: 1 }}>AI PANEL</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
