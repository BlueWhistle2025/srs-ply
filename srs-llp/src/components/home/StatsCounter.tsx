"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/siteConfig";

export default function StatsCounter() {
  return (
    <section className="py-16 bg-brand-green">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.value}
              </p>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
