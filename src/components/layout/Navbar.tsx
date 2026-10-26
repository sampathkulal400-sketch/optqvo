"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, MessageSquare } from "lucide-react";
import ElostaraLogo from "@/components/ElostaraLogo";

interface NavbarProps {
  onOpenEnquiry?: (category?: string) => void;
}

const navLinks = [
  { label: "Overview", href: "home" },
  { label: "Services", href: "services" },
  { label: "Solutions", href: "solutions", hasDropdown: true },
  { label: "About", href: "about" },
  { label: "FAQ", href: "faq" },
];

const solutionDropdownItems = [
  { label: "Restaurants & Cafes", tag: "QR & Orders" },
  { label: "Retail & Shops", tag: "Catalog & WhatsApp" },
  { label: "Hotels & Stays", tag: "Direct Bookings" },
  { label: "Salons & Spas", tag: "Slot Scheduling" },
  { label: "Clinics & Doctors", tag: "Appointments" },
  { label: "Education & Coaching", tag: "Admissions" },
  { label: "Real Estate", tag: "Listings & Leads" },
  { label: "Professional Services", tag: "Portfolios" },
];

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "py-2.5 sm:py-3 bg-[#F8F8F5]/90 backdrop-blur-xl border-b border-[#0A0A0D]/08 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            : "py-3.5 sm:py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="section-wrap flex items-center justify-between">
          {/* Brand Logo & Live Status Indicator */}
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0 group"
              aria-label="Elostara Solutions Home"
            >
              <ElostaraLogo variant="dark" className="h-7 sm:h-9 md:h-10 max-w-[150px] sm:max-w-none w-auto hover:opacity-85 transition-opacity" />
            </button>

            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0D]/04 border border-[#0A0A0D]/08 font-mono text-[10px] text-[#52525C] uppercase tracking-wider font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span>Available for New Projects</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#0A0A0D]/04 border border-[#0A0A0D]/08 backdrop-blur-md">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="px-4 py-2 font-mono text-xs uppercase tracking-widest text-[#0A0A0D]/80 hover:text-[#0A0A0D] hover:bg-white/80 rounded-full transition-all cursor-pointer bg-transparent border-none flex items-center gap-1 font-medium"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Solutions Megamenu Dropdown */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-0 w-80 p-3 rounded-2xl bg-[#FFFFFF] border border-[#0A0A0D]/10 shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-50 mt-2"
                        >
                          <div className="px-2 py-1.5 mb-1 font-mono text-[10px] uppercase tracking-widest font-bold text-[#878794] border-b border-[#0A0A0D]/06">
                            Tailored By Industry
                          </div>
                          <div className="grid grid-cols-1 gap-1">
                            {solutionDropdownItems.map((item) => (
                              <button
                                key={item.label}
                                onClick={() => scrollTo("solutions")}
                                className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#0A0A0D] hover:bg-[#F8F8F5] transition-colors cursor-pointer bg-transparent border-none flex items-center justify-between group"
                              >
                                <span>{item.label}</span>
                                <span className="font-mono text-[10px] text-[#878794] group-hover:text-[#28113B] transition-colors">
                                  {item.tag}
                                </span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 font-mono text-xs uppercase tracking-widest text-[#0A0A0D]/80 hover:text-[#0A0A0D] hover:bg-white/80 rounded-full transition-all cursor-pointer bg-transparent border-none font-medium"
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry() : scrollTo("contact")}
              className="btn-zip-plum px-6 py-3 rounded-full text-xs font-mono tracking-widest flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>Start a Project</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-full bg-[#0A0A0D]/05 border border-[#0A0A0D]/10 text-[#0A0A0D] cursor-pointer hover:bg-[#0A0A0D]/10 transition-colors"
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[98] bg-[#0A0A0D]/50 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 z-[99] bg-[#F8F8F5] border border-[#0A0A0D]/12 rounded-3xl p-4 sm:p-6 lg:hidden max-h-[85dvh] overflow-y-auto shadow-2xl space-y-3 sm:space-y-4"
            >

              <div className="space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 min-h-[44px] font-mono text-xs uppercase tracking-widest text-[#0A0A0D] font-bold hover:bg-[#0A0A0D]/06 rounded-xl transition-colors cursor-pointer bg-transparent border-none flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#878794]" />
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-[#0A0A0D]/08">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    if (onOpenEnquiry) onOpenEnquiry("Mobile Menu CTA");
                    else scrollTo("contact");
                  }}
                  className="btn-zip-plum w-full py-4 min-h-[48px] rounded-full font-mono text-xs tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#CCFF00]" />
                  <span>TELL US YOUR PROBLEM</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
