import BlogCard from "@/components/BlogCard";

async function getArticles() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6", {
      next: { revalidate: 3600 }, // ✅ Cache 1h au lieu de refetch à chaque visite
    });

    if (!res.ok) throw new Error("Erreur de chargement");
    return await res.json();
  } catch {
    return null; // ✅ Gestion d'erreur propre
  }
}

export default async function Blog() {
  const articles = await getArticles();

  return (
    <>
      <style>{`
        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .blog-hero > * {
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }
        .blog-hero > *:nth-child(1) { animation-delay: 0.05s; }
        .blog-hero > *:nth-child(2) { animation-delay: 0.15s; }
        .blog-hero > *:nth-child(3) { animation-delay: 0.25s; }

        /* ── Header meta ── */
        .blog-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 80px;
        }
        .blog-count {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.1em;
          padding: 6px 14px;
          border: 1px solid var(--border);
        }

        /* ── Liste des articles ── */
        .blog-list {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: var(--border);
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.35s;
          opacity: 0;
        }

        /* ── État d'erreur ── */
        .blog-error {
          padding: 64px 32px;
          text-align: center;
          border: 1px solid var(--border);
          background: var(--bg-card);
        }
        .blog-error-code {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #e05c5c;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .blog-error-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .blog-error-desc {
          font-size: 14px;
          color: var(--muted);
        }
      `}</style>

      <main style={{ paddingTop: "140px", padding: "140px 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── HERO ── */}
        <div className="blog-hero">
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--accent)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            &gt; ./articles
          </p>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}>
            Blog
          </h1>

          <div className="blog-meta">
            <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "480px", lineHeight: 1.7 }}>
              Pensées, tutoriels et retours d'expérience sur le développement web.
            </p>

            {/* ✅ Compteur d'articles */}
            {articles && (
              <span className="blog-count">
                {articles.length} article{articles.length > 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>

        {/* ── LISTE ou ERREUR ── */}
        {articles ? (
          <div className="blog-list">
            {articles.map((article, i) => (
              <BlogCard key={article.id} article={article} index={i} />
            ))}
          </div>
        ) : (
          // ✅ État d'erreur affiché proprement
          <div className="blog-error">
            <p className="blog-error-code">&gt; erreur_réseau</p>
            <h2 className="blog-error-title">Impossible de charger les articles</h2>
            <p className="blog-error-desc">Vérifie ta connexion et réessaie.</p>
          </div>
        )}

      </main>
    </>
  );
}