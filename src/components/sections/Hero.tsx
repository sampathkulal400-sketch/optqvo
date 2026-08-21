"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Zap,
  Globe,
  Database,
  Smartphone,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";

interface HeroProps {
  onOpenEnquiry?: (category?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const [activeNode, setActiveNode] = useState<number>(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const workflowNodes = [
    {
      id: 0,
      title: "Customer Touchpoint",
      badge: "INPUT",
      metric: "< 0.4s response",
      icon: Smartphone,
      description: "Digital QR Menu, Online Booking Form, or Custom Web App capturing customer orders & intent.",
      status: "LIVE & SYNCED",
      color: "#28113B",
      accent: "#CCFF00",
    },
    {
      id: 1,
      title: "Smart Automation Core",
      badge: "LOGIC",
      metric: "100% Automated",
      icon: Cpu,
      description: "Direct WhatsApp notifications, instant invoice dispatch, CRM syncing, and scheduled follow-ups.",
      status: "ROUTING EVENTS",
      color: "#1E293B",
      accent: "#38BDF8",
    },
    {
      id: 2,
      title: "Unified Business Dashboard",
      badge: "CONTROL",
      metric: "Real-time Metrics",
      icon: Database,
      description: "Simple operational hub for store managers: order tracking, booking calendar, and revenue logs.",
      status: "SECURE CLOUD",
      color: "#14532D",
      accent: "#4ADE80",
    },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#F8F8F5]"
    >
      {/* Background Subtle Tech Matrix & Ambient Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-[#28113B]/04 rounded-full filter blur-[100px]" />
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#CCFF00]/08 rounded-full filter blur-[100px]" />
      </div>

      <motion.div style={{ y: yText, opacity }} className="relative z-10 w-full">
        <div className="section-wrap">
          {/* Top Monospace Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="badge-plum">
              <span>●</span> PRACTICAL DIGITAL SOLUTIONS
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#52525C] uppercase tracking-widest font-semibold">
              Software • Automation • Web • Mobile
            </span>
          </motion.div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0A0A0D] leading-[1.05]"
              >
                HAVE A BUSINESS PROBLEM?{" "}
                <span className="block mt-2">
                  <span className="highlight-lime">BUILD THE SOLUTION.</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-2xl text-[#52525C] leading-relaxed max-w-2xl font-normal"
              >
                Optqvo helps restaurants, shops, hotels, clinics, and growing enterprises build practical digital tools — from custom websites and QR ordering to automated WhatsApp systems and business dashboards.{" "}
                <span className="font-bold text-[#0A0A0D]">
                  No tech jargon. No corporate fluff.
                </span>
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
              >
                <button
                  onClick={() => onOpenEnquiry ? onOpenEnquiry() : scrollTo("contact")}
                  className="btn-zip-plum px-8 py-4 min-h-[52px] rounded-full text-xs font-mono tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
                  <span>TELL US YOUR PROBLEM</span>
                </button>

                <button
                  onClick={() => scrollTo("solutions")}
                  className="btn-zip-outline px-8 py-4 min-h-[52px] rounded-full text-xs font-mono tracking-widest text-[#0A0A0D] flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>EXPLORE SOLUTIONS</span>
                  <ArrowRight className="w-4 h-4 text-[#0A0A0D] flex-shrink-0" />
                </button>
              </motion.div>

              {/* Trust Metric Hairline Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6 border-t border-[#0A0A0D]/10 grid grid-cols-3 gap-4"
              >
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-[#0A0A0D]">1–3 Wks</div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#878794] font-semibold">Fast Deployment</div>
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-[#0A0A0D]">Direct</div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#878794] font-semibold">WhatsApp Access</div>
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-[#0A0A0D]">Fixed</div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#878794] font-semibold">No Surprise Pricing</div>
                </div>
              </motion.div>
            </div>

            {/* Right Interactive Tech Architecture Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-3xl bg-[#FFFFFF] border border-[#0A0A0D]/12 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-6"
              >
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between border-b border-[#0A0A0D]/08 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#CCFF00] border border-[#0A0A0D]/30" />
                    <span className="font-mono text-xs font-bold text-[#0A0A0D] tracking-wider uppercase">
                      Optqvo Architecture Matrix
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#878794] uppercase tracking-widest font-semibold">
                    CONNECTED ECOSYSTEM
                  </span>
                </div>

                {/* Architecture Step Selector */}
                <div className="space-y-3">
                  {workflowNodes.map((node, idx) => {
                    const isSelected = activeNode === node.id;
                    const IconComp = node.icon;
                    return (
                      <div
                        key={node.id}
                        onClick={() => setActiveNode(node.id)}
                        className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-[#28113B] text-[#FAFAF8] border-[#28113B] shadow-md -translate-y-0.5"
                            : "bg-[#F8F8F5] text-[#0A0A0D] border-[#0A0A0D]/08 hover:border-[#0A0A0D]/25"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                isSelected ? "bg-white/10 text-[#CCFF00]" : "bg-[#0A0A0D]/06 text-[#28113B]"
                              }`}
                            >
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold leading-tight">{node.title}</h4>
                              <span
                                className={`font-mono text-[10px] tracking-wider uppercase font-semibold ${
                                  isSelected ? "text-[#CCFF00]" : "text-[#878794]"
                                }`}
                              >
                                {node.badge} • {node.metric}
                              </span>
                            </div>
                          </div>

                          <span
                            className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
                              isSelected
                                ? "bg-[#CCFF00] text-[#0A0A0D]"
                                : "bg-[#0A0A0D]/08 text-[#0A0A0D]"
                            }`}
                          >
                            {node.status}
                          </span>
                        </div>

                        {isSelected && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-xs text-[#FAFAF8]/80 leading-relaxed pt-1"
                          >
                            {node.description}
                          </motion.p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Live Action Integration Box */}
                <div className="p-4 rounded-2xl bg-[#0A0A0D] text-[#FAFAF8] flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#CCFF00] font-bold uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
                      <span>Custom Built For You</span>
                    </div>
                    <p className="text-xs text-[#FAFAF8]/70">
                      No generic templates. Built around your real business workflows.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry ? onOpenEnquiry() : scrollTo("contact")}
                    className="font-mono text-xs font-bold text-[#CCFF00] hover:underline underline-offset-4 cursor-pointer bg-transparent border-none flex-shrink-0"
                  >
                    BUILD →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 4-Pillar Hairline Bottom Strip */}
          <div className="mt-14 sm:mt-20 pt-8 border-t border-[#0A0A0D]/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l-2 border-[#28113B] pl-3">
              <span className="font-mono text-[11px] font-bold text-[#28113B] uppercase tracking-widest">
                CUSTOM WEBSITES
              </span>
              <p className="text-xs text-[#52525C] font-medium mt-1">High-speed, conversion-focused</p>
            </div>
            <div className="border-l-2 border-[#28113B] pl-3">
              <span className="font-mono text-[11px] font-bold text-[#28113B] uppercase tracking-widest">
                QR & ORDERING
              </span>
              <p className="text-xs text-[#52525C] font-medium mt-1">Instant digital menus & catalog</p>
            </div>
            <div className="border-l-2 border-[#28113B] pl-3">
              <span className="font-mono text-[11px] font-bold text-[#28113B] uppercase tracking-widest">
                AUTOMATIONS
              </span>
              <p className="text-xs text-[#52525C] font-medium mt-1">WhatsApp & business workflows</p>
            </div>
            <div className="border-l-2 border-[#28113B] pl-3">
              <span className="font-mono text-[11px] font-bold text-[#28113B] uppercase tracking-widest">
                BESPOKE TOOLS
              </span>
              <p className="text-xs text-[#52525C] font-medium mt-1">Dashboards & tailor-made apps</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
