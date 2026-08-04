/* -- Gallery image data -- */

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: "factory" | "showroom" | "storefront";
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/factory-press-machine.jpg",
    title: "Hot Press Machine",
    category: "factory",
    description:
      "Industrial hot press for bonding plywood layers under high pressure and temperature.",
  },
  {
    id: 2,
    src: "/gallery/factory-plywood-stacks.jpg",
    title: "Plywood Sheet Sorting",
    category: "factory",
    description:
      "Workers sorting and quality-checking finished plywood sheets before dispatch.",
  },
  {
    id: 3,
    src: "/gallery/factory-floor-overview.jpg",
    title: "Factory Floor",
    category: "factory",
    description:
      "Panoramic view of the manufacturing floor with dual press machines in operation.",
  },
  {
    id: 4,
    src: "/gallery/factory-sanding-machine.jpg",
    title: "Sanding Machine",
    category: "factory",
    description:
      "Precision sanding machine for achieving smooth, uniform plywood surfaces.",
  },
  {
    id: 5,
    src: "/gallery/factory-dual-presses.jpg",
    title: "Dual Press Units",
    category: "factory",
    description:
      "Two heavy-duty hot press units running simultaneously for high-volume production.",
  },
  {
    id: 6,
    src: "/gallery/factory-veneer-dryer.jpg",
    title: "Veneer Dryer",
    category: "factory",
    description:
      "Large veneer drying machine processing raw wood veneers before lamination.",
  },
  {
    id: 7,
    src: "/gallery/factory-processing-unit.jpg",
    title: "Processing Unit",
    category: "factory",
    description:
      "Industrial-scale processing and extraction unit for plywood manufacturing.",
  },
  {
    id: 8,
    src: "/gallery/factory-workers-inspection.jpg",
    title: "Quality Inspection",
    category: "factory",
    description:
      "Skilled workers inspecting and handling large plywood panels for quality assurance.",
  },
  {
    id: 9,
    src: "/gallery/factory-building-exterior.jpg",
    title: "Manufacturing Facility",
    category: "factory",
    description:
      "Exterior view of the plywood manufacturing facility and office block.",
  },
  {
    id: 10,
    src: "/gallery/factory-veneer-dryer-2.jpg",
    title: "Veneer Drying Line",
    category: "factory",
    description:
      "Extended veneer drying line for processing large batches of raw wood sheets.",
  },
  {
    id: 11,
    src: "/gallery/storefront-exterior.jpg",
    title: "Shree Ram Sales LLP",
    category: "storefront",
    description:
      "The Shree Ram Sales LLP storefront -- an authorised Greenlam Laminates dealer.",
  },
  {
    id: 12,
    src: "/gallery/showroom-samples.jpg",
    title: "Veneer & Laminate Samples",
    category: "showroom",
    description:
      "Extensive collection of veneer and laminate samples organised by type and finish.",
  },
  {
    id: 13,
    src: "/gallery/showroom-laminate-racks.jpg",
    title: "Laminate Display Racks",
    category: "showroom",
    description:
      "Floor-to-ceiling laminate sample racks showcasing hundreds of textures and colours.",
  },
];

export const galleryCategories = [
  "all",
  "factory",
  "showroom",
  "storefront",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
