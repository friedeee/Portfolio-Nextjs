import Link from "next/link";

export default function BlogCard({ article, index }) {
  return (
    <Link href={`/blog/${article.id}`} className="blog-card">
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--muted)",
          minWidth: "24px",
        }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h2 style={{ fontSize: "17px", fontWeight: 600, marginBottom: "4px", textTransform: "capitalize" }}>
            {article.title.slice(0, 55)}
          </h2>
          <p style={{ fontSize: "13px", color: "var(--muted)" }}>
            {article.body.slice(0, 80)}...
          </p>
        </div>
      </div>
      <span className="arrow">→</span>
    </Link>
  );
}