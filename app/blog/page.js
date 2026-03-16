import BlogCard from "@/components/BlogCard";

export default async function Blog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await res.json();

  return (
    <main style={{ paddingTop: "140px", padding: "140px 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
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

      <h1 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, marginBottom: "80px" }}>
        Blog
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
        {articles.map((article, i) => (
          <BlogCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </main>
  );
}