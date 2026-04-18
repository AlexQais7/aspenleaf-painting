import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import { Shield, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "2-Year Painting Warranty | AspenLeaf Painting Calgary",
  description: "AspenLeaf Painting offers an industry-leading 2-year warranty on all painting projects in Calgary. Your satisfaction is guaranteed.",
  alternates: { canonical: "https://www.aspenleafpainting.com/warranty/" },
};

export default function WarrantyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <section style={{ background: "linear-gradient(135deg, rgba(45,106,79,0.08) 0%, var(--secondary) 100%)", padding: "5rem 1rem", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 80, height: 80, background: "rgba(45,106,79,0.1)", borderRadius: "50%", marginBottom: "1.5rem" }}>
              <Shield size={40} style={{ color: "var(--primary)" }} />
            </div>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" }}>
              Our 2-Year Warranty
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
              We stand behind every project with an industry-leading 2-year workmanship warranty. Your satisfaction is our guarantee.
            </p>
          </div>
        </section>

        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "2rem" }}>What Our Warranty Covers</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
              {[
                "Peeling, flaking, or blistering paint due to application issues",
                "Uneven coverage or visible brush/roller marks",
                "Paint failure on properly prepared surfaces",
                "Any defects in our workmanship for 2 full years after project completion",
                "Free 30-day follow-up visit to address any concerns",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "1rem", border: "1px solid var(--border)", borderRadius: 10, background: "#fff" }}>
                  <Check size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 16, color: "var(--foreground)" }}>{item}</p>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1.5rem" }}>How to Make a Warranty Claim</h2>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1rem" }}>
              If you notice any issues covered by our warranty, simply call us at <a href="tel:+18252887557" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>(825) 288-7557</a> or email <a href="mailto:alex@aspenleafpainting.com" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>alex@aspenleafpainting.com</a>. We'll schedule a visit to assess and remedy the issue at no cost to you.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
              We also schedule a free follow-up visit 30 days after every project completion to proactively catch and address any concerns before they become problems.
            </p>
          </div>
        </section>

        <section style={{ padding: "5rem 1rem", background: "linear-gradient(135deg, var(--primary) 0%, var(--evergreen) 100%)", color: "#fff", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>Ready to Get Started?</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>Book your free estimate today and paint with confidence.</p>
            <BookingForm trigger={<span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "var(--primary)", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Schedule Free Estimate</span>} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
