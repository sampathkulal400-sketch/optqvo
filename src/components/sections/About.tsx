"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  MessageSquare,
  Clock,
  Code2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const engineeringPillars = [
    {
      title: "Real Problems Over Buzzwords",
      description:
        "We never push bloated software you don't need. If a simple digital menu or WhatsApp automation solves your problem, that's exactly what we build.",
      tag: "PRACTICAL FOCUS",
    },
    {
      title: "Direct Developer Contact",
      description:
        "No call-center queues or ticketing friction. You communicate directly over WhatsApp with the engineers architecting and maintaining your product.",
      tag: "ZERO BUREAUCRACY",
    },
    {
      title: "Fast 1–3 Week Delivery",
      description:
        "Small businesses can't wait 6 months for a website. We work in rapid, focused sprint cycles to get your digital tools live and generating revenue fast.",
      tag: "SPEED TO MARKET",
    },
    {
      title: "Long-Term Ownership & Care",
      description:
        "Launch day is just the beginning. We handle cloud hosting, security monitoring, domain SSL, and continuous updates so you stay stress-free.",
      tag: "DEDICATED SUPPORT",
    },
  ];

  const executionSteps = [
    {
      step: "01",
      name: "Listen & Diagnose",
      detail: "We discuss your exact operational bottlenecks over a casual WhatsApp or phone conversation.",
    },
    {
      step: "02",
      name: "Architecture Blueprint",
      detail: "We outline the exact screen layouts, user journeys, and cost estimate for your approval.",
    },
    {
      step: "03",
      name: "Precision Engineering",
      detail: "We build with modern React/Next.js and clean APIs — tested on all devices before launch.",
    },
    {
      step: "04",
      name: "Launch & Monitor",
      detail: "Your system goes live with full DNS setup, automated backups, and ongoing support.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-[#0B0B0E] text-[#FAFAF8]"
    >
      {/* Ambient Dark Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="dark-dot-grid absolute inset-0 opacity-20" />
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-[#28113B]/30 rounded-full filter blur-[120px]" />
      </div>

      <div className="section-wrap relative z-10 space-y-16">
        {/* Editorial Top Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="badge-lime">
              <span>●</span> WHY OPTQVO
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAFAF8] leading-[1.08]">
              We Solve Business Friction. <span className="text-[#CCFF00]">We Don&apos;t Sell Jargon.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#FAFAF8]/85 leading-relaxed font-normal">
              Optqvo is an engineering team dedicated to building practical, reliable digital tools for Indian restaurants, retail shops, clinics, hotels, and growing SMEs.
            </p>

            <p className="text-sm sm:text-base text-[#FAFAF8]/65 leading-relaxed font-normal">
              Most business owners are tired of overcomplicated software agencies that disappear after launch. We believe in high-clarity communication, fixed pricing without surprise invoices, and building digital tools that actually save you time every day.
            </p>
          </motion.div>

          {/* Right Execution Pipeline Canvas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#15151A] border border-white/10 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/08 pb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#CCFF00] font-bold">
                  HOW WE DELIVER PROJECTS
                </span>
                <span className="font-mono text-[10px] text-[#878794] uppercase font-semibold">
                  4-STEP SPRINT
                </span>
              </div>

              <div className="space-y-3">
                {executionSteps.map((s) => (
                  <div
                    key={s.step}
                    className="p-3.5 rounded-2xl bg-white/04 border border-white/06 hover:border-white/15 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-[#CCFF00]">
                        {s.step}
                      </span>
                      <h4 className="text-sm font-bold text-[#FAFAF8]">{s.name}</h4>
                    </div>
                    <p className="text-xs text-[#FAFAF8]/65 leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {engineeringPillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="p-6 rounded-3xl bg-[#121217] border border-white/08 hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest font-extrabold text-[#CCFF00]">
                  {p.tag}
                </span>
                <h3 className="text-base font-bold text-[#FAFAF8] leading-snug">{p.title}</h3>
                <p className="text-xs text-[#FAFAF8]/65 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
