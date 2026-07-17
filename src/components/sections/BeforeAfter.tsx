"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const before = [
  "Manual Work",
  "Paper Records",
  "Slow Processes",
  "Missed Leads",
  "Scattered Data",
];

const after = [
  "Full Automation",
  "AI Assistance",
  "Centralized Dashboard",
  "Real-Time Analytics",
  "Higher Productivity",
  "Better Decisions",
];

export default function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="transformation" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />
      <div className="absolute inset-0 section-gradient pointer-events-none" />

      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">The Transformation</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Before & After{" "}
            <span className="gradient-text">Optqvo</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            See the difference intelligent software makes for businesses that partner with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 relative">
          {/* Connector */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.4)] text-white font-bold text-sm">
            VS
          </div>

          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl glass border border-red-500/15 bg-gradient-to-br from-red-500/5 to-transparent p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Without Optqvo</h3>
                <p className="text-xs text-slate-500">Manual operations</p>
              </div>
            </div>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-400 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Sad illustration */}
            <div className="mt-6 pt-6 border-t border-red-500/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[30,60,40,20,50,35].map((h, i) => (
                    <div key={i} className="w-4 rounded-t-sm bg-red-500/20" style={{ height: `${h}px` }} />
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-xs text-red-400 font-medium">Declining KPIs</p>
                  <p className="text-xs text-slate-600">No visibility</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* With Optqvo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl glass border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-violet-500/5 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">With Optqvo</h3>
                <p className="text-xs text-slate-500">Intelligent automation</p>
              </div>
            </div>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Happy illustration */}
            <div className="mt-6 pt-6 border-t border-emerald-500/10">
              <div className="flex items-center gap-3">
                <div className="flex items-end gap-1">
                  {[30,45,55,60,70,85,95].map((h, i) => (
                    <div key={i} className="w-4 rounded-t-sm" style={{ height: `${h * 0.8}px`, background: `linear-gradient(to top, #7c3aed, #06b6d4)`, opacity: 0.4 + i * 0.08 }} />
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-xs text-emerald-400 font-medium">Growing KPIs</p>
                  <p className="text-xs text-slate-600">Full visibility</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
