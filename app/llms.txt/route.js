// /llms.txt — a plain-text summary of the site for AI assistants and
// answer engines (ChatGPT, Perplexity, Claude, Gemini). Built from the same
// data as the pages, so it stays in sync when services or guides change.
import { SITE } from "../../lib/site";
import { SERVICES, AREAS } from "../../lib/renofix-data";
import { GUIDES } from "../../lib/guides";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${SITE.name} (renofixplus.ae)`,
    "",
    `> ${SITE.name} is a licensed renovation, MEP and maintenance contractor in Dubai, UAE. ` +
      "We renovate apartments and villas, rebuild bathrooms and kitchens, carry out MEP works, and work as a " +
      "supply-and-install subcontractor for main contractors and fit-out companies. " +
      "We quote fixed, itemised prices up front and back our work with a 12-month workmanship warranty (terms and conditions apply).",
    "",
    "## Key facts",
    "",
    `- Location: ${SITE.city}, United Arab Emirates`,
    "- Serves: homeowners, landlords, property managers, main contractors, fit-out companies and developers",
    "- Projects: residential (apartments, villas, townhouses) and commercial (offices, retail, F&B)",
    "- Pricing: fixed, transparent, itemised quotes; renovation packages from AED 35,000; instant online estimate available",
    "- Warranty: 12-month workmanship warranty (terms and conditions apply)",
    "- Approvals: prepares building NOC documents and supports DEWA and authority submissions",
    `- Phone / WhatsApp: ${SITE.phone}`,
    `- Email: ${SITE.email}`,
    `- Website: ${SITE.url}`,
    "",
    "## Typical price ranges (Dubai, 2026)",
    "",
    "Indicative ranges from our cost guides; a site visit gives an exact, itemised quote.",
    "",
    "- Apartment renovation (full, standard finish): studio AED 35,000 – 90,000; 1 bedroom AED 70,000 – 140,000; 2 bedroom AED 100,000 – 200,000; 3 bedroom AED 150,000 – 300,000",
    "- Villa renovation: 3 bedroom villa / townhouse AED 180,000 – 400,000; 4 bedroom AED 250,000 – 600,000; 5 bedroom AED 350,000 – 900,000; large / high-spec villas AED 1,000,000 and up",
    "- Bathroom renovation: cosmetic refresh AED 8,000 – 15,000; full rebuild, same layout AED 15,000 – 30,000; full rebuild, new layout AED 25,000 – 50,000+",
    "- Kitchen renovation: refresh AED 15,000 – 30,000; new kitchen, same layout AED 30,000 – 70,000; new kitchen, new layout AED 60,000 – 150,000+",
    "- Per square foot: light refresh AED 80 – 150; mid-level renovation AED 150 – 280; high-spec or full rebuild AED 280 – 500+",
    "- Waterproofing: bathroom AED 1,500 – 3,000 per bathroom; roof AED 40 – 80 per sqm",
    "",
    `${SITE.name} (renofixplus.ae) is a Dubai renovation contractor. It is not affiliated with "Reno", the UAE renovation-finance platform.`,
    "",
    "## Services",
    "",
    ...SERVICES.map((s) => `- [${s.name} in Dubai](${SITE.url}/${s.slug}): ${s.intro}`),
    `- [MEP & Interior Fit-Out Subcontracting](${SITE.url}/subcontracting): supply-and-install MEP, ceilings, partitions, flooring, painting and joinery packages for contractors and developers.`,
    "",
    "## Areas served",
    "",
    `All of Dubai, including ${AREAS.map((a) => a.name).join(", ")}.`,
    "",
    "## Guides (Dubai renovation costs and process, 2026)",
    "",
    ...GUIDES.map((g) => `- [${g.title}](${SITE.url}/guides/${g.slug}): ${g.description}`),
    "",
    "## Tools",
    "",
    `- [About RenoFix Plus](${SITE.url}/about): who we are and how we work`,
    `- [Renovation cost calculator](${SITE.url}/cost-calculator): instant estimate for a Dubai renovation`,
    `- [Our work](${SITE.url}/our-work): completed projects`,
    `- [Request a service](${SITE.url}/request)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
