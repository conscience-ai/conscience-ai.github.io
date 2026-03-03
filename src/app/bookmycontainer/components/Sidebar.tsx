"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusCircle, Ship, ClipboardCheck, BarChart3, Settings, LogOut } from "lucide-react";

const NAV = [
  { href: "/bookmycontainer/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/bookmycontainer/new-booking", icon: PlusCircle, label: "New Booking" },
  { href: "/bookmycontainer/voyages", icon: Ship, label: "Active Voyages" },
  { href: "/bookmycontainer/approvals", icon: ClipboardCheck, label: "Approvals", badge: 23 },
  { href: "/bookmycontainer/reports", icon: BarChart3, label: "Reports" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{ width: 240, minHeight: "100vh", background: "#1A3A5C", display: "flex", flexDirection: "column", flexShrink: 0 }}>
      {/* Logo */}
      <div style={{ background: "#142D47", padding: "0 20px", height: 60, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, background: "#2563EB", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Ship size={17} color="white" />
        </div>
        <div>
          <div style={{ color: "#FFFFFF", fontSize: 13, fontWeight: 700, lineHeight: 1.2 }}>BookMyContainer</div>
          <div style={{ color: "#5B8DB8", fontSize: 10, letterSpacing: 1, textTransform: "uppercase" }}>SCI Edition</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "10px 0" }}>
        {NAV.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 16px", margin: "2px 8px", borderRadius: 6,
                background: active ? "#2563EB" : "transparent",
                color: active ? "#FFFFFF" : "#A8C4E0",
                textDecoration: "none", fontSize: 13, fontWeight: active ? 600 : 400,
              }}
            >
              <item.icon size={16} />
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.badge && (
                <span style={{
                  background: active ? "rgba(255,255,255,0.25)" : "#DC2626",
                  color: "white", borderRadius: 10, fontSize: 10, fontWeight: 700, padding: "1px 6px",
                }}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

        <div style={{ height: 1, background: "#1E3A5F", margin: "10px 16px" }} />

        <Link href="#" style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", margin: "2px 8px", borderRadius: 6, color: "#A8C4E0", textDecoration: "none", fontSize: 13 }}>
          <Settings size={16} />
          Settings
        </Link>
      </nav>

      {/* User */}
      <div style={{ padding: "12px 16px", borderTop: "1px solid #1E3A5F" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
            RS
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 600 }}>Rajesh Sharma</div>
            <div style={{ color: "#5B8DB8", fontSize: 11 }}>Senior Manager</div>
          </div>
          <LogOut size={14} color="#5B8DB8" style={{ cursor: "pointer", flexShrink: 0 }} />
        </div>
      </div>
    </aside>
  );
}
