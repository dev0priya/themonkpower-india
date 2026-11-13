"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { COMPANY_DATA } from "@/data/company";
import { ChevronDown, ChevronRight, X, Phone, Mail, FileText, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export default function MobileMenu({ isOpen, onClose, onOpenQuote }: MobileMenuProps) {
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleDropdown = (name: string) => {
    setExpandedDropdown(expandedDropdown === name ? null : name);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-1 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="The Monk Power India Logo"
                width={74}
                height={60}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div>
              <p className="font-extrabold text-sm tracking-wider leading-tight text-white">THE MONK POWER</p>
              <p className="text-[10px] text-sky-400 font-semibold tracking-widest">INDIA · PIPES &amp; POLYMERS</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto py-3 px-4 space-y-1">
          {MAIN_NAVIGATION.map((item) => {
            const hasSub = item.hasDropdown && item.dropdownItems && item.dropdownItems.length > 0;
            const isExpanded = expandedDropdown === item.name;

            return (
              <div key={item.name} className="border-b border-slate-100 last:border-none pb-1">
                {hasSub ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between py-3 px-2 text-left font-semibold text-slate-800 hover:text-sky-600 rounded-lg hover:bg-slate-50 transition"
                    >
                      <span className="text-base">{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-sky-600" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="ml-3 pl-3 border-l-2 border-sky-100 py-1 space-y-1 mb-2">
                        {item.dropdownItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={onClose}
                            className="block py-2 px-2 text-sm text-slate-600 hover:text-sky-600 hover:bg-sky-50/50 rounded-md transition"
                          >
                            <div className="font-medium text-slate-800 flex items-center justify-between">
                              <span>{sub.name}</span>
                              {sub.badge && (
                                <span className="text-[10px] bg-sky-100 text-sky-800 font-bold px-1.5 py-0.5 rounded">
                                  {sub.badge}
                                </span>
                              )}
                            </div>
                            {sub.description && (
                              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{sub.description}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-3 px-2 text-base font-semibold text-slate-800 hover:text-sky-600 rounded-lg hover:bg-slate-50 transition"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA & Contact info in mobile drawer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm tracking-wide shadow-md transition"
          >
            <FileText className="w-4 h-4" />
            <span>Request Fast Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 text-xs text-slate-600 space-y-2">
            <a
              href={`tel:${COMPANY_DATA.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-slate-700 font-medium hover:text-sky-600"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{COMPANY_DATA.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_DATA.email}`}
              className="flex items-center gap-2 text-slate-700 font-medium hover:text-sky-600"
            >
              <Mail className="w-3.5 h-3.5 text-sky-600" />
              <span>{COMPANY_DATA.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
