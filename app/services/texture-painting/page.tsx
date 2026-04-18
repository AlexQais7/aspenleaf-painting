import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import HeroSection from "@/components/shared/HeroSection";
import { Check, Phone, Shield, Award, Paintbrush2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Texture Painting Calgary | AspenLeaf Painting",
  description: "Specialty texture painting in Calgary — orange peel, knockdown, skip trowel, Venetian plaster and more. Licensed, insured, free estimates.",
  alternates: { canonical: "https://www.aspenleafpainting.com/services/texture-painting/" },
};


const HERO_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/for_texturewallpage_nleedn.jpg";
const PAGE_IMG1 = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/texture_accentwall_chtjqc.jpg";
const PAGE_IMG2 = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/for_texture_wall_itje9q.jpg";

const textures = [
  { title: "Orange Peel", desc: "A subtle, bumpy texture that resembles the skin of an orange. One of the most popular finishes in Calgary homes." },
  { title: "Knockdown", desc: "A skip-trowel technique that creates a mottled, multi-dimensional look. Adds depth and hides surface imperfections." },
  { title: "Skip Trowel", desc: "Hand-applied finish with a rustic, artisan appearance. Every wall is unique — no two applications are identical." },
  { title: "Venetian Plaster", desc: "A high-end, polished finish that mimics the look of natural stone. Adds luxury and sophistication to any space." },
  { title: "Sand Texture", desc: "Fine to coarse sandy finish that adds subtle dimension while remaining easy to clean and maintain." },
  { title: "Smooth / Level 5", desc: "A perfectly flat, ultra-smooth wall finish — the gold standard for modern and contemporary interiors." },
];

export default function TexturePaintingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <HeroSection
          title="Texture Painting in Calgary"
          subtitle="Specialty texture painting Calgary — orange peel, knockdown, skip trowel, Venetian plaster and more. We specialize in all techniques, applied with precision."
          imageId="for_texturewallpage_nleedn"
          imageAlt="Texture Painting in Calgary by AspenLeaf Painting"
        />

        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ marginBottom: "4rem" }}>
              <h2 style={h2}>Calgary's Texture Painting Specialists</h2>
              <p style={bodyText}>
                Texture painting is one of the most impactful ways to transform a space — adding dimension, character, and personality that flat paint simply can't achieve. Whether you're looking to match an existing texture after drywall repairs, refresh a dated popcorn ceiling, or add a show-stopping Venetian plaster feature wall, AspenLeaf Painting has the skills and experience to deliver.
              </p>
              <p style={{ ...bodyText, marginTop: "1rem" }}>
                We specialize in every major texture technique used in Calgary homes and commercial spaces. Our team doesn't just apply texture — we understand how different finishes interact with light, how they age over time, and which technique is the right fit for your space and your lifestyle.
              </p>
              <p style={{ ...bodyText, marginTop: "1rem" }}>
                Texture painting requires a different skill set than standard painting. It takes practice, the right tools, and a trained eye to get consistent, professional results. Our crew has applied hundreds of texture finishes across Calgary — we know what works.
              </p>
            </div>

            <div style={{ marginBottom: "4rem" }}>
              <h2 style={{ ...h2, textAlign: "center", marginBottom: "0.75rem" }}>Texture Finishes We Specialize In</h2>
              <p style={{ textAlign: "center", color: "var(--muted-foreground)", marginBottom: "2rem", fontSize: 16 }}>Not sure which finish is right for you? We'll help you choose during your free estimate.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                {textures.map(item => (
                  <div key={item.title} style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: 10, background: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <Check size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
                      <h3 style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700, color: "var(--foreground)" }}>{item.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "4rem" }}>
              <h2 style={{ ...h2, marginBottom: "1.5rem" }}>Texture Matching & Repairs</h2>
              <p style={bodyText}>
                One of the most common texture challenges is matching an existing finish after drywall repairs. Whether you've had a patch done after water damage, an electrical repair, or a renovation, the new area often looks completely different from the surrounding wall.
              </p>
              <p style={{ ...bodyText, marginTop: "1rem" }}>
                We specialize in texture matching — analyzing your existing finish and replicating it as closely as possible so the repair blends seamlessly. Combined with our <Link href="/services/drywall-repair" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>drywall repair service</Link>, we can take a damaged wall from rough patch to perfectly finished surface.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "5rem 1rem", background: "var(--secondary)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ ...h2, textAlign: "center", marginBottom: "3rem" }}>Why Choose AspenLeaf for Texture Painting?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
              {[
                { icon: Paintbrush2, title: "True Specialists", desc: "We don't dabble in texture — we specialize in it. Every technique, done right." },
                { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed painting contractors with comprehensive insurance." },
                { icon: Award, title: "2-Year Warranty", desc: "All texture work is covered by our industry-leading warranty." },
                { icon: Check, title: "Texture Matching", desc: "We can match virtually any existing texture for seamless repairs." },
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
              Ready to Add Character to Your Walls?
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>
              Book a free estimate and we'll help you choose the perfect texture finish for your space.
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
