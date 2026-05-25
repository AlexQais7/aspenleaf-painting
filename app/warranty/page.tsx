import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import { Shield, Check, X, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "2-Year Painting Warranty | AspenLeaf Painting Calgary",
  description: "AspenLeaf Painting offers an industry-leading 2-year warranty on all painting projects in Calgary. Your satisfaction is guaranteed.",
  alternates: { canonical: "https://www.aspenleafpainting.com/warranty" },
};

export default function WarrantyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        {/* Hero */}
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

        {/* Why it matters */}
        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1.5rem" }}>
              Why Our Warranty Matters
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Most painting companies offer a one-year warranty — and even then, the fine print often limits what's actually covered. At AspenLeaf Painting, we give you two full years because we're confident in the quality of our prep work, our materials, and our application. If something goes wrong with our workmanship during that time, we come back and fix it. No hassle, no cost to you.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Paint failure isn't always obvious at day one. Sometimes it shows up six months later as a bubble, a crack along trim, or a section of wall that starts peeling near a window. A short warranty window means you're on your own when those problems appear. Ours means you're not.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
              We also include a complimentary 30-day follow-up visit after every project. Alex comes back, walks through the space with you, and addresses any concerns while the project is still fresh. Most issues — a spot that needs a touch-up, a door frame that needs an extra coat — are caught and fixed at this visit before they ever become warranty claims.
            </p>

            {/* Covers */}
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--foreground)", marginTop: "3rem", marginBottom: "1.25rem" }}>What Our Warranty Covers</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
              {[
                "Peeling, flaking, or blistering paint due to application issues",
                "Uneven coverage or visible brush and roller marks",
                "Paint failure on properly prepared surfaces",
                "Lap marks, holidays (missed spots), or runs left from application",
                "Trim or ceiling lines that are not crisp and straight",
                "Any defects in our workmanship for 2 full years after project completion",
                "Free 30-day follow-up visit to address any concerns proactively",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "1rem", border: "1px solid var(--border)", borderRadius: 10, background: "#fff" }}>
                  <Check size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 16, color: "var(--foreground)" }}>{item}</p>
                </div>
              ))}
            </div>

            {/* Exclusions */}
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" }}>What Is Not Covered</h3>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              We believe in being transparent. The following situations fall outside our warranty coverage, because they stem from conditions beyond the control of our workmanship:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
              {[
                "Damage caused by moisture, flooding, or water intrusion from structural issues",
                "Paint failure on surfaces that were not disclosed or accessible during the estimate",
                "Normal fading from UV exposure over time (a characteristic of all exterior paints)",
                "Damage caused by impact, abuse, or modifications made after project completion",
                "Surfaces repainted or altered by another contractor after our work is complete",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "1rem", border: "1px solid #fee2e2", borderRadius: 10, background: "#fff9f9" }}>
                  <X size={18} style={{ color: "#dc2626", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 15, color: "var(--foreground)" }}>{item}</p>
                </div>
              ))}
            </div>

            {/* How to Claim */}
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" }}>How to Make a Warranty Claim</h3>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Making a warranty claim with us is straightforward. If you notice any issue that looks like it could be a workmanship defect, reach out:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { step: "1. Contact us", desc: "Call (825) 288-7557 or email alex@aspenleafpainting.com. Describe what you're seeing and when it appeared." },
                { step: "2. We assess the issue", desc: "Alex visits the property to look at the problem in person and determine the cause. This visit is always free." },
                { step: "3. We fix it", desc: "If the issue is covered by our warranty, we schedule a return visit and complete the repair at no charge to you." },
              ].map(item => (
                <div key={item.step} style={{ padding: "1.25rem", border: "1px solid var(--border)", borderRadius: 10, background: "#fff" }}>
                  <p style={{ fontFamily: "Georgia, serif", fontSize: 15, fontWeight: 700, color: "var(--primary)", marginBottom: "0.4rem" }}>{item.step}</p>
                  <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              If you notice any issues covered by our warranty, simply call us at{" "}
              <a href="tel:+18252887557" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>(825) 288-7557</a>{" "}
              or email{" "}
              <a href="mailto:alex@aspenleafpainting.com" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>alex@aspenleafpainting.com</a>.{" "}
              We'll schedule a visit to assess and remedy the issue at no cost to you.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "3rem" }}>
              We also schedule a free follow-up visit 30 days after every project completion to proactively catch and address any concerns before they become problems.
            </p>

            {/* Premium materials callout */}
            <div style={{ padding: "2rem", background: "rgba(45,106,79,0.06)", borderRadius: 16, border: "1px solid rgba(45,106,79,0.15)", marginBottom: "2rem" }}>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: "var(--foreground)", marginBottom: "0.75rem" }}>
                Why We Can Offer a 2-Year Warranty
              </h3>
              <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1rem" }}>
                The warranty starts with the products we use. We exclusively use premium paints from trusted manufacturers — the kind that are formulated for long-term adhesion and durability in Calgary's climate. Cheaper paints save money on material cost but fail faster, which is why companies that use them can't stand behind their work.
              </p>
              <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                The warranty is also backed by our preparation standards. Proper surface prep — cleaning, sanding, priming, caulking — is what determines whether paint stays on for 2 years or 10. We never skip prep to move faster, because we know our warranty depends on it. A project done right the first time is one we're happy to guarantee.
              </p>
            </div>

            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
              Have questions about what is or isn't covered for your specific project?{" "}
              <Link href="/contact" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>Get in touch</Link> — we're happy to explain exactly what our warranty means for your job before you commit to anything.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 1rem", background: "linear-gradient(135deg, var(--primary) 0%, var(--evergreen) 100%)", color: "#fff", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>Ready to Get Started?</h3>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>Book your free estimate today and paint with confidence.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <BookingForm trigger={<span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "var(--primary)", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Schedule Free Estimate</span>} />
              <a href="tel:+18252887557" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>
                <Phone size={16} /> (825) 288-7557
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
