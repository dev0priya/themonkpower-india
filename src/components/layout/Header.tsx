"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { COMPANY_DATA } from "@/data/company";
import { PRODUCTS_DATA } from "@/data/products";
import MobileMenu from "./MobileMenu";
import QuickQuoteModal from "../common/QuickQuoteModal";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Clock
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar for Desktop */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>New Delhi, India (Pan-India Logistics)</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_DATA.workingHours}</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 font-medium">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>100% Lead-Free Virgin Compounds</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_DATA.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-sky-400 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_DATA.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_DATA.salesEmail}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-sky-400 transition"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_DATA.salesEmail}</span>
            </a>
            <Link
              href="/work-with-us"
              className="text-orange-400 hover:text-orange-300 font-bold transition flex items-center gap-1"
            >
              <span>Distributor Portal</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200"
            : "bg-white py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
            <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="The Monk Power India Logo"
                width={110}
                height={90}
                priority
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-black tracking-tight text-slate-900 leading-none group-hover:text-sky-700 transition">
                THE MONK POWER
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] sm:text-[11px] font-black tracking-widest text-sky-600 uppercase">
                  INDIA
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  PIPES &amp; POLYMERS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAVIGATION.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const hasSub = item.hasDropdown;

              if (item.name === "Products") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown("Products")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition ${
                        isActive
                          ? "text-sky-700 bg-sky-50"
                          : "text-slate-700 hover:text-sky-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === "Products" ? "rotate-180 text-sky-600" : "text-slate-400"
                        }`}
                      />
                    </Link>

                    {/* Products Mega Dropdown */}
                    {activeDropdown === "Products" && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                          <div>
                            <p className="text-xs font-bold text-sky-600 uppercase tracking-wider">Certified Product Lines</p>
                            <h4 className="text-base font-extrabold text-slate-900">Industrial &amp; Infrastructure Piping Solutions</h4>
                          </div>
                          <Link
                            href="/products"
                            className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 hover:underline"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>View Full Catalogue</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {PRODUCTS_DATA.map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.slug}`}
                              onClick={() => setActiveDropdown(null)}
                              className="group p-2.5 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200 flex items-start gap-3"
                            >
                              <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 relative border border-slate-200">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  sizes="40px"
                                  className="object-cover group-hover:scale-110 transition duration-300"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="text-xs font-bold text-slate-900 group-hover:text-sky-700 truncate">
                                    {product.name}
                                  </p>
                                  {product.isPopular && (
                                    <span className="text-[9px] font-extrabold px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {product.tagline}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Bottom prompt in mega menu */}
                        <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 rounded-xl p-3 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                            <Cpu className="w-4 h-4 text-sky-600" />
                            <span>Need custom diameter or bulk institutional manufacturing run?</span>
                          </div>
                          <button
                            onClick={() => {
                              setActiveDropdown(null);
                              setQuoteModalOpen(true);
                            }}
                            className="text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg transition"
                          >
                            Consult Engineering
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (hasSub) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition ${
                        isActive
                          ? "text-sky-700 bg-sky-50"
                          : "text-slate-700 hover:text-sky-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180 text-sky-600" : "text-slate-400"
                        }`}
                      />
                    </Link>

                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {item.dropdownItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block p-2.5 rounded-lg hover:bg-slate-50 transition"
                          >
                            <p className="text-xs font-bold text-slate-900 hover:text-sky-700">{sub.name}</p>
                            {sub.description && (
                              <p className="text-[11px] text-slate-500 mt-0.5">{sub.description}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                    isActive
                      ? "text-sky-700 bg-sky-50 font-bold"
                      : "text-slate-700 hover:text-sky-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition duration-200 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Get a Quote</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      {/* Global Quote Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
