"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Eye,
  X,
  FileText,
  Filter,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import {
  catalogues,
  catalogueBrands,
  type Catalogue,
} from "@/data/catalogues";

/* ── Card animation variants ── */
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

/* ── Single Catalogue Card ── */
function CatalogueCard({
  item,
  index,
  onPreview,
}: {
  item: Catalogue;
  index: number;
  onPreview: (item: Catalogue) => void;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Colour header bar */}
      <div
        className="h-2 w-full"
        style={{ backgroundColor: item.color }}
      />

      <div className="p-6">
        {/* Icon + brand badge */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${item.color}15` }}
          >
            <FileText
              size={26}
              style={{ color: item.color }}
            />
          </div>
          <span
            className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${item.color}12`,
              color: item.color,
            }}
          >
            {item.brand}
          </span>
        </div>

        {/* Title & description */}
        <h3 className="text-lg font-bold text-brand-dark mb-2 leading-snug group-hover:text-brand-green transition-colors">
          {item.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
          {item.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-5 text-xs text-gray-400">
          <span className="bg-gray-100 px-2.5 py-1 rounded-md font-medium">
            PDF
          </span>
          <span>{item.size}</span>
          <span className="capitalize">{item.category.replace("-", " ")}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => onPreview(item)}
            className="flex-1 flex items-center justify-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-green hover:text-white transition-colors"
          >
            <Eye size={16} />
            Preview
          </button>
          <a
            href={item.file}
            download
            className="flex-1 flex items-center justify-center gap-2 bg-brand-dark/5 text-brand-dark px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-dark hover:text-white transition-colors"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── PDF Preview Modal ── */
function PdfModal({
  item,
  onClose,
}: {
  item: Catalogue;
  onClose: () => void;
}) {
  /* Close on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-4 md:px-6 py-3 bg-white/10 backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${item.color}30` }}
          >
            <FileText size={16} style={{ color: item.color }} />
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">
              {item.name}
            </p>
            <p className="text-white/50 text-xs">{item.brand} -- {item.size}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-white text-xs px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={14} />
            Open in new tab
          </a>
          <a
            href={item.file}
            download
            className="flex items-center gap-1.5 text-white bg-brand-green px-4 py-2 rounded-lg text-xs font-semibold hover:bg-emerald-600 transition-colors"
          >
            <Download size={14} />
            Download
          </a>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close preview"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* PDF iframe */}
      <div
        className="flex-1 mx-2 md:mx-6 mb-2 md:mb-6 rounded-xl overflow-hidden bg-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={item.file}
          title={item.name}
          className="w-full h-full border-0"
        />
      </div>
    </motion.div>
  );
}

/* ── Main Component ── */
export default function DownloadsContent() {
  const [activeBrand, setActiveBrand] = useState("All");
  const [preview, setPreview] = useState<Catalogue | null>(null);

  const filtered =
    activeBrand === "All"
      ? catalogues
      : catalogues.filter((c) => c.brand === activeBrand);

  const handlePreview = useCallback((item: Catalogue) => {
    setPreview(item);
  }, []);

  const handleClose = useCallback(() => {
    setPreview(null);
  }, []);

  return (
    <>
      {/* ── Filter Bar ── */}
      <div className="flex items-center gap-2 flex-wrap mb-10">
        <Filter size={16} className="text-gray-400 mr-1" />
        {catalogueBrands.map((brand) => (
          <button
            key={brand}
            onClick={() => setActiveBrand(brand)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeBrand === brand
                ? "bg-brand-green text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* ── Cards Grid ── */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <CatalogueCard
            key={item.id}
            item={item}
            index={i}
            onPreview={handlePreview}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <FileText size={48} className="mx-auto mb-4 opacity-40" />
          <p className="text-lg font-medium">No catalogues found</p>
          <p className="text-sm mt-1">Try selecting a different brand filter.</p>
        </div>
      )}

      {/* ── Quick Stats Bar ── */}
      <div className="mt-12 bg-white rounded-2xl p-6 flex flex-wrap items-center justify-center gap-8 text-center shadow-sm">
        <div>
          <p className="text-2xl font-bold text-brand-dark">{catalogues.length}</p>
          <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Catalogues</p>
        </div>
        <div className="w-px h-10 bg-gray-200 hidden sm:block" />
        <div>
          <p className="text-2xl font-bold text-brand-dark">
            {Array.from(new Set(catalogues.map((c) => c.brand))).length}
          </p>
          <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Brands</p>
        </div>
        <div className="w-px h-10 bg-gray-200 hidden sm:block" />
        <div>
          <p className="text-2xl font-bold text-brand-dark">Free</p>
          <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Downloads</p>
        </div>
        <div className="w-px h-10 bg-gray-200 hidden sm:block" />
        <a
          href="/contact"
          className="flex items-center gap-1.5 text-brand-green font-semibold text-sm hover:underline"
        >
          Need a custom catalogue? Contact us
          <ChevronRight size={16} />
        </a>
      </div>

      {/* ── Preview Modal ── */}
      <AnimatePresence>
        {preview && <PdfModal item={preview} onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}
