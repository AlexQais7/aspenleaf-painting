import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import HeroSection from "@/components/shared/HeroSection";
import { Check, Phone, Shield, Clock, Award, Paintbrush2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Painters Calgary | AspenLeaf Painting",
  description: "Professional exterior house painting in Calgary. Weather-resistant coatings, licensed & insured, 2-year warranty. Free estimates.",
  alternates: { canonical: "https://www.aspenleafpainting.com/services/exterior-painting/" },
  openGraph: {
    title: "Exterior Painters Calgary | AspenLeaf Painting",
    description: "Professional exterior painting Calgary. Licensed, insured, 2-year warranty. Free estimate.",
    url: "https://www.aspenleafpainting.com/services/exterior-painting/",
  },
};


const HERO_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/exteriorshade_after_cvst3f.jpg";
const PAGE_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/exterirorfront_after_afypl9.jpg";

const whatWePaint = [
  { title: "Siding & clapboard", desc: "all materials including wood, vinyl, stucco" },
  { title: "Fascia, soffits & trim", desc: "clean lines, proper prep" },
  { title: "Doors, windows & frames", desc: "detailed work, weather-sealed" },
  { title: "Garages & sheds", desc: "matching finishes, lasting protection" },
];

export default function ExteriorPaintingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <HeroSection
          title="Exterior Painting in Calgary"
          subtitle="Professional exterior painters Calgary using weather-resistant coatings built for Alberta's climate. Protect and beautify your home — licensed, insured, free estimates."
          imageId="exteriorshade_after_cvst3f"
          imageAlt="Exterior Painting in Calgary by AspenLeaf Painting"
        />

        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ marginBottom: "4rem" }}>
              <h2 style={h2}>Calgary's Exterior Painting Experts</h2>
              <p style={bodyText}>
                Calgary's climate is tough on exterior paint — freeze-thaw cycles, intense UV, hail, and temperature swings can cause paint to crack, peel, and fade faster than almost anywhere else in Canada. That's why proper preparation and premium materials aren't optional here — they're essential.
              </p>
              <p style={{ ...bodyText, marginTop: "1rem" }}>
                At AspenLeaf Painting, we use exterior coatings specifically rated for Alberta's climate. Every project starts with thorough surface preparation — cleaning, scraping, caulking, and priming — so your new paint job lasts as long as possible. We back it with our 2-year warranty.
              </p>
            </div>

            <div style={{ marginBottom: "4rem" }}>
              <h2 style={{ ...h2, textAlign: "center", marginBottom: "1.5rem" }}>What We Paint</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
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
              <h2 style={{ ...h2, marginBottom: "1.5rem" }}>Our Exterior Painting Process</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                {[
                  { step: "1. Inspection & Quote", desc: "We assess the condition of your exterior surfaces, identify any repairs needed, and provide a detailed free estimate." },
                  { step: "2. Surface Preparation", desc: "Power washing, scraping loose paint, sanding, caulking gaps, and priming bare surfaces. This is where lasting results are made." },
                  { step: "3. Protection & Masking", desc: "We protect your landscaping, windows, doors, and fixtures before any paint touches your home." },
                  { step: "4. Premium Application", desc: "Two coats of premium exterior paint applied in optimal conditions for maximum adhesion and durability." },
                  { step: "5. Cleanup & Inspection", desc: "Full cleanup of the work area followed by a detailed inspection to ensure a flawless finish." },
                  { step: "6. Walk-through & Warranty", desc: "We walk through the completed work with you and back it with our 2-year workmanship warranty." },
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
            <h2 style={{ ...h2, textAlign: "center", marginBottom: "3rem" }}>Why Choose AspenLeaf for Exterior Painting?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
              {[
                { icon: Shield, title: "Alberta-Rated Materials", desc: "Paints chosen specifically to handle Calgary's freeze-thaw climate." },
                { icon: Award, title: "2-Year Warranty", desc: "We stand behind our work with an industry-leading warranty." },
                { icon: Clock, title: "Minimal Disruption", desc: "We work efficiently to get your home looking great quickly." },
                { icon: Paintbrush2, title: "Thorough Preparation", desc: "We never skip prep — it's what separates a 2-year paint job from a 10-year one." },
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


            {/* Extra exterior images */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "4rem" }}>
              <img src="https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/Simple_Colourful_Before_and_After_Color_Grade_6_p3dqbe.jpg" alt="Exterior painting before and after Calgary" style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 12 }} crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy" />
              <img src="https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/exterirorfront_after_afypl9.jpg" alt="Exterior house painting Calgary after" style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 12 }} crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy" />
            </div>
        <section style={{ padding: "4rem 1rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ ...h2, textAlign: "center", marginBottom: "2rem" }}>Related Services</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
              {[
                { href: "/services/interior-painting", title: "Interior Painting" },
                { href: "/services/commercial-painting", title: "Commercial Painting" },
                { href: "/services/drywall-repair", title: "Drywall Repair" },
                { href: "/services/deck-staining", title: "Deck & Fence Staining" },
                { href: "/portfolio", title: "Our Portfolio" },
                { href: "/warranty", title: "Our Warranty" },
              ].map(s => (
                <Link key={s.href} href={s.href} style={{ display: "block", padding: "1rem", border: "1px solid var(--border)", borderRadius: 10, textDecoration: "none", color: "var(--foreground)", fontWeight: 600, fontSize: 14 }}>
                  {s.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "5rem 1rem", background: "linear-gradient(135deg, var(--primary) 0%, var(--evergreen) 100%)", color: "#fff", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
              Ready to Boost Your Home's Curb Appeal?
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>
              Get a free exterior painting estimate from Calgary's trusted painting team.
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
