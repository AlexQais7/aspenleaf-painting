import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/shared/HeroSection";
import { getAllPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Painting Tips & Calgary Home Care Blog | AspenLeaf Painting",
  description:
    "Practical painting advice and Calgary home-care guides from AspenLeaf Painting — DIY tips, cost guides, and how Calgary's climate affects your home.",
  alternates: { canonical: "https://www.aspenleafpainting.com/blog" },
  openGraph: {
    title: "Painting Tips & Calgary Home Care Blog | AspenLeaf Painting",
    description:
      "Practical painting advice and Calgary home-care guides from AspenLeaf Painting.",
    url: "https://www.aspenleafpainting.com/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <HeroSection
          title="Painting Tips & Calgary Home Care"
          subtitle="Practical advice from AspenLeaf Painting — how Calgary's climate affects your home, when to DIY, and when to call a pro."
          imageId="IMG_2538_myvrcq"
          imageAlt="AspenLeaf Painting blog - Calgary home care tips"
          showCTA={false}
        />

        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "block",
                    padding: "2rem",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    textDecoration: "none",
                    background: "#fff",
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      color: "var(--primary)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {post.category}
                  </p>
                  <h2
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
