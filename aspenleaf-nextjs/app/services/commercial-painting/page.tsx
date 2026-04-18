import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import HeroSection from "@/components/shared/HeroSection";
import { Check, Phone, Shield, Clock, Award, Paintbrush2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Painters Calgary | AspenLeaf Painting",
  description: "Professional commercial painting in Calgary for offices, retail stores, and warehouses. Minimal disruption, premium results, licensed & insured. Free estimates.",
  alternates: { canonical: "https://www.aspenleafpainting.com/services/commercial-painting/" },
};


const HERO_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/for_commercial_page_yywms9.jpg";

const whatWePaint = [
  { title: "Office spaces", desc: "reception areas, boardrooms, open-plan offices" },
  { title: "Retail stores", desc: "feature walls, full interiors, storefronts" },
  { title: "Warehouses & industrial", desc: "high-bay walls, concrete floors, safety markings" },
  { title: "Restaurants & hospitality", desc: "accent walls, ceilings, detailed trim work" },
  { title: "Strata & multi-unit", desc: "hallways, lobbies, common areas" },
  { title: "Exterior commercial", desc: "building facades, signage walls, curb appeal" },
];

export default function CommercialPaintingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <HeroSection
          title="Commercial Painting in Calgary"
          subtitle="Professional commercial painters Calgary serving offices, retail stores, restaurants, and warehouses. We work around your schedule to keep your business running."
          imageId="for_commercial_page_yywms9"
          imageAlt="Commercial Painting in Calgary by AspenLeaf Painting"
        />

        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ marginBottom: "4rem" }}>
              <h2 style={h2}>Calgary's Commercial Painting Specialists</h2>
              <p style={bodyText}>
                Your commercial space makes a first impression on every customer, client, and employee who walks through the door. A fresh, professional paint job isn't just about aesthetics — it's about your brand, your reputation, and the environment your team works in every day.
              </p>
              <p style={{ ...bodyText, marginTop: "1rem" }}>
                We've painted everything from downtown Calgary offices and retail boutiques to large warehouses and restaurant interiors. Whatever the size or scope of your commercial project, we bring the same attention to detail, premium materials, and commitment to finishing on time and on budget.
              </p>
              <p style={{ ...bodyText, marginTop: "1rem" }}>
                We know downtime costs money. That's why we offer flexible scheduling including evenings and weekends, and we work efficiently to get your space back in operation as quickly as possible — without cutting corners.
              </p>
            </div>

            <div style={{ marginBottom: "4rem" }}>
              <h2 style={{ ...h2, textAlign: "center", marginBottom: "1.5rem" }}>Commercial Spaces We Paint</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                {whatWePaint.map(item => (
                  <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1.25rem", border: "1px solid var(--border)", borderRadius: 10, background: "#fff" }}>
                    <Check size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "0.2rem" }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "var(--muted-foreground)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ ...h2, marginBottom: "1.5rem" }}>Our Commercial Painting Process</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                {[
                  { step: "1. Site Assessment & Quote", desc: "We visit your space, assess the scope, discuss your timeline and business hours, and provide a detailed free estimate with no surprises." },
                  { step: "2. Scheduling Around You", desc: "We plan the work around your operating hours — evenings, weekends, or phased sections — so your business keeps running." },
                  { step: "3. Surface Preparation", desc: "Thorough prep including cleaning, patching, caulking, and priming. This is what separates a lasting finish from one that fails in a year." },
                  { step: "4. Protection & Masking", desc: "We protect your floors, furniture, equipment, and fixtures before any paint is applied. Your space is treated with care." },
                  { step: "5. Professional Application", desc: "Premium commercial-grade paints applied by experienced painters. Clean lines, even coverage, no shortcuts." },
                  { step: "6. Inspection & Handover", desc: "Full walkthrough with you before we pack up. We don't leave until you're completely satisfied." },
                ].map(item => (
                  <div key={item.step} style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: 10, background: "#fff" }}>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>{item.step}</h3>
                    <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "5rem 1rem", background: "var(--secondary)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ ...h2, textAlign: "center", marginBottom: "3rem" }}>Why Businesses Choose AspenLeaf</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
              {[
                { icon: Clock, title: "Flexible Scheduling", desc: "Evenings and weekends available to minimize disruption to your operations." },
                { icon: Shield, title: "Licensed & Insured", desc: "Full commercial liability insurance for your peace of mind." },
                { icon: Award, title: "2-Year Warranty", desc: "We stand behind our commercial work with the same warranty as residential." },
                { icon: Paintbrush2, title: "Commercial-Grade Materials", desc: "Durable, washable paints designed for high-traffic commercial environments." },
              ].map(f => {
                const Icon = f.icon;
                return (
                  <div key={f.title} style={{ textAlign: "center" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, background: "rgba(45,106,79,0.1)", borderRadius: "50%", marginBottom: "1rem" }}>
                      <Icon size={28} style={{ color: "var(--primary)" }} />
                    </div>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700, marginBottom: "0.5rem" }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section style={{ padding: "5rem 1rem", background: "linear-gradient(135deg, var(--primary) 0%, var(--evergreen) 100%)", color: "#fff", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
              Ready to Refresh Your Commercial Space?
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>
              Free estimates, flexible scheduling, and results your clients will notice.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <BookingForm trigger={<span style={{ ...primaryBtn, background: "#fff", color: "var(--primary)" }}>Schedule Free Estimate</span>} />
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

const h2: React.CSSProperties = { fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" };
const bodyText: React.CSSProperties = { fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 };
const primaryBtn: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--primary)", color: "#fff", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: 16, textDecoration: "none", cursor: "pointer" };
