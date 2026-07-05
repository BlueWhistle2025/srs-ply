/* ─── Domain types for SRS LLP ─── */

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  image: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  productCount: number;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string[];
  email: string[];
  address: string;
  workingHours: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}
