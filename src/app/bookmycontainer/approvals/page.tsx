"use client";
import { useState } from "react";
import { Bell, Download, Check, X, Info } from "lucide-react";
import { Sidebar } from "../components/Sidebar";

interface Booking {
  id: string; customer: string; voyage: string; teu: number;
  amount: string; margin: string; score: number; risk: "HIGH" | "MED" | "LOW";
  creditLimit: string; outstanding: string; postBooking: string;
}

const BOOKINGS: Booking[] = [
  { id: "BK-2026-0789", customer: "HPCL Mumbai",       voyage: "SCI-MUM-DXB-204", teu: 40, amount: "₹32.1L", margin: "11.2%", score: 41, risk: "HIGH", creditLimit: "₹50 Cr",  outstanding: "₹38.4 Cr", postBooking: "₹41.6 Cr" },
  { id: "BK-2026-0785", customer: "Tata Chemicals",    voyage: "SCI-CHE-SIN-211", teu: 24, amount: "₹19.2L", margin: "16.8%", score: 72, risk: "MED",  creditLimit: "₹25 Cr",  outstanding: "₹14.2 Cr", postBooking: "₹16.1 Cr" },
  { id: "BK-2026-0781", customer: "Reliance Ind.",      voyage: "SCI-JNPT-COL-198",teu: 60, amount: "₹48.6L", margin: "22.1%", score: 89, risk: "LOW",  creditLimit: "₹100 Cr", outstanding: "₹41.0 Cr", postBooking: "₹45.9 Cr" },
  { id: "BK-2026-0777", customer: "ONGC Petro",         voyage: "SCI-MUM-DXB-202", teu: 20, amount: "₹16.0L", margin: "9.4%",  score: 35, risk: "HIGH", creditLimit: "₹20 Cr",  outstanding: "₹17.6 Cr", postBooking: "₹19.2 Cr" },
];

const RISK_META: Record<string, { color: string; bg: string }> = {
  HIGH: { color: "#DC2626", bg: "#FEE2E2" },
  MED:  { color: "#F59E0B", bg: "#FEF3C7" },
  LOW:  { color: "#16A34A", bg: "#DCFCE7" },
};

const scoreColor = (s: number) => s < 50 ? "#DC2626" : s < 75 ? "#F59E0B" : "#16A34A";

const REJECTION_REASONS = [
  "Credit limit exceeded",
  "Margin below threshold",
  "Compliance issue",
  "Document missing",
  "Capacity not available",
  "Sanctions screening flag",
];

type Action = "approve" | "reject" | null;

export default function ApprovalsPage() {
  const [selected, setSelected] = useState<Booking>(BOOKINGS[0]);
  const [filter, setFilter] = useState<"all" | "HIGH" | "MED" | "LOW">("all");
  const [modal, setModal] = useState<Action>(null);
  const [rejectReason, setRejectReason] = useState(REJECTION_REASONS[0]);
  const [rejectNote, setRejectNote] = useState("");
  const [processed, setProcessed] = useState<Set<string>>(new Set());

  const filtered = filter === "all" ? BOOKINGS : BOOKINGS.filter((b) => b.risk === filter);

  const handleConfirm = () => {
    setProcessed((p) => new Set([...p, selected.id]));
    setModal(null);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F0F2F5" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* Top bar */}
        <div style={{ height: 60, background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: "#1E293B", flex: 1, margin: 0 }}>Approval Queue</h1>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#DC2626", background: "#FEE2E2", borderRadius: 4, padding: "4px 10px" }}>23 Pending · 5 High Risk</span>
          <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 14px", height: 36, background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 6, fontSize: 13, color: "#64748B", cursor: "pointer" }}>
            <Download size={14} /> Export
          </button>
          <button style={{ width: 44, height: 44, border: "1px solid #E2E8F0", borderRadius: 8, background: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <Bell size={18} color="#64748B" />
            <span style={{ position: "absolute", top: 9, right: 9, width: 8, height: 8, background: "#DC2626", borderRadius: "50%" }} />
          </button>
        </div>

        {/* Main */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* Filter sidebar */}
          <div style={{ width: 220, background: "#FFFFFF", borderRight: "1px solid #E2E8F0", padding: 16, flexShrink: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8", letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>Risk Level</div>
            {[
              { key: "all",  label: "All Levels",  count: 23, cc: "#64748B", cb: "#F0F2F5" },
              { key: "HIGH", label: "High Risk",   count: 5,  cc: "#DC2626", cb: "#FEE2E2", dot: "#DC2626" },
              { key: "MED",  label: "Medium Risk", count: 11, cc: "#F59E0B", cb: "#FEF3C7", dot: "#F59E0B" },
              { key: "LOW",  label: "Low Risk",    count: 7,  cc: "#16A34A", cb: "#DCFCE7", dot: "#16A34A" },
            ].map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key as typeof filter)}
                  style={{
                    display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "9px 10px",
                    borderRadius: 6, border: "none", cursor: "pointer", marginBottom: 4,
                    background: active ? "#EFF6FF" : "transparent",
                    borderLeft: active ? "3px solid #2563EB" : "3px solid transparent",
                    paddingLeft: active ? 7 : 10,
                  }}
                >
                  {f.dot && <span style={{ width: 8, height: 8, borderRadius: "50%", background: f.dot, flexShrink: 0 }} />}
                  <span style={{ flex: 1, textAlign: "left", fontSize: 13, fontWeight: active ? 700 : 400, color: active ? "#2563EB" : "#1E293B" }}>
                    {f.label}
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: f.cc, background: f.cb, borderRadius: 10, padding: "1px 7px" }}>{f.count}</span>
                  {active && <Check size={12} color="#2563EB" />}
                </button>
              );
            })}

            <div style={{ height: 1, background: "#E2E8F0", margin: "12px 0" }} />
            <div style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8", letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>SLA Status</div>
            <div style={{ padding: "8px 10px", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 6, fontSize: 11, color: "#DC2626", fontWeight: 600 }}>
              ⏰ 3 items breach SLA in &lt;4 hrs
            </div>
          </div>

          {/* Table + drawer */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

            {/* Table */}
            <div style={{ flex: 1, overflowY: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead style={{ position: "sticky", top: 0, zIndex: 5 }}>
                  <tr style={{ background: "#F8FAFC", borderBottom: "2px solid #E2E8F0" }}>
                    {[
                      { label: "BOOKING ID",    w: 130 },
                      { label: "CUSTOMER",       w: 160 },
                      { label: "VOYAGE",         w: 150 },
                      { label: "TEU",            w: 60 },
                      { label: "AMOUNT",         w: 90 },
                      { label: "MARGIN",         w: 90 },
                      { label: "AI SCORE /100",  w: 110 },
                      { label: "RISK",           w: 80 },
                      { label: "ACTIONS",        w: 120 },
                    ].map((h) => (
                      <th key={h.label} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontWeight: 600, color: "#94A3B8", letterSpacing: 0.6, width: h.w }}>
                        {h.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((b) => {
                    const isSelected = selected.id === b.id;
                    const isDone = processed.has(b.id);
                    return (
                      <tr
                        key={b.id}
                        onClick={() => setSelected(b)}
                        style={{
                          borderBottom: "1px solid #F1F5F9",
                          background: isDone ? "#F8FAFC" : isSelected ? "#EFF6FF" : "#FFFFFF",
                          cursor: "pointer",
                          borderLeft: isSelected ? "3px solid #2563EB" : "3px solid transparent",
                          opacity: isDone ? 0.5 : 1,
                        }}
                      >
                        <td style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: "#1E293B" }}>{b.id}</td>
                        <td style={{ padding: "12px 14px", fontSize: 12, color: "#64748B" }}>{b.customer}</td>
                        <td style={{ padding: "12px 14px", fontSize: 12, color: "#64748B" }}>{b.voyage}</td>
                        <td style={{ padding: "12px 14px", fontSize: 12, fontWeight: 600, color: "#1E293B" }}>{b.teu}</td>
                        <td style={{ padding: "12px 14px", fontSize: 12, fontWeight: 600, color: "#1E293B" }}>{b.amount}</td>
                        <td style={{ padding: "12px 14px" }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: parseFloat(b.margin) < 12 ? "#DC2626" : "#16A34A" }}>{b.margin}</span>
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 12, fontWeight: 700, color: scoreColor(b.score) }}>{b.score}</span>
                            <div style={{ width: 40, height: 4, background: "#E2E8F0", borderRadius: 2 }}>
                              <div style={{ width: `${b.score}%`, height: "100%", background: scoreColor(b.score), borderRadius: 2 }} />
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: RISK_META[b.risk].color, background: RISK_META[b.risk].bg, borderRadius: 4, padding: "2px 8px" }}>{b.risk}</span>
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          <div style={{ display: "flex", gap: 6 }}>
                            {isDone ? (
                              <span style={{ fontSize: 11, color: "#94A3B8" }}>Processed</span>
                            ) : (
                              <>
                                <button onClick={(e) => { e.stopPropagation(); setSelected(b); setModal("approve"); }}
                                  style={{ padding: "4px 10px", background: "#16A34A", color: "white", border: "none", borderRadius: 4, fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                                  <Check size={11} /> Approve
                                </button>
                                <button onClick={(e) => { e.stopPropagation(); setSelected(b); setModal("reject"); }}
                                  style={{ padding: "4px 10px", background: "#DC2626", color: "white", border: "none", borderRadius: 4, fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                                  <X size={11} /> Reject
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Booking detail drawer */}
            <div style={{ height: 230, background: "#FFFFFF", borderTop: "2px solid #E2E8F0", padding: "14px 20px", overflowY: "auto", flexShrink: 0 }}>
              <div style={{ display: "flex", gap: 20, height: "100%" }}>

                {/* Booking details */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", marginBottom: 10 }}>
                    {selected.id} — {selected.customer}
                  </div>
                  {[
                    ["Voyage",    selected.voyage],
                    ["Route",     "Mumbai → Dubai"],
                    ["Container", `${selected.teu} TEU · 20ft Standard`],
                    ["Commodity", "Petrochemicals"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", gap: 12, marginBottom: 5 }}>
                      <span style={{ fontSize: 11, color: "#94A3B8", minWidth: 80 }}>{k}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#1E293B" }}>{v}</span>
                    </div>
                  ))}
                </div>

                {/* Credit exposure */}
                <div style={{ width: 220 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8", letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 10 }}>Credit Exposure</div>
                  {[
                    { label: "Credit Limit",      val: selected.creditLimit, color: "#1E293B" },
                    { label: "Current Outstanding",val: selected.outstanding, color: "#F59E0B" },
                    { label: "Post-booking Total", val: selected.postBooking,  color: "#DC2626" },
                  ].map((r) => (
                    <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #F1F5F9" }}>
                      <span style={{ fontSize: 11, color: "#64748B" }}>{r.label}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: r.color }}>{r.val}</span>
                    </div>
                  ))}
                </div>

                {/* Audit trail */}
                <div style={{ width: 260 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8", letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 10 }}>Audit Trail</div>
                  {[
                    { action: "Created", user: "System", time: "03 Mar 09:14" },
                    { action: "AI Scored (41/100)", user: "AI Engine", time: "03 Mar 09:14" },
                    { action: "Flagged High Risk", user: "AI Engine", time: "03 Mar 09:15" },
                  ].map((a, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB", marginTop: 4, flexShrink: 0 }} />
                      <div>
                        <span style={{ fontSize: 11, fontWeight: 600, color: "#1E293B" }}>{a.action}</span>
                        <span style={{ fontSize: 10, color: "#94A3B8" }}> · {a.user} · {a.time}</span>
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                    <button onClick={() => setModal("approve")} style={{ flex: 1, padding: "7px 0", background: "#16A34A", color: "white", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                      <Check size={13} /> Approve
                    </button>
                    <button onClick={() => setModal("reject")} style={{ flex: 1, padding: "7px 0", background: "#DC2626", color: "white", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                      <X size={13} /> Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {modal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 28, width: 520, maxWidth: "90vw", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: modal === "approve" ? "#DCFCE7" : "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {modal === "approve" ? <Check size={18} color="#16A34A" /> : <X size={18} color="#DC2626" />}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1E293B" }}>
                  {modal === "approve" ? "Confirm Approval" : "Confirm Rejection"}
                </div>
                <div style={{ fontSize: 12, color: "#64748B" }}>This action will be recorded in the audit trail.</div>
              </div>
            </div>

            {/* Booking summary */}
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8, padding: 14, marginBottom: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[
                  ["Booking ID",  selected.id],
                  ["Customer",    selected.customer],
                  ["Amount",      selected.amount],
                  ["AI Score",    `${selected.score}/100 (${selected.risk})`],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>{k}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1E293B" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rejection reason (only for reject) */}
            {modal === "reject" && (
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#64748B", letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 6 }}>
                  Reason for Rejection <span style={{ color: "#DC2626" }}>*</span>
                </label>
                <select
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  style={{ width: "100%", height: 36, padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: 6, fontSize: 13, color: "#1E293B", background: "#FFFFFF", marginBottom: 10 }}
                >
                  {REJECTION_REASONS.map((r) => <option key={r}>{r}</option>)}
                </select>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#64748B", letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 6 }}>Additional Notes</label>
                <textarea
                  value={rejectNote}
                  onChange={(e) => setRejectNote(e.target.value)}
                  rows={2}
                  placeholder="Optional additional context for the audit trail…"
                  style={{ width: "100%", padding: "8px 10px", border: "1px solid #E2E8F0", borderRadius: 6, fontSize: 13, color: "#1E293B", resize: "none", outline: "none", boxSizing: "border-box" }}
                />
              </div>
            )}

            {/* Approver identity */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", background: "#EFF6FF", borderRadius: 6, marginBottom: 18, fontSize: 11, color: "#1E293B" }}>
              <Info size={13} color="#2563EB" />
              <span>Action recorded as: <strong>Rajesh Sharma</strong> · Senior Manager · 03 Mar 2026, {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</span>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setModal(null)} style={{ flex: 1, padding: "10px 0", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "#64748B", cursor: "pointer" }}>
                Cancel
              </button>
              <button onClick={handleConfirm} style={{ flex: 1, padding: "10px 0", background: modal === "approve" ? "#16A34A" : "#DC2626", border: "none", borderRadius: 6, fontSize: 13, fontWeight: 700, color: "white", cursor: "pointer" }}>
                {modal === "approve" ? "Confirm Approval" : "Confirm Rejection"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
