// /llms.txt — a plain-text summary of the site for AI assistants and
// answer engines (ChatGPT, Perplexity, Claude, Gemini). Built from the same
// data as the pages, so it stays in sync when services or guides change.
import { SITE } from "../../lib/site";
import { SERVICES, AREAS } from "../../lib/renofix-data";
import { GUIDES } from "../../lib/guides";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.name} is a licensed renovation, MEP and maintenance contractor in Dubai, UAE. ` +
      "We renovate apartments and villas, rebuild bathrooms and kitchens, carry out MEP works, and work as a " +
      "supply-and-install subcontractor for main contractors and fit-out companies. " +
      "We quote fixed, itemised prices up front and back our work with a workmanship warranty.",
    "",
    "## Key facts",
    "",
    `- Location: ${SITE.city}, United Arab Emirates`,
    "- Serves: homeowners, landlords, property managers, main contractors, fit-out companies and developers",
    "- Projects: residential (apartments, villas, townhouses) and commercial (offices, retail, F&B)",
    "- Pricing: fixed, transparent, itemised quotes; instant online estimate available",
    "- Approvals: prepares building NOC documents and supports DEWA and authority submissions",
    `- Phone / WhatsApp: ${SITE.phone}`,
    `- Email: ${SITE.email}`,
    `- Website: ${SITE.url}`,
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
    `- [Renovation cost calculator](${SITE.url}/cost-calculator): instant estimate for a Dubai renovation`,
    `- [Our work](${SITE.url}/our-work): completed projects`,
    `- [Request a service](${SITE.url}/request)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
