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
    <section id="contact" ref={ref} className="relative py-12 lg:py-16 overflow-hidden bg-[#FAF8F5]">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      {/* Background soft glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute -bottom-24 -left-20 w-[500px] h-[500px] bg-indigo-500/5 filter blur-[80px]" />
        <div className="blob blob-delay-1 absolute -top-20 -right-20 w-[450px] h-[450px] bg-blue-500/5 filter blur-[80px]" />
      </div>

      <div className="section-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-stone-50 border border-indigo-200 p-5 sm:p-10 lg:p-14 text-center shadow-xl max-w-4xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-700 font-bold bg-indigo-50 px-3 py-1 rounded-md border border-indigo-200 inline-block mb-3">
            08 / GET IN TOUCH
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 mb-3 sm:mb-4 leading-tight">
            Have a problem you&apos;d like to solve?
          </h2>

          <p className="text-stone-600 text-xs sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Tell us what you&apos;re trying to improve. We&apos;ll help you find and build a practical digital solution for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-10">
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry("Final CTA") : scrollTo("contact")}
              className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-base text-white shadow-md cursor-pointer border-none"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Tell Us Your Problem</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-sm text-stone-700 border-t border-stone-200/70 pt-5 sm:pt-6">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Free 30-Minute Consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>No Obligation Required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Same-Day WhatsApp Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
