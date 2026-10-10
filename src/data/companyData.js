/**
 * DHRUVANSH AQUA LLP — CORPORATE CONTENT & SPECIFICATION CONFIGURATION
 * 
 * All company details, product specifications, and operational parameters
 * are data-driven and easily updated as official client verifications arrive.
 */

export const companyData = {
  brand: {
    wordmark: "DHRUVANSH AQUA LLP",
    descriptor: "BEVERAGE MANUFACTURING",
    legalName: "Dhruvansh Aqua LLP",
    entityType: "Limited Liability Partnership (LLP)",
    jurisdiction: "Maharashtra, India",
    operationalStatus: "Active Operational Development & Commercial Readiness",
    registeredOfficePlaceholder: "Registered office address to be published upon official validation.",
    contactEmailPlaceholder: "enquiries@dhruvanshaqua.com (Provisioning in progress)",
    contactPhonePlaceholder: "Official communication desk to be assigned.",
  },

  hero: {
    eyebrow: "BEVERAGE MANUFACTURING & PACKAGING OPERATIONS",
    headline: "Built Around Quality. Focused on Every Detail.",
    subheadline: "Manufacturing Beverages with a Focus on Consistency.",
    paragraph: "Dhruvansh Aqua LLP is an industrial beverage manufacturing enterprise engineered around disciplined production processes, hygienic filling standards, and scalable B2B supply capability.",
    ctaPrimary: "Explore Our Capabilities",
    ctaSecondary: "Submit Business Enquiry",
    image: "/images/hero-facility.jpg",
    imageAlt: "Modern stainless steel beverage manufacturing facility cleanroom with automated rotary bottling equipment",
    caption: "AUTOMATED MONOBLOC BOTTLING & CLEANROOM ARCHITECTURE",
    stats: [
      {
        code: "SPEC-01",
        title: "Sanitary Integrity",
        detail: "Stainless steel fluid paths, automated CIP systems, and multi-barrier water treatment."
      },
      {
        code: "SPEC-02",
        title: "Process Discipline",
        detail: "Continuous optical fill monitoring, calibrated capping torque, and lot-level traceability."
      },
      {
        code: "SPEC-03",
        title: "Commercial Readiness",
        detail: "Flexible packaging formats engineered for regional distributors, retail, and institutional supply."
      }
    ]
  },

  overview: {
    sectionTag: "01 / CORPORATE PROFILE",
    title: "An Industrial Approach to Modern Beverage Production.",
    editorialCopy: [
      "Dhruvansh Aqua LLP was established as a registered Limited Liability Partnership with a defined objective: to build a dependable, quality-focused manufacturing base for the modern beverage market.",
      "Rather than pursuing short-lived market trends or superficial branding gimmicks, our operational framework prioritizes process repeatability, sanitary cleanroom standards, and uncompromising quality assurance across every batch.",
      "The business is structured to serve commercial partners—including regional distributors, modern trade retail chains, institutional procurement officers, and beverage brand owners—with reliable production schedules and rigorous packaging integrity."
    ],
    governanceDetails: [
      { label: "Entity Type", value: "Registered Limited Liability Partnership (LLP)" },
      { label: "Core Industry", value: "Beverage Processing, Bottling & Packaging" },
      { label: "Operating Jurisdiction", value: "Maharashtra, India" },
      { label: "Operational Model", value: "B2B Supply, Wholesale Distribution & Commercial Partnerships" },
      { label: "Facility Documentation", value: "Statutory compliance files available upon formal B2B request" }
    ],
    image: "/images/water-treatment.jpg",
    imageAlt: "Advanced industrial water treatment plant with multi-stage reverse osmosis and stainless steel filtration tanks",
    caption: "MULTI-STAGE WATER PURIFICATION & REVERSE OSMOSIS INFRASTRUCTURE"
  },

  products: {
    sectionTag: "02 / PRODUCT PORTFOLIO",
    title: "Commercial Beverage Categories.",
    subtitle: "A flexible manufacturing portfolio accommodating standard consumer packaging, bulk institutional supply, and multi-format bottling lines.",
    disclaimer: "Categories and format specifications represent provisional production capabilities. Custom bottle molds, specific label formats, and private label specifications are available upon technical consultation.",
    categories: [
      {
        id: "drinking-water",
        name: "Packaged Drinking Water",
        categoryTag: "CATEGORY 01",
        headline: "Pure, multi-barrier purified drinking water processed under strict sanitary standards.",
        description: "Treated through comprehensive reverse osmosis, micron sediment filtration, activated carbon adsorption, and ozone sterilization for crisp taste and physical clarity.",
        image: "/images/product-water.jpg",
        imageAlt: "Clear PET packaged drinking water bottles on a brushed stainless steel industrial inspection line",
        packagingFormats: [
          { size: "250 ml / 500 ml", type: "PET Convenience & Hospitality Bottle", notes: "Ideal for airline, hotel, corporate, and event catering" },
          { size: "1,000 ml (1L)", type: "Standard Retail PET Bottle", notes: "High-volume retail trade, grab-and-go convenience format" },
          { size: "20 Litre", type: "Bulk Polycarbonate / PET Dispenser Jar", notes: "Heavy-duty reusable format for institutional & corporate supply" }
        ],
        commercialHighlights: [
          "Multi-stage micron filtration (down to 0.2 micron)",
          "Balanced mineral profile for smooth consumer palate",
          "Tamper-evident closure with calibrated torque seal"
        ],
        enquiryPreselect: "Packaged Drinking Water"
      },
      {
        id: "juice-beverages",
        name: "Juice & Fruit-Based Beverages",
        categoryTag: "CATEGORY 02",
        headline: "Formulated ready-to-serve fruit beverages engineered for shelf stability.",
        description: "Equipped to handle blended fruit formulations, pulp-infused bases, and ready-to-drink beverages with precise thermal pasteurization and sanitary filling parameters.",
        image: "/images/product-juice.jpg",
        imageAlt: "Glass and PET sample bottles filled with golden and amber fruit beverages on factory test tray",
        packagingFormats: [
          { size: "200 ml / 300 ml", type: "Single-Serve PET / Glass Bottles", notes: "On-the-go impulse consumption and school/canteen distribution" },
          { size: "500 ml / 1,000 ml", type: "Family Sharing PET Containers", notes: "Household consumption and modern trade retail shelves" }
        ],
        commercialHighlights: [
          "Sanitary stainless steel batch blending vessels (SS316L)",
          "Thermal pasteurization with rapid chill retention",
          "Hermetic seal preventing oxidation and flavor degradation"
        ],
        enquiryPreselect: "Juice Beverages"
      },
      {
        id: "soft-drinks",
        name: "Carbonated Soft Drinks",
        categoryTag: "CATEGORY 03",
        headline: "High-precision carbonation and pressure-filling for sparkling beverages.",
        description: "Utilizes chilled in-line carbonation systems with stable CO2 volume controls, suited for flavored carbonated soft drinks, sodas, and sparkling water variants.",
        image: "/images/product-softdrinks.jpg",
        imageAlt: "Carbonated beverage bottles advancing through stainless steel conveyor guide rails in bottling plant",
        packagingFormats: [
          { size: "250 ml / 600 ml", type: "Carbonation-Grade PET Bottles", notes: "Reinforced petaloid base with high gas-barrier retention" },
          { size: "330 ml", type: "Sleek Aluminum Can (Format Planning)", notes: "Under operational planning for premium beverage lines" }
        ],
        commercialHighlights: [
          "Temperature-controlled in-line CO2 carbonation blender",
          "Isobaric pressure filling to minimize product foaming",
          "Batch-to-batch effervescence and carbonation uniformity"
        ],
        enquiryPreselect: "Carbonated Soft Drinks"
      }
    ]
  },

  manufacturing: {
    sectionTag: "03 / OPERATIONS & CAPABILITIES",
    title: "Precision Manufacturing Architecture.",
    subtitle: "A structured view of our end-to-end beverage processing, automated filling, and secondary packaging workflow.",
    heroImage: "/images/manufacturing-line.jpg",
    heroImageAlt: "Rotary monobloc machine filling bottles along stainless steel conveyor rails",
    heroCaption: "HIGH-EFFICIENCY AUTOMATED ROTARY RINSE-FILL-SEAL MONOBLOC SYSTEM",
    workflowSteps: [
      {
        stepNumber: "01",
        title: "Multi-Barrier Water Conditioning",
        tag: "TREATMENT",
        description: "Raw source water undergoes dual-media sand filtration, activated carbon absorption for chloramines, micron cartridge filtration, and high-pressure Reverse Osmosis (RO) desalting."
      },
      {
        stepNumber: "02",
        title: "Sanitary Blending & In-Line Chilling",
        tag: "PROCESSING",
        description: "Product recipes and formulations are prepared inside polished SS316L sanitary batch tanks with variable-speed agitation, sterile sampling ports, and temperature stabilization."
      },
      {
        stepNumber: "03",
        title: "HEPA-Filtered Monobloc Filling",
        tag: "FILLING",
        description: "Rotary rinser washes containers with ozonated pure water, immediately followed by contactless volumetric filling under positive-pressure filtered cleanroom air."
      },
      {
        stepNumber: "04",
        title: "Torque-Calibrated Hermetic Capping",
        tag: "CAPPING",
        description: "Automatic cap elevator feeds sterile closures to magnetic slip-torque chucks, guaranteeing exact sealing tension without thread stripping or leakage."
      },
      {
        stepNumber: "05",
        title: "Optical Inspection & Inkjet Batch Traceability",
        tag: "VERIFICATION",
        description: "Every container passes through sensor arrays to verify fill height and cap seating, followed by continuous high-speed inkjet coding of lot number, manufacturing date, and expiry."
      },
      {
        stepNumber: "06",
        title: "Secondary Packaging & Pallet Logistics",
        tag: "DISPATCH",
        description: "Containers are collated into shrink-wrapped multipacks (12/24 units) with heavy-duty LDPE film, corrugated master cartons, and palletized for secure freight transit."
      }
    ],
    technicalNotes: [
      { key: "Contact Metallurgy", value: "Food-grade Stainless Steel (SS304 / SS316L) across all fluid contact surfaces" },
      { key: "Hygiene Architecture", value: "Automated Clean-in-Place (CIP) recirculation circuits for rapid sanitation" },
      { key: "Process Environment", value: "Enclosed cleanroom zone with controlled positive air differential" },
      { key: "Quality Testing", value: "On-site laboratory for batch physical, chemical, and organoleptic testing" }
    ]
  },

  quality: {
    sectionTag: "04 / QUALITY & COMPLIANCE",
    title: "Disciplined Quality Control Across Every Batch.",
    subtitle: "Product consistency is maintained through analytical testing, cleanroom hygiene, and strict batch quarantine procedures.",
    image: "/images/quality-lab.jpg",
    imageAlt: "Beverage quality assurance laboratory with analytical pH meter, turbidity instruments, and testing logs",
    caption: "ANALYTICAL TESTING BENCH & CLEANROOM QUALITY VERIFICATION",
    protocols: [
      {
        code: "QC-01",
        title: "Physicochemical Analysis",
        frequency: "Continuous & Batch Release",
        details: "Routine measurements of Total Dissolved Solids (TDS), pH balance, electrical conductivity, turbidity (NTU), and sensory clarity before batch release."
      },
      {
        code: "QC-02",
        title: "Microbiological Surveillance",
        frequency: "Mandatory Incubation Cycles",
        details: "Sample plating and incubation to screen for Total Viable Count (TVC), Coliforms, Yeast, and Mold, ensuring sterility across all finished product lots."
      },
      {
        code: "QC-03",
        title: "Package & Closure Integrity",
        frequency: "Hourly Line Sampling",
        details: "Torque testing of bottle closures, vacuum seal leak testing in immersion chambers, and drop-impact resistance tests on finished cases."
      },
      {
        code: "QC-04",
        title: "Clean-in-Place (CIP) Sanitation",
        frequency: "Pre-Shift & Product Changeover",
        details: "Automated multi-stage circulation of caustic detergent, acidic neutralizer, and high-temperature pure water flushes to maintain sanitary pipework."
      }
    ],
    statutoryNotice: {
      heading: "Statutory Licences & Compliance Documentation",
      status: "Official Records Available on Commercial Request",
      note: "Dhruvansh Aqua LLP operates in compliance with applicable Indian food safety and manufacturing regulations. Official copies of statutory registrations, local municipal permits, and water analysis certificates are provided directly to qualified commercial distributors and institutional buyers upon formal engagement.",
      actionText: "Request Compliance Records"
    }
  },

  partnerships: {
    sectionTag: "05 / COMMERCIAL PARTNERSHIPS",
    title: "Let's Discuss Your Business Requirements.",
    subtitle: "We collaborate with beverage distributors, modern trade retailers, and corporate institutions seeking dependable production and supply.",
    streams: [
      {
        title: "Regional Distributors & Wholesalers",
        badge: "TERRITORIAL SUPPLY",
        description: "Direct wholesale supply partnerships with dedicated territorial allocations, competitive trade terms, and consistent supply cadence.",
        features: ["Scheduled dispatch logistics", "Structured case pricing & freight support", "Marketing and point-of-sale alignment"]
      },
      {
        title: "Modern Trade & Supermarkets",
        badge: "RETAIL DISTRIBUTION",
        description: "Retail-ready packaged goods with compliant GS1 barcodes, durable shrink packaging, and high-speed shelf turnover capability.",
        features: ["Standardized pallet packaging", "Strict batch-level traceability", "Consistent replenishment fulfillment"]
      },
      {
        title: "Institutional & Hospitality Clients",
        badge: "BULK & HORECA",
        description: "Tailored supply agreements for hotels, restaurant chains, healthcare facilities, academic campuses, and corporate parks.",
        features: ["Customized delivery frequencies", "Dedicated account management", "High-volume dispenser & bottled supply"]
      },
      {
        title: "Contract Packaging & Co-Packing",
        badge: "MANUFACTURING SERVICES",
        description: "Facility capacity discussions for beverage brands seeking third-party contract bottling and packaging services under strict NDAs.",
        features: ["SS316L blending & hot/cold fill capability", "Flexible bottle format compatibility", "Stringent recipe confidentiality"]
      }
    ]
  },

  enquiry: {
    sectionTag: "06 / DIRECT ENQUIRY",
    title: "Submit a Business Enquiry.",
    subtitle: "Share your distribution, institutional supply, or contract manufacturing requirements. Our commercial desk will review your details and respond with a structured proposal.",
    enquiryTypes: [
      "Packaged Drinking Water Supply",
      "Juice & Fruit Beverages Supply",
      "Carbonated Soft Drinks Supply",
      "Regional Dealership & Distribution",
      "Bulk Institutional & HoReCa Supply",
      "Contract Packaging / Co-Packing",
      "Other Business Enquiry"
    ],
    volumeTiers: [
      "Under 1,000 cases / month",
      "1,000 – 5,000 cases / month",
      "5,000 – 20,000 cases / month",
      "20,000+ cases / month",
      "To be discussed based on requirements"
    ],
    businessTypes: [
      "Regional Distributor / Wholesaler",
      "Modern Trade / Supermarket Chain",
      "Hotel / Restaurant / Catering (HoReCa)",
      "Corporate / Educational Institution",
      "Beverage Brand Owner",
      "Export / Trading Company",
      "Other Commercial Entity"
    ]
  },

  legal: {
    privacyPolicy: {
      title: "Commercial Privacy & Data Practice",
      effectiveDate: "January 2026",
      text: "Dhruvansh Aqua LLP values commercial privacy. All business enquiry information, contact phone numbers, and company specifications submitted through this website are used solely for direct B2B communication, contract evaluation, and trade negotiations. We do not sell, rent, or distribute commercial contact details to third-party advertising brokers."
    },
    termsOfSupply: {
      title: "Commercial Terms & Engagement Overview",
      effectiveDate: "January 2026",
      text: "All commercial orders, dealership allocations, and manufacturing services are governed by written supply agreements and formal pro-forma invoices. Specifications, delivery timelines, and payment structures are finalized upon formal mutual execution. Information presented on this website serves as a preliminary commercial capability overview."
    },
    complianceStatement: {
      title: "Manufacturing Compliance & Food Safety Commitment",
      effectiveDate: "January 2026",
      text: "Dhruvansh Aqua LLP conducts operations in adherence to applicable beverage processing and packaging standards. In-house testing, cleanroom protocols, and water quality testing procedures are maintained to ensure every lot meets rigorous purity and safety thresholds. Official statutory registrations are provided upon formal request."
    }
  }
};
