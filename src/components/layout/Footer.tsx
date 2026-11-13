import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { FOOTER_PRODUCT_LINKS, FOOTER_COMPANY_LINKS } from "@/data/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  FileCheck2,
  Globe
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="p-1.5 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="The Monk Power India Logo"
                  width={110}
                  height={90}
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white group-hover:text-sky-400 transition">
                  THE MONK POWER
                </span>
                <span className="text-[10px] font-black tracking-widest text-sky-400 uppercase">
                  INDIA · PIPES &amp; POLYMERS
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Engineering reliable fluid flow and resilient electrical protection. Delivering high-precision UPVC plumbing, agricultural irrigation piping, fire-retardant conduits, and heavy-duty suction hoses across India.
            </p>

            {/* Compliance Badge */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
              <FileCheck2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-semibold text-slate-200">Adherence to Engineering Standards</p>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  100% Virgin Polymer Compounding, Lead-Free Potable Water Formulations, and Hydrostatic Burst Testing.
                </p>
              </div>
            </div>

            {/* Social Icons via Clean Inline SVGs */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href={COMPANY_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                </svg>
              </a>
              <a
                href={COMPANY_DATA.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={COMPANY_DATA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Products Range (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Product Catalogue
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_PRODUCT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Verification (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Contact &amp; Works
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Registered Corporate Office:</p>
                  <p className="text-slate-400 mt-0.5">
                    {COMPANY_DATA.corporateAddress.line1}, {COMPANY_DATA.corporateAddress.city} - {COMPANY_DATA.corporateAddress.pincode}, {COMPANY_DATA.corporateAddress.country}
                  </p>
                  <span className="inline-block mt-1 text-[10px] bg-slate-900 border border-slate-800 text-sky-300 px-1.5 py-0.5 rounded">
                    Verified Business Hub
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Direct Inquiries:</p>
                  <a
                    href={`tel:${COMPANY_DATA.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-slate-400 hover:text-white transition block mt-0.5"
                  >
                    {COMPANY_DATA.phone}
                  </a>
                  <a
                    href={`tel:${COMPANY_DATA.alternatePhone.replace(/[^0-9+]/g, "")}`}
                    className="text-slate-400 hover:text-white transition block"
                  >
                    {COMPANY_DATA.alternatePhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Email Communications:</p>
                  <a
                    href={`mailto:${COMPANY_DATA.salesEmail}`}
                    className="text-slate-400 hover:text-white transition block mt-0.5"
                  >
                    {COMPANY_DATA.salesEmail}
                  </a>
                  <a
                    href={`mailto:${COMPANY_DATA.email}`}
                    className="text-slate-400 hover:text-white transition block"
                  >
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Operational Hours:</p>
                  <p className="text-slate-400 mt-0.5">{COMPANY_DATA.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Notices */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              &copy; 2026 <span className="text-slate-300 font-semibold">{COMPANY_DATA.legalName}</span>. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <p className="text-[11px] text-slate-400">
              {COMPANY_DATA.establishedNotice}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/contact-us" className="hover:text-slate-300 transition">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
