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
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    gradient: "from-amber-50/80 via-white to-stone-50",
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
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    gradient: "from-blue-50/80 via-white to-stone-50",
  },
];

export default function Portfolio({ onOpenEnquiry }: PortfolioProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="work" ref={ref} className="relative py-16 lg:py-24 overflow-hidden bg-[#FAFAF8] text-[#0B0B0C]">
      <div className="section-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#FAFAF8] font-bold bg-[#3B1B4E] px-3.5 py-1 rounded-full inline-block mb-4">
            REAL WORK SHIPPED
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-[#0B0B0C] mb-4">
            Real Projects <span className="highlight-lime">We Have Built</span>
          </h2>
          <p className="text-[#0B0B0C]/75 text-base sm:text-lg max-w-2xl mx-auto font-normal">
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
              className="rounded-3xl bg-white border border-[#0B0B0C]/15 overflow-hidden flex flex-col justify-between hover:border-[#3B1B4E] transition-all duration-300 shadow-xl group"
            >
              {/* Top Banner / Header */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-[#3B1B4E]/10 via-[#FAFAF8] to-white border-b border-[#0B0B0C]/10 relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#CCFF00] text-[#0B0B0C] border border-[#0B0B0C]/20 uppercase tracking-widest">
                    {proj.tag}
                  </span>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#3B1B4E] text-[#CCFF00] flex items-center justify-center hover:scale-105 transition-transform shadow-sm"
                    aria-label={`Visit ${proj.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B1B4E]">{proj.category}</span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B0B0C] mt-1 mb-2">{proj.name}</h3>
                <p className="text-xs sm:text-sm text-[#0B0B0C]/75 leading-relaxed max-w-lg">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Body Details */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B0B0C]/50 mb-3">WHAT WE BUILT:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#0B0B0C]">
                    {proj.whatWeBuilt.map((item) => (
                      <div key={item} className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#3B1B4E] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0B0B0C]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[#0B0B0C]/60 truncate">{proj.url.replace("https://", "").replace("/", "")}</span>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-zip-plum px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest text-[#FAFAF8] inline-flex items-center justify-center gap-2 no-underline"
                  >
                    <span>VIEW LIVE SITE</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#CCFF00] flex-shrink-0" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl bg-white border border-[#0B0B0C]/15 p-6 sm:p-10 text-center max-w-3xl mx-auto shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-black text-[#0B0B0C] mb-2 leading-snug">
            Want something like this for your business?
          </h3>
          <p className="text-xs sm:text-sm text-[#0B0B0C]/75 mb-6 font-normal">
            Tell us what you need and we will help you find and build the right digital solution.
          </p>
          <button
            onClick={() => onOpenEnquiry ? onOpenEnquiry("Portfolio Inquiry") : scrollTo("contact")}
            className="btn-zip-plum px-8 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest text-[#FAFAF8] inline-flex items-center justify-center gap-2 cursor-pointer border-none shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
            <span>LET&apos;S TALK</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
