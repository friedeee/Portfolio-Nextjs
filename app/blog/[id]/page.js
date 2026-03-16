export default async function ArticleDetail({ params }) {
  const { id } = await params; // ← await ici !
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await res.json();

  return (
    <main style={{ paddingTop: "140px", padding: "140px 40px 80px", maxWidth: "720px", margin: "0 auto" }}>
      <a href="/blog" style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--accent)",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "48px",
        letterSpacing: "0.05em",
      }}>
        ← Retour au blog
      </a>

      <h1 style={{
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 800,
        lineHeight: 1.2,
        marginBottom: "32px",
        textTransform: "capitalize",
      }}>
        {article.title}
      </h1>

      <div style={{ height: "2px", width: "60px", background: "var(--accent)", marginBottom: "40px" }} />

      <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 2 }}>
        {article.body}
      </p>
    </main>
  );
}