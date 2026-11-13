import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Shield, ArrowLeft } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | The Monk Power India",
  description: "Corporate privacy policy regarding customer inquiries, commercial transactions, and data handling.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Corporate Privacy Policy</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Last Updated: November 2026 · {COMPANY_DATA.legalName}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Overview &amp; Commitment</h2>
            <p>
              At <strong>{COMPANY_DATA.legalName}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Company&rdquo;), we respect the privacy of our business associates, institutional clients, channel partners, and digital visitors. This policy outlines how information submitted via our digital channels and commercial correspondence is collected, protected, and utilized.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p className="mb-2">We collect information provided directly by you when submitting commercial quote requests, dealership applications, or technical inquiries:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li>Full name, official designation, and business entity name.</li>
              <li>Corporate email address, phone numbers, and physical delivery address.</li>
              <li>Target piping specifications, quantity estimates, and trade financial references.</li>
              <li>Technical queries, tender schedules, and bill of quantities (BOQ).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Purpose of Data Processing</h2>
            <p>
              Data collected is utilized strictly to provide commercial rate quotations, process purchase orders, conduct technical feasibility assessments, arrange freight logistics, and support warranty and quality assurance records. We never sell, rent, or trade your contact information with third-party marketing entities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Security &amp; Data Protection</h2>
            <p>
              We implement industry-standard electronic, managerial, and physical security measures to safeguard your commercial data against unauthorized access, loss, or alteration. All electronic communications sent through our portals are encrypted using Transport Layer Security (TLS).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Contact Information</h2>
            <p>
              For any questions regarding this Privacy Policy or our data protection protocols, please contact our legal and administrative desk at:
            </p>
            <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm">
              <p className="font-bold text-slate-900">{COMPANY_DATA.legalName}</p>
              <p>{COMPANY_DATA.corporateAddress.line1}, {COMPANY_DATA.corporateAddress.city} - {COMPANY_DATA.corporateAddress.pincode}, India</p>
              <p className="mt-1">Email: <a href={`mailto:${COMPANY_DATA.email}`} className="text-sky-600 font-semibold">{COMPANY_DATA.email}</a></p>
            </div>
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
