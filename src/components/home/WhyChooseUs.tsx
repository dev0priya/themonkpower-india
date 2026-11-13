import React from "react";
import { 
  ShieldCheck, 
  Gauge, 
  Cpu, 
  Truck, 
  SunMedium, 
  CheckCheck,
  Target
} from "lucide-react";

const WHY_CHOOSE_PILLARS = [
  {
    icon: ShieldCheck,
    title: "100% Virgin Compounding",
    subtitle: "Zero-Lead Potable Safety",
    description: "Compounded strictly using high-purity virgin suspension PVC resins and eco-friendly calcium-zinc stabilizers, eliminating heavy metal toxicity in drinking water lines.",
  },
  {
    icon: Gauge,
    title: "Hydrostatic Burst Resistance",
    subtitle: "Exceeds Continuous Working Loads",
    description: "Every production batch undergoes destructive and sustained hydrostatic pressure chamber testing at elevated temperatures to guarantee high fatigue resistance.",
  },
  {
    icon: Cpu,
    title: "Ultrasonic Concentricity",
    subtitle: "Dimensional Wall Uniformity",
    description: "Continuous automated laser scanning and ultrasonic diameter gauging prevent thin spots, guaranteeing uniform wall thickness and seamless solvent weld fitting.",
  },
  {
    icon: SunMedium,
    title: "All-Weather UV Stabilization",
    subtitle: "High Solar Radiation Resistance",
    description: "Fortified with premium titanium dioxide (TiO2) and carbon black UV screeners to prevent polymer chain scission, discoloration, or embrittlement under outdoor exposure.",
  },
  {
    icon: CheckCheck,
    title: "Zero-Leak Chemical Fusion",
    subtitle: "Contoured Socket Tolerances",
    description: "Engineered socket depths and tapers facilitate rapid solvent cement molecular interlock, forming monolithic connections stronger than the pipe barrel itself.",
  },
  {
    icon: Truck,
    title: "Pan-India Logistics Dispatch",
    subtitle: "Reliable Distribution Timelines",
    description: "Centralized strategic dispatch hubs and organized freight transport ensure on-schedule deliveries for critical multi-story projects, municipal infrastructure, and dealers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5 text-sky-400" />
            <span>The Monk Power Engineering Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Why Industry Leaders Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-orange-400">
              The Monk Power India
            </span>
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            From precision polymer formulation to computerized extrusion calibration, our engineering focus delivers uncompromised reliability across critical civil, residential, and agricultural networks.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 hover:border-sky-500/80 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-5 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-orange-400 mt-1 uppercase tracking-wide">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
