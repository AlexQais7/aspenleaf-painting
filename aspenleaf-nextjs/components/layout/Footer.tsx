"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--foreground)", color: "#fff" }}>
      {/* Main footer */}
      <div style={{ padding: "4rem 1.5rem 3rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <img src="https://res.cloudinary.com/dile6kx4g/image/upload/f_jpg/logo_transparent_i5re94.jpg" alt="AspenLeaf Painting" style={{ height: 52, width: "auto", marginBottom: "1.25rem", filter: "brightness(0) invert(1)" }} />
            <p style={{ fontSize: 14, opacity: 0.65, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Professional painting contractors serving Calgary and surrounding areas. Licensed, insured, and committed to quality.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { icon: Phone, text: "(825) 288-7557", href: "tel:+18252887557" },
                { icon: Mail, text: "alex@aspenleafpainting.com", href: "mailto:alex@aspenleafpainting.com" },
                { icon: MapPin, text: "Calgary, Alberta", href: null },
                { icon: Clock, text: "Mon–Fri 8am–6pm, Sat 9am–4pm", href: null },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: 13 }}>
                    <Icon size={14} style={{ opacity: 0.5, flexShrink: 0 }} />
                    {item.href
                      ? <a href={item.href} style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>{item.text}</a>
                      : <span style={{ color: "rgba(255,255,255,0.65)" }}>{item.text}</span>
                    }
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={footerHeading}>Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "/services/interior-painting", label: "Interior Painting" },
                { href: "/services/exterior-painting", label: "Exterior Painting" },
                { href: "/services/commercial-painting", label: "Commercial Painting" },
                { href: "/services/drywall-repair", label: "Drywall Repair" },
                { href: "/services/deck-staining", label: "Fence & Deck Staining" },
                { href: "/services/texture-painting", label: "Texture Painting" },
              ].map(s => (
                <li key={s.href}>
                  <Link href={s.href} style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 14, transition: "color 0.15s" }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={footerHeading}>Company</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "/about", label: "About Us" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/warranty", label: "2-Year Warranty ✓" },
                { href: "/contact", label: "Contact" },
                { href: "/booking", label: "Book Estimate" },
              ].map(s => (
                <li key={s.href}>
                  <Link href={s.href} style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 14 }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 style={footerHeading}>Free Estimate</h4>
            <p style={{ fontSize: 14, opacity: 0.65, lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Ready to get started? Book your free, no-obligation estimate today.
            </p>
            <Link href="/booking" style={{
              display: "inline-block", background: "var(--primary-light)", color: "#fff",
              padding: "0.75rem 1.5rem", borderRadius: 50, fontWeight: 600, fontSize: 14,
              textDecoration: "none", transition: "all 0.2s"
            }}>
              Book Free Estimate →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "1.25rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem", fontSize: 12, opacity: 0.5 }}>
          <p>© {new Date().getFullYear()} AspenLeaf Painting. All rights reserved.</p>
          <p>Calgary, AB · Licensed & Insured · 2-Year Warranty</p>
        </div>
      </div>
    </footer>
  );
}

const footerHeading: React.CSSProperties = {
  fontSize: 11, fontWeight: 700, textTransform: "uppercase",
  letterSpacing: 2, opacity: 0.5, marginBottom: "1rem"
};
