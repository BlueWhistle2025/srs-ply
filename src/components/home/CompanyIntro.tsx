"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Truck } from "lucide-react";

const highlights = [
  { icon: Award, label: "ISI Certified Products" },
  { icon: Shield, label: "15+ Years of Trust" },
  { icon: Truck, label: "Pan-India Delivery" },
];

export default function CompanyIntro() {
  return (
    <section className="py-20 bg-white wood-pattern">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-brand-primary to-emerald-800 rounded-2xl p-10 aspect-square md:aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 border border-white/10 rounded-full" />
                <div className="absolute w-96 h-96 border border-white/5 rounded-full" />
              </div>

              <Image
                src="/logo.png"
                alt="SRS LLP"
                width={300}
                height={200}
                className="relative z-10 brightness-0 invert w-3/4 max-w-xs"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-brand-accent text-brand-dark rounded-xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm font-semibold">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-2">
              About SRS LLP
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Your Trusted Partner for{" "}
              <span className="text-brand-green">Premium Plywood</span>{" "}
              Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SRS LLP has been a cornerstone in the plywood industry for over 15
              years. We specialise in manufacturing and distributing
              high-quality plywood, block boards, flush doors, decorative
              veneers, laminates, and MDF boards.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our commitment to quality, innovation, and customer satisfaction
              has made us the preferred choice for architects, interior
              designers, furniture manufacturers, and homeowners across India.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-green-50 text-brand-green px-4 py-2.5 rounded-full text-sm font-medium"
                >
                  <Icon size={16} />
                  {label}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
