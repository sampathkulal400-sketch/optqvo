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
    <section id="contact" ref={ref} className="relative py-12 lg:py-16 overflow-hidden bg-[#09090e]">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      {/* Radial background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute -bottom-24 -left-20 w-[500px] h-[500px] bg-violet-600/10 filter blur-[80px]" />
        <div className="blob blob-delay-1 absolute -top-20 -right-20 w-[450px] h-[450px] bg-blue-600/10 filter blur-[80px]" />
      </div>

      <div className="section-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-violet-950/40 via-slate-900 to-blue-950/40 border border-violet-500/30 p-8 sm:p-14 text-center shadow-2xl max-w-4xl mx-auto"
        >
          <span className="badge mb-4">GET IN TOUCH</span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Have a problem you&apos;d like to solve?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us what you&apos;re trying to improve. We&apos;ll help you find and build a practical digital solution for your business.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry("Final CTA") : scrollTo("contact")}
              className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white shadow-xl shadow-violet-600/30 cursor-pointer border-none"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Tell Us Your Problem</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 border-t border-white/[0.08] pt-6">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Free 30-Minute Consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No Obligation Required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Same-Day WhatsApp Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
