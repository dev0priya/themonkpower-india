"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/data/products";
import { 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Table, 
  Settings2,
  Wrench,
  Download,
  PhoneCall,
  Send,
  Sparkles
} from "lucide-react";
import QuickQuoteModal from "@/components/common/QuickQuoteModal";

interface ProductDetailClientProps {
  product: ProductItem;
  relatedProducts: ProductItem[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"specs" | "applications" | "jointing">("specs");
  
  // Dedicated in-page quote form state
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryQuantity, setInquiryQuantity] = useState("");

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Product Hero Banner */}
      <section className="bg-slate-950 text-white pt-10 pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-6 flex-wrap">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <span className="text-slate-400">{product.category}</span>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800">
                  {product.category}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Virgin Polymer</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-lg text-sky-400 font-semibold">
                {product.tagline}
              </p>

              <p className="text-base text-slate-300 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Color Options */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Available Colors:</span>
                <div className="flex items-center gap-2">
                  {product.colorOptions.map((c, i) => (
                    <span key={i} className="text-xs font-medium bg-slate-800 text-slate-200 px-2.5 py-1 rounded-md border border-slate-700">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-orange-600/30 transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Product Quotation</span>
                </button>
                <a
                  href="#technical-specs"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm tracking-wide border border-slate-700 transition"
                >
                  <span>View Sizing Chart</span>
                </a>
              </div>
            </div>

            {/* Right Product Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900 group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-950/80 text-white backdrop-blur-md border border-white/10">
                    Industrial Specification
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 lg:py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Columns: Specifications & Tabs */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Key Features List */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-sky-600" />
                  <span>Engineering Highlights &amp; Advantages</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {feat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div id="technical-specs" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                      <Table className="w-5 h-5 text-sky-600" />
                      <span>Dimensional &amp; Pressure Sizing Chart</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Standard factory production matrix (custom specifications available upon request).</p>
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full self-start">
                    {product.standardsCompliance.slice(0, 30)}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="py-3 px-4 rounded-l-lg font-bold">Nominal Size</th>
                        <th className="py-3 px-4 font-bold">Outer Diameter</th>
                        <th className="py-3 px-4 font-bold">Wall Thickness</th>
                        <th className="py-3 px-4 font-bold">Working Pressure</th>
                        <th className="py-3 px-4 rounded-r-lg font-bold">Standard Length</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.technicalTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition">
                          <td className="py-3.5 px-4 font-bold text-slate-900">{row.size}</td>
                          <td className="py-3.5 px-4 text-slate-600">{row.outerDiameter}</td>
                          <td className="py-3.5 px-4 text-slate-600">{row.wallThickness}</td>
                          <td className="py-3.5 px-4 font-semibold text-sky-700">{row.workingPressure}</td>
                          <td className="py-3.5 px-4 text-slate-600">{row.standardLength}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recommended Applications */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-sky-600" />
                  <span>Approved Applications &amp; Deployments</span>
                </h3>
                <div className="space-y-3">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {app}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jointing & Assembly Guidelines */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-sky-600" />
                  <span>Jointing &amp; Installation Methodology</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.jointingMethod}
                </p>
                <div className="mt-4 p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900 space-y-1">
                  <p className="font-bold">Installation Best Practice Tip:</p>
                  <p>
                    Ensure pipe ends are cut square and chamfered at 15 degrees. Always remove dirt and burrs before applying recommended primer or solvent weld cement.
                  </p>
                </div>
              </div>

            </div>

            {/* Right 4 Columns: Fast RFQ Box & Technical Assistance */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Inquiry Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg sticky top-24">
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                    Direct Quote
                  </span>
                  <h4 className="text-lg font-black text-slate-900 mt-1">Inquire About This Product</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Commercial rates &amp; dispatch lead-times</p>
                </div>

                {inquirySent ? (
                  <div className="py-6 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <p className="text-sm font-bold text-slate-900">Inquiry Logged!</p>
                    <p className="text-xs text-slate-500">
                      Our commercial representative will contact you via {inquiryPhone} with volume price breaks.
                    </p>
                    <button
                      onClick={() => setInquirySent(false)}
                      className="text-xs text-sky-600 font-bold underline"
                    >
                      Send another query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Anand Mehra"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="+91 98765 00000"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        value={inquiryQuantity}
                        onChange={(e) => setInquiryQuantity(e.target.value)}
                        placeholder="e.g. 2,000 meters / 50 bundles"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Price Break</span>
                    </button>
                  </form>
                )}

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                  <p className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
                    <span>Instant Call: +91 11 4500 8900</span>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Lead-free compounding with verified batch MTC included.
                  </p>
                </div>
              </div>

              {/* Related Products Recommendation */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Complementary Products
                </h4>
                <div className="space-y-3">
                  {relatedProducts.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/products/${rel.slug}`}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-slate-100 relative overflow-hidden flex-shrink-0 border border-slate-200">
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          sizes="48px"
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-900 group-hover:text-sky-600 truncate">
                          {rel.name}
                        </p>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {rel.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Global Quote Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={product.name}
      />
    </div>
  );
}
