"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, Clock, MapPin, ShieldAlert } from "lucide-react";
import { PRODUCTS_DATA } from "@/data/products";
import { COMPANY_DATA } from "@/data/company";

export default function HomeContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    mobileNumber: "",
    emailAddress: "",
    city: "",
    productInterest: PRODUCTS_DATA[0].name,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries & Corporate Works Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>Direct Commercial &amp; Project Desk</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Request Technical Specifications &amp; Commercial Rates
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Whether you require container-load institutional supply, distributor territory allocation, or custom diameter pipe extrusion, our commercial engineering team is ready to assist.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <MapPin className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Corporate &amp; Registered Office</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {COMPANY_DATA.corporateAddress.line1}, {COMPANY_DATA.corporateAddress.city} - {COMPANY_DATA.corporateAddress.pincode}, {COMPANY_DATA.corporateAddress.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Telephone Helpline</h4>
                  <a
                    href={`tel:${COMPANY_DATA.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-xs text-slate-700 hover:text-sky-600 font-semibold mt-1 block"
                  >
                    Sales: {COMPANY_DATA.phone}
                  </a>
                  <a
                    href={`tel:${COMPANY_DATA.alternatePhone.replace(/[^0-9+]/g, "")}`}
                    className="text-xs text-slate-600 hover:text-sky-600 block"
                  >
                    Direct: {COMPANY_DATA.alternatePhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Email Enquiries</h4>
                  <a
                    href={`mailto:${COMPANY_DATA.salesEmail}`}
                    className="text-xs text-slate-700 hover:text-sky-600 font-semibold mt-1 block"
                  >
                    {COMPANY_DATA.salesEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Note on factual company data */}
            <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-200 text-xs text-slate-600 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Business Verification Note:</strong> {COMPANY_DATA.establishedNotice}. All quotes are provided with official GST invoices and material test certificates (MTC).
              </p>
            </div>
          </div>

          {/* Right Column: Callback & Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Callback Request Registered</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your enquiry for <strong className="text-slate-900">{formData.productInterest}</strong> has been assigned to our regional sales officer. We will connect via phone at <strong className="text-slate-900">{formData.mobileNumber}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        companyName: "",
                        mobileNumber: "",
                        emailAddress: "",
                        city: "",
                        productInterest: PRODUCTS_DATA[0].name,
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs tracking-wider uppercase transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <h3 className="text-xl font-black text-slate-900">Send Direct Business Callback Request</h3>
                  <p className="text-xs text-slate-500 mt-1">Fill in the technical parameters below for immediate response.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Vikramaditya Singh"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Skyline Infrastructure Ltd."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
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
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      placeholder="+91 98123 45678"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
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
                      placeholder="vikram@skylineinfra.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      City / State of Delivery *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. New Delhi, NCR"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Product Interest *
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                    >
                      {PRODUCTS_DATA.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="All Products / Bulk Distributorship">All Products / Bulk Distributorship</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Specific Requirements or Tonnage
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify target diameter, wall schedule, coil or straight lengths, or dispatch schedule..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-600/20 transition cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Official Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
