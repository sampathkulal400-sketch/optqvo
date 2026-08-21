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
      "Instant price & item updates from mobile without reprinting",
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
      from: "Answering 'Is this in stock? What is the price?' 50 times a day on personal calls...",
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
    badge: "SLOT APPOINTMENTS",
    icon: Scissors,
    headline: "Transparent Service Menu & Smart Appointment Booking",
    description:
      "Allow clients to explore treatments, transparent pricing, and book exact appointment slots without phone tag.",
    features: [
      "Clean digital service menu with pricing and package options",
      "Interactive time slot booking calendar",
      "Automated WhatsApp reminder sent to clients before appointment",
      "Stylist & therapist profile showcases with portfolio photos",
      "Seasonal bridal & festive beauty package booking",
      "Customer feedback & Google review boost system",
    ],
    simpleExample: {
      from: "Managing client appointments manually in a paper diary with frequent no-shows...",
      to: "Clients select their service, pick a date & time slot online, and get automatic WhatsApp reminders.",
    },
  },
  {
    id: "clinic",
    name: "Clinics & Doctors",
    badge: "PATIENT SCHEDULING",
    icon: Stethoscope,
    headline: "Patient Appointment Portal & Doctor Information Hub",
    description:
      "Help patients verify doctor timings, clinic specialties, and submit appointment requests with zero friction.",
    features: [
      "Professional clinic website with doctor credentials & timings",
      "Patient appointment inquiry form with instant SMS/WhatsApp alert",
      "Department listings (Dental, Ortho, Physio, General Medicine)",
      "Clinic location map, parking info & emergency contact numbers",
      "Frequently asked patient prep guidelines (e.g. fasting tests)",
      "Simple staff dashboard to view upcoming daily appointments",
    ],
    simpleExample: {
      from: "Front desk phone constantly busy while patients wait in line for basic scheduling info...",
      to: "Patients verify doctor availability online and confirm their token number in advance.",
    },
  },
  {
    id: "education",
    name: "Education & Coaching",
    badge: "ADMISSIONS & COURSES",
    icon: GraduationCap,
    headline: "Course Prospectus & Online Admission Lead Engine",
    description:
      "Present curriculum, faculty credentials, batch timings, and capture qualified student admission inquiries.",
    features: [
      "Modern institute website with course & batch details",
      "Online prospectus download with automatic WhatsApp lead capture",
      "Direct admission registration & inquiry forms",
      "Faculty profiles, student success stories & testimonials",
      "Notice board for exam timetables and results announcements",
      "Inquiry tracking system for admissions counselors",
    ],
    simpleExample: {
      from: "Distributing paper flyers that get thrown away with no way to track interested leads...",
      to: "Students download the digital syllabus online and your team receives their contact lead immediately.",
    },
  },
  {
    id: "realestate",
    name: "Real Estate & Builders",
    badge: "PROPERTY SHOWCASE",
    icon: Building2,
    headline: "High-Impact Property Showcases & Buyer Lead Capture",
    description:
      "Display residential and commercial properties with floor plans, site tours, and direct agent connection.",
    features: [
      "Interactive property listings with image galleries & floor plans",
      "Location filters, price tags, and neighborhood landmark maps",
      "One-tap 'Schedule Site Visit' and WhatsApp agent chat buttons",
      "Automated brochure download with lead phone verification",
      "Agent profile directory and contact cards",
      "Simple CRM dashboard to organize buyer inquiries",
    ],
    simpleExample: {
      from: "Sending bulky 20MB PDFs over WhatsApp that get lost in client chat threads...",
      to: "Buyers browse interactive property tours online and book a site visit in two taps.",
    },
  },
  {
    id: "professional",
    name: "Professional Services",
    badge: "PORTFOLIO & CONSULTATIONS",
    icon: Briefcase,
    headline: "High-Trust Portfolios & Client Consultation Engine",
    description:
      "Designed for architects, designers, chartered accountants, and consultants to win high-ticket clients.",
    features: [
      "Editorial case study and past project showcase layout",
      "Client consultation booking and inquiry forms",
      "Transparent service breakdowns and engagement models",
      "Client testimonials, awards, and industry credentials",
      "Direct WhatsApp and phone quick-dial integration",
      "Fast cloud hosting optimized for search engine visibility",
    ],
    simpleExample: {
      from: "Relying purely on unpredictable word-of-mouth with no central place to prove expertise...",
      to: "A high-trust digital portfolio that showcases completed projects and attracts qualified consultations.",
    },
  },
];

export default function Solutions({ onOpenEnquiry }: SolutionsProps) {
  const [activeTab, setActiveTab] = useState<string>("restaurant");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const activeCategory =
    solutionCategories.find((cat) => cat.id === activeTab) || solutionCategories[0];
  const IconComponent = activeCategory.icon;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-[#F8F8F5] text-[#0A0A0D]"
    >
      <div className="section-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="badge-plum mb-4">
            <span>●</span> TAILORED ARCHITECTURES
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0A0D] mb-4">
            Solutions Built for <span className="highlight-lime">Your Business Type</span>
          </h2>
          <p className="text-[#52525C] text-base sm:text-xl max-w-2xl mx-auto font-normal">
            Every industry has unique operational friction. Select your sector to explore how Optqvo removes it.
          </p>
        </motion.div>

        {/* Industry Pill Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:flex-wrap sm:justify-center scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x">
          {solutionCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-3 rounded-full font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center transition-all duration-200 cursor-pointer flex-shrink-0 border ${
                  isActive
                    ? "bg-[#28113B] border-[#28113B] text-[#FAFAF8] shadow-md scale-102"
                    : "bg-[#FFFFFF] border-[#0A0A0D]/10 text-[#52525C] hover:text-[#0A0A0D] hover:border-[#0A0A0D]/25"
                }`}
              >
                <span className="whitespace-nowrap">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Showcase Box */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-[#FFFFFF] border border-[#0A0A0D]/12 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#28113B] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] border border-[#0A0A0D]/40" />
                  {activeCategory.badge}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-[#0A0A0D] leading-tight">
                  {activeCategory.headline}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[#52525C] leading-relaxed font-normal">
                {activeCategory.description}
              </p>

              {/* Feature Checklist */}
              <div className="pt-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#878794] mb-4">
                  INCLUDED SYSTEM CAPABILITIES:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#0A0A0D]">
                  {activeCategory.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#28113B] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenEnquiry ? onOpenEnquiry(activeCategory.name) : scrollTo("contact")}
                  className="btn-zip-plum px-8 py-4 rounded-full text-xs font-mono tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>GET SOLUTION FOR {activeCategory.name.toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4 text-[#CCFF00]" />
                </button>
              </div>
            </div>

            {/* Right Before & After Transformation Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#F8F8F5] border border-[#0A0A0D]/10 p-6 sm:p-7 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#0A0A0D]/08 pb-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#52525C]">
                    OPERATIONAL TRANSFORMATION
                  </span>
                  <span className="font-mono text-[10px] text-[#878794] uppercase font-semibold">
                    REAL METRIC
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200/80 text-rose-950 space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-700 block">
                    BEFORE OPTQVO:
                  </span>
                  <p className="text-xs sm:text-sm text-rose-900 leading-relaxed font-normal">
                    {activeCategory.simpleExample.from}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#CCFF00]/25 border border-[#0A0A0D]/15 text-[#0A0A0D] space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#28113B] block">
                    WITH OPTQVO SYSTEM:
                  </span>
                  <p className="text-xs sm:text-sm text-[#0A0A0D] leading-relaxed font-semibold">
                    {activeCategory.simpleExample.to}
                  </p>
                </div>

                <p className="font-mono text-[11px] text-[#878794] text-center uppercase tracking-wider pt-1 font-semibold">
                  Customized around your daily operational rules
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
