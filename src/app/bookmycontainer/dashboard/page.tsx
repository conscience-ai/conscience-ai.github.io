"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Bell, Search, TrendingUp, Package, Ship, ClipboardCheck, Activity,
  AlertTriangle, ArrowRight, CheckCircle, Clock, AlarmClock,
} from "lucide-react";
import { Sidebar } from "../components/Sidebar";

const VESSELS = [
  { name: "MV Vikrant",  route: "MUM → DXB", status: "On Schedule", sc: "#16A34A", sb: "#DCFCE7", eta: "14 Mar", util: 78,  uc: "#16A34A" },
  { name: "MV Sagarika", route: "CHE → SIN", status: "On Schedule", sc: "#16A34A", sb: "#DCFCE7", eta: "11 Mar", util: 85,  uc: "#16A34A" },
  { name: "MV Chennai",  route: "JNPT → COL", status: "Alert",       sc: "#DC2626", sb: "#FEE2E2", eta: "09 Mar", util: 64,  uc: "#DC2626" },
  { name: "MV Prabhat",  route: "KAN → ABD",  status: "Delayed",     sc: "#F59E0B", sb: "#FEF3C7", eta: "18 Mar", util: 91,  uc: "#F59E0B" },
];

const PENDING = [
  { id: "BK-2026-0789", customer: "HPCL Mumbai",    voyage: "SCI-MUM-DXB-204", teu: 40, amt: "₹32.1L", score: 41, risk: "HIGH", rc: "#DC2626", rb: "#FEE2E2" },
  { id: "BK-2026-0785", customer: "Tata Chemicals", voyage: "SCI-CHE-SIN-211", teu: 24, amt: "₹19.2L", score: 72, risk: "MED",  rc: "#F59E0B", rb: "#FEF3C7" },
];
const AI_APPROVED = [
  { id: "BK-2026-0781", customer: "Reliance Industries", voyage: "SCI-JNPT-COL-198", teu: 60, amt: "₹48.6L", score: 89, risk: "LOW", rc: "#16A34A", rb: "#DCFCE7" },
];
const FLAGGED = [
  { id: "BK-2026-0777", customer: "ONGC Petro", voyage: "SCI-MUM-DXB-202", teu: 20, amt: "₹16.0L", score: 35, risk: "HIGH", rc: "#DC2626", rb: "#FEE2E2" },
];

const ALERTS = [
  { type: "danger",  Icon: AlertTriangle, text: "MV Chennai: Cargo inspection delay at JNPT – ETA pushed 6 hrs",           time: "2m ago" },
  { type: "warning", Icon: Clock,         text: "BK-2026-0789: Credit limit utilization at 77% for HPCL Mumbai",           time: "18m ago" },
  { type: "warning", Icon: Activity,      text: "Capacity on SCI-MUM-DXB-204 at 94% — consider waitlist mode",             time: "1h ago" },
  { type: "info",    Icon: CheckCircle,   text: "AI auto-approved 3 bookings in the last hour (score > 80)",               time: "1h ago" },
];

const scoreColor = (s: number) => s < 50 ? "#DC2626" : s < 75 ? "#F59E0B" : "#16A34A";

export default function DashboardPage() {
  const [tab, setTab] = useState<"pending" | "approved" | "flagged">("pending");
  const bookings = tab === "pending" ? PENDING : tab === "approved" ? AI_APPROVED : FLAGGED;

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F0F2F5" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* Top bar */}
        <div style={{ height: 60, background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", padding: "0 24px", gap: 14, flexShrink: 0 }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: "#1E293B", flex: 1, margin: 0 }}>Good morning, Rajesh</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#F0F2F5", borderRadius: 6, padding: "7px 12px", width: 240, border: "1px solid #E2E8F0" }}>
            <Search size={14} color="#94A3B8" />
            <input placeholder="Search voyages, bookings…" style={{ border: "none", background: "transparent", outline: "none", fontSize: 12, color: "#64748B", width: "100%" }} />
          </div>
          <button style={{ width: 44, height: 44, border: "1px solid #E2E8F0", borderRadius: 8, background: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <Bell size={18} color="#64748B" />
            <span style={{ position: "absolute", top: 9, right: 9, width: 8, height: 8, background: "#DC2626", borderRadius: "50%" }} />
          </button>
          <div style={{ background: "#F0F2F5", borderRadius: 6, padding: "7px 12px", fontSize: 12, color: "#64748B", border: "1px solid #E2E8F0", whiteSpace: "nowrap" }}>
            Mon, 03 Mar 2026
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: 24, overflowY: "auto" }}>

          {/* KPI row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16, marginBottom: 20 }}>
            {[
              { label: "TEU BOOKED",         value: "1,248",    sub: "+124 this week",          Icon: Package,       ib: "#DBEAFE", ic: "#2563EB" },
              { label: "TOTAL REVENUE",      value: "₹4.82 Cr", sub: "+₹0.34 Cr vs last week",  Icon: TrendingUp,    ib: "#DCFCE7", ic: "#16A34A" },
              { label: "ACTIVE VOYAGES",     value: "14",       sub: "4 departing this week",   Icon: Ship,          ib: "#E0E7FF", ic: "#4F46E5" },
              { label: "PENDING APPROVALS",  value: "23",       sub: null,                      Icon: ClipboardCheck, ib: "#FEE2E2", ic: "#DC2626", sla: "SLA breach in 4 hrs" },
              { label: "CAPACITY UTIL.",     value: "76.4%",    sub: "↑ 2.1% vs last voyage",   Icon: Activity,      ib: "#FEF3C7", ic: "#F59E0B" },
            ].map((k) => (
              <div key={k.label} style={{ background: k.sla ? "#FFF5F5" : "#FFFFFF", borderRadius: 8, padding: 16, border: `1px solid ${k.sla ? "#FECACA" : "#E2E8F0"}` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#64748B", letterSpacing: 0.6, textTransform: "uppercase" }}>{k.label}</span>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: k.ib, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <k.Icon size={16} color={k.ic} />
                  </div>
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#1E293B", marginBottom: 4 }}>{k.value}</div>
                {k.sla ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#DC2626", fontWeight: 600 }}>
                    <AlarmClock size={12} />
                    {k.sla}
                  </div>
                ) : (
                  <div style={{ fontSize: 11, color: "#64748B" }}>{k.sub}</div>
                )}
              </div>
            ))}
          </div>

          {/* Panels row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 368px 308px", gap: 16 }}>

            {/* Vessel snapshot */}
            <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E2E8F0", overflow: "hidden" }}>
              <div style={{ padding: "14px 20px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>Live Vessel Snapshot</span>
                <Link href="/bookmycontainer/voyages" style={{ fontSize: 12, color: "#2563EB", textDecoration: "underline", display: "flex", alignItems: "center", gap: 4 }}>
                  View All <ArrowRight size={12} />
                </Link>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#F8FAFC" }}>
                    {["VESSEL", "ROUTE", "STATUS", "ETA", "UTILIZATION"].map((h) => (
                      <th key={h} style={{ padding: "9px 16px", textAlign: "left", fontSize: 11, fontWeight: 600, color: "#94A3B8", letterSpacing: 0.6, borderBottom: "1px solid #E2E8F0" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {VESSELS.map((v, i) => (
                    <tr key={v.name} style={{ borderBottom: i < VESSELS.length - 1 ? "1px solid #F1F5F9" : "none" }}>
                      <td style={{ padding: "12px 16px" }}>
                        <Link href="/bookmycontainer/voyages" style={{ fontSize: 13, fontWeight: 600, color: "#2563EB", textDecoration: "underline" }}>{v.name}</Link>
                      </td>
                      <td style={{ padding: "12px 16px", fontSize: 12, color: "#64748B" }}>{v.route}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <span style={{ fontSize: 11, fontWeight: 600, color: v.sc, background: v.sb, borderRadius: 4, padding: "2px 8px" }}>{v.status}</span>
                      </td>
                      <td style={{ padding: "12px 16px", fontSize: 12, color: "#64748B" }}>{v.eta}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 64, height: 6, background: "#E2E8F0", borderRadius: 3, overflow: "hidden" }}>
                            <div style={{ width: `${v.util}%`, height: "100%", background: v.uc, borderRadius: 3 }} />
                          </div>
                          <span style={{ fontSize: 11, color: "#64748B", minWidth: 30 }}>{v.util}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Booking queue */}
            <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E2E8F0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "14px 16px", borderBottom: "1px solid #E2E8F0" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>Booking Queue</span>
              </div>
              {/* Tabs */}
              <div style={{ display: "flex", borderBottom: "1px solid #E2E8F0" }}>
                {[
                  { key: "pending",  label: "Pending",     count: 23, cc: "#DC2626", cb: "#FEE2E2" },
                  { key: "approved", label: "AI Approved", count: 11, cc: "#16A34A", cb: "#DCFCE7" },
                  { key: "flagged",  label: "Flagged",     count: 5,  cc: "#CA8A04", cb: "#FEF3C7" },
                ].map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key as typeof tab)}
                    style={{
                      flex: 1, padding: "9px 6px", border: "none", background: "transparent", cursor: "pointer",
                      fontSize: 11, fontWeight: tab === t.key ? 700 : 500,
                      color: tab === t.key ? "#2563EB" : "#64748B",
                      borderBottom: tab === t.key ? "3px solid #2563EB" : "3px solid transparent",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                    }}
                  >
                    {t.label}
                    <span style={{ background: t.cb, color: t.cc, borderRadius: 10, fontSize: 10, fontWeight: 700, padding: "1px 5px" }}>{t.count}</span>
                  </button>
                ))}
              </div>
              <div style={{ padding: 12, flex: 1, overflowY: "auto" }}>
                {bookings.map((b) => (
                  <div key={b.id} style={{ border: "1px solid #E2E8F0", borderRadius: 6, padding: 12, marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#1E293B" }}>{b.id}</div>
                        <div style={{ fontSize: 11, color: "#64748B" }}>{b.customer}</div>
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 700, color: b.rc, background: b.rb, borderRadius: 4, padding: "2px 7px" }}>{b.risk}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#64748B", marginBottom: 8 }}>
                      <span>{b.teu} TEU · {b.amt}</span>
                      <span>AI Score: <strong style={{ color: scoreColor(b.score) }}>{b.score}/100</strong></span>
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <Link href="/bookmycontainer/approvals" style={{ flex: 1, padding: "5px 0", background: "#2563EB", color: "white", border: "none", borderRadius: 4, fontSize: 11, fontWeight: 600, cursor: "pointer", textAlign: "center", textDecoration: "none" }}>Review</Link>
                      <button style={{ flex: 1, padding: "5px 0", background: "#DC2626", color: "white", border: "none", borderRadius: 4, fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Reject</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Alerts */}
            <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E2E8F0", overflow: "hidden" }}>
              <div style={{ padding: "14px 16px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>AI Alerts</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#DC2626", background: "#FEE2E2", borderRadius: 10, padding: "2px 8px" }}>4 Active</span>
              </div>
              <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                {ALERTS.map((a, i) => (
                  <div key={i} style={{
                    padding: 10, borderRadius: 6,
                    background: a.type === "danger" ? "#FEF2F2" : a.type === "warning" ? "#FFFBEB" : "#EFF6FF",
                    border: `1px solid ${a.type === "danger" ? "#FECACA" : a.type === "warning" ? "#FDE68A" : "#BFDBFE"}`,
                  }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <a.Icon size={14} color={a.type === "danger" ? "#DC2626" : a.type === "warning" ? "#F59E0B" : "#2563EB"} style={{ flexShrink: 0, marginTop: 1 }} />
                      <div>
                        <div style={{ fontSize: 11, color: "#1E293B", lineHeight: 1.4, marginBottom: 3 }}>{a.text}</div>
                        <div style={{ fontSize: 10, color: "#94A3B8" }}>{a.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
