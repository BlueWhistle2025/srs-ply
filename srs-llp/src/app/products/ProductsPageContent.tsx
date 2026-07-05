"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductsPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.categorySlug === activeCategory);

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-gradient-to-br from-brand-primary to-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of plywood products and wood panel
            solutions.
          </p>
        </div>
      </section>

      {/* ── Filter & Grid ── */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === "all"
                  ? "bg-brand-green text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-brand-green text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product count */}
          <p className="text-gray-500 text-sm mb-6 text-center">
            Showing {filtered.length}{" "}
            {filtered.length === 1 ? "product" : "products"}
          </p>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
