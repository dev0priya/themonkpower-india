"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PhoneCall, FileText, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import QuickQuoteModal from "../common/QuickQuoteModal";

export default function BusinessEnquiryCTA() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-600 via-orange-600 to-amber-700 text-white relative overflow-hidden shadow-inner">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            <div className="max-w-2xl text-center lg:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Pan-India Supply &amp; Dealership Network</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Looking for Reliable PVC Pipe Solutions?
              </h2>

              <p className="text-base sm:text-lg text-orange-100 leading-relaxed">
                Connect with our team to discuss your product requirements, bulk institutional tenders, or regional distributorship opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-2xl hover:shadow-black/40 transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText className="w-5 h-5 text-orange-400" />
                <span>Request a Quote</span>
              </button>

              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-sm sm:text-base tracking-wide shadow-xl transition transform hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-orange-600" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
