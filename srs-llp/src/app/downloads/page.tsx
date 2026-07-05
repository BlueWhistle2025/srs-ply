import type { Metadata } from "next";
import { FileText, Download, BookOpen, Award, FileCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download product brochures, catalogues, certificates, and technical data sheets for SRS LLP plywood products.",
};

const downloadCategories = [
  {
    title: "Product Brochures",
    icon: BookOpen,
    color: "bg-amber-100 text-amber-700",
    items: [
      { name: "SRS Plywood Range Brochure", size: "2.4 MB", type: "PDF" },
      { name: "BWR & Marine Plywood Datasheet", size: "1.8 MB", type: "PDF" },
      { name: "Commercial Plywood Guide", size: "1.2 MB", type: "PDF" },
      { name: "Flexible Plywood Specifications", size: "900 KB", type: "PDF" },
    ],
  },
  {
    title: "Catalogues",
    icon: FileText,
    color: "bg-emerald-100 text-emerald-700",
    items: [
      { name: "Complete Product Catalogue 2024", size: "8.5 MB", type: "PDF" },
      { name: "Laminates & Veneers Collection", size: "12.3 MB", type: "PDF" },
      { name: "Flush Door Design Catalogue", size: "5.7 MB", type: "PDF" },
      { name: "MDF & Particle Board Range", size: "3.2 MB", type: "PDF" },
    ],
  },
  {
    title: "Certificates",
    icon: Award,
    color: "bg-blue-100 text-blue-700",
    items: [
      { name: "ISI Certification — IS:303", size: "450 KB", type: "PDF" },
      { name: "ISI Certification — IS:710", size: "420 KB", type: "PDF" },
      { name: "ISI Certification — IS:2202", size: "480 KB", type: "PDF" },
      { name: "FSSAI Compliance Certificate", size: "350 KB", type: "PDF" },
    ],
  },
  {
    title: "Technical Data Sheets",
    icon: FileCheck,
    color: "bg-violet-100 text-violet-700",
    items: [
      { name: "Plywood Technical Specifications", size: "1.1 MB", type: "PDF" },
      { name: "Adhesive Application Guide", size: "750 KB", type: "PDF" },
      { name: "Laminate Installation Manual", size: "2.1 MB", type: "PDF" },
      { name: "Wood Care & Maintenance Guide", size: "1.5 MB", type: "PDF" },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-gradient-to-br from-brand-primary to-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Downloads
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Access product brochures, catalogues, certificates, and technical
            documentation.
          </p>
        </div>
      </section>

      {/* ── Download Sections ── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {downloadCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}
                >
                  <category.icon size={20} />
                </div>
                <h2 className="text-2xl font-bold text-brand-dark">
                  {category.title}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                        <FileText size={22} className="text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark text-sm">
                          {item.name}
                        </p>
                        <p className="text-gray-400 text-xs mt-0.5">
                          {item.type} • {item.size}
                        </p>
                      </div>
                    </div>

                    <button
                      className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors shrink-0"
                      aria-label={`Download ${item.name}`}
                    >
                      <Download size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Note ── */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Can&apos;t find what you&apos;re looking for? Contact us at{" "}
            <a
              href="mailto:info@srsplywood.com"
              className="text-brand-green font-semibold hover:underline"
            >
              info@srsplywood.com
            </a>{" "}
            and we&apos;ll send it to you directly.
          </p>
        </div>
      </section>
    </>
  );
}
