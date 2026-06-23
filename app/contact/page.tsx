import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | AspenLeaf Painting Calgary",
  description: "Get in touch with AspenLeaf Painting Calgary. Call, email, or book a free estimate online. Licensed painting contractors serving all of Calgary.",
  alternates: { canonical: "https://www.aspenleafpainting.com/contact" },
};

const serviceAreas = [
  { name: "SW Calgary", communities: "Signal Hill, West Springs, Aspen Woods, Cougar Ridge, Coach Hill, Glamorgan, Glenbrook, Lakeview, Springbank Hill" },
  { name: "NW Calgary", communities: "Tuscany, Sage Hill, Nolan Hill, Sherwood, Royal Oak, Kincora, Evanston, Panorama Hills, Country Hills" },
  { name: "NE Calgary", communities: "Redstone, Skyview Ranch, Cornerstone, Livingston, Saddle Ridge, Taradale, Martindale, Falconridge" },
  { name: "SE Calgary", communities: "Auburn Bay, Mahogany, McKenzie Towne, Cranston, Legacy, Copperfield, New Brighton, Seton, Chaparral" },
  { name: "Central Calgary", communities: "Beltline, Hillhurst, Kensington, Bridgeland, Inglewood, Marda Loop, Altadore, Bankview, Mount Pleasant" },
  { name: "Surrounding Area", communities: "Airdrie, Cochrane, Okotoks, Chestermere, Langdon — contact us to confirm availability for your location" },
];

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        {/* Hero */}
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

        {/* Contact + Form */}
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

              <div style={{ marginTop: "2rem", fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                <p style={{ marginBottom: "0.75rem" }}>
                  We respond to every phone call, text, and email. During business hours you'll usually hear back within a few hours. If you reach us outside of hours, expect a response the next morning.
                </p>
                <p>
                  For urgent warranty concerns or active project questions, calling is fastest. For estimates, project inquiries, or general questions, email or the booking form work great.
                </p>
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
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>Send Us a Message</h3>
              <p style={{ fontSize: 14, color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>We'll get back to you within 1 business day.</p>

              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: "none" }}><label>Don{"'"}t fill: <input name="bot-field" /></label></p>

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

        {/* Service Areas */}
        <section style={{ padding: "5rem 1rem", background: "var(--secondary)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Where We Work
            </h3>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: 800 }}>
              AspenLeaf Painting serves homeowners and businesses across Calgary and many surrounding communities. We travel to any Calgary quadrant — NW, NE, SW, SE, and central — as well as nearby cities and towns within reasonable driving distance. If you're unsure whether we cover your area, just call or send a message. We'll let you know right away.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: 800 }}>
              Our home base is in Cougar Ridge in southwest Calgary, so we have a particularly strong presence in SW communities, but we regularly work across the city. Distance does not affect our service quality, pricing, or response times — every client gets the same attention regardless of where they are in Calgary.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {serviceAreas.map(area => (
                <div key={area.name} style={{ padding: "1.5rem", background: "#fff", border: "1px solid var(--border)", borderRadius: 12 }}>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>{area.name}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.6 }}>{area.communities}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 15, color: "var(--muted-foreground)", marginTop: "2rem", lineHeight: 1.7 }}>
              Don{"'"}t see your neighbourhood listed? We likely still serve it. Reach out at{" "}
              <a href="tel:+18252887557" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>(825) 288-7557</a>{" "}
              or{" "}
              <a href="mailto:alex@aspenleafpainting.com" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>alex@aspenleafpainting.com</a>{" "}
              and we{"'"}ll confirm quickly.
            </p>
          </div>
        </section>

        {/* What happens next */}
        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" }}>
              What Happens After You Reach Out
            </h3>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              When you contact us — whether by phone, email, or the form above — you{"'"}ll hear back from Alex personally. We don{"'"}t use call centres, automated responses, or sales teams. Every inquiry is handled by the person who will actually show up to do your estimate and run your project.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              At that first contact, we{"'"}ll ask a few brief questions about your project — the type of work, the size of the space, and your approximate timeline. This helps us come prepared to the estimate visit and make the most of your time. There{"'"}s no lengthy intake form, no pressure to commit to anything, and no sales pitch. We just want to understand what you need.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
              From there, we{"'"}ll schedule an in-person visit at a time that works for you. After the visit, you{"'"}ll receive a written, itemized quote within 24 hours. You can take as much time as you need to review it, ask questions, or compare it with other quotes. When you{"'"}re ready to move forward, we book a start date and get to work.
            </p>
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
