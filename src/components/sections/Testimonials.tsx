"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Handshake } from "lucide-react";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />
      <div className="absolute inset-0 section-gradient pointer-events-none" />

      <div className="section-wrap text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-4">Early Adopters</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Building{" "}
            <span className="gradient-text">Together</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl glass-strong border border-white/[0.08] p-12 mt-6"
        >
          {/* Decorative gradient border top */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

          {/* Icons */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-violet-400" strokeWidth={1.5} />
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Handshake className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
            </div>
          </div>

          {/* Quote */}
          <blockquote>
            <p className="text-2xl sm:text-3xl font-light text-white leading-relaxed mb-8">
              &ldquo;We&apos;re currently partnering with our first businesses and offering{" "}
              <strong className="font-bold gradient-text">early adopter pricing</strong> while building
              long-term relationships built on results.&rdquo;
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Optqvo Team</p>
              <p className="text-xs text-slate-500">AI-Powered Software Engineering</p>
            </div>
          </div>

          {/* Early adopter benefits */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { label: "Early Adopter Pricing", desc: "Exclusive rates for founding clients" },
              { label: "Direct Access", desc: "Work directly with the founding team" },
              { label: "Priority Roadmap", desc: "Shape the product and direction" },
            ].map((b) => (
              <div key={b.label} className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-4">
                <p className="text-sm font-semibold text-white mb-1">{b.label}</p>
                <p className="text-xs text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 px-8 py-3.5 rounded-xl font-semibold text-white btn-gradient shadow-[0_0_30px_rgba(124,58,237,0.25)]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Become an Early Partner
        </motion.button>
      </div>
    </section>
  );
}
