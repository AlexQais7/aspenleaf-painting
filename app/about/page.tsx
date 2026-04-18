import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import HeroSection from "@/components/shared/HeroSection";
import { Users, Award, Heart, Shield, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – Painting Contractors Calgary | AspenLeaf Painting",
  description: "Meet Alex and Olha Kais, founders of AspenLeaf Painting Calgary. Licensed painting contractors committed to quality, trust, and community.",
  alternates: { canonical: "https://www.aspenleafpainting.com/about/" },
  openGraph: {
    title: "About AspenLeaf Painting – Calgary Painting Contractors",
    description: "Meet Alex and Olha Kais. Licensed, insured painting contractors serving Calgary with care.",
    url: "https://www.aspenleafpainting.com/about/",
  },
};

// REPLACE with your Cloudinary URLs once uploaded
const ALEX_HEADSHOT = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/alex_headshot_jsmyc9.jpg";
const OLHA_HEADSHOT = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/olha_headshot_bcca6o.jpg";
const TOGETHER_IMG = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/olha_alex_lfnr5i.jpg";

const values = [
  { icon: Heart, title: "Family First", desc: "We treat every client like family and every home like our own." },
  { icon: Award, title: "Quality Craftsmanship", desc: "We take pride in our work and never compromise on quality." },
  { icon: Shield, title: "Trust & Reliability", desc: "Honest communication and dependable service, every time." },
  { icon: Users, title: "Community Focus", desc: "Proud to serve and give back to our Calgary community." },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        {/* Hero */}
        <HeroSection
          title="Painting Contractors Calgary"
          subtitle="Licensed and insured painting contractors Calgary — local experts committed to customer-first service, vetted crews, and quality results you can trust."
          imageId="olha_alex_lfnr5i"
          imageAlt="Alex and Olha Kais - Founders of AspenLeaf Painting Calgary"
        />

        {/* Team Photos */}
        <section style={{ padding: "5rem 1rem", background: "linear-gradient(to bottom, var(--background), var(--secondary))" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "3rem" }}>
              <div style={{ textAlign: "center" }}>
                <img src={ALEX_HEADSHOT} alt="Alex Kais - Co-founder of AspenLeaf Painting Calgary"
                  style={{ width: 200, height: 200, borderRadius: "50%", objectFit: "cover", objectPosition: "top", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", border: "4px solid rgba(255,255,255,0.8)" }}
                  crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy" width={200} height={200} />
                <p style={{ marginTop: "0.75rem", fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 600 }}>Alex Kais</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img src={TOGETHER_IMG} alt="Alex and Olha Kais - Founders of AspenLeaf Painting Calgary"
                  style={{ width: 220, height: 220, borderRadius: "50%", objectFit: "cover", objectPosition: "center", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", border: "4px solid rgba(255,255,255,0.9)" }}
                  crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy" width={220} height={220} />
              </div>
              <div style={{ textAlign: "center" }}>
                <img src={OLHA_HEADSHOT} alt="Olha Kais - Co-founder of AspenLeaf Painting Calgary"
                  style={{ width: 200, height: 200, borderRadius: "50%", objectFit: "cover", objectPosition: "top", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", border: "4px solid rgba(255,255,255,0.8)" }}
                  crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy" width={200} height={200} />
                <p style={{ marginTop: "0.75rem", fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 600 }}>Olha Kais</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "2rem", textAlign: "center" }}>
              Our Story
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Founded by Alex and Olha Kais, AspenLeaf Painting is more than a painting company — it's our way of giving back to the community that welcomed us with open arms.",
                "When we arrived in Calgary from Ukraine during the war, we honestly didn't know what to expect. We were starting over with little more than hope and determination. But this city and the people in it embraced us in ways we'll never forget. Neighbors helped us settle in, strangers became friends, and Calgary became home.",
                "That experience changed us. It showed us what genuine care looks like, and it's exactly how we want to treat every person who trusts us with their home.",
                "Alex spent six years in tech as a product manager, but his real passion has always been working with his hands. Weekends would find him painting rooms in our apartment, perfecting techniques, losing track of time because he genuinely loves the craft. When we decided to start AspenLeaf, it wasn't just about business — it was about turning that passion into something that could serve others.",
                "Olha has been on the other side of customer service, which is why she puts care and clarity first in every project. After 10+ years managing processes for large companies she's seen every way things can go wrong, and more importantly, how to make them go right. She's the one who ensures that when you call us, you're talking to real people who genuinely care about solving your problem, not checking a box.",
                "We're a husband-and-wife team, and we know that when you invite us into your home, you're trusting us with your most important space. We don't take that lightly.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>{p}</p>
              ))}

              <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>Here's what that means when we work on your project:</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", paddingLeft: "1rem" }}>
                {[
                  "We show up when we say we will, because we know you've planned your day around us",
                  "We protect your furniture and floors like they're our own",
                  "We clean up completely before we leave — no mystery paint cans or forgotten brushes",
                  "We talk to you like a neighbour, not a transaction — honest about timelines, upfront about costs",
                  "We only hire painters who share our values, because your home deserves people who genuinely care",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                    <span style={{ color: "var(--primary)", fontWeight: 700, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                We're not the biggest painting company in Calgary, and we're not trying to be. We're the one that will treat your home the way we'd want ours treated — with respect, skill, and the kind of care that comes from understanding what it means to build something worth protecting.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "5rem 1rem", background: "var(--secondary)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.75rem" }}>Our Core Values</h2>
              <p style={{ fontSize: 17, color: "var(--muted-foreground)" }}>These principles guide every decision we make and every project we complete.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
              {values.map(v => {
                const Icon = v.icon;
                return (
                  <div key={v.title} style={{ textAlign: "center" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, background: "rgba(45,106,79,0.1)", borderRadius: "50%", marginBottom: "1rem" }}>
                      <Icon size={28} style={{ color: "var(--primary)" }} />
                    </div>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, marginBottom: "0.5rem" }}>{v.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.6 }}>{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section style={{ padding: "4rem 1rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "2rem", textAlign: "center" }}>Complete Home & Business Services</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
              {[
                { href: "/services/interior-painting", title: "Interior Painting", desc: "Professional interior painters Calgary" },
                { href: "/services/exterior-painting", title: "Exterior Painting", desc: "House exterior painting Calgary" },
                { href: "/services/commercial-painting", title: "Commercial Painting", desc: "Office painting Calgary" },
                { href: "/services/drywall-repair", title: "Drywall Repair", desc: "Professional drywall repair Calgary" },
                { href: "/services/deck-staining", title: "Deck Staining", desc: "Deck staining Calgary services" },
                { href: "/portfolio", title: "Our Portfolio", desc: "View our painting projects" },
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
              Ready to Work with Calgary's Trusted Painters?
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>
              Contact us today for a free estimate and discover why families across Calgary choose AspenLeaf Painting.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <BookingForm trigger={<span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "var(--primary)", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Get Free Estimate</span>} />
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
