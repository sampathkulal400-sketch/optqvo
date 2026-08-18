"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

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
    <section id="contact" ref={ref} className="relative py-16 lg:py-24 overflow-hidden bg-[#FAFAF8] text-[#0B0B0C]">
      <div className="section-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#3B1B4E] text-[#FAFAF8] p-6 sm:p-12 lg:p-16 text-center shadow-2xl max-w-4xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#0B0B0C] font-bold bg-[#CCFF00] px-3.5 py-1 rounded-full inline-block mb-4">
            GET IN TOUCH
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAFAF8] mb-4 leading-tight">
            Have a problem you&apos;d like to solve?
          </h2>

          <p className="text-[#FAFAF8]/80 text-sm sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Tell us what you&apos;re trying to improve. We&apos;ll help you find and build a practical digital solution for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-10">
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry("Final CTA") : scrollTo("contact")}
              className="btn-zip-lime w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest text-[#0B0B0C] shadow-lg cursor-pointer border-none"
            >
              <MessageSquare className="w-4 h-4 flex-shrink-0" />
              <span>TELL US YOUR PROBLEM</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-mono text-xs text-[#FAFAF8]/80 border-t border-white/15 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
              <span>FREE 30-MIN CONSULTATION</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
              <span>NO OBLIGATION REQUIRED</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
              <span>SAME-DAY WHATSAPP RESPONSE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
