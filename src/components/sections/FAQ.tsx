"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageSquare } from "lucide-react";

interface FAQProps {
  onOpenEnquiry?: (category?: string) => void;
}

const faqs = [
  {
    q: "How do I get started with Optqvo?",
    a: "Simply tap 'Tell Us Your Problem' or message us on WhatsApp. Tell us what your business does and what problem you are trying to solve. We reply the same day with practical options.",
  },
  {
    q: "Do I need to be technical to work with Optqvo?",
    a: "Not at all. You just describe what you want to achieve for your business. We explain everything in plain language and handle all design, setup, hosting, and technical work for you.",
  },
  {
    q: "How much will a website or digital solution cost?",
    a: "We provide affordable, practical pricing tailored to small and medium businesses. After understanding your requirement, we give you a clear, fixed quote before starting — with no surprise fees later.",
  },
  {
    q: "How long will my project take to complete?",
    a: "Simple websites, landing pages, and digital QR menus take 1–2 weeks. Custom booking systems, mobile apps, or business tools typically take 3–6 weeks. We give you a realistic timeline upfront.",
  },
  {
    q: "Can you help automate repetitive work in WhatsApp or Excel?",
    a: "Yes! This is a very common request. We help businesses automate WhatsApp customer alerts, lead follow-ups, order notifications, and data sync so you save hours every week.",
  },
  {
    q: "What happens after my website or app goes live?",
    a: "We stay on to support you. We handle web hosting, security backups, updates, and small changes so your website stays online and runs smoothly without you worrying.",
  },
];

export default function FAQ({ onOpenEnquiry }: FAQProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" ref={ref} className="relative py-16 lg:py-24 overflow-hidden bg-[#FAFAF8] text-[#0B0B0C]">
      <div className="section-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#FAFAF8] font-bold bg-[#3B1B4E] px-3.5 py-1 rounded-full inline-block mb-4">
            07 / FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-[#0B0B0C] mb-4">
            Common <span className="highlight-lime">Questions</span>
          </h2>
          <p className="text-[#0B0B0C]/75 text-base sm:text-lg max-w-xl mx-auto font-normal">
            Everything you need to know before working with Optqvo — explained in simple words.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-3xl bg-white border border-[#0B0B0C]/15 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-3 p-5 sm:p-6 text-left cursor-pointer bg-transparent border-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0B0B0C] leading-snug">{faq.q}</span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? "bg-[#3B1B4E] text-[#CCFF00]" : "bg-[#0B0B0C]/5 text-[#0B0B0C]"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#0B0B0C]/75 leading-relaxed border-t border-[#0B0B0C]/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="text-center mt-12">
          <p className="text-xs sm:text-sm text-[#0B0B0C]/75">
            Have a different question about your business?{" "}
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry("FAQ Question") : scrollTo("contact")}
              className="font-mono text-xs text-[#3B1B4E] font-bold hover:underline cursor-pointer bg-transparent border-none inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#3B1B4E]" />
              Ask us directly
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
