"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Map, Palette, Code2, TestTube, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We deep-dive into your business goals, technical requirements, and competitive landscape to form a complete picture.",
    color: "from-violet-500 to-violet-600",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    textColor: "text-violet-400",
  },
  {
    number: "02",
    icon: Map,
    title: "Planning",
    description: "Strategic roadmap, technical architecture, and project timeline designed for success and adaptability.",
    color: "from-blue-500 to-blue-600",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    textColor: "text-blue-400",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design",
    description: "World-class UI/UX design with pixel-perfect attention to detail, brand consistency, and user delight.",
    color: "from-fuchsia-500 to-fuchsia-600",
    glow: "shadow-[0_0_30px_rgba(217,70,239,0.3)]",
    textColor: "text-fuchsia-400",
  },
  {
    number: "04",
    icon: Code2,
    title: "Development",
    description: "Clean, maintainable code built with modern frameworks, CI/CD pipelines, and performance as a priority.",
    color: "from-cyan-500 to-cyan-600",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    textColor: "text-cyan-400",
  },
  {
    number: "05",
    icon: TestTube,
    title: "Testing",
    description: "Rigorous QA testing, performance benchmarking, security audits, and cross-device validation.",
    color: "from-amber-500 to-amber-600",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
    textColor: "text-amber-400",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Deployment",
    description: "Smooth, zero-downtime deployment to production with monitoring, backups, and rollback safety nets.",
    color: "from-emerald-500 to-emerald-600",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    textColor: "text-emerald-400",
  },
  {
    number: "07",
    icon: LifeBuoy,
    title: "Support",
    description: "Ongoing maintenance, performance monitoring, feature iterations, and continuous improvement as your partner.",
    color: "from-sky-500 to-sky-600",
    glow: "shadow-[0_0_30px_rgba(14,165,233,0.3)]",
    textColor: "text-sky-400",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">How We Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Our Proven{" "}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A structured, transparent methodology refined to deliver exceptional results on time and on budget.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[calc(100%/14)] right-[calc(100%/14)] h-px bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-sky-500/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  id={`process-step-${step.number}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center lg:items-center"
                >
                  {/* Step icon circle */}
                  <div
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 ${step.glow} flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#09090B] border border-white/10 flex items-center justify-center">
                      <span className="text-[9px] font-bold text-slate-400">{i + 1}</span>
                    </div>
                  </div>

                  <h3 className={`text-sm font-bold ${step.textColor} mb-1`}>{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed lg:text-center">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
