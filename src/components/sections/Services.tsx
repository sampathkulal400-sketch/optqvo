"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Zap,
  BarChart3,
  ShoppingBag,
  Code2,
  Cloud,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

interface ServicesProps {
  onOpenEnquiry?: (category?: string) => void;
}

const servicesList = [
  {
    num: "01",
    id: "website-dev",
    icon: Globe,
    title: "Website & Web App Development",
    short: "Your digital shop front — beautiful, fast, and works perfectly on every phone.",
    description:
      "A professional website your customers trust immediately — designed to look great, load fast, and make it easy for them to contact you, book, or order.",
    whatWeProvide: ["Custom Business Websites", "High-Converting Landing Pages", "Mobile Friendly on Any Phone", "Instant WhatsApp Contact Button"],
    usefulFor: "Restaurants, Retail Shops, Salons, Clinics, Professional Services",
    badge: "MOST POPULAR",
  },
  {
    num: "02",
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    short: "A real app your customers download and use — for bookings, loyalty rewards, delivery, or ordering.",
    description:
      "We build straightforward, easy-to-use apps for Android and iPhone. Your customers download it once and stay connected to your business every day.",
    whatWeProvide: ["Android & iPhone Apps", "Booking & Appointment Apps", "Loyalty & Rewards Cards", "Published to Play Store & App Store"],
    usefulFor: "Delivery Services, Booking Platforms, Field Services",
    badge: "MOBILE FIRST",
  },
  {
    num: "03",
    id: "business-automation",
    icon: Zap,
    title: "WhatsApp & Business Automation",
    short: "Stop doing the same tasks by hand every day — let it run automatically while you sleep.",
    description:
      "Every time someone enquires or books, your WhatsApp gets notified, invoices are sent, and records are updated — all without you lifting a finger.",
    whatWeProvide: ["Instant WhatsApp Alerts for Every Order", "Automatic Invoice & Receipt Generation", "Follow-up Reminders Without Manual Work", "Connect Your Tools Together Automatically"],
    usefulFor: "Busy business owners, Agencies, Service providers",
    badge: "SAVES HOURS DAILY",
  },
  {
    num: "04",
    id: "custom-portals",
    icon: Code2,
    title: "Custom Business Software",
    short: "Software built exactly for your business — not a generic tool that kind of fits.",
    description:
      "We build simple, custom tools for managing your clients, bookings, team tasks, or quotations — designed exactly for how your business actually works, no complicated training needed.",
    whatWeProvide: ["Customer & Client Management", "Staff & Team Task Tracking", "Booking & Membership Systems", "Custom Quote & Order Forms"],
    usefulFor: "Service businesses, Consultancies, Real Estate, Field Teams",
    badge: "BUILT FOR YOU",
  },
  {
    num: "05",
    id: "dashboards",
    icon: BarChart3,
    title: "Business Dashboard & Reports",
    short: "See your sales, orders, and customers in one clean screen — no spreadsheet chaos.",
    description:
      "Instead of five different notebooks or messy spreadsheets, get one clean screen that shows your daily sales, who's ordered, what's pending, and how you're doing.",
    whatWeProvide: ["Today's Sales & Revenue at a Glance", "Pending Orders & Task List", "Customer History in One Place", "Connects to Google Sheets if You Use It"],
    usefulFor: "Store owners, Managers, Multi-branch operations",
    badge: "CLEAR OVERVIEW",
  },
  {
    num: "06",
    id: "online-store",
    icon: ShoppingBag,
    title: "Online Catalog & Digital Menu",
    short: "Show your products or menu online — customers order directly on WhatsApp or pay by UPI.",
    description:
      "A beautiful online catalog with your photos, clear prices, and a simple order button. Customers browse, pick what they want, and message you directly — no app required.",
    whatWeProvide: ["Product or Menu Catalog with Photos", "Online Ordering via WhatsApp", "UPI & Card Payment Links", "Easy Order Management for You"],
    usefulFor: "Retail stores, Boutiques, Manufacturers, Wholesalers",
    badge: "SELL ONLINE EASILY",
  },
];

export default function Services({ onOpenEnquiry }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<number>(0);
  const [expandedItems, setExpandedItems] = useState<number[]>([0]);

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
    setSelectedService(index);
  };

  const activeService = servicesList[selectedService];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-10 lg:py-16 overflow-hidden bg-[#F8F8F5] text-[#0A0A0D]"
    >
      <div className="section-wrap relative z-10 space-y-6 sm:space-y-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="badge-plum mb-4">
            OUR SERVICES
          </span>
          <h2 className="display-section-title text-[#0A0A0D] mb-4">
            What We <span className="highlight-lime">Build For You.</span>
          </h2>
          <p className="text-[#50505C] text-base sm:text-xl font-normal max-w-2xl mx-auto">
            Custom websites, mobile apps, WhatsApp automations, and management systems built for everyday business needs.
          </p>
        </motion.div>

        {/* Asymmetric Editorial Layout: Left Spotlight + Right Numbered Expandable List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Deep-Dive Featured Spotlight (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="rounded-3xl bg-[#28113B] text-[#FAFAF8] p-5 sm:p-7 lg:p-9 border border-white/10 shadow-[0_20px_45px_rgba(40,17,59,0.18)] space-y-5 sm:space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#CCFF00] text-[#0A0A0D] uppercase tracking-widest">
                  {activeService.badge}
                </span>
                <span className="font-mono text-xs text-white/50">
                  {activeService.num} / 06
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-[#FAFAF8] tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                  {activeService.description}
                </p>
              </div>

              {/* What We Deliver In This Service */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#CCFF00] font-bold block">
                  DELIVERABLE SPECIFICATIONS:
                </span>
                <div className="space-y-2">
                  {activeService.whatWeProvide.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Useful For Pill */}
              <div className="p-3.5 rounded-2xl bg-white/06 border border-white/10 font-mono text-xs text-white/75 space-y-1">
                <span className="text-[10px] uppercase text-[#CCFF00] font-bold block">
                  IDEAL USE CASES:
                </span>
                <span>{activeService.usefulFor}</span>
              </div>

              {/* Action Trigger */}
              <div className="pt-2">
                <button
                  onClick={() =>
                    onOpenEnquiry ? onOpenEnquiry(activeService.title) : undefined
                  }
                  className="btn-zip-lime w-full py-4 rounded-full font-mono text-xs tracking-widest text-[#0A0A0D] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>REQUEST THIS CAPABILITY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Numbered Expandable Service Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {servicesList.map((service, idx) => {
              const isSelected = selectedService === idx;
              const isExpanded = expandedItems.includes(idx);
              const IconComp = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? "bg-[#FFFFFF] border-[#28113B]/40 shadow-lg"
                      : "bg-[#FFFFFF] border-[#0A0A0D]/10 hover:border-[#0A0A0D]/20 shadow-sm"
                  }`}
                >
                  <div
                    onClick={() => {
                      setSelectedService(idx);
                      toggleExpand(idx);
                    }}
                    className="p-4 sm:p-6 lg:p-7 cursor-pointer flex items-start justify-between gap-3 sm:gap-4 select-none"
                  >
                    <div className="flex items-start gap-3 sm:gap-5">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#848492] mt-1">
                        {service.num}
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <h4 className="text-base sm:text-xl font-bold text-[#0A0A0D]">
                            {service.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-[#50505C] font-normal leading-relaxed">
                          {service.short}
                        </p>
                      </div>
                    </div>

                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0A0A0D]/05 flex items-center justify-center text-[#0A0A0D] flex-shrink-0 mt-0.5">
                      {isExpanded ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-4 sm:px-6 lg:px-7 pb-5 sm:pb-6 pt-2 border-t border-[#0A0A0D]/06 space-y-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                          {service.whatWeProvide.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-[#0A0A0D] font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#28113B] flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-3 text-xs font-mono">
                          <span className="text-[#848492]">For: {service.usefulFor}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedService(idx);
                              if (onOpenEnquiry) onOpenEnquiry(service.title);
                            }}
                            className="text-[#28113B] font-bold hover:underline cursor-pointer bg-transparent border-none p-0 flex items-center gap-1"
                          >
                            <span>GET FIXED QUOTE</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
