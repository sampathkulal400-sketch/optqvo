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
} from "lucide-react";

interface CustomSolutionsProps {
  onOpenEnquiry?: (category?: string) => void;
}

const transformations = [
  {
    id: "inquiry-friction",
    icon: Smartphone,
    problem: "Customers repeatedly ask the exact same menu, timing, and pricing questions over phone calls.",
    approach: "Deploy an instant WhatsApp automated assistant and clean interactive digital menu.",
    solution: "24/7 automated inquiry responder with 1-tap WhatsApp catalog checkout.",
    result: "Saves 15+ hours of manual staff chatting weekly and never misses an after-hours lead.",
    tag: "CUSTOMER EXPERIENCE",
  },
  {
    id: "manual-records",
    icon: Database,
    problem: "Staff manage bookings, orders, and customer entries in loose paper diaries and messy spreadsheets.",
    approach: "Build a single responsive internal dashboard synced directly with Google Sheets and WhatsApp.",
    solution: "Unified operational dashboard with live slot management and auto-confirmations.",
    result: "Zero double-bookings, 100% data audit visibility, and automated reminder alerts.",
    tag: "OPERATIONAL ACCURACY",
  },
  {
    id: "disconnected-tools",
    icon: RefreshCw,
    problem: "Payment gateway, Google forms, and client emails are disconnected, requiring manual copy-pasting.",
    approach: "Architect seamless webhook pipes that sync every customer transaction instantly.",
    solution: "Automated event pipeline: payment received → invoice generated → WhatsApp alert sent.",
    result: "Instant customer gratification with 0 seconds of repetitive staff data-entry.",
    tag: "SYSTEM AUTOMATION",
  },
  {
    id: "bespoke-rules",
    icon: Cpu,
    problem: "Business has unique custom pricing, member tiers, or field rental rules that standard SaaS tools reject.",
    approach: "Engineer a lightweight, tailor-made web portal built specifically for your exact business rules.",
    solution: "Custom web application with custom calculations, member authentication, and reporting.",
    result: "A proprietary asset that matches your exact business model with no monthly SaaS lock-in.",
    tag: "CUSTOM SOFTWARE",
  },
];

export default function CustomSolutions({ onOpenEnquiry }: CustomSolutionsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentTransformation = transformations[selectedIdx];

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
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0D] mb-4">
            Turning Daily Friction Into <span className="highlight-lime">Automated Systems.</span>
          </h2>
          <p className="text-[#52525C] text-base sm:text-xl font-normal">
            See how technology turns manual bottlenecks into automated, reliable workflows for growing businesses.
          </p>
        </motion.div>

        {/* Interactive Problem → Solution Storytelling Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Transformation Nav Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#878794] font-bold block mb-2 px-1">
              SELECT SCENARIO:
            </span>
            {transformations.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#28113B] text-[#FAFAF8] border-[#28113B] shadow-md -translate-y-0.5"
                      : "bg-white text-[#0A0A0D] border-[#0A0A0D]/08 hover:border-[#0A0A0D]/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className={`font-mono text-[10px] uppercase font-bold tracking-wider ${
                        isSelected ? "text-[#CCFF00]" : "text-[#878794]"
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? "text-[#CCFF00]" : "text-[#0A0A0D]/40"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold leading-snug line-clamp-2">
                    {item.problem}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Right Detailed 4-Stage Architecture Canvas */}
          <div className="lg:col-span-8">
            <motion.div
              key={currentTransformation.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-[#FFFFFF] border border-[#0A0A0D]/12 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] space-y-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#0A0A0D]/08 pb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#28113B] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] border border-[#0A0A0D]" />
                  ENGINEERING TRANSFORMATION PIPELINE
                </span>
                <span className="font-mono text-xs text-[#878794] font-bold">
                  STEP 0{selectedIdx + 1} OF 04
                </span>
              </div>

              {/* 4 Steps: Problem → Approach → Solution → Result */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. The Problem */}
                <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] font-bold text-rose-800 uppercase tracking-widest">
                    <span>1. BOTTLENECK</span>
                    <span className="text-rose-600 font-extrabold">PROBLEM</span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">
                    {currentTransformation.problem}
                  </p>
                </div>

                {/* 2. Our Approach */}
                <div className="p-5 rounded-2xl bg-[#28113B]/05 border border-[#28113B]/15 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] font-bold text-[#28113B] uppercase tracking-widest">
                    <span>2. METHODOLOGY</span>
                    <span className="text-[#28113B] font-extrabold">APPROACH</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0A0A0D] font-medium leading-relaxed">
                    {currentTransformation.approach}
                  </p>
                </div>

                {/* 3. The Solution */}
                <div className="p-5 rounded-2xl bg-[#CCFF00]/20 border border-[#0A0A0D]/15 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] font-bold text-[#0A0A0D] uppercase tracking-widest">
                    <span>3. DEPLOYED TECH</span>
                    <span className="text-[#28113B] font-extrabold">SOLUTION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0A0A0D] font-semibold leading-relaxed">
                    {currentTransformation.solution}
                  </p>
                </div>

                {/* 4. The Result */}
                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] font-bold text-emerald-800 uppercase tracking-widest">
                    <span>4. MEASURED VALUE</span>
                    <span className="text-emerald-700 font-extrabold">RESULT</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                    {currentTransformation.result}
                  </p>
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#0A0A0D]/08">
                <span className="text-xs text-[#52525C] font-medium">
                  Have a similar friction point in your business?
                </span>
                <button
                  onClick={() => onOpenEnquiry ? onOpenEnquiry(currentTransformation.tag) : scrollTo("contact")}
                  className="btn-zip-plum px-7 py-3 rounded-full text-xs font-mono tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2 cursor-pointer shadow-sm w-full sm:w-auto"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>SOLVE THIS FOR MY BUSINESS</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* High-Impact Bespoke Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-3xl bg-[#28113B] text-[#FAFAF8] p-8 sm:p-12 lg:p-14 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="badge-lime">
              <span>●</span> BESPOKE SOFTWARE & AUTOMATION
            </span>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#FAFAF8] leading-tight">
              Have a unique problem that doesn&apos;t fit a standard template?
            </h3>

            <p className="text-base sm:text-lg text-[#FAFAF8]/80 leading-relaxed font-normal">
              Tell us what you are trying to improve. We analyze your situation, explain the architecture in plain English, and build a cost-effective system.
            </p>

            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry("Custom Problem") : scrollTo("contact")}
              className="btn-zip-lime px-9 py-4 rounded-full text-xs font-mono tracking-widest text-[#0A0A0D] inline-flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 flex-shrink-0" />
              <span>TELL US YOUR UNIQUE PROBLEM</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
