"use client";
import { useState } from "react";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("botonkpdt@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button onClick={handleCopy} style={{
      padding: "14px 36px",
      background: copied ? "var(--accent-dim)" : "transparent",
      color: copied ? "var(--accent)" : "var(--text)",
      border: `1px solid ${copied ? "var(--accent)" : "var(--border)"}`,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "14px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all 0.2s",
    }}>
      {copied ? "✓ Email copié !" : "Copier mon email"}
    </button>
  );
}