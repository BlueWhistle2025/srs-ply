"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  SquareStack,
  DoorOpen,
  Palette,
  TreePine,
  LayoutGrid,
  Grid3x3,
  Wrench,
} from "lucide-react";
import { categories } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";

/* Map icon names to components */
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Layers,
  SquareStack,
  DoorOpen,
  Palette,
  TreePine,
  LayoutGrid,
  Grid3x3,
  Wrench,
};

/* Warm colour palette for category cards */
const cardColors = [
  "from-amber-800 to-yellow-900",
  "from-emerald-800 to-teal-900",
  "from-stone-700 to-stone-900",
  "from-rose-800 to-red-900",
  "from-amber-700 to-orange-900",
  "from-cyan-800 to-blue-900",
  "from-violet-800 to-purple-900",
  "from-lime-800 to-green-900",
];

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Our Product Range"
          subtitle="Comprehensive plywood solutions for every project — from structural frameworks to designer finishes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Layers;

            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  {/* Gradient top */}
                  <div
                    className={`bg-gradient-to-br ${cardColors[idx % cardColors.length]} p-8 flex flex-col items-center text-center`}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">{cat.name}</h3>
                    <p className="text-white/70 text-xs mt-1">
                      {cat.productCount} products
                    </p>
                  </div>

                  {/* Description bottom */}
                  <div className="bg-white p-5">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-brand-green text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                      Explore →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
