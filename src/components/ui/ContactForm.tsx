"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, wire this to an API route or email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 rounded-xl p-10 text-center">
        <CheckCircle size={48} className="text-brand-green mx-auto mb-4" />
        <h3 className="text-xl font-bold text-brand-dark mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          Your message has been received. We&apos;ll get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-colors text-sm"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-colors text-sm"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-colors text-sm"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-colors text-sm bg-white"
        >
          <option value="">Select a topic</option>
          <option value="quote">Request a Quote</option>
          <option value="product">Product Inquiry</option>
          <option value="bulk">Bulk Order</option>
          <option value="dealer">Dealer Enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-colors text-sm resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
      >
        <Send size={18} />
        Send Message
      </button>
    </form>
  );
}
