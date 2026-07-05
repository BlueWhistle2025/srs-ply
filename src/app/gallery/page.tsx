import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our photo gallery showcasing SRS LLP showroom, manufacturing facility, and completed interior projects.",
};

export default function GalleryPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-gradient-to-br from-brand-primary to-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A visual showcase of our showroom, manufacturing facility, and
            completed projects.
          </p>
        </div>
      </section>

      <GalleryContent />
    </>
  );
}
