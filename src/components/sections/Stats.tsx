"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number | string; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(inViewRef, { once: true });
  const isNumeric = typeof target === "number";

  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 60, damping: 20, restDelta: 0.001 });
  const display = useTransform(spring, (latest) => {
    if (!isNumeric) return target as string;
    return Math.round(latest).toString();
  });

  useEffect(() => {
    if (inView && isNumeric) {
      count.set(target as number);
    }
  }, [inView, count, target, isNumeric]);

  return (
    <div ref={inViewRef}>
      <span className="stat-number text-5xl sm:text-6xl font-black tracking-tight">
        {prefix}
        {isNumeric ? <motion.span ref={ref}>{display}</motion.span> : target}
        {suffix}
      </span>
    </div>
  );
}

const stats = [
  {
    value: "24/7",
    label: "Automation",
    description: "Systems that work around the clock so your team doesn't have to.",
    isNumeric: false,
    gradient: "from-violet-500/20 to-violet-500/0",
    border: "border-violet-500/20",
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.08)]",
  },
  {
    value: 99,
    suffix: "%",
    label: "System Reliability",
    description: "Enterprise-grade uptime backed by redundant cloud infrastructure.",
    isNumeric: true,
    gradient: "from-blue-500/20 to-blue-500/0",
    border: "border-blue-500/20",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.08)]",
  },
  {
    value: 3,
    prefix: "",
    suffix: "x",
    label: "Business Efficiency",
    description: "Average efficiency gain reported by businesses after implementation.",
    isNumeric: true,
    gradient: "from-cyan-500/20 to-cyan-500/0",
    border: "border-cyan-500/20",
    glow: "shadow-[0_0_40px_rgba(6,182,212,0.08)]",
  },
  {
    value: 100,
    suffix: "%",
    label: "Custom Solutions",
    description: "Every solution is purpose-built — no templates, no compromises.",
    isNumeric: true,
    gradient: "from-emerald-500/20 to-emerald-500/0",
    border: "border-emerald-500/20",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.08)]",
  },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      {/* Background blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/4 rounded-full blur-3xl" />
      </div>

      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">By the Numbers</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Designed to{" "}
            <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We hold ourselves to the highest standards of engineering and business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl glass border ${stat.border} bg-gradient-to-br ${stat.gradient} p-8 text-center ${stat.glow} transition-all duration-400 hover:translate-y-[-4px]`}
            >
              <div className="mb-3">
                {stat.isNumeric ? (
                  <AnimatedCounter target={stat.value as number} suffix={stat.suffix} prefix={stat.prefix} />
                ) : (
                  <span className="stat-number text-5xl sm:text-6xl font-black tracking-tight">{stat.value}</span>
                )}
              </div>
              <p className="text-base font-bold text-white mb-2">{stat.label}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
