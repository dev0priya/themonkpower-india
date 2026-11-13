import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Shield, Cpu, Award } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function CompanyIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5 text-sky-600" />
              <span>Industrial Polymer Manufacturing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Engineering Reliable Flow. <br />
              <span className="text-sky-600">Building Stronger Futures.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">{COMPANY_DATA.name}</strong> specializes in the precision engineering and extrusion of heavy-duty thermoplastic piping systems. Operating out of New Delhi with nationwide dispatch infrastructure, we supply vital fluid and electrical infrastructure across India.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our core manufacturing portfolio encompasses high-pressure <span className="font-semibold text-slate-800">UPVC plumbing systems</span>, spiral reinforced <span className="font-semibold text-slate-800">PVC suction hoses</span>, flame-retardant <span className="font-semibold text-slate-800">electrical conduits</span>, and high-discharge <span className="font-semibold text-slate-800">agricultural irrigation pipes</span>. Every pipe length is compounded using 100% virgin polymer resin with zero heavy-metal lead stabilizers, ensuring long-term environmental safety and hydraulic durability.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">100% Lead-Free Compounding</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Potable drinking water safety compliant</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Hydrostatic Pressure Tested</h4>
                  <p className="text-xs text-slate-500 mt-0.5">High burst resistance and zero leak joints</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Vacuum Sizing Extrusion</h4>
                  <p className="text-xs text-slate-500 mt-0.5">High concentricity and uniform wall thickness</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Nationwide Supply Chain</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Direct institutional and dealer dispatch</p>
                </div>
              </div>
            </div>

            {/* CTA and Read More */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-md transition"
              >
                <span>Read Full Corporate Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm tracking-wide transition"
              >
                <span>View Manufacturing Facility</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="/images/manufacturing/extrusion-line.jpg"
                alt="The Monk Power India Precision Extrusion Line"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Bottom image overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-400">High-Tech Production</p>
                <p className="text-lg font-black mt-1">Multi-Screw Extrusion Lines</p>
                <p className="text-xs text-slate-300 mt-1">
                  Computerized vacuum sizing tanks maintaining dimensional tolerances within ±0.05 mm.
                </p>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100 hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Purity Standard</p>
                <p className="text-base font-extrabold text-slate-900">Lead-Free Certified</p>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white rounded-xl shadow-xl p-4 border border-slate-800 hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-400">Quality Framework</p>
                <p className="text-base font-extrabold text-white">100% Burst Tested</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
