import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle,
  Download,
  Phone,
  ChevronRight,
} from "lucide-react";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

/* ── Static params for build-time generation ── */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/* ── Dynamic metadata ── */
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description,
  };
}

/* ── Card gradient lookup ── */
const gradients: Record<string, string> = {
  plywood: "from-amber-800 to-yellow-900",
  "block-board": "from-emerald-800 to-teal-900",
  "flush-doors": "from-blue-800 to-indigo-900",
  laminates: "from-rose-700 to-red-900",
  veneers: "from-violet-800 to-purple-900",
  "mdf-board": "from-cyan-700 to-blue-900",
  "particle-board": "from-orange-700 to-red-900",
  accessories: "from-gray-700 to-gray-900",
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const gradient = gradients[product.categorySlug] ?? "from-gray-700 to-gray-900";

  /* Related products — same category, exclude self */
  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-brand-cream border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand-green">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-brand-green">
            Products
          </Link>
          <ChevronRight size={14} />
          <span className="text-brand-dark font-medium">{product.name}</span>
        </div>
      </div>

      {/* ── Product Detail ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-green mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — Visual */}
            <div
              className={`bg-gradient-to-br ${gradient} rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden`}
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-white/10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5" />
              <span className="text-white/10 text-[12rem] font-black select-none">
                {product.name.charAt(0)}
              </span>
            </div>

            {/* Right — Info */}
            <div>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-brand-green/10 text-brand-green mb-4">
                {product.category}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                {product.name}
              </h1>

              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-brand-dark mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-brand-green shrink-0 mt-0.5"
                      />
                      <span className="text-gray-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  <Phone size={18} />
                  Enquire Now
                </Link>
                <button className="inline-flex items-center gap-2 bg-brand-cream text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  <Download size={18} />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specifications ── */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Specifications table */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Specifications
              </h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specifications).map(
                      ([key, val], idx) => (
                        <tr
                          key={key}
                          className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="px-5 py-3.5 font-semibold text-brand-dark w-1/3">
                            {key}
                          </td>
                          <td className="px-5 py-3.5 text-gray-600">{val}</td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Applications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.applications.map((app) => (
                  <div
                    key={app}
                    className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                      <CheckCircle size={18} className="text-brand-green" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
