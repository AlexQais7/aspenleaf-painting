"use client";

import { useState } from "react";

type ProjectType = "interior" | "exterior" | "commercial" | "deck" | "drywall";

const rates: Record<ProjectType, { min: number; max: number; unit: string }> = {
  interior: { min: 2.5, max: 4.5, unit: "sq ft" },
  exterior: { min: 3.0, max: 6.0, unit: "sq ft" },
  commercial: { min: 2.0, max: 5.0, unit: "sq ft" },
  deck: { min: 3.5, max: 7.0, unit: "sq ft" },
  drywall: { min: 50, max: 120, unit: "patch" },
};

export default function PriceCalculator() {
  const [projectType, setProjectType] = useState<ProjectType>("interior");
  const [sqft, setSqft] = useState(1000);
  const [patches, setPatches] = useState(3);
  const [coats, setCoats] = useState(2);

  const rate = rates[projectType];
  const area = projectType === "drywall" ? patches : sqft;
  const coatMultiplier = projectType === "drywall" ? 1 : (coats === 1 ? 0.75 : coats === 2 ? 1 : 1.35);
  const minPrice = Math.round(rate.min * area * coatMultiplier / 50) * 50;
  const maxPrice = Math.round(rate.max * area * coatMultiplier / 50) * 50;

  return (
    <div style={{ background: "#fff", borderRadius: 20, padding: "2.5rem", boxShadow: "0 4px 30px rgba(0,0,0,0.07)", border: "1.5px solid var(--border)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
        
        {/* Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <label style={labelStyle}>Project Type</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginTop: "0.5rem" }}>
              {(Object.keys(rates) as ProjectType[]).map(type => (
                <button key={type} onClick={() => setProjectType(type)} style={{
                  padding: "0.6rem 0.75rem", borderRadius: 10, border: `1.5px solid ${projectType === type ? "var(--primary)" : "var(--border)"}`,
                  background: projectType === type ? "rgba(45,106,79,0.08)" : "#fff",
                  color: projectType === type ? "var(--primary)" : "var(--muted-foreground)",
                  fontWeight: projectType === type ? 700 : 500, fontSize: 13, cursor: "pointer",
                  textTransform: "capitalize", transition: "all 0.15s", fontFamily: "inherit"
                }}>
                  {type === "deck" ? "Deck/Fence" : type === "drywall" ? "Drywall" : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {projectType === "drywall" ? (
            <div>
              <label style={labelStyle}>Number of Patches: <strong style={{ color: "var(--primary)" }}>{patches}</strong></label>
              <input type="range" min={1} max={20} value={patches} onChange={e => setPatches(Number(e.target.value))}
                style={{ width: "100%", marginTop: "0.5rem", accentColor: "var(--primary)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--muted-foreground)", marginTop: "0.25rem" }}>
                <span>1 patch</span><span>20 patches</span>
              </div>
            </div>
          ) : (
            <>
              <div>
                <label style={labelStyle}>Square Footage: <strong style={{ color: "var(--primary)" }}>{sqft.toLocaleString()} sq ft</strong></label>
                <input type="range" min={200} max={5000} step={100} value={sqft} onChange={e => setSqft(Number(e.target.value))}
                  style={{ width: "100%", marginTop: "0.5rem", accentColor: "var(--primary)" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--muted-foreground)", marginTop: "0.25rem" }}>
                  <span>200 sq ft</span><span>5,000 sq ft</span>
                </div>
              </div>
              <div>
                <label style={labelStyle}>Number of Coats</label>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {[1, 2, 3].map(n => (
                    <button key={n} onClick={() => setCoats(n)} style={{
                      flex: 1, padding: "0.6rem", borderRadius: 10,
                      border: `1.5px solid ${coats === n ? "var(--primary)" : "var(--border)"}`,
                      background: coats === n ? "rgba(45,106,79,0.08)" : "#fff",
                      color: coats === n ? "var(--primary)" : "var(--muted-foreground)",
                      fontWeight: coats === n ? 700 : 500, fontSize: 14, cursor: "pointer",
                      transition: "all 0.15s", fontFamily: "inherit"
                    }}>
                      {n} coat{n > 1 ? "s" : ""}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Result */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", borderRadius: 16, padding: "2.5rem", textAlign: "center", color: "#fff" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", opacity: 0.8, marginBottom: "0.5rem" }}>Estimated Range</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "0.25rem" }}>
            ${minPrice.toLocaleString()}
          </p>
          <p style={{ fontSize: 18, opacity: 0.8, marginBottom: "1rem" }}>to ${maxPrice.toLocaleString()}</p>
          <p style={{ fontSize: 12, opacity: 0.7, lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Ballpark estimate only. Final price depends on surface condition, prep required, and specific products chosen.
          </p>
          <p style={{ fontSize: 13, fontWeight: 600, background: "rgba(255,255,255,0.15)", padding: "0.5rem 1rem", borderRadius: 20, border: "1px solid rgba(255,255,255,0.3)" }}>
            📞 Free detailed estimate available
          </p>
        </div>
      </div>

      <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: "1.5rem", textAlign: "center", lineHeight: 1.6 }}>
        * Prices in CAD. Estimates are approximate and based on average Calgary market rates. Book a free on-site estimate for an accurate quote.
      </p>
    </div>
  );
}

const labelStyle: React.CSSProperties = { fontSize: 14, fontWeight: 600, color: "var(--foreground)" };
