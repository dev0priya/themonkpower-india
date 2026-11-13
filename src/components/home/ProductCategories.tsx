import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";
import { PRODUCTS_DATA } from "@/data/products";

export default function ProductCategories() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Engineered Piping Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Comprehensive Product Portfolio
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Precision-manufactured polymer piping systems tailored for civil construction, agricultural irrigation, residential plumbing, and electrical cable shielding.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-sky-600 text-slate-900 hover:text-sky-600 font-bold text-sm shadow-sm transition whitespace-nowrap self-start md:self-end"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white border border-white/10">
                    {product.category}
                  </span>
                </div>
                {product.isPopular && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-orange-600 text-white shadow-md">
                      Flagship
                    </span>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-sky-700 mt-1">
                    {product.tagline}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Highlights Pill */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        ✓ {feat.slice(0, 32)}...
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>IS/ASTM Tested</span>
                  </span>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Specifications</span>
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
