import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

const INDUSTRIES = [
  {
    title: "Agriculture & Micro-Irrigation",
    description: "Agricultural rigid PVC pipes, sub-mains, and spiral suction lines delivering high discharge with reduced pump energy consumption.",
    image: "/images/industries/agriculture.jpg",
    link: "/products/agricultural-pipes",
    tag: "Irrigation & Farming",
  },
  {
    title: "Civil & High-Rise Construction",
    description: "Lead-free UPVC pressure pipes and Schedule 40/80 fittings engineered for continuous high-pressure multi-story water risers.",
    image: "/images/industries/construction.jpg",
    link: "/products/upvc-plumbing-pipes",
    tag: "Building Services",
  },
  {
    title: "Electrical & Telecom Infrastructure",
    description: "Flame-retardant rigid PVC conduits offering superior dielectric insulation and compressive strength for concealed slab casting.",
    image: "/images/industries/electrical.jpg",
    link: "/products/conduit-pipes",
    tag: "Power & Cable Routing",
  },
  {
    title: "Municipal & Civil Water Utilities",
    description: "High-volume water conveyance, storm drainage, and sewage disposal systems with leak-proof elastomeric ring and solvent joints.",
    image: "/images/industries/water-management.jpg",
    link: "/products/upvc-plumbing-pipes",
    tag: "Potable & Waste Water",
  },
  {
    title: "Industrial & Chemical Processing",
    description: "Corrosion-resistant PVC piping resisting acid, alkali, and chemical sludges in manufacturing plants, electroplating, and effluent lines.",
    image: "/images/industries/industrial.jpg",
    link: "/products/suction-hose-pipes",
    tag: "Chemical Fluid Logistics",
  },
  {
    title: "Borewells & Deep Water Extraction",
    description: "Heavy collapse-resistant casing and slotted screen pipes protecting deep aquifers and submersible pumps from ground cave-ins.",
    image: "/images/industries/borewell.jpg",
    link: "/products/casing-pipes",
    tag: "Subterranean Groundwater",
  },
];

export default function IndustriesServed() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-sky-400" />
            <span>Versatile Sector Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Industries Powered by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-orange-400">
              The Monk Power India
            </span>
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            Our engineered polymer systems provide the backbone for critical fluid transmission, water conservation, and electrical infrastructure across India.
          </p>
        </div>

        {/* 6-Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-850 shadow-lg hover:border-sky-500/80 transition-all duration-300 flex flex-col h-[340px]"
            >
              {/* Background Image */}
              <Image
                src={ind.image}
                alt={ind.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30 group-hover:via-slate-950/60 transition-all" />

              {/* Card Content */}
              <div className="relative z-10 p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded border border-sky-800/60 backdrop-blur-md">
                    {ind.tag}
                  </span>
                  <h3 className="text-xl font-black text-white mt-3 group-hover:text-sky-300 transition">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={ind.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 group-hover:text-orange-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>View Recommended Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
