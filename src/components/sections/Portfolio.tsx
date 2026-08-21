"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
  Globe,
  Sparkles,
  TrendingUp,
  ShieldCheck,
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
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    problem:
      "A prominent crane and heavy equipment rental service in Puttur lacked a professional online presence to showcase tonnage capacity and regional service coverage.",
    whatWeBuilt: [
      "Modern Crane & Fleet Specifications Showcase",
      "Instant Emergency Rental Contact Buttons",
      "Service Radius & Location Coverage Mapping",
      "Fast-Loading Cloud Deployment with 99.9% Uptime",
    ],
    result:
      "Established an authoritative digital catalog enabling site engineers and contractors to verify crane specs and book instantly.",
    metrics: ["Fast Cloud Load (<0.5s)", "One-Tap Call Dialing", "Regional SEO Visibility"],
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
      className="relative py-20 lg:py-32 overflow-hidden bg-[#F8F8F5] text-[#0A0A0D]"
    >
      <div className="section-wrap space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="badge-plum mb-4">
            <span>●</span> SHIPPED CLIENT WORK
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0D] mb-4">
            Real Projects. <span className="highlight-lime">Real Results.</span>
          </h2>
          <p className="text-[#52525C] text-base sm:text-xl font-normal">
            Take an in-depth look at actual digital systems we engineered for verified businesses.
          </p>
        </motion.div>

        {/* Varied Editorial Case Study Layouts */}
        <div className="space-y-12">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-3xl bg-[#FFFFFF] border border-[#0A0A0D]/12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-[#28113B]/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Visual / Browser Mockup Card (5 cols) */}
                <div className="lg:col-span-5 bg-[#28113B] text-[#FAFAF8] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-4 relative z-10">
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
                      <h3 className="text-2xl sm:text-3xl font-black text-[#FAFAF8] mt-1">
                        {proj.name}
                      </h3>
                    </div>

                    {/* Metric Chips */}
                    <div className="space-y-2 pt-2">
                      {proj.metrics.map((m) => (
                        <div
                          key={m}
                          className="flex items-center gap-2 font-mono text-xs text-[#FAFAF8]/90 bg-white/06 px-3 py-1.5 rounded-xl border border-white/10"
                        >
                          <TrendingUp className="w-3.5 h-3.5 text-[#CCFF00]" />
                          <span>{m}</span>
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
                      <span>VISIT SITE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Storytelling Breakdown (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* The Problem */}
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-rose-600 block mb-1">
                        THE BUSINESS CHALLENGE:
                      </span>
                      <p className="text-sm sm:text-base text-[#52525C] leading-relaxed font-normal">
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
                    <span className="text-xs text-[#878794] font-medium">
                      Built with clean code & zero template dependencies
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
          <p className="text-sm sm:text-base text-[#52525C] max-w-xl mx-auto font-normal">
            Tell us what your business does and we will design, build, and deploy the right digital tool for you.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry("Work Portfolio") : scrollTo("contact")}
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
