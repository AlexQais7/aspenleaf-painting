"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface BookingFormProps {
  trigger?: React.ReactNode;
  className?: string;
}

type Step = "form" | "calendar" | "success";
type ContactChoice = "schedule" | "callback" | "";

export default function BookingForm({ trigger, className }: BookingFormProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [contactChoice, setContactChoice] = useState<ContactChoice>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", address: "",
    projectType: "", propertyType: "", squareFootage: "",
    timeline: "", budgetRange: "", message: "",
  });

  const handleChange = (field: string, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (contactChoice === "schedule") {
      // Submit to Netlify first so we capture address + details
      try {
        const params = new URLSearchParams({
          "form-name": "estimate-request",
          "bot-field": "",
          contactChoice,
          ...formData,
        });
        await fetch("/forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
        });
      } catch {
        // Don't block the calendar if form submission fails
      }
      setStep("calendar");
      setIsSubmitting(false);
      return;
    }

    try {
      const params = new URLSearchParams({
        "form-name": "estimate-request",
        "bot-field": "",
        contactChoice,
        ...formData,
      });

      await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      setStep("success");
    } catch {
      alert("Something went wrong. Please call us at (825) 288-7557.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setStep("form");
    setContactChoice("");
    setFormData({ fullName: "", email: "", phone: "", address: "", projectType: "", propertyType: "", squareFootage: "", timeline: "", budgetRange: "", message: "" });
    setOpen(false);
  };

  const formContent = (
    <div style={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
      {step === "form" && (
        <div style={card}>
          <h2 style={cardTitle}>Get Your Free Estimate</h2>
          <p style={{ color: "var(--muted-foreground)", textAlign: "center", marginBottom: "1.5rem", fontSize: 15 }}>
            Book a time instantly or request a callback — your choice.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={fieldGroup}>
              <label style={labelStyle}>Full Name *</label>
              <input required name="fullName" value={formData.fullName}
                onChange={e => handleChange("fullName", e.target.value)}
                placeholder="Your full name" style={inputStyle} />
            </div>

            <div style={fieldGroup}>
              <label style={labelStyle}>Email *</label>
              <input required type="email" name="email" value={formData.email}
                onChange={e => handleChange("email", e.target.value)}
                placeholder="your@email.com" style={inputStyle} />
            </div>

            <div style={fieldGroup}>
              <label style={labelStyle}>Phone *</label>
              <input required type="tel" name="phone" value={formData.phone}
                onChange={e => handleChange("phone", e.target.value)}
                placeholder="(403) 000-0000" style={inputStyle} />
            </div>

            <div style={fieldGroup}>
              <label style={labelStyle}>Property Address *</label>
              <input required name="address" value={formData.address}
                onChange={e => handleChange("address", e.target.value)}
                placeholder="123 Main St SW, Calgary, AB" style={inputStyle} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={fieldGroup}>
                <label style={labelStyle}>Project Type *</label>
                <select required value={formData.projectType}
                  onChange={e => handleChange("projectType", e.target.value)} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="interior">Interior</option>
                  <option value="exterior">Exterior</option>
                  <option value="commercial">Commercial</option>
                  <option value="drywall">Drywall Repair</option>
                  <option value="deck">Deck/Fence Staining</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={fieldGroup}>
                <label style={labelStyle}>Property Type *</label>
                <select required value={formData.propertyType}
                  onChange={e => handleChange("propertyType", e.target.value)} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="single-family">Single Family Home</option>
                  <option value="condo">Condo/Apartment</option>
                  <option value="multi-family">Multi-Family</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={fieldGroup}>
                <label style={labelStyle}>Square Footage</label>
                <select value={formData.squareFootage}
                  onChange={e => handleChange("squareFootage", e.target.value)} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="under-1000">Under 1,000 sq ft</option>
                  <option value="1000-2000">1,000–2,000 sq ft</option>
                  <option value="2000-3000">2,000–3,000 sq ft</option>
                  <option value="3000-5000">3,000–5,000 sq ft</option>
                  <option value="over-5000">Over 5,000 sq ft</option>
                </select>
              </div>
              <div style={fieldGroup}>
                <label style={labelStyle}>Timeline</label>
                <select value={formData.timeline}
                  onChange={e => handleChange("timeline", e.target.value)} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="asap">ASAP</option>
                  <option value="1-2-weeks">1–2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2–3 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div style={fieldGroup}>
              <label style={labelStyle}>Budget Range (optional)</label>
              <select value={formData.budgetRange}
                onChange={e => handleChange("budgetRange", e.target.value)} style={inputStyle}>
                <option value="">Prefer not to say</option>
                <option value="under-2000">Under $2,000</option>
                <option value="2000-5000">$2,000–$5,000</option>
                <option value="5000-10000">$5,000–$10,000</option>
                <option value="10000-20000">$10,000–$20,000</option>
                <option value="over-20000">Over $20,000</option>
              </select>
            </div>

            <div style={fieldGroup}>
              <label style={labelStyle}>Additional Details</label>
              <textarea value={formData.message}
                onChange={e => handleChange("message", e.target.value)}
                placeholder="Tell us about your project..."
                rows={3} style={{ ...inputStyle, resize: "vertical" }} />
            </div>

            <div style={fieldGroup}>
              <label style={{ ...labelStyle, marginBottom: "0.75rem" }}>How would you like to proceed? *</label>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { value: "schedule", title: "Book Online Now", desc: "Pick a time slot instantly — no calls needed" },
                  { value: "callback", title: "Request a Callback", desc: "We'll call you within 1 business day" },
                ].map(opt => (
                  <label key={opt.value} style={{
                    display: "flex", alignItems: "flex-start", gap: "0.75rem",
                    padding: "0.875rem 1rem",
                    border: `2px solid ${contactChoice === opt.value ? "var(--primary)" : "var(--border)"}`,
                    borderRadius: 8, cursor: "pointer",
                    background: contactChoice === opt.value ? "rgba(45,106,79,0.05)" : "#fff",
                  }}>
                    <input type="radio" name="contactChoice" value={opt.value}
                      checked={contactChoice === opt.value}
                      onChange={() => setContactChoice(opt.value as ContactChoice)}
                      style={{ marginTop: 3, accentColor: "var(--primary)" }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{opt.title}</div>
                      <div style={{ fontSize: 13, color: "var(--muted-foreground)" }}>{opt.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" disabled={isSubmitting || !contactChoice} style={{
              background: contactChoice ? "var(--primary)" : "var(--muted)",
              color: contactChoice ? "#fff" : "var(--muted-foreground)",
              border: "none", borderRadius: 8, padding: "0.875rem",
              fontSize: 16, fontWeight: 600,
              cursor: contactChoice ? "pointer" : "not-allowed", marginTop: "0.5rem"
            }}>
              {isSubmitting ? "Processing..." :
                contactChoice === "schedule" ? "Continue to Booking Calendar →" :
                contactChoice === "callback" ? "Request My Callback" :
                "Select an Option Above"}
            </button>
          </form>
        </div>
      )}

      {step === "calendar" && (
        <div style={card}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <button onClick={() => setStep("form")} style={{ background: "none", border: "1px solid var(--border)", borderRadius: 6, padding: "0.4rem 0.75rem", cursor: "pointer", fontSize: 14 }}>
              ← Back
            </button>
            <div>
              <h2 style={{ ...cardTitle, textAlign: "left", marginBottom: 0 }}>Schedule Your Free Estimate</h2>
              <p style={{ fontSize: 14, color: "var(--muted-foreground)" }}>Pick a date and time that works for you</p>
            </div>
          </div>
          <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)" }}>
            <iframe
              src={`https://cal.com/aspenleaf-2dqxoj/30min?name=${encodeURIComponent(formData.fullName)}&email=${encodeURIComponent(formData.email)}&embed=true`}
              style={{ width: "100%", height: 600, border: "none" }}
              title="Book a free estimate"
            />
          </div>
        </div>
      )}

      {step === "success" && (
        <div style={{ ...card, textAlign: "center" }}>
          <CheckCircle size={56} style={{ color: "#16a34a", margin: "0 auto 1rem" }} />
          <h2 style={{ ...cardTitle, marginBottom: "0.5rem" }}>Request Received!</h2>
          <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
            Thanks {formData.fullName}! We'll call you within 1 business day to schedule your free estimate.
          </p>
          <button onClick={reset} style={{
            background: "var(--primary)", color: "#fff", border: "none",
            borderRadius: 8, padding: "0.75rem 1.5rem", fontSize: 15,
            fontWeight: 600, cursor: "pointer"
          }}>
            Done
          </button>
        </div>
      )}
    </div>
  );

  if (trigger) {
    return (
      <>
        <span onClick={() => setOpen(true)} style={{ cursor: "pointer", display: "inline-block" }}>
          {trigger}
        </span>

        {open && (
          <div style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
            zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem", overflowY: "auto"
          }} onClick={e => { if (e.target === e.currentTarget) reset(); }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 620, maxHeight: "90vh", overflowY: "auto" }}>
              <button onClick={reset} style={{
                position: "absolute", top: 8, right: 8, zIndex: 10,
                background: "rgba(0,0,0,0.4)", color: "#fff", border: "none",
                borderRadius: "50%", width: 28, height: 28, cursor: "pointer", fontSize: 16
              }}>×</button>
              {formContent}
            </div>
          </div>
        )}
      </>
    );
  }

  return <div className={className}>{formContent}</div>;
}

const card: React.CSSProperties = {
  background: "#fff", borderRadius: 12, padding: "2rem",
  boxShadow: "0 4px 24px rgba(0,0,0,0.08)", width: "100%"
};
const cardTitle: React.CSSProperties = {
  fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700,
  color: "var(--foreground)", textAlign: "center", marginBottom: "0.5rem"
};
const fieldGroup: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "0.4rem" };
const labelStyle: React.CSSProperties = { fontSize: 14, fontWeight: 500, color: "var(--foreground)" };
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.625rem 0.75rem", border: "1px solid var(--border)",
  borderRadius: 6, fontSize: 15, outline: "none", background: "#fff", color: "var(--foreground)"
};
