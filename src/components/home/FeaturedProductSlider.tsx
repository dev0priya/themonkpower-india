"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Shield } from "lucide-react";
import { PRODUCTS_DATA } from "@/data/products";

export default function FeaturedProductSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950 border border-orange-800 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Flagship Extrusions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Featured Product Showcase
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              High-demand industrial piping specifications ready for immediate dispatch.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-sky-600 hover:border-sky-500 flex items-center justify-center transition cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-sky-600 hover:border-sky-500 flex items-center justify-center transition cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 snap-start bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-sky-500/80 transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] bg-slate-700 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/80 text-sky-400 border border-white/10 backdrop-blur-md">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {product.tagline}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-700/60 space-y-1.5 text-xs text-slate-300">
                    <p className="flex items-center justify-between">
                      <span className="text-slate-400">Available Sizes:</span>
                      <span className="font-semibold text-white">{product.specifications[0]?.value.slice(0, 18)}</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-slate-400">Pressure:</span>
                      <span className="font-semibold text-white">{product.specifications[1]?.value.slice(0, 18)}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-700/60">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-700 hover:bg-sky-600 text-white font-bold text-xs tracking-wider uppercase transition"
                  >
                    <span>View Technical Specs</span>
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
