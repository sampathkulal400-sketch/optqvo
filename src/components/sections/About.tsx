"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, HeartHandshake, Zap, Clock } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-12 lg:py-16 overflow-hidden bg-[#FAF8F5]">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-700 font-bold bg-indigo-50 px-3 py-1 rounded-md border border-indigo-200 inline-block mb-2">
              06 / WHY OPTQVO
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-snug">
              We Listen to Your Need & Build <span className="highlight-bar">Practical Digital Solutions.</span>
            </h2>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Optqvo is a digital solutions team that helps businesses improve their online presence and solve daily business problems through simple, well-crafted technology.
            </p>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We don&apos;t confuse you with complicated tech buzzwords or bloated software packages. Instead, we sit down with you, understand your exact challenge — whether it&apos;s getting more customers, accepting bookings, or managing your menu online — and build a solution that works.
            </p>

            {/* Core Values / Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900 mb-1">Affordable & Practical</h4>
                  <p className="text-xs text-stone-600">Professional digital solutions without unnecessary complexity or cost.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900 mb-1">Direct Developer Access</h4>
                  <p className="text-xs text-stone-600">Talk directly on WhatsApp with the people who build your solution.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900 mb-1">Fast Delivery</h4>
                  <p className="text-xs text-stone-600">Most small business websites & digital tools go live in 1–3 weeks.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900 mb-1">Long-Term Support</h4>
                  <p className="text-xs text-stone-600">We stay around after launch to handle maintenance, updates, & fixes.</p>
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
            <div className="rounded-3xl bg-white border border-stone-200 p-5 sm:p-8 space-y-6 shadow-md">
              <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-4">
                Our Simple 4-Step Approach
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Understand</h4>
                    <p className="text-xs text-stone-600">We listen to your business problem over WhatsApp or phone call.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Design</h4>
                    <p className="text-xs text-stone-600">We outline a practical layout and solution preview for your approval.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Build</h4>
                    <p className="text-xs text-stone-600">We build your website, app, or tool using modern, clean code.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Deliver & Support</h4>
                    <p className="text-xs text-stone-600">We launch your application and remain available for support.</p>
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
