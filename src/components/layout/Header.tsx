"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { navLinks } from "@/data/siteConfig";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on navigation */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* ── Top Bar ── */}
      <div className="bg-brand-primary text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-brand-accent transition-colors"
            >
              <Phone size={14} />
              +91 98765 43210
            </a>
            <a
              href="mailto:info@srsplywood.com"
              className="flex items-center gap-1.5 hover:text-brand-accent transition-colors"
            >
              <Mail size={14} />
              info@srsplywood.com
            </a>
          </div>
          <p className="text-gray-300">
            Mon – Sat: 9:00 AM – 7:00 PM
          </p>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <nav
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="SRS LLP – A House of Plywood"
              width={160}
              height={80}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-brand-green bg-green-50"
                        : "text-gray-700 hover:text-brand-green hover:bg-green-50/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-brand-green text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              Get Quote
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white animate-fade-in">
            <ul className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? "text-brand-green bg-green-50"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="block text-center bg-brand-green text-white px-5 py-3 rounded-lg font-semibold"
                >
                  Get Quote
                </Link>
              </li>
            </ul>

            {/* Mobile contact info */}
            <div className="px-4 pb-4 pt-2 border-t text-sm text-gray-500 space-y-2">
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone size={14} /> +91 98765 43210
              </a>
              <a href="mailto:info@srsplywood.com" className="flex items-center gap-2">
                <Mail size={14} /> info@srsplywood.com
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
