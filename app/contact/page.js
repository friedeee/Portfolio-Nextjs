import CopyEmailButton from "@/components/CopyEmailButton";

export default function Contact() {
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
        &gt; ping me
      </p>

      <h1 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "48px" }}>
        Parlons de<br />
        <span style={{ color: "var(--accent)" }}>ton projet.</span>
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1px",
        background: "var(--border)",
        maxWidth: "600px",
      }}>
        {[
          { label: "Email", value: "botonkpdt@gmail.com", copy: true },
          { label: "GitHub", value: "github.com/friedeee" },
          { label: "LinkedIn", value: "linkedin.com/in/elfriede-boton" },
          { label: "Localisation", value: "Cotonou, Bénin" },
        ].map((item) => (
          <div key={item.label} style={{
            background: "var(--bg-card)",
            padding: "28px",
          }}>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "8px",
            }}>
              {item.label}
            </p>
            <p style={{ fontSize: "15px", fontWeight: 600 }}>{item.value}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "48px" }}>
        <CopyEmailButton />
      </div>

    </main>
  );
}