import Link from "next/link";
import { notFound } from "next/navigation";

async function getArticle(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: { revalidate: 3600 }, // ✅ Cache 1h
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// ✅ Métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const article = await getArticle(id);
  if (!article) return { title: "Article introuvable" };
  return {
    title: article.title,
    description: article.body.slice(0, 150),
  };
}

export default async function ArticleDetail({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  // ✅ Redirige vers 404 si l'article n'existe pas
  if (!article) notFound();

  // Temps de lecture estimé
  const readingTime = Math.max(1, Math.ceil(article.body.split(" ").length / 200));

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .article-wrap > * {
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }
        .article-wrap > *:nth-child(1) { animation-delay: 0.05s; }
        .article-wrap > *:nth-child(2) { animation-delay: 0.15s; }
        .article-wrap > *:nth-child(3) { animation-delay: 0.25s; }
        .article-wrap > *:nth-child(4) { animation-delay: 0.35s; }
        .article-wrap > *:nth-child(5) { animation-delay: 0.45s; }

        /* ── Lien retour ── */
        .back-link {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: color 0.2s, gap 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .back-link:hover {
          color: var(--accent);
          gap: 12px;
        }
        .back-arrow {
          transition: transform 0.2s;
        }
        .back-link:hover .back-arrow {
          transform: translateX(-4px);
        }

        /* ── Meta bar ── */
        .article-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .meta-pill {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          border: 1px solid var(--border);
          padding: 4px 12px;
          letter-spacing: 0.08em;
        }
        .meta-pill.accent {
          color: var(--accent);
          border-color: color-mix(in srgb, var(--accent) 30%, transparent);
          background: color-mix(in srgb, var(--accent) 8%, transparent);
        }

        /* ── Corps de l'article ── */
        .article-body {
          font-size: 17px;
          color: var(--muted);
          line-height: 2;
          padding-top: 40px;
          border-top: 1px solid var(--border);
        }

        /* ── Footer article ── */
        .article-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 48px;
          border-top: 1px solid var(--border);
          margin-top: 64px;
        }
        .nav-link {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link:hover { color: var(--accent); }
      `}</style>

      <main style={{ padding: "140px 40px 80px", maxWidth: "720px", margin: "0 auto" }}>
        <div className="article-wrap">

          {/* ── Lien retour ── */}
          <Link href="/blog" className="back-link" style={{ marginBottom: "48px", display: "inline-flex" }}>
            <span className="back-arrow">←</span> Retour au blog
          </Link>

          {/* ── Meta ── */}
          <div className="article-meta">
            <span className="meta-pill accent">Article #{article.id}</span>
            <span className="meta-pill">{readingTime} min de lecture</span>
          </div>

          {/* ── Titre ── */}
          {/* ✅ textTransform capitalize supprimé */}
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}>
            {article.title}
          </h1>

          {/* ── Barre déco ── */}
          <div style={{ height: "2px", width: "60px", background: "var(--accent)" }} />

          {/* ── Corps ── */}
          <p className="article-body">{article.body}</p>

        </div>

        {/* ── Navigation prev / next ── */}
        <div className="article-footer">
          {article.id > 1 && (
            <Link href={`/blog/${article.id - 1}`} className="nav-link">
              <span>←</span> Article précédent
            </Link>
          )}
          {article.id < 100 && (
            <Link href={`/blog/${article.id + 1}`} className="nav-link" style={{ marginLeft: "auto" }}>
              Article suivant <span>→</span>
            </Link>
          )}
        </div>

      </main>
    </>
  );
}