"use client";

import { MessageSquare, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "918217206292";

interface FooterProps {
  onOpenEnquiry?: (category?: string) => void;
}

export default function Footer({ onOpenEnquiry }: FooterProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Optqvo%2C%20I%27d%20like%20to%20discuss%20a%20digital%20solution%20for%20my%20business.`;

  return (
    <footer className="relative bg-[#F5F2ED] border-t border-stone-200 overflow-hidden text-stone-600 text-xs">
      <div className="section-wrap py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.png" alt="Optqvo" className="h-9 w-auto object-contain block" />
            </div>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Optqvo helps restaurants, shops, hotels, clinics, and growing businesses build practical digital solutions — from websites and mobile apps to online booking and business tools.
            </p>

            <p className="text-xs font-semibold text-indigo-700">
              Made in India. Simple digital solutions for growing businesses.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold hover:bg-emerald-100 transition-colors no-underline shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">Navigation</h4>
            <ul className="space-y-2 text-stone-600 list-none p-0 m-0">
              {[
                { label: "Home", id: "home" },
                { label: "Our Services", id: "services" },
                { label: "Industry Solutions", id: "solutions" },
                { label: "Custom Solutions", id: "custom-solutions" },
                { label: "Our Work (Portfolio)", id: "work" },
                { label: "About Optqvo", id: "about" },
                { label: "FAQ", id: "faq" },
                { label: "Contact Us", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-indigo-700 transition-colors cursor-pointer bg-transparent border-none p-0 text-xs text-stone-600 flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industry Solutions (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Solutions by Business Type</h4>
            <div className="grid grid-cols-2 gap-2 text-slate-400">
              {[
                "Restaurants & Cafes",
                "Retail & Shops",
                "Hotels & Stays",
                "Salons & Spas",
                "Clinics & Doctors",
                "Education & Coaching",
                "Real Estate",
                "Professional Services",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollTo("solutions")}
                  className="text-left hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-xs text-slate-400 truncate"
                >
                  • {cat}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenEnquiry ? onOpenEnquiry("Footer Inquiry") : scrollTo("contact")}
                className="w-full py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-bold text-white transition-all cursor-pointer"
              >
                Tell Us Your Problem →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Optqvo. All rights reserved.</p>
          <p>Practical Digital Solutions for Growing Businesses.</p>
        </div>
      </div>
    </footer>
  );
}
