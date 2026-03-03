"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookMyContainerRoot() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/bookmycontainer/dashboard");
  }, [router]);
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#F0F2F5" }}>
      <div style={{ color: "#64748B", fontSize: 13 }}>Loading BookMyContainer…</div>
    </div>
  );
}
