import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import HeroSection from "@/components/shared/HeroSection";
import { Check, Phone, Shield, Award, Paintbrush2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Drywall Repair Calgary | AspenLeaf Painting",
  description: "Professional drywall repair in Calgary — small patches to major repairs. Seamless finishes, texture matching, ready to paint. Free estimates.",
  alternates: { canonical: "https://www.aspenleafpainting.com/services/drywall-repair/" },
};


const HERO_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/for_drywall_page_flgoa2.jpg";
const PAGE_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/for_drywall_page2_jfkhfo.jpg";

const repairTypes = [
  { title: "Small holes & nail pops", desc: "Quick, seamless patches for dings, nail holes, and minor damage" },
  { title: "Medium patches", desc: "Door handle damage, cable holes, outlet repairs up to 6 inches" },
  { title: "Large section repairs", desc: "Water damage, major impact damage, renovation cut-outs" },
  { title: "Crack repair", desc: "Settlement cracks, corner cracks, tape joint failures" },
  { title: "Water damage restoration", desc: "Remove damaged drywall, treat for moisture, patch and finish" },
  { title: "Texture matching", desc: "We match your existing texture so repairs blend in perfectly" },
];

export default function DrywallRepairPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <HeroSection
          title="Drywall Repair in Calgary"
          subtitle="From small nail holes to major water damage — seamless drywall repair Calgary with expert texture matching, ready to paint. No job too small or too large."
          imageId="for_drywall_page_flgoa2"
          imageAlt="Drywall Repair in Calgary by AspenLeaf Painting"
        />

        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ marginBottom: "4rem" }}>
              <h2 style={h2}>Professional Drywall Repair Calgary</h2>
              <p style={bodyText}>
                Damaged drywall stands out — and no amount of paint will hide a poorly done repair. Whether you have a small hole from a doorknob, cracks from your home settling, or larger sections damaged by water or renovation work, AspenLeaf Painting delivers seamless drywall repairs that become invisible once painted.
              </p>
              <p style={{ ...bodyText, marginTop: "1rem" }}>
                We handle everything from small patches to major repairs — but not full drywall installation. Our specialty is taking existing damaged walls and restoring them to a smooth, paint-ready surface. We match your existing texture so the repair blends in perfectly with the surrounding wall. Nobody should be able to tell where the repair is.
              </p>
              <p style={{ ...bodyText, marginTop: "1rem" }}>
                Most of our drywall repair customers also have us paint the repaired area or the entire room when we're done — it makes sense to get a perfect finish while we're already there. Ask us about combining drywall repair with our <Link href="/services/interior-painting" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>interior painting service</Link> for a seamless result.
              </p>
            </div>

            <div style={{ marginBottom: "4rem" }}>
              <h2 style={{ ...h2, textAlign: "center", marginBottom: "1.5rem" }}>Types of Drywall Repair We Do</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                {repairTypes.map(item => (
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
              <h2 style={{ ...h2, marginBottom: "1.5rem" }}>Our Drywall Repair Process</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
                {[
                  { step: "1. Assessment", desc: "We inspect the damage, identify any underlying issues (especially with water damage), and provide a clear quote." },
                  { step: "2. Repair", desc: "We cut out damaged sections cleanly, apply backing where needed, and fill with the appropriate patching compound." },
                  { step: "3. Taping & Mudding", desc: "For larger repairs, we tape joints and apply multiple coats of joint compound, sanding between coats for a smooth surface." },
                  { step: "4. Texture Matching", desc: "We analyze your existing wall texture and replicate it on the repaired area so it blends in seamlessly." },
                  { step: "5. Prime & Paint Ready", desc: "Once dry and sanded, the surface is primed and ready for paint — or we can paint it for you as part of the same job." },
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
            <h2 style={{ ...h2, textAlign: "center", marginBottom: "3rem" }}>Why Choose AspenLeaf for Drywall Repair?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
              {[
                { icon: Paintbrush2, title: "Invisible Repairs", desc: "We texture-match so well that nobody can tell where the repair is once painted." },
                { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed with comprehensive insurance coverage." },
                { icon: Award, title: "Paint-Ready Finish", desc: "Every repair is left perfectly primed and ready for paint." },
                { icon: Check, title: "Small to Large", desc: "One nail hole or an entire water-damaged wall — we handle it all." },
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
              Got Damaged Walls?
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>
              Get a free estimate — we'll assess the damage and give you a clear, honest quote.
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
