import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings, Sliders, ShieldCheck, Thermometer, Binary, RefreshCw } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Polymer Compounding",
    description: "Automated high-speed turbo mixing of suspension-grade PVC resin with calcium-zinc heat stabilizers, processing aids, and impact modifiers.",
    icon: RefreshCw,
  },
  {
    step: "02",
    title: "Multi-Screw Extrusion",
    description: "Computerized twin-screw extruders melt and homogenize the polymer melt under high pressure without thermal degradation.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Vacuum Calibration",
    description: "Intense multi-chamber vacuum sizing and stainless-steel spray cooling tanks freeze exact outer diameters with zero ovality.",
    icon: Sliders,
  },
  {
    step: "04",
    title: "Ultrasonic Gauging",
    description: "Continuous 360-degree online ultrasonic thickness measuring sensors detect wall thickness variations in real time.",
    icon: Binary,
  },
  {
    step: "05",
    title: "Planetary Cut & Belling",
    description: "Clean planetary swarf-free cutting followed by automatic inline thermoforming socketing (Selfit / Ringfit) for leak-proof joints.",
    icon: Thermometer,
  },
  {
    step: "06",
    title: "Lab Hydrostatic Burst Test",
    description: "Batch sample verification through sustained internal hydrostatic pressure and falling dart impact resistance testing.",
    icon: ShieldCheck,
  },
];

export default function ManufacturingExcellence() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Settings className="w-3.5 h-3.5 text-orange-600" />
              <span>Extrusion Technology &amp; Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Manufacturing Excellence &amp; Workflow
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Our automated extrusion infrastructure combines advanced multi-screw polymer processing with closed-loop vacuum cooling and online dimensional verification to ensure total consistency.
            </p>
          </div>

          <Link
            href="/infrastructure"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition whitespace-nowrap self-start lg:self-end"
          >
            <span>Explore Infrastructure Specs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Manufacturing Visuals Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
            <Image
              src="/images/manufacturing/plant-overview.jpg"
              alt="The Monk Power India Plant Interior"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-sky-400">Extrusion Bay</p>
              <h4 className="text-base font-bold">Continuous Extrusion Lines</h4>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
            <Image
              src="/images/manufacturing/quality-lab.jpg"
              alt="Quality Testing & Hydrostatic Burst Lab"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-400">Testing Laboratory</p>
              <h4 className="text-base font-bold">Hydrostatic Pressure Testing</h4>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
            <Image
              src="/images/manufacturing/warehouse.jpg"
              alt="Organized Finished Goods Warehouse & Logistics"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Dispatch Logistics</p>
              <h4 className="text-base font-bold">Nationwide Shipping Logistics</h4>
            </div>
          </div>
        </div>

        {/* 6-Step Workflow Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKFLOW_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-sky-300 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-sky-600/40">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm">
                      <Icon className="w-4 h-4 text-sky-600" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
