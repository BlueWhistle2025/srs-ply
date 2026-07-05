import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsPageContent from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our complete range of plywood, block boards, flush doors, laminates, veneers, MDF boards, particle boards, and hardware accessories.",
};

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full" />
        </div>
      }
    >
      <ProductsPageContent />
    </Suspense>
  );
}
