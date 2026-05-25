import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";

export const metadata: Metadata = {
  title: "Painting Portfolio Calgary | AspenLeaf Painting",
  description: "View AspenLeaf Painting's portfolio of completed interior and exterior painting projects in Calgary. Before and after photos of our real work.",
  alternates: { canonical: "https://www.aspenleafpainting.com/portfolio" },
};

const BASE = "https://res.cloudinary.com/dile6kx4g/image/upload/w_1200,q_80,f_jpg";

const beforeAfter = [
  { id: "White_Black_Modern_Photo_Collage_Before_After_Youtube_Thumbnail_-_1_hrgwte", alt: "Interior painting before and after Calgary" },
  { id: "White_Black_Modern_Photo_Collage_Before_After_Youtube_Thumbnail_-_4_uijcdk", alt: "Room painting transformation Calgary" },
  { id: "White_Black_Modern_Photo_Collage_Before_After_Youtube_Thumbnail_-_5_hpzqjc", alt: "House painting before and after Calgary" },
  { id: "White_Black_Modern_Photo_Collage_Before_After_Youtube_Thumbnail_-_6_qbasxu", alt: "Painting results before and after Calgary" },
  { id: "Untitled_design_-_1_rvrrrc", alt: "Painting project transformation Calgary" },
];

const projectPhotos = [
  { id: "IMG_4792_zid1pg", alt: "Interior painting Calgary", category: "Interior" },
  { id: "IMG_4786_q8n4ns", alt: "Professional painters Calgary", category: "Interior" },
  { id: "IMG_4307_i9ya62", alt: "Room painting Calgary", category: "Interior" },
  { id: "IMG_4301_zurob5", alt: "Wall painting Calgary", category: "Interior" },
  { id: "IMG_4211_miuytr", alt: "Interior painting results Calgary", category: "Interior" },
  { id: "IMG_4156_wnecr1", alt: "Home painting Calgary", category: "Interior" },
  { id: "IMG_3817_rr425y", alt: "Painting project Calgary", category: "Interior" },
  { id: "IMG_3529_xn44pi", alt: "Professional painting Calgary", category: "Interior" },
  { id: "IMG_3852_iryxmu", alt: "House painters Calgary", category: "Interior" },
  { id: "IMG_2469_oknuog", alt: "Interior painters Calgary", category: "Interior" },
  { id: "IMG_2538_myvrcq", alt: "Painting company Calgary", category: "Interior" },
  { id: "IMG_2050_2_ldfftv", alt: "Calgary painting results", category: "Interior" },
  { id: "IMG_2049_2_ypj612", alt: "Aspen Leaf Painting project", category: "Interior" },
  { id: "IMG_4363_et7xuv", alt: "Calgary house painters work", category: "Interior" },
];

const processPhotos = [
  { id: "IMG_4572_di0amk", alt: "Floor protection during painting Calgary" },
  { id: "IMG_4586_kolwkf", alt: "Professional floor covering painters Calgary" },
  { id: "IMG_4575_hfjvjw", alt: "Careful prep work by AspenLeaf Painting" },
];

export default function PortfolioPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, rgba(45,106,79,0.08) 0%, var(--secondary) 100%)", padding: "5rem 1rem", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" }}>
              Our Painting Portfolio
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
              Real projects, real results. Before and after photos from actual Calgary homes we've transformed.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section style={{ padding: "4rem 1rem 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Every project in this portfolio was completed by Alex and the AspenLeaf team on real Calgary homes. These aren't stock photos or staged shoots — they're the results our clients actually live with. We photograph our work because we're proud of it, and because we want you to see exactly what you can expect when you hire us.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
              Our portfolio covers interior painting across bedrooms, living rooms, kitchens, hallways, and trim; exterior painting on single-family homes and townhomes; and the detailed prep and protection work that goes into every job before a drop of paint is applied. Browse through the sections below to get a sense of our quality and range.
            </p>
          </div>
        </section>

        {/* Before & After */}
        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>
              Before & After
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>See the difference a professional paint job makes.</p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: 800 }}>
              These side-by-side comparisons show the transformation that happens when tired, dated, or damaged walls meet proper prep and premium paint. The results aren't just cosmetic — a fresh coat of quality paint protects your surfaces and raises the perceived value of your home. In each case, we started with surface repairs and priming before applying finish coats, which is what makes the final results last. Notice the crisp lines on the trim, the even sheen on the walls, and the absence of any roller marks or lap lines — those details are the difference between a professional finish and a DIY one.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
              {beforeAfter.map((img, i) => (
                <div key={i} style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                  <img
                    src={`${BASE}/${img.id}`}
                    alt={img.alt}
                    style={{ width: "100%", height: "260px", objectFit: "cover", display: "block", minHeight: "260px" }}
                    crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy"
                    width={800} height={260}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Photos */}
        <section style={{ padding: "3rem 1rem 5rem", background: "var(--secondary)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>
              Completed Projects
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>A look at some of our finished work across Calgary homes.</p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: 900 }}>
              The gallery below pulls from a wide range of projects — from single-room refreshes to whole-home repaints. You'll see accent walls with bold colour choices, bright whites on trim and ceilings, and neutral wall tones that let the architecture breathe. Every room shown here was prepped, primed where needed, and finished with two coats of premium paint.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: 900 }}>
              One thing you'll notice across all these photos is consistency. The edges are clean, the coverage is even, and the sheens are smooth. That's not luck — it's the result of taking time with prep, using quality tools, and knowing when to slow down and pay attention to the details. We don't rush projects to fit in more jobs. We finish one thing properly before moving to the next.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {projectPhotos.map((img, i) => (
                <div key={i} style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", background: "#fff" }}>
                  <img
                    src={`${BASE}/${img.id}`}
                    alt={img.alt}
                    style={{ width: "100%", height: "250px", objectFit: "cover", display: "block", minHeight: "250px" }}
                    crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy"
                    width={600} height={250}
                  />
                  <div style={{ padding: "0.6rem 1rem" }}>
                    <span style={{ fontSize: 13, color: "var(--primary)", fontWeight: 600, background: "rgba(45,106,79,0.08)", padding: "0.2rem 0.6rem", borderRadius: 20 }}>
                      {img.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section style={{ padding: "5rem 1rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>
              How We Protect Your Home
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>
              Before a single drop of paint goes on, we fully protect your floors, furniture, and fixtures. This is what separates professionals from the rest.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem", maxWidth: 900 }}>
              When we arrive on the first day of a project, the first hour or two isn't spent painting — it's spent protecting. Every square foot of exposed flooring gets covered with heavy-duty paper and secured at the edges. Furniture that can be moved goes to the centre of the room and gets wrapped. Furniture that can't move gets wrapped in place. Outlets, fixtures, and hardware get masked. Window sills, baseboards, and door frames get taped with precision masking tape.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: 900 }}>
              This process takes time, but it's non-negotiable for us. We've seen the aftermath of jobs where protection was skipped — paint specks on hardwood floors, overspray on baseboards, roller marks on carpet. Those mistakes are avoidable and inexcusable. The photos below show our standard protection setup on real projects. This is what your home looks like before we start painting.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {processPhotos.map((img, i) => (
                <div key={i} style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                  <img
                    src={`${BASE}/${img.id}`}
                    alt={img.alt}
                    style={{ width: "100%", height: "260px", objectFit: "cover", display: "block", minHeight: "260px" }}
                    crossOrigin="anonymous" referrerPolicy="no-referrer" loading="lazy"
                    width={800} height={260}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 1rem", background: "linear-gradient(135deg, var(--primary) 0%, var(--evergreen) 100%)", color: "#fff", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
              Like What You See?
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: "2rem" }}>
              Get a free estimate today. We'd love to add your home to this portfolio.
            </p>
            <BookingForm trigger={
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "var(--primary)", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>
                Schedule Free Estimate
              </span>
            } />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
