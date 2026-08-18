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
    <section id="solutions" ref={ref} className="relative py-14 lg:py-20 overflow-hidden bg-[#F5F2ED]">
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
            03 / SOLUTIONS BY INDUSTRY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 mb-4">
            Solutions Built for <span className="highlight-bar">Your Business Type</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            We understand the specific problems of your industry. Select your business type to see how Optqvo can help.
          </p>
        </motion.div>

        {/* Business Category Buttons (Scrollable on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 sm:flex-wrap sm:justify-center scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {solutionCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer border flex-shrink-0 ${
                  isActive
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300"
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
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
          className="rounded-3xl bg-white border border-stone-200 p-4 sm:p-8 lg:p-10 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-indigo-600">Industry Solution</span>
                  <h3 className="text-xl sm:text-3xl font-black text-stone-900 leading-snug">{activeCategory.headline}</h3>
                </div>
              </div>

              <p className="text-xs sm:text-base text-stone-600 leading-relaxed">
                {activeCategory.description}
              </p>

              {/* Feature Checklist */}
              <div className="pt-1 sm:pt-2">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">Included Capabilities:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                  {activeCategory.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenEnquiry ? onOpenEnquiry(activeCategory.name) : scrollTo("contact")}
                  className="btn-gradient w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-2 cursor-pointer border-none shadow-md"
                >
                  <span>Get Solution For {activeCategory.name}</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </button>
              </div>
            </div>

            {/* Right Before & After Comparison */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-stone-50 border border-stone-200 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-500 border-b border-stone-200 pb-2.5">
                  How It Makes Things Simple
                </div>

                <div className="p-3 sm:p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
                  <p className="font-bold mb-1 text-rose-700">Before Optqvo:</p>
                  <p className="leading-relaxed text-[11px] sm:text-xs text-rose-800">{activeCategory.simpleExample.from}</p>
                </div>

                <div className="p-3 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <p className="font-bold mb-1 text-emerald-700">With Optqvo Solution:</p>
                  <p className="leading-relaxed text-[11px] sm:text-xs text-emerald-800">{activeCategory.simpleExample.to}</p>
                </div>

                <p className="text-[10px] sm:text-[11px] text-stone-500 text-center pt-1">
                  Customized specifically around your business rules & timing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
