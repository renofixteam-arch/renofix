export const SERVICES = [
  {
    slug: "apartment-renovation",
    name: "Apartment Renovation",
    short: "apartment renovation",
    estimateKey: "apartment",
    areaTypes: ["apartment", "villa"],
    intro:
      "Complete apartment renovation and remodeling, from a single-room refresh to a full unit upgrade, delivered on time and on a fixed budget.",
    scope: [
      "Demolition and rubbish removal",
      "Flooring, wall finishes and painting",
      "Plumbing and electrical (MEP) upgrades",
      "Kitchen and bathroom works",
      "False ceilings, lighting and joinery",
    ],
    faqs: [
      { q: "How long does an apartment renovation take?", a: "A typical Dubai apartment renovation takes 3 to 8 weeks depending on scope, size and finishes. We share a clear timeline before starting." },
      { q: "Do you handle building and community approvals?", a: "Yes. We prepare NOC documents and coordinate with the developer or community management so your renovation is fully compliant." },
    ],
  },
  {
    slug: "villa-renovation",
    name: "Villa Renovation",
    short: "villa renovation",
    estimateKey: "villa",
    areaTypes: ["villa"],
    intro:
      "End-to-end villa renovation and remodeling. Structural, MEP, interior and exterior works handled by one accountable team.",
    scope: [
      "Full villa strip-out and remodeling",
      "Structural, civil and MEP works",
      "Kitchen, bathroom and bedroom upgrades",
      "External works, terraces and driveways",
      "Painting, flooring and finishing",
    ],
    faqs: [
      { q: "Can you renovate an occupied villa?", a: "Yes. We phase the work room by room where possible so parts of the villa stay usable, and agree the plan with you upfront." },
      { q: "Do you provide a fixed-price quotation?", a: "Yes. After a free site visit we provide a detailed, fixed-price BOQ so there are no surprises during the project." },
    ],
  },
  {
    slug: "bathroom-renovation",
    name: "Bathroom Renovation",
    short: "bathroom renovation",
    estimateKey: "bathroom",
    areaTypes: ["apartment", "villa"],
    intro:
      "Full bathroom renovation done right, with proper waterproofing, plumbing, tiling and finishing that lasts.",
    scope: [
      "Demolition and waterproofing",
      "Plumbing and drainage rework",
      "Wall and floor tiling",
      "Sanitary ware and fixtures installation",
      "Vanity, lighting and accessories",
    ],
    faqs: [
      { q: "How much does a bathroom renovation cost in Dubai?", a: "A cosmetic refresh starts from roughly AED 8,000. A full rebuild in the same layout is typically AED 15,000 – 30,000, and a full rebuild with a new layout roughly AED 25,000 – 50,000+, depending on size, finishes and the amount of plumbing rework required." },
      { q: "Do you guarantee the waterproofing?", a: "Yes. Waterproofing is the most critical step. We use proven systems and back our workmanship with a 12-month warranty (terms and conditions apply)." },
    ],
  },
  {
    slug: "kitchen-renovation",
    name: "Kitchen Renovation",
    short: "kitchen renovation",
    estimateKey: "kitchen",
    areaTypes: ["apartment", "villa"],
    intro:
      "Kitchen renovation from layout to finishing. Cabinets, worktops, plumbing, electrical and appliances handled end to end.",
    scope: [
      "Layout planning and demolition",
      "Plumbing and electrical points",
      "Cabinets and countertops",
      "Tiling and backsplash",
      "Appliance and fixture installation",
    ],
    faqs: [
      { q: "Can you work with my existing kitchen layout?", a: "Yes. We can refresh your current layout or redesign it completely, depending on your budget and how you use the space." },
      { q: "Do you supply the cabinets and countertops?", a: "Yes. We supply and install cabinets, countertops and hardware, or work with materials you have already selected." },
    ],
  },
  {
    slug: "mep-works",
    name: "MEP Works",
    short: "MEP works",
    estimateKey: "mep",
    areaTypes: ["apartment", "villa"],
    intro:
      "Mechanical, electrical and plumbing works by licensed teams. Safe, compliant and built to Dubai standards.",
    scope: [
      "Electrical wiring and DB upgrades",
      "Plumbing and drainage",
      "AC and ventilation works",
      "Lighting and power points",
      "Testing, commissioning and compliance",
    ],
    faqs: [
      { q: "Are your MEP works DEWA compliant?", a: "Yes. All electrical and plumbing works follow DEWA and Dubai Municipality standards and are carried out by qualified technicians." },
      { q: "Do you offer AMC for MEP systems?", a: "Yes. We provide annual maintenance contracts covering electrical, plumbing and AC systems for apartments and villas." },
      { q: "Do you work as an MEP subcontractor?", a: "Yes. We take on MEP and finishing packages on a supply-and-install basis for main contractors, fit-out companies and developers, on residential and commercial projects. See our subcontracting page for details." },
    ],
  },
  {
    slug: "swimming-pool-construction",
    name: "Swimming Pool Construction",
    short: "swimming pool construction",
    estimateKey: "pool",
    areaTypes: ["villa"],
    intro:
      "Swimming pool construction and renovation. Design, structure, waterproofing, tiling and filtration built to last in Dubai's climate.",
    scope: [
      "Pool design and excavation",
      "Structural shell and waterproofing",
      "Filtration and pump systems",
      "Tiling, coping and finishes",
      "Lighting and pool automation",
    ],
    faqs: [
      { q: "Do I need approvals to build a pool in Dubai?", a: "Yes. A pool usually requires Dubai Municipality and community approvals. We handle the drawings, NOC and approval process for you." },
      { q: "How long does pool construction take?", a: "A standard residential pool takes 6 to 12 weeks depending on size, design and approvals." },
    ],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    short: "landscaping",
    estimateKey: "landscaping",
    areaTypes: ["villa"],
    intro:
      "Garden and outdoor landscaping. Softscaping, hardscaping, irrigation and lighting that transform your villa's outdoor space.",
    scope: [
      "Garden design and planting",
      "Paving, decking and hardscaping",
      "Irrigation and drainage systems",
      "Artificial grass and turf",
      "Outdoor lighting and features",
    ],
    faqs: [
      { q: "Do you maintain gardens after installation?", a: "Yes. We offer ongoing garden maintenance packages covering irrigation, planting and general upkeep." },
      { q: "Can you install artificial grass?", a: "Yes. We supply and install high-quality artificial grass suited to Dubai's climate, with proper base preparation." },
    ],
  },
  {
    slug: "painting-flooring",
    name: "Painting & Flooring",
    short: "painting and flooring",
    estimateKey: "mep",
    areaTypes: ["apartment", "villa"],
    intro:
      "Professional painting and flooring for a fresh, durable finish \u2014 interior and exterior painting plus quality flooring installation.",
    scope: [
      "Interior and exterior painting",
      "Surface preparation and priming",
      "Vinyl, laminate and tile flooring",
      "Skirting, sealing and finishing",
      "Wallpaper and feature walls",
    ],
    faqs: [
      { q: "How long does painting an apartment take?", a: "Most apartments are painted in 2 to 5 days depending on size, prep work and the number of coats required." },
      { q: "Do you protect furniture and floors?", a: "Yes. We cover and protect furniture and floors, and tidy up fully once the work is complete." },
    ],
  },
  {
    slug: "false-ceiling-partitions",
    name: "False Ceiling & Partitions",
    short: "false ceiling and partition works",
    estimateKey: "mep",
    areaTypes: ["apartment", "villa"],
    intro:
      "Gypsum false ceilings, partitions and light coves that transform a space \u2014 clean lines, hidden lighting and better acoustics.",
    scope: [
      "Gypsum board false ceilings",
      "Cove and cornice lighting details",
      "Partition and dividing walls",
      "Bulkheads and drop ceilings",
      "Painting and finishing",
    ],
    faqs: [
      { q: "Can you add hidden lighting in the ceiling?", a: "Yes. Cove lighting and recessed spotlights are a core part of our false ceiling work, wired to Dubai standards." },
      { q: "Do partitions need approval?", a: "Non-structural partitions usually don't, but community approval may apply. We check and handle any NOC needed." },
    ],
  },
  {
    slug: "home-maintenance",
    name: "Home Maintenance & AMC",
    short: "home maintenance",
    estimateKey: "mep",
    areaTypes: ["apartment", "villa"],
    intro:
      "Annual maintenance contracts and one-off repairs \u2014 plumbing, electrical, AC, handyman and general upkeep for your home.",
    scope: [
      "Annual maintenance contracts (AMC)",
      "Plumbing and electrical repairs",
      "AC servicing and repairs",
      "Handyman and general fixes",
      "Preventive maintenance visits",
    ],
    faqs: [
      { q: "What does an AMC cover?", a: "A typical AMC covers scheduled AC servicing, plumbing and electrical checks, and a set number of callout repairs across the year." },
      { q: "Do you offer emergency callouts?", a: "Yes. We provide callouts for urgent plumbing, electrical and AC issues for homes on our maintenance plans." },
    ],
  },
];

// Area landing-page content. Keep it factual and general (community type, who
// approves works, what renovations there usually involve) — no invented
// project counts, prices or claims about specific buildings.
export const AREAS = [
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    type: "apartment",
    blurb: "Tower apartment renovations planned around building NOCs, working hours and service-lift bookings.",
    intro:
      "Dubai Marina is almost entirely high-rise towers, so most renovations here are apartment upgrades carried out under building management rules. Planning the approvals and logistics properly matters as much as the work itself.",
    notes: [
      "Building approval first: most towers require a renovation NOC from building management or the owners' association before work starts, often with a refundable deposit.",
      "Working hours and service lifts: noisy work and deliveries are usually limited to set weekday hours and booked service-lift slots, which shapes the programme.",
      "Older towers: the earliest Marina towers date from the mid-2000s, so plumbing, AC and electrical upgrades often come up once bathrooms and kitchens are opened.",
      "Debris removal: demolition waste has to be bagged and taken out via the service lift — make sure it is in the quote.",
    ],
    nocFaq:
      "Yes, in almost every Dubai Marina tower. Building management or the owners' association issues the renovation NOC, usually after reviewing the scope, contractor documents and sometimes a deposit. We prepare the documents and coordinate the submission.",
  },
  {
    slug: "jvc",
    name: "Jumeirah Village Circle",
    label: "JVC (Jumeirah Village Circle)",
    type: "apartment",
    blurb: "Apartment and townhouse renovations in JVC, from rental-ready refreshes to full upgrades.",
    intro:
      "Jumeirah Village Circle (JVC) is a Nakheel master community of mid-rise apartment buildings, townhouses and villas. Many units are owned by investors and let to tenants, so renovations range from quick rental-ready refreshes to full upgrades for owner-occupiers.",
    notes: [
      "Rental-ready refreshes are common: paint, flooring, kitchen and bathroom updates between tenancies, where speed and hard-wearing finishes matter most.",
      "Approvals: each building's management or owners' association sets its own NOC process and working hours — we prepare the documents and plan around them.",
      "Mostly newer stock: many JVC buildings are relatively recent, so work is often cosmetic or layout upgrades rather than full MEP replacement.",
      "Townhouses and villas: these follow community rules, and external changes generally need extra approval.",
    ],
    nocFaq:
      "Usually yes. For apartments, the building's management or owners' association issues the NOC; for townhouses and villas, community rules apply and external changes need further approval. We handle the paperwork as part of the job.",
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    type: "apartment",
    blurb: "Apartment renovations in Business Bay towers, planned around building rules and tight schedules.",
    intro:
      "Business Bay is a dense mix of residential towers, serviced apartments and offices along the Dubai Water Canal. Many residential units are investor-owned, so renovations often focus on rental appeal, durable finishes and a fast turnaround.",
    notes: [
      "Tower rules: building management sets the NOC process, working hours and service-lift bookings — mixed-use towers are often the strictest.",
      "Rental appeal: kitchen and bathroom updates, new flooring and lighting give the biggest uplift for let apartments.",
      "Fast turnaround: a fixed programme agreed up front keeps vacant periods short between tenancies.",
      "Clear scope: an itemised quote makes it easy to compare options and avoid surprise extras.",
    ],
    nocFaq:
      "Yes. Business Bay towers require a renovation NOC from building management before work begins, and many set strict hours for noisy work. We prepare the documents and schedule the work within the building's rules.",
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    type: "apartment",
    blurb: "Apartment renovations in Downtown Dubai's towers and Old Town, handled with the right approvals.",
    intro:
      "Downtown Dubai is Emaar's master community around Burj Khalifa and The Dubai Mall, made up mainly of high-rise towers and the low-rise Old Town buildings. Busy towers mean approvals, access and working hours need careful planning.",
    notes: [
      "Approvals: building management and the community both have rules for renovation works — we prepare the NOC documents before any work starts.",
      "Access and timing: busy towers restrict deliveries and noisy work to set hours, so a realistic programme is essential.",
      "Older buildings: Old Town and the earlier towers date from the mid-2000s, so kitchens, bathrooms and MEP systems are often due for an upgrade.",
      "Finish choices: a clear specification by brand and grade avoids disputes and keeps the budget fixed.",
    ],
    nocFaq:
      "Yes. Renovations in Downtown Dubai need approval from building management, and community rules also apply. We prepare the NOC documents and coordinate the submission as part of the project.",
  },
  {
    slug: "arabian-ranches",
    name: "Arabian Ranches",
    type: "villa",
    blurb: "Villa and townhouse renovations in Arabian Ranches, from kitchens and bathrooms to full upgrades.",
    intro:
      "Arabian Ranches is one of Emaar's earliest villa communities, with the first homes handed over in the mid-2000s. Many villas are now due for kitchen, bathroom and MEP upgrades, and owners often renovate the whole home in one programme.",
    notes: [
      "Age of the homes: original kitchens, bathrooms, AC units and plumbing are often reaching the end of their life, so a full upgrade is usually better value than piecemeal fixes.",
      "Community approval: alterations — especially external works, extensions and pools — need approval from the community management before work starts.",
      "Indoor and outdoor together: many owners combine interior work with garden, landscaping or pool upgrades to share mobilisation costs.",
      "Living nearby: work can be phased where needed, but a single programme is faster and usually cheaper.",
    ],
    nocFaq:
      "Yes for most works. Arabian Ranches has community rules for villa alterations, and external changes, extensions and pools need approval before work starts. We prepare the drawings and documents for the submission.",
  },
  {
    slug: "jumeirah",
    name: "Jumeirah",
    type: "villa",
    blurb: "Renovations of older and newer villas across Jumeirah, with a proper site survey first.",
    intro:
      "Jumeirah is one of Dubai's older, established residential areas, with many standalone villas built over several decades rather than in a single master-planned community. Condition and layouts vary a lot from one villa to the next.",
    notes: [
      "Site survey first: because villas vary so much, an on-site survey is the only way to give an accurate, fixed price.",
      "Older villas: full MEP renewal, re-waterproofing of wet areas and roof checks are common on older homes.",
      "Approvals depend on the plot: structural changes and extensions generally need authority permits — we confirm what applies before design starts.",
      "Layout changes: opening up kitchens and living areas is a popular upgrade in older villas, subject to structural checks.",
    ],
    nocFaq:
      "It depends on the property and the scope. Apartments need approval from building management; for villas, interior refurbishment is usually simpler, while structural changes and extensions generally need authority permits. We confirm the requirements before work starts.",
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    type: "villa",
    blurb: "Villa and apartment renovations on Palm Jumeirah, specified for the coastal environment.",
    intro:
      "Palm Jumeirah is Nakheel's island community of frond villas and shoreline apartment buildings. The coastal setting and community rules both shape how renovations here are specified and approved.",
    notes: [
      "Permits: alterations need approval from the community or building management before work starts — external changes and pools in particular.",
      "Coastal environment: humidity and salt air call for corrosion-resistant fittings, good waterproofing and well-maintained AC.",
      "Older frond villas: many date from the late 2000s, so kitchens, bathrooms and MEP systems are often due for renewal.",
      "Access: deliveries and working hours are controlled on the fronds and in the buildings, so logistics are planned in advance.",
    ],
    nocFaq:
      "Yes. Renovations on Palm Jumeirah need approval from the community or building management, and external works and pools need specific permits. We prepare the documents and coordinate the submission.",
  },
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    type: "villa",
    blurb: "Upgrades for newer villas, townhouses and apartments in Dubai Hills Estate.",
    intro:
      "Dubai Hills Estate is a newer Emaar master community of villas, townhouses and apartment buildings. Because the homes are relatively recent, most projects here are upgrades — kitchens, joinery, flooring, landscaping and pools — rather than repairs.",
    notes: [
      "Upgrades over repairs: popular projects include kitchen and wardrobe upgrades, flooring, lighting, and garden or pool works.",
      "Community approval: modifications, especially external works, extensions and pools, need approval from the community before work starts.",
      "Check before you alter: if your home is still within the developer's defects period, confirm how alterations affect it before starting.",
      "One team for everything: combining interior, outdoor and MEP works in one programme keeps coordination simple.",
    ],
    nocFaq:
      "Yes for most works. Dubai Hills Estate has community rules for modifications, and external works, extensions and pools need approval before starting. We prepare the documents for the submission.",
  },
];

// Display name for an area — uses the common short form where people search by it (e.g. "JVC").
export function areaLabel(area) {
  return area.label || area.name;
}

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug) || null;
}

export function getArea(slug) {
  return AREAS.find((a) => a.slug === slug) || null;
}

export function areasForService(service) {
  return AREAS.filter((a) => service.areaTypes.includes(a.type));
}

export function allServiceAreaParams() {
  const params = [];
  for (const s of SERVICES) {
    for (const a of AREAS) {
      if (s.areaTypes.includes(a.type)) {
        params.push({ service: s.slug, area: a.slug });
      }
    }
  }
  return params;
}


// Maps a service slug to the most relevant guide slug (for on-page cross-linking / SEO).
export const SERVICE_GUIDE = {
  "apartment-renovation": "apartment-renovation-cost-dubai",
  "villa-renovation": "villa-renovation-cost-dubai",
  "bathroom-renovation": "bathroom-renovation-cost-dubai",
  "kitchen-renovation": "kitchen-renovation-cost-dubai",
  "mep-works": "renovation-approvals-noc-dubai",
  "home-maintenance": "choosing-renovation-contractor-dubai",
};
