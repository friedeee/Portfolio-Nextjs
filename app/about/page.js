"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Développeur Front end",
    company: "Université d'Abomey Calavi",
    period: "Mars 2025 — Présent",
    desc: "Développement de features front, revue de code, CI/CD.",
    tags: ["React", "Node.js"],
    current: true,
  },
  {
    role: "Développeur Web",
    company: "Afritech",
    period: "2025",
    desc: "Intégration de maquettes, optimisation des performances.",
    tags: ["HTML","js", "CSS", "Figma"],
    current: false,
  },
  {
    role: "Développeur Web",
    company: "SEBADI INFORMATIQUE",
    period: "2024",
    desc: "Intégration de maquettes, optimisation des performances.",
    tags: ["HTML","Photoshop", "CSS", "Excel"],
    current: false,
  },
];

const values = [
  { icon: "⌥", label: "Code propre",    desc: "Lisible, maintenable, documenté." },
  { icon: "◈", label: "UX d'abord",     desc: "L'interface doit avoir du sens." },
  { icon: "⟳", label: "Amélioration continue", desc: "Toujours apprendre, itérer, progresser." },
];

export default function About() {
  const lineRef = useRef(null);

  /* Animation de la timeline au scroll */
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("line-animate"); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes growLine {
          from { height: 0; }
          to   { height: 100%; }
        }

        .about-hero > * {
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }
        .about-hero > *:nth-child(1) { animation-delay: 0.1s; }
        .about-hero > *:nth-child(2) { animation-delay: 0.25s; }
        .about-hero > *:nth-child(3) { animation-delay: 0.4s; }

        /* ── Section label ── */
        .section-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 48px;
          padding-top: 48px;
          border-top: 1px solid var(--border);
        }
        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
          max-width: 80px;
        }

        /* ── Values grid ── */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          margin-bottom: 80px;
        }
        .value-card {
          background: var(--bg-card);
          padding: 32px 24px;
          position: relative;
          overflow: hidden;
          transition: background 0.2s;
        }
        .value-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: var(--accent);
          transition: width 0.3s;
        }
        .value-card:hover::after { width: 100%; }
        .value-icon {
          font-size: 24px;
          color: var(--accent);
          margin-bottom: 16px;
          font-family: var(--font-mono);
        }
        .value-label {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .value-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.6;
        }

        /* ── Timeline ── */
        .timeline {
          position: relative;
          padding-left: 28px;
        }
        .timeline-line {
          position: absolute;
          left: 0; top: 8px;
          width: 1px;
          background: var(--border);
          height: 0;              /* animé via JS */
        }
        .timeline-line.line-animate {
          animation: growLine 1s ease forwards;
        }

        .exp-item {
          position: relative;
          padding-bottom: 48px;
        }
        .exp-item:last-child { padding-bottom: 0; }

        /* Dot sur la timeline */
        .exp-dot {
          position: absolute;
          left: -33px; top: 6px;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: var(--border);
          border: 2px solid var(--bg-card);
          transition: background 0.2s;
        }
        .exp-item.current .exp-dot {
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
        }

        .exp-header {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 24px;
          align-items: start;
        }

        .exp-period {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent);
          margin-bottom: 4px;
          letter-spacing: 0.05em;
        }
        .exp-company {
          font-size: 13px;
          color: var(--muted);
        }
        .exp-role {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .exp-desc {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 12px;
        }

        /* Tags de techno */
        .exp-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .exp-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--muted);
          border: 1px solid var(--border);
          padding: 3px 10px;
          letter-spacing: 0.05em;
          transition: border-color 0.2s, color 0.2s;
        }
        .exp-item:hover .exp-tag {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* Badge "En poste" */
        .badge-current {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          padding: 3px 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--accent);
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .values-grid { grid-template-columns: 1fr; }
          .exp-header  { grid-template-columns: 1fr; gap: 8px; }
        }
      `}</style>

      <main style={{ paddingTop: "140px", padding: "140px 40px 80px", maxWidth: "900px", margin: "0 auto" }}>

        {/* ── HERO ── */}
        <div className="about-hero">
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--accent)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            &gt; qui suis-je
          </p>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "40px",
          }}>
            Je construis des<br />
            <span style={{ color: "var(--accent)" }}>choses utiles.</span>
          </h1>

          <p style={{
            fontSize: "18px",
            color: "var(--muted)",
            lineHeight: 1.9,
            maxWidth: "640px",
            marginBottom: "80px",
          }}>
            Développeur web avec une passion pour les interfaces propres et les architectures bien pensées.
            J'aime autant le front-end que le back-end — l'important c'est que ça marche bien
            et que le code soit lisible.
          </p>
        </div>

        {/* ── VALEURS ── */}
        <div className="section-label">Ce qui me guide</div>
        <div className="values-grid">
          {values.map(({ icon, label, desc }) => (
            <div key={label} className="value-card">
              <div className="value-icon">{icon}</div>
              <div className="value-label">{label}</div>
              <div className="value-desc">{desc}</div>
            </div>
          ))}
        </div>

        {/* ── EXPÉRIENCES ── */}
        <div className="section-label">Expérience</div>

        <div className="timeline">
          {/* Ligne verticale animée */}
          <div className="timeline-line" ref={lineRef} />

          {experiences.map((exp, i) => (
            <div key={i} className={`exp-item ${exp.current ? "current" : ""}`}>
              <div className="exp-dot" />

              {exp.current && (
                <div className="badge-current">
                  <span className="badge-dot" />
                  En poste
                </div>
              )}

              <div className="exp-header">
                {/* Colonne gauche */}
                <div>
                  <p className="exp-period">{exp.period}</p>
                  <p className="exp-company">{exp.company}</p>
                </div>
                {/* Colonne droite */}
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-desc">{exp.desc}</p>
                  <div className="exp-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  );
}