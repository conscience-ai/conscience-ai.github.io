"use client";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Clock, Anchor, Gauge, Package, Thermometer, AlertTriangle, Brain } from "lucide-react";
import { Sidebar } from "../components/Sidebar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PIE_DATA = [
  { name: "TEL Exports",   value: 32, color: "#2563EB" },
  { name: "TCI Global",    value: 21, color: "#34D399" },
  { name: "Reliance Ind.", value: 20, color: "#F59E0B" },
  { name: "Others",        value: 27, color: "#94A3B8" },
];

const CARGO_BARS = [
  { label: "Dry General", pct: 52, color: "#2563EB" },
  { label: "Reefer",      pct: 28, color: "#34D399" },
  { label: "Hazardous",   pct: 12, color: "#F59E0B" },
  { label: "Out of Gauge",pct: 8,  color: "#E2E8F0" },
];

const STATS = [
  { label: "VOYAGE ID",       value: "SCI-MUM-DXB-204" },
  { label: "VESSEL",          value: "MV Vikrant" },
  { label: "ROUTE",           value: "Mumbai → Dubai" },
  { label: "DEPARTURE",       value: "08 Mar 2026, 06:00" },
  { label: "ETA DUBAI",       value: "14 Mar 2026, 14:00" },
  { label: "SPEED",           value: "14.2 knots" },
  { label: "POSITION",        value: "20.4°N, 63.8°E" },
  { label: "LAST UPDATE",     value: "03 Mar 2026, 09:42" },
];

export default function VoyagesPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F0F2F5" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* Top bar */}
        <div style={{ height: 60, background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", padding: "0 24px", gap: 12, flexShrink: 0 }}>
          <Link href="/bookmycontainer/dashboard" style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #E2E8F0", borderRadius: 8, color: "#64748B", textDecoration: "none" }}>
            <ArrowLeft size={16} />
          </Link>
          <div style={{ flex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#94A3B8", marginBottom: 2 }}>
              <Link href="/bookmycontainer/dashboard" style={{ color: "#94A3B8", textDecoration: "none" }}>Dashboard</Link>
              <ChevronRight size={10} />
              <span style={{ color: "#64748B" }}>Active Voyages</span>
              <ChevronRight size={10} />
              <span style={{ color: "#1E293B" }}>MV Vikrant</span>
            </div>
            <h1 style={{ fontSize: 16, fontWeight: 700, color: "#1E293B", margin: 0 }}>MV Vikrant — SCI-MUM-DXB-204</h1>
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#16A34A", background: "#DCFCE7", borderRadius: 4, padding: "4px 10px" }}>● On Schedule</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#F0F2F5", borderRadius: 6, padding: "6px 12px", fontSize: 12, color: "#64748B" }}>
            <Clock size={13} />
            ETA: 14 Mar 2026, 14:00
          </div>
        </div>

        {/* Main 3-column */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* Left panel — voyage stats */}
          <div style={{ width: 280, background: "#FFFFFF", borderRight: "1px solid #E2E8F0", overflowY: "auto", flexShrink: 0 }}>
            <div style={{ padding: "16px 16px 0" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#1E293B", marginBottom: 12 }}>Voyage Overview</div>
              {STATS.map((s) => (
                <div key={s.label} style={{ padding: "8px 0", borderBottom: "1px solid #F1F5F9" }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "#94A3B8", letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#1E293B" }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Utilization */}
            <div style={{ padding: 16, borderBottom: "1px solid #F1F5F9" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#64748B" }}>Capacity Utilization</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>78%</span>
              </div>
              <div style={{ height: 8, background: "#E2E8F0", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: "78%", height: "100%", background: "#2563EB", borderRadius: 4 }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                <span style={{ fontSize: 10, color: "#94A3B8" }}>624 / 800 TEU booked</span>
                <span style={{ fontSize: 10, color: "#94A3B8" }}>176 available</span>
              </div>
            </div>

            {/* AI Suggestions */}
            <div style={{ padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                <Brain size={13} color="#2563EB" />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#1E293B" }}>AI Suggestions</span>
              </div>
              {[
                { text: "Release 50 TEU to waitlist — 3 pre-approved bookings waiting", type: "info" },
                { text: "Weather advisory: Moderate swells near Oman coast on 10 Mar", type: "warn" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "8px 10px", borderRadius: 6, marginBottom: 8,
                  background: s.type === "warn" ? "#FFFBEB" : "#EFF6FF",
                  border: `1px solid ${s.type === "warn" ? "#FDE68A" : "#BFDBFE"}`,
                  fontSize: 11, color: "#1E293B", lineHeight: 1.4,
                }}>
                  {s.text}
                </div>
              ))}
            </div>
          </div>

          {/* Center — AIS map */}
          <div style={{ flex: 1, background: "#0F1B2D", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #1E3A5F" }}>
              <span style={{ color: "#A8C4E0", fontSize: 12, fontWeight: 600 }}>AIS Live Tracking</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 7, height: 7, background: "#16A34A", borderRadius: "50%", display: "inline-block" }} />
                <span style={{ color: "#5B8DB8", fontSize: 11 }}>Live — Last updated 3m ago</span>
              </div>
            </div>
            <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
              {/* SVG mock map */}
              <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
                {/* Ocean base */}
                <rect width="100%" height="100%" fill="#0F1B2D" />
                {/* Grid lines */}
                {[10,20,30,40,50,60,70,80,90].map(p => (
                  <line key={`h${p}`} x1="0" y1={`${p}%`} x2="100%" y2={`${p}%`} stroke="#1A2E45" strokeWidth="0.5" />
                ))}
                {[10,20,30,40,50,60,70,80,90].map(p => (
                  <line key={`v${p}`} x1={`${p}%`} y1="0" x2={`${p}%`} y2="100%" stroke="#1A2E45" strokeWidth="0.5" />
                ))}
                {/* Land masses (simplified India/Arabia) */}
                <path d="M 0 40% L 8% 35% L 12% 45% L 10% 60% L 14% 65% L 16% 80% L 12% 90% L 0 90% Z" fill="#1A3A5C" opacity="0.6" />
                <path d="M 0 0 L 18% 0 L 20% 20% L 14% 30% L 10% 25% L 4% 30% L 0 25% Z" fill="#1A3A5C" opacity="0.6" />
                {/* Route line */}
                <path d="M 14% 72% Q 40% 55% 75% 35%" stroke="#2563EB" strokeWidth="2" fill="none" strokeDasharray="6,4" opacity="0.8" />
                {/* Completed route */}
                <path d="M 14% 72% Q 27% 64% 38% 57%" stroke="#2563EB" strokeWidth="2.5" fill="none" opacity="1" />
                {/* Origin dot */}
                <circle cx="14%" cy="72%" r="6" fill="#2563EB" opacity="0.8" />
                <text x="14%" y="68%" fill="#A8C4E0" fontSize="9" textAnchor="middle">Mumbai</text>
                {/* Destination dot */}
                <circle cx="75%" cy="35%" r="6" fill="#64748B" opacity="0.6" />
                <text x="75%" y="30%" fill="#A8C4E0" fontSize="9" textAnchor="middle">Dubai</text>
                {/* Vessel position */}
                <circle cx="38%" cy="57%" r="10" fill="none" stroke="#F59E0B" strokeWidth="2" opacity="0.6" />
                <circle cx="38%" cy="57%" r="5" fill="#F59E0B" />
                <text x="42%" y="52%" fill="#F59E0B" fontSize="9" fontWeight="bold">MV Vikrant</text>
                {/* Speed vector */}
                <line x1="38%" y1="57%" x2="44%" y2="53%" stroke="#F59E0B" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.7" />
                <defs>
                  <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <path d="M 0 0 L 6 3 L 0 6 Z" fill="#F59E0B" />
                  </marker>
                </defs>
              </svg>

              {/* Overlay stats */}
              <div style={{ position: "absolute", bottom: 16, left: 16, display: "flex", gap: 10 }}>
                {[
                  { icon: Gauge,       label: "Speed",  val: "14.2 kn" },
                  { icon: Anchor,      label: "Heading",val: "NE 42°" },
                  { icon: Package,     label: "Draft",  val: "9.4m" },
                ].map((s) => (
                  <div key={s.label} style={{ background: "rgba(15,27,45,0.85)", border: "1px solid #1E3A5F", borderRadius: 6, padding: "6px 10px", display: "flex", alignItems: "center", gap: 6 }}>
                    <s.icon size={12} color="#5B8DB8" />
                    <span style={{ fontSize: 10, color: "#5B8DB8" }}>{s.label}:</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#FFFFFF" }}>{s.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel — charts */}
          <div style={{ width: 300, background: "#FFFFFF", borderLeft: "1px solid #E2E8F0", overflowY: "auto", flexShrink: 0, padding: 16 }}>

            {/* TEU by Customer */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#1E293B", marginBottom: 12 }}>TEU by Customer</div>
              <div style={{ height: 160 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={2} dataKey="value">
                      {PIE_DATA.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    </Pie>
                    <Tooltip formatter={(v) => `${v}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              {PIE_DATA.map((d) => (
                <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ width: 10, height: 10, background: d.color, borderRadius: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: "#64748B", flex: 1 }}>{d.name}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#1E293B" }}>{d.value}%</span>
                </div>
              ))}
            </div>

            {/* Cargo type */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#1E293B", marginBottom: 12 }}>Cargo Type Breakdown</div>
              {CARGO_BARS.map((c) => (
                <div key={c.label} style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 11, color: "#64748B", display: "flex", alignItems: "center", gap: 5 }}>
                      {c.label === "Reefer" && <Thermometer size={11} color="#34D399" />}
                      {c.label === "Hazardous" && <AlertTriangle size={11} color="#F59E0B" />}
                      {c.label}
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#1E293B" }}>{c.pct}%</span>
                  </div>
                  <div style={{ height: 6, background: "#E2E8F0", borderRadius: 3 }}>
                    <div style={{ width: `${c.pct}%`, height: "100%", background: c.color, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Containers by port */}
            <div style={{ marginTop: 20, padding: "12px 0", borderTop: "1px solid #E2E8F0" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#1E293B", marginBottom: 10 }}>Container Count</div>
              {[
                { label: "20ft Standard", count: 180 },
                { label: "40ft Standard", count: 100 },
                { label: "40ft Reefer",   count: 56 },
                { label: "40ft IMO",      count: 24 },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: 11, color: "#64748B" }}>{c.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#1E293B" }}>{c.count} units</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
