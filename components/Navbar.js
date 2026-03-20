"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px",
      backdropFilter: "blur(20px)",
      background: "rgba(8,8,8,0.85)",
      borderBottom: "1px solid var(--border)",
    }}>
      <Link href="/" style={{
        fontFamily: "var(--font-mono)",
        fontSize: "14px",
        color: "var(--accent)",
        letterSpacing: "0.05em",
      }}>
        &gt; friedeee.dev
      </Link>

      <div style={{ display: "flex", gap: "32px" }}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: pathname === href ? "var(--accent)" : "var(--muted)",
            transition: "color 0.2s",
            borderBottom: pathname === href ? "1px solid var(--accent)" : "none",
            paddingBottom: "2px",
          }}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}