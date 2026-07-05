import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  XTwitterIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/siteConfig";
import { categories } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-gray-300">
      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Company */}
          <div>
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={160}
              height={80}
              className="h-16 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {[
                { icon: FacebookIcon, href: siteConfig.socialLinks.facebook, label: "Facebook" },
                { icon: InstagramIcon, href: siteConfig.socialLinks.instagram, label: "Instagram" },
                { icon: XTwitterIcon, href: siteConfig.socialLinks.twitter, label: "X" },
                { icon: LinkedinIcon, href: siteConfig.socialLinks.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Brands", href: "/brands" },
                { label: "Gallery", href: "/gallery" },
                { label: "Downloads", href: "/downloads" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-2 hover:text-brand-accent transition-colors group"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Product Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Our Products</h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-sm flex items-center gap-2 hover:text-brand-accent transition-colors group"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-accent mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              {siteConfig.phone.map((num) => (
                <li key={num} className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-accent shrink-0" />
                  <a href={`tel:${num.replace(/\s/g, "")}`} className="hover:text-brand-accent transition-colors">
                    {num}
                  </a>
                </li>
              ))}
              {siteConfig.email.map((em) => (
                <li key={em} className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-accent shrink-0" />
                  <a href={`mailto:${em}`} className="hover:text-brand-accent transition-colors">
                    {em}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-brand-accent mt-0.5 shrink-0" />
                <span>{siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Designed with care for quality and craftsmanship.
          </p>
        </div>
      </div>
    </footer>
  );
}
