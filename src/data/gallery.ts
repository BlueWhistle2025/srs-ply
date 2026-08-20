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
  {
    id: 14,
    src: "/gallery/greenlam-studio-exterior.jpg",
    title: "Greenlam Studio",
    category: "storefront",
    description:
      "Exterior view of the Greenlam Studio — an authorised Greenlam Laminates experience centre.",
  },
  {
    id: 15,
    src: "/gallery/showroom-laminate-corridor.jpg",
    title: "Laminate Sample Corridor",
    category: "showroom",
    description:
      "Walk-through corridor lined with laminate sample racks and decorative artwork.",
  },
  {
    id: 16,
    src: "/gallery/showroom-laminate-panels.jpg",
    title: "Laminate Panel Display",
    category: "showroom",
    description:
      "Full-size laminate panels in wood-grain and textured finishes with labelled sample tags.",
  },
  {
    id: 17,
    src: "/gallery/showroom-greenlam-samples.jpg",
    title: "Greenlam Laminate Samples",
    category: "showroom",
    description:
      "Close-up of Greenlam laminate sample racks featuring Safeguard Plus technology branding.",
  },
  {
    id: 18,
    src: "/gallery/showroom-event-stage.jpg",
    title: "Event & Conference Area",
    category: "showroom",
    description:
      "Showroom stage and conference area with Greenlam Nirmaan Sammelan event branding.",
  },
  {
    id: 19,
    src: "/gallery/showroom-reception-desk.jpg",
    title: "Showroom Reception",
    category: "showroom",
    description:
      "Modern geometric reception counter with pendant lighting and sample displays.",
  },
  {
    id: 20,
    src: "/gallery/showroom-reception-wide.jpg",
    title: "Reception & Lounge Area",
    category: "showroom",
    description:
      "Wide view of the showroom reception with Greenlam Chai Connect hospitality area.",
  },
  {
    id: 21,
    src: "/gallery/showroom-color-wall.jpg",
    title: "Surfacing Colour Palette",
    category: "showroom",
    description:
      "Vibrant colour wall showcasing endless surfacing possibilities across hundreds of shades.",
  },
  {
    id: 22,
    src: "/gallery/showroom-art-panel.jpg",
    title: "Decorative Art Feature",
    category: "showroom",
    description:
      "Eye-catching orange decorative art panel with design tool motifs at the showroom entrance.",
  },
  {
    id: 23,
    src: "/gallery/showroom-architecture-wall.jpg",
    title: "Legends of Architecture",
    category: "showroom",
    description:
      "Inspirational wall featuring portraits and quotes from legendary architects worldwide.",
  },
  {
    id: 24,
    src: "/gallery/showroom-laminate-aisle.jpg",
    title: "Laminate Sample Aisle",
    category: "showroom",
    description:
      "Long aisle of floor-to-ceiling laminate racks with wood-grain finishes and sample tags.",
  },
  {
    id: 25,
    src: "/gallery/showroom-wood-finish-racks.jpg",
    title: "Wood Finish Sample Racks",
    category: "showroom",
    description:
      "Pine, teak, and dark-wood laminate samples displayed in vertical flip-through racks.",
  },
  {
    id: 26,
    src: "/gallery/showroom-display-sections.jpg",
    title: "Laminate Display Sections",
    category: "showroom",
    description:
      "Panoramic view of multiple laminate display bays organised by finish and texture.",
  },
  {
    id: 27,
    src: "/gallery/showroom-afx-sizes.jpg",
    title: "AFX Laminate Sizes",
    category: "showroom",
    description:
      "AFX laminate display showing available sizes for doors, furniture, wall panels, and kitchens.",
  },
  {
    id: 28,
    src: "/gallery/showroom-cubicles-lockers.jpg",
    title: "Cubicles & Lockers",
    category: "showroom",
    description:
      "Restroom cubicle partitions and locker units made with compact laminate panels.",
  },
  {
    id: 29,
    src: "/gallery/showroom-clads-display.jpg",
    title: "Greenlam CLADS Collection",
    category: "showroom",
    description:
      "Greenlam CLADS exterior-grade compact laminates wall with full colour and wood-grain swatches.",
  },
];

export const galleryCategories = [
  "all",
  "factory",
  "showroom",
  "storefront",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
