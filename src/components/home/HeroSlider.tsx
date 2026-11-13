"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import QuickQuoteModal from "../common/QuickQuoteModal";

interface SlideData {
  id: number;
  badge: string;
  badgeColor: string;
  headline: string;
  highlightedText: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
  stats: { value: string; label: string }[];
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    badge: "Industrial Grade Polymer Piping",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-400/40",
    headline: "ENGINEERING RELIABLE FLOW.",
    highlightedText: "BUILDING STRONGER FUTURES.",
    description: "Precision-extruded PVC & UPVC piping systems engineered for maximum hydrostatic burst endurance, zero-calcification potable flow, and heavy industrial fluids across India.",
    primaryCtaText: "Explore Products",
    primaryCtaLink: "/products",
    secondaryCtaText: "Get a Quote",
    secondaryCtaLink: "#quick-quote",
    image: "/images/hero/hero-1.jpg",
    stats: [
      { value: "100%", label: "Virgin Compounding" },
      { value: "5-Stage", label: "Quality Protocol" },
      { value: "Pan-India", label: "Dispatch Logistics" },
    ],
  },
  {
    id: 2,
    badge: "Extrusion Excellence & Lab Testing",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/40",
    headline: "ADVANCED MANUFACTURING.",
    highlightedText: "ZERO-DEFECT INTEGRITY.",
    description: "Multi-screw automated extrusion lines with online ultrasonic wall calibration and comprehensive batch burst testing to ensure structural excellence in every meter.",
    primaryCtaText: "Our Infrastructure",
    primaryCtaLink: "/infrastructure",
    secondaryCtaText: "Quality Assurance",
    secondaryCtaLink: "/quality-assurance",
    image: "/images/hero/hero-2.jpg",
    stats: [
      { value: "Lead-Free", label: "Potable Formulations" },
      { value: "ASTM / IS", label: "Standard Adherence" },
      { value: "100%", label: "Burst Inspected" },
    ],
  },
  {
    id: 3,
    badge: "Agriculture & Water Infrastructure",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
    headline: "POWERING AGRICULTURE.",
    highlightedText: "MAXIMIZING HYDRAULIC DISCHARGE.",
    description: "High-discharge agricultural rigid pipes, deep borewell casing, and heavy-duty spiral suction hoses engineered to minimize friction head loss and cut pumping energy costs.",
    primaryCtaText: "Agricultural Pipes",
    primaryCtaLink: "/products/agricultural-pipes",
    secondaryCtaText: "Distributor Enquiries",
    secondaryCtaLink: "/work-with-us",
    image: "/images/hero/hero-3.jpg",
    stats: [
      { value: "C=150", label: "Ultra-Smooth Hazen Bore" },
      { value: "Anti-UV", label: "All-Weather Stabilizers" },
      { value: "Flexible", label: "Spiral Suction Lines" },
    ],
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <>
      <section
        className="relative w-full bg-slate-950 text-white min-h-[580px] lg:min-h-[680px] flex items-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Images with smooth transitions */}
        {HERO_SLIDES.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            } transform transition-transform duration-1000`}
          >
            <Image
              src={item.image}
              alt={item.headline}
              fill
              priority={idx === 0}
              className="object-cover object-center"
            />
            {/* Multi-layered Industrial Overlay for maximum text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </div>
        ))}

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-3xl">
            {/* Category / Highlight Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-bold tracking-wider uppercase mb-5 backdrop-blur-md transition-all duration-300">
              <span className={`w-2 h-2 rounded-full animate-ping ${slide.id === 1 ? 'bg-sky-400' : slide.id === 2 ? 'bg-amber-400' : 'bg-emerald-400'}`} />
              <span className={slide.id === 1 ? 'text-sky-300' : slide.id === 2 ? 'text-amber-300' : 'text-emerald-300'}>
                {slide.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5">
              <span>{slide.headline}</span>{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-orange-400">
                {slide.highlightedText}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href={slide.primaryCtaLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-orange-600/30 transition transform hover:-translate-y-0.5"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {slide.secondaryCtaLink.startsWith("#") ? (
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base tracking-wide border border-slate-700 hover:border-slate-500 backdrop-blur-md transition transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-sky-400" />
                  <span>{slide.secondaryCtaText}</span>
                </button>
              ) : (
                <Link
                  href={slide.secondaryCtaLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base tracking-wide border border-slate-700 hover:border-slate-500 backdrop-blur-md transition transform hover:-translate-y-0.5"
                >
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>{slide.secondaryCtaText}</span>
                </Link>
              )}
            </div>

            {/* Key Statistics Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-slate-800/80">
              {slide.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/70 border border-slate-700/80 text-white hover:bg-sky-600 hover:border-sky-500 flex items-center justify-center backdrop-blur-sm transition cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/70 border border-slate-700/80 text-white hover:bg-sky-600 hover:border-sky-500 flex items-center justify-center backdrop-blur-sm transition cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-8 bg-orange-500" : "w-2 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quote Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
