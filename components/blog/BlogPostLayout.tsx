import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import HeroSection from "@/components/shared/HeroSection";
import { Phone, AlertCircle } from "lucide-react";
import type { BlogPost, ContentBlock } from "@/lib/blog/types";
import { CATEGORY_HERO_IMAGE } from "@/lib/blog/types";

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dile6kx4g/image/upload/w_1200,q_60,f_jpg";

const h2Style: React.CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
  fontWeight: 700,
  color: "var(--foreground)",
  marginTop: "3rem",
  marginBottom: "1rem",
};
const h3Style: React.CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: "1.15rem",
  fontWeight: 700,
  color: "var(--foreground)",
  marginTop: "1.75rem",
  marginBottom: "0.6rem",
};
const pStyle: React.CSSProperties = {
  fontSize: 16,
  color: "var(--muted-foreground)",
  lineHeight: 1.8,
  marginBottom: "1rem",
};
const liStyle: React.CSSProperties = { ...pStyle, marginBottom: "0.5rem" };

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "p":
      return <p key={idx} style={pStyle}>{block.text}</p>;
    case "h2":
      return <h2 key={idx} style={h2Style}>{block.text}</h2>;
    case "h3":
      return <h3 key={idx} style={h3Style}>{block.text}</h3>;
    case "ul":
      return (
        <ul key={idx} style={{ paddingLeft: "1.25rem" }}>
          {block.items.map((item, i) => (
            <li key={i} style={liStyle}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} style={{ paddingLeft: "1.25rem" }}>
          {block.items.map((item, i) => (
            <li key={i} style={liStyle}>{item}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div
          key={idx}
          style={{
            display: "flex",
            gap: "0.85rem",
            alignItems: "flex-start",
            padding: "1.25rem 1.5rem",
            background: "var(--secondary)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            margin: "2rem 0",
          }}
        >
          <AlertCircle size={20} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 15, color: "var(--foreground)", lineHeight: 1.7, margin: 0 }}>
            {block.text}
          </p>
        </div>
      );
    case "image":
      return (
        <div key={idx} style={{ margin: "2rem 0" }}>
          <img
            src={`${CLOUDINARY_BASE}/${block.cloudinaryId}.jpg`}
            alt={block.alt}
            style={{
              width: "100%",
              maxWidth: block.width === "half" ? 380 : "100%",
              borderRadius: 12,
              objectFit: "cover",
            }}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            loading="lazy"
            width={block.width === "half" ? 380 : 800}
            height={block.width === "half" ? 280 : 450}
          />
        </div>
      );
    case "cta":
      return (
        <div
          key={idx}
          style={{
            marginTop: "2.5rem",
            padding: "2rem",
            background: "linear-gradient(135deg, var(--primary) 0%, var(--evergreen) 100%)",
            borderRadius: 14,
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "0.75rem",
            }}
          >
            {block.heading}
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem" }}>
            {block.subtext}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <BookingForm
              trigger={
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "#fff",
                    color: "var(--primary)",
                    padding: "0.8rem 1.6rem",
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                >
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
                padding: "0.8rem 1.6rem",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              <Phone size={15} /> (825) 288-7557
            </a>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const heroImageId = post.heroImageId ?? CATEGORY_HERO_IMAGE[post.category];

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        <HeroSection
          title={post.title}
          subtitle={post.excerpt}
          imageId={heroImageId}
          imageAlt={post.heroAlt}
          showCTA={false}
        />

        <article style={{ padding: "4rem 1rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: "1.5rem",
              }}
            >
              {post.category}
            </p>

            {post.blocks.map((block, idx) => renderBlock(block, idx))}

            {post.relatedLinks && post.relatedLinks.length > 0 && (
              <p style={{ ...pStyle, marginTop: "2.5rem", fontSize: 14 }}>
                Related:{" "}
                {post.relatedLinks.map((link, i) => (
                  <span key={link.href}>
                    <Link href={link.href} style={{ color: "var(--primary)", fontWeight: 600 }}>
                      {link.label}
                    </Link>
                    {i < post.relatedLinks!.length - 1 ? " · " : ""}
                  </span>
                ))}
                {" · "}
                <Link href="/blog" style={{ color: "var(--primary)", fontWeight: 600 }}>
                  More Painting Tips
                </Link>
              </p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
