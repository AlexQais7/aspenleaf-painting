import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Book a Free Estimate | AspenLeaf Painting Calgary",
  description: "Book your free painting estimate online. Choose a time that works for you — no calls needed.",
  alternates: { canonical: "https://www.aspenleafpainting.com/booking/" },
};

export default function BookingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Book Your Free Estimate
            </h1>
            <p style={{ fontSize: 17, color: "var(--muted-foreground)", lineHeight: 1.6 }}>
              Pick a date and time that works for you. Alex will visit, assess your project, and provide a detailed quote — no obligation.
            </p>
          </div>
          <div style={{ border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <iframe
              src="https://cal.com/aspenleaf-2dqxoj/30min?embed=true"
              style={{ width: "100%", height: 700, border: "none" }}
              title="Book a free painting estimate with AspenLeaf Painting Calgary"
            />
          </div>
          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: 14, color: "var(--muted-foreground)" }}>
            Prefer to call? Reach us at <a href="tel:+18252887557" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>(825) 288-7557</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
