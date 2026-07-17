"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of businesses does Optqvo work with?",
    a: "We work with startups, SMEs, and growing enterprises across industries including restaurants, healthcare, real estate, retail, education, logistics, manufacturing, and professional services. If you need intelligent software, we can help.",
  },
  {
    q: "How long does it take to build a custom web application or dashboard?",
    a: "Timelines depend on complexity. A landing page or simple website takes 1–2 weeks. A custom business dashboard or CRM typically takes 4–10 weeks. Enterprise-grade systems with AI integration can take 3–6 months. We always provide a clear timeline during the discovery phase.",
  },
  {
    q: "Do you offer AI chatbots and automation for small businesses?",
    a: "Absolutely. We specialize in making enterprise-grade AI accessible to SMEs. Our AI chatbots, voice agents, and n8n-powered automation workflows are designed to be affordable, practical, and transformative — even for businesses just starting their digital journey.",
  },
  {
    q: "What is included in your Business Dashboard service?",
    a: "Our custom dashboards include data integration from your existing tools (CRM, accounting software, spreadsheets, APIs), real-time charts and KPI tracking, role-based access control, mobile responsiveness, and ongoing support. Everything is designed to your exact business logic.",
  },
  {
    q: "Do you build mobile apps for both iOS and Android?",
    a: "Yes. We build native iOS apps (Swift), native Android apps (Kotlin), and cross-platform apps using React Native or Flutter — depending on your budget, timeline, and performance requirements. We help you choose the right approach for your business.",
  },
  {
    q: "Can Optqvo help us automate our business processes?",
    a: "This is one of our core specializations. Using tools like n8n, custom APIs, and AI, we automate CRM workflows, email sequences, lead routing, invoice generation, WhatsApp communications, and virtually any repetitive business process.",
  },
  {
    q: "What does 'early adopter pricing' mean?",
    a: "As a new company, we're building our portfolio and long-term client relationships. We offer our first partners preferential pricing, direct access to our founding team, and input into our service roadmap. In exchange, we work closely with you to ensure exceptional outcomes and long-term partnership.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes. Every project includes a support period after launch. We offer ongoing maintenance plans, performance monitoring, security updates, feature additions, and 24/7 critical support. We're a long-term technology partner, not a one-time vendor.",
  },
  {
    q: "How do we get started with Optqvo?",
    a: "Simply book a free consultation using the button on this page. We'll schedule a discovery call to understand your needs, then provide a detailed proposal, timeline, and pricing. No obligations — just a conversation about how we can help your business grow.",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Common{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              id={`faq-${i + 1}`}
            >
              <div
                className={`rounded-2xl glass border transition-all duration-300 overflow-hidden ${
                  openIndex === i
                    ? "border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                    : "border-white/[0.07] hover:border-white/[0.12]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-sm font-semibold text-white leading-snug">{faq.q}</span>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? "bg-violet-500/20 border border-violet-500/30" : "bg-white/[0.04] border border-white/[0.07]"
                  }`}>
                    {openIndex === i ? (
                      <Minus className="w-3.5 h-3.5 text-violet-400" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            Still have questions?{" "}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
            >
              Reach out directly
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
