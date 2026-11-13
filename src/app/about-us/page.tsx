import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Building2, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  Factory, 
  CheckCircle,
  FileText,
  Users
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Corporate Profile & Polymer Engineering",
  description:
    "Learn about The Monk Power India — our corporate genesis, 100% lead-free polymer compounding philosophy, and mission to deliver reliable piping systems across India.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero Banner */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/engineering-core.jpg"
            alt="The Monk Power India Corporate Overview"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>The Monk Power India</span>
              <span>/</span>
              <span className="text-white">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Engineering Reliable Flow. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-orange-400">
                Building Stronger Futures.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              We are an Indian polymer manufacturing enterprise dedicated to formulating and extruding high-integrity thermoplastic piping solutions for residential plumbing, infrastructure, agriculture, and electrical utilities.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Genesis & Story */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Corporate Genesis</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                A Modern Manufacturing Identity Grounded in Polymer Integrity
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                <strong className="text-slate-900">{COMPANY_DATA.name}</strong> was founded with a single uncompromising premise: modern Indian building and agricultural infrastructure demands piping systems that eliminate premature degradation, hazardous chemical leaching, and catastrophic joint failures.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Headquartered in New Delhi with logistical distribution channels spanning North and Central India, our operations focus on advanced polymer compounding (HSN 3917). We formulate unplasticized PVC (UPVC), plasticized vinyl matrices, and high-impact flame-retardant resins into specialized piping products that meet rigorous ASTM and Indian Standard performance parameters.
              </p>

              {/* Factual Notice Callout */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Enterprise Status &amp; Compliance Transparency</span>
                </p>
                <p>
                  {COMPANY_DATA.establishedNotice}. All corporate contracts, tenders, and wholesale dealer agreements are governed under commercial regulations with valid tax registrations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/3] bg-slate-100">
                <Image
                  src="/images/about/company-team.jpg"
                  alt="The Monk Power India Technical Leadership"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-sky-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Our Corporate Vision</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To stand as one of India's most dependable and technologically forward polymer piping manufacturers — celebrated for zero-defect production, lead-free potable water systems, and enduring engineering relationships across dealers, MEP consultants, and agricultural networks.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-orange-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Our Engineering Mission</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To continually invest in state-of-the-art multi-screw extrusion, closed-loop vacuum calibration, and 100% virgin polymer compounding. We aim to protect human health through non-toxic plumbing, empower Indian agriculture through high-efficiency irrigation, and safeguard electrical installations through flame-retardant conduits.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Manufacturing Philosophy */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Factory className="w-3.5 h-3.5 text-emerald-600" />
              <span>Core Operational Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Manufacturing Philosophy
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Every production batch adheres to rigorous polymer science guidelines designed to eliminate failures in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-sky-300 transition">
              <span className="text-3xl font-black text-sky-600/40">01</span>
              <h4 className="text-lg font-bold text-slate-900 mt-2 mb-2">Virgin Resin Compounding</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We formulate exclusively with virgin suspension PVC polymers without hazardous recycled regrinds that compromise tensile elongation and cause stress crack propagation under hydrostatic pressure surges.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-sky-300 transition">
              <span className="text-3xl font-black text-sky-600/40">02</span>
              <h4 className="text-lg font-bold text-slate-900 mt-2 mb-2">Zero-Tolerance Quality Testing</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From raw resin bulk density and K-value inspection to destructive hydrostatic burst chambers and impact drop tests, every production lot is verified before packaging and warehousing.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-sky-300 transition">
              <span className="text-3xl font-black text-sky-600/40">03</span>
              <h4 className="text-lg font-bold text-slate-900 mt-2 mb-2">Customer &amp; Trade Partnership</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe in long-term commercial relationships with our distributors and institutional buyers, providing transparent technical datasheets, guaranteed freight delivery schedules, and dedicated account managers.
              </p>
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-16 p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold">Interested in Partnering with The Monk Power India?</h4>
              <p className="text-sm text-slate-400 mt-1">Explore distributor dealerships or schedule a technical project consultation.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/work-with-us"
                className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm tracking-wide shadow-md transition"
              >
                Become a Distributor
              </Link>
              <Link
                href="/contact-us"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
