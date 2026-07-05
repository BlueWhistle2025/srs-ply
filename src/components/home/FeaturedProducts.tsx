"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";

/* Show first 6 products as "featured" */
const featured = products.slice(0, 6);

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Featured Products"
          subtitle="Explore our most popular plywood products trusted by professionals and homeowners alike."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
