"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Utensils, Heart, Building2, ShoppingBag, GraduationCap,
  Factory, HardHat, Truck, Briefcase, Lightbulb, Store
} from "lucide-react";

const industries = [
  { label: "Restaurants", icon: Utensils, color: "text-orange-400", bg: "bg-orange-500/10", border: "hover:border-orange-500/30" },
  { label: "Healthcare", icon: Heart, color: "text-rose-400", bg: "bg-rose-500/10", border: "hover:border-rose-500/30" },
  { label: "Real Estate", icon: Building2, color: "text-blue-400", bg: "bg-blue-500/10", border: "hover:border-blue-500/30" },
  { label: "Retail", icon: ShoppingBag, color: "text-pink-400", bg: "bg-pink-500/10", border: "hover:border-pink-500/30" },
  { label: "Education", icon: GraduationCap, color: "text-violet-400", bg: "bg-violet-500/10", border: "hover:border-violet-500/30" },
  { label: "Manufacturing", icon: Factory, color: "text-slate-400", bg: "bg-slate-500/10", border: "hover:border-slate-500/30" },
  { label: "Construction", icon: HardHat, color: "text-amber-400", bg: "bg-amber-500/10", border: "hover:border-amber-500/30" },
  { label: "Logistics", icon: Truck, color: "text-sky-400", bg: "bg-sky-500/10", border: "hover:border-sky-500/30" },
  { label: "Professional Services", icon: Briefcase, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "hover:border-indigo-500/30" },
  { label: "Startups", icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "hover:border-yellow-500/30" },
  { label: "SMEs", icon: Store, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "hover:border-emerald-500/30" },
];

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 section-gradient pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Industries We Serve</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Solutions for{" "}
            <span className="gradient-text">Every Sector</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From restaurants to healthcare, construction to startups — we build specialized digital systems that understand your industry's unique challenges.
          </p>
        </motion.div>

        {/* Industry cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.label}
                id={`industry-${ind.label.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group flex flex-col items-center gap-3 p-5 rounded-2xl glass border border-white/[0.07] ${ind.border} cursor-default transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]`}
              >
                <div className={`w-12 h-12 rounded-xl ${ind.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${ind.color}`} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-slate-300 text-center leading-tight">{ind.label}</span>
              </motion.div>
            );
          })}

          {/* Extra card for "More..." */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: industries.length * 0.05 }}
            className="group flex flex-col items-center gap-3 p-5 rounded-2xl glass border border-dashed border-white/[0.1] cursor-default transition-all duration-300 hover:border-violet-500/30"
          >
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center">
              <span className="text-xl text-slate-600">+</span>
            </div>
            <span className="text-xs font-medium text-slate-600 text-center">And More</span>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          Don't see your industry? We build custom solutions for any sector.{" "}
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
          >
            Let's talk.
          </button>
        </motion.p>
      </div>
    </section>
  );
}
