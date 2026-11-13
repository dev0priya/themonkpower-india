import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Commercial Terms & Supply Policies",
  description: "Terms and conditions governing quotation validity, orders, warranties, and dispatch of PVC pipe products.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Terms &amp; Conditions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Terms &amp; Conditions of Supply</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Applicable to all commercial quotations, purchase orders, and wholesale distributorship agreements.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Quotations &amp; Price Validity</h2>
            <p>
              Due to fluctuations in virgin PVC resin pricing and crude petroleum feedstocks, all written and verbal price quotations provided by <strong>{COMPANY_DATA.legalName}</strong> are valid for a standard period of seven (7) calendar days from the date of issue unless specified otherwise in formal tender schedules.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Order Confirmation &amp; Specifications</h2>
            <p>
              Orders are formally accepted only upon issuance of an official Proforma Invoice or Sales Confirmation signed by an authorized commercial officer. The buyer is responsible for verifying pipe diameters, wall schedules (e.g., Sch 40, Sch 80, Class 2), coil lengths, and color codes prior to dispatch.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Delivery, Freight &amp; Inspection</h2>
            <p>
              Unless expressly agreed as &ldquo;FOR Destination,&rdquo; goods are supplied on an Ex-Works basis. The consignee must inspect pipe bundles and coils upon receipt at the destination site. Any transit damage or quantity discrepancy must be documented on the freight lorry receipt (LR) and communicated to our logistics desk within 48 hours of arrival.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Quality Guarantee &amp; Manufacturer Warranty</h2>
            <p>
              We warrant that all products are manufactured from virgin polymer resins and conform to stated dimensional, hydrostatic burst, and tensile criteria. Our liability is strictly limited to the replacement of defective goods or credit note issuance following lab verification, and excludes consequential indirect losses.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Jurisdiction</h2>
            <p>
              Any disputes or legal proceedings arising out of commercial transactions with {COMPANY_DATA.legalName} shall be subject to the exclusive jurisdiction of the competent courts of New Delhi, India.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
