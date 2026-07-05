"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BrandHighlights() {
  return (
    <section className="py-20 bg-brand-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionHeading
          title="Brands We Carry"
          subtitle="We partner with India's leading plywood and laminate manufacturers to bring you the finest products."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors group"
            >
              {/* Brand initial as visual element */}
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-black"
                style={{ backgroundColor: brand.color }}
              >
                {brand.name.charAt(0)}
              </div>
              <h3 className="text-white font-bold text-sm">{brand.name}</h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark px-8 py-3.5 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Explore All Brands
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
