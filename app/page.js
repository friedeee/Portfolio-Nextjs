import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
const skills = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"];

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
  return (
    <main style={{ paddingTop: "100px" }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--accent)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "24px",
        }}>
          &gt; Disponible pour des missions
        </p>

        <h1 style={{
          fontSize: "clamp(52px, 8vw, 100px)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
          marginBottom: "32px",
        }}>
          Développeur<br />
          <span style={{ color: "var(--accent)" }}>Full Stack.</span>
        </h1>

        <p style={{
          fontSize: "18px",
          color: "var(--muted)",
          maxWidth: "520px",
          lineHeight: 1.8,
          marginBottom: "48px",
        }}>
          Je crée des applications web rapides, accessibles et bien pensées.
          Passionné par le code propre et les interfaces qui ont du sens.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Link href="/about" style={{
          display: "inline-block",
          padding: "14px 32px",
          background: "var(--accent)",
          color: "#000",
          fontWeight: 700,
          fontSize: "14px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}>
          Me découvrir →
        </Link>

        <Link href="/blog" style={{
          display: "inline-block",
          padding: "14px 32px",
          background: "transparent",
          color: "var(--text)",
          fontWeight: 700,
          fontSize: "14px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          border: "1px solid var(--border)",
          cursor: "pointer",
        }}>
          Voir le blog
        </Link>
      </div>
      </section>

      {/* ── SKILLS ── */}
      <section style={{
        padding: "80px 40px",
        borderTop: "1px solid var(--border)",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "32px",
        }}>
          Stack technique
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {skills.map((skill) => (
            <span key={skill} style={{
              padding: "8px 20px",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--muted)",
              background: "var(--bg-card)",
              letterSpacing: "0.05em",
            }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section style={{
        padding: "80px 40px",
        borderTop: "1px solid var(--border)",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "48px",
        }}>
          Projets sélectionnés
        </p>

        {/* ✅ ProjectCard gère le hover en CSS — pas d'event handlers ici */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section style={{
        padding: "120px 40px",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, marginBottom: "24px" }}>
          Un projet en tête ?
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "40px", fontSize: "17px" }}>
          Je suis ouvert aux opportunités — freelance, CDI, collaboration.
        </p>
        <Link href="/contact" style={{
        display: "inline-block",
        padding: "16px 48px",
        background: "var(--accent)",
        color: "#000",
        fontWeight: 700,
        fontSize: "15px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}>
        Me contacter →
      </Link>
      </section>

    </main>
  );
}