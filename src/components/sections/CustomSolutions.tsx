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
    <section id="custom-solutions" ref={ref} className="relative py-16 lg:py-24 overflow-hidden bg-[#FAFAF8] text-[#0B0B0C]">
      <div className="section-wrap relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#FAFAF8] font-bold bg-[#3B1B4E] px-3.5 py-1 rounded-full inline-block mb-4">
            04 / CUSTOM BUSINESS PROBLEMS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-[#0B0B0C] mb-4">
            Have a Business Problem? <span className="highlight-lime">Let&apos;s Build the Solution.</span>
          </h2>
          <p className="text-[#0B0B0C]/75 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Not every business works the same way. If you have a problem that needs a digital solution, tell us about it. We will understand your requirement and build a solution around it.
          </p>
        </motion.div>

        {/* Problem Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {problemScenarios.map((scenario, i) => (
            <motion.div
              key={scenario.question}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-white border border-[#0B0B0C]/15 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#3B1B4E]/10 border border-[#3B1B4E]/20 flex items-center justify-center text-[#3B1B4E] flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0B0C] mb-2 leading-snug">
                    &ldquo;{scenario.question}&rdquo;
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#3B1B4E] uppercase tracking-wider mb-1">
                    <span>→ OUR APPROACH:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0B0B0C]/75 leading-relaxed">
                    {scenario.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Interactive Problem Box (Plum Surface with Lime Button) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl bg-[#3B1B4E] text-[#FAFAF8] p-6 sm:p-12 lg:p-14 text-center shadow-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#0B0B0C] font-bold bg-[#CCFF00] px-3.5 py-1 rounded-full inline-block mb-4">
            TAILORED SOFTWARE & AUTOMATION
          </span>

          <h3 className="text-2xl sm:text-4xl font-black text-[#FAFAF8] mb-4 leading-snug">
            Do you have a unique problem that doesn&apos;t fit a standard template?
          </h3>
          <p className="text-sm sm:text-lg text-[#FAFAF8]/80 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Tell us what you are trying to improve. We will analyze your situation, explain the options in simple terms, and build a cost-effective solution.
          </p>

          <button
            onClick={() => onOpenEnquiry ? onOpenEnquiry("Custom Business Problem") : scrollTo("contact")}
            className="btn-zip-lime w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest text-[#0B0B0C] shadow-lg cursor-pointer border-none"
          >
            <MessageSquare className="w-4 h-4 flex-shrink-0" />
            <span>TELL US YOUR PROBLEM</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
