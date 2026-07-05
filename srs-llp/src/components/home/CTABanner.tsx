"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-brand-secondary to-yellow-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.05) 20px,
              rgba(255,255,255,0.05) 40px
            )`,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 text-center relative z-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Start Your{" "}
          <span className="text-brand-accent">Next Project?</span>
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
          Get expert advice on the right plywood products for your project.
          Contact us today for a free consultation and competitive quote.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-dark px-8 py-4 rounded-lg font-bold text-base hover:bg-yellow-400 transition-colors"
          >
            Request a Quote
            <ArrowRight size={20} />
          </Link>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-white/20 transition-colors border border-white/20"
          >
            <Phone size={20} />
            Call Us Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
