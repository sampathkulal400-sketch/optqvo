"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Utensils,
  ShoppingBag,
  Hotel,
  Scissors,
  Stethoscope,
  GraduationCap,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

interface SolutionsProps {
  onOpenEnquiry?: (category?: string) => void;
}

interface SolutionCategory {
  id: string;
  name: string;
  badge: string;
  icon: typeof Utensils;
  headline: string;
  description: string;
  features: string[];
  simpleExample: { from: string; to: string };
}

const solutionCategories: SolutionCategory[] = [
  {
    id: "restaurant",
    name: "Restaurants & Cafes",
    badge: "QR & TABLE ORDERING",
    icon: Utensils,
    headline: "Digital Menu, QR Ordering & Instant Table Inquiries",
    description:
      "Make it frictionless for diners to scan, view high-res food photos, place WhatsApp orders, and reserve tables without app downloads.",
    features: [
      "Digital QR Menu (Customers scan & browse live menu instantly)",
      "Instant price & item updates from mobile without reprinting costs",
      "Direct WhatsApp order dispatch & table reservation confirmations",
      "Google Maps location, directions, and reviews integration",
      "Daily chef specials, discounts & customer feedback capture",
      "Multi-language menu support for regional customers",
    ],
    simpleExample: {
      from: "Spending ₹5,000+ repeatedly printing laminated paper menus whenever prices or items change...",
      to: "Diners scan a custom QR code to open a lightning-fast digital menu with instant WhatsApp ordering.",
    },
  },
  {
    id: "retail",
    name: "Retail & Shops",
    badge: "CATALOG & WHATSAPP SALES",
    icon: ShoppingBag,
    headline: "Digital Product Catalog & Direct WhatsApp Commerce",
    description:
      "Showcase your shop's full product catalog online with high-res photos, specs, and one-tap WhatsApp inquiries.",
    features: [
      "Mobile-friendly digital product catalog & search filters",
      "High-res product galleries, prices, and stock indicators",
      "One-click 'Buy via WhatsApp' and UPI payment buttons",
      "Store timing, Google Maps navigation & inquiry counter",
      "Customer inquiry logging and sales notification alerts",
      "Promotion banners for seasonal sales and festive discounts",
    ],
    simpleExample: {
      from: "Answering 'Is this in stock? What is the price?' 50 times a day on personal phone calls...",
      to: "Customers browse your online catalog with prices and tap WhatsApp with the exact item ready to buy.",
    },
  },
  {
    id: "hotel",
    name: "Hotels & Stays",
    badge: "COMMISSION-FREE BOOKINGS",
    icon: Hotel,
    headline: "Direct Room Booking System & Guest Concierge",
    description:
      "Showcase rooms, suites, amenities, and accept direct booking inquiries without paying 20%+ OTA commissions.",
    features: [
      "High-speed hotel showcase with room tours & amenity tags",
      "Direct room booking form connected to reception WhatsApp",
      "Seasonal pricing & special stay package showcases",
      "Location guide, nearby sightseeing spots & airport taxi info",
      "Automated WhatsApp booking confirmation to guests",
      "In-room digital guide for checked-in guests via QR code",
    ],
    simpleExample: {
      from: "Losing 15%–25% commission on every booking to third-party travel aggregators...",
      to: "Guests discover your rooms on Google and book directly with your reception team via WhatsApp.",
    },
  },
  {
    id: "salon",
    name: "Salons & Spas",
    badge: "SLOT SCHEDULING",
    icon: Scissors,
    headline: "Service Rate Card & Online Appointment Booking",
    description:
      "Display your complete treatment menu, pricing, stylist profiles, and let clients book appointment slots online.",
    features: [
      "Service & price menu with duration and treatment details",
      "Online appointment booking calendar for clients",
      "Automated WhatsApp appointment reminder notifications",
      "Stylist / artist portfolio & before-after showcase",
      "Promotional package offers & bridal package inquiries",
      "Customer review showcase & Google Maps directions",
    ],
    simpleExample: {
      from: "Double-booking appointments written in paper diaries and clients showing up at the wrong hour...",
      to: "Clients select their service, pick a free time slot, and get an automated WhatsApp confirmation.",
    },
  },
  {
    id: "clinic",
    name: "Clinics & Doctors",
    badge: "PATIENT APPOINTMENTS",
    icon: Stethoscope,
    headline: "Doctor Profile, Consultation Timings & Patient Inquiries",
    description:
      "Build patient trust with a professional clinic website, doctor qualifications, clinic timings, and appointment request forms.",
    features: [
      "Doctor qualifications, specialties & department overview",
      "Clinic consultation timings & visiting consultant schedule",
      "Easy patient appointment request form via WhatsApp",
      "Clinic address, parking info, Google Maps & emergency number",
      "Patient care guidelines & common health FAQs",
      "Diagnostic services, lab test list & sample collection info",
    ],
    simpleExample: {
      from: "Receptionist constantly busy answering patient calls for clinic timings and consultation fees...",
      to: "Patients verify doctor availability online and book their consultation slot in 30 seconds.",
    },
  },
  {
    id: "education",
    name: "Education & Coaching",
    badge: "STUDENT ADMISSIONS",
    icon: GraduationCap,
    headline: "Course Catalog, Faculty Showcase & Admission Lead Capture",
    description:
      "Attract more students with an impressive academy website featuring courses, batch schedules, fees, and instant inquiry forms.",
    features: [
      "Course curriculum, batch timings & fee structure display",
      "Student registration & admission inquiry capture forms",
      "Faculty profiles, qualifications & teaching achievements",
      "Toppers gallery, student testimonials & result showcases",
      "Downloadable course syllabus brochure (PDF)",
      "Instant WhatsApp inquiry button for parent counseling",
    ],
    simpleExample: {
      from: "Distributing printed paper flyers that get lost, with zero way to track interested parents...",
      to: "Parents find your courses online, download the syllabus, and submit an admission inquiry directly.",
    },
  },
  {
    id: "realestate",
    name: "Real Estate & Builders",
    badge: "PROPERTY SHOWCASE",
    icon: Building2,
    headline: "Property Listings, Floor Plans & Site Visit Bookings",
    description:
      "Showcase residential and commercial properties with high-resolution photo galleries, floor plans, and site visit scheduling.",
    features: [
      "Property gallery, specifications, amenities & floor plans",
      "Location map, nearby landmarks & connectivity highlights",
      "Schedule a Site Visit booking form connected to sales team",
      "Downloadable project brochure & price breakdown request",
      "Direct WhatsApp chat with property sales executive",
      "Legal approval status & RERA registration badge display",
    ],
    simpleExample: {
      from: "Sending messy property photos individually over WhatsApp to 30 different prospective buyers...",
      to: "A dedicated property link with high-res photos, floor plans, and a 'Schedule Site Visit' button.",
    },
  },
  {
    id: "services",
    name: "Professional Services",
    badge: "TRUST & CLIENT PORTFOLIO",
    icon: Briefcase,
    headline: "Authoritative Business Website & Consultation Inquiries",
    description:
      "Establish credibility for your CA firm, legal practice, architectural studio, consultancy, or B2B agency.",
    features: [
      "Professional firm overview, partner credentials & expertise",
      "Detailed service scope & industry specialization breakdown",
      "Consultation booking & project requirement intake forms",
      "Client case studies, past projects & credential badges",
      "Google Reviews integration & client testimonial quotes",
      "Office location, contact details & working hours display",
    ],
    simpleExample: {
      from: "Prospects googling your business find nothing, creating doubts about your company's credibility...",
      to: "A polished digital flagship that positions your firm as an established industry authority.",
    },
  },
];

export default function Solutions({ onOpenEnquiry }: SolutionsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<string>("restaurant");

  const currentSolution =
    solutionCategories.find((cat) => cat.id === activeTab) ||
    solutionCategories[0];
  const IconComponent = currentSolution.icon;

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-[#F2F2ED] text-[#0A0A0D]"
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
            <span>●</span> INDUSTRY BLUEPRINTS
          </span>
          <h2 className="display-section-title text-[#0A0A0D] mb-4">
            Engineered For <span className="highlight-lime">Your Business Sector.</span>
          </h2>
          <p className="text-[#50505C] text-base sm:text-xl font-normal max-w-2xl mx-auto">
            Select your industry below to inspect the tailored digital tools, ordering flows, and operational systems we build.
          </p>
        </motion.div>

        {/* Sector Tabs Navigation Matrix */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-5xl mx-auto justify-start lg:justify-center">
          {solutionCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            const TabIcon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? "bg-[#28113B] text-[#CCFF00] border-[#28113B] shadow-md scale-105"
                    : "bg-[#FFFFFF] text-[#50505C] border-[#0A0A0D]/10 hover:border-[#0A0A0D]/25 hover:text-[#0A0A0D]"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Industry Solution Showcase Card */}
        <motion.div
          key={currentSolution.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-[#FFFFFF] border border-[#0A0A0D]/12 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Breakdown (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#CCFF00] text-[#0A0A0D] uppercase tracking-widest">
                    {currentSolution.badge}
                  </span>
                  <span className="font-mono text-xs text-[#848492] font-semibold">
                    SECTOR BLUEPRINT
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-[#0A0A0D] tracking-tight leading-tight">
                  {currentSolution.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#50505C] font-normal leading-relaxed">
                  {currentSolution.description}
                </p>
              </div>

              {/* Feature Capabilities Checklist */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#28113B] block">
                  SYSTEM CAPABILITIES INCLUDED:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSolution.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A0A0D] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#28113B] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Storytelling Comparison (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#F8F8F5] p-6 sm:p-8 rounded-2xl border border-[#0A0A0D]/08">
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#848492] font-bold block">
                  PRACTICAL IMPACT TRANSFORMATION:
                </span>

                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200/60 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-rose-700 uppercase">
                    BEFORE OPTQVO:
                  </span>
                  <p className="text-xs text-[#0A0A0D]/80 font-normal leading-relaxed">
                    {currentSolution.simpleExample.from}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/60 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-emerald-800 uppercase">
                    WITH OPTQVO SYSTEM:
                  </span>
                  <p className="text-xs text-[#0A0A0D] font-semibold leading-relaxed">
                    {currentSolution.simpleExample.to}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() =>
                    onOpenEnquiry
                      ? onOpenEnquiry(currentSolution.name)
                      : undefined
                  }
                  className="btn-zip-plum w-full py-4 rounded-full font-mono text-xs tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#CCFF00]" />
                  <span>BUILD FOR {currentSolution.name.toUpperCase()}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
