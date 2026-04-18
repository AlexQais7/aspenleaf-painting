"use client";

import BookingForm from "@/components/forms/BookingForm";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const services = [
  { href: "/services/interior-painting", label: "Interior Painting" },
  { href: "/services/exterior-painting", label: "Exterior Painting" },
  { href: "/services/commercial-painting", label: "Commercial" },
  { href: "/services/drywall-repair", label: "Drywall Repair" },
  { href: "/services/deck-staining", label: "Fence & Deck Staining" },
  { href: "/services/texture-painting", label: "Texture Painting" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--border)" : "var(--border)"}`,
      position: "sticky", top: 0, zIndex: 50,
      transition: "all 0.3s ease",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img src="https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/logo_transparent_i5re94.jpg" alt="AspenLeaf Painting Calgary" style={{ height: 50, width: "auto" }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          <Link href="/" style={navLink}>Home</Link>
          
          <div style={{ position: "relative", padding: "0.5rem 0" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <button style={{ ...navLink, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: 0 }}>
              Services <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0)" }} />
            </button>
            {servicesOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 2px)", left: "50%", transform: "translateX(-50%)",
                background: "#fff", border: "1px solid var(--border)", borderRadius: 12,
                paddingTop: "0.75rem", paddingBottom: "0.5rem", paddingLeft: "0.5rem", paddingRight: "0.5rem", minWidth: 240,
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)", zIndex: 100
              }}>
                {services.map(s => (
                  <Link key={s.href} href={s.href} style={{
                    display: "block", padding: "0.65rem 1rem", color: "var(--foreground)",
                    textDecoration: "none", fontSize: 14, fontWeight: 500, borderRadius: 8,
                    transition: "background 0.15s"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--secondary)"; e.currentTarget.style.color = "var(--primary)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--foreground)"; }}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/portfolio" style={navLink}>Portfolio</Link>
          <Link href="/warranty" style={navLink}>Warranty</Link>
          <Link href="/about" style={navLink}>About</Link>
          <Link href="/contact" style={navLink}>Contact</Link>
          
          <a href="tel:+18252887557" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--primary)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            <Phone size={14} /> (825) 288-7557
          </a>
          
          <BookingForm trigger={
            <span style={{
              background: "var(--primary)", color: "#fff", padding: "0.6rem 1.4rem",
              borderRadius: 50, fontSize: 14, fontWeight: 600,
              letterSpacing: 0.3, cursor: "pointer",
              boxShadow: "0 2px 12px rgba(45,106,79,0.3)",
              display: "inline-block"
            }}>
              Book Estimate
            </span>
          } />
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }} className="mobile-menu-btn">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid var(--border)", padding: "1.5rem" }}>
          <Link href="/" style={mobileLink} onClick={() => setMobileOpen(false)}>Home</Link>
          <div style={{ marginBottom: "0.5rem" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: "0.5rem", paddingLeft: "0.5rem" }}>Services</p>
            {services.map(s => (
              <Link key={s.href} href={s.href} style={{ ...mobileLink, paddingLeft: "1rem", fontSize: 14, color: "var(--primary)" }} onClick={() => setMobileOpen(false)}>
                {s.label}
              </Link>
            ))}
          </div>
          <Link href="/portfolio" style={mobileLink} onClick={() => setMobileOpen(false)}>Portfolio</Link>
          <Link href="/warranty" style={mobileLink} onClick={() => setMobileOpen(false)}>Warranty</Link>
          <Link href="/about" style={mobileLink} onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" style={mobileLink} onClick={() => setMobileOpen(false)}>Contact</Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
            <a href="tel:+18252887557" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", border: "2px solid var(--primary)", color: "var(--primary)", padding: "0.75rem", borderRadius: 50, fontWeight: 600, textDecoration: "none" }}>
              <Phone size={16} /> (825) 288-7557
            </a>
            <BookingForm trigger={
              <span style={{ display: "block", background: "var(--primary)", color: "#fff", padding: "0.75rem", borderRadius: 50, fontWeight: 600, textAlign: "center", cursor: "pointer" }} onClick={() => setMobileOpen(false)}>
                Book Free Estimate
              </span>
            } />
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) { .mobile-menu-btn { display: none !important; } .desktop-nav { display: flex !important; } }
        @media (max-width: 899px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
      `}</style>
    </header>
  );
}

const navLink: React.CSSProperties = { color: "var(--foreground)", textDecoration: "none", fontSize: 15, fontWeight: 500 };
const mobileLink: React.CSSProperties = { display: "block", padding: "0.75rem 0.5rem", color: "var(--foreground)", textDecoration: "none", fontSize: 15, borderBottom: "1px solid var(--border)" };
