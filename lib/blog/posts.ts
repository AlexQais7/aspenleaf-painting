// ============================================================================
// ADD NEW BLOG POSTS HERE. This is the only file you need to touch.
//
// To publish a new post:
// 1. Copy the structure of an existing post below.
// 2. Change slug, title, metaTitle, metaDescription, excerpt, category, date.
// 3. Write the body as a list of `blocks` (p, h2, h3, ul, ol, callout, image, cta).
// 4. Save, commit, push. No new files, no new routes needed.
// ============================================================================

import type { BlogPost } from "./types";

export const posts: BlogPost[] = [
  {
    slug: "how-to-paint-a-room-like-a-pro-calgary",
    title: "How to Paint a Room Like a Pro",
    metaTitle: "How to Paint a Room Like a Pro: Calgary Homeowner's Guide",
    metaDescription:
      "The full step-by-step interior painting process AspenLeaf uses on every job — prep, cutting-in, wet-edge rolling, cleanup — adapted for Calgary's dry winters.",
    excerpt:
      "The full process we use on every interior job in Calgary — and the moments where most DIY paint jobs actually go wrong.",
    category: "DIY & Maintenance",
    date: "2026-06-22",
    heroAlt: "Professional interior painting process Calgary",
    relatedLinks: [
      { href: "/services/interior-painting", label: "Interior Painting in Calgary" },
      { href: "/warranty", label: "Our 2-Year Warranty" },
    ],
    blocks: [
      {
        type: "p",
        text:
          "We get calls every spring from homeowners partway through a paint job, asking us to either finish it or fix it. It's almost never a lack of effort — it's usually one or two specific steps that got rushed or skipped, and those happen to be the steps that determine whether a paint job looks sharp for one season or holds up for ten years.",
      },
      {
        type: "p",
        text:
          "This is the actual process we follow on our own interior jobs around Calgary. If you're painting a room yourself, follow it closely and you'll get a result that looks professional. We'll also flag the specific points where, honestly, we see the most DIY jobs start to go sideways — partly so you can avoid it, partly because that's usually when people call us.",
      },
      { type: "h2", text: "What You'll Need" },
      {
        type: "p",
        text:
          "Good tools aren't about brand loyalty — they're about not fighting your equipment while you work. At minimum:",
      },
      {
        type: "ul",
        items: [
          "A 5-in-1 painter's tool (scraping, patching, opening cans — does it all)",
          "A quality angled sash brush (2.5–3 inches) for cutting in",
          "A 4-inch mini roller for edges, plus a standard 9-inch roller for the field",
          "Canvas drop cloths — they stay put and absorb drips; plastic sheeting slides around and stays slippery",
          "Spackle or patching compound, plus a fine sanding block",
          "Paintable caulk rated for exterior-grade temperature swings, even for interior trim",
          "An oil-based stain blocker for any water stains or smoke damage",
          "An extension pole for your roller",
        ],
      },
      { type: "h2", text: "Phase 1: Prep the Room Properly" },
      {
        type: "p",
        text:
          "This is the part everyone wants to rush, and it's the part that actually determines the outcome. Calgary's low humidity, especially in winter, means walls dry out and shift more than homeowners moving here from wetter climates expect — which makes prep even more important here than it might be elsewhere.",
      },
      { type: "h3", text: "1. Repair nail pops and wall damage" },
      {
        type: "p",
        text:
          "Inspect the walls for dents, holes, and popped drywall nails before you do anything else.",
      },
      {
        type: "ul",
        items: [
          "Apply spackle generously to holes and dents — it shrinks slightly as it cures, so a touch of overfill is correct, not a mistake.",
          "Let it dry fully. In Calgary's dry air this usually goes faster than the can suggests, but check it's firm all the way through before sanding, not just dry on the surface.",
          "For drywall anchors you're removing, shear them off with your 5-in-1 tool and tap them slightly into the wall before patching over — don't yank them out, it tears the paper.",
        ],
      },
      { type: "h3", text: "2. Protect floors and surfaces" },
      {
        type: "p",
        text:
          "Use canvas drop cloths, not plastic. Move furniture to the centre of the room and cover it. This part is genuinely simple — just don't skip it because it \"will only take a minute\" without it.",
      },
      { type: "h3", text: "3. Sand the walls lightly" },
      {
        type: "p",
        text:
          "Once patches are dry, sand them flush with a fine-grit block (220-grit is the standard). Lightly scuff the rest of the wall to knock off dust and any glossy residue so new paint has something to grip. Wipe everything down with a damp cloth afterward — sanding dust left behind shows up as texture under your first coat.",
      },
      { type: "h3", text: "4. Caulk gaps and corners" },
      {
        type: "p",
        text:
          "Apply a paintable caulk anywhere walls meet trim, or in corners that tend to show seasonal gaps. This step matters more in Calgary than people expect: chinooks cause rapid temperature swings that make wood trim expand and contract repeatedly through a single winter, which is exactly the kind of movement that reopens hairline gaps if a lower-grade caulk was used. Smooth the bead with a damp finger and let it cure fully before priming over it.",
      },
      {
        type: "callout",
        text:
          "This is one of the most common things we find when we're quoting a touch-up job: caulk that looked fine when applied, but wasn't rated to handle a Calgary winter, cracking open along the trim line within a year. It's a small material cost difference that makes a multi-year difference in result.",
      },
      { type: "h3", text: "5. Prime stains and problem areas" },
      {
        type: "p",
        text:
          "For water stains, smoke damage, or anything patched, use an oil-based stain blocker before your colour coat. Skip this and stains have a way of bleeding back through months later, even under multiple coats of regular paint.",
      },
      { type: "h2", text: "Phase 2: Master Cutting-In" },
      {
        type: "p",
        text:
          "\"Cutting in\" means painting the edges and corners by hand before rolling the larger wall areas. This is where most DIY jobs either look crisp or look obviously hand-painted.",
      },
      { type: "h3", text: "The heel-to-tip technique" },
      {
        type: "ol",
        items: [
          "Dip only the inside half of the brush bristles into the paint.",
          "Tap off the excess against the inside of the can — don't wipe the brush dry against the rim, it strips too much paint and makes lines patchy.",
          "Rest the heel of the brush against the wall first.",
          "Pull the tip into the corner or edge in one smooth, continuous motion.",
        ],
      },
      {
        type: "p",
        text:
          "If you've never cut in before, practice inside a closet first. It's a genuinely learnable skill, but the first few feet are usually the roughest.",
      },
      { type: "h3", text: "The ceiling-edge trick (no tape required)" },
      {
        type: "p",
        text:
          "Cut in a narrow band along the ceiling line by hand, then immediately roll right up to that edge with a 4-inch mini roller. Done while the cut-in paint is still wet, this creates a clean transition without taping off the entire ceiling.",
      },
      {
        type: "p",
        text:
          "On your first coat, leave roughly a 1/16-inch gap from the trim or ceiling line rather than trying to get it perfect immediately — fill that gap precisely on your second coat, once you've got a feel for the brush.",
      },
      { type: "h2", text: "Phase 3: Roll the Walls Efficiently" },
      {
        type: "p",
        text:
          "Attach your roller to an extension pole — it keeps pressure even and keeps your arms below shoulder height, which matters more than people expect once you're a few hours in.",
      },
      { type: "h3", text: "Roll in one consistent direction" },
      {
        type: "p",
        text:
          "Load the roller evenly and roll up-and-down in the same direction throughout a section. Random crosshatching is what creates those faint \"vacuum mark\" texture inconsistencies you sometimes see in uneven light.",
      },
      { type: "h3", text: "The wet-edge rule" },
      {
        type: "p",
        text:
          "This is the single most important technique in the entire process. Work in sections about 4 feet wide: cut in the edges for that section, then immediately roll the wall while the cut-in paint is still wet. When the brush texture and roller texture are both wet, they blend seamlessly. If the cut-in dries first, you'll see a visible line — called flashing — once everything's dry.",
      },
      {
        type: "callout",
        text:
          "Calgary's dry air cuts both ways here: paint dries fast, which is convenient for recoat times, but it also shortens your wet-edge window. On a hot, dry afternoon you may have noticeably less time to roll before a cut-in edge sets up than the can's stated dry time suggests. Working in smaller sections and keeping your pace steady matters more here than in a humid climate.",
      },
      { type: "h2", text: "Phase 4: Final Touches and Cleanup" },
      { type: "h3", text: "Fix small mistakes as you go" },
      {
        type: "p",
        text:
          "If you catch the roller on trim or another surface, use a rigid scraper as a shield while you touch up — it catches overspray and keeps your lines sharp instead of smudging further.",
      },
      { type: "h3", text: "Apply a second coat" },
      {
        type: "p",
        text:
          "Almost every interior wall needs two coats for even colour and real durability — even if the first coat looks like full coverage under bright work lights. Repeat the same cut-in and roll process, and take a little extra time on precision the second time through.",
      },
      { type: "h3", text: "Clean your brushes properly" },
      {
        type: "ol",
        items: [
          "Rinse thoroughly with warm water.",
          "Work a small amount of dish soap through the bristles to lift remaining paint.",
          "Comb the bristles straight and let the brush dry flat or hanging — never bristle-down in a jar.",
        ],
      },
      {
        type: "p",
        text:
          "If you're taking a long break mid-project, clean brushes after about an hour of use so paint doesn't set in the bristles.",
      },
      { type: "h2", text: "Common Mistakes We See Most Often" },
      {
        type: "ol",
        items: [
          "Skipping prep to save time. Repairs, caulking, and sanding matter more than the actual painting.",
          "Overloading the brush. Too much paint on the brush causes drips and uneven, wavy lines.",
          "Letting cut-in paint dry before rolling. This is the single biggest cause of visible lap lines.",
          "Using whatever caulk is cheapest. See above — it's the first thing to fail through a Calgary winter.",
          "Rushing the second coat. Proper drying time between coats genuinely affects how long the finish lasts.",
        ],
      },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "Do I need painter's tape?" },
      {
        type: "p",
        text:
          "Not necessarily. With the heel-to-tip technique and a steady hand, you can get cleaner lines than tape often gives you — tape can bleed under the edge if it's not pressed down perfectly, which creates its own touch-up work.",
      },
      { type: "h3", text: "What sandpaper grit should I use between coats?" },
      {
        type: "p",
        text:
          "220-grit is the standard for smoothing dust nibs and improving adhesion without scuffing the existing coat too aggressively.",
      },
      { type: "h3", text: "How long should I wait between coats in Calgary specifically?" },
      {
        type: "p",
        text:
          "Follow the manufacturer's guidance as a baseline, but Calgary's low humidity often means paint is ready to recoat sooner than the can suggests — just confirm it's fully dry to the touch, not just dry-looking, before going over it.",
      },
      { type: "h2", text: "Final Thoughts" },
      {
        type: "p",
        text:
          "A professional-looking paint job comes down to prep, technique, and patience — not expensive tools. If you follow this process carefully, a single room is very doable yourself.",
      },
      {
        type: "p",
        text:
          "Where we tend to see people change their mind is on bigger scope — full exteriors facing Calgary's freeze-thaw cycles, whole-home interiors where consistency across rooms gets harder to maintain, or anything starting with existing water damage or stains. If that's closer to what you're looking at, a free estimate costs nothing and gives you a real number to weigh against doing it yourself.",
      },
      {
        type: "cta",
        heading: "Considering hiring it out instead?",
        subtext:
          "Free, no-obligation estimates for Calgary homeowners — licensed, insured, 2-year warranty.",
      },
    ],
  },
];

// Helper to look up a post by slug — used by the dynamic [slug] route.
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

// All posts, newest first — used by the blog index page.
export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
