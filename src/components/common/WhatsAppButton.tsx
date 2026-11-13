"use client";

import React from "react";
import { COMPANY_DATA } from "@/data/company";

export default function WhatsAppButton() {
  const { number, defaultMessage } = COMPANY_DATA.whatsapp;
  // Clean all non-numeric characters for reliable wa.me routing
  const cleanNumber = number.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with The Monk Power India on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Gentle Pulse Ping Ring */}
        <span
          aria-hidden="true"
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"
        />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.88 13.58C14.65 13.5 14.49 13.46 14.32 13.71C14.16 13.96 13.69 14.51 13.55 14.67C13.41 14.84 13.27 14.86 13.02 14.73C12.77 14.61 11.98 14.35 11.04 13.51C10.31 12.86 9.81 12.05 9.67 11.8C9.53 11.56 9.65 11.42 9.78 11.3C9.89 11.19 10.03 11.01 10.15 10.86C10.28 10.72 10.32 10.62 10.4 10.45C10.49 10.28 10.44 10.14 10.38 10.02C10.32 9.89 9.83 8.69 9.62 8.19C9.42 7.7 9.22 7.77 9.07 7.76H8.59C8.43 7.76 8.16 7.82 7.94 8.07C7.71 8.32 7.08 8.91 7.08 10.11C7.08 11.31 7.96 12.46 8.08 12.63C8.21 12.79 9.79 15.23 12.22 16.28C12.8 16.53 13.25 16.68 13.6 16.79C14.19 16.98 14.72 16.95 15.15 16.89C15.63 16.82 16.63 16.28 16.84 15.69C17.05 15.09 17.05 14.59 16.98 14.47C16.92 14.36 16.82 14.31 16.57 14.39Z"/>
        </svg>

        {/* Desktop Tooltip Label */}
        <span className="hidden md:flex absolute right-full mr-3 items-center whitespace-nowrap bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-full shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 -translate-x-2 group-hover:translate-x-0 border border-slate-700">
          <span className="w-2 h-2 rounded-full bg-[#25D366] mr-1.5 animate-pulse" />
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
