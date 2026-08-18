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
    <section id="work" ref={ref} className="relative py-14 lg:py-20 overflow-hidden bg-[#F5F2ED]">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="section-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-700 font-bold bg-indigo-50 px-3 py-1 rounded-md border border-indigo-200 inline-block mb-3">
            05 / REAL WORK SHIPPED
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 mb-4">
            Real Projects <span className="highlight-bar">We Have Built</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
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
              className="rounded-3xl bg-white border border-stone-200 overflow-hidden flex flex-col justify-between hover:border-stone-300 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              {/* Top Banner / Mockup Header */}
              <div className={`p-5 sm:p-8 bg-gradient-to-br ${proj.gradient} border-b border-stone-200 relative`}>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${proj.badgeColor}`}>
                    {proj.tag}
                  </span>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors shadow-sm"
                    aria-label={`Visit ${proj.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-stone-500">{proj.category}</span>
                <h3 className="text-xl sm:text-3xl font-black text-stone-900 mt-1 mb-2">{proj.name}</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-lg">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Body Details */}
              <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">What We Built:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                    {proj.whatWeBuilt.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-xs text-stone-500 font-mono truncate">{proj.url.replace("https://", "").replace("/", "")}</span>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200/70 border border-stone-200 text-xs font-bold text-stone-900 transition-all no-underline"
                  >
                    <span>View Project Live</span>
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
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
          className="rounded-2xl bg-white border border-stone-200 p-5 sm:p-10 text-center max-w-3xl mx-auto shadow-md"
        >
          <h3 className="text-lg sm:text-2xl font-bold text-stone-900 mb-2 leading-snug">
            Want something like this for your business?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mb-5 sm:mb-6">
            Tell us what you need and we will help you find and build the right digital solution.
          </p>
          <button
            onClick={() => onOpenEnquiry ? onOpenEnquiry("Portfolio Inquiry") : scrollTo("contact")}
            className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md cursor-pointer border-none"
          >
            <MessageSquare className="w-4 h-4 flex-shrink-0" />
            <span>Let&apos;s Talk</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
