"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, MessageSquare } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry?: (category?: string) => void;
}

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "Solutions", href: "solutions", hasDropdown: true },
  { label: "Work", href: "work" },
  { label: "About", href: "about" },
  { label: "FAQ", href: "faq" },
  { label: "Contact", href: "contact" },
];

const solutionDropdownItems = [
  { label: "Restaurants & Cafes", href: "solutions" },
  { label: "Retail & Shops", href: "solutions" },
  { label: "Hotels & Stays", href: "solutions" },
  { label: "Salons & Spas", href: "solutions" },
  { label: "Clinics & Doctors", href: "solutions" },
  { label: "Education & Coaching", href: "solutions" },
  { label: "Real Estate", href: "solutions" },
  { label: "Professional Services", href: "solutions" },
  { label: "Custom Solutions", href: "custom-solutions" },
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
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#09090c]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="section-wrap h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 bg-transparent border-none cursor-pointer p-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Optqvo"
              className="h-9 w-auto object-contain block"
            />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
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
                      className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors cursor-pointer bg-transparent border-none flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </button>

                    {/* Solutions Dropdown Menu */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-56 p-2 rounded-2xl bg-[#0d0d14] border border-white/[0.12] shadow-2xl z-50 space-y-0.5"
                        >
                          {solutionDropdownItems.map((item) => (
                            <button
                              key={item.label}
                              onClick={() => scrollTo(item.href)}
                              className="w-full text-left px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-violet-600/20 rounded-xl transition-colors cursor-pointer bg-transparent border-none block"
                            >
                              {item.label}
                            </button>
                          ))}
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
                  className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors cursor-pointer bg-transparent border-none"
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry() : scrollTo("contact")}
              className="btn-gradient px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 cursor-pointer border-none shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Tell Us Your Problem</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-300 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-[99] bg-[#09090e]/98 backdrop-blur-2xl border-b border-white/[0.1] p-6 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-1 mb-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors cursor-pointer bg-transparent border-none block"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
                else scrollTo("contact");
              }}
              className="btn-gradient w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 cursor-pointer border-none shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tell Us Your Problem</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
