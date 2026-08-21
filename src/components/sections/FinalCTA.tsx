"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onOpenEnquiry?: (category?: string) => void;
}

export default function FinalCTA({ onOpenEnquiry }: FinalCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-[#F8F8F5] text-[#0A0A0D]"
    >
      <div className="section-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#0B0B0E] text-[#FAFAF8] p-8 sm:p-14 lg:p-20 text-center shadow-2xl max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Subtle Ambient Pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="dark-dot-grid absolute inset-0 opacity-25" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#28113B]/40 rounded-full filter blur-[100px]" />
          </div>

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <span className="badge-lime">
              <span>●</span> READY TO BUILD
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-[#FAFAF8] leading-[1.05]">
              Have a problem you&apos;d like to solve?
            </h2>

            <p className="text-base sm:text-2xl text-[#FAFAF8]/80 max-w-2xl mx-auto leading-relaxed font-normal">
              Tell us what you are trying to improve. We will diagnose your situation, suggest practical digital tools, and give you a fixed quote.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenEnquiry ? onOpenEnquiry("Final Destination CTA") : scrollTo("contact")}
                className="btn-zip-lime w-full sm:w-auto px-9 py-4 min-h-[52px] rounded-full text-xs font-mono tracking-widest text-[#0A0A0D] flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>TELL US YOUR PROBLEM</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
            </div>

            {/* Trust Guarantees Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-[#FAFAF8]/75">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
                <span>FREE 30-MIN CONSULTATION</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
                <span>NO SURPRISE INVOICES</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
                <span>SAME-DAY WHATSAPP REPLY</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
