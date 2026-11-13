"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Handshake, 
  TrendingUp, 
  Truck, 
  ShieldCheck, 
  Store, 
  Briefcase, 
  ArrowRight, 
  FileText,
  BadgePercent,
  CheckCircle2,
  Send,
  HelpCircle
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

const PARTNERSHIP_BENEFITS = [
  {
    icon: BadgePercent,
    title: "Attractive Commercial Margins",
    description: "Highly competitive tiered wholesale pricing and volume rebates designed to maximize dealer profitability in regional markets.",
  },
  {
    icon: Store,
    title: "Territory Exclusivity Options",
    description: "Designated exclusive distribution zones for qualifying high-volume channel partners to safeguard local client accounts.",
  },
  {
    icon: Truck,
    title: "Guaranteed Supply & Fast Freight",
    description: "Direct factory dispatches with dedicated transport tie-ups ensuring minimal stockouts and prompt order fulfillment.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & POS Collateral Support",
    description: "Provision of branded sample boards, product cut-sections, digital brochures, retail signages, and regional dealer promotional kits.",
  },
  {
    icon: ShieldCheck,
    title: "100% Quality & Replacement Warranty",
    description: "Complete product replacement guarantee backed by manufacturer test certificates (MTC) and zero-defect quality control.",
  },
  {
    icon: Briefcase,
    title: "Dedicated Key Account Manager",
    description: "A single technical and commercial point of contact to handle rate quotes, order dispatches, and custom specifications.",
  },
];

const FAQS = [
  {
    q: "What is the minimum initial investment required for a dealership?",
    a: "Initial inventory commitments vary by designated territory and product scope. We offer flexible tier structures tailored for both regional super-stockists and city wholesale dealers.",
  },
  {
    q: "Are credit facilities available for approved channel partners?",
    a: "Yes. After an initial probationary cash-and-carry period, revolving credit facilities and bank guarantee terms are extended to established distributors.",
  },
  {
    q: "How does The Monk Power India support retail promotions?",
    a: "We provide in-store sample displays, technical product datasheets, architect/plumber meet sponsorships, and digital lead-forwarding in your territory.",
  },
  {
    q: "How quickly are orders dispatched from the plant?",
    a: "Standard catalogue diameters and coils are dispatched within 24 to 48 hours from our central Delhi NCR logistics hub.",
  },
];

export default function WorkWithUsClient() {
  const [formData, setFormData] = useState({
    applicantName: "",
    firmName: "",
    contactNumber: "",
    emailAddress: "",
    city: "",
    state: "",
    businessType: "Existing Distributor",
    annualTurnover: "₹50 Lakhs - ₹1 Crore",
    interestedProducts: "Full Product Range",
    experienceYears: "5+ Years",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/company-team.jpg"
            alt="Work With Us Channel Partnership"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span className="text-white">Work With Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Grow Your Business as an <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Authorized Channel Partner
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Join India's fastest-expanding polymer piping network. We invite established hardware distributors, plumbing merchants, and agricultural dealers to unlock strong margins and reliable manufacturing backing.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner Pillars */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Handshake className="w-3.5 h-3.5 text-orange-600" />
              <span>Commercial Advantages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Partner With The Monk Power India?
            </h2>
            <p className="text-base text-slate-600 mt-3">
              We empower our channel partners with strong commercial terms, assured product quality, and transparent collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERSHIP_BENEFITS.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Application Form */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                Dealer &amp; Distributor Application
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
                Apply for Dealership / Distributorship
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Please complete the form below. Our national sales director will review your territory profile and connect within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Application Submitted!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.applicantName}</strong> ({formData.firmName}). Your partnership enquiry for <strong className="text-slate-900">{formData.city}, {formData.state}</strong> has been logged. Our commercial territory officer will contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Applicant Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.applicantName}
                      onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Firm / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                      placeholder="e.g. Chandra Hardware &amp; Sanitary"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      placeholder="+91 98111 22233"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      placeholder="ramesh@chandrahardware.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target City / District *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Meerut / Lucknow"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g. Uttar Pradesh / Rajasthan"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Current Nature of Business
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    >
                      <option value="Existing Distributor">Existing PVC / Hardware Distributor</option>
                      <option value="Wholesale Dealer">Wholesale Building Materials Dealer</option>
                      <option value="Agricultural Merchant">Agricultural Irrigation Merchant</option>
                      <option value="Electrical Contractor">Electrical Goods Wholesaler</option>
                      <option value="New Venture">New Business Venture</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Expected Annual Turnover
                    </label>
                    <select
                      value={formData.annualTurnover}
                      onChange={(e) => setFormData({ ...formData, annualTurnover: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    >
                      <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                      <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                      <option value="₹1 Crore - ₹3 Crores">₹1 Crore - ₹3 Crores</option>
                      <option value="Above ₹3 Crores">Above ₹3 Crores</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Existing Showroom / Warehouse Area &amp; Additional Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention warehouse square footage, transport fleet, existing brands handled, or target market coverage..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-600/20 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Dealership Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Partnership Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Clear answers regarding commercials, logistics, and territory protection.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-sky-600 flex-shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
