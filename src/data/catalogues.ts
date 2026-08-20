/* ── E-Catalogue & PDF data for the Downloads page ── */

export interface Catalogue {
  id: string;
  name: string;
  brand: string;
  description: string;
  file: string;
  size: string;
  color: string;       /* brand accent for card header */
  category: "catalogue" | "shade-card";
}

export const catalogues: Catalogue[] = [
  {
    id: "srs-catalogue",
    name: "SRS Product Catalogue",
    brand: "SRS LLP",
    description:
      "Complete product range overview from SRS -- A House of Trust. Covers plywood, block boards, flush doors, and more.",
    file: "/pdf/srs-catalogue.pdf",
    size: "48.6 MB",
    color: "#2E7D32",
    category: "catalogue",
  },
  {
    id: "greenlam-2023-2025",
    name: "Greenlam Edition 2023-2025",
    brand: "Greenlam",
    description:
      "Full laminate collection from Asia's largest exporter -- HPL, compact, and specialty finishes across 1000+ designs.",
    file: "/pdf/greenlam-2023-2025.pdf",
    size: "17.5 MB",
    color: "#558B2F",
    category: "catalogue",
  },
  {
    id: "greentouch-catalogue",
    name: "GreenTouch E-Catalogue",
    brand: "GreenTouch",
    description:
      "Decorative laminates collection featuring trendy textures, woodgrains, solid colours, and abstract patterns.",
    file: "/pdf/greentouch-catalogue.pdf",
    size: "55.8 MB",
    color: "#00838F",
    category: "catalogue",
  },
  {
    id: "decoliner-shade-card",
    name: "Decoliner Shade Card",
    brand: "Decoliner",
    description:
      "Complete shade card for Decoliner laminates and composite panels -- every colour, texture, and finish at a glance.",
    file: "/pdf/decoliner-shade-card.pdf",
    size: "32.3 MB",
    color: "#6A1B9A",
    category: "shade-card",
  },
  {
    id: "tajpuria-one-plus",
    name: "Tajpuria One+ 1MM Collection",
    brand: "Tajpuria",
    description:
      "Interactive catalogue for Tajpuria One+ 1MM laminates -- premium surfaces engineered for durability and elegance.",
    file: "/pdf/tajpuria-one-plus-1mm.pdf",
    size: "44.1 MB",
    color: "#C62828",
    category: "catalogue",
  },
  {
    id: "tajpuria-innov8",
    name: "Tajpuria Innov8 0.80MM Collection",
    brand: "Tajpuria",
    description:
      "Interactive catalogue for Tajpuria Innov8 0.80MM laminates -- innovative designs that redefine modern interiors.",
    file: "/pdf/tajpuria-innov8-080mm.pdf",
    size: "37.4 MB",
    color: "#E65100",
    category: "catalogue",
  },
];

/** Unique brand names for filtering */
export const catalogueBrands = [
  "All",
  ...Array.from(new Set(catalogues.map((c) => c.brand))),
];
