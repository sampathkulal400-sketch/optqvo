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
  Workflow,
  Cpu,
  Layers,
} from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const engineeringPillars = [
    {
      title: "We Solve Real Problems",
      description:
        "We never push complicated software you don't need. If a simple QR menu, WhatsApp alert, or booking page fixes your headache, that's exactly what we build.",
      tag: "PRACTICAL FOCUS",
      icon: Cpu,
    },
    {
      title: "Talk Directly to Us",
      description:
        "No call centres, no ticket queues. You talk directly to the person building your product on WhatsApp — any question, any time.",
      tag: "ALWAYS REACHABLE",
      icon: MessageSquare,
    },
    {
      title: "Ready in 1–3 Weeks",
      description:
        "Your business can't wait 6 months. We work fast and deliver working results in 1 to 3 weeks, not months of meetings and wireframes.",
      tag: "FAST DELIVERY",
      icon: Zap,
    },
    {
      title: "We Keep It Running",
      description:
        "After launch, we stay with you. If something goes wrong, we fix it. We keep your site live, secure, and up-to-date — so you never have to worry.",
      tag: "ONGOING SUPPORT",
      icon: ShieldCheck,
    },
  ];

  const executionSteps = [
    {
      step: "01",
      name: "We Listen First",
      detail: "Tell us what's frustrating you about your business. We ask simple questions over WhatsApp or a quick call — no tech knowledge needed from your side.",
    },
    {
      step: "02",
      name: "We Show You the Plan",
      detail: "We sketch out what your website or tool will look like, explain it in plain terms, and give you a clear fixed price before we start anything.",
    },
    {
      step: "03",
      name: "We Build It Fast",
      detail: "We get to work and build it properly — tested on all phones, looking sharp, and working exactly as described. Most projects done in 1–3 weeks.",
    },
    {
      step: "04",
      name: "We Launch & Stay",
      detail: "Your site or tool goes live. We handle everything — from making it appear on Google to keeping it running smoothly. We're available on WhatsApp anytime.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-10 lg:py-16 overflow-hidden bg-[#09090C] text-[#FAFAF8]"
    >
      {/* Ambient Dark Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="dark-dot-grid absolute inset-0 opacity-20" />
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-[#28113B]/30 rounded-full filter blur-[120px]" />
      </div>

      <div className="section-wrap relative z-10 space-y-6 sm:space-y-8">
        {/* Editorial Top Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="badge-lime">
              WHY OPTQVO SOLUTIONS
            </span>

            <h2 className="display-section-title text-[#FAFAF8]">
              We Solve Business Friction. <span className="text-[#CCFF00]">We Don&apos;t Sell Jargon.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#FAFAF8]/85 leading-relaxed font-normal">
              Optqvo Solutions is an engineering team dedicated to building practical, reliable digital tools for Indian restaurants, retail shops, clinics, hotels, and growing SMEs.
            </p>

            <p className="text-sm sm:text-base text-[#FAFAF8]/65 leading-relaxed font-normal">
              Most software agencies push complicated, overpriced platforms that collect dust. We do the opposite: we diagnose the daily bottlenecks slowing down your business, and build clean software that just works.
            </p>
          </motion.div>

          {/* Right Stat / Value Highlights Box */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-white/04 border border-white/10 space-y-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#CCFF00] font-bold block">
              OUR CORE PROMISES:
            </span>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-start gap-3 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                <span>100% Custom Code — No generic clunky templates</span>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                <span>Direct WhatsApp communication with your developer</span>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                <span>Transparent fixed quotes with zero hidden hourly fees</span>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                <span>Lightning-fast cloud hosting & mobile-first UI</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Engineering Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringPillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-white/04 border border-white/08 hover:border-white/20 transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/08 flex items-center justify-center text-[#CCFF00]">
                  <PillarIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#CCFF00] font-bold block mb-1">
                    {pillar.tag}
                  </span>
                  <h4 className="text-lg font-bold text-[#FAFAF8]">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 4-Step Execution Process Roadmap */}
        <div className="pt-8 border-t border-white/10 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-mono text-xs text-[#CCFF00] uppercase font-bold tracking-widest">
              HOW WE WORK
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#FAFAF8]">
              How We Work Together — In 4 Simple Steps
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executionSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white/03 border border-white/06 space-y-2 relative"
              >
                <span className="font-mono text-2xl font-black text-[#CCFF00]/40">
                  {step.step}
                </span>
                <h5 className="text-base font-bold text-[#FAFAF8]">
                  {step.name}
                </h5>
                <p className="text-xs text-white/70 font-normal leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
