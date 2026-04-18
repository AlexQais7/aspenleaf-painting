import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main style={{ padding: "6rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "5rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>404</h1>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" }}>Page Not Found</h2>
          <p style={{ fontSize: 17, color: "var(--muted-foreground)", marginBottom: "2rem" }}>
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link href="/" style={{ display: "inline-block", background: "var(--primary)", color: "#fff", padding: "0.875rem 2rem", borderRadius: 8, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
