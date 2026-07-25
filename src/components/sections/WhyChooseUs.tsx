"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket, Layers, Brain, Server, Shield, Lock, LifeBuoy, MessageSquare
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "High-Speed Delivery",
    description: "We build and deploy fast. Get your business online or your app launched without months of waiting.",
    gradient: "from-violet-500/10 to-violet-500/0",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    border: "hover:border-violet-500/30",
  },
  {
    icon: Layers,
    title: "Cost-Effective Scaling",
    description: "Premium technology that fits your budget. We build solutions designed to give you maximum ROI.",
    gradient: "from-blue-500/10 to-blue-500/0",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    border: "hover:border-blue-500/30",
  },
  {
    icon: Brain,
    title: "AI-First Approach",
    description: "Automate your daily tasks with AI chatbots and smart tools so you can focus on growing your business.",
    gradient: "from-fuchsia-500/10 to-fuchsia-500/0",
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/10",
    border: "hover:border-fuchsia-500/30",
  },
  {
    icon: Server,
    title: "Reliable & Secure",
    description: "Your data is safe, and your website stays online 24/7. We use top-tier cloud hosting for zero downtime.",
    gradient: "from-cyan-500/10 to-cyan-500/0",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    border: "hover:border-cyan-500/30",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Stand out in the Indian market with world-class UI/UX design that builds immediate trust with your customers.",
    gradient: "from-indigo-500/10 to-indigo-500/0",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    border: "hover:border-indigo-500/30",
  },
  {
    icon: MessageSquare,
    title: "Direct WhatsApp Support",
    description: "No confusing ticketing systems. Get direct updates, support, and consulting right on WhatsApp.",
    gradient: "from-emerald-500/10 to-emerald-500/0",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/30",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Partner",
    description: "We don't just build and disappear. We provide ongoing maintenance to keep your business running smoothly.",
    gradient: "from-amber-500/10 to-amber-500/0",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    border: "hover:border-amber-500/30",
  },
  {
    icon: Lock,
    title: "100% Transparency",
    description: "Honest pricing, clear timelines, and zero hidden costs. You always know exactly what you are paying for.",
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
            Built for <span className="gradient-text">Indian Businesses</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We deliver premium digital solutions that are affordable, scalable, and designed to help you dominate your local market.
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
