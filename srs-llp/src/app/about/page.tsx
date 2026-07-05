import type { Metadata } from "next";
import Image from "next/image";
import {
  Eye,
  Target,
  Users,
  Award,
  Shield,
  Truck,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StatsCounter from "@/components/home/StatsCounter";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SRS LLP – over 15 years of excellence in plywood manufacturing, our vision, mission, and commitment to quality.",
};

const timeline = [
  { year: "2009", title: "Foundation", description: "SRS LLP was established with a vision to deliver premium plywood products." },
  { year: "2012", title: "Expansion", description: "Expanded operations with a state-of-the-art manufacturing facility." },
  { year: "2015", title: "ISI Certification", description: "Achieved ISI certification for all major product lines." },
  { year: "2018", title: "Pan-India Reach", description: "Distribution network expanded to 30+ cities across India." },
  { year: "2021", title: "Product Diversification", description: "Launched laminate, veneer, and MDF product ranges." },
  { year: "2024", title: "500+ Products", description: "Catalogue expanded to over 500 products serving diverse needs." },
];

const values = [
  { icon: Shield, title: "Quality First", description: "Every product undergoes rigorous quality testing before it reaches you." },
  { icon: Users, title: "Customer Focus", description: "Building lasting relationships through exceptional service and support." },
  { icon: Award, title: "Innovation", description: "Continuously adopting new technologies to improve our products." },
  { icon: Truck, title: "Reliability", description: "On-time delivery and consistent product availability you can count on." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-gradient-to-br from-brand-primary to-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About SRS LLP
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Over 15 years of excellence in plywood manufacturing, distribution,
            and customer trust.
          </p>
        </div>
      </section>

      {/* ── Company Overview ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-2">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Building Trust,{" "}
                <span className="text-brand-green">One Sheet at a Time</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, SRS LLP began with a simple yet ambitious
                  mission: to make premium-quality plywood accessible to every
                  builder, designer, and homeowner in India.
                </p>
                <p>
                  Over the years, we have grown from a single-product operation
                  into a comprehensive plywood solutions provider. Today, we
                  offer an extensive range that includes plywood, block boards,
                  flush doors, decorative veneers, laminates, MDF boards,
                  particle boards, and all associated hardware.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility, combined with
                  strategic partnerships with India&apos;s leading brands,
                  ensures that every product bearing the SRS name meets the
                  highest standards of quality and durability.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-brand-primary to-emerald-800 rounded-2xl p-12 flex items-center justify-center aspect-[4/3]">
                <Image
                  src="/logo.png"
                  alt="SRS LLP – A House of Plywood"
                  width={350}
                  height={200}
                  className="brightness-0 invert w-3/4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
                <Eye size={28} className="text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be India&apos;s most trusted and preferred plywood solutions
                provider, setting the benchmark for quality, sustainability, and
                innovation in the wood panel industry.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-6">
                <Target size={28} className="text-brand-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver consistently superior plywood products through
                advanced manufacturing, sustainable practices, and an
                unwavering commitment to customer satisfaction — making quality
                affordable for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MD Message ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            title="Managing Director's Message"
            subtitle="A word from our leadership."
          />
          <div className="bg-brand-cream rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center text-white text-2xl font-bold">
                S
              </div>
              <div>
                <p className="font-bold text-brand-dark text-lg">
                  Managing Director
                </p>
                <p className="text-gray-500 text-sm">SRS LLP</p>
              </div>
            </div>
            <blockquote className="text-gray-700 leading-relaxed italic text-lg">
              &ldquo;At SRS LLP, we believe that quality is not an act — it is a
              habit. Every sheet of plywood that leaves our facility carries
              with it our promise of excellence. We are not just selling wood
              products; we are building the foundations of homes, offices, and
              dreams. Our journey of 15 years has been fuelled by the trust of
              our customers, and we remain committed to earning that trust
              every single day.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={26} className="text-brand-green" />
                </div>
                <h3 className="font-bold text-brand-dark text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in the SRS story."
          />
          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <div key={item.year} className="flex gap-6">
                {/* Line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {item.year}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-green/20 my-1" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10">
                  <h3 className="font-bold text-brand-dark text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Commitment ── */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Quality Commitment"
            subtitle="Our dedication to excellence is reflected in every product."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "ISI-certified products conforming to IS:303, IS:710, IS:2202",
              "In-house testing laboratory for raw material and finished product QC",
              "Termite and borer treatment on all plywood and block boards",
              "Eco-friendly manufacturing with sustainable timber sourcing",
              "Rigorous multi-point inspection at every production stage",
              "Compliance with national and international quality standards",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-brand-accent shrink-0 mt-0.5"
                />
                <p className="text-white/80 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />
      <CTABanner />
    </>
  );
}
