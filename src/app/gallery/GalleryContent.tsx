"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import {
  galleryImages,
  galleryCategories,
  type GalleryImage,
  type GalleryCategory,
} from "@/data/gallery";

/* -- Lightbox Component -- */
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const image = images[index];

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 md:px-6 py-3 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm md:text-base truncate">
            {image.title}
          </p>
          <p className="text-white/50 text-xs">
            {index + 1} / {images.length} -- {image.category}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors shrink-0 ml-4"
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>
      </div>

      {/* Image area */}
      <div
        className="flex-1 flex items-center justify-center px-4 md:px-16 pb-4 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full max-w-5xl max-h-[75vh] rounded-xl overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Description */}
      <div
        className="text-center px-4 pb-4 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-white/60 text-sm max-w-lg mx-auto">
          {image.description}
        </p>
      </div>

      {/* Nav arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>
    </motion.div>
  );
}

/* -- Main Gallery -- */
export default function GalleryContent() {
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (imageId: number) => {
    const idx = filtered.findIndex((img) => img.id === imageId);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  return (
    <>
      {/* -- Gallery Grid -- */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold capitalize transition-colors ${
                  filter === cat
                    ? "bg-brand-green text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                }`}
              >
                {cat === "all" ? "All Photos" : cat}
              </button>
            ))}
          </div>

          {/* Image count */}
          <p className="text-center text-gray-400 text-sm mb-8">
            Showing {filtered.length} of {galleryImages.length} photos
          </p>

          {/* Masonry-ish grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: idx * 0.06,
                  duration: 0.4,
                  ease: "easeOut" as const,
                }}
                onClick={() => openLightbox(item.id)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                  idx % 5 === 0 ? "sm:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={
                    idx % 5 === 0
                      ? "(max-width: 640px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, 33vw"
                  }
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <p className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </p>
                  <p className="text-white/60 text-sm capitalize translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </p>
                </div>

                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={14} />
                </div>
              </motion.button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-medium">
                No photos in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* -- Lightbox -- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
