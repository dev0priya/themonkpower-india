"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, X, ZoomIn, Filter, Layers, Download, CheckCircle2 } from "lucide-react";

interface MediaItem {
  id: number;
  title: string;
  category: "Extrusion Infrastructure" | "Product Portfolio" | "Quality Lab" | "Field Deployments";
  image: string;
  caption: string;
}

const GALLERY_ITEMS: MediaItem[] = [
  {
    id: 1,
    title: "High-Speed Twin-Screw Extrusion Line",
    category: "Extrusion Infrastructure",
    image: "/images/manufacturing/extrusion-line.jpg",
    caption: "Automated multi-screw extrusion bay operating with computerized temperature feedback zoning and vacuum calibration tanks.",
  },
  {
    id: 2,
    title: "Automated Vacuum Calibration & Spray Cooling",
    category: "Extrusion Infrastructure",
    image: "/images/manufacturing/plant-overview.jpg",
    caption: "Heavy-gauge stainless steel vacuum cooling chambers ensuring uniform outer diameter crystallization without ovality.",
  },
  {
    id: 3,
    title: "In-House Hydrostatic Burst Pressure Test Rig",
    category: "Quality Lab",
    image: "/images/manufacturing/quality-lab.jpg",
    caption: "Testing chamber conducting destructive burst and sustained 1,000-hour hydrostatic hoop stress evaluation on batch samples.",
  },
  {
    id: 4,
    title: "Finished Goods Logistics Bay & Stockyard",
    category: "Extrusion Infrastructure",
    image: "/images/manufacturing/warehouse.jpg",
    caption: "Organized storage bays facilitating rapid high-tonnage freight loading and dispatch to North and Central Indian distribution centers.",
  },
  {
    id: 5,
    title: "Spiral Reinforced PVC Suction Hose Pipes",
    category: "Product Portfolio",
    image: "/images/products/suction-hose.jpg",
    caption: "Heavy-duty dual layer flexible matrix with embedded rigid PVC spiral helix for deep dewatering and agricultural pump suction.",
  },
  {
    id: 6,
    title: "UPVC Pressure Plumbing Pipes & Schedule 80 Profiles",
    category: "Product Portfolio",
    image: "/images/products/upvc-plumbing.jpg",
    caption: "100% lead-free ASTM Schedule 40 & 80 pipes formulated with calcium-zinc heat stabilizers for safe potable water distribution.",
  },
  {
    id: 7,
    title: "Precision Injection-Molded UPVC Fittings",
    category: "Product Portfolio",
    image: "/images/products/upvc-fittings.jpg",
    caption: "High-pressure tees, elbows, couplers, and brass transition fittings molded to tight dimensional tolerances.",
  },
  {
    id: 8,
    title: "Flame-Retardant Rigid PVC Electrical Conduits",
    category: "Product Portfolio",
    image: "/images/products/conduit-pipes.jpg",
    caption: "High-dielectric conduits with oxygen index > 30% preventing flame propagation along concealed concrete slab cable paths.",
  },
  {
    id: 9,
    title: "Modern Agricultural Micro-Irrigation Installation",
    category: "Field Deployments",
    image: "/images/industries/agriculture.jpg",
    caption: "High-discharge agricultural rigid PVC pipeline powering automated drip headers across commercial orchard acreage.",
  },
  {
    id: 10,
    title: "High-Rise Commercial MEP Plumbing Installation",
    category: "Field Deployments",
    image: "/images/industries/construction.jpg",
    caption: "Lead-free UPVC down-take mains and riser plumbing in a modern multi-story commercial development.",
  },
  {
    id: 11,
    title: "Deep Borewell Casing & Slotted Screen Placement",
    category: "Field Deployments",
    image: "/images/industries/borewell.jpg",
    caption: "High collapse-resistant threaded casing pipe deployed to 200m depth with sand-exclusion slotted screen pipes.",
  },
  {
    id: 12,
    title: "Municipal Water Distribution & Infrastructure",
    category: "Field Deployments",
    image: "/images/industries/water-management.jpg",
    caption: "Civil potable water supply and pipeline trenching utilizing high-integrity rigid PVC pipes.",
  },
];

export default function MediaGalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLightbox, setActiveLightbox] = useState<MediaItem | null>(null);

  const categories = [
    "All",
    "Extrusion Infrastructure",
    "Product Portfolio",
    "Quality Lab",
    "Field Deployments",
  ];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/manufacturing/plant-overview.jpg"
            alt="Corporate Media Gallery"
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
              <span className="text-white">Media &amp; Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Corporate &amp; Technical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-orange-400">
                Visual Media Gallery
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Explore photography documenting our extrusion lines, testing laboratories, finished product portfolios, and field infrastructure deployments across India.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-6 h-6 text-sky-600" />
                    </div>
                  </div>
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/80 text-white backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
            onClick={() => setActiveLightbox(null)}
          />
          <div className="relative max-w-4xl w-full bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl z-10 border border-slate-800 animate-in fade-in zoom-in-95 duration-200">
            {/* Top Bar */}
            <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800">
                  {activeLightbox.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold mt-1 text-white">{activeLightbox.title}</h3>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Frame */}
            <div className="relative aspect-[16/10] bg-slate-950">
              <Image
                src={activeLightbox.image}
                alt={activeLightbox.title}
                fill
                priority
                sizes="1000px"
                className="object-contain"
              />
            </div>

            {/* Caption */}
            <div className="p-5 bg-slate-900 border-t border-slate-800">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeLightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
