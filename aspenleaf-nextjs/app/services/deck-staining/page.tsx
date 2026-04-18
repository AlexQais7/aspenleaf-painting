import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import HeroSection from "@/components/shared/HeroSection";
import { Check, Phone, Shield, Award, Paintbrush2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Deck & Fence Staining Calgary | AspenLeaf Painting",
  description: "Professional deck and fence staining, painting, and restoration in Calgary. Protect your outdoor wood from Alberta's harsh climate. Free estimates.",
  alternates: { canonical: "https://www.aspenleafpainting.com/services/deck-staining/" },
};


const HERO_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/for_fence_page_ad94gd.jpg";
const PAGE_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/Simple_Colourful_Before_and_After_Color_Grade_5_ce8sfk.jpg";

const services = [
  { title: "Deck staining", desc: "Penetrating stains that protect while showing natural wood grain" },
  { title: "Deck painting", desc: "Solid colour coatings for older decks or a fresh new look" },
  { title: "Fence staining", desc: "Even application across all fence types — wood, cedar, pine" },
  { title: "Fence painting", desc: "Solid colour for privacy fences, picket fences, and more" },
  { title: "Deck restoration", desc: "Stripping old finish, sanding, repairing boards, refinishing" },
  { title: "Pergolas & gazebos", desc: "Complete finishing for all outdoor wood structures" },
];

export default function DeckStainingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <HeroSection
          title="Deck & Fence Staining Calgary"
          subtitle="Professional deck staining, fence painting, and outdoor wood restoration in Calgary. Protect your investment from Alberta's harsh freeze-thaw cycles."
          imageId="for_fence_page_ad94gd"
          imageAlt="Deck & Fence Staining Calgary by AspenLeaf Painting"
        />

        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ marginBottom: "4rem" }}>
              <h2 style={h2}>Why Calgary Decks & Fences Need Professional Care</h2>
              <p style={bodyText}>
                Alberta's climate is brutal on outdoor wood. The freeze-thaw cycles of Calgary winters, intense summer UV, and occasional hail take a serious toll on unprotected wood surfaces. A deck or fence that isn't properly maintained can deteriorate rapidly — leading to cracking, splintering, rot, and costly replacement.
              </p>
              <p style={{ ...bodyText, marginTop: "1rem" }}>
                Regular staining or painting is the most effective way to protect your outdoor wood investment. At AspenLeaf Painting, we don't just slap a coat of stain on and call it done. We start with thorough preparation — cleaning, stripping old finish where needed, sanding rough surfaces, and repairing damaged boards — so the new finish adheres properly and lasts as long as possible.
              </p>
              <p style={{ ...bodyText, marginTop: "1rem" }}>
                Whether you have a brand new deck that needs its first coat, a weathered fence that's overdue for a refresh, or an old deck that needs full restoration, we have the experience and the right products to get it done properly.
              </p>
            </div>

            <div style={{ marginBottom: "4rem" }}>
              <h2 style={{ ...h2, textAlign: "center", marginBottom: "1.5rem" }}>Our Deck & Fence Services</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                {services.map(item => (
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

            <div style={{ marginBottom: "4rem" }}>
              <h2 style={{ ...h2, marginBottom: "0.75rem" }}>Stain vs. Paint — Which Is Right for Your Deck?</h2>
              <p style={{ ...bodyText, marginBottom: "1.5rem" }}>Not sure whether to stain or paint your deck? Here's a simple breakdown:</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                {[
                  {
                    title: "Stain",
                    points: [
                      "Penetrates the wood rather than sitting on top",
                      "Shows natural wood grain and texture",
                      "Easier to maintain — no peeling or chipping",
                      "Best for newer wood in good condition",
                      "Semi-transparent to solid opacity options",
                    ]
                  },
                  {
                    title: "Paint",
                    points: [
                      "Sits on top of the wood as a protective coating",
                      "Solid colour completely covers wood grain",
                      "Ideal for older or weathered wood with imperfections",
                      "Can peel over time and requires more maintenance",
                      "Great for a clean, modern look",
                    ]
                  }
                ].map(col => (
                  <div key={col.title} style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: 10, background: "#fff" }}>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "var(--primary)", marginBottom: "1rem" }}>{col.title}</h3>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {col.points.map((p, i) => (
                        <li key={i} style={{ display: "flex", gap: "0.5rem", fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.5 }}>
                          <Check size={14} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p style={{ ...bodyText, marginTop: "1.5rem" }}>
                Not sure which is right for your situation? We'll assess your deck or fence during the free estimate and give you an honest recommendation based on the condition of your wood and your goals.
              </p>
            </div>

            
            {/* Before after image */}
            <div style={{ marginBottom: "4rem", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={PAGE_IMG} alt="Deck staining before and after Calgary" style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }} crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy" />
            </div>
<div>
              <h2 style={{ ...h2, marginBottom: "1.5rem" }}>Our Process</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
                {[
                  { step: "1. Inspection & Quote", desc: "We assess the condition of your wood, identify any rot or damage, and recommend the right finish and approach." },
                  { step: "2. Cleaning", desc: "Power washing or hand scrubbing to remove dirt, mildew, old loose finish, and grey weathering from the wood surface." },
                  { step: "3. Repairs", desc: "We fix loose boards, replace badly damaged sections, hammer in popped nails, and fill cracks where needed." },
                  { step: "4. Sanding", desc: "Sanding rough surfaces and raised grain to ensure the new finish goes on smoothly and evenly." },
                  { step: "5. Application", desc: "Even application of your chosen stain or paint, working with the wood grain for maximum penetration and coverage." },
                  { step: "6. Final Inspection", desc: "We check every section before leaving to ensure complete, even coverage with no missed spots or drips." },
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
            <h2 style={{ ...h2, textAlign: "center", marginBottom: "3rem" }}>Why Choose AspenLeaf?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
              {[
                { icon: Paintbrush2, title: "Proper Preparation", desc: "We never skip prep — it's what makes the difference between a finish that lasts 2 years vs. 8." },
                { icon: Clock, title: "Seasonal Timing", desc: "We schedule deck work during optimal weather conditions for the best possible finish." },
                { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed painting contractors with comprehensive insurance coverage." },
                { icon: Award, title: "2-Year Warranty", desc: "All our deck and fence work is backed by our workmanship warranty." },
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
              Ready to Restore Your Deck or Fence?
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>
              Book a free estimate before the season gets away from you.
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
