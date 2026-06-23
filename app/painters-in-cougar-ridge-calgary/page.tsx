import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import HeroSection from "@/components/shared/HeroSection";
import { Check, Phone, MapPin, Clock, Shield, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Painters in Cougar Ridge, Calgary | AspenLeaf Painting",
  description:
    "Local painters based right in Cougar Ridge, Calgary. Interior & exterior painting, fast quotes, licensed & insured, 2-year warranty. Free estimates.",
  alternates: {
    canonical: "https://www.aspenleafpainting.com/painters-in-cougar-ridge-calgary",
  },
  openGraph: {
    title: "Painters in Cougar Ridge, Calgary | AspenLeaf Painting",
    description:
      "AspenLeaf Painting is based in Cougar Ridge. Interior & exterior painting for Cougar Ridge homes — licensed, insured, 2-year warranty.",
    url: "https://www.aspenleafpainting.com/painters-in-cougar-ridge-calgary",
  },
};

// REPLACE with real Cougar Ridge / nearby project photos once available
const HERO_IMG = "exteriorshade_after_cvst3f";
const PAGE_IMG =
  "https://res.cloudinary.com/dile6kx4g/image/upload/w_1200,q_60,f_jpg/exterirorfront_after_afypl9.jpg";

const houseStyles = [
  {
    title: "2-storey stucco & Hardie board exteriors",
    desc: "common throughout Cougar Ridge's newer streets",
  },
  {
    title: "Walkout bungalows & estate homes",
    desc: "larger surface areas, taller exteriors near the ridge",
  },
  {
    title: "Vinyl & composite siding combinations",
    desc: "mixed-material homes built in the early-to-mid 2000s",
  },
  {
    title: "South/west-facing exteriors",
    desc: "extra UV and chinook exposure on many Cougar Ridge lots",
  },
];

const faqs = [
  {
    q: "Do you actually work in Cougar Ridge, or is this just a generic service area page?",
    a: "We're based in Cougar Ridge — our home address is on Cougarstone Ct SW. It's a quick drive to estimate or start a job almost anywhere in the neighborhood, which means faster quotes and more flexibility scheduling around your timeline.",
  },
  {
    q: "How fast can I get a quote if I'm in Cougar Ridge or nearby?",
    a: "Because we're already in the area, we can usually schedule an in-person estimate within a day or two, often sooner. Call or text (825) 288-7557 and we'll find a time that works.",
  },
  {
    q: "What's different about painting Cougar Ridge homes specifically?",
    a: "Cougar Ridge sits along the escarpment on the west side of the city, so a lot of homes get heavier sun and wind exposure on south- and west-facing walls than homes further into the city. We pay close attention to caulking and primer on those exposures so paint holds up through Calgary's freeze-thaw cycles.",
  },
  {
    q: "Do you handle both interior and exterior work in Cougar Ridge?",
    a: "Yes — interior repaints, trim and doors, and full exterior projects including stucco, Hardie board, and siding. Most Cougar Ridge homes we work on end up needing some combination of both over time.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, fully licensed and insured, with a 2-year warranty on workmanship across every project, including the ones closest to home.",
  },
  {
    q: "How much does a typical Cougar Ridge exterior repaint cost?",
    a: "It depends on square footage, number of storeys, and surface condition, but most Cougar Ridge exteriors run in a similar range to other SW Calgary homes of comparable size — see the cost section below for a ballpark, and we'll give you an exact written quote after a free on-site visit.",
  },
];

export default function PaintersInCougarRidgeCalgaryPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <HeroSection
          title="Painters in Cougar Ridge, Calgary"
          subtitle="AspenLeaf Painting is based right here in Cougar Ridge. Interior & exterior painting for your neighbors, with fast quotes and the same 2-year warranty on every job — licensed and insured."
          imageId={HERO_IMG}
          imageAlt="Cougar Ridge Calgary house painting by AspenLeaf Painting"
        />

        {/* Local intro */}
        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "3rem",
                alignItems: "center",
                marginBottom: "5rem",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(45,106,79,0.1)",
                    color: "var(--primary)",
                    padding: "0.4rem 0.9rem",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: "1.25rem",
                  }}
                >
                  <MapPin size={14} /> Based on Cougarstone Ct SW
                </div>
                <h2 style={h2}>Your Neighborhood Painters in Cougar Ridge</h2>
                <p style={bodyText}>
                  AspenLeaf Painting isn&apos;t a Calgary-wide company that
                  happens to take Cougar Ridge jobs — we live and work out of
                  this neighborhood. Alex and Olha run the business out of
                  Cougar Ridge, which means estimates here are quick to
                  schedule and we&apos;re genuinely familiar with the homes
                  along the escarpment, the mix of stucco and Hardie board
                  exteriors, and the way Calgary&apos;s wind and sun hit
                  houses differently depending on which street they&apos;re
                  on.
                </p>
                <p style={{ ...bodyText, marginTop: "1rem" }}>
                  Whether it&apos;s an interior refresh before selling, a
                  full exterior repaint after a Calgary winter, or just trim
                  and touch-ups, we treat every Cougar Ridge home the way
                  we&apos;d treat our own — because for us, this
                  neighborhood basically is home.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={PAGE_IMG}
                  alt="Exterior house painting near Cougar Ridge Calgary"
                  style={{
                    borderRadius: 12,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    width: "100%",
                    maxWidth: 420,
                    objectFit: "cover",
                  }}
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={420}
                  height={560}
                />
              </div>
            </div>

            {/* House styles in the neighborhood */}
            <div style={{ marginBottom: "5rem" }}>
              <h3 style={{ ...h2, textAlign: "center", marginBottom: "1.5rem" }}>
                Homes We Paint Around Cougar Ridge
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                }}
              >
                {houseStyles.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      padding: "1.25rem",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      background: "#fff",
                    }}
                  >
                    <Check
                      size={18}
                      style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}
                    />
                    <div>
                      <p
                        style={{
                          fontWeight: 600,
                          color: "var(--foreground)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {item.title}
                      </p>
                      <p style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost section */}
            <div style={{ marginBottom: "5rem" }}>
              <h3 style={{ ...h2, marginBottom: "1.5rem" }}>
                Cougar Ridge Painting Costs — What to Expect
              </h3>
              <p style={bodyText}>
                Every quote is based on an in-person walkthrough, but as a
                starting point for Cougar Ridge homeowners:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.5rem",
                  marginTop: "1.5rem",
                }}
              >
                {[
                  {
                    label: "Interior — single room",
                    range: "$450 – $900",
                  },
                  {
                    label: "Interior — full main floor",
                    range: "$2,500 – $5,500",
                  },
                  {
                    label: "Exterior — 2-storey single-family",
                    range: "$5,000 – $9,500",
                  },
                  {
                    label: "Exterior — walkout / estate-style",
                    range: "$8,000 – $14,000+",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "1.5rem",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      background: "var(--secondary)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--muted-foreground)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "var(--primary)",
                      }}
                    >
                      {item.range}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ ...bodyText, marginTop: "1.5rem", fontSize: 13 }}>
                Final pricing depends on surface condition, prep required,
                ceiling height, and the products you choose. Book a free
                on-site estimate for an exact, written quote.
              </p>
            </div>

            {/* FAQ section */}
            <div>
              <h3 style={{ ...h2, textAlign: "center", marginBottom: "2rem" }}>
                Cougar Ridge Painting — Frequently Asked Questions
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  maxWidth: 800,
                  margin: "0 auto",
                }}
              >
                {faqs.map((item) => (
                  <div
                    key={item.q}
                    style={{
                      padding: "1.5rem",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      background: "#fff",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        color: "var(--foreground)",
                        marginBottom: "0.5rem",
                        fontSize: 15,
                      }}
                    >
                      {item.q}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--muted-foreground)",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project photos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            maxWidth: 1100,
            margin: "0 auto 4rem",
            padding: "0 1rem",
          }}
        >
          <img
            src="https://res.cloudinary.com/dile6kx4g/image/upload/w_1200,q_60,f_jpg/internalwall_after_hhqfgo.jpg"
            alt="Interior painting near Cougar Ridge Calgary"
            style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12 }}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            loading="lazy"
            width={600}
            height={220}
          />
          <img
            src="https://res.cloudinary.com/dile6kx4g/image/upload/w_1200,q_60,f_jpg/Simple_Colourful_Before_and_After_Color_Grade_6_p3dqbe.jpg"
            alt="Exterior painting before and after near Cougar Ridge Calgary"
            style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12 }}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            loading="lazy"
            width={600}
            height={220}
          />
          <img
            src="https://res.cloudinary.com/dile6kx4g/image/upload/w_1200,q_60,f_jpg/brick_accentwall_lmj9cv.jpg"
            alt="Accent wall painting near Cougar Ridge Calgary"
            style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12 }}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            loading="lazy"
            width={600}
            height={220}
          />
        </div>

        {/* Trust / features */}
        <section style={{ padding: "5rem 1rem", background: "var(--secondary)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h3 style={{ ...h2, textAlign: "center", marginBottom: "3rem" }}>
              Why Cougar Ridge Homeowners Choose AspenLeaf
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  icon: MapPin,
                  title: "Genuinely Local",
                  desc: "We're based in Cougar Ridge, not dispatched from across the city.",
                },
                {
                  icon: Clock,
                  title: "Fast Quotes",
                  desc: "Being nearby means quicker scheduling for estimates and start dates.",
                },
                {
                  icon: Shield,
                  title: "Licensed & Insured",
                  desc: "Full coverage on every project, backed by a 2-year warranty.",
                },
                {
                  icon: Award,
                  title: "Premium Materials",
                  desc: "Benjamin Moore & Sherwin-Williams paints suited to Calgary's climate.",
                },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 64,
                        height: 64,
                        background: "rgba(45,106,79,0.1)",
                        borderRadius: "50%",
                        marginBottom: "1rem",
                      }}
                    >
                      <Icon size={28} style={{ color: "var(--primary)" }} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: 17,
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {f.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nearby areas + related services */}
        <section style={{ padding: "4rem 1rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h3 style={{ ...h2, textAlign: "center", marginBottom: "2rem" }}>
              We Also Serve Nearby SW Calgary Communities
            </h3>
            <p style={{ ...bodyText, textAlign: "center", marginBottom: "2rem" }}>
              Cougar Ridge is home base, but we regularly work throughout
              the surrounding area, including:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
                marginBottom: "3rem",
              }}
            >
              {[
                "Aspen Woods",
                "West Springs",
                "Springbank Hill",
                "Signal Hill",
                "Coach Hill",
                "Glamorgan",
                "Glenbrook",
                "Lakeview",
              ].map((area) => (
                <div
                  key={area}
                  style={{
                    padding: "0.9rem 1rem",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    background: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--foreground)",
                    textAlign: "center",
                  }}
                >
                  {area}
                </div>
              ))}
            </div>

            <h3 style={{ ...h2, textAlign: "center", marginBottom: "2rem" }}>
              Explore Our Services
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/services/interior-painting",
                  title: "Interior Painting",
                  desc: "Interior painting Calgary",
                },
                {
                  href: "/services/exterior-painting",
                  title: "Exterior Painting",
                  desc: "Exterior painting Calgary",
                },
                {
                  href: "/services/drywall-repair",
                  title: "Drywall Repair",
                  desc: "Professional drywall repair Calgary",
                },
                {
                  href: "/services/deck-staining",
                  title: "Fence & Deck Staining",
                  desc: "Deck staining Calgary",
                },
                {
                  href: "/portfolio",
                  title: "Our Portfolio",
                  desc: "View our completed projects",
                },
                {
                  href: "/warranty",
                  title: "Our Warranty",
                  desc: "2-year warranty coverage",
                },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    display: "block",
                    padding: "1rem",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      color: "var(--foreground)",
                      marginBottom: "0.25rem",
                      fontSize: 14,
                    }}
                  >
                    {s.title}
                  </p>
                  <p style={{ fontSize: 13, color: "var(--muted-foreground)" }}>{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: "5rem 1rem",
            background: "linear-gradient(135deg, var(--primary) 0%, var(--evergreen) 100%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Get a Free Estimate From Your Cougar Ridge Painters
            </h3>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>
              Local, licensed, and insured — with a 2-year warranty on every
              project, near or far from home.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <BookingForm
                trigger={
                  <span style={{ ...primaryBtn, background: "#fff", color: "var(--primary)" }}>
                    Schedule Free Estimate
                  </span>
                }
              />
              <a
                href="tel:+18252887557"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "2px solid rgba(255,255,255,0.5)",
                  color: "#fff",
                  padding: "0.875rem 1.75rem",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 16,
                  textDecoration: "none",
                }}
              >
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

const h2: React.CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(1.4rem, 3vw, 2rem)",
  fontWeight: 700,
  color: "var(--foreground)",
  marginBottom: "1rem",
};
const bodyText: React.CSSProperties = {
  fontSize: 16,
  color: "var(--muted-foreground)",
  lineHeight: 1.8,
};
const primaryBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  background: "var(--primary)",
  color: "#fff",
  padding: "0.875rem 1.75rem",
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
  cursor: "pointer",
};
