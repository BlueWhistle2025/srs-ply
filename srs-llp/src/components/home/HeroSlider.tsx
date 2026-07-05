"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/siteConfig";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % heroSlides.length),
    [],
  );

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + heroSlides.length) % heroSlides.length),
    [],
  );

  /* Auto-advance every 6 seconds */
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-all duration-1000`}
      />

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.05) 35px,
              rgba(255,255,255,0.05) 70px
            )`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            {/* Logo watermark */}
            <div className="mb-6 opacity-80">
              <Image
                src="/logo.png"
                alt=""
                width={120}
                height={60}
                className="h-12 w-auto brightness-0 invert"
                aria-hidden="true"
              />
            </div>

            <p
              key={`sub-${current}`}
              className="text-brand-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-3 animate-fade-up"
            >
              {slide.subtitle}
            </p>
            <h1
              key={`title-${current}`}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up delay-100"
            >
              {slide.title}
            </h1>
            <p
              key={`desc-${current}`}
              className="text-gray-200 text-base md:text-lg max-w-lg mb-8 animate-fade-up delay-200"
            >
              {slide.description}
            </p>
            <Link
              key={`cta-${current}`}
              href={slide.ctaLink}
              className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-colors animate-fade-up delay-300"
            >
              {slide.cta}
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-brand-accent"
                : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
