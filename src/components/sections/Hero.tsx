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
  Activity,
  ShieldCheck,
  ArrowUpRight,
  Workflow,
  RefreshCw,
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
  const yText = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const workflowNodes = [
    {
      id: 0,
      phase: "01",
      badge: "STEP ONE",
      title: "Your Customers Find You Online",
      tagline: "A website, app, or QR menu that works on any phone",
      metric: "Opens in 1 second",
      icon: Smartphone,
      description: "We build your digital shop front — a website, QR menu, or booking page your customers can open on any phone in seconds, without downloading anything.",
      status: "ALWAYS ON",
      activeTelemetry: "Works 24 hours, 7 days a week",
      events: ["Customer scans your QR code", "Booking form submitted", "Enquiry sent to your WhatsApp"],
      color: "#28113B",
      accent: "#CCFF00",
    },
    {
      id: 1,
      phase: "02",
      badge: "STEP TWO",
      title: "You Get Notified Instantly",
      tagline: "No more missed calls, lost papers, or manual follow-ups",
      metric: "100% Automatic",
      icon: Cpu,
      description: "When a customer enquires, orders, or books — you get an instant WhatsApp alert. Invoices generate themselves. No copy-pasting, no chasing.",
      status: "ALWAYS RUNNING",
      activeTelemetry: "Nothing slips through the cracks",
      events: ["WhatsApp alert sent to your phone", "PDF invoice sent to customer", "Order recorded automatically"],
      color: "#181824",
      accent: "#38BDF8",
    },
    {
      id: 2,
      phase: "03",
      badge: "STEP THREE",
      title: "See Your Business Clearly",
      tagline: "Know your sales, orders & customers — all in one place",
      metric: "Always Up-to-Date",
      icon: Database,
      description: "A simple, clean dashboard showing your daily sales, pending orders, and customer history — like a WhatsApp for your business data, but cleaner.",
      status: "LIVE DASHBOARD",
      activeTelemetry: "Your business numbers, always current",
      events: ["Today's revenue updated", "Pending orders visible", "Customer history saved"],
      color: "#112217",
      accent: "#4ADE80",
    },
  ];

  const activeData = workflowNodes[activeNode];

  return (
    <section
      id="home"
      ref={ref}
      className="relative pt-24 pb-14 sm:pt-36 sm:pb-28 overflow-hidden bg-[#F8F8F5]"
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
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6"
          >
            <span className="badge-plum">
              PRACTICAL DIGITAL SYSTEMS
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#50505C] uppercase tracking-widest font-semibold">
              Software • Automations • Web • Mobile
            </span>
          </motion.div>

          {/* Main Hero Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
            {/* Left Column: Bold Typography & Action Triggers (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="display-hero-title text-[#0A0A0D]"
                >
                  EVERY DAY YOU WAIT,{" "}
                  <span className="block mt-1 sm:mt-2">
                    <span className="highlight-lime">A COMPETITOR WINS.</span>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.16 }}
                  className="text-base sm:text-xl lg:text-2xl text-[#50505C] font-normal leading-relaxed max-w-2xl"
                >
                  We build websites, apps, WhatsApp automations, and simple business tools that help local businesses look professional, save time, and get more customers — without any tech headache.
                </motion.p>
              </div>

              {/* Action Buttons & Secondary Exploration */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="space-y-5 sm:space-y-6 pt-1"
              >
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <button
                    onClick={() =>
                      onOpenEnquiry ? onOpenEnquiry("Hero Primary CTA") : scrollTo("contact")
                    }
                    className="btn-zip-plum w-full sm:w-auto px-7 sm:px-8 py-4 min-h-[50px] sm:min-h-[52px] rounded-full text-xs font-mono tracking-widest text-[#FAFAF8] flex items-center justify-center gap-3 shadow-lg cursor-pointer group"
                  >
                    <MessageSquare className="w-4 h-4 text-[#CCFF00] group-hover:scale-110 transition-transform" />
                    <span>JUST TELL US WHAT YOU SELL</span>
                    <ArrowRight className="w-4 h-4 text-[#CCFF00] group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => scrollTo("work")}
                    className="btn-zip-outline w-full sm:w-auto px-7 sm:px-8 py-4 min-h-[50px] sm:min-h-[52px] rounded-full text-xs font-mono tracking-widest text-[#0A0A0D] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>INSPECT SHIPPED WORK</span>
                    <ArrowUpRight className="w-4 h-4 text-[#50505C]" />
                  </button>
                </div>

                {/* Supporting Trust & Performance Proof Strip */}
                <div className="pt-5 sm:pt-6 border-t border-[#0A0A0D]/08 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 font-mono text-[11px] text-[#50505C]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#28113B] flex-shrink-0" />
                    <span className="font-medium">₹0 Surprise Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#28113B] flex-shrink-0" />
                    <span className="font-medium">Direct Developer Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#28113B] flex-shrink-0" />
                    <span className="font-medium">Rapid 1–3 Week Delivery</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive System Architecture Visualizer (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col"
            >
              <div className="rounded-3xl bg-[#09090C] text-[#FAFAF8] p-5 sm:p-7 border border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.14)] flex flex-col justify-between h-full relative overflow-hidden">
                {/* Visualizer Header Bar */}
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      <span className="font-mono text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest ml-1 sm:ml-2 truncate">
                        HOW IT WORKS FOR YOUR BUSINESS
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/06 border border-white/10 font-mono text-[9px] sm:text-[10px] text-[#CCFF00]">
                      <Activity className="w-3 h-3 animate-pulse" />
                      <span>LIVE</span>
                    </div>
                  </div>

                  {/* Interactive Phase Selectors */}
                  <div className="grid grid-cols-3 gap-1 p-1 bg-white/05 rounded-2xl border border-white/08">
                    {workflowNodes.map((node, idx) => {
                      const isSelected = activeNode === idx;
                      const IconComponent = node.icon;
                      return (
                        <button
                          key={node.id}
                          onClick={() => setActiveNode(idx)}
                          className={`p-2 sm:p-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer border-none flex flex-col gap-0.5 sm:gap-1 ${
                            isSelected
                              ? "bg-white/15 text-[#FAFAF8] shadow-sm"
                              : "bg-transparent text-white/50 hover:text-white/80 hover:bg-white/05"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[8px] sm:text-[9px] font-bold text-[#CCFF00] uppercase">
                              {node.phase}
                            </span>
                            
                          </div>
                          <span className="font-mono text-[9px] sm:text-[10px] font-bold truncate">
                            {node.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Node Live Showcase Panel */}
                <div className="my-4 sm:my-5 p-4 sm:p-5 rounded-2xl bg-white/04 border border-white/08 space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-[#CCFF00] tracking-wider block">
                        {activeData.badge} • {activeData.metric}
                      </span>
                      <h4 className="text-base sm:text-xl font-black text-[#FAFAF8] mt-0.5">
                        {activeData.title}
                      </h4>
                    </div>
                    
                  </div>

                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                    {activeData.description}
                  </p>

                  {/* Live Simulated Event Dispatch Stream */}
                  <div className="space-y-1.5 pt-2 border-t border-white/08">
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-white/40 block">
                       WHAT HAPPENS AUTOMATICALLY:
                    </span>
                    <div className="space-y-1">
                      {activeData.events.map((evt) => (
                        <div
                          key={evt}
                          className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-white/90 bg-white/04 px-2 sm:px-2.5 py-1.5 rounded-lg border border-white/05"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 truncate mr-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] flex-shrink-0" />
                            <span className="truncate">{evt}</span>
                          </div>
                          <span className="text-emerald-400 font-bold flex-shrink-0 text-[9px] sm:text-[10px]">✓ Done</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visualizer Footer Bar */}
                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[10px] text-white/60">
                  <span className="text-[9px] sm:text-[10px]">TAP EACH STEP TO SEE HOW IT WORKS</span>
                  <button
                    onClick={() =>
                      onOpenEnquiry
                        ? onOpenEnquiry(activeData.title)
                        : scrollTo("contact")
                    }
                    className="text-[#CCFF00] hover:underline cursor-pointer bg-transparent border-none p-0 flex items-center gap-1 font-bold text-[10px]"
                  >
                    <span>BUILD THIS FOR YOUR BUSINESS</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
