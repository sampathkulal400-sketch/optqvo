"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, HeartHandshake, Zap, Clock } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-16 lg:py-24 overflow-hidden bg-[#3B1B4E] text-[#FAFAF8]">
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#0B0B0C] font-bold bg-[#CCFF00] px-3.5 py-1 rounded-full inline-block mb-2">
              06 / WHY OPTQVO
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#FAFAF8] leading-snug">
              We Listen to Your Need & Build <span className="text-[#CCFF00]">Practical Digital Solutions.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#FAFAF8]/90 leading-relaxed">
              Optqvo is a digital solutions team that helps businesses improve their online presence and solve daily business problems through simple, well-crafted technology.
            </p>

            <p className="text-xs sm:text-sm text-[#FAFAF8]/75 leading-relaxed">
              We don&apos;t confuse you with complicated tech buzzwords or bloated software packages. Instead, we sit down with you, understand your exact challenge — whether it&apos;s getting more customers, accepting bookings, or managing your menu online — and build a solution that works.
            </p>

            {/* Core Values / Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#FAFAF8] text-[#0B0B0C] border border-white/20 shadow-md flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#3B1B4E] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#0B0B0C] uppercase tracking-wider mb-1">AFFORDABLE & PRACTICAL</h4>
                  <p className="text-xs text-[#0B0B0C]/70">Professional digital solutions without unnecessary complexity or cost.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFAF8] text-[#0B0B0C] border border-white/20 shadow-md flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#3B1B4E] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#0B0B0C] uppercase tracking-wider mb-1">DIRECT DEVELOPER ACCESS</h4>
                  <p className="text-xs text-[#0B0B0C]/70">Talk directly on WhatsApp with the people who build your solution.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFAF8] text-[#0B0B0C] border border-white/20 shadow-md flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#3B1B4E] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#0B0B0C] uppercase tracking-wider mb-1">FAST DELIVERY</h4>
                  <p className="text-xs text-[#0B0B0C]/70">Most small business websites & digital tools go live in 1–3 weeks.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFAF8] text-[#0B0B0C] border border-white/20 shadow-md flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#3B1B4E] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#0B0B0C] uppercase tracking-wider mb-1">LONG-TERM SUPPORT</h4>
                  <p className="text-xs text-[#0B0B0C]/70">We stay around after launch to handle maintenance, updates, & fixes.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-[#FAFAF8] text-[#0B0B0C] border border-white/20 p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B1B4E] border-b border-[#0B0B0C]/10 pb-4">
                OUR SIMPLE 4-STEP APPROACH
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3B1B4E] text-[#CCFF00] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B0B0C]">Understand</h4>
                    <p className="text-xs text-[#0B0B0C]/70">We listen to your business problem over WhatsApp or phone call.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3B1B4E] text-[#CCFF00] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B0B0C]">Design</h4>
                    <p className="text-xs text-[#0B0B0C]/70">We outline a practical layout and solution preview for your approval.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3B1B4E] text-[#CCFF00] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B0B0C]">Build</h4>
                    <p className="text-xs text-[#0B0B0C]/70">We build your website, app, or tool using modern, clean code.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#CCFF00] text-[#0B0B0C] border border-[#0B0B0C]/20 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B0B0C]">Deliver & Support</h4>
                    <p className="text-xs text-[#0B0B0C]/70">We launch your application and remain available for support.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
