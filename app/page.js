"use client";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const skills = [
  "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"
];

const projects = [
  {
    title: "Projet Alpha",
    desc: "Application web full-stack avec authentification et dashboard temps réel.",
    stack: ["Next.js", "Supabase", "Tailwind"],
    year: "2024",
  },
  {
    title: "Projet Beta",
    desc: "API REST avec système de cache et documentation Swagger auto-générée.",
    stack: ["Node.js", "Express", "Redis"],
    year: "2024",
  },
  {
    title: "Projet Gamma",
    desc: "CLI tool open-source pour automatiser les tâches répétitives de dev.",
    stack: ["TypeScript", "Node.js"],
    year: "2023",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .hero-badge {
          opacity: 0;
          animation: slideIn 0.5s ease forwards;
          animation-delay: 0.1s;
        }
        .hero-h1 {
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
          animation-delay: 0.25s;
        }
        .hero-sub {
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
          animation-delay: 0.45s;
        }
        .hero-cta {
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
          animation-delay: 0.6s;
        }

        .cursor {
          display: inline-block;
          animation: blink 1s step-end infinite;
          color: var(--accent);
          margin-left: 2px;
        }

        /* ── Boutons ── */
        .btn-primary {
          display: inline-block;
          padding: 14px 36px;
          background: var(--accent);
          color: #000;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          position: relative;
          overflow: hidden;
        }
        .btn-primary:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        .btn-outline {
          display: inline-block;
          padding: 14px 36px;
          background: transparent;
          color: var(--text);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1px solid var(--border);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .btn-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        /* ── Skills pill ── */
        .skill-pill {
          padding: 8px 20px;
          border: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          background: var(--bg-card);
          letter-spacing: 0.05em;
          transition: border-color 0.2s, color 0.2s;
          cursor: default;
        }
        .skill-pill:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ── Stat cards ── */
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          margin-top: 64px;
        }
        .stat-card {
          background: var(--bg-card);
          padding: 32px 24px;
          position: relative;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .stat-card:hover::before { width: 100%; }
        .stat-number {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-top: 8px;
        }

        /* ── Section labels ── */
        .section-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 40px;
        }
        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
          max-width: 120px;
        }

        /* ── CTA Section ── */
        .cta-section {
          padding: 120px 40px;
          border-top: 1px solid var(--border);
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 40px;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .stat-grid { grid-template-columns: 1fr; }
          .cta-section {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
        @media (max-width: 576px) {
          .hero-section { padding: 0 20px; }
          .skills-section, .projects-section { padding: 60px 20px; }
          .cta-section { padding: 80px 20px; }
        }
      `}</style>

      <main style={{ paddingTop: "100px" }}>

        {/* ── HERO ── */}
        <section className="hero-section" style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 40px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {/* Badge disponibilité */}
          <div className="hero-badge" style={{ marginBottom: "32px" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--accent)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
              <span style={{
                width: "6px", height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 8px var(--accent)",
                animation: "blink 2s ease-in-out infinite",
              }} />
              Disponible pour des missions
            </span>
          </div>

          {/* Titre */}
          <h1 className="hero-h1" style={{
            fontSize: "clamp(52px, 8vw, 100px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "32px",
          }}>
            Développeur<br />
            <span style={{ color: "var(--accent)" }}>Full Stack.</span>
            <span className="cursor">_</span>
          </h1>

          {/* Sous-titre */}
          <p className="hero-sub" style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "var(--muted)",
            maxWidth: "520px",
            lineHeight: 1.8,
            marginBottom: "48px",
          }}>
            Je crée des applications web rapides, accessibles et bien pensées.
            Passionné par le code propre et les interfaces qui ont du sens.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/about" className="btn-primary">Me découvrir →</Link>
            <Link href="/blog" className="btn-outline">Voir le blog</Link>
          </div>

          {/* Stats */}
          <div className="stat-grid">
            {[
              { number: "3+", label: "Ans d'expérience" },
              { number: "12+", label: "Projets livrés" },
              { number: "6",  label: "Technologies maîtrisées" },
            ].map(({ number, label }) => (
              <div key={label} className="stat-card">
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="skills-section" style={{
          padding: "80px 40px",
          borderTop: "1px solid var(--border)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          <div className="section-label">Stack technique</div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        {/* ── PROJETS ── */}
        <section className="projects-section" style={{
          padding: "80px 40px",
          borderTop: "1px solid var(--border)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          <div className="section-label">Projets sélectionnés</div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ borderTop: "1px solid var(--border)" }}>
          <div className="cta-section">
            <div>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}>
                Prochaine étape
              </p>
              <h2 style={{
                fontSize: "clamp(28px, 5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}>
                Un projet en tête ?
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "16px", maxWidth: "420px" }}>
                Ouvert aux missions freelance, CDI et collaborations. Répondre sous 24h.
              </p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ whiteSpace: "nowrap", fontSize: "14px", padding: "18px 48px" }}>
              Me contacter →
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}