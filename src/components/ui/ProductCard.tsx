import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";

/* Consistent colour palette for product category badges */
const categoryColors: Record<string, string> = {
  plywood: "bg-amber-100 text-amber-800",
  "block-board": "bg-emerald-100 text-emerald-800",
  "flush-doors": "bg-blue-100 text-blue-800",
  laminates: "bg-rose-100 text-rose-800",
  veneers: "bg-violet-100 text-violet-800",
  "mdf-board": "bg-cyan-100 text-cyan-800",
  "particle-board": "bg-orange-100 text-orange-800",
  accessories: "bg-gray-100 text-gray-800",
};

/* Gradient backgrounds since we only have the logo image */
const cardGradients: Record<string, string> = {
  plywood: "from-amber-800 to-yellow-900",
  "block-board": "from-emerald-800 to-teal-900",
  "flush-doors": "from-blue-800 to-indigo-900",
  laminates: "from-rose-700 to-red-900",
  veneers: "from-violet-800 to-purple-900",
  "mdf-board": "from-cyan-700 to-blue-900",
  "particle-board": "from-orange-700 to-red-900",
  accessories: "from-gray-700 to-gray-900",
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const badgeClass = categoryColors[product.categorySlug] ?? "bg-gray-100 text-gray-800";
  const gradient = cardGradients[product.categorySlug] ?? "from-gray-700 to-gray-900";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      {/* Visual header with gradient + first letter */}
      <div
        className={`bg-gradient-to-br ${gradient} h-48 flex items-center justify-center relative overflow-hidden`}
      >
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

        <span className="text-white/20 text-8xl font-black select-none group-hover:scale-110 transition-transform">
          {product.name.charAt(0)}
        </span>
      </div>

      <div className="p-5">
        {/* Category badge */}
        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${badgeClass}`}>
          {product.category}
        </span>

        <h3 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Quick specs */}
        {product.specifications.Thickness && (
          <p className="text-xs text-gray-400 mb-4">
            <span className="font-semibold text-gray-600">Thickness:</span>{" "}
            {product.specifications.Thickness}
          </p>
        )}

        <span className="inline-flex items-center gap-1.5 text-brand-green text-sm font-semibold group-hover:gap-3 transition-all">
          View Details <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
