import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Gauge, Activity, Sparkles, CheckCircle } from "lucide-react";

const TESTING_PROTOCOLS = [
  {
    title: "Hydrostatic Sustained Pressure Test",
    parameters: "Evaluates short-term burst and 1,000-hour sustained internal hydrostatic pressure at elevated temperatures (20°C & 60°C) to ensure creep resistance.",
    metric: "100% Batch Sample Testing",
  },
  {
    title: "Izod & Falling Dart Impact Resistance",
    parameters: "Subjecting cooled pipe specimens to high-velocity mechanical striker weights to verify polymer molecular impact toughness and ductility.",
    metric: "Zero Shatter Tolerance",
  },
  {
    title: "Heat Reversion & Longitudinal Stability",
    parameters: "High-precision laboratory convection ovens expose pipe segments to 150°C thermal cycles to verify molecular stress relaxation < 5%.",
    metric: "Thermal Stress Verified",
  },
  {
    title: "Dimensional Wall Thickness & Ovality",
    parameters: "360-degree digital micrometer inspection verifying inside diameter, outside diameter, wall uniformity, and socket entry dimensions.",
    metric: "±0.05 mm Precision",
  },
];

export default function QualityCommitment() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero-Defect Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Our Rigorous Quality &amp; Testing Commitment
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At The Monk Power India, quality is not a post-production check — it is embedded into every step of polymer formulation, temperature zoning, and vacuum extrusion.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Lead-free, food-grade virgin compounding resins</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Complete raw material moisture and K-value inspection</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Continuous in-line dimensional &amp; ovality verification</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/quality-assurance"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition"
                >
                  <span>Explore Quality Assurance Lab</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Protocol Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TESTING_PROTOCOLS.map((protocol, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 mb-2">
                    {protocol.metric}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    {protocol.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {protocol.parameters}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
