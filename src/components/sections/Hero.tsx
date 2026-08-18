"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageSquare, Utensils, ShoppingBag, Calendar, CheckCircle2, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenEnquiry?: (category?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={ref} className="relative flex items-center pt-20 pb-10 sm:pt-24 sm:pb-14 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-24 -left-16 w-[550px] h-[550px] bg-violet-600/10 filter blur-[80px]" />
        <div className="blob blob-delay-1 absolute top-1/3 -right-20 w-[450px] h-[450px] bg-blue-600/10 filter blur-[80px]" />
        <div className="dot-grid absolute inset-0 opacity-20" />
      </div>

      <motion.div style={{ y: yText, opacity: opacText }} className="relative z-10 w-full">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="badge">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                  Simple Digital Solutions for Growing Businesses
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-5 sm:mb-6"
              >
                Have a Business Problem?{" "}
                <span className="gradient-text">Let&apos;s Build the Solution.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl"
              >
                Optqvo helps businesses build simple, practical digital solutions — from custom websites and online booking platforms to business automation and custom software.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
              >
                <motion.button
                  onClick={() => onOpenEnquiry ? onOpenEnquiry() : scrollTo("contact")}
                  className="btn-gradient w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2.5 shadow-lg cursor-pointer border-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span>Tell Us Your Problem</span>
                </motion.button>

                <motion.button
                  onClick={() => scrollTo("solutions")}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Graphic Preview (5-Second Visual Answer) */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl glass-strong border border-white/[0.1] p-4 sm:p-6 shadow-2xl space-y-3 sm:space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">PRACTICAL SOLUTIONS</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">Optqvo Workflows</span>
                </div>

                {/* Practical Solution Card 1 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-violet-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Digital QR Menu for Restaurants</h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-400">Scan QR to view menu & order via WhatsApp</p>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto text-[9px] sm:text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10">Active</span>
                </div>

                {/* Practical Solution Card 2 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Product Catalogue for Retail Shops</h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-400">Showcase products online with quick WhatsApp inquiry</p>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto text-[9px] sm:text-[10px] text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-500/10">Ready</span>
                </div>

                {/* Practical Solution Card 3 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-violet-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Appointment Booking for Salons & Clinics</h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-400">Online booking calendar with instant reminders</p>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto text-[9px] sm:text-[10px] text-violet-400 font-bold px-2 py-0.5 rounded bg-violet-500/10">Live</span>
                </div>

                {/* Custom Solution Card Callout */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/30 flex items-center justify-between gap-2 mt-2">
                  <div>
                    <p className="text-xs font-bold text-white">Have a unique business problem?</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-300">We build custom digital tools for your exact needs.</p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry ? onOpenEnquiry() : scrollTo("contact")}
                    className="text-xs font-bold text-violet-300 hover:text-white underline underline-offset-2 cursor-pointer flex-shrink-0 border-none bg-transparent"
                  >
                    Tell Us →
                  </button>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
