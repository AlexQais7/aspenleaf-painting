import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Confirmed | AspenLeaf Painting Calgary",
  description: "Your estimate request has been received. AspenLeaf Painting will be in touch shortly.",
};

export default function ConfirmationPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main style={{ padding: "6rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <CheckCircle size={72} style={{ color: "#16a34a", margin: "0 auto 1.5rem" }} />
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" }}>
            You're All Set!
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted-foreground)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Thanks for reaching out to AspenLeaf Painting. We've received your request and will be in touch within 1 business day to confirm your estimate appointment.
          </p>
          <p style={{ fontSize: 15, color: "var(--muted-foreground)", marginBottom: "2.5rem" }}>
            Questions in the meantime? Call us at{" "}
            <a href="tel:+18252887557" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>(825) 288-7557</a>
          </p>
          <Link href="/" style={{ display: "inline-block", background: "var(--primary)", color: "#fff", padding: "0.875rem 2rem", borderRadius: 8, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
