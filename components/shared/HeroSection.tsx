import BookingForm from "@/components/forms/BookingForm";
import { Phone } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageId: string;
  imageAlt: string;
  showCTA?: boolean;
}

const BASE = "https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg";

export default function HeroSection({ title, subtitle, imageId, imageAlt, showCTA = true }: HeroSectionProps) {
  return (
    <section style={{ position: "relative", minHeight: "560px", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src={`${BASE}/${imageId}.jpg`}
          alt={imageAlt}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          crossOrigin="anonymous" referrerPolicy="no-referrer" loading="eager"
        />
        {/* Dark gradient overlay for text readability */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(27,67,50,0.88) 0%, rgba(27,67,50,0.65) 50%, rgba(27,67,50,0.40) 100%)"
        }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "6rem 1.5rem", width: "100%" }}>
        <div style={{ maxWidth: 700 }}>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "1.25rem",
            lineHeight: 1.1,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)"
          }}>
            {title}
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.92)",
            marginBottom: "2.5rem",
            lineHeight: 1.7,
            maxWidth: 580
          }}>
            {subtitle}
          </p>

          {showCTA && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <BookingForm trigger={
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "#fff", color: "var(--primary)",
                  padding: "0.9rem 2rem", borderRadius: 50,
                  fontWeight: 700, fontSize: 15, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  transition: "all 0.2s", letterSpacing: 0.3
                }}>
                  Get Free Estimate
                </span>
              } />
              <a href="tel:+18252887557" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                border: "2px solid rgba(255,255,255,0.7)", color: "#fff",
                padding: "0.9rem 1.75rem", borderRadius: 50,
                fontWeight: 600, fontSize: 15, textDecoration: "none",
                transition: "all 0.2s", backdropFilter: "blur(8px)",
                background: "rgba(255,255,255,0.1)"
              }}>
                <Phone size={16} /> (825) 288-7557
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80, zIndex: 1,
        background: "linear-gradient(to top, var(--background), transparent)"
      }} />
    </section>
  );
}
