import type { Metadata } from "next";
import DownloadsContent from "./DownloadsContent";

export const metadata: Metadata = {
  title: "Downloads | E-Catalogues & Shade Cards",
  description:
    "Browse and preview e-catalogues, shade cards, and product brochures from Greenlam, GreenTouch, Decoliner, Tajpuria, and SRS LLP.",
};

export default function DownloadsPage() {
  return (
    <>
      {/* -- Page Hero -- */}
      <section className="bg-gradient-to-br from-brand-primary to-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            E-Catalogues & Downloads
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore our brand partner catalogues and shade cards. Preview them
            instantly or download for offline access.
          </p>
        </div>
      </section>

      {/* -- Interactive Catalogue Grid -- */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <DownloadsContent />
        </div>
      </section>

      {/* -- Help Note -- */}
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
