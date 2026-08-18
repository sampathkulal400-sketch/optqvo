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
    <footer className="relative bg-[#0B0B0C] border-t border-white/10 overflow-hidden text-[#FAFAF8] text-xs">
      <div className="section-wrap py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-1 bg-transparent border-none cursor-pointer p-0 text-left"
            >
              <span className="font-mono text-xl font-black tracking-tighter text-[#FAFAF8]">
                OPTQVO<span className="text-[#CCFF00]">.</span>
              </span>
            </button>

            <p className="text-[#FAFAF8]/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              Optqvo helps restaurants, shops, hotels, clinics, and growing businesses build practical digital solutions — from websites and mobile apps to online booking and business tools.
            </p>

            <p className="font-mono text-xs font-bold text-[#CCFF00] uppercase tracking-wider">
              Made in India. Simple digital solutions for growing businesses.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-zip-lime inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#CCFF00] text-[#0B0B0C] font-mono text-xs font-bold uppercase no-underline shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#0B0B0C]" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#CCFF00]">Navigation</h4>
            <ul className="space-y-2 text-[#FAFAF8]/70 list-none p-0 m-0">
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
                    className="hover:text-[#CCFF00] transition-colors cursor-pointer bg-transparent border-none p-0 font-mono text-xs text-[#FAFAF8]/70 flex items-center gap-1 group uppercase tracking-wider"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#CCFF00]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industry Solutions (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#CCFF00]">Solutions by Business Type</h4>
            <div className="grid grid-cols-2 gap-2 text-[#FAFAF8]/70">
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
                  className="text-left hover:text-[#CCFF00] transition-colors cursor-pointer bg-transparent border-none p-0 font-mono text-xs text-[#FAFAF8]/70 truncate uppercase tracking-wider"
                >
                  • {cat}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenEnquiry ? onOpenEnquiry("Footer Inquiry") : scrollTo("contact")}
                className="w-full py-3.5 px-5 rounded-full bg-[#3B1B4E] hover:bg-[#2F153F] border border-white/20 font-mono text-xs font-bold uppercase tracking-widest text-[#FAFAF8] transition-all cursor-pointer shadow-sm"
              >
                Tell Us Your Problem →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#FAFAF8]/50">
          <p>© {new Date().getFullYear()} Optqvo. All rights reserved.</p>
          <p>Practical Digital Solutions for Growing Businesses.</p>
        </div>
      </div>
    </footer>
  );
}
