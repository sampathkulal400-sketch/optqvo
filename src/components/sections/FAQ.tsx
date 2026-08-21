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
      <div className="section-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="badge-plum mb-4">
            <span>●</span> FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0D] mb-4">
            Common <span className="highlight-lime">Questions.</span>
          </h2>
          <p className="text-[#52525C] text-base sm:text-xl max-w-xl mx-auto font-normal">
            Everything you need to know about working with Optqvo — explained in simple terms.
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
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#FFFFFF] border-[#28113B]/40 shadow-lg"
                    : "bg-[#FFFFFF] border-[#0A0A0D]/10 hover:border-[#0A0A0D]/20 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer bg-transparent border-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-mono text-xs font-bold text-[#878794]">
                      0{i + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#0A0A0D] leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#28113B] text-[#CCFF00]"
                        : "bg-[#0A0A0D]/06 text-[#0A0A0D]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#52525C] leading-relaxed border-t border-[#0A0A0D]/06 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Direct Question Callout */}
        <div className="text-center mt-12">
          <p className="text-sm text-[#52525C] font-normal">
            Have a different question about your specific business?{" "}
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry("FAQ Specific") : scrollTo("contact")}
              className="font-mono text-xs text-[#28113B] font-bold hover:underline cursor-pointer bg-transparent border-none inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#28113B]" />
              <span>Ask us directly on WhatsApp</span>
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
