export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 700 }}>{project.title}</h3>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--accent)",
            border: "1px solid var(--accent)",
            padding: "2px 8px",
          }}>
            {project.year}
          </span>
        </div>
        <p style={{ color: "var(--muted)", fontSize: "15px", maxWidth: "500px" }}>
          {project.desc}
        </p>
      </div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
        {project.stack.map(tech => (
          <span key={tech} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--muted)",
            padding: "4px 10px",
            background: "var(--accent-dim)",
          }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}