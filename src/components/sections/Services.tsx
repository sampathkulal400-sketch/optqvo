"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Zap,
  Brain,
  BarChart3,
  ShoppingBag,
  Code2,
  Cloud,
  RefreshCw,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  Sparkles,
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
    short: "High-performance digital flagships that convert visitors into paying customers.",
    description:
      "Professional custom websites designed for instant load times, flawless mobile rendering, and seamless customer inquiries.",
    whatWeProvide: ["Business Websites", "Landing Pages", "Mobile Responsive", "Contact & Inquiry Forms"],
    usefulFor: "Restaurants, Shops, Salons, Clinics, Professional Services",
    featured: true,
  },
  {
    num: "02",
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    short: "Native and cross-platform Android & iOS applications built around your business logic.",
    description:
      "High-speed mobile applications tailored for customer loyalty, slot bookings, ordering, or internal field operations.",
    whatWeProvide: ["Android & iOS Apps", "Customer Booking Apps", "Service Apps", "App Store Publishing"],
    usefulFor: "Delivery Services, Booking Platforms, Customer Portals",
    featured: false,
  },
  {
    num: "03",
    id: "business-automation",
    icon: Zap,
    title: "Business & WhatsApp Automation",
    short: "Automate repetitive daily manual tasks and reclaim hours every week.",
    description:
      "Connect incoming customer leads to WhatsApp instant alerts, automate invoice dispatch, and sync records without manual copy-pasting.",
    whatWeProvide: ["WhatsApp Inquiry Alerts", "Invoice Generation", "Lead Syncing", "Follow-up Reminders"],
    usefulFor: "Busy business owners, Agencies, Service providers",
    featured: true,
  },
  {
    num: "04",
    id: "ai-solutions",
    icon: Brain,
    title: "AI-Powered Customer Assistants",
    short: "Intelligent assistants that handle inquiries and questions 24/7.",
    description:
      "Deploy custom AI agents on WhatsApp and your website that answer product queries, summarize requests, and route urgent leads to your team.",
    whatWeProvide: ["Automated WhatsApp Assistants", "Customer Q&A Helpers", "Document Summaries", "Smart Inquiry Routing"],
    usefulFor: "Hotels, Clinics, Support teams, Real Estate",
    featured: false,
  },
  {
    num: "05",
    id: "dashboards",
    icon: BarChart3,
    title: "Business Dashboards & Analytics",
    short: "Unified control centers giving real-time visibility over sales and operations.",
    description:
      "Replace scattered spreadsheets with clean, simple dashboards tracking daily revenue, active orders, and customer history.",
    whatWeProvide: ["Sales & Revenue Charts", "Daily Order Tracking", "Customer Records", "Simple Excel/Sheets Sync"],
    usefulFor: "Store owners, Managers, Multi-branch businesses",
    featured: false,
  },
  {
    num: "06",
    id: "online-store",
    icon: ShoppingBag,
    title: "Digital Catalog & Online Store",
    short: "Frictionless product showcases with direct WhatsApp and UPI checkout.",
    description:
      "Showcase your inventory with crisp photos, transparent pricing, and instant tap-to-order WhatsApp flows.",
    whatWeProvide: ["Product Catalogs", "UPI & Payment Gateway", "Order Management", "WhatsApp Cart Checkout"],
    usefulFor: "Retail stores, Boutiques, Manufacturers, Supermarkets",
    featured: false,
  },
  {
    num: "07",
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Engineering",
    short: "Bespoke digital systems crafted for workflows that off-the-shelf software can't solve.",
    description:
      "Tailor-made internal software, ERP modules, inventory trackers, and staff management systems mapped to your exact rules.",
    whatWeProvide: ["Tailored Business Systems", "Internal Staff Tools", "Booking & Management Systems"],
    usefulFor: "Unique business workflows, Special service requirements",
    featured: false,
  },
  {
    num: "08",
    id: "design-uiux",
    icon: Palette,
    title: "UI/UX & Brand Design Refresh",
    short: "Modern visual redesigns that build instant trust with premium aesthetics.",
    description:
      "Elevate outdated websites with contemporary typography, clean color systems, and intuitive user journeys.",
    whatWeProvide: ["Modern Visual Redesign", "Mobile Layout Optimization", "Clear Navigation", "Brand Logos & Graphics"],
    usefulFor: "Businesses with old websites needing a modern look",
    featured: false,
  },
  {
    num: "09",
    id: "tool-integrations",
    icon: RefreshCw,
    title: "System & API Integrations",
    short: "Make all your existing tools talk to each other seamlessly.",
    description:
      "Connect payment gateways, Google Forms, WhatsApp APIs, and accounting software into one unified flow.",
    whatWeProvide: ["Payment Gateway Setup", "WhatsApp API Connection", "Google Forms Sync", "CRM & Email Connection"],
    usefulFor: "Businesses using multiple software tools",
    featured: false,
  },
  {
    num: "10",
    id: "cloud-deployment",
    icon: Cloud,
    title: "Cloud Infrastructure & 24/7 Monitoring",
    short: "Enterprise-grade hosting with guaranteed uptime and automated backups.",
    description:
      "We keep your applications fast, secure, and always accessible with proactive monitoring and routine updates.",
    whatWeProvide: ["Domain & SSL Setup", "Fast Cloud Hosting", "Daily Security Backups", "Uptime Monitoring"],
    usefulFor: "All online business websites and web applications",
    featured: false,
  },
];

export default function Services({ onOpenEnquiry }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string>("website-dev");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-[#0B0B0E] text-[#FAFAF8]"
    >
      {/* Subtle Matrix Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="dark-dot-grid absolute inset-0 opacity-20" />
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#28113B]/20 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-[#CCFF00]/05 rounded-full filter blur-[120px]" />
      </div>

      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Sticky Editorial Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <span className="badge-lime">
                <span>01 — 10</span> WHAT WE BUILD
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAFAF8] leading-[1.08]">
                Capabilities Built For <span className="text-[#CCFF00]">Real Impact.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#FAFAF8]/70 leading-relaxed font-normal">
                Practical digital engineering designed to remove operational bottlenecks, improve online presence, and drive customer action.
              </p>
            </motion.div>

            {/* Quick Stat / Capability Card */}
            <div className="p-6 rounded-3xl bg-[#15151A] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] uppercase tracking-wider font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Our Engineering Standard</span>
              </div>
              <p className="text-xs text-[#FAFAF8]/80 leading-relaxed">
                Every project is architected with modern React/Next.js, zero template bloat, instant cloud delivery, and direct developer WhatsApp support.
              </p>
              <button
                onClick={() => onOpenEnquiry ? onOpenEnquiry("Custom Requirement") : scrollTo("contact")}
                className="btn-zip-lime w-full py-3.5 rounded-full text-xs font-mono tracking-widest text-[#0A0A0D] flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                <span>REQUEST CUSTOM SCOPE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Service Items */}
          <div className="lg:col-span-7 space-y-4">
            {servicesList.map((svc, i) => {
              const isExpanded = expandedId === svc.id;
              const IconComp = svc.icon;

              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "bg-[#16161D] border-[#CCFF00]/40 shadow-xl"
                      : "bg-[#121217] border-white/08 hover:border-white/20"
                  }`}
                >
                  {/* Service Header Row */}
                  <div
                    onClick={() => toggleExpand(svc.id)}
                    className="p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                      <span className="font-mono text-sm sm:text-base font-black text-[#CCFF00]/70 pt-0.5 sm:pt-0">
                        {svc.num}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-base sm:text-xl font-bold text-[#FAFAF8] leading-tight">
                            {svc.title}
                          </h3>
                          {svc.featured && (
                            <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-widest font-extrabold px-2 py-0.5 rounded bg-[#CCFF00] text-[#0A0A0D]">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[#FAFAF8]/60 mt-1 font-normal line-clamp-1">
                          {svc.short}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isExpanded
                          ? "bg-[#CCFF00] text-[#0A0A0D]"
                          : "bg-white/06 text-[#FAFAF8] hover:bg-white/12"
                      }`}
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Expanded Content Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-white/08 bg-[#101015]"
                      >
                        <div className="p-6 sm:p-7 space-y-6">
                          <p className="text-sm text-[#FAFAF8]/85 leading-relaxed font-normal">
                            {svc.description}
                          </p>

                          {/* What We Deliver Chips */}
                          <div className="space-y-2">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#CCFF00] font-bold">
                              KEY DELIVERABLES:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {svc.whatWeProvide.map((del) => (
                                <span
                                  key={del}
                                  className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/06 border border-white/10 text-[#FAFAF8] flex items-center gap-1.5"
                                >
                                  <CheckCircle2 className="w-3 h-3 text-[#CCFF00]" />
                                  {del}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Ideal For + Direct Action */}
                          <div className="pt-4 border-t border-white/08 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                            <div className="text-xs text-[#FAFAF8]/60">
                              <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-[#878794]">
                                IDEAL FOR:
                              </span>{" "}
                              <span className="text-[#FAFAF8]/90 font-medium">{svc.usefulFor}</span>
                            </div>

                            <button
                              onClick={() => onOpenEnquiry ? onOpenEnquiry(svc.title) : scrollTo("contact")}
                              className="btn-zip-lime px-6 py-3 rounded-full text-xs font-mono tracking-widest text-[#0A0A0D] flex items-center justify-center gap-1.5 flex-shrink-0 cursor-pointer"
                            >
                              <span>ENQUIRE FOR {svc.num}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
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
