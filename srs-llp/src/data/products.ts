import type { Product, ProductCategory } from "@/types";

export const categories: ProductCategory[] = [
  {
    slug: "plywood",
    name: "Plywood",
    description:
      "Premium-grade plywood in BWR, BWP, Marine, and Commercial variants for every need.",
    icon: "Layers",
    image: "/logo.png",
    productCount: 8,
  },
  {
    slug: "block-board",
    name: "Block Board",
    description:
      "Solid core block boards ideal for heavy-duty furniture, doors, and partitions.",
    icon: "SquareStack",
    image: "/logo.png",
    productCount: 4,
  },
  {
    slug: "flush-doors",
    name: "Flush Doors",
    description:
      "Elegant, sturdy flush doors engineered for smooth finish and long-lasting performance.",
    icon: "DoorOpen",
    image: "/logo.png",
    productCount: 5,
  },
  {
    slug: "laminates",
    name: "Laminates",
    description:
      "Decorative laminates in hundreds of textures, patterns, and finishes for stunning interiors.",
    icon: "Palette",
    image: "/logo.png",
    productCount: 6,
  },
  {
    slug: "veneers",
    name: "Decorative Veneers",
    description:
      "Natural wood veneers that bring the warmth and beauty of real wood to any surface.",
    icon: "TreePine",
    image: "/logo.png",
    productCount: 5,
  },
  {
    slug: "mdf-board",
    name: "MDF Board",
    description:
      "Medium Density Fibreboard for precision cutting, smooth finishing, and versatile applications.",
    icon: "LayoutGrid",
    image: "/logo.png",
    productCount: 4,
  },
  {
    slug: "particle-board",
    name: "Particle Board",
    description:
      "Cost-effective particle boards ideal for modular furniture and interior fit-outs.",
    icon: "Grid3x3",
    image: "/logo.png",
    productCount: 3,
  },
  {
    slug: "accessories",
    name: "Hardware & Accessories",
    description:
      "Complete range of edge bands, adhesives, hinges, and fittings for a perfect finish.",
    icon: "Wrench",
    image: "/logo.png",
    productCount: 6,
  },
];

export const products: Product[] = [
  /* ── Plywood ── */
  {
    id: "ply-001",
    slug: "bwr-plywood",
    name: "BWR Grade Plywood",
    category: "Plywood",
    categorySlug: "plywood",
    description:
      "Boiling Water Resistant plywood built for areas exposed to moisture. Ideal for kitchens, bathrooms, and exterior applications where water resistance is crucial.",
    features: [
      "Boiling water resistant up to 72 hours",
      "Termite and borer treated",
      "Uniform thickness throughout",
      "High screw-holding capacity",
      "ISI certified IS:303 standard",
    ],
    specifications: {
      Grade: "BWR (IS:303)",
      Thickness: "4mm, 6mm, 9mm, 12mm, 16mm, 19mm, 25mm",
      Size: "8×4 ft, 7×4 ft, 6×4 ft, 6×3 ft",
      Core: "Hardwood",
      "Glue Used": "Phenol Formaldehyde (PF)",
      "Face Veneer": "Gurjan / Hardwood",
      Certification: "ISI Marked",
    },
    applications: [
      "Kitchen cabinets",
      "Bathroom vanities",
      "Exterior furniture",
      "Marine applications",
    ],
    image: "/logo.png",
  },
  {
    id: "ply-002",
    slug: "commercial-plywood",
    name: "Commercial Plywood (MR Grade)",
    category: "Plywood",
    categorySlug: "plywood",
    description:
      "Moisture Resistant plywood suitable for interior applications. Perfect for furniture, wardrobes, and general woodworking in dry environments.",
    features: [
      "Moisture resistant for indoor use",
      "Smooth sanded surfaces",
      "Easy to cut and shape",
      "Uniform density across sheets",
      "Eco-friendly manufacturing",
    ],
    specifications: {
      Grade: "MR (IS:303)",
      Thickness: "4mm, 6mm, 9mm, 12mm, 16mm, 19mm",
      Size: "8×4 ft, 7×4 ft, 6×4 ft",
      Core: "Hardwood / Poplar",
      "Glue Used": "Urea Formaldehyde (UF)",
      Certification: "ISI Marked",
    },
    applications: [
      "Wardrobes",
      "Bookshelves",
      "TV units",
      "Office furniture",
    ],
    image: "/logo.png",
  },
  {
    id: "ply-003",
    slug: "marine-plywood",
    name: "Marine Grade Plywood",
    category: "Plywood",
    categorySlug: "plywood",
    description:
      "The highest grade plywood designed for extreme moisture and weather conditions. Certified for boat building, outdoor structures, and high-humidity areas.",
    features: [
      "Waterproof for permanent wet conditions",
      "Zero void construction",
      "Superior bonding strength",
      "Fungus and insect resistant",
      "Suitable for structural applications",
    ],
    specifications: {
      Grade: "Marine (IS:710)",
      Thickness: "6mm, 9mm, 12mm, 16mm, 19mm, 25mm",
      Size: "8×4 ft",
      Core: "Selected Hardwood",
      "Glue Used": "Phenol Formaldehyde (PF)",
      Certification: "IS:710 Certified",
    },
    applications: [
      "Boat building",
      "Outdoor furniture",
      "Swimming pool areas",
      "Chemical storage",
    ],
    image: "/logo.png",
  },
  {
    id: "ply-004",
    slug: "flexible-plywood",
    name: "Flexible Plywood",
    category: "Plywood",
    categorySlug: "plywood",
    description:
      "Specially engineered flexible plywood that can be bent into curves without cracking. Ideal for creating rounded furniture, arches, and designer interiors.",
    features: [
      "Can be bent in both directions",
      "Crack-free curved forms",
      "Lightweight yet strong",
      "Smooth surface for finishing",
      "Available in various thicknesses",
    ],
    specifications: {
      Thickness: "3mm, 5mm, 8mm",
      Size: "8×4 ft",
      Core: "Tropical Hardwood",
      "Bending Radius": "Depends on thickness",
    },
    applications: [
      "Curved furniture",
      "Arches and pillars",
      "Designer ceilings",
      "Reception counters",
    ],
    image: "/logo.png",
  },
  /* ── Block Board ── */
  {
    id: "bb-001",
    slug: "premium-block-board",
    name: "Premium Block Board",
    category: "Block Board",
    categorySlug: "block-board",
    description:
      "High-density block board with solid timber core strips, engineered for maximum strength. Perfect for large furniture and heavy-duty applications.",
    features: [
      "Solid wood core strips",
      "High dimensional stability",
      "Excellent screw-holding strength",
      "Warp-resistant construction",
      "Available in BWR & MR grades",
    ],
    specifications: {
      Grade: "BWR / MR",
      Thickness: "19mm, 25mm, 32mm",
      Size: "8×4 ft, 7×4 ft",
      Core: "Pine / Poplar timber strips",
      "Face Veneer": "Hardwood",
    },
    applications: [
      "Dining tables",
      "Conference tables",
      "Long shelves",
      "Door shutters",
      "Partitions",
    ],
    image: "/logo.png",
  },
  /* ── Flush Doors ── */
  {
    id: "fd-001",
    slug: "solid-core-flush-door",
    name: "Solid Core Flush Door",
    category: "Flush Doors",
    categorySlug: "flush-doors",
    description:
      "Robust solid-core flush doors with superior dimensional stability and sound insulation. Ideal for main entrances and bedrooms.",
    features: [
      "Solid timber frame & lock rail",
      "High sound insulation",
      "Termite and borer treated",
      "Ready to paint or laminate",
      "Fire retardant options available",
    ],
    specifications: {
      Thickness: "30mm, 32mm, 35mm",
      "Standard Sizes": "7×3 ft, 7×2.5 ft, 6.5×2.5 ft",
      Core: "Solid wood frame with infill",
      "Face Skin": "Hardwood veneer",
      Certification: "IS:2202 Part 1",
    },
    applications: [
      "Main entrance doors",
      "Bedroom doors",
      "Office cabin doors",
      "Hotel room doors",
    ],
    image: "/logo.png",
  },
  {
    id: "fd-002",
    slug: "decorative-flush-door",
    name: "Decorative Flush Door",
    category: "Flush Doors",
    categorySlug: "flush-doors",
    description:
      "Pre-laminated flush doors with designer finishes. Ready to install with no additional finishing required, available in wood grain and solid color options.",
    features: [
      "Pre-laminated designer finish",
      "Zero maintenance",
      "Scratch and stain resistant surface",
      "Moisture resistant options",
      "Wide range of designs",
    ],
    specifications: {
      Thickness: "30mm, 32mm",
      "Standard Sizes": "7×3 ft, 7×2.5 ft",
      "Surface Finish": "HPL / Melamine",
      "Design Options": "100+ patterns",
    },
    applications: [
      "Modern interiors",
      "Commercial spaces",
      "Residential projects",
      "Modular kitchens",
    ],
    image: "/logo.png",
  },
  /* ── Laminates ── */
  {
    id: "lam-001",
    slug: "high-pressure-laminate",
    name: "High Pressure Laminate (HPL)",
    category: "Laminates",
    categorySlug: "laminates",
    description:
      "Premium HPL sheets manufactured under high pressure for exceptional hardness, scratch resistance, and vibrant colours that last.",
    features: [
      "Scratch and abrasion resistant",
      "Heat resistant up to 180°C",
      "UV stable colours",
      "Anti-bacterial properties",
      "Easy to clean and maintain",
    ],
    specifications: {
      Thickness: "0.8mm, 1.0mm, 1.5mm",
      Size: "8×4 ft, 10×4 ft",
      Finish: "Glossy, Matte, Textured, Suede",
      "Design Range": "300+ designs",
      "Core Material": "Kraft paper layers",
    },
    applications: [
      "Kitchen countertops",
      "Furniture surfaces",
      "Wall cladding",
      "Table tops",
    ],
    image: "/logo.png",
  },
  {
    id: "lam-002",
    slug: "acrylic-laminate",
    name: "Acrylic Laminate",
    category: "Laminates",
    categorySlug: "laminates",
    description:
      "High-gloss acrylic laminates that add a mirror-like finish to any surface. Perfect for modern, luxury interiors that demand a premium look.",
    features: [
      "Mirror-like high gloss finish",
      "Fingerprint resistant coating",
      "8H pencil hardness",
      "Chemical resistant",
      "Available in solid & metallic colours",
    ],
    specifications: {
      Thickness: "1.0mm",
      Size: "8×4 ft",
      Finish: "High Gloss",
      "Colour Range": "50+ solid and metallic shades",
    },
    applications: [
      "Modular kitchens",
      "Luxury wardrobes",
      "Retail displays",
      "Wall paneling",
    ],
    image: "/logo.png",
  },
  /* ── Veneers ── */
  {
    id: "ven-001",
    slug: "natural-wood-veneer",
    name: "Natural Wood Veneer",
    category: "Decorative Veneers",
    categorySlug: "veneers",
    description:
      "Thin slices of natural wood that bring authentic grain patterns and warmth to furniture and interiors. Each sheet is unique like a fingerprint.",
    features: [
      "100% natural wood grain",
      "Each sheet uniquely patterned",
      "Available in exotic species",
      "Easy to apply with adhesive",
      "Can be polished or lacquered",
    ],
    specifications: {
      Thickness: "0.25mm to 0.50mm",
      Size: "8×4 ft, custom sizes",
      Species: "Teak, Oak, Walnut, Rosewood, Maple, Ash",
      Backing: "Paper backed / Fleece backed",
    },
    applications: [
      "Luxury furniture",
      "Wall paneling",
      "Ceiling design",
      "Door surfaces",
    ],
    image: "/logo.png",
  },
  /* ── MDF Board ── */
  {
    id: "mdf-001",
    slug: "plain-mdf-board",
    name: "Plain MDF Board",
    category: "MDF Board",
    categorySlug: "mdf-board",
    description:
      "Medium Density Fibreboard with uniform density throughout, perfect for CNC routing, intricate carving, and smooth paint finishes.",
    features: [
      "Uniform density — no knots or grain",
      "Ideal for CNC machining",
      "Smooth paintable surface",
      "Dimensionally stable",
      "Available in moisture-resistant variant",
    ],
    specifications: {
      Thickness: "2.5mm, 6mm, 9mm, 12mm, 18mm, 25mm",
      Size: "8×4 ft, 8×6 ft",
      Density: "700–800 kg/m³",
      Variants: "Standard, MR (Moisture Resistant), FR (Fire Retardant)",
    },
    applications: [
      "Modular furniture",
      "CNC cut designs",
      "Speaker cabinets",
      "Display fixtures",
    ],
    image: "/logo.png",
  },
  /* ── Particle Board ── */
  {
    id: "pb-001",
    slug: "pre-laminated-particle-board",
    name: "Pre-Laminated Particle Board",
    category: "Particle Board",
    categorySlug: "particle-board",
    description:
      "Factory-finished particle board with melamine laminate on both sides. Ready to use for quick furniture assembly and modular interiors.",
    features: [
      "Pre-finished on both sides",
      "Scratch resistant melamine surface",
      "Consistent thickness",
      "Easy edge-banding compatibility",
      "Cost-effective alternative to plywood",
    ],
    specifications: {
      Thickness: "9mm, 12mm, 18mm, 25mm",
      Size: "8×4 ft, 8×6 ft",
      "Surface Finish": "Melamine (Matte / Glossy)",
      "Design Options": "Wood grains, solid colours, patterns",
    },
    applications: [
      "Office workstations",
      "Modular kitchen carcasses",
      "Shelving systems",
      "Retail fixtures",
    ],
    image: "/logo.png",
  },
  /* ── Hardware & Accessories ── */
  {
    id: "acc-001",
    slug: "pvc-edge-band",
    name: "PVC Edge Band",
    category: "Hardware & Accessories",
    categorySlug: "accessories",
    description:
      "High-quality PVC edge bands that provide a clean, finished look to board edges. Available in matching colours for all laminate and board finishes.",
    features: [
      "Colour-matched to laminates",
      "UV resistant — no fading",
      "Strong adhesive bonding",
      "Available in 0.4mm to 2mm",
      "Pre-glued options available",
    ],
    specifications: {
      Thickness: "0.4mm, 0.8mm, 1.0mm, 2.0mm",
      Width: "22mm, 28mm, 35mm, 42mm, 50mm",
      "Roll Length": "50m, 100m",
      Material: "Virgin PVC",
    },
    applications: [
      "Furniture edge finishing",
      "Kitchen cabinets",
      "Office furniture",
      "Retail displays",
    ],
    image: "/logo.png",
  },
  {
    id: "acc-002",
    slug: "wood-adhesive",
    name: "Wood Adhesive",
    category: "Hardware & Accessories",
    categorySlug: "accessories",
    description:
      "Professional-grade wood adhesives for strong, lasting bonds. Available in various formulations for different bonding requirements.",
    features: [
      "High bonding strength",
      "Water resistant formula",
      "Quick setting time",
      "Non-toxic and low VOC",
      "Suitable for all wood types",
    ],
    specifications: {
      Types: "White glue, Synthetic resin, Contact cement",
      "Pack Sizes": "500g, 1kg, 5kg, 20kg, 50kg",
      "Setting Time": "30 min to 2 hours",
      "Open Time": "10–15 minutes",
    },
    applications: [
      "Veneer bonding",
      "Lamination",
      "Edge fixing",
      "General woodworking",
    ],
    image: "/logo.png",
  },
];

/** Helper: get products by category slug */
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

/** Helper: get a single product by its slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Helper: get a category by slug */
export function getCategoryBySlug(
  slug: string,
): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
