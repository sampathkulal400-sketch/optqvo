"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageSquare, ArrowRight } from "lucide-react";

interface FAQProps {
  onOpenEnquiry?: (category?: string) => void;
}

const faqs = [
  {
    q: "How do I get started with Optqvo?",
    a: "Simply tap 'Tell Us Your Problem' or message us directly on WhatsApp. Tell us what your business does and what problem you are trying to solve. We reply the same day with practical options, timeline, and an exact price quote.",
  },
  {
    q: "Do I need to be technical to work with Optqvo?",
    a: "Not at all. You just describe what you want to achieve for your business. We explain everything in plain language and handle all design, software coding, domain setup, cloud hosting, and technical integrations for you.",
  },
  {
    q: "How much will a website or digital solution cost?",
    a: "We provide affordable, practical pricing tailored to small and medium businesses. After understanding your requirement, we give you a clear, fixed quote before starting — with no surprise fees later.",
  },
  {
    q: "How long will my project take to complete?",
    a: "Simple websites, landing pages, and digital QR menus take 1–2 weeks. Custom booking systems, mobile apps, or business tools typically take 3–5 weeks. We give you a realistic timeline upfront.",
  },
  {
    q: "Can you help automate repetitive work in WhatsApp or Excel?",
    a: "Yes! This is one of our most popular services. We help businesses automate WhatsApp customer alerts, lead follow-ups, order notifications, and data sync so you save hours every week.",
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
    <section
      id="faq"
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
            <span>●</span> FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="display-section-title text-[#0A0A0D] mb-4">
            Common <span className="highlight-lime">Questions.</span>
          </h2>
          <p className="text-[#50505C] text-base sm:text-xl font-normal max-w-xl mx-auto">
            Everything you need to know about working with Optqvo — explained in simple terms.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#FFFFFF] border-[#28113B]/40 shadow-lg"
                    : "bg-[#FFFFFF] border-[#0A0A0D]/10 hover:border-[#0A0A0D]/20 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-7 text-left cursor-pointer bg-transparent border-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-mono text-xs font-bold text-[#848492]">
                      0{i + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#0A0A0D]">
                      {faq.q}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#0A0A0D]/05 flex items-center justify-center text-[#0A0A0D] flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#50505C] leading-relaxed font-normal border-t border-[#0A0A0D]/06">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center pt-4"
        >
          <p className="text-xs sm:text-sm text-[#848492] font-mono mb-3">
            Have a different question not listed above?
          </p>
          <button
            onClick={() => onOpenEnquiry ? onOpenEnquiry("FAQ Inquiry") : scrollTo("contact")}
            className="btn-zip-plum px-7 py-3.5 rounded-full text-xs font-mono tracking-widest text-[#FAFAF8] inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-[#CCFF00]" />
            <span>ASK US DIRECTLY ON WHATSAPP</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
