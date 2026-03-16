const experiences = [
  {
    role: "Développeur Full Stack",
    company: "Startup XYZ",
    period: "2023 — Présent",
    desc: "Développement de features front et back, revue de code, CI/CD.",
  },
  {
    role: "Développeur Front-End",
    company: "Agence ABC",
    period: "2022 — 2023",
    desc: "Intégration de maquettes, optimisation des performances, SEO.",
  },
];

export default function About() {
  return (
    <main style={{ paddingTop: "140px", padding: "140px 40px 80px", maxWidth: "900px", margin: "0 auto" }}>

      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--accent)",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: "24px",
      }}>
        &gt; whoami
      </p>

      <h1 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "40px" }}>
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
        J'aime autant le front-end que le back-end — l'important c'est que ça marche bien et que le code soit lisible.
      </p>

      {/* Expériences */}
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--muted)",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: "32px",
        borderTop: "1px solid var(--border)",
        paddingTop: "48px",
      }}>
        Expérience
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {experiences.map((exp, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "32px",
            paddingBottom: "32px",
            borderBottom: "1px solid var(--border)",
          }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent)", marginBottom: "4px" }}>
                {exp.period}
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted)" }}>{exp.company}</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{exp.role}</h3>
              <p style={{ color: "var(--muted)", fontSize: "15px" }}>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}