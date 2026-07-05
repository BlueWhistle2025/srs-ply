"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Leaf,
  Truck,
  HeadphonesIcon,
  IndianRupee,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description:
      "All products are ISI-marked and comply with IS:303, IS:710, and IS:2202 standards for guaranteed performance.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description:
      "Over a decade of expertise in sourcing, manufacturing, and distributing plywood products across India.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Sustainably sourced timber and eco-conscious manufacturing processes for a greener tomorrow.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description:
      "Reliable logistics network ensuring on-time delivery to your project site, anywhere in India.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description:
      "Dedicated team of wood experts to help you choose the right products for your specific requirements.",
  },
  {
    icon: IndianRupee,
    title: "Competitive Pricing",
    description:
      "Direct from manufacturer pricing with flexible options for bulk orders and trade partners.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Why Choose SRS?"
          subtitle="We combine quality materials, competitive pricing, and exceptional service to deliver the best plywood solutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-brand-cream rounded-xl p-8 hover:bg-brand-green hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-brand-green/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors">
                <item.icon
                  size={26}
                  className="text-brand-green group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
