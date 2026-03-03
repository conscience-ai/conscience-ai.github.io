"use client";
import { useState } from "react";
import { Bell, Download, FileText, TrendingUp, Package, Activity, BarChart3, ChevronDown } from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  BarChart, Bar, Cell,
} from "recharts";
import { Sidebar } from "../components/Sidebar";

const TABS = ["Voyage Performance", "Port-wise Revenue", "Customer P&L", "Capacity Trends", "Risk & Compliance"];

const REVENUE_DATA = [
  { month: "Jan 25", A: 58, B: 32 },
  { month: "Feb 25", A: 63, B: 38 },
  { month: "Mar 25", A: 71, B: 42 },
  { month: "Apr 25", A: 68, B: 40 },
  { month: "May 25", A: 75, B: 45 },
  { month: "Jun 25", A: 79, B: 48 },
  { month: "Jul 25", A: 82, B: 51 },
  { month: "Aug 25", A: 86, B: 55 },
  { month: "Sep 25", A: 80, B: 50 },
  { month: "Oct 25", A: 89, B: 58 },
  { month: "Nov 25", A: 91, B: 62 },
  { month: "Dec 25", A: 88, B: 60 },
  { month: "Jan 26", A: 93, B: 65 },
  { month: "Feb 26", A: 94.6, B: 67 },
];

const PORT_DATA = [
  { port: "Mumbai",  rev: 38.2 },
  { port: "JNPT",   rev: 24.8 },
  { port: "Chennai", rev: 18.1 },
  { port: "Kandla",  rev: 13.5 },
];

const PORT_COLORS = ["#2563EB", "#34D399", "#F59E0B", "#94A3B8"];

const VOYAGE_TABLE = [
  { voyage: "SCI-MUM-DXB-204", teu: 624, rev: "₹4.82 Cr", margin: "18.4%", util: 78, mc: "#16A34A" },
  { voyage: "SCI-CHE-SIN-211", teu: 510, rev: "₹3.91 Cr", margin: "21.2%", util: 85, mc: "#16A34A" },
  { voyage: "SCI-JNPT-COL-198",teu: 448, rev: "₹3.44 Cr", margin: "22.1%", util: 93, mc: "#16A34A" },
  { voyage: "SCI-KAN-ABD-187", teu: 372, rev: "₹2.86 Cr", margin: "9.4%",  util: 62, mc: "#DC2626" },
  { voyage: "SCI-MUM-DXB-202", teu: 580, rev: "₹4.47 Cr", margin: "14.8%", util: 72, mc: "#F59E0B" },
];

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F0F2F5" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* Top bar */}
        <div style={{ height: 60, background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: "#1E293B", flex: 1, margin: 0 }}>Reports & Analytics</h1>
          {/* Date range */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 6, padding: "6px 12px", fontSize: 12, color: "#64748B", cursor: "pointer" }}>
            <span>01 Feb 2026 – 03 Mar 2026</span>
            <ChevronDown size={13} color="#94A3B8" />
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 14px", height: 36, background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 6, fontSize: 13, color: "#64748B", cursor: "pointer" }}>
            <FileText size={14} /> Export PDF
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 14px", height: 36, background: "#1A3A5C", border: "none", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "white", cursor: "pointer" }}>
            <Download size={14} /> SAP Export
          </button>
          <button style={{ width: 44, height: 44, border: "1px solid #E2E8F0", borderRadius: 8, background: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <Bell size={18} color="#64748B" />
            <span style={{ position: "absolute", top: 9, right: 9, width: 8, height: 8, background: "#DC2626", borderRadius: "50%" }} />
          </button>
        </div>

        {/* Tabs */}
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "0 24px", display: "flex", gap: 0 }}>
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "12px 16px", border: "none", background: "transparent", cursor: "pointer",
                fontSize: 13, fontWeight: activeTab === i ? 700 : 400,
                color: activeTab === i ? "#2563EB" : "#64748B",
                borderBottom: activeTab === i ? "3px solid #2563EB" : "3px solid transparent",
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: 24, overflowY: "auto" }}>

          {/* KPI row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 20 }}>
            {[
              { label: "TOTAL REVENUE",      value: "₹94.6 Cr", delta: "+12.4%", Icon: TrendingUp, ib: "#DCFCE7", ic: "#16A34A", pos: true },
              { label: "TOTAL TEU",          value: "24,180",   delta: "+8.2%",  Icon: Package,    ib: "#DBEAFE", ic: "#2563EB", pos: true },
              { label: "AVG UTILIZATION",    value: "74.8%",    delta: "+3.1%",  Icon: Activity,   ib: "#FEF3C7", ic: "#F59E0B", pos: true },
              { label: "AVG MARGIN",         value: "17.3%",    delta: "-0.4%",  Icon: BarChart3,  ib: "#FEE2E2", ic: "#DC2626", pos: false },
            ].map((k) => (
              <div key={k.label} style={{ background: "#FFFFFF", borderRadius: 8, padding: 18, border: "1px solid #E2E8F0" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#64748B", letterSpacing: 0.6, textTransform: "uppercase" }}>{k.label}</span>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: k.ib, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <k.Icon size={16} color={k.ic} />
                  </div>
                </div>
                <div style={{ fontSize: 26, fontWeight: 700, color: "#1E293B", marginBottom: 4 }}>{k.value}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: k.pos ? "#16A34A" : "#DC2626" }}>
                  {k.delta} vs prev period
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 16, marginBottom: 16 }}>

            {/* Revenue trend */}
            <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E2E8F0", padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>Revenue Trend — Feb 2025–Feb 2026</div>
                  <div style={{ fontSize: 11, color: "#64748B" }}>Monthly revenue in ₹ Cr</div>
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ width: 12, height: 3, background: "#2563EB", display: "inline-block" }} />
                    <span style={{ fontSize: 11, color: "#64748B" }}>Voyage Route A</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ width: 12, height: 3, background: "#34D399", display: "inline-block" }} />
                    <span style={{ fontSize: 11, color: "#64748B" }}>Voyage Route B</span>
                  </div>
                </div>
              </div>
              <div style={{ height: 240 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={REVENUE_DATA} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#94A3B8" }} tickLine={false} axisLine={false} interval={1} />
                    <YAxis tick={{ fontSize: 10, fill: "#94A3B8" }} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}`} />
                    <Tooltip formatter={(v: number) => [`₹${v} Cr`, ""]} />
                    <Line type="monotone" dataKey="A" stroke="#2563EB" strokeWidth={2.5} dot={false} />
                    <Line type="monotone" dataKey="B" stroke="#34D399" strokeWidth={2.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top ports */}
            <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E2E8F0", padding: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", marginBottom: 4 }}>Top Ports by Revenue</div>
              <div style={{ fontSize: 11, color: "#64748B", marginBottom: 16 }}>Feb 2025–Feb 2026</div>
              <div style={{ height: 180 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PORT_DATA} layout="vertical" margin={{ top: 0, right: 30, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" horizontal={false} />
                    <XAxis type="number" tick={{ fontSize: 10, fill: "#94A3B8" }} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}Cr`} />
                    <YAxis type="category" dataKey="port" tick={{ fontSize: 12, fill: "#1E293B", fontWeight: 600 }} tickLine={false} axisLine={false} width={60} />
                    <Tooltip formatter={(v: number) => [`₹${v} Cr`, "Revenue"]} />
                    <Bar dataKey="rev" radius={[0, 4, 4, 0]} barSize={22}>
                      {PORT_DATA.map((_, i) => <Cell key={i} fill={PORT_COLORS[i]} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div style={{ marginTop: 12 }}>
                {PORT_DATA.map((p, i) => (
                  <div key={p.port} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ width: 10, height: 10, background: PORT_COLORS[i], borderRadius: 2, flexShrink: 0 }} />
                    <span style={{ flex: 1, fontSize: 12, color: "#64748B" }}>{p.port}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#1E293B" }}>₹{p.rev} Cr</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Voyage performance table */}
          <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E2E8F0", overflow: "hidden" }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid #E2E8F0" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>Voyage Performance Detail</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#F8FAFC" }}>
                  {["VOYAGE", "TEU BOOKED", "REVENUE", "MARGIN", "UTILIZATION"].map((h) => (
                    <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontSize: 11, fontWeight: 600, color: "#94A3B8", letterSpacing: 0.6, borderBottom: "1px solid #E2E8F0" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {VOYAGE_TABLE.map((v, i) => (
                  <tr key={v.voyage} style={{ borderBottom: i < VOYAGE_TABLE.length - 1 ? "1px solid #F1F5F9" : "none" }}>
                    <td style={{ padding: "12px 16px", fontSize: 12, fontWeight: 700, color: "#1E293B" }}>{v.voyage}</td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: "#64748B" }}>{v.teu}</td>
                    <td style={{ padding: "12px 16px", fontSize: 12, fontWeight: 600, color: "#1E293B" }}>{v.rev}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: v.mc }}>{v.margin}</span>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 80, height: 6, background: "#E2E8F0", borderRadius: 3 }}>
                          <div style={{ width: `${v.util}%`, height: "100%", background: v.util > 80 ? "#16A34A" : v.util > 65 ? "#F59E0B" : "#DC2626", borderRadius: 3 }} />
                        </div>
                        <span style={{ fontSize: 11, color: "#64748B" }}>{v.util}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
