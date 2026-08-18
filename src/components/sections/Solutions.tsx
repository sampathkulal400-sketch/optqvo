"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Utensils, ShoppingBag, Hotel, Scissors, Stethoscope,
  GraduationCap, Building2, Briefcase, ArrowRight, CheckCircle2
} from "lucide-react";

interface SolutionsProps {
  onOpenEnquiry?: (category?: string) => void;
}

interface SolutionCategory {
  id: string;
  name: string;
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
    icon: Utensils,
    headline: "Simple Digital Solutions for Restaurants",
    description: "Make it easier for customers to view your menu, contact you, book a table, and explore your restaurant online.",
    features: [
      "Digital QR Menu (Customers scan & view menu on their phone)",
      "Digital menu creation from existing paper menus",
      "Professional restaurant website with food photos & prices",
      "Direct WhatsApp ordering & table reservation inquiries",
      "Google Maps location & direction integration",
      "Offers, daily specials & customer feedback system",
    ],
    simpleExample: {
      from: "Instead of printing paper menus every time prices change...",
      to: "Customers scan a QR code and open your clean digital menu directly on their phone.",
    },
  },
  {
    id: "retail",
    name: "Retail & Shops",
    icon: ShoppingBag,
    headline: "Make Your Shop Easier to Find and Explore Online",
    description: "Showcase your products, accept online inquiries, and help local customers discover your store.",
    features: [
      "Business website with product showcase catalog",
      "Product photos, specifications & price details",
      "One-click WhatsApp product inquiry button",
      "Store location & operating hours on Google Maps",
      "Product search & category filter for customers",
      "Simple product inquiry & sales dashboard",
    ],
    simpleExample: {
      from: "Instead of answering 'Do you have this in stock?' repeatedly on phone calls...",
      to: "Customers browse your online catalog and tap WhatsApp to order directly.",
    },
  },
  {
    id: "hotel",
    name: "Hotels & Stays",
    icon: Hotel,
    headline: "Showcase Your Rooms and Accept Direct Bookings",
    description: "Help travelers explore room details, photos, amenities, and send booking inquiries without third-party commissions.",
    features: [
      "Professional hotel & resort website",
      "Room category showcases with photo galleries & pricing",
      "Direct booking inquiry form & WhatsApp contact",
      "Location map, nearby attractions & guest guides",
      "Customer reviews & feedback collection",
      "Digital hotel information page for checked-in guests",
    ],
    simpleExample: {
      from: "Instead of paying high commission fees on every guest booking...",
      to: "Guests discover your rooms on your website and book directly with your reception.",
    },
  },
  {
    id: "salon",
    name: "Salons & Spas",
    icon: Scissors,
    headline: "Display Services, Pricing & Accept Appointments",
    description: "Make it effortless for clients to view your haircut, spa, and beauty packages and book slots online.",
    features: [
      "Professional salon & spa website",
      "Service menu with transparent pricing & package details",
      "Online appointment booking form",
      "Direct WhatsApp booking confirmation",
      "Staff profiles, special offers & package deals",
      "Location & customer review showcase",
    ],
    simpleExample: {
      from: "Instead of managing appointments manually on paper notebooks...",
      to: "Clients choose their required service online and book their slot in seconds.",
    },
  },
  {
    id: "clinic",
    name: "Clinics & Doctors",
    icon: Stethoscope,
    headline: "Clean Online Presence for Clinics & Health Centers",
    description: "Help patients find doctor profiles, clinic timing, available services, and request appointments online.",
    features: [
      "Professional clinic website",
      "Doctor qualifications, specialization & department info",
      "Services offered & treatment descriptions",
      "Patient appointment inquiry & WhatsApp contact",
      "Clinic location, opening hours & contact details",
      "Patient information guides & basic admin dashboard",
    ],
    simpleExample: {
      from: "Instead of phone lines constantly busy during clinic hours...",
      to: "Patients easily check doctor timing and submit appointment requests online.",
    },
  },
  {
    id: "education",
    name: "Education & Coaching",
    icon: GraduationCap,
    headline: "Course Information & Admission Inquiry Platforms",
    description: "Help students and parents explore courses, download prospectuses, and apply for admissions online.",
    features: [
      "School, college & coaching institute website",
      "Course catalog with fee structure & syllabus details",
      "Student & admission inquiry forms",
      "Online registration & application submission",
      "Announcements, exam updates & notice board",
      "Simple student & admin dashboard when required",
    ],
    simpleExample: {
      from: "Instead of handing out printed pamphlets to every inquiring student...",
      to: "Parents explore detailed course info online and apply directly.",
    },
  },
  {
    id: "realestate",
    name: "Real Estate & Builders",
    icon: Building2,
    headline: "Showcase Properties & Capture Qualified Buyer Leads",
    description: "Display residential & commercial properties with photos, site locations, and direct agent contacts.",
    features: [
      "Real estate business website",
      "Property listings with photos, floor plans & pricing",
      "Location filter & property search",
      "Instant WhatsApp & inquiry buttons on every property",
      "Lead management & inquiry tracking dashboard",
      "Agent profiles & contact details",
    ],
    simpleExample: {
      from: "Instead of sending heavy PDF brochures over chat...",
      to: "Buyers browse your property website and tap to chat with your sales representative.",
    },
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: Briefcase,
    headline: "Digital Presence for Architects, Designers & Consultants",
    description: "Establish trust, showcase past project portfolios, and attract high-value business clients.",
    features: [
      "Professional business website",
      "Clean project portfolio & photo showcase",
      "Service presentations & case studies",
      "Consultation booking & inquiry forms",
      "Client testimonials & trust badges",
      "Direct WhatsApp & phone contact integration",
    ],
    simpleExample: {
      from: "Instead of relying purely on word-of-mouth recommendations...",
      to: "Clients inspect your completed work portfolio online and book consultations.",
    },
  },
];

export default function Solutions({ onOpenEnquiry }: SolutionsProps) {
  const [activeTab, setActiveTab] = useState<string>("restaurant");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const activeCategory = solutionCategories.find((cat) => cat.id === activeTab) || solutionCategories[0];
  const IconComponent = activeCategory.icon;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="solutions" ref={ref} className="relative py-16 lg:py-24 overflow-hidden bg-[#FAFAF8] text-[#0B0B0C]">
      <div className="section-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#FAFAF8] font-bold bg-[#3B1B4E] px-3.5 py-1 rounded-full inline-block mb-4">
            03 / SOLUTIONS BY INDUSTRY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-[#0B0B0C] mb-4">
            Solutions Built for <span className="highlight-lime">Your Business Type</span>
          </h2>
          <p className="text-[#0B0B0C]/75 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            We understand the specific problems of your industry. Select your business type to see how Optqvo can help.
          </p>
        </motion.div>

        {/* Business Category Buttons (Scrollable on mobile with touch momentum) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:flex-wrap sm:justify-center scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x">
          {solutionCategories.map((cat, idx) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-3 min-h-[44px] rounded-full font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all cursor-pointer border flex-shrink-0 ${
                  isActive
                    ? "bg-[#3B1B4E] border-[#3B1B4E] text-[#FAFAF8] shadow-md"
                    : "bg-white border-[#0B0B0C]/15 text-[#0B0B0C] hover:bg-[#0B0B0C]/5"
                }`}
              >
                <span className={`text-[10px] font-bold ${isActive ? "text-[#CCFF00]" : "text-[#3B1B4E]"}`}>
                  0{idx + 1}
                </span>
                <span className="whitespace-nowrap">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Solution Detail Box */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-white border border-[#0B0B0C]/15 p-6 sm:p-10 lg:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B1B4E] inline-block mb-1">INDUSTRY SOLUTION</span>
                <h3 className="text-xl sm:text-3xl font-black text-[#0B0B0C] leading-snug">{activeCategory.headline}</h3>
              </div>

              <p className="text-sm sm:text-base text-[#0B0B0C]/75 leading-relaxed">
                {activeCategory.description}
              </p>

              {/* Feature Checklist */}
              <div className="pt-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B0B0C]/50 mb-3">INCLUDED CAPABILITIES:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#0B0B0C]">
                  {activeCategory.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#3B1B4E] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenEnquiry ? onOpenEnquiry(activeCategory.name) : scrollTo("contact")}
                  className="btn-zip-plum px-7 py-4 rounded-full font-mono text-xs uppercase tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2 cursor-pointer border-none shadow-md"
                >
                  <span>GET SOLUTION FOR {activeCategory.name.toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4 text-[#CCFF00]" />
                </button>
              </div>
            </div>

            {/* Right Before & After Comparison */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#FAFAF8] border border-[#0B0B0C]/15 p-5 sm:p-6 space-y-4">
                <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B0B0C]/60 border-b border-[#0B0B0C]/10 pb-3">
                  HOW IT MAKES THINGS SIMPLE
                </div>

                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
                  <p className="font-mono font-bold mb-1 uppercase tracking-wider text-rose-700">BEFORE OPTQVO:</p>
                  <p className="leading-relaxed text-xs text-rose-800">{activeCategory.simpleExample.from}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#CCFF00]/30 border border-[#0B0B0C]/20 text-xs text-[#0B0B0C]">
                  <p className="font-mono font-bold mb-1 uppercase tracking-wider text-[#3B1B4E]">WITH OPTQVO SOLUTION:</p>
                  <p className="leading-relaxed text-xs text-[#0B0B0C] font-medium">{activeCategory.simpleExample.to}</p>
                </div>

                <p className="font-mono text-[10px] text-[#0B0B0C]/60 text-center uppercase tracking-wider pt-1">
                  Customized around your business rules
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
