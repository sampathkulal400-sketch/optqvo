"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquare, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "918217206292";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

const categoryPills = [
  "Restaurants & Cafes",
  "Retail & Shop",
  "Hotel & Stay",
  "Salon & Spa",
  "Clinic & Doctor",
  "Education & Coaching",
  "Real Estate",
  "Unique Custom Problem",
];

export default function EnquiryModal({ isOpen, onClose, initialCategory = "" }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState(initialCategory || "Restaurants & Cafes");
  const [problemText, setProblemText] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    if (initialCategory) {
      setBusinessType(initialCategory);
    }
  }, [initialCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !problemText) return;

    const message =
      `*New Problem Inquiry - Optqvo*\n\n` +
      `👤 *Name:* ${name}\n` +
      `🏢 *Business:* ${businessName || "Not specified"}\n` +
      `📞 *Phone/WhatsApp:* ${phone}\n` +
      `🏷️ *Business Category:* ${businessType}\n` +
      `💡 *Problem / Requirement:*\n${problemText}\n` +
      (budget ? `💰 *Target Budget:* ${budget}\n` : "");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-[#F8F8F5] text-[#0A0A0D] border border-[#0A0A0D]/15 rounded-3xl p-6 sm:p-9 shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-[#0A0A0D]/06 border border-[#0A0A0D]/10 flex items-center justify-center text-[#0A0A0D] hover:bg-[#0A0A0D]/12 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pr-8">
              <span className="badge-plum mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>TELL US YOUR PROBLEM</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0D] tracking-tight leading-snug">
                What problem are you trying to solve?
              </h3>
              <p className="text-xs sm:text-sm text-[#52525C] mt-1 font-normal">
                Tell us about your business requirement. We reply on WhatsApp the same day with practical options.
              </p>
            </div>

            {/* Quick Sector Selector Chips */}
            <div className="mb-5 space-y-1.5">
              <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#878794]">
                SELECT BUSINESS CATEGORY:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {categoryPills.map((pill) => {
                  const isSelected = businessType.toLowerCase().includes(pill.toLowerCase().slice(0, 5));
                  return (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => setBusinessType(pill)}
                      className={`px-3 py-1.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider cursor-pointer border transition-all ${
                        isSelected
                          ? "bg-[#28113B] text-[#CCFF00] border-[#28113B]"
                          : "bg-white text-[#52525C] border-[#0A0A0D]/10 hover:border-[#0A0A0D]/25"
                      }`}
                    >
                      {pill}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0D] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-base sm:text-sm text-[#0A0A0D] placeholder-[#878794] focus:outline-none focus:border-[#28113B] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0D] mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Royal Cafe"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-base sm:text-sm text-[#0A0A0D] placeholder-[#878794] focus:outline-none focus:border-[#28113B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0D] mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-base sm:text-sm text-[#0A0A0D] placeholder-[#878794] focus:outline-none focus:border-[#28113B] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0D] mb-1">
                  What problem are you trying to solve? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. We need a digital QR menu with instant WhatsApp ordering and table reservations for our cafe."
                  value={problemText}
                  onChange={(e) => setProblemText(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-base sm:text-sm text-[#0A0A0D] placeholder-[#878794] focus:outline-none focus:border-[#28113B] transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0D] mb-1">
                  Target Budget (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. ₹15,000 - ₹35,000 or Flexible"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-base sm:text-sm text-[#0A0A0D] placeholder-[#878794] focus:outline-none focus:border-[#28113B] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="btn-zip-plum w-full py-4 px-6 rounded-full text-xs font-mono tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2 shadow-lg cursor-pointer border-none mt-2"
              >
                <span>CONNECT ON WHATSAPP DIRECTLY</span>
                <Send className="w-4 h-4 text-[#CCFF00]" />
              </button>

              <p className="font-mono text-[11px] text-[#878794] text-center uppercase tracking-wider font-semibold">
                Free 30-min Consultation • Fixed Pricing • Direct WhatsApp
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
