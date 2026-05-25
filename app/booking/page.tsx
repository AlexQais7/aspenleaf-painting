import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, ClipboardList, FileText, ThumbsUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Free Estimate | AspenLeaf Painting Calgary",
  description: "Book your free painting estimate online. Choose a time that works for you — no calls needed.",
  alternates: { canonical: "https://www.aspenleafpainting.com/booking" },
};

const steps = [
  {
    icon: Calendar,
    title: "Pick Your Time",
    desc: "Choose any available slot that fits your schedule — mornings, afternoons, or Saturdays. We work around you.",
  },
  {
    icon: ClipboardList,
    title: "Alex Visits Your Home",
    desc: "Alex walks through the space with you, takes measurements, and listens to exactly what you're looking for.",
  },
  {
    icon: FileText,
    title: "You Receive a Written Quote",
    desc: "Within 24 hours you'll have a detailed, itemized quote — no vague ballparks, no surprises when the invoice arrives.",
  },
  {
    icon: ThumbsUp,
    title: "Zero Pressure",
    desc: "The estimate is completely free. You keep the quote whether you hire us or not. There's no obligation whatsoever.",
  },
];

const faqs = [
  {
    q: "How long does the estimate visit take?",
    a: "Most visits take 20–45 minutes depending on the size of the project. For a single room, it's usually quick. For a full interior or exterior, we take more time to be thorough.",
  },
  {
    q: "What should I have ready before Alex arrives?",
    a: "Just a general idea of what you want painted — colours you like, rooms you want done, any areas of concern like cracks or stains. You don't need samples or measurements. We handle all that.",
  },
  {
    q: "Will the quote change after we start?",
    a: "Rarely, and only if the scope changes at your request. We assess everything during the visit so the quote reflects the actual work. Hidden charges are not something we do.",
  },
  {
    q: "How soon can you start after I accept the quote?",
    a: "Typically within 1–2 weeks depending on the season. Spring and summer book up faster. If you have a specific move-in date or deadline, tell us during the estimate and we'll do our best to accommodate.",
  },
  {
    q: "Do I need to be home during the estimate?",
    a: "Yes — we find it makes a big difference when you can walk through the space with us and describe what you want. It helps us give you an accurate quote and understand your vision.",
  },
  {
    q: "Can you provide references or show past work?",
    a: "Absolutely. Check our portfolio page for photos of completed projects, and we're happy to connect you with past clients in your neighbourhood during the estimate visit.",
  },
];

export default function BookingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <section style={{ padding: "4rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.75rem" }}>
                Book Your Free Estimate
              </h1>
              <p style={{ fontSize: 17, color: "var(--muted-foreground)", lineHeight: 1.6, maxWidth: 600, margin: "0 auto" }}>
                Pick a date and time that works for you. Alex will visit, assess your project, and provide a detailed quote — no obligation.
              </p>
            </div>

            {/* What to Expect Steps */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: 12, background: "#fff", textAlign: "center" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, background: "rgba(45,106,79,0.1)", borderRadius: "50%", marginBottom: "1rem" }}>
                      <Icon size={24} style={{ color: "var(--primary)" }} />
                    </div>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>{step.title}</h3>
                    <p style={{ fontSize: 13, color: "var(--muted-foreground)", lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                );
              })}
            </div>

            <div style={{ border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <iframe
                src="https://cal.com/aspenleaf-2dqxoj/30min?embed=true"
                style={{ width: "100%", height: 700, border: "none" }}
                title="Book a free painting estimate with AspenLeaf Painting Calgary"
              />
            </div>
            <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: 14, color: "var(--muted-foreground)" }}>
              Prefer to call? Reach us at <a href="tel:+18252887557" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>(825) 288-7557</a>
            </p>
          </div>
        </section>

        {/* What to Expect Detail */}
        <section style={{ padding: "5rem 1rem", background: "var(--secondary)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" }}>
              What to Expect During Your Estimate
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              We know inviting someone into your home is a big deal. That's why we make the estimate visit as easy and low-pressure as possible. Alex will arrive at the scheduled time, introduce himself, and follow your lead — whether you want a quick walk-through or a longer conversation about colours and options.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              During the visit, we look at the surfaces to be painted, check for any conditions that need addressing (cracks, stains, peeling, moisture), take measurements, and discuss the scope of the project. If you have paint colours in mind, bring them up — we can help confirm whether they'll work well in your space and how different sheens behave in different lighting.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              After the visit, we send a written, itemized quote — usually within 24 hours. The quote breaks down the cost by area or room, lists the materials we'll use, and outlines the timeline. There are no hidden fees and no vague estimates. You'll know exactly what you're agreeing to before we ever pick up a brush.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
              If you have questions after receiving the quote, call or text us. We're happy to walk through any line item, adjust the scope, or answer anything that's on your mind. Our goal is to make sure you feel completely comfortable before the project starts.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>
              Common Questions About the Estimate
            </h3>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", marginBottom: "2.5rem" }}>
              Everything you need to know before booking.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ padding: "1.5rem", border: "1px solid var(--border)", borderRadius: 12, background: "#fff" }}>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>{faq.q}</h3>
                  <p style={{ fontSize: 15, color: "var(--muted-foreground)", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
