"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HelpCircle,
  Sparkles,
  MessageSquare,
  ArrowRight,
  RefreshCw,
  Layers,
  Zap,
  CheckCircle2,
  Cpu,
  Database,
  Smartphone,
  TrendingUp,
  Clock,
  ArrowUpRight,
} from "lucide-react";

interface CustomSolutionsProps {
  onOpenEnquiry?: (category?: string) => void;
}

const transformations = [
  {
    id: "manual-to-automated",
    title: "Manual Processes → Automated Workflows",
    icon: Zap,
    tag: "WORKFLOW AUTOMATION",
    problem: "Staff spend 3+ hours daily replying to identical menu questions, confirming orders manually, and typing repetitive WhatsApp messages.",
    approach: "Deploy custom webhook triggers and instant WhatsApp automation scripts connected to the ordering portal.",
    solution: "24/7 intelligent automated inquiry responder with 1-tap WhatsApp catalog and instant order confirmations.",
    result: "Reclaims 15+ staff hours weekly and converts after-hours inquiries while you sleep.",
    metric: "15+ Hours Saved / Week",
  },
  {
    id: "scattered-to-organized",
    title: "Scattered Information → Organized Systems",
    icon: Database,
    tag: "OPERATIONAL ACCURACY",
    problem: "Customer contacts, booking logs, and payment receipts are scattered across paper diaries, phone notes, and personal WhatsApp chats.",
    approach: "Engineer a single secure cloud dashboard synced in real time with Google Sheets, PostgreSQL, and team notifications.",
    solution: "Unified operational dashboard with live calendar slots, automated customer lookup, and real-time audit logs.",
    result: "Zero double-bookings, 100% data audit visibility, and automated reminder alerts.",
    metric: "100% Record Accuracy",
  },
  {
    id: "disconnected-to-integrated",
    title: "Disconnected Tools → Integrated Pipeline",
    icon: RefreshCw,
    tag: "SYSTEM INTEGRATION",
    problem: "Payment gateway, booking forms, and client receipts are disconnected silos, requiring staff to copy-paste transaction IDs manually.",
    approach: "Architect robust API pipes connecting payment triggers directly to instant PDF receipt generation and WhatsApp dispatches.",
    solution: "Automated event pipeline: Payment Received → Automated Receipt Generated → Instant WhatsApp Confirmation.",
    result: "Instant customer gratification with 0 seconds of repetitive staff data-entry.",
    metric: "0s Manual Entry Delay",
  },
  {
    id: "slow-to-efficient",
    title: "Slow Processes → Lightning-Fast Operations",
    icon: Cpu,
    tag: "SPEED & SCALE",
    problem: "Complex calculations, rental pricing quotes, or membership discounts take 20 minutes to calculate by hand for each customer.",
    approach: "Build an interactive instant web calculator with custom business pricing algorithms and one-tap PDF quote export.",
    solution: "Interactive pricing & instant quotation engine configured around your company's proprietary pricing tiers.",
    result: "Cuts quote turnaround from 4 hours to 10 seconds, accelerating deal closures.",
    metric: "98% Faster Quotations",
  },
  {
    id: "basic-to-premium",
    title: "Basic Experiences → High-Converting Digital Presence",
    icon: Smartphone,
    tag: "CUSTOMER EXPERIENCE",
    problem: "Generic static pages with blurry photos and confusing layouts make high-value clients doubt your business credibility.",
    approach: "Design an authoritative, mobile-first digital flagship with crisp specifications, clear proof, and effortless inquiry flows.",
    solution: "Custom responsive web application engineered for sub-second speeds, smooth animations, and maximum conversion rates.",
    result: "Transforms casual online visitors into high-confidence qualified inbound inquiries.",
    metric: "3.2x Higher Inquiries",
  },
];

export default function CustomSolutions({ onOpenEnquiry }: CustomSolutionsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const current = transformations[selectedIdx];
  const IconComp = current.icon;

  return (
    <section
      id="custom-solutions"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-[#F8F8F5] text-[#0A0A0D]"
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
            <span>●</span> TRANSFORMATION ENGINE
          </span>
          <h2 className="display-section-title text-[#0A0A0D] mb-4">
            Turning Daily Friction Into <span className="highlight-lime">Automated Systems.</span>
          </h2>
          <p className="text-[#50505C] text-base sm:text-xl font-normal max-w-2xl mx-auto">
            Explore how modern software engineering turns manual bottlenecks into smooth, automated business workflows.
          </p>
        </motion.div>

        {/* Asymmetric Interactive Transformation Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {transformations.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              const ItemIcon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer border flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-[#28113B] text-[#FAFAF8] border-[#28113B] shadow-md translate-x-1"
                      : "bg-[#FFFFFF] text-[#0A0A0D] border-[#0A0A0D]/10 hover:border-[#0A0A0D]/25"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? "bg-white/15 text-[#CCFF00]"
                          : "bg-[#0A0A0D]/05 text-[#28113B]"
                      }`}
                    >
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span
                        className={`font-mono text-[9px] font-bold uppercase tracking-wider block ${
                          isSelected ? "text-[#CCFF00]" : "text-[#848492]"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <h4
                        className={`text-xs sm:text-base font-bold leading-snug ${
                          isSelected ? "text-[#FAFAF8]" : "text-[#0A0A0D]"
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 ${
                      isSelected ? "text-[#CCFF00]" : "text-[#848492]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Problem → Approach → Solution → Result Matrix (7 cols) */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 rounded-3xl bg-[#FFFFFF] border border-[#0A0A0D]/12 p-5 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-5 sm:space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#0A0A0D]/08">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#CCFF00] text-[#0A0A0D] uppercase tracking-widest">
                  {current.tag}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#28113B] font-bold bg-[#28113B]/06 px-3 py-1 rounded-full border border-[#28113B]/15">
                <TrendingUp className="w-3.5 h-3.5 text-[#28113B]" />
                <span>{current.metric}</span>
              </div>
            </div>

            {/* The 4-Stage Architectural Progression */}
            <div className="space-y-4">
              {/* Problem */}
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/60">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-rose-700 block mb-1">
                  1. THE OPERATIONAL FRICTION:
                </span>
                <p className="text-xs sm:text-sm text-[#0A0A0D]/85 font-normal leading-relaxed">
                  {current.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-700 block mb-1">
                  2. OPTQVO ENGINEERING APPROACH:
                </span>
                <p className="text-xs sm:text-sm text-[#0A0A0D]/85 font-normal leading-relaxed">
                  {current.approach}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-2xl bg-[#F8F8F5] border border-[#0A0A0D]/10">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#28113B] block mb-1">
                  3. DELIVERED DIGITAL SYSTEM:
                </span>
                <p className="text-xs sm:text-sm text-[#0A0A0D] font-medium leading-relaxed">
                  {current.solution}
                </p>
              </div>

              {/* Result */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-300/70">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-800 block mb-1">
                  4. MEASURED BUSINESS OUTCOME:
                </span>
                <p className="text-xs sm:text-sm text-[#0A0A0D] font-bold leading-relaxed">
                  {current.result}
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#848492] font-mono">
                Have a similar challenge in your operations?
              </span>
              <button
                onClick={() =>
                  onOpenEnquiry ? onOpenEnquiry(current.title) : undefined
                }
                className="btn-zip-plum px-7 py-3.5 rounded-full text-xs font-mono tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2 cursor-pointer shadow-md w-full sm:w-auto"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>SOLVE THIS PROBLEM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
