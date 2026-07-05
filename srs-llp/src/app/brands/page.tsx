import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { brands } from "@/data/brands";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "Discover the premium plywood and laminate brands available at SRS LLP – CenturyPly, Greenply, Merino, Greenlam, and more.",
};

export default function BrandsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-gradient-to-br from-brand-primary to-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Brands
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We partner with India&apos;s most trusted plywood and laminate
            manufacturers to bring you the best.
          </p>
        </div>
      </section>

      {/* ── Brand Grid ── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Trusted Partnerships"
            subtitle="Each brand in our portfolio is selected for its quality, reliability, and industry reputation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                {/* Brand header */}
                <div
                  className="h-40 flex items-center justify-center relative"
                  style={{ backgroundColor: brand.color }}
                >
                  <span className="text-white text-6xl font-black opacity-90 group-hover:scale-110 transition-transform">
                    {brand.name.charAt(0)}
                  </span>
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 10px,
                          rgba(255,255,255,0.1) 10px,
                          rgba(255,255,255,0.1) 20px
                        )`,
                      }}
                    />
                  </div>
                </div>

                {/* Brand info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {brand.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-brand-green text-sm font-semibold">
                    <ExternalLink size={14} />
                    View Products
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why these brands ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            title="Why We Choose These Brands"
            subtitle="Quality is not negotiable. Here's how we select our brand partners."
          />
          <div className="grid sm:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Certified Quality",
                desc: "Every brand meets ISI and international quality standards.",
              },
              {
                title: "Proven Track Record",
                desc: "Decades of industry experience and customer satisfaction.",
              },
              {
                title: "Innovation Leaders",
                desc: "Brands that invest in R&D for better, more sustainable products.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-bold text-brand-dark text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
