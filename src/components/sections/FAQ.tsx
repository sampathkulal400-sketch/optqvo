"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageSquare, ArrowRight } from "lucide-react";

interface FAQProps {
  onOpenEnquiry?: (category?: string) => void;
}

const faqs = [
  {
    q: "My business is small — is this really for me?",
    a: "Absolutely. We don't build massive enterprise software. We build clean, simple tools specifically for small and medium businesses—like a digital menu for a cafe, or an automatic booking page for a clinic. If you want to save time and look professional, this is for you.",
  },
  {
    q: "How is Optqvo Solutions different from a freelancer?",
    a: "Freelancers often juggle too many projects and disappear when things break. We are a dedicated engineering team. You get a fixed quote, a clear timeline, and a team that actually stays around to maintain and update your system after it goes live.",
  },
  {
    q: "What if I don't like what you build?",
    a: "You won't have to guess. Before we write a single line of code, we show you an exact plan and visual sketch of what we are building. We don't start until you are 100% happy with the approach.",
  },
  {
    q: "How much will a website or digital solution cost?",
    a: "We provide affordable pricing tailored to your exact needs. After a quick chat to understand your problem, we give you a clear, fixed quote before starting — zero surprise fees, zero hidden costs.",
  },
  {
    q: "Can you help automate repetitive work in WhatsApp or Excel?",
    a: "Yes! This is our most requested service. We set up systems that automatically send WhatsApp customer alerts, follow up on leads, and generate invoices, saving you 15+ hours every single week.",
  },
  {
    q: "What happens after my website or app goes live?",
    a: "We handle the boring stuff. We manage the web hosting, security backups, and technical updates so your website stays online 24/7. You just focus on running your business.",
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
      className="relative py-10 lg:py-16 overflow-hidden bg-[#F8F8F5] text-[#0A0A0D]"
    >
      <div className="section-wrap relative z-10 space-y-6 sm:space-y-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="badge-plum mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="display-section-title text-[#0A0A0D] mb-4">
            Common <span className="highlight-lime">Questions.</span>
          </h2>
          <p className="text-[#50505C] text-base sm:text-xl font-normal max-w-xl mx-auto">
            Everything you need to know about working with Optqvo Solutions — explained in simple terms.
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
