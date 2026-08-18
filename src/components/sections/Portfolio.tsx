"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, CheckCircle2, ArrowUpRight, MessageSquare } from "lucide-react";

interface PortfolioProps {
  onOpenEnquiry?: (category?: string) => void;
}

const realProjects = [
  {
    id: "gokarna-purohita",
    name: "Gokarna Purohita",
    category: "Pooja Booking & Online Services",
    url: "https://www.gokarnapurohita.com/",
    description: "A digital platform designed to make it easier for devotees to explore pooja services, check details, and make online bookings for Gokarna.",
    whatWeBuilt: [
      "Online Pooja Booking System",
      "Service & Ritual Information Pages",
      "Mobile-Friendly Website Layout",
      "Direct WhatsApp & Contact Inquiries",
    ],
    tag: "Live Project",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    gradient: "from-amber-500/20 via-slate-900 to-slate-950",
  },
  {
    id: "sn-cranes-puttur",
    name: "SN Cranes Puttur",
    category: "Business Website & Service Showcase",
    url: "https://sn-cranes-puttur.vercel.app/",
    description: "A professional online presence for a crane rental and heavy equipment business in Puttur, making it easier for clients to view services and get in touch.",
    whatWeBuilt: [
      "Professional Crane Rental Website",
      "Heavy Machinery & Service Showcase",
      "One-Tap Call & WhatsApp Contact Buttons",
      "Location & Service Coverage Info",
    ],
    tag: "Live Project",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    gradient: "from-blue-500/20 via-slate-900 to-slate-950",
  },
];

export default function Portfolio({ onOpenEnquiry }: PortfolioProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="work" ref={ref} className="relative py-12 lg:py-16 overflow-hidden bg-[#0a0a0f]">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="section-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="badge mb-4">OUR PREVIOUS WORK</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Real Projects <span className="gradient-text">We Have Built</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Take a look at actual digital solutions we have built for real businesses to solve their online presence and booking needs.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {realProjects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-3xl glass-strong border border-white/[0.1] overflow-hidden flex flex-col justify-between hover:border-white/[0.2] transition-all duration-300 shadow-2xl group"
            >
              {/* Top Banner / Mockup Header */}
              <div className={`p-5 sm:p-8 bg-gradient-to-br ${proj.gradient} border-b border-white/[0.08] relative`}>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${proj.badgeColor}`}>
                    {proj.tag}
                  </span>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-white hover:bg-white/[0.15] transition-colors"
                    aria-label={`Visit ${proj.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">{proj.category}</span>
                <h3 className="text-xl sm:text-3xl font-black text-white mt-1 mb-2">{proj.name}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Body Details */}
              <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">What We Built:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                    {proj.whatWeBuilt.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.07] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 font-mono truncate">{proj.url.replace("https://", "").replace("/", "")}</span>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-bold text-white transition-all no-underline"
                  >
                    <span>View Project Live</span>
                    <ExternalLink className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl glass border border-white/[0.1] p-5 sm:p-10 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 leading-snug">
            Want something like this for your business?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-5 sm:mb-6">
            Tell us what you need and we will help you find and build the right digital solution.
          </p>
          <button
            onClick={() => onOpenEnquiry ? onOpenEnquiry("Portfolio Inquiry") : scrollTo("contact")}
            className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-lg cursor-pointer border-none"
          >
            <MessageSquare className="w-4 h-4 flex-shrink-0" />
            <span>Let&apos;s Talk</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
