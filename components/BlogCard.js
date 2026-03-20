import Link from "next/link";

export default function BlogCard({ article, index }) {
  return (
    <>
      <style>{`
        .blog-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 28px 24px;
          background: var(--bg-card);
          text-decoration: none;
          color: var(--text);
          border-bottom: 1px solid var(--border);
          transition: background 0.2s, padding-left 0.2s;
          position: relative;
          overflow: hidden;
        }

        /* Barre accent au hover (gauche) */
        .blog-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--accent);
          transform: scaleY(0);
          transition: transform 0.2s ease;
        }
        .blog-card:hover::before {
          transform: scaleY(1);
        }
        .blog-card:hover {
          background: color-mix(in srgb, var(--bg-card) 80%, var(--accent) 5%);
          padding-left: 32px;
        }

        /* Numéro */
        .blog-card-index {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          min-width: 24px;
          flex-shrink: 0;
        }

        /* Contenu principal */
        .blog-card-body {
          flex: 1;
          min-width: 0; /* ✅ permet l'ellipsis dans un flex container */
        }

        .blog-card-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 6px;
          /* ✅ Troncature CSS — propre, préserve les mots */
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .blog-card-excerpt {
          font-size: 13px;
          color: var(--muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Meta : date + temps de lecture */
        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
        }
        .blog-card-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          padding: 2px 8px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          flex-shrink: 0;
        }
        .blog-card-date {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
        }

        /* Flèche animée */
        .blog-card-arrow {
          font-size: 18px;
          color: var(--muted);
          flex-shrink: 0;
          transition: transform 0.2s, color 0.2s;
        }
        .blog-card:hover .blog-card-arrow {
          transform: translateX(6px);
          color: var(--accent);
        }

        /* Focus accessibilité */
        .blog-card:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: -2px;
        }
      `}</style>

      <Link href={`/blog/${article.id}`} className="blog-card">

        {/* Numéro */}
        <span className="blog-card-index">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Contenu */}
        <div className="blog-card-body">
          {/* ✅ Plus de slice() — l'ellipsis CSS gère la troncature */}
          <h2 className="blog-card-title">{article.title}</h2>
          <p className="blog-card-excerpt">{article.body}</p>

          <div className="blog-card-meta">
            {/* ✅ Affiche le tag/catégorie si disponible */}
            {article.tag && (
              <span className="blog-card-tag">{article.tag}</span>
            )}
            {/* ✅ Affiche la date si disponible */}
            {article.date && (
              <span className="blog-card-date">{article.date}</span>
            )}
            {/* ✅ Temps de lecture estimé */}
            {article.body && (
              <span className="blog-card-date">
                {Math.max(1, Math.ceil(article.body.split(" ").length / 200))} min de lecture
              </span>
            )}
          </div>
        </div>

        {/* Flèche animée */}
        <span className="blog-card-arrow">→</span>

      </Link>
    </>
  );
}