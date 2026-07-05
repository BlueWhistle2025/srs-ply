"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

/* Gallery items using gradient cards since we only have the logo asset */
const galleryItems = [
  { id: 1, title: "Plywood Showroom", category: "showroom", gradient: "from-amber-800 to-yellow-900" },
  { id: 2, title: "Manufacturing Unit", category: "factory", gradient: "from-emerald-800 to-teal-900" },
  { id: 3, title: "Quality Testing Lab", category: "factory", gradient: "from-blue-800 to-indigo-900" },
  { id: 4, title: "Laminate Display", category: "showroom", gradient: "from-rose-700 to-red-900" },
  { id: 5, title: "Warehouse & Storage", category: "factory", gradient: "from-stone-700 to-stone-900" },
  { id: 6, title: "Finished Interiors", category: "projects", gradient: "from-violet-800 to-purple-900" },
  { id: 7, title: "Kitchen Project", category: "projects", gradient: "from-cyan-700 to-blue-900" },
  { id: 8, title: "Office Fit-out", category: "projects", gradient: "from-orange-700 to-red-900" },
  { id: 9, title: "Veneer Collection", category: "showroom", gradient: "from-amber-700 to-orange-900" },
  { id: 10, title: "Residential Project", category: "projects", gradient: "from-lime-800 to-green-900" },
  { id: 11, title: "Wood Panel Stack", category: "factory", gradient: "from-gray-700 to-gray-900" },
  { id: 12, title: "Team at Work", category: "factory", gradient: "from-teal-800 to-cyan-900" },
];

const filterOptions = ["all", "showroom", "factory", "projects"] as const;

export default function GalleryContent() {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <>
      {/* ── Gallery Grid ── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold capitalize transition-colors ${
                  filter === opt
                    ? "bg-brand-green text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                }`}
              >
                {opt === "all" ? "All" : opt}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item.id)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                  idx % 3 === 0 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)`,
                    }}
                  />
                </div>

                {/* Logo watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={100}
                    height={50}
                    className="brightness-0 invert opacity-20 group-hover:opacity-30 transition-opacity"
                    aria-hidden="true"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-5">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <p className="text-white font-bold text-lg">{item.title}</p>
                    <p className="text-white/60 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <div className="max-w-2xl w-full">
            {(() => {
              const item = galleryItems.find((g) => g.id === lightbox);
              if (!item) return null;
              return (
                <div
                  className={`bg-gradient-to-br ${item.gradient} rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src="/logo.png"
                    alt={item.title}
                    width={200}
                    height={100}
                    className="brightness-0 invert opacity-30"
                  />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-bold text-xl">{item.title}</p>
                    <p className="text-white/60 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}
