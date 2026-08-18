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
    <section id="home" ref={ref} className="relative flex flex-col justify-between pt-20 pb-8 sm:pt-24 sm:pb-12 overflow-hidden bg-[#FAFAF8]">
      {/* Background hairlines & subtle grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-24 -left-16 w-[550px] h-[550px] bg-[#3B1B4E]/5 filter blur-[80px]" />
        <div className="blob blob-delay-1 absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#CCFF00]/10 filter blur-[80px]" />
        <div className="dot-grid absolute inset-0 opacity-30" />
      </div>

      <motion.div style={{ y: yText, opacity: opacText }} className="relative z-10 w-full">
        <div className="section-wrap">
          {/* Top Monospace Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#CCFF00] font-bold bg-[#3B1B4E] px-3.5 py-1 rounded-full">
              PRACTICAL DIGITAL SOLUTIONS
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B0B0C] leading-[1.1] mb-5"
              >
                HAVE A BUSINESS PROBLEM?{" "}
                <span className="block mt-1">
                  <span className="highlight-lime">BUILD THE SOLUTION.</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-xl text-[#0B0B0C]/75 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal"
              >
                Optqvo helps restaurant owners, shops, hotels, clinics, and SMEs build practical digital tools — from custom websites and QR menus to online booking and business tools. <span className="font-bold text-[#0B0B0C]">No tech jargon. No corporate fluff.</span>
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
                  className="btn-zip-plum w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-full font-mono text-xs uppercase tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2.5 shadow-md cursor-pointer border-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
                  <span>TELL US YOUR PROBLEM</span>
                </motion.button>

                <motion.button
                  onClick={() => scrollTo("solutions")}
                  className="btn-zip-outline w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-full font-mono text-xs uppercase tracking-widest text-[#0B0B0C] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>EXPLORE SOLUTIONS</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Graphic Preview (Zero4GenZ minimal card style) */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl bg-white border border-[#0B0B0C]/15 p-5 sm:p-6 shadow-xl space-y-3.5"
              >
                <div className="flex items-center justify-between border-b border-[#0B0B0C]/10 pb-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] border border-[#0B0B0C]" />
                    <span className="font-mono text-xs font-bold text-[#0B0B0C] tracking-wider uppercase">Optqvo Workflows</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#0B0B0C]/60 uppercase tracking-widest">Built For You</span>
                </div>

                {/* Practical Solution Card 1 */}
                <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-[#0B0B0C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#3B1B4E] transition-colors">
                  <div>
                    <h4 className="text-xs font-bold text-[#0B0B0C]">Digital QR Menu for Restaurants</h4>
                    <p className="text-[11px] text-[#0B0B0C]/65">Scan QR to view menu & order via WhatsApp</p>
                  </div>
                  <span className="self-start sm:self-auto font-mono text-[10px] text-[#0B0B0C] font-bold px-2 py-0.5 rounded bg-[#CCFF00] border border-[#0B0B0C]/20">ACTIVE</span>
                </div>

                {/* Practical Solution Card 2 */}
                <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-[#0B0B0C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#3B1B4E] transition-colors">
                  <div>
                    <h4 className="text-xs font-bold text-[#0B0B0C]">Product Catalogue for Retail Shops</h4>
                    <p className="text-[11px] text-[#0B0B0C]/65">Showcase products online with quick WhatsApp inquiry</p>
                  </div>
                  <span className="self-start sm:self-auto font-mono text-[10px] text-[#0B0B0C] font-bold px-2 py-0.5 rounded bg-[#CCFF00] border border-[#0B0B0C]/20">READY</span>
                </div>

                {/* Practical Solution Card 3 */}
                <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-[#0B0B0C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#3B1B4E] transition-colors">
                  <div>
                    <h4 className="text-xs font-bold text-[#0B0B0C]">Appointment Booking for Salons & Clinics</h4>
                    <p className="text-[11px] text-[#0B0B0C]/65">Online booking calendar with instant reminders</p>
                  </div>
                  <span className="self-start sm:self-auto font-mono text-[10px] text-[#0B0B0C] font-bold px-2 py-0.5 rounded bg-[#CCFF00] border border-[#0B0B0C]/20">LIVE</span>
                </div>

                {/* Custom Solution Callout */}
                <div className="p-4 rounded-2xl bg-[#3B1B4E] text-[#FAFAF8] flex items-center justify-between gap-2 mt-2">
                  <div>
                    <p className="text-xs font-bold text-[#FAFAF8]">Have a unique business problem?</p>
                    <p className="text-[11px] text-[#FAFAF8]/75">We build custom digital tools for your exact needs.</p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry ? onOpenEnquiry() : scrollTo("contact")}
                    className="font-mono text-xs font-bold text-[#CCFF00] hover:underline underline-offset-2 cursor-pointer flex-shrink-0 border-none bg-transparent"
                  >
                    TELL US →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Zero4GenZ 4-Column Hairline Bar at bottom of Hero */}
          <div className="mt-12 sm:mt-16 pt-6 border-t border-[#0B0B0C]/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="border-l-2 border-[#3B1B4E] pl-3">
              <span className="font-mono text-[11px] font-bold text-[#3B1B4E] uppercase tracking-widest">WEBSITES</span>
              <p className="text-xs text-[#0B0B0C]/70 font-medium mt-0.5">Fast, mobile-friendly design</p>
            </div>
            <div className="border-l-2 border-[#3B1B4E] pl-3">
              <span className="font-mono text-[11px] font-bold text-[#3B1B4E] uppercase tracking-widest">QR MENUS</span>
              <p className="text-xs text-[#0B0B0C]/70 font-medium mt-0.5">Digital menus & ordering</p>
            </div>
            <div className="border-l-2 border-[#3B1B4E] pl-3">
              <span className="font-mono text-[11px] font-bold text-[#3B1B4E] uppercase tracking-widest">BOOKINGS</span>
              <p className="text-xs text-[#0B0B0C]/70 font-medium mt-0.5">Calendars & online forms</p>
            </div>
            <div className="border-l-2 border-[#FF5C00] pl-3">
              <span className="font-mono text-[11px] font-bold text-[#FF5C00] uppercase tracking-widest">CUSTOM TOOLS</span>
              <p className="text-xs text-[#0B0B0C]/70 font-medium mt-0.5">Tailored software & apps</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
