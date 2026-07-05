"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from architects, designers, and homeowners who trust SRS for their projects."
        />

        <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <Quote
            size={48}
            className="absolute top-6 left-6 text-brand-accent/20"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < t.rating
                        ? "text-brand-accent fill-brand-accent"
                        : "text-gray-200"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic mb-8">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-bold text-brand-dark">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-brand-green"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
