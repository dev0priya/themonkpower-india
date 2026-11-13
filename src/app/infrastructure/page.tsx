import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Cpu, 
  Factory, 
  Settings, 
  Sliders, 
  ShieldCheck, 
  Thermometer, 
  Layers, 
  Boxes, 
  ArrowRight,
  Sparkles,
  MapPin
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Manufacturing Infrastructure | Extrusion Lines & Technology",
  description:
    "Explore The Monk Power India manufacturing infrastructure — high-speed multi-screw extrusion lines, online ultrasonic wall thickness controls, and vacuum calibration.",
};

const INFRASTRUCTURE_SECTIONS = [
  {
    title: "High-Output Twin & Single Screw Extruders",
    description: "Equipped with high-torque gearboxes and nitrided bimetallic screw barrels. Computerized PID multi-zone temperature heating zones prevent thermal degradation of the PVC resin, delivering a uniform, homogenous melt at maximum plasticizing rates.",
    specs: ["Bimetallic nitrided barrels", "Multi-zone PID micro-controllers", "High melt homogeneity", "Energy-efficient AC drive motors"],
    image: "/images/manufacturing/extrusion-line.jpg",
  },
  {
    title: "Multi-Chamber Vacuum Sizing & Spray Cooling",
    description: "Post-extrusion sizing is carried out in heavy-gauge stainless steel vacuum tanks. Water spray manifolds at calibrated pressures cool the molten polymer rapidly to lock in precise outside diameters, completely eliminating ovality or wall sagging.",
    specs: ["Heavy stainless steel construction", "Multi-stage vacuum pressure controls", "Uniform 360° water spray manifolds", "Zero ovality calibration"],
    image: "/images/manufacturing/plant-overview.jpg",
  },
  {
    title: "Continuous In-Line Ultrasonic Gauging & Haul-Off",
    description: "Automated multi-caterpillar haul-off units ensure smooth, vibration-free pulling synchronized with extruder speed. Ultrasonic scanners measure wall thickness around the entire 360-degree circumference, instantly detecting any deviation.",
    specs: ["Continuous 360° laser/ultrasonic scanning", "Synchronized multi-track caterpillars", "Automatic thickness feedback loop", "Real-time SPC statistical monitoring"],
    image: "/images/manufacturing/quality-lab.jpg",
  },
  {
    title: "Planetary Swarf-Free Cutting & Automatic Belling",
    description: "High-precision planetary saws execute clean, chamfered cuts without generating polymer swarf. Inline socketing machines heat and thermoform Selfit solvent sockets and Ringfit elastomeric rubber-ring grooves with perfect dimensional tolerances.",
    specs: ["Swarf-free smooth planetary cuts", "Automatic online chamfering", "Dual socketing (Solvent & Rubber-Ring)", "Consistent bell mouth depth"],
    image: "/images/manufacturing/warehouse.jpg",
  },
];

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/manufacturing/plant-overview.jpg"
            alt="The Monk Power India Extrusion Facility"
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
              <span className="text-white">Our Infrastructure</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Manufacturing Infrastructure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-orange-400">
                &amp; Extrusion Engineering
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Equipped with high-performance multi-screw extrusion lines, automated closed-loop vacuum cooling, and computerized wall thickness verification to produce consistent industrial pipes.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Overview & Factual Verification */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Extrusion Plant Facilities</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Advanced extrusion bays optimized for continuous 24/7 manufacturing of PVC, UPVC, conduits, and hoses.
                </p>
                <span className="inline-block mt-2 text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                  High-Precision Tooling
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Computerized Process Control</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Real-time PLC-driven thermal management across barrel zones, melt transducers, and vacuum calibration chambers.
                </p>
                <span className="inline-block mt-2 text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                  SPC Quality Tracking
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Boxes className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Central Logistics &amp; Storage</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Organized high-capacity finished product storage with dedicated shipping bays for fast multi-ton truck dispatches.
                </p>
                <span className="inline-block mt-2 text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                  Pan-India Freight
                </span>
              </div>
            </div>

          </div>

          {/* Plant Location Note */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>
                <strong>Manufacturing Corridor:</strong> {COMPANY_DATA.manufacturingPlant.line1}, {COMPANY_DATA.manufacturingPlant.city}, India.
              </span>
            </div>
            <span className="text-[11px] bg-sky-50 text-sky-700 px-2.5 py-1 rounded font-semibold border border-sky-200">
              [Manufacturing Works Infrastructure]
            </span>
          </div>
        </div>
      </section>

      {/* Deep-Dive Technical Machinery Breakdown */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              State-of-the-Art Production Machinery
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Explore how each stage of our manufacturing machinery contributes to flawless pipe concentricity, burst strength, and surface finish.
            </p>
          </div>

          {INFRASTRUCTURE_SECTIONS.map((sec, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <span className="text-xs font-black uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Phase 0{idx + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {sec.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {sec.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {sec.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 group">
                  <Image
                    src={sec.image}
                    alt={sec.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            Schedule a Plant Tour or Technical Verification
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Institutional buyers, government contractors, and prospective regional distributors are invited to inspect our manufacturing lines and quality testing laboratory.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm tracking-wide shadow-lg transition"
            >
              Request Plant Visit
            </Link>
            <Link
              href="/quality-assurance"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition"
            >
              View Quality Testing Protocols
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
