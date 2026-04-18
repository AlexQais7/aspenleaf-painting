import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import HeroSection from "@/components/shared/HeroSection";
import { Check, Paintbrush2, Clock, Shield, Award, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Painters Calgary | AspenLeaf Painting",
  description: "Professional interior painting for walls, ceilings, trim and doors in Calgary. Clean, fast, guaranteed results. Free estimate from licensed painters.",
  alternates: { canonical: "https://www.aspenleafpainting.com/services/interior-painting/" },
  openGraph: {
    title: "Interior Painters Calgary | AspenLeaf Painting",
    description: "Professional interior painting Calgary. Licensed, insured, 2-year warranty. Free estimate.",
    url: "https://www.aspenleafpainting.com/services/interior-painting/",
  },
};

// REPLACE THESE with your Cloudinary URLs once uploaded
const HERO_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/IMG_2538_myvrcq.jpg";
const PAGE_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/for_interior_page2_y2txnq.jpg";

const whatWePaint = [
  { title: "Walls & ceilings", desc: "repairs, skim, stain-blocking" },
  { title: "Trim, baseboards & casings", desc: "crisp caulk lines" },
  { title: "Doors & frames", desc: "spray or brush + roll" },
  { title: "Windows & wainscoting", desc: "detail work, no drips" },
];

const features = [
  { icon: Paintbrush2, title: "Expert Craftsmanship", desc: "Professional techniques and attention to detail in every brushstroke." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your schedule and complete projects as promised." },
  { icon: Shield, title: "Quality Materials", desc: "Premium paints and supplies for long-lasting, beautiful results." },
  { icon: Award, title: "Satisfaction Guarantee", desc: "Your happiness is our priority. We stand behind every project." },
];

export default function InteriorPaintingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <HeroSection
          title="Interior Painting in Calgary"
          subtitle="Professional interior painters Calgary specializing in living rooms, bedrooms, trim and doors. Modern colors that transform your home — licensed, insured, 2-year warranty."
          imageId="IMG_2538_myvrcq"
          imageAlt="Interior painting Calgary by AspenLeaf Painting"
        />

        {/* Main content */}
        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>

            {/* Intro with image */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center", marginBottom: "5rem" }}>
              <div>
                <h2 style={h2}>Calgary's Interior Painting Specialists – Aspen Leaf Painting</h2>
                <p style={bodyText}>
                  We specialize in interior painting projects of all sizes. From repainting a couple of rooms in your home to repainting your entire interior including all of your trim. The team at Aspen Leaf Painting can transform your home interior with a modern color scheme. You can count on our punctuality, professionalism, and ability to execute your painting project to the highest standard of quality.
                </p>
                <p style={{ ...bodyText, marginTop: "1rem" }}>
                  We proudly offer a comprehensive range of interior painting services to meet the needs of homeowners across Calgary. From refreshing a single room to revitalizing an entire home, our services are tailored to your specific requirements. Our expertise extends to specialty techniques like faux finishes and mural painting, adding unique touches to elevate your space.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={PAGE_IMG} alt="Professional interior painting Calgary by AspenLeaf Painting" style={{ borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", width: "100%", maxWidth: 420, objectFit: "cover" }} crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>

            {/* Process */}
            <div style={{ marginBottom: "5rem" }}>
              <h2 style={{ ...h2, marginBottom: "2rem" }}>Our Interior Painting Process</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                {[
                  { step: "1. Consultation", desc: "We begin with a thorough consultation to understand your needs, discuss the scope of the project, specific areas to be painted, and any special requirements." },
                  { step: "2. Color Selection", desc: "Clients receive a complimentary color consultation. We help you choose the right colors by considering existing paint, lighting, and how colors will appear when dry." },
                  { step: "3. Surface Preparation", desc: "Applying primer is essential, especially for surfaces that have undergone repairs. Primer ensures better adhesion and increases paint durability." },
                  { step: "4. Quality Painting", desc: "We use premium quality paints from reputable suppliers. Careful, skillful application ensures even coverage and attention to detail using the right technique for each surface." },
                  { step: "5. Cleanup & Inspection", desc: "After painting, we conduct a thorough inspection and make any necessary touch-ups for a flawless finish, then clean up completely." },
                  { step: "6. Client Walk-through", desc: "A final walk-through with you ensures complete satisfaction. We also schedule a free follow-up visit 30 days after completion." },
                ].map(item => (
                  <div key={item.step} style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: 10, background: "#fff" }}>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>{item.step}</h3>
                    <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What we paint */}
            <div style={{ marginBottom: "5rem" }}>
              <h2 style={{ ...h2, marginBottom: "1.5rem", textAlign: "center" }}>What We Paint (and Perfect)</h2>
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
          </div>
        </section>


            {/* Extra interior images */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "4rem" }}>
              <img src="https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/internalwall_after_hhqfgo.jpg" alt="Interior wall painting Calgary" style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12 }} crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy" />
              <img src="https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/brick_accentwall_lmj9cv.jpg" alt="Brick accent wall painting Calgary" style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12 }} crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy" />
              <img src="https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/internalwall2_after_ujgdbe.jpg" alt="Interior painting after Calgary" style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12 }} crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy" />
            </div>
        {/* Features */}
        <section style={{ padding: "5rem 1rem", background: "var(--secondary)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ ...h2, textAlign: "center", marginBottom: "3rem" }}>Why Choose Our Interior Painting Services?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
              {features.map(f => {
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

        {/* Related services */}
        <section style={{ padding: "4rem 1rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ ...h2, textAlign: "center", marginBottom: "2rem" }}>Explore Our Other Services</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
              {[
                { href: "/services/exterior-painting", title: "Exterior Painting", desc: "House exterior painting Calgary" },
                { href: "/services/commercial-painting", title: "Commercial Painting", desc: "Office painting Calgary" },
                { href: "/services/drywall-repair", title: "Drywall Repair", desc: "Professional drywall repair Calgary" },
                { href: "/services/deck-staining", title: "Fence & Deck Staining", desc: "Deck staining Calgary" },
                { href: "/portfolio", title: "Our Portfolio", desc: "View our completed projects" },
                { href: "/warranty", title: "Our Warranty", desc: "2-year warranty coverage" },
              ].map(s => (
                <Link key={s.href} href={s.href} style={{ display: "block", padding: "1rem", border: "1px solid var(--border)", borderRadius: 10, textDecoration: "none" }}>
                  <p style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "0.25rem", fontSize: 14 }}>{s.title}</p>
                  <p style={{ fontSize: 13, color: "var(--muted-foreground)" }}>{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 1rem", background: "linear-gradient(135deg, var(--primary) 0%, var(--evergreen) 100%)", color: "#fff", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
              Ready to Transform Your Interior?
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>
              Contact us today for a free, detailed estimate. Professional interior painting services you can trust.
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
