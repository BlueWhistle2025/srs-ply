import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  XTwitterIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SRS LLP for product inquiries, bulk orders, dealership opportunities, or any questions about our plywood products.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-gradient-to-br from-brand-primary to-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a question or need a quote? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you need product information, a custom quote, or want
                  to discuss a project — our team is here to help.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-5">
                <div className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
                  <div className="w-11 h-11 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm mb-1">
                      Address
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
                  <div className="w-11 h-11 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm mb-1">
                      Phone
                    </p>
                    {siteConfig.phone.map((num) => (
                      <a
                        key={num}
                        href={`tel:${num.replace(/\s/g, "")}`}
                        className="block text-gray-500 text-sm hover:text-brand-green transition-colors"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
                  <div className="w-11 h-11 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm mb-1">
                      Email
                    </p>
                    {siteConfig.email.map((em) => (
                      <a
                        key={em}
                        href={`mailto:${em}`}
                        className="block text-gray-500 text-sm hover:text-brand-green transition-colors"
                      >
                        {em}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
                  <div className="w-11 h-11 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm mb-1">
                      Business Hours
                    </p>
                    <p className="text-gray-500 text-sm">
                      {siteConfig.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-semibold text-brand-dark text-sm mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: FacebookIcon, href: siteConfig.socialLinks.facebook, label: "Facebook" },
                    { icon: InstagramIcon, href: siteConfig.socialLinks.instagram, label: "Instagram" },
                    { icon: XTwitterIcon, href: siteConfig.socialLinks.twitter, label: "X" },
                    { icon: LinkedinIcon, href: siteConfig.socialLinks.linkedin, label: "LinkedIn" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-brand-dark mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Maps Embed ── */}
      <section className="h-96 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.85!3d30.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPanchkula%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SRS LLP Location on Google Maps"
        />
      </section>
    </>
  );
}
