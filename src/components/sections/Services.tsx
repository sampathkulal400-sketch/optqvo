"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Zap,
  Brain,
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
    short: "High-performance digital flagships engineered to convert visitors into inquiries and paying customers.",
    description:
      "Custom-crafted web applications and business portals designed with sub-second page loads, SEO optimization, and flawless mobile experience.",
    whatWeProvide: ["Custom Business Websites", "High-Converting Landing Pages", "Mobile Responsive Architecture", "Instant WhatsApp Contact Forms"],
    usefulFor: "Restaurants, Retail Shops, Salons, Clinics, Professional Services",
    badge: "CORE FLAGSHIP",
  },
  {
    num: "02",
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    short: "Native and cross-platform Android & iOS applications tailored to your specific business logic.",
    description:
      "Fast, intuitive mobile applications built for customer loyalty, slot bookings, ordering, delivery tracking, or internal field team operations.",
    whatWeProvide: ["Android & iOS Applications", "Slot & Service Booking Apps", "Loyalty & Customer Portals", "Play Store & App Store Publishing"],
    usefulFor: "Delivery Services, Booking Platforms, Field Services",
    badge: "MOBILE FIRST",
  },
  {
    num: "03",
    id: "business-automation",
    icon: Zap,
    title: "Business & WhatsApp Automation",
    short: "Eliminate repetitive manual tasks and reclaim 15+ productive hours every single week.",
    description:
      "Connect incoming leads to instant WhatsApp alerts, trigger automated invoice generation, and synchronize records without manual copy-pasting.",
    whatWeProvide: ["Instant WhatsApp Lead Alerts", "Automated PDF Invoice Dispatch", "Multi-App Webhook Syncing", "Scheduled Follow-up Reminders"],
    usefulFor: "Busy business owners, Agencies, Service providers",
    badge: "HIGH ROI",
  },
  {
    num: "04",
    id: "ai-solutions",
    icon: Brain,
    title: "AI-Powered Customer Assistants",
    short: "Intelligent digital assistants that handle inquiries, menu questions, and bookings 24/7.",
    description:
      "Deploy custom AI assistants on WhatsApp and your website to answer product FAQs, summarize requests, and route hot leads to your phone immediately.",
    whatWeProvide: ["Automated WhatsApp Assistants", "Customer Q&A Helpers", "Intelligent Lead Qualification", "24/7 After-Hours Responder"],
    usefulFor: "Hotels, Clinics, Customer Support Teams, Real Estate",
    badge: "AI AUTOMATION",
  },
  {
    num: "05",
    id: "dashboards",
    icon: BarChart3,
    title: "Business Dashboards & Analytics",
    short: "Unified control hubs giving real-time visibility over daily revenue, orders, and operations.",
    description:
      "Replace scattered spreadsheets with clean, simple dashboards tracking daily sales, pending customer requests, and operational performance.",
    whatWeProvide: ["Real-Time Revenue Charts", "Daily Order & Task Tracking", "Customer History Database", "Seamless Google Sheets Sync"],
    usefulFor: "Store owners, Managers, Multi-branch operations",
    badge: "OPERATIONAL CONTROL",
  },
  {
    num: "06",
    id: "online-store",
    icon: ShoppingBag,
    title: "Digital Catalog & Quick Commerce",
    short: "Frictionless product showcases with direct WhatsApp and UPI instant checkout flows.",
    description:
      "Showcase your inventory with high-res photos, clear transparent pricing, and instant tap-to-order WhatsApp carts without app friction.",
    whatWeProvide: ["Digital Product Catalogs", "UPI & Payment Gateway Integration", "Simple Order Manager", "Direct WhatsApp Cart Checkout"],
    usefulFor: "Retail stores, Boutiques, Manufacturers, Wholesalers",
    badge: "DIRECT SALES",
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
      className="relative py-20 lg:py-32 overflow-hidden bg-[#F8F8F5] text-[#0A0A0D]"
    >
      <div className="section-wrap relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="badge-plum mb-4">
            <span>●</span> ENGINEERING CAPABILITIES
          </span>
          <h2 className="display-section-title text-[#0A0A0D] mb-4">
            What Optqvo <span className="highlight-lime">Can Build For You.</span>
          </h2>
          <p className="text-[#50505C] text-base sm:text-xl font-normal max-w-2xl mx-auto">
            Practical digital software, modern web platforms, and automated workflows engineered to eliminate friction and grow your revenue.
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
            <div className="rounded-3xl bg-[#28113B] text-[#FAFAF8] p-7 sm:p-9 border border-white/10 shadow-[0_20px_45px_rgba(40,17,59,0.18)] space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#CCFF00] text-[#0A0A0D] uppercase tracking-widest">
                  {activeService.badge}
                </span>
                <span className="font-mono text-xs text-white/50">
                  {activeService.num} / 06
                </span>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#CCFF00]">
                  <activeService.icon className="w-6 h-6" />
                </div>
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
                    className="p-6 sm:p-7 cursor-pointer flex items-start justify-between gap-4 select-none"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#848492] mt-1">
                        {service.num}
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <h4 className="text-lg sm:text-xl font-bold text-[#0A0A0D]">
                            {service.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-[#50505C] font-normal leading-relaxed">
                          {service.short}
                        </p>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#0A0A0D]/05 flex items-center justify-center text-[#0A0A0D] flex-shrink-0 mt-1">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 sm:px-7 pb-6 pt-2 border-t border-[#0A0A0D]/06 space-y-4"
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
