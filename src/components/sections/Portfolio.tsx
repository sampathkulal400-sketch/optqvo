"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
  Globe,
  TrendingUp,
  ShieldCheck,
  Zap,
  Activity,
} from "lucide-react";

interface PortfolioProps {
  onOpenEnquiry?: (category?: string) => void;
}

const projects = [
  {
    id: "sn-cranes-puttur",
    name: "SN Cranes Puttur",
    category: "Heavy Machinery Fleet & Rental Showcase",
    url: "https://sn-cranes-puttur.vercel.app/",
    domain: "sn-cranes-puttur.vercel.app",
    tag: "LIVE PRODUCTION",
    problem:
      "A prominent crane and heavy equipment rental service in Puttur lacked a professional online presence to showcase tonnage capacity, boom reach specifications, and regional service coverage for industrial contractors.",
    approach:
      "Engineered an ultra-fast, mobile-first fleet showcase with instant emergency call buttons, detailed machinery tonnage breakdowns, and local SEO indexing across coastal Karnataka.",
    whatWeBuilt: [
      "Interactive Heavy Crane & Fleet Specifications Catalog",
      "One-Tap Instant Emergency Rental Contact Triggers",
      "Operating Radius & Regional Coverage Mapping",
      "High-Speed Cloud Deployment with 99.9% Uptime SLA",
    ],
    result:
      "Established an authoritative digital flagship enabling site engineers, contractors, and project managers to verify machine specs and book heavy rentals immediately.",
    metrics: [
      { label: "Cloud Page Load", value: "< 0.4s" },
      { label: "Mobile Touchpoints", value: "1-Tap Direct Call" },
      { label: "Regional Search", value: "Top Local Visibility" },
    ],
    fleetHighlights: [
      "Hydraulic Mobile Cranes (25T – 150T)",
      "Telescopic Boom High-Lift Units",
      "24/7 Emergency Recovery Dispatch",
    ],
  },
];

export default function Portfolio({ onOpenEnquiry }: PortfolioProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-[#F2F2ED] text-[#0A0A0D]"
    >
      <div className="section-wrap relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="badge-plum mb-4">
            <span>●</span> VERIFIED CLIENT CASE STUDY
          </span>
          <h2 className="display-section-title text-[#0A0A0D] mb-4">
            Real Projects. <span className="highlight-lime">Measured Impact.</span>
          </h2>
          <p className="text-[#50505C] text-base sm:text-xl font-normal max-w-2xl mx-auto">
            Inspect real digital assets and production systems engineered by Optqvo for active commercial operations.
          </p>
        </motion.div>

        {/* Varied Editorial Case Study Layout */}
        <div className="space-y-12">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-3xl bg-[#FFFFFF] border border-[#0A0A0D]/12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-[#28113B]/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Visual / Browser Mockup Card (5 cols) */}
                <div className="lg:col-span-5 bg-[#28113B] text-[#FAFAF8] p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#CCFF00] text-[#0A0A0D] uppercase tracking-widest">
                        {proj.tag}
                      </span>
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 text-[#CCFF00] flex items-center justify-center hover:scale-110 hover:bg-[#CCFF00] hover:text-[#0A0A0D] transition-all shadow-md"
                        aria-label={`Visit live site ${proj.name}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>

                    <div>
                      <span className="font-mono text-xs text-[#CCFF00] uppercase font-bold tracking-wider">
                        {proj.category}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-black text-[#FAFAF8] mt-1">
                        {proj.name}
                      </h3>
                    </div>

                    {/* Simulated Interface Spec Card */}
                    <div className="p-4 rounded-2xl bg-white/06 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#CCFF00]">
                        <span>FLEET SPECS & CAPABILITIES</span>
                        <Activity className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-1.5 font-mono text-xs text-white/80">
                        {proj.fleetHighlights.map((hl) => (
                          <div key={hl} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metric Chips */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {proj.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="bg-white/06 p-2.5 rounded-xl border border-white/08 text-center font-mono"
                        >
                          <span className="text-[10px] text-white/50 uppercase block">
                            {m.label}
                          </span>
                          <span className="text-xs text-[#CCFF00] font-bold">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10 relative z-10 flex items-center justify-between text-xs font-mono text-[#FAFAF8]/60">
                    <span>{proj.domain}</span>
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CCFF00] hover:underline flex items-center gap-1 font-bold no-underline"
                    >
                      <span>VISIT LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Storytelling Breakdown (7 cols) */}
                <div className="lg:col-span-7 p-7 sm:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* The Problem */}
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-rose-600 block mb-1">
                        THE BUSINESS CHALLENGE:
                      </span>
                      <p className="text-sm sm:text-base text-[#50505C] leading-relaxed font-normal">
                        {proj.problem}
                      </p>
                    </div>

                    {/* What Was Built */}
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#28113B] block mb-3">
                        WHAT OPTQVO ENGINEERED:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {proj.whatWeBuilt.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#0A0A0D] font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#28113B] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* The Result */}
                    <div className="p-4 rounded-2xl bg-[#CCFF00]/15 border border-[#0A0A0D]/10">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#28113B] block mb-1">
                        THE MEASURED OUTCOME:
                      </span>
                      <p className="text-xs sm:text-sm text-[#0A0A0D] font-semibold leading-relaxed">
                        {proj.result}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#0A0A0D]/08 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-[#848492] font-mono">
                      Engineered with Next.js & zero template bloat
                    </span>
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-zip-plum px-6 py-3 rounded-full text-xs font-mono tracking-widest text-[#FAFAF8] inline-flex items-center justify-center gap-2 no-underline w-full sm:w-auto"
                    >
                      <span>INSPECT LIVE PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#CCFF00]" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Bottom Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-[#FFFFFF] border border-[#0A0A0D]/12 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm space-y-4"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0D]">
            Need a high-performing digital asset for your business?
          </h3>
          <p className="text-sm sm:text-base text-[#50505C] max-w-xl mx-auto font-normal">
            Tell us what your business does and we will design, build, and deploy the right digital system for you.
          </p>
          <div className="pt-2">
            <button
              onClick={() =>
                onOpenEnquiry ? onOpenEnquiry("Work Portfolio") : scrollTo("contact")
              }
              className="btn-zip-plum px-8 py-4 rounded-full text-xs font-mono tracking-widest text-[#FAFAF8] inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
              <span>DISCUSS YOUR PROJECT SCOPE</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
