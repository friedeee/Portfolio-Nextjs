import CopyEmailButton from "@/components/CopyEmailButton";
import Link from "next/link";

const contacts = [
  {
    label: "Email",
    value: "botonkpdt@gmail.com",
    href: "mailto:botonkpdt@gmail.com",
    action: "copy", // géré par CopyEmailButton
  },
  {
    label: "GitHub",
    value: "github.com/friedeee",
    href: "https://github.com/friedeee",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/elfriede-boton",
    href: "https://linkedin.com/in/elfriede-boton",
    external: true,
  },
  {
    label: "Localisation",
    value: "Cotonou, Bénin 🇧🇯",
    href: null, // pas de lien
  },
];

export default function Contact() {
  return (
    <>
      <style>{`
        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .contact-hero > * {
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }
        .contact-hero > *:nth-child(1) { animation-delay: 0.05s; }
        .contact-hero > *:nth-child(2) { animation-delay: 0.2s; }
        .contact-hero > *:nth-child(3) { animation-delay: 0.35s; }

        /* ── Grid contacts ── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--border);
          max-width: 600px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.45s;
        }

        .contact-card {
          background: var(--bg-card);
          padding: 28px;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          color: var(--text);
          display: block;
          transition: background 0.2s;
        }

        /* Barre accent bas au hover */
        .contact-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .contact-card.clickable:hover::after { width: 100%; }
        .contact-card.clickable:hover { background: color-mix(in srgb, var(--bg-card) 85%, var(--accent) 5%); }
        .contact-card.clickable { cursor: pointer; }

        .contact-card-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 8px;
        }

        .contact-card-value {
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
          word-break: break-all;
        }
        .contact-card.clickable:hover .contact-card-value {
          color: var(--accent);
        }

        /* Petite flèche pour les liens externes */
        .ext-arrow {
          font-size: 12px;
          color: var(--muted);
          flex-shrink: 0;
          transition: color 0.2s, transform 0.2s;
        }
        .contact-card.clickable:hover .ext-arrow {
          color: var(--accent);
          transform: translate(2px, -2px);
        }

        /* ── Disponibilité ── */
        .availability-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px 28px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          max-width: 600px;
          margin-bottom: 48px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.3s;
        }
        .avail-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(0.85); }
        }
        .avail-text {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.05em;
        }
        .avail-text strong { color: var(--text); }

        /* ── Focus accessibilité ── */
        .contact-card:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: -2px;
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <main style={{ padding: "140px 40px 80px", maxWidth: "900px", margin: "0 auto" }}>

        {/* ── HERO ── */}
        <div className="contact-hero">
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--accent)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            &gt; contactez-moi
          </p>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}>
            Parlons de<br />
            <span style={{ color: "var(--accent)" }}>ton projet.</span>
          </h1>

          <p style={{
            fontSize: "16px",
            color: "var(--muted)",
            lineHeight: 1.8,
            maxWidth: "480px",
            marginBottom: "48px",
          }}>
            Que ce soit pour une mission, une collaboration ou juste un échange —
            je réponds généralement sous 24h.
          </p>
        </div>

        {/* ── Barre de disponibilité ── */}
        <div className="availability-bar">
          <span className="avail-dot" />
          <span className="avail-text">
            <strong>Disponible</strong> — Ouvert aux missions freelance & CDI
          </span>
        </div>

        {/* ── Grille de contacts ── */}
        <div className="contact-grid">
          {contacts.map((item) => {
            const isClickable = !!item.href;
            const Tag = item.external ? "a" : item.href ? Link : "div";
            const extraProps = item.external
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : item.href
              ? { href: item.href }
              : {};

            return (
              <Tag
                key={item.label}
                className={`contact-card ${isClickable ? "clickable" : ""}`}
                {...extraProps}
              >
                <p className="contact-card-label">{item.label}</p>
                <p className="contact-card-value">
                  {item.value}
                  {/* ✅ Flèche ↗ uniquement sur les liens externes */}
                  {item.external && <span className="ext-arrow">↗</span>}
                </p>
              </Tag>
            );
          })}
        </div>

        {/* ── Bouton copie email ── */}
        <div style={{ marginTop: "48px" }}>
          <CopyEmailButton />
        </div>

      </main>
    </>
  );
}