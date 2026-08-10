"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe, Smartphone, Code2, Zap, BarChart3,
  Check, ArrowRight, Calculator, Clock
} from "lucide-react";

const WHATSAPP_NUMBER = "918217206292";

interface ProjectType {
  id: string;
  name: string;
  icon: typeof Globe;
  baseWeeks: number;
  description: string;
}

const projectTypes: ProjectType[] = [
  { id: "website", name: "Website / Landing Page", icon: Globe, baseWeeks: 2, description: "Responsive business website built for conversion & SEO" },
  { id: "mobile", name: "Mobile App (iOS/Android)", icon: Smartphone, baseWeeks: 6, description: "Native or cross-platform mobile application" },
  { id: "software", name: "Custom Software / CRM", icon: Code2, baseWeeks: 4, description: "Tailored management system, ERP, or internal tool" },
  { id: "automation", name: "Business Automation", icon: Zap, baseWeeks: 1, description: "Automated workflows, data syncing & WhatsApp alerts" },
  { id: "dashboard", name: "Custom Dashboard", icon: BarChart3, baseWeeks: 2, description: "Real-time analytics & reporting command center" },
];

interface FeatureOption {
  id: string;
  label: string;
  extraDays: number;
}

const featureOptions: FeatureOption[] = [
  { id: "auth", label: "User Login & Accounts", extraDays: 3 },
  { id: "payments", label: "UPI & Payment Gateway", extraDays: 4 },
  { id: "admin", label: "Admin Control Panel", extraDays: 5 },
  { id: "whatsapp", label: "Automated WhatsApp Alerts", extraDays: 3 },
  { id: "database", label: "Cloud Database & API", extraDays: 4 },
  { id: "ai", label: "AI Customer Assistant", extraDays: 5 },
];

export default function ProjectEstimator() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedType, setSelectedType] = useState<string>("website");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "payments"]);
  const [isFastTrack, setIsFastTrack] = useState<boolean>(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate estimated weeks
  const currentProjectType = projectTypes.find((p) => p.id === selectedType) || projectTypes[0];
  const extraDaysTotal = selectedFeatures.reduce((acc, fId) => {
    const feat = featureOptions.find((f) => f.id === fId);
    return acc + (feat ? feat.extraDays : 0);
  }, 0);

  const totalDays = currentProjectType.baseWeeks * 7 + extraDaysTotal;
  const rawWeeks = Math.ceil(totalDays / 7);
  const finalWeeks = isFastTrack ? Math.max(1, Math.round(rawWeeks * 0.7)) : rawWeeks;

  // Generate WhatsApp message
  const activeFeatureLabels = selectedFeatures
    .map((id) => featureOptions.find((f) => f.id === id)?.label)
    .filter(Boolean)
    .join(", ");

  const messageText = `Hi Optqvo team! I used your Project Estimator:\n\n` +
    `• Project Type: ${currentProjectType.name}\n` +
    `• Features: ${activeFeatureLabels || "Standard Package"}\n` +
    `• Speed: ${isFastTrack ? "Fast Track (Expedited)" : "Standard Timeline"}\n` +
    `• Est. Timeframe: ~${finalWeeks} ${finalWeeks === 1 ? "week" : "weeks"}\n\n` +
    `I'd like to get an exact quote & discuss next steps!`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;

  return (
    <section id="estimator" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="section-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge mb-4">
            <Calculator className="w-3.5 h-3.5 text-violet-400" />
            Interactive Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Estimate Your Project <span className="gradient-text">In Seconds</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Select your requirements to calculate an estimated timeframe and generate an instant project brief.
          </p>
        </motion.div>

        {/* Main Estimator Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-3xl glass-strong border border-white/[0.1] p-6 sm:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Left Options (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Project Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  1. Select Project Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((pt) => {
                    const Icon = pt.icon;
                    const isSelected = selectedType === pt.id;
                    return (
                      <button
                        key={pt.id}
                        type="button"
                        onClick={() => setSelectedType(pt.id)}
                        className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-violet-600/15 border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                            : "bg-white/[0.03] border-white/[0.07] hover:border-white/[0.15]"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-1.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected ? "bg-violet-500 text-white" : "bg-white/[0.06] text-slate-400"
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className={`text-sm font-bold ${isSelected ? "text-white" : "text-slate-300"}`}>
                            {pt.name}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-tight">{pt.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Key Features */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  2. Select Required Features
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featureOptions.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => toggleFeature(feat.id)}
                        className={`px-3.5 py-3 rounded-xl border text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
                          isChecked
                            ? "bg-violet-500/10 border-violet-500/40 text-white"
                            : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/[0.12]"
                        }`}
                      >
                        <span className="text-xs font-medium">{feat.label}</span>
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          isChecked ? "bg-violet-500 border-violet-400 text-white" : "border-white/20 bg-transparent"
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Priority / Speed */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  3. Timeline Priority
                </label>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-violet-400" />
                    <div>
                      <p className="text-sm font-semibold text-white">Fast Track Delivery</p>
                      <p className="text-xs text-slate-500">Accelerate development sprint by ~30%</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsFastTrack(!isFastTrack)}
                    className={`w-12 h-6 rounded-full transition-colors duration-200 relative cursor-pointer ${
                      isFastTrack ? "bg-violet-600" : "bg-white/10"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform duration-200 ${
                      isFastTrack ? "translate-x-6" : "translate-x-0.5"
                    }`} />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Summary Card (5 cols) */}
            <div className="lg:col-span-5 h-full flex flex-col">
              <div className="rounded-2xl bg-[#09090d] border border-white/[0.08] p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-4 mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Brief</span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Live Estimate
                    </span>
                  </div>

                  {/* Estimated Timeframe Box */}
                  <div className="bg-gradient-to-br from-violet-600/15 to-blue-600/15 border border-violet-500/30 rounded-xl p-5 mb-6 text-center">
                    <p className="text-xs text-violet-300 font-medium mb-1">Estimated Time to Launch</p>
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
                      ~{finalWeeks} {finalWeeks === 1 ? "Week" : "Weeks"}
                    </div>
                    <p className="text-[11px] text-slate-400">
                      {isFastTrack ? "⚡ Expedited Delivery Applied" : "Standard Development Schedule"}
                    </p>
                  </div>

                  {/* Summary List */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Selected Type:</span>
                      <span className="text-slate-200 font-semibold">{currentProjectType.name}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Selected Features:</span>
                      <span className="text-slate-200 font-semibold">{selectedFeatures.length} Modules</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Code Guarantee:</span>
                      <span className="text-emerald-400 font-semibold">100% Owned by You</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Post-Launch Support:</span>
                      <span className="text-violet-400 font-semibold">Included</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 transition-all duration-200 shadow-[0_4px_20px_rgba(16,185,129,0.3)] no-underline"
                  >
                    <span>Send Brief via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-slate-500 text-center mt-3">
                    Instant reply guaranteed • No obligation to proceed
                  </p>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
