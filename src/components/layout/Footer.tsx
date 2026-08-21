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
      <div className="section-wrap py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand Manifesto & WhatsApp Direct (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
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
              Practical digital engineering for restaurants, shops, clinics, hotels, and growing SMEs — custom web apps, WhatsApp automations, and operational software.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] uppercase tracking-wider font-bold">
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
                { label: "Capabilities", id: "services" },
                { label: "Industry Blueprints", id: "solutions" },
                { label: "Transformation Engine", id: "custom-solutions" },
                { label: "Case Study", id: "work" },
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
                  onClick={() => {
                    scrollTo("solutions");
                    if (onOpenEnquiry) onOpenEnquiry(cat);
                  }}
                  className="text-left hover:text-[#CCFF00] transition-colors cursor-pointer bg-transparent border-none p-0 truncate font-medium"
                >
                  → {cat}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenEnquiry ? onOpenEnquiry("Footer Intake") : scrollTo("contact")}
                className="text-xs font-mono text-[#CCFF00] hover:underline cursor-pointer bg-transparent border-none p-0 flex items-center gap-1.5 font-bold"
              >
                <span>Have a unique custom requirement?</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#FAFAF8]/50">
          <div>
            © {new Date().getFullYear()} Optqvo Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Clean Code & Practical Systems</span>
            <span>Uptime: 99.9%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
