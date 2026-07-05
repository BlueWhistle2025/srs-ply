import type { SiteConfig, NavLink, Testimonial } from "@/types";

export const siteConfig: SiteConfig = {
  name: "SRS LLP",
  tagline: "A House of Plywood",
  description:
    "SRS LLP is a leading plywood manufacturer and supplier offering premium quality plywood, block boards, flush doors, laminates, and veneers for residential and commercial projects.",
  phone: ["+91 98765 43210", "+91 98765 43211"],
  email: ["info@srsplywood.com", "sales@srsplywood.com"],
  address:
    "SRS LLP, Industrial Area, Sector 6, Panchkula, Haryana 134109, India",
  workingHours: "Mon – Sat: 9:00 AM – 7:00 PM | Sun: 10:00 AM – 4:00 PM",
  socialLinks: {
    facebook: "https://facebook.com/srsplywood",
    instagram: "https://instagram.com/srsplywood",
    twitter: "https://twitter.com/srsplywood",
    linkedin: "https://linkedin.com/company/srsplywood",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "Interior Designer",
    content:
      "SRS plywood has been my go-to choice for all premium projects. The consistency in quality and the finish they deliver is unmatched in the market.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Architect",
    content:
      "We have been sourcing plywood and laminates from SRS for over 5 years. Their marine-grade plywood stands the test of time, even in high-moisture areas.",
    rating: 5,
  },
  {
    id: "3",
    name: "Amit Verma",
    role: "Furniture Manufacturer",
    content:
      "The block boards and flush doors from SRS are excellent. Strong, durable, and perfect for heavy-duty furniture. Highly recommended for bulk orders.",
    rating: 4,
  },
  {
    id: "4",
    name: "Sunita Patel",
    role: "Homeowner",
    content:
      "We renovated our entire home with SRS products. From kitchen cabinets to bedroom wardrobes, everything looks beautiful even after 3 years.",
    rating: 5,
  },
];

export const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Products Available", value: "500+" },
  { label: "Happy Customers", value: "10,000+" },
  { label: "Cities Served", value: "50+" },
];

export const heroSlides = [
  {
    title: "Premium Quality Plywood",
    subtitle: "Built to Last, Crafted with Precision",
    description:
      "Discover our range of high-grade plywood engineered for strength, durability, and a flawless finish.",
    cta: "Explore Products",
    ctaLink: "/products",
    gradient: "from-amber-900 via-amber-800 to-yellow-900",
  },
  {
    title: "Laminates & Veneers",
    subtitle: "Transform Every Surface",
    description:
      "Choose from hundreds of textures, patterns, and finishes to elevate your interiors.",
    cta: "View Collection",
    ctaLink: "/products",
    gradient: "from-stone-900 via-stone-800 to-amber-900",
  },
  {
    title: "Trusted by Professionals",
    subtitle: "Your Reliable Plywood Partner",
    description:
      "Architects, designers, and builders across India trust SRS for consistent quality and reliable delivery.",
    cta: "Contact Us",
    ctaLink: "/contact",
    gradient: "from-emerald-900 via-emerald-800 to-teal-900",
  },
];
