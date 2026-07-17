"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket, Layers, Brain, Server, Shield, Lock, LifeBuoy, MessageSquare
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Rapid development cycles without sacrificing quality. We ship production-ready solutions on time, every time.",
    gradient: "from-violet-500/10 to-violet-500/0",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    border: "hover:border-violet-500/30",
  },
  {
    icon: Layers,
    title: "Modern Architecture",
    description: "Clean, scalable codebases built with industry-leading frameworks and best practices that stand the test of time.",
    gradient: "from-blue-500/10 to-blue-500/0",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    border: "hover:border-blue-500/30",
  },
  {
    icon: Brain,
    title: "AI-First Development",
    description: "We embed intelligence into every solution — from smart automations to predictive dashboards and AI-powered workflows.",
    gradient: "from-fuchsia-500/10 to-fuchsia-500/0",
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/10",
    border: "hover:border-fuchsia-500/30",
  },
  {
    icon: Server,
    title: "Scalable Systems",
    description: "Infrastructure that grows with your business — from early-stage startup to enterprise scale, without rewrites.",
    gradient: "from-cyan-500/10 to-cyan-500/0",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    border: "hover:border-cyan-500/30",
  },
  {
    icon: Shield,
    title: "Enterprise Quality",
    description: "Every product ships with the quality and polish you'd expect from a Fortune 500 technology team.",
    gradient: "from-indigo-500/10 to-indigo-500/0",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    border: "hover:border-indigo-500/30",
  },
  {
    icon: Lock,
    title: "Secure Solutions",
    description: "Security is built-in, not bolted on. Authentication, encryption, and compliance baked into every layer.",
    gradient: "from-emerald-500/10 to-emerald-500/0",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/30",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    description: "We're not a one-and-done agency. We're a long-term technology partner committed to your continuous growth.",
    gradient: "from-amber-500/10 to-amber-500/0",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    border: "hover:border-amber-500/30",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Real-time updates, honest timelines, and clear communication at every stage of your project.",
    gradient: "from-sky-500/10 to-sky-500/0",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10",
    border: "hover:border-sky-500/30",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="section-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Why Optqvo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Built for the{" "}
            <span className="gradient-text">Ambitious</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We combine technical excellence with business intelligence to deliver solutions
            that don't just work — they transform.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
                className={`group relative rounded-2xl glass border border-white/[0.07] ${r.border} p-6 cursor-default overflow-hidden transition-all duration-400 hover:translate-y-[-4px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${r.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                <div className="relative z-10">
                  <div className={`w-11 h-11 rounded-xl ${r.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${r.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
