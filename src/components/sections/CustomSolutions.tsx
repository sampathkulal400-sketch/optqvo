"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HelpCircle, Sparkles, MessageSquare, ArrowRight } from "lucide-react";

interface CustomSolutionsProps {
  onOpenEnquiry?: (category?: string) => void;
}

const problemScenarios = [
  {
    question: "Customers keep asking the same questions on phone or chat?",
    answer: "We can build a simple automated reply or customer inquiry helper to answer them 24/7.",
    iconColor: "text-amber-400",
    borderColor: "hover:border-amber-500/40",
  },
  {
    question: "Still managing bookings, records, or orders manually in notebooks?",
    answer: "We can automate repetitive work and give you a simple dashboard to manage everything easily.",
    iconColor: "text-blue-400",
    borderColor: "hover:border-blue-500/40",
  },
  {
    question: "Customers find your menu, services, or prices difficult to access?",
    answer: "We can create a clean digital QR menu or online catalog accessible in one tap.",
    iconColor: "text-violet-400",
    borderColor: "hover:border-violet-500/40",
  },
  {
    question: "Need a software system made specifically for your unique workflow?",
    answer: "We listen to your exact problem, design a simple system around it, and build it for you.",
    iconColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/40",
  },
];

export default function CustomSolutions({ onOpenEnquiry }: CustomSolutionsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="custom-solutions" ref={ref} className="relative py-12 lg:py-16 overflow-hidden bg-[#09090e]">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-wrap relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="badge mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            CUSTOM BUSINESS SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Have a Business Problem? <span className="gradient-text">Let&apos;s Build the Solution.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not every business works the same way. If you have a problem that needs a digital solution, tell us about it. We will understand your requirement and build a solution around it.
          </p>
        </motion.div>

        {/* Problem Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {problemScenarios.map((scenario, i) => (
            <motion.div
              key={scenario.question}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl glass border border-white/[0.08] ${scenario.borderColor} p-4 sm:p-7 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <HelpCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${scenario.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-1.5 leading-snug">
                    &ldquo;{scenario.question}&rdquo;
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-emerald-400 mb-1">
                    <span>→ Our Approach:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {scenario.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Interactive Problem Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl bg-gradient-to-r from-violet-900/30 via-slate-900 to-blue-900/30 border border-violet-500/30 p-5 sm:p-10 lg:p-12 text-center shadow-2xl"
        >
          <h3 className="text-xl sm:text-3xl font-black text-white mb-3 sm:mb-4 leading-snug">
            Do you have a unique problem that doesn&apos;t fit a standard template?
          </h3>
          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Tell us what you are trying to improve. We will analyze your situation, explain the options in simple terms, and build a cost-effective solution.
          </p>

          <button
            onClick={() => onOpenEnquiry ? onOpenEnquiry("Custom Business Problem") : scrollTo("contact")}
            className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-base text-white shadow-xl shadow-violet-600/30 cursor-pointer border-none"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span>Tell Us Your Problem</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
