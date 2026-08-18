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
    <section id="home" ref={ref} className="relative flex flex-col justify-between pt-20 pb-8 sm:pt-24 sm:pb-12 overflow-hidden bg-[#FAF8F5]">
      {/* Background hairlines & dot grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-24 -left-16 w-[550px] h-[550px] bg-indigo-500/5 filter blur-[80px]" />
        <div className="blob blob-delay-1 absolute top-1/3 -right-20 w-[450px] h-[450px] bg-blue-500/5 filter blur-[80px]" />
        <div className="dot-grid absolute inset-0 opacity-40" />
      </div>

      <motion.div style={{ y: yText, opacity: opacText }} className="relative z-10 w-full">
        <div className="section-wrap">
          {/* Top Monospace Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-700 font-bold bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
              01 / PRACTICAL DIGITAL SOLUTIONS
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[1.1] mb-5"
              >
                HAVE A BUSINESS PROBLEM?{" "}
                <span className="block mt-1">
                  <span className="highlight-bar">BUILD THE SOLUTION.</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-xl text-stone-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal"
              >
                Optqvo helps restaurant owners, shops, hotels, clinics, and SMEs build practical digital tools — from custom websites and QR menus to online booking and business tools. <span className="font-semibold text-stone-900">No tech jargon. No corporate fluff.</span>
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
                  className="btn-gradient w-full sm:w-auto px-7 py-4 rounded-full font-mono text-xs uppercase tracking-widest text-white flex items-center justify-center gap-2.5 shadow-md cursor-pointer border-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span>TELL US YOUR PROBLEM</span>
                </motion.button>

                <motion.button
                  onClick={() => scrollTo("solutions")}
                  className="w-full sm:w-auto px-6 py-4 rounded-full font-mono text-xs uppercase tracking-widest text-stone-700 bg-white border border-stone-300 hover:bg-stone-50 hover:text-stone-950 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
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
                className="relative rounded-3xl bg-white border border-stone-200 p-5 sm:p-6 shadow-xl space-y-3.5"
              >
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-mono text-xs font-bold text-stone-900 tracking-wider uppercase">Optqvo Capabilities</span>
                  </div>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Built For You</span>
                </div>

                {/* Practical Solution Card 1 */}
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-indigo-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">Digital QR Menu for Restaurants</h4>
                      <p className="text-[11px] text-stone-500">Scan QR to view menu & order via WhatsApp</p>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto font-mono text-[10px] text-emerald-800 font-bold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">ACTIVE</span>
                </div>

                {/* Practical Solution Card 2 */}
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-indigo-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">Product Catalogue for Retail Shops</h4>
                      <p className="text-[11px] text-stone-500">Showcase products online with quick WhatsApp inquiry</p>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto font-mono text-[10px] text-blue-800 font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">READY</span>
                </div>

                {/* Practical Solution Card 3 */}
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-indigo-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">Appointment Booking for Salons & Clinics</h4>
                      <p className="text-[11px] text-stone-500">Online booking calendar with instant reminders</p>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto font-mono text-[10px] text-indigo-800 font-bold px-2 py-0.5 rounded bg-indigo-50 border border-indigo-200">LIVE</span>
                </div>

                {/* Custom Solution Callout */}
                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex items-center justify-between gap-2 mt-2">
                  <div>
                    <p className="text-xs font-bold text-stone-900">Have a unique business problem?</p>
                    <p className="text-[11px] text-stone-600">We build custom digital tools for your exact needs.</p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry ? onOpenEnquiry() : scrollTo("contact")}
                    className="font-mono text-xs font-bold text-indigo-700 hover:text-indigo-900 underline underline-offset-2 cursor-pointer flex-shrink-0 border-none bg-transparent"
                  >
                    TELL US →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Zero4GenZ 4-Column Hairline Bar at bottom of Hero */}
          <div className="mt-12 sm:mt-16 pt-6 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="border-l-2 border-indigo-600 pl-3">
              <span className="font-mono text-[11px] font-bold text-indigo-700 uppercase tracking-widest">01 / WEBSITES</span>
              <p className="text-xs text-stone-600 font-medium mt-0.5">Fast, mobile-friendly design</p>
            </div>
            <div className="border-l-2 border-blue-600 pl-3">
              <span className="font-mono text-[11px] font-bold text-blue-700 uppercase tracking-widest">02 / QR MENUS</span>
              <p className="text-xs text-stone-600 font-medium mt-0.5">Digital menus & ordering</p>
            </div>
            <div className="border-l-2 border-emerald-600 pl-3">
              <span className="font-mono text-[11px] font-bold text-emerald-700 uppercase tracking-widest">03 / BOOKINGS</span>
              <p className="text-xs text-stone-600 font-medium mt-0.5">Calendars & online forms</p>
            </div>
            <div className="border-l-2 border-amber-600 pl-3">
              <span className="font-mono text-[11px] font-bold text-amber-800 uppercase tracking-widest">04 / CUSTOM TOOLS</span>
              <p className="text-xs text-stone-600 font-medium mt-0.5">Tailored software & apps</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
