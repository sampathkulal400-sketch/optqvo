"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket, Layers, Brain, Server, Shield, Lock, LifeBuoy, MessageSquare
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "We Move Fast",
    description: "Most of our clients go live in 2–4 weeks. No endless meetings, no months of waiting — we get to work.",
    gradient: "from-violet-500/10 to-violet-500/0",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    border: "hover:border-violet-500/30",
  },
  {
    icon: Layers,
    title: "Honest Pricing",
    description: "We give you a fixed quote before we start. No surprise invoices, no scope creep — what we quote is what you pay.",
    gradient: "from-blue-500/10 to-blue-500/0",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    border: "hover:border-blue-500/30",
  },
  {
    icon: Brain,
    title: "Stop Losing Leads While You Sleep",
    description: "Every missed WhatsApp message is lost money. We set up systems that reply to customers instantly, 24/7.",
    gradient: "from-fuchsia-500/10 to-fuchsia-500/0",
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/10",
    border: "hover:border-fuchsia-500/30",
  },
  {
    icon: Server,
    title: "Always Online",
    description: "We host on enterprise cloud infrastructure. Your website stays up, your data stays safe, and we monitor it around the clock.",
    gradient: "from-cyan-500/10 to-cyan-500/0",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    border: "hover:border-cyan-500/30",
  },
  {
    icon: Shield,
    title: "Designed to Impress",
    description: "We don't do plain template websites. Every project gets a custom design that matches your brand and earns trust from day one.",
    gradient: "from-indigo-500/10 to-indigo-500/0",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    border: "hover:border-indigo-500/30",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Support",
    description: "Reach us directly on WhatsApp — not through a ticketing system. Real replies from the people who built your product.",
    gradient: "from-emerald-500/10 to-emerald-500/0",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/30",
  },
  {
    icon: LifeBuoy,
    title: "We Stick Around",
    description: "Launch day isn't the end. We stay on for maintenance, fixes, and improvements — your long-term tech team.",
    gradient: "from-amber-500/10 to-amber-500/0",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    border: "hover:border-amber-500/30",
  },
  {
    icon: Lock,
    title: "No Hidden Surprises",
    description: "You'll always know where your project stands — we share progress updates, flag issues early, and never go silent.",
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
            For Business Owners Who Are <span className="gradient-text">Done Wasting Time</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            You don't need another generic tool that collects dust. You need systems that actually save you hours and generate revenue.
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
