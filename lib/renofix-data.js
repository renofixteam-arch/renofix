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
    slug: "interior-design-fit-out",
    name: "Interior Design & Fit-Out",
    short: "interior design and fit-out",
    estimateKey: "apartment",
    areaTypes: ["apartment", "villa"],
    metaDescription:
      "Interior design and fit-out in Dubai by RenoFix Plus — concept, 3D visuals, material selection and build, on a fixed, itemised price with a 12-month warranty (T&Cs apply).",
    intro:
      "Interior design and fit-out in one: concept, 3D visuals, material selection and the build itself, delivered by one accountable team on a fixed, itemised price.",
    scope: [
      "Design brief, concept and moodboard",
      "3D visualisation of the key spaces",
      "Material, finish and furniture (FF&E) selection",
      "Made-to-measure joinery, wardrobes and kitchens",
      "Ceilings, lighting, flooring and wall finishes",
      "MEP works, approvals and handover",
    ],
    // Extra content shown on the /interior-design-fit-out hub page only.
    hub: {
      processTitle: "How design and build works with us",
      process: [
        ["Brief", "We visit the property, measure up and agree how you want to use the space, your style and your budget."],
        ["Concept and moodboard", "A design direction with layout options, colours, materials and references."],
        ["3D visualisation", "3D views of the key spaces so you can see the result before anything is built."],
        ["Materials and FF&E", "Finishes, fittings, lighting and furniture selected and specified by brand and grade."],
        ["Approvals", "We prepare the drawings and documents for the building or community NOC."],
        ["Build and finishing", "Our own supervised teams carry out the fit-out, from MEP and ceilings to joinery and finishes."],
        ["Handover", "A walk-through, snag list closed out, and the 12-month workmanship warranty (T&Cs apply) begins."],
      ],
      body: [
        "Most interior projects in Dubai are split between a designer and a separate contractor, and the gaps between the two are where budgets and timelines slip. We do both: the team that designs your space also builds it, so the price you approve is the price of the finished interior, not just the drawings.",
        "We work on apartments, villas and townhouses — including newly handed-over homes that need a full fit-out — and on commercial interiors such as offices, retail units and F&B outlets.",
      ],
    },
    faqs: [
      { q: "Do you design and build, or only design?", a: "Both. We take the project from brief and concept through 3D visuals, material selection and approvals to the build and handover, so one team is accountable for the design and how it is executed." },
      { q: "Do you fit out newly handed-over homes?", a: "Yes. New apartments, villas and townhouses often need joinery, wardrobes, kitchen upgrades, lighting, flooring and garden work after handover, and we handle these as one fit-out project." },
      { q: "How is interior design and fit-out priced?", a: "After a site visit and an agreed brief we give a fixed, itemised quotation covering design and build. Any change in scope is priced in writing before it is done." },
      { q: "Do you take on commercial interiors?", a: "Yes. As well as homes, we design and fit out offices, retail units and F&B outlets." },
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

// Which services get a page in each newer area. Older areas (without a
// `services` list) fall back to matching service.areaTypes to area.type.
const VILLA_SERVICES = ["villa-renovation", "interior-design-fit-out", "landscaping", "swimming-pool-construction", "home-maintenance"];
const APARTMENT_SERVICES = ["apartment-renovation", "bathroom-renovation", "kitchen-renovation", "interior-design-fit-out", "home-maintenance"];
// Newly handed-over homes need fit-out, not renovation.
const NEW_VILLA_SERVICES = ["interior-design-fit-out", "landscaping", "swimming-pool-construction", "home-maintenance"];
const NEW_APARTMENT_SERVICES = ["interior-design-fit-out", "kitchen-renovation", "home-maintenance"];
const NEW_MIXED_SERVICES = ["interior-design-fit-out", "landscaping", "home-maintenance"];

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

  // ---- Prime villa communities (2026-10 expansion) ----
  {
    slug: "al-barari",
    name: "Al Barari",
    type: "villa",
    services: VILLA_SERVICES,
    profile: {
      developer: "Al Barari Developers",
      homes: "Villas on large, heavily planted plots in a low-density gated community",
      approvals: "Community management approval; authority permits for structural or external changes",
    },
    blurb: "Villa renovation, interiors and garden work in Al Barari, planned around its planted plots and community rules.",
    intro:
      "Al Barari is a gated, low-density villa community in Dubailand, developed by Al Barari Developers and known for how much of its land is given over to gardens, lakes and planting. The first villas were completed around 2009, so many homes now combine interior upgrades with work on mature gardens and outdoor living areas.",
    notes: [
      "Gardens are central: plots are large and heavily planted, so landscaping, irrigation and outdoor living areas are often a bigger share of the scope than in other communities.",
      "Community approval first: alterations need sign-off from the community management before work starts; extensions and structural changes also need authority permits.",
      "First-phase villas: homes completed around 2009 are often due for kitchen, bathroom, AC and plumbing upgrades.",
      "Protecting the site: deliveries and machinery are planned so established planting and shared landscaping are not damaged.",
    ],
    angles: {
      "villa-renovation": "Renovations in Al Barari often pair interior upgrades with new terraces, pergolas and outdoor living areas facing the gardens.",
      "interior-design-fit-out": "Interiors here open onto large gardens, so we plan finishes, glazing and lighting around the outdoor views.",
      landscaping: "Landscaping in Al Barari is usually about renewing mature gardens — replanting, irrigation upgrades and new hardscape — rather than starting from bare sand.",
      "swimming-pool-construction": "Pools are usually added or renewed as part of a wider garden plan, so pool, decking and planting are designed together.",
      "home-maintenance": "Large plots and mature gardens make scheduled irrigation, AC and plumbing checks worthwhile rather than waiting for a fault.",
    },
    nocFaq:
      "Yes for most works. Al Barari's community management approves alterations before work starts, and extensions, structural or external changes also need authority permits. We prepare the drawings and documents and coordinate the submissions.",
  },
  {
    slug: "emirates-hills",
    name: "Emirates Hills",
    type: "villa",
    services: VILLA_SERVICES,
    profile: {
      developer: "Emaar",
      homes: "Large standalone villas on big plots, many overlooking the golf course or lakes",
      approvals: "Emaar community rules; authority permits for structural, external and pool works",
    },
    blurb: "Villa refurbishments, interiors, gardens and pools in Emirates Hills, with a full survey before any fixed price.",
    intro:
      "Emirates Hills is one of Emaar's earliest villa communities, made up of large standalone villas on generous plots, many overlooking the Montgomerie golf course or the community lakes. Villas vary widely in age, size and design, so projects range from interior upgrades to full refurbishments with new outdoor areas.",
    notes: [
      "Every villa is different: plots and floor plans vary a lot, so an on-site survey comes before any fixed price.",
      "Community approval: Emaar's community rules apply to alterations, and external changes, extensions and pools need approval before work starts.",
      "Older villas: many homes date from the early 2000s, so MEP renewal and re-waterproofing of wet areas are common in larger refurbishments.",
      "Premium finishes, clear specification: materials are specified by brand and grade so the agreed fixed price holds.",
    ],
    angles: {
      "villa-renovation": "Larger Emirates Hills refurbishments often renew MEP, wet areas and kitchens together, which is more efficient in one programme than in phases.",
      "interior-design-fit-out": "With large floor plans, interiors here are designed as a whole house so finishes and joinery stay consistent from room to room.",
      landscaping: "Gardens are often large and visible from the golf course or lake, so landscaping usually means a full garden redesign rather than small fixes.",
      "swimming-pool-construction": "Pool renewals and new pools are common; we handle design, approvals and construction together with the surrounding hardscape.",
      "home-maintenance": "Big villas run big AC, plumbing and electrical systems, and planned maintenance keeps them reliable through the summer.",
    },
    nocFaq:
      "Yes. Alterations in Emirates Hills need approval under Emaar's community rules, and structural changes, extensions, external works and pools also need authority permits. We prepare the documents and coordinate the submissions.",
  },
  {
    slug: "jumeirah-islands",
    name: "Jumeirah Islands",
    type: "villa",
    services: VILLA_SERVICES,
    profile: {
      developer: "Nakheel",
      homes: "Villas in clusters set on islands surrounded by lakes",
      approvals: "Nakheel approval before any modification; the permit route for structural or external work depends on the plot",
    },
    blurb: "Villa upgrades, interiors and lake-facing gardens in Jumeirah Islands, with Nakheel approvals handled.",
    intro:
      "Jumeirah Islands is a Nakheel community of villa clusters on islands surrounded by lakes. Most villas date from the mid-2000s, and many owners are now upgrading kitchens, bathrooms and MEP, or reworking the outdoor areas that face the water.",
    notes: [
      "Developer approval is required: modifications need Nakheel's approval before work starts, and unapproved changes can lead to fines.",
      "Waterside setting: villas back onto lakes, so humidity, drainage and outdoor finishes need care in the specification.",
      "Mid-2000s homes: original kitchens, bathrooms, AC and plumbing are often due for replacement.",
      "Adding space: extensions are possible in some cases but must be approved first — we confirm what is allowed before design starts.",
    ],
    angles: {
      "villa-renovation": "Many Jumeirah Islands projects combine an interior refresh with outdoor upgrades on the lake-facing side of the villa.",
      "interior-design-fit-out": "Waterside villas get a lot of light and humidity, so we choose finishes and joinery that cope with both.",
      landscaping: "Gardens back onto the lakes, so landscaping often focuses on lake-facing terraces, planting and good drainage.",
      "swimming-pool-construction": "Private pools sit close to the lake edge, so levels, waterproofing and drainage are planned carefully.",
      "home-maintenance": "Humidity from the lakes makes regular AC, waterproofing and plumbing checks worthwhile.",
    },
    nocFaq:
      "Yes. Jumeirah Islands owners need Nakheel's approval before modifying a villa, and structural or external changes may also need an authority permit depending on the plot. We confirm the requirements and prepare the submission.",
  },
  {
    slug: "jumeirah-park",
    name: "Jumeirah Park",
    type: "villa",
    services: VILLA_SERVICES,
    profile: {
      developer: "Nakheel",
      homes: "Standalone family villas on generous plots",
      approvals: "Nakheel approval before modifications; drawings and approval needed for extensions",
    },
    blurb: "Villa extensions, layout changes, interiors and gardens in Jumeirah Park, with Nakheel approvals handled.",
    intro:
      "Jumeirah Park is a Nakheel community of standalone family villas on generous plots, next to Jumeirah Lake Towers. Villas here are popular for reworking the layout, and many owners upgrade kitchens, add rooms or improve gardens and pools.",
    notes: [
      "Developer approval: Nakheel's approval is needed before modifications, and extensions need drawings and approval before work starts.",
      "Generous plots: there is often room for garden, pool or outdoor-kitchen upgrades.",
      "Layout changes: opening up kitchens and living areas is a popular upgrade, subject to structural checks.",
      "One programme: combining interior, garden and pool work avoids paying for mobilisation and approvals twice.",
    ],
    angles: {
      "villa-renovation": "Jumeirah Park renovations often include layout changes such as opening the kitchen to the living area or adding a room, each checked structurally first.",
      "interior-design-fit-out": "Family villas here suit practical interiors — built-in storage, durable flooring and kitchens planned around daily use.",
      landscaping: "With generous gardens, owners often add shaded seating, outdoor kitchens and lower-maintenance planting.",
      "swimming-pool-construction": "Many plots have room for a private pool, which needs approval and careful planning around the villa and boundary walls.",
      "home-maintenance": "Standalone villas mean the owner looks after every system, so an annual maintenance plan for AC, plumbing and electrics saves surprises.",
    },
    nocFaq:
      "Yes. Modifications in Jumeirah Park need Nakheel's approval, and extensions or structural changes need drawings and may need an authority permit. We prepare the documents and handle the submission.",
  },
  {
    slug: "the-springs",
    name: "The Springs",
    type: "villa",
    services: VILLA_SERVICES,
    profile: {
      developer: "Emaar (Emirates Living)",
      homes: "Townhouses and smaller villas set around lakes, among Emaar's early homes in Dubai",
      approvals: "Emaar community rules; approval needed for external changes, extensions and pools",
    },
    blurb: "Townhouse and villa renovations in The Springs — kitchens, bathrooms, layouts and gardens.",
    intro:
      "The Springs is part of Emaar's Emirates Living, made up of townhouses and smaller villas set around lakes. Many homes date from the early 2000s, so original kitchens, bathrooms and AC systems are often ready for replacement, and opening up the ground floor is a common upgrade.",
    notes: [
      "Older homes: original kitchens, bathrooms, plumbing and AC units are often at the end of their life.",
      "Popular upgrades: opening the kitchen to the living area, new flooring and a reworked garden.",
      "Community approval: alterations follow Emaar's community rules, and external changes need approval before starting.",
      "Compact plots: garden and pool work is planned to make the most of smaller gardens.",
    ],
    angles: {
      "villa-renovation": "Renovations in The Springs often start with the original kitchen and bathrooms, then open up the ground floor to make the most of a compact layout.",
      "interior-design-fit-out": "Smaller townhouse layouts benefit from built-in joinery and lighting that make rooms feel larger.",
      landscaping: "Gardens here are compact, so landscaping is about making a small space usable — shade, seating and low-maintenance planting.",
      "swimming-pool-construction": "Plunge pools and compact pools suit the smaller gardens, subject to community approval.",
      "home-maintenance": "Original AC units and plumbing in older Springs homes benefit from regular servicing between upgrades.",
    },
    nocFaq:
      "Yes for most works. Alterations in The Springs follow Emaar's community rules, and external changes, extensions and pools need approval before work starts. We prepare the documents for the submission.",
  },
  {
    slug: "the-meadows",
    name: "The Meadows",
    type: "villa",
    services: VILLA_SERVICES,
    profile: {
      developer: "Emaar (Emirates Living)",
      homes: "Standalone villas, larger than The Springs, set around lakes",
      approvals: "Emaar community rules; approval needed for external changes, extensions and pools",
    },
    blurb: "Villa renovations in The Meadows, from kitchens and bathrooms to extensions, gardens and pools.",
    intro:
      "The Meadows is part of Emaar's Emirates Living, a community of standalone villas set around lakes and green spaces. The villas are larger than in neighbouring The Springs, and many owners are now renewing original kitchens, bathrooms and MEP or extending the living space.",
    notes: [
      "Ageing originals: kitchens, bathrooms, AC and plumbing from the original handover are often due for replacement.",
      "Room to grow: some villas can be extended, subject to community approval and structural checks.",
      "Community approval: alterations follow Emaar's community rules, and external works and pools need approval first.",
      "Indoor and outdoor together: many owners renovate the interior and garden in one programme.",
    ],
    angles: {
      "villa-renovation": "Meadows villas often get a full interior renewal — kitchen, bathrooms and MEP — sometimes alongside an approved extension.",
      "interior-design-fit-out": "Larger living areas here suit a whole-house design, with joinery and lighting planned room by room.",
      landscaping: "Lake-side and park-side gardens are a highlight, and landscaping often includes new terraces and irrigation.",
      "swimming-pool-construction": "Many villas have the space for a private pool; we handle the approval, design and build.",
      "home-maintenance": "Larger villas with older systems benefit from a yearly maintenance plan covering AC, plumbing and electrics.",
    },
    nocFaq:
      "Yes for most works. Alterations in The Meadows follow Emaar's community rules, and external works, extensions and pools need approval before work starts. We prepare the documents for the submission.",
  },
  {
    slug: "jumeirah-golf-estates",
    name: "Jumeirah Golf Estates",
    type: "villa",
    services: VILLA_SERVICES,
    profile: {
      developer: "Jumeirah Golf Estates (master community)",
      homes: "Villas and townhouses in gated sub-communities around the Earth and Fire golf courses",
      approvals: "Community management approval; authority permits for structural or external work",
    },
    blurb: "Villa and townhouse renovations, fit-outs, gardens and pools in Jumeirah Golf Estates.",
    intro:
      "Jumeirah Golf Estates is a master-planned community built around the Earth and Fire golf courses, with villas and townhouses in a number of gated sub-communities. It mixes established homes with newer phases, so projects range from full refurbishments to fit-outs and garden upgrades.",
    notes: [
      "Mixed ages: established sub-communities often need kitchen, bathroom and MEP upgrades, while newer phases need fit-out and customisation.",
      "Golf-course frontage: gardens facing the fairways are a focus, with rules on boundary and external changes.",
      "Community approval: alterations, external works and pools need community approval before starting.",
      "Gated access: contractor registration and access passes are arranged before mobilisation.",
    ],
    angles: {
      "villa-renovation": "In the established sub-communities, renovations usually focus on kitchens, bathrooms and MEP that are reaching the end of their life.",
      "interior-design-fit-out": "Newer homes here often need a full fit-out after handover — joinery, wardrobes, lighting and window treatments.",
      landscaping: "Fairway-facing gardens get a lot of attention, so landscaping usually balances views, privacy and shade.",
      "swimming-pool-construction": "Pools facing the golf course are popular and need community approval and careful levels and drainage.",
      "home-maintenance": "Gated villas with large gardens benefit from planned AC, irrigation and plumbing maintenance.",
    },
    nocFaq:
      "Yes for most works. Jumeirah Golf Estates' community management approves alterations, and external works, extensions and pools need approval before starting; structural changes may also need an authority permit. We prepare the documents and coordinate the submission.",
  },
  {
    slug: "damac-hills",
    name: "DAMAC Hills",
    type: "villa",
    services: VILLA_SERVICES,
    profile: {
      developer: "DAMAC Properties",
      homes: "Villas, townhouses and apartments around an 18-hole golf course (formerly Akoya by DAMAC)",
      approvals: "DAMAC community management approval; authority permits for structural or external work",
    },
    blurb: "Villa and townhouse renovations, interiors, gardens and pools in DAMAC Hills.",
    intro:
      "DAMAC Hills, formerly Akoya by DAMAC, is a golf-course community of villas, townhouses and apartments. Homes were handed over in phases, so owners range from those personalising a recent handover to those renewing kitchens, bathrooms and gardens in older clusters.",
    notes: [
      "Phased community: older clusters need renovation, newer ones need fit-out and customisation — we scope each villa on site.",
      "Community approval: DAMAC's community management approves alterations, and external changes and pools need approval first.",
      "Golf and park views: gardens and terraces facing the course or parks are a common upgrade.",
      "Townhouse layouts: compact layouts benefit from built-in storage and opened-up living areas.",
    ],
    angles: {
      "villa-renovation": "Renovations in the older DAMAC Hills clusters often cover kitchens, bathrooms and flooring together.",
      "interior-design-fit-out": "Recently handed-over homes here often need joinery, wardrobes and lighting to make them feel finished.",
      landscaping: "Many gardens are handed over basic, so landscaping usually means designing the garden from scratch.",
      "swimming-pool-construction": "Private pools are a popular addition on villa plots, subject to DAMAC's approval.",
      "home-maintenance": "An annual maintenance plan keeps AC, plumbing and electrics in good shape across the summer.",
    },
    nocFaq:
      "Yes for most works. DAMAC's community management approves alterations before work starts, and external works, extensions and pools need approval; structural changes may also need an authority permit. We prepare the documents for the submission.",
  },
  {
    slug: "tilal-al-ghaf",
    name: "Tilal Al Ghaf",
    type: "villa",
    services: NEW_VILLA_SERVICES,
    newHandover: true,
    profile: {
      developer: "Majid Al Futtaim",
      homes: "Newer villas and townhouses around a central lagoon, delivered in phases",
      handover: "First phases handed over; later phases still being delivered",
      approvals: "Community approval for fit-out, landscaping, pools and any external changes",
    },
    blurb: "Fit-out, interiors, landscaping and pools for newly handed-over homes in Tilal Al Ghaf.",
    intro:
      "Tilal Al Ghaf is a Majid Al Futtaim community of villas and townhouses built around a central lagoon. Homes are being handed over in phases, so most work here is fitting out and personalising new homes rather than renovating them.",
    notes: [
      "New homes, not renovations: owners usually need joinery, wardrobes, lighting, window treatments and gardens after handover.",
      "Snag first: record defects for the developer before fit-out starts, so the two don't get mixed up.",
      "Check the defects period: confirm how alterations affect the developer's defects cover before changing anything it includes.",
      "Community approval: fit-out, landscaping, pools and external changes need approval before work starts.",
    ],
    angles: {
      "interior-design-fit-out": "In Tilal Al Ghaf, fit-out usually means turning a new handover into a finished home — wardrobes, joinery, lighting, ceilings and window treatments.",
      landscaping: "Gardens are often handed over basic, so landscaping here means designing the garden, irrigation and shade from the start.",
      "swimming-pool-construction": "A private pool is a common first project after handover, planned together with the garden and approved by the community.",
      "home-maintenance": "A maintenance plan from the first year keeps a new home's AC, plumbing and electrics running well after the developer's cover ends.",
    },
    nocFaq:
      "Yes. Fit-out, landscaping, pools and external changes in Tilal Al Ghaf need community approval before work starts. We prepare the drawings and documents, and help you check how the work sits with the developer's defects cover.",
  },
  {
    slug: "arabian-ranches-2",
    name: "Arabian Ranches 2",
    type: "villa",
    services: VILLA_SERVICES,
    profile: {
      developer: "Emaar",
      homes: "Villas and townhouses in themed clusters, handed over from the mid-2010s",
      approvals: "Emaar community rules; approval needed for external changes, extensions and pools",
    },
    blurb: "Villa and townhouse upgrades, interiors, gardens and pools in Arabian Ranches 2.",
    intro:
      "Arabian Ranches 2 is an Emaar community of villas and townhouses in themed clusters, handed over from the mid-2010s. Homes are newer than the original Arabian Ranches, so projects are usually upgrades — kitchens, joinery, flooring, gardens and pools — rather than full renewals.",
    notes: [
      "Upgrades over repairs: kitchens, wardrobes, flooring and lighting are the most common projects.",
      "Community approval: Emaar's community rules apply, and external changes, extensions and pools need approval first.",
      "First renewals: AC units and some plumbing fittings from the first handovers are now reaching replacement age.",
      "Gardens and pools: many owners add a pool or rework the garden alongside interior upgrades.",
    ],
    angles: {
      "villa-renovation": "Renovations in Arabian Ranches 2 are mostly upgrades — kitchens, flooring and bathrooms — rather than full strip-outs.",
      "interior-design-fit-out": "Interior projects here often add joinery, feature lighting and storage to standard developer finishes.",
      landscaping: "Gardens are a common project, from new planting and irrigation to shaded seating areas.",
      "swimming-pool-construction": "Adding a private pool is a popular upgrade, subject to Emaar's approval.",
      "home-maintenance": "As the first AC units reach replacement age, planned maintenance helps decide what to service and what to replace.",
    },
    nocFaq:
      "Yes for most works. Alterations in Arabian Ranches 2 follow Emaar's community rules, and external changes, extensions and pools need approval before work starts. We prepare the documents for the submission.",
  },

  // ---- Apartment communities (2026-10 expansion) ----
  {
    slug: "jbr",
    name: "JBR",
    label: "JBR (Jumeirah Beach Residence)",
    type: "apartment",
    services: APARTMENT_SERVICES,
    profile: {
      developer: "Dubai Properties",
      homes: "Beachfront tower apartments completed in the late 2000s",
      approvals: "Building management or owners' association NOC; tower rules on working hours and service lifts",
    },
    blurb: "Apartment renovations in JBR's beachfront towers, planned around building rules and coastal conditions.",
    intro:
      "Jumeirah Beach Residence (JBR) is a line of beachfront towers developed by Dubai Properties and completed in the late 2000s. Many apartments still have their original kitchens and bathrooms, and the coastal air means AC and fittings work hard.",
    notes: [
      "Original fit-outs: many units still have kitchens, bathrooms and AC from the first handover.",
      "Coastal conditions: salt air and humidity call for corrosion-resistant fittings and well-maintained AC.",
      "Busy towers: building management sets NOC rules, working hours and service-lift slots, which shape the programme.",
      "Rental appeal: holiday and long-term lets benefit from durable, easy-to-clean finishes.",
    ],
    angles: {
      "apartment-renovation": "Full renovations in JBR usually replace the original kitchen, bathrooms and flooring in one programme to keep the unit off the market for as short a time as possible.",
      "bathroom-renovation": "Original JBR bathrooms often need re-waterproofing as well as new tiling and fittings.",
      "kitchen-renovation": "Kitchen upgrades here often open the kitchen to the living area to make the most of the sea views, subject to building approval.",
      "interior-design-fit-out": "Interiors in JBR are often designed for letting — durable finishes, good storage and furniture that copes with heavy use.",
      "home-maintenance": "Salt air shortens the life of AC and fittings, so regular servicing pays off in JBR.",
    },
    nocFaq:
      "Yes. JBR towers require a renovation NOC from building management or the owners' association before work starts, with set hours for noisy work and booked service-lift slots. We prepare the documents and plan the work around the building's rules.",
  },
  {
    slug: "bluewaters-island",
    name: "Bluewaters Island",
    type: "apartment",
    services: APARTMENT_SERVICES,
    profile: {
      developer: "Meraas",
      homes: "Relatively new low- and mid-rise apartments on an island next to JBR",
      approvals: "Building and community management approval before any works",
    },
    blurb: "Apartment fit-outs and upgrades on Bluewaters Island, handled within the island's building rules.",
    intro:
      "Bluewaters Island is a Meraas development next to JBR, with relatively new apartment buildings alongside hotels and retail. Because the homes are recent, most projects here are upgrades and personalisation rather than full renovations.",
    notes: [
      "Upgrades, not repairs: popular projects are joinery, wardrobes, lighting, flooring and kitchen upgrades.",
      "Island logistics: deliveries, parking and access are controlled, so materials and teams are scheduled in advance.",
      "Building approval: building and community management approve works before they start.",
      "Sea-facing units: humidity and salt air call for suitable fittings and finishes.",
    ],
    angles: {
      "apartment-renovation": "Renovations on Bluewaters are usually upgrades of the original finishes rather than full strip-outs.",
      "bathroom-renovation": "Bathroom projects here are usually about upgrading fittings and finishes rather than fixing failures.",
      "kitchen-renovation": "Kitchen work on Bluewaters often means new fronts, worktops and appliances within the existing layout.",
      "interior-design-fit-out": "Interior design here is mostly about personalising a newer apartment — joinery, lighting and furniture.",
      "home-maintenance": "Sea air makes regular AC and fittings maintenance worthwhile, even in newer buildings.",
    },
    nocFaq:
      "Yes. Works on Bluewaters Island need approval from building and community management before starting, and access and deliveries are controlled. We prepare the documents and schedule the logistics.",
  },
  {
    slug: "city-walk",
    name: "City Walk",
    type: "apartment",
    services: APARTMENT_SERVICES,
    profile: {
      developer: "Meraas",
      homes: "Newer low- and mid-rise apartment buildings in a walkable retail district",
      approvals: "Building and community management approval before any works",
    },
    blurb: "Apartment upgrades and interior fit-outs in City Walk, within the district's building rules.",
    intro:
      "City Walk is a Meraas district of newer apartment buildings above and around shops and restaurants. Most homes are recent, so owners and landlords here usually focus on interior upgrades, joinery and kitchens rather than full renovations.",
    notes: [
      "Newer stock: most work is personalisation — wardrobes, lighting, feature walls and kitchen upgrades.",
      "Mixed-use buildings: retail below means strict working hours and delivery rules.",
      "Building approval: building and community management approve works before they start.",
      "Rental appeal: landlords often upgrade finishes to stand out in a competitive rental market.",
    ],
    angles: {
      "apartment-renovation": "Renovations in City Walk are typically upgrades of developer finishes rather than full strip-outs.",
      "bathroom-renovation": "Bathroom projects here usually upgrade fittings, vanities and lighting within the existing layout.",
      "kitchen-renovation": "Kitchen upgrades often replace fronts and worktops and add better storage.",
      "interior-design-fit-out": "Interior design in City Walk is often about creating a distinctive, well-finished home in a newer building.",
      "home-maintenance": "Annual maintenance keeps AC and plumbing in good order, especially in units that change tenants often.",
    },
    nocFaq:
      "Yes. Works in City Walk need building and community management approval before starting, with set working hours because of the shops below. We prepare the documents and plan around the rules.",
  },
  {
    slug: "jumeirah-lake-towers",
    name: "Jumeirah Lake Towers",
    label: "JLT (Jumeirah Lake Towers)",
    type: "apartment",
    services: APARTMENT_SERVICES,
    profile: {
      developer: "DMCC (free zone authority and master community)",
      homes: "Residential and mixed-use towers in clusters around lakes",
      approvals: "DMCC Community Management fit-out permit, plus the building's own management rules",
    },
    blurb: "Apartment renovations in JLT towers, with the DMCC fit-out permit and building rules handled.",
    intro:
      "Jumeirah Lake Towers (JLT) is a DMCC free-zone community of residential and office towers arranged in clusters around lakes. Apartment works here need a fit-out permit from DMCC's Community Management as well as the building's own approval, so getting the paperwork right is the first step.",
    notes: [
      "DMCC permit: interior works in JLT need a permit from DMCC's Community Management before starting.",
      "Building rules too: each tower's management sets working hours and service-lift bookings.",
      "Mixed-use towers: offices and homes share buildings, so noisy work is tightly scheduled.",
      "Older towers: many JLT towers date from the late 2000s, so kitchens, bathrooms and AC are often due for an upgrade.",
    ],
    angles: {
      "apartment-renovation": "Full renovations in JLT usually start with the DMCC permit, then replace kitchens, bathrooms and flooring in one programme.",
      "bathroom-renovation": "Bathrooms in the older JLT towers often need new waterproofing as well as new tiling and fittings.",
      "kitchen-renovation": "Kitchen renovations here are a popular way to modernise a late-2000s apartment, inside or outside the original layout.",
      "interior-design-fit-out": "Interior projects in JLT range from modernising an owner's home to finishing a unit for rent.",
      "home-maintenance": "Older tower systems benefit from regular AC and plumbing checks between tenancies.",
    },
    nocFaq:
      "Yes. Interior works in JLT need a fit-out permit from DMCC's Community Management, as well as the building management's approval and their rules on hours and lifts. We prepare the documents and handle both submissions.",
  },
  {
    slug: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    type: "apartment",
    services: APARTMENT_SERVICES,
    profile: {
      developer: "Emaar",
      homes: "New waterfront towers, with handovers continuing phase by phase",
      approvals: "Emaar community and building management approval before works",
    },
    blurb: "Fit-outs and upgrades for new apartments in Dubai Creek Harbour, with Emaar approvals handled.",
    intro:
      "Dubai Creek Harbour is an Emaar waterfront community of new towers, handed over phase by phase. Most units are new, so the typical project is personalising a recent handover — joinery, lighting, kitchens and wardrobes — rather than renovating.",
    notes: [
      "New homes: most owners need fit-out and personalisation rather than repairs.",
      "Snag first: record defects for the developer before any fit-out work starts.",
      "Check the defects period: confirm how changes affect the developer's defects cover before altering anything it includes.",
      "Building approval: Emaar's community and building management approve works before they start.",
    ],
    angles: {
      "apartment-renovation": "In Dubai Creek Harbour, \"renovation\" usually means upgrading developer finishes in a new unit rather than replacing worn ones.",
      "bathroom-renovation": "Bathroom work here is usually an upgrade — new vanities, fittings and lighting — within the existing waterproofed layout.",
      "kitchen-renovation": "Kitchen projects in new units usually upgrade fronts, worktops and appliances rather than move services.",
      "interior-design-fit-out": "Interior design and fit-out is the main project for new Creek Harbour owners — joinery, wardrobes, lighting and furniture.",
      "home-maintenance": "A maintenance plan from the first year keeps a new apartment's AC and plumbing in good order once the developer's cover ends.",
    },
    nocFaq:
      "Yes. Works in Dubai Creek Harbour need approval from Emaar's community and building management before starting. We prepare the documents and help you check how the work sits with the developer's defects cover.",
  },

  // ---- New-handover communities (2026-10 expansion) ----
  // Only communities where handover has started (confirmed by the owner,
  // 2026-10-12). Keep handover wording general — no invented dates.
  {
    slug: "dubai-south",
    name: "Dubai South",
    type: "mixed",
    services: NEW_MIXED_SERVICES,
    newHandover: true,
    profile: {
      developer: "Dubai South (master developer)",
      homes: "Villas, townhouses and apartments in the Residential District, including The Pulse",
      handover: "Several phases handed over; further phases still being delivered",
      approvals: "Community and building management approval for fit-out and external works",
    },
    blurb: "Fit-out, interiors and landscaping for newly handed-over homes in Dubai South.",
    intro:
      "Dubai South's Residential District, near Al Maktoum International Airport and Expo City, is a newer community of villas, townhouses and apartments, including The Pulse. Several phases have been handed over and more are being delivered, so most owners here need fit-out and customisation rather than renovation.",
    notes: [
      "Fit-out after handover: wardrobes, joinery, lighting, ceilings and window treatments are the usual first projects.",
      "Snag first: record defects for the developer before fit-out starts.",
      "Gardens from scratch: villas and townhouses are usually handed over with basic gardens, ready to be landscaped.",
      "Community approval: fit-out, landscaping and external changes need approval before work starts.",
    ],
    angles: {
      "interior-design-fit-out": "In Dubai South, fit-out usually means finishing a new handover — joinery, wardrobes, lighting and window treatments — so it feels like home.",
      landscaping: "Townhouse and villa gardens here usually start basic, so landscaping means planning planting, irrigation and shade from the start.",
      "home-maintenance": "Starting a maintenance plan early keeps a new home's AC and plumbing reliable once the developer's cover ends.",
    },
    nocFaq:
      "Yes. Fit-out, landscaping and external changes in Dubai South need approval from the community or building management before starting. We prepare the documents and help you check how the work sits with the developer's defects cover.",
  },
  {
    slug: "emaar-south",
    name: "Emaar South",
    type: "mixed",
    services: NEW_MIXED_SERVICES,
    newHandover: true,
    profile: {
      developer: "Emaar (joint venture with Dubai South)",
      homes: "Townhouses and villas around a golf course, plus apartments",
      handover: "First clusters handed over; later phases still under construction",
      approvals: "Emaar community rules for fit-out, landscaping and external changes",
    },
    blurb: "Fit-out, interiors and gardens for townhouses, villas and apartments in Emaar South.",
    intro:
      "Emaar South is a joint venture between Emaar and Dubai South, with townhouses and villas set around a golf course and apartment buildings nearby. The first clusters have been handed over and later phases are still being built, so most projects are fit-outs and garden work for new owners.",
    notes: [
      "New homes: joinery, wardrobes, lighting and window treatments are the usual first projects.",
      "Rear gardens: many townhouses have private rear gardens that are handed over basic.",
      "Emaar rules: fit-out, landscaping and external changes follow Emaar's community rules and need approval first.",
      "Snag first: record defects for the developer before fit-out starts.",
    ],
    angles: {
      "interior-design-fit-out": "Emaar South owners usually start with fitted wardrobes, kitchen upgrades and lighting to finish a new townhouse or apartment.",
      landscaping: "Private rear gardens on the townhouses are a common project — planting, shade and irrigation for a compact space.",
      "home-maintenance": "A maintenance plan from the first year keeps a new home's AC and plumbing reliable once the developer's cover ends.",
    },
    nocFaq:
      "Yes. Fit-out, landscaping and external changes in Emaar South follow Emaar's community rules and need approval before starting. We prepare the documents and help you check how the work sits with the developer's defects cover.",
  },
  {
    slug: "the-valley",
    name: "The Valley",
    type: "villa",
    services: NEW_VILLA_SERVICES,
    newHandover: true,
    profile: {
      developer: "Emaar",
      homes: "Townhouses and villas along the Dubai–Al Ain Road",
      handover: "First clusters handed over; later phases still under construction",
      approvals: "Emaar community rules for fit-out, landscaping, pools and external changes",
    },
    blurb: "Fit-out, interiors, gardens and pools for newly handed-over townhouses in The Valley.",
    intro:
      "The Valley is an Emaar community of townhouses and villas along the Dubai–Al Ain Road. The first clusters have been handed over and later phases are still under construction, so most work here is fitting out and personalising new homes and their gardens.",
    notes: [
      "New townhouses: wardrobes, joinery, lighting and kitchen upgrades are the usual first projects.",
      "Gardens and pools: gardens are handed over basic, and many owners plan landscaping or a pool early.",
      "Emaar rules: fit-out, landscaping, pools and external changes need approval before work starts.",
      "Snag first: record defects for the developer before fit-out starts.",
    ],
    angles: {
      "interior-design-fit-out": "In The Valley, fit-out usually means finishing a new townhouse — fitted wardrobes, kitchen upgrades, lighting and window treatments.",
      landscaping: "Townhouse gardens start basic, so landscaping here means planting, shade and irrigation planned from day one.",
      "swimming-pool-construction": "Where the plot allows, a plunge or compact pool is often planned together with the garden, subject to Emaar's approval.",
      "home-maintenance": "A maintenance plan from the first year keeps a new home's AC and plumbing reliable once the developer's cover ends.",
    },
    nocFaq:
      "Yes. Fit-out, landscaping, pools and external changes in The Valley follow Emaar's community rules and need approval before starting. We prepare the documents and help you check how the work sits with the developer's defects cover.",
  },
  {
    slug: "district-11-opal-gardens",
    name: "District 11 (Opal Gardens)",
    label: "District 11 / Opal Gardens",
    type: "villa",
    services: NEW_VILLA_SERVICES,
    newHandover: true,
    profile: {
      developer: "Meydan (Mohammed Bin Rashid City)",
      homes: "Townhouses and villas around a crystal lagoon in District 11",
      handover: "Handover of the first homes has begun",
      approvals: "Meydan community approval for fit-out, landscaping, pools and external changes",
    },
    blurb: "Fit-out, interiors, gardens and pools for new townhouses and villas in District 11 / Opal Gardens.",
    intro:
      "Opal Gardens is Meydan's community of townhouses and villas in District 11, Mohammed Bin Rashid City, set around a crystal lagoon. Handover of the first homes has begun, so owners here are fitting out and personalising brand-new townhouses and villas rather than renovating them.",
    notes: [
      "New homes, full fit-out: wardrobes, joinery, lighting, ceilings and window treatments are the usual first projects.",
      "Snag first: record defects for Meydan before fit-out starts so responsibilities stay clear.",
      "Gardens from day one: townhouse and villa gardens are handed over basic, ready to be landscaped.",
      "Community approval: fit-out, landscaping, pools and external changes need Meydan's approval before work starts.",
    ],
    angles: {
      "interior-design-fit-out": "In District 11 / Opal Gardens, fit-out means turning a new townhouse or villa into a finished home — wardrobes, joinery, lighting and window treatments.",
      landscaping: "Opal Gardens homes are handed over with basic gardens, so landscaping here means planning planting, irrigation and shade from the start.",
      "swimming-pool-construction": "Villa owners often plan a private pool together with the garden soon after handover, subject to Meydan's approval.",
      "home-maintenance": "A maintenance plan from the first year keeps a new home's AC and plumbing reliable once the developer's cover ends.",
    },
    nocFaq:
      "Yes. Fit-out, landscaping, pools and external changes in District 11 / Opal Gardens need Meydan's community approval before work starts. We prepare the documents and help you check how the work sits with the developer's defects cover.",
  },
  {
    slug: "damac-lagoons",
    name: "DAMAC Lagoons",
    type: "villa",
    services: NEW_VILLA_SERVICES,
    newHandover: true,
    profile: {
      developer: "DAMAC Properties",
      homes: "Townhouses and villas in Mediterranean-themed clusters around lagoons",
      handover: "First clusters handed over; others still being delivered",
      approvals: "DAMAC community approval for fit-out, landscaping, pools and external changes",
    },
    blurb: "Fit-out, interiors, gardens and pools for newly handed-over townhouses and villas in DAMAC Lagoons.",
    intro:
      "DAMAC Lagoons is a community of townhouses and villas in Mediterranean-themed clusters — such as Portofino, Nice and Costa Brava — set around swimmable lagoons. The first clusters have been handed over and others are still being delivered, so most work here is fit-out and gardens for new owners.",
    notes: [
      "Cluster by cluster: handover dates differ between clusters, so we plan fit-out around your cluster's access and rules.",
      "New homes: wardrobes, joinery, lighting and kitchen upgrades are the usual first projects.",
      "Gardens and pools: gardens are handed over basic, and many villa owners plan a pool early.",
      "Community approval: fit-out, landscaping, pools and external changes need DAMAC's approval first.",
    ],
    angles: {
      "interior-design-fit-out": "DAMAC Lagoons owners usually start with fitted wardrobes, lighting and kitchen upgrades to finish a new townhouse or villa.",
      landscaping: "Townhouse and villa gardens here start basic, so landscaping usually means designing the garden, shade and irrigation from scratch.",
      "swimming-pool-construction": "A private pool is a popular addition on villa plots, planned with the garden and approved by DAMAC.",
      "home-maintenance": "Lagoon-side humidity makes an early AC and plumbing maintenance plan worthwhile once the developer's cover ends.",
    },
    nocFaq:
      "Yes. Fit-out, landscaping, pools and external changes in DAMAC Lagoons need DAMAC's community approval before work starts. We prepare the documents and help you check how the work sits with the developer's defects cover.",
  },
  {
    slug: "damac-hills-2",
    name: "DAMAC Hills 2",
    type: "villa",
    services: NEW_VILLA_SERVICES,
    newHandover: true,
    profile: {
      developer: "DAMAC Properties (formerly Akoya Oxygen)",
      homes: "Villas and townhouses, delivered in phases",
      handover: "Earlier clusters handed over and lived in; newer clusters still being handed over",
      approvals: "DAMAC community approval for fit-out, landscaping, pools and external changes",
    },
    blurb: "Fit-out, upgrades, gardens and pools for villas and townhouses in DAMAC Hills 2.",
    intro:
      "DAMAC Hills 2, formerly Akoya Oxygen, is a DAMAC community of villas and townhouses delivered in phases. Earlier clusters are already lived in while newer ones are still being handed over, so projects range from fitting out a new home to upgrading the developer finishes in an established one.",
    notes: [
      "Two kinds of project: fit-out for new handovers, and upgrades of developer finishes in earlier clusters.",
      "Gardens: many gardens were handed over basic and are ready for proper landscaping.",
      "Community approval: fit-out, landscaping, pools and external changes need DAMAC's approval before work starts.",
      "Snag first: on new handovers, record defects for the developer before fit-out begins.",
    ],
    angles: {
      "interior-design-fit-out": "In DAMAC Hills 2, fit-out ranges from finishing a new handover to upgrading the original developer finishes with better joinery and lighting.",
      landscaping: "Many DAMAC Hills 2 gardens are still basic, so landscaping usually means a full garden plan with planting, shade and irrigation.",
      "swimming-pool-construction": "Adding a private pool is a common upgrade on villa plots, subject to DAMAC's approval.",
      "home-maintenance": "A yearly maintenance plan keeps AC, plumbing and electrics reliable as homes come out of the developer's cover.",
    },
    nocFaq:
      "Yes. Fit-out, landscaping, pools and external changes in DAMAC Hills 2 need DAMAC's community approval before work starts. We prepare the documents for the submission.",
  },
  {
    slug: "arabian-ranches-3",
    name: "Arabian Ranches 3",
    type: "villa",
    services: NEW_VILLA_SERVICES,
    newHandover: true,
    profile: {
      developer: "Emaar",
      homes: "Townhouses and villas in clusters such as Sun, Joy and Spring",
      handover: "First clusters completed from 2022; later clusters still being handed over",
      approvals: "Emaar community rules for fit-out, landscaping, pools and external changes",
    },
    blurb: "Fit-out, interiors, gardens and pools for townhouses and villas in Arabian Ranches 3.",
    intro:
      "Arabian Ranches 3 is Emaar's newest Ranches community, with townhouses and villas in clusters such as Sun, Joy and Spring. The first clusters were completed from 2022 and later ones are still being handed over, so most work here is fitting out, upgrading and landscaping newer homes.",
    notes: [
      "Newer homes: wardrobes, joinery, lighting and kitchen upgrades are the most common projects.",
      "Townhouse gardens: compact rear gardens are handed over basic and are a popular first project.",
      "Emaar rules: fit-out, landscaping, pools and external changes need approval before work starts.",
      "Snag first: on recent handovers, record defects for Emaar before fit-out begins.",
    ],
    angles: {
      "interior-design-fit-out": "In Arabian Ranches 3, interior projects usually add fitted wardrobes, kitchen upgrades and lighting to standard Emaar finishes.",
      landscaping: "Compact townhouse gardens here are usually landscaped for shade, seating and low-maintenance planting.",
      "swimming-pool-construction": "Where the plot allows, a compact or plunge pool is planned together with the garden, subject to Emaar's approval.",
      "home-maintenance": "A maintenance plan from the first years keeps a newer home's AC and plumbing reliable once the developer's cover ends.",
    },
    nocFaq:
      "Yes. Fit-out, landscaping, pools and external changes in Arabian Ranches 3 follow Emaar's community rules and need approval before starting. We prepare the documents for the submission.",
  },
  {
    slug: "expo-city-dubai",
    name: "Expo City Dubai",
    type: "apartment",
    services: NEW_APARTMENT_SERVICES,
    newHandover: true,
    profile: {
      developer: "Expo City Dubai",
      homes: "New apartment buildings such as Mangrove Residences and Sky Residences, plus townhouses",
      handover: "First residential buildings handing over; more still under construction",
      approvals: "Building and community management approval before fit-out works",
    },
    blurb: "Fit-out, kitchen upgrades and interiors for new apartments in Expo City Dubai.",
    intro:
      "Expo City Dubai is turning the former Expo 2020 site into a residential district, with new apartment buildings such as Mangrove Residences and Sky Residences. The first residential buildings are handing over and more are still being built, so owners here are fitting out new homes rather than renovating.",
    notes: [
      "Brand-new apartments: fitted wardrobes, lighting, window treatments and storage are the usual first projects.",
      "Snag first: record defects for the developer before fit-out starts.",
      "Building approval: fit-out works need approval from the building and community management first.",
      "Check the defects period: confirm how changes affect the developer's defects cover before altering anything it includes.",
    ],
    angles: {
      "interior-design-fit-out": "In Expo City Dubai, fit-out means finishing a brand-new apartment — joinery, wardrobes, lighting and furniture planned together.",
      "kitchen-renovation": "In a new Expo City apartment, kitchen work is an upgrade — new fronts, worktops, appliances or extra storage — not a repair.",
      "home-maintenance": "A maintenance plan from the first year keeps a new apartment's AC and plumbing reliable once the developer's cover ends.",
    },
    nocFaq:
      "Yes. Fit-out works in Expo City Dubai need approval from building and community management before starting. We prepare the documents and help you check how the work sits with the developer's defects cover.",
  },
  {
    slug: "sobha-hartland-2",
    name: "Sobha Hartland II",
    type: "mixed",
    services: NEW_MIXED_SERVICES,
    newHandover: true,
    profile: {
      developer: "Sobha Realty (Mohammed Bin Rashid City)",
      homes: "Apartments (such as Riverside Crescent) and gated villas (Sobha Estates)",
      handover: "Handover of the first buildings has begun; most of the community is still under construction",
      approvals: "Sobha community and building management approval before fit-out works",
    },
    blurb: "Fit-out, interiors and gardens for new homes in Sobha Hartland II.",
    intro:
      "Sobha Hartland II is Sobha Realty's community in Mohammed Bin Rashid City, with apartment buildings such as Riverside Crescent and a gated villa enclave, Sobha Estates. Handover of the first buildings has begun while most of the community is still being built, so the work here is fitting out new homes.",
    notes: [
      "New homes: wardrobes, joinery, lighting and window treatments are the usual first projects.",
      "Snag first: record defects for the developer before fit-out starts.",
      "Villa gardens: villas come with gardens ready to be landscaped after handover.",
      "Community approval: fit-out and landscaping need Sobha's community and building approval before work starts.",
    ],
    angles: {
      "interior-design-fit-out": "In Sobha Hartland II, fit-out usually means personalising a new apartment or villa — joinery, wardrobes, lighting and furniture.",
      landscaping: "Villa owners here usually plan the garden — planting, irrigation and shade — soon after handover.",
      "home-maintenance": "A maintenance plan from the first year keeps a new home's AC and plumbing reliable once the developer's cover ends.",
    },
    nocFaq:
      "Yes. Fit-out and landscaping in Sobha Hartland II need approval from Sobha's community and building management before starting. We prepare the documents and help you check how the work sits with the developer's defects cover.",
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

// Whether a service has a page in an area: newer areas list their services
// explicitly; older ones match on area type.
export function serviceFitsArea(service, area) {
  return area.services ? area.services.includes(service.slug) : service.areaTypes.includes(area.type);
}

export function areasForService(service) {
  return AREAS.filter((a) => serviceFitsArea(service, a));
}

// The service an area's general link should point to (first listed service,
// or renovation by area type for older areas).
export function primaryServiceFor(area) {
  if (area.services) return area.services[0];
  return area.type === "villa" ? "villa-renovation" : "apartment-renovation";
}

export function allServiceAreaParams() {
  const params = [];
  for (const s of SERVICES) {
    for (const a of AREAS) {
      if (serviceFitsArea(s, a)) {
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
  "interior-design-fit-out": "new-home-fit-out-dubai",
};
