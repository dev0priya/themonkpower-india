import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ShieldCheck, 
  Activity, 
  Gauge, 
  Thermometer, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck2,
  Microscope,
  FlaskConical
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Quality Assurance & Testing | Zero-Defect Standards",
  description:
    "The Monk Power India quality assurance protocols: hydrostatic burst testing, Izod impact resistance, heat reversion ovens, and dimensional inspection.",
};

const LAB_TESTS = [
  {
    name: "Hydrostatic Sustained Pressure & Burst Test",
    description: "Evaluates short-term hydraulic burst pressure and sustained 1,000-hour stress testing at 20°C and 60°C to verify pipe hoop tensile strength and fatigue life.",
    frequency: "Every Production Batch",
    parameters: "Tests yield point, expansion resistance, and zero-leakage threshold under intense hydraulic pressures.",
  },
  {
    name: "Falling Dart & Izod Impact Resistance Test",
    description: "Specimens conditioned in chilled water baths are subjected to calibrated falling striker darts to verify ductile behavior without brittle shatter.",
    frequency: "Continuous In-Line Batch Testing",
    parameters: "Verifies impact toughness under mechanical loads, transportation vibration, and rocky trench backfilling.",
  },
  {
    name: "Heat Reversion & Longitudinal Stability Test",
    description: "Pipe sections are suspended in high-precision laboratory convection ovens at 150°C to assess internal molecular residual stresses.",
    frequency: "Daily Extrusion Verification",
    parameters: "Maximum longitudinal shrinkage < 5%, preventing dimensional deformation under extreme climatic cycles.",
  },
  {
    name: "Opacity & Light Transmission Testing",
    description: "Optical laboratory sensors verify that pipe walls permit < 0.2% light transmission, preventing internal algae or biological colonization.",
    frequency: "Potable Water & Irrigation Lines",
    parameters: "Ensures complete optical shielding for hygienic potable drinking water and clean irrigation lines.",
  },
  {
    name: "360-Degree Ultrasonic Wall Thickness & Ovality",
    description: "Automated digital micrometers measure internal diameter, external diameter, wall thickness, and socket taper dimensions.",
    frequency: "100% In-Line Continuous Scanning",
    parameters: "Maintains strict concentricity tolerances within ±0.05 mm, guaranteeing airtight solvent weld joints.",
  },
  {
    name: "Chemical Immersion & Leaching Analysis",
    description: "Pipe specimens are exposed to standardized acidic, alkaline, and potable water testing solutions to ensure zero heavy-metal leaching.",
    frequency: "Raw Material & Resin Formulation Verification",
    parameters: "Confirms non-toxicity and complete resistance to potable chlorine, ground sulfates, and agricultural nitrates.",
  },
];

export default function QualityAssurancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/manufacturing/quality-lab.jpg"
            alt="Quality Control Testing Laboratory"
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
              <span>The Monk Power India</span>
              <span>/</span>
              <span className="text-white">Quality Assurance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Quality Assurance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
                &amp; Testing Protocols
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Our five-stage zero-defect framework ensures that every meter of pipe leaving our facility delivers certified burst strength, uniform wall thickness, and lead-free potable safety.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Stage Zero-Tolerance Quality Framework */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Multi-Stage Verification</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our 5-Stage Quality Framework
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Total quality management starting from chemical raw materials through final warehouse dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">Stage 1</span>
                <h4 className="text-base font-bold text-slate-900 mt-3 mb-1">Raw Material Influx</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Incoming resin bulk density, moisture content, and K-value testing of virgin suspension PVC polymer.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-slate-500">
                Resin Purity Checked
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">Stage 2</span>
                <h4 className="text-base font-bold text-slate-900 mt-3 mb-1">Melt Homogeneity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Continuous PID thermal zone tracking to prevent polymer thermal degradation or discoloration during extrusion.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-slate-500">
                Zero Polymer Degradation
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">Stage 3</span>
                <h4 className="text-base font-bold text-slate-900 mt-3 mb-1">In-Line Ultrasonic</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated 360° laser and ultrasonic scanning ensuring uniform wall thickness and zero cross-sectional ovality.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-slate-500">
                ±0.05 mm Concentricity
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">Stage 4</span>
                <h4 className="text-base font-bold text-slate-900 mt-3 mb-1">Destructive Testing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hydrostatic burst chambers and falling dart impact tests to verify hoop tensile strength and fracture resistance.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-slate-500">
                100% Burst Compliance
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">Stage 5</span>
                <h4 className="text-base font-bold text-slate-900 mt-3 mb-1">Lot Traceability</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Laser inkjet lot marking with batch numbers, wall schedule, and standards adherence for complete field accountability.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-slate-500">
                Complete Batch Traceability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-House Testing Laboratory Equipment */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Microscope className="w-3.5 h-3.5 text-sky-600" />
              <span>Laboratory Testing Equipment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              In-House Chemical &amp; Mechanical Testing Suite
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Our internal laboratory is equipped with calibrated testing machinery aligned with Indian Standards (IS) and ASTM international testing criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LAB_TESTS.map((test, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
                      {test.frequency}
                    </span>
                    <FlaskConical className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {test.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {test.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <strong className="text-slate-800">Critical Check:</strong> {test.parameters}
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Assurance Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Material Test Certificate (MTC) Guarantee</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Every dispatch includes batch test certificates verifying hydrostatic burst pressure and chemical purity.
                </p>
              </div>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wider uppercase transition whitespace-nowrap"
            >
              <span>Request Sample / Test Report</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
