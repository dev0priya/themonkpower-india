"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Factory, 
  ShieldAlert,
  Headphones
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { PRODUCTS_DATA } from "@/data/products";

export default function ContactUsClient() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    inquiryType: "Commercial Rate Quote",
    productInterest: PRODUCTS_DATA[0].name,
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
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/manufacturing/plant-overview.jpg"
            alt="Contact The Monk Power India"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Connect With Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-orange-400">
                Commercial &amp; Technical Desk
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              We welcome inquiries from plumbing contractors, institutional project developers, agricultural societies, and prospective wholesale distributors across India.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Strip */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Direct Telephone</h4>
                <p className="text-xs text-slate-500 mt-0.5">Mon - Sat: 9:00 AM - 6:30 PM</p>
                <a
                  href={`tel:${COMPANY_DATA.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-sm font-bold text-sky-700 hover:underline block mt-2"
                >
                  {COMPANY_DATA.phone}
                </a>
                <a
                  href={`tel:${COMPANY_DATA.alternatePhone.replace(/[^0-9+]/g, "")}`}
                  className="text-xs text-slate-600 hover:text-sky-700 block mt-0.5"
                >
                  Alternate: {COMPANY_DATA.alternatePhone}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Email Communications</h4>
                <p className="text-xs text-slate-500 mt-0.5">Response within 2-4 business hours</p>
                <a
                  href={`mailto:${COMPANY_DATA.salesEmail}`}
                  className="text-sm font-bold text-sky-700 hover:underline block mt-2"
                >
                  {COMPANY_DATA.salesEmail}
                </a>
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="text-xs text-slate-600 hover:text-sky-700 block mt-0.5"
                >
                  General: {COMPANY_DATA.email}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Registered Office</h4>
                <p className="text-xs text-slate-500 mt-0.5">New Delhi Central Hub</p>
                <p className="text-xs text-slate-700 font-medium mt-2 leading-relaxed">
                  {COMPANY_DATA.corporateAddress.line1}, {COMPANY_DATA.corporateAddress.city} - {COMPANY_DATA.corporateAddress.pincode}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Grid: Form & Location Details */}
      <section className="py-16 lg:py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                  Online Communications Form
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Send an Official Message</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Specify your piping diameter, pressure class, or supply destination.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Message Dispatched!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry regarding <strong className="text-slate-900">{formData.productInterest}</strong> has been assigned to our regional sales officer.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alok Singhania"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Company / Contractor Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Singhania Builders"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98000 12345"
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alok@singhaniabuilders.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        City / Dispatch Destination *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. New Delhi / Gurugram"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Product of Interest *
                      </label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      >
                        {PRODUCTS_DATA.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="All Products / Project Supply">All Products / Project Supply</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Technical Details / Project Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify sizes, estimated meters/bundles, schedule (Sch 40/80), delivery timeline..."
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
                          <span>Submit Official Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Locations & Verification Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Registered Corporate Office Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Corporate &amp; Registered Office</h4>
                    <span className="text-[10px] font-semibold text-sky-600 uppercase">New Delhi, India</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-1.5 pl-1">
                  <p className="font-semibold text-slate-800">{COMPANY_DATA.legalName}</p>
                  <p>{COMPANY_DATA.corporateAddress.line1}</p>
                  <p>{COMPANY_DATA.corporateAddress.line2}</p>
                  <p>{COMPANY_DATA.corporateAddress.city}, {COMPANY_DATA.corporateAddress.state} - {COMPANY_DATA.corporateAddress.pincode}, India</p>
                </div>
              </div>

              {/* Manufacturing Plant Location Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Extrusion Works &amp; Plant</h4>
                    <span className="text-[10px] font-semibold text-orange-600 uppercase">Delhi NCR Manufacturing Zone</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-1.5 pl-1">
                  <p className="font-semibold text-slate-800">{COMPANY_DATA.manufacturingPlant.line1}</p>
                  <p>{COMPANY_DATA.manufacturingPlant.line2}</p>
                  <p>{COMPANY_DATA.manufacturingPlant.city}, {COMPANY_DATA.manufacturingPlant.state} - {COMPANY_DATA.manufacturingPlant.pincode}, India</p>
                </div>
              </div>

              {/* Interactive Visual Map Representation */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>Pan-India Strategic Hub</span>
                  </h4>
                  <span className="text-[10px] font-bold text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                    Active Logistics
                  </span>
                </div>

                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Image
                    src="/images/manufacturing/plant-overview.jpg"
                    alt="Plant Location Map Graphic"
                    fill
                    sizes="400px"
                    className="object-cover opacity-40"
                  />
                  <div className="relative z-10 text-center p-4">
                    <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto mb-2 animate-bounce">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold text-white">New Delhi &amp; NCR Logistics Hub</p>
                    <p className="text-[10px] text-slate-300 mt-0.5">Connecting Highways to Northern &amp; Central India</p>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <p>
                    {COMPANY_DATA.establishedNotice}. On-site plant visits are organized by prior appointment for accredited buyers.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
