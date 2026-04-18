"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import HeroSection from "@/components/shared/HeroSection";
import PriceCalculator from "@/components/calculator/PriceCalculator";
import { Check, Phone, Shield, Clock, Award, Paintbrush2, Star } from "lucide-react";

const services = [
  { href: "/services/interior-painting", title: "Interior Painting", desc: "Walls, ceilings, trim, doors — flawless finish every time." },
  { href: "/services/exterior-painting", title: "Exterior Painting", desc: "Weather-resistant coatings that protect and beautify your home." },
  { href: "/services/commercial-painting", title: "Commercial Painting", desc: "Minimal disruption, professional results for your business." },
  { href: "/services/drywall-repair", title: "Drywall Repair", desc: "Seamless repairs before painting for a perfect surface." },
  { href: "/services/deck-staining", title: "Fence & Deck Staining", desc: "Protect and restore your outdoor wood surfaces." },
  { href: "/services/texture-painting", title: "Texture Painting", desc: "Specialty finishes that add character to any space." },
];

const whyUs = [
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed painting contractors with comprehensive insurance coverage." },
  { icon: Award, title: "2-Year Warranty", desc: "Industry-leading warranty on all our painting projects." },
  { icon: Clock, title: "On-Time, Every Time", desc: "We respect your schedule and complete projects as promised." },
  { icon: Paintbrush2, title: "Premium Materials", desc: "We only use top-quality paints for lasting, beautiful results." },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        {/* Hero with background image */}
        <HeroSection
          title={"Calgary House Painters —\nInterior & Exterior"}
          subtitle="Professional, clean, on-time. Serving Calgary homeowners with licensed, insured painting services and a 2-year warranty. Free estimates."
          imageId="for_exteriori_page1_e6ggt9"
          imageAlt="Professional house painters Calgary - AspenLeaf Painting"
        />

        {/* Trust bar */}
        <section style={{ background: "var(--primary)", padding: "1rem 1.5rem" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
            {["Licensed & Insured", "2-Year Warranty", "Free Estimates", "Calgary Local", "5★ Reviews"].map(tag => (
              <span key={tag} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: 14, color: "#fff", fontWeight: 500 }}>
                <Check size={14} style={{ color: "var(--accent)" }} /> {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Services */}
        <section style={{ padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.75rem" }}>What We Do</p>
              <h2 style={sectionTitle}>Our Painting Services in Calgary</h2>
              <p style={sectionSubtitle}>From single rooms to full exteriors — done with care and precision.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {services.map(s => (
                <Link key={s.href} href={s.href} style={{
                  display: "block", padding: "2rem", border: "1.5px solid var(--border)",
                  borderRadius: 16, textDecoration: "none", background: "#fff",
                  transition: "all 0.25s", position: "relative", overflow: "hidden"
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(45,106,79,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: "var(--foreground)", marginBottom: "0.6rem" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{s.desc}</p>
                  <span style={{ fontSize: 14, color: "var(--primary)", fontWeight: 600 }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section style={{ padding: "6rem 1.5rem", background: "var(--evergreen)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: "var(--accent)", textTransform: "uppercase", marginBottom: "0.75rem" }}>Why Choose Us</p>
              <h2 style={{ ...sectionTitle, color: "#fff" }}>Calgary Homeowners Choose AspenLeaf</h2>
              <p style={{ ...sectionSubtitle, color: "rgba(255,255,255,0.75)" }}>A husband-and-wife team that treats every home like our own.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem" }}>
              {whyUs.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.title} style={{ textAlign: "center" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 68, height: 68, background: "rgba(149,213,178,0.15)", borderRadius: "50%", marginBottom: "1.25rem", border: "1.5px solid rgba(149,213,178,0.3)" }}>
                      <Icon size={28} style={{ color: "var(--accent)" }} />
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, marginBottom: "0.6rem", color: "#fff" }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About snippet with photo */}
        <section style={{ padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Story</p>
              <h2 style={{ ...sectionTitle, marginBottom: "1.5rem" }}>Painting Contractors Who Actually Care</h2>
              <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Founded by Alex and Olha Kais, AspenLeaf Painting was built on one belief: your home deserves the same care we'd want for ours. We arrived in Calgary from Ukraine and this city welcomed us — now we give back through honest, quality work.
              </p>
              <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Every project is personal to us. When you invite us into your home, you're trusting us with your most important space. We don't take that lightly.
              </p>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 700, textDecoration: "none", fontSize: 15, borderBottom: "2px solid var(--accent)", paddingBottom: "2px" }}>
                Read our story →
              </Link>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/olha_alex_lfnr5i.jpg"
                alt="Alex and Olha Kais - Founders of AspenLeaf Painting Calgary"
                style={{ width: "100%", borderRadius: 20, boxShadow: "0 20px 60px rgba(0,0,0,0.15)", objectFit: "cover", aspectRatio: "4/3" }}
                loading="lazy"
              />
              <div style={{
                position: "absolute", bottom: -16, right: -16,
                background: "var(--primary)", color: "#fff", borderRadius: 16,
                padding: "1rem 1.5rem", boxShadow: "0 8px 24px rgba(45,106,79,0.3)"
              }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700 }}>2-Year</p>
                <p style={{ fontSize: 13, opacity: 0.9 }}>Warranty on all work</p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Calculator */}
        <section style={{ padding: "6rem 1.5rem", background: "var(--secondary)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.75rem" }}>Instant Estimate</p>
              <h2 style={sectionTitle}>Price Calculator</h2>
              <p style={sectionSubtitle}>Get a ballpark estimate for your painting project in seconds. For a detailed quote, book a free estimate.</p>
            </div>
            <PriceCalculator />
          </div>
        </section>

        {/* CTA */}
        <section style={{ position: "relative", padding: "7rem 1.5rem", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, var(--primary) 0%, var(--evergreen) 100%)" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.25rem", color: "#fff" }}>
              Ready to Transform Your Space?
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2.5rem", lineHeight: 1.7, color: "#fff" }}>
              Get a free, no-obligation estimate. We'll assess your project and provide a detailed quote tailored to your needs.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <BookingForm trigger={<span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "var(--primary)", padding: "1rem 2rem", borderRadius: 50, fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>Schedule Free Estimate</span>} />
              <a href="tel:+18252887557" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", padding: "1rem 1.75rem", borderRadius: 50, fontWeight: 600, fontSize: 16, textDecoration: "none", background: "rgba(255,255,255,0.1)" }}>
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

const sectionTitle: React.CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.75rem" };
const sectionSubtitle: React.CSSProperties = { fontSize: 17, color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" };
