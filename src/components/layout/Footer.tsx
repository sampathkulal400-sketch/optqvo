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
    <footer className="relative bg-[#070709] border-t border-white/10 overflow-hidden text-[#FAFAF8] text-xs">
      <div className="section-wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand Manifesto & WhatsApp Direct (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-1 bg-transparent border-none cursor-pointer p-0 text-left"
              aria-label="Optqvo Home"
            >
              <span className="font-mono text-2xl font-black tracking-tighter text-[#FAFAF8]">
                OPTQVO<span className="text-[#CCFF00]">.</span>
              </span>
            </button>

            <p className="text-[#FAFAF8]/70 text-sm leading-relaxed max-w-sm font-normal">
              Practical digital engineering for restaurants, shops, clinics, hotels, and growing SMEs — websites, mobile apps, automations, and custom business tools.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] uppercase tracking-wider font-bold">
              <span>●</span>
              <span>Made in India • Built for Growing Businesses</span>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-zip-lime inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono tracking-widest text-[#0A0A0D] no-underline shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#0A0A0D]" />
                <span>CHAT DIRECTLY ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#CCFF00]">
              Index
            </h4>
            <ul className="space-y-2 text-[#FAFAF8]/70 list-none p-0 m-0 font-mono text-xs">
              {[
                { label: "Overview", id: "home" },
                { label: "Our Services", id: "services" },
                { label: "Industry Solutions", id: "solutions" },
                { label: "Transformation Engine", id: "custom-solutions" },
                { label: "Shipped Projects", id: "work" },
                { label: "Why Optqvo", id: "about" },
                { label: "FAQ", id: "faq" },
                { label: "Contact Us", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-[#CCFF00] transition-colors cursor-pointer bg-transparent border-none p-0 text-[#FAFAF8]/75 flex items-center gap-1.5 group uppercase tracking-wider font-medium"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#CCFF00]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industry Solutions & Fast Problem Trigger (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#CCFF00]">
              Solutions by Sector
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[#FAFAF8]/70 font-mono text-xs">
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
                  className="text-left hover:text-[#CCFF00] transition-colors cursor-pointer bg-transparent border-none p-0 text-[#FAFAF8]/70 truncate uppercase tracking-wider font-medium"
                >
                  • {cat}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenEnquiry ? onOpenEnquiry("Footer Inquiry") : scrollTo("contact")}
                className="w-full py-4 px-5 rounded-full bg-[#15151A] hover:bg-[#1E1E26] border border-white/15 font-mono text-xs font-bold uppercase tracking-widest text-[#FAFAF8] transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <span>Tell Us Your Problem</span>
                <span className="text-[#CCFF00]">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#FAFAF8]/50">
          <p>© {new Date().getFullYear()} Optqvo Technologies. All rights reserved.</p>
          <p>Bespoke Digital Systems • Fixed Pricing • Fast Delivery</p>
        </div>
      </div>
    </footer>
  );
}
