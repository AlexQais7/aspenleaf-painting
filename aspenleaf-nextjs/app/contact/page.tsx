import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | AspenLeaf Painting Calgary",
  description: "Get in touch with AspenLeaf Painting Calgary. Call, email, or book a free estimate online. Licensed painting contractors serving all of Calgary.",
  alternates: { canonical: "https://www.aspenleafpainting.com/contact/" },
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <section style={{ background: "linear-gradient(135deg, rgba(45,106,79,0.08) 0%, var(--secondary) 100%)", padding: "4rem 1rem", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" }}>
              Contact AspenLeaf Painting
            </h1>
            <p style={{ fontSize: 17, color: "var(--muted-foreground)", lineHeight: 1.7 }}>
              Ready to get started? Book a free estimate online or reach us directly — we respond to every inquiry.
            </p>
          </div>
        </section>

        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>

            {/* Contact info */}
            <div>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "2rem" }}>Get In Touch</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { icon: Phone, label: "Phone", value: "(825) 288-7557", href: "tel:+18252887557" },
                  { icon: Mail, label: "Email", value: "alex@aspenleafpainting.com", href: "mailto:alex@aspenleafpainting.com" },
                  { icon: MapPin, label: "Service Area", value: "Calgary, Alberta & Surrounding Areas", href: null },
                  { icon: Clock, label: "Hours", value: "Mon–Fri 8am–6pm, Sat 9am–4pm", href: null },
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "rgba(45,106,79,0.1)", borderRadius: "50%", flexShrink: 0 }}>
                        <Icon size={20} style={{ color: "var(--primary)" }} />
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: "0.2rem" }}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} style={{ fontSize: 16, color: "var(--primary)", textDecoration: "none", fontWeight: 500 }}>{item.value}</a>
                        ) : (
                          <p style={{ fontSize: 16, color: "var(--foreground)" }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: "3rem", padding: "1.5rem", background: "var(--secondary)", borderRadius: 12 }}>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, marginBottom: "0.75rem" }}>Prefer to book online?</h3>
                <p style={{ fontSize: 14, color: "var(--muted-foreground)", marginBottom: "1rem" }}>
                  Use our online booking to pick a time that works for you — no phone call needed.
                </p>
                <BookingForm trigger={
                  <span style={{ display: "inline-block", background: "var(--primary)", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: 8, fontWeight: 600, fontSize: 15, cursor: "pointer" }}>
                    Book Free Estimate
                  </span>
                } />
              </div>
            </div>

            {/* Simple contact form via Netlify */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>Send Us a Message</h2>
              <p style={{ fontSize: 14, color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>We'll get back to you within 1 business day.</p>

              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: "none" }}><label>Don't fill: <input name="bot-field" /></label></p>

                <div style={fieldGroup}>
                  <label style={labelStyle}>Name *</label>
                  <input required name="name" placeholder="Your full name" style={inputStyle} />
                </div>
                <div style={fieldGroup}>
                  <label style={labelStyle}>Email *</label>
                  <input required type="email" name="email" placeholder="your@email.com" style={inputStyle} />
                </div>
                <div style={fieldGroup}>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" name="phone" placeholder="(403) 000-0000" style={inputStyle} />
                </div>
                <div style={fieldGroup}>
                  <label style={labelStyle}>Message *</label>
                  <textarea required name="message" rows={5} placeholder="Tell us about your project..." style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button type="submit" style={{ background: "var(--primary)", color: "#fff", border: "none", borderRadius: 8, padding: "0.875rem", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const fieldGroup: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "0.4rem" };
const labelStyle: React.CSSProperties = { fontSize: 14, fontWeight: 500, color: "var(--foreground)" };
const inputStyle: React.CSSProperties = { width: "100%", padding: "0.625rem 0.75rem", border: "1px solid var(--border)", borderRadius: 6, fontSize: 15, outline: "none", background: "#fff", color: "var(--foreground)" };
