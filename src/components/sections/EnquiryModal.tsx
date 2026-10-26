"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquare, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

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

    const lines = [
      `*🚀 New Project Enquiry — Elostara Solutions*`,
      ``,
      `👤 *Name:* ${name}`,
      `🏢 *Business:* ${businessName || "Not specified"}`,
      `📱 *Phone / WhatsApp:* ${phone}`,
      `🏷️ *Business Category:* ${businessType}`,
      ``,
      `💡 *Problem / Requirement:*`,
      problemText,
      ...(budget ? [``, `💰 *Target Budget:* ${budget}`] : []),
      ``,
      `_Sent via elostara.com_`,
    ];
    const message = lines.join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain">
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
            className="relative w-full max-w-xl bg-[#F8F8F5] text-[#0A0A0D] border border-[#0A0A0D]/15 rounded-3xl p-4 sm:p-8 lg:p-9 shadow-2xl z-10 my-auto max-h-[88dvh] overflow-y-auto overscroll-contain"
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
            <div className="mb-5 sm:mb-6 pr-8">
              <span className="badge-plum mb-2.5 sm:mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>START A PROJECT</span>
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-[#0A0A0D] tracking-tight leading-snug">
                Tell us about your project
              </h3>
              <p className="text-xs sm:text-sm text-[#50505C] mt-1 font-normal">
                Share a few details about what you need. We will get back to you with ideas, timelines, and a clear quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Category Pills */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1.5 sm:mb-2">
                  Select Business Type
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {categoryPills.map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setBusinessType(cat)}
                      className={`px-3 py-1.5 rounded-full font-mono text-[11px] transition-all cursor-pointer border ${
                        businessType === cat
                          ? "bg-[#28113B] text-[#CCFF00] border-[#28113B] font-bold shadow-sm"
                          : "bg-white text-[#50505C] border-[#0A0A0D]/10 hover:border-[#0A0A0D]/20"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-base sm:text-sm text-[#0A0A0D] focus:outline-none focus:border-[#28113B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-base sm:text-sm text-[#0A0A0D] focus:outline-none focus:border-[#28113B] transition-colors"
                  />
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1">
                  Business / Store Name (Optional)
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. The Daily Grind Cafe"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-base sm:text-sm text-[#0A0A0D] focus:outline-none focus:border-[#28113B] transition-colors"
                />
              </div>

              {/* Problem Statement */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1">
                  Describe Your Problem / What You Need *
                </label>
                <textarea
                  required
                  rows={3}
                  value={problemText}
                  onChange={(e) => setProblemText(e.target.value)}
                  placeholder="e.g. We need a digital menu with QR code for 15 tables so customers can order on WhatsApp directly..."
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-base sm:text-sm text-[#0A0A0D] focus:outline-none focus:border-[#28113B] transition-colors resize-none"
                />
              </div>

              {/* Target Budget */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1">
                  Estimated Budget (Optional)
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. ₹10,000 – ₹25,000 or Flexible"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-base sm:text-sm text-[#0A0A0D] focus:outline-none focus:border-[#28113B] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-zip-plum w-full py-4 rounded-full font-mono text-xs tracking-widest text-[#FAFAF8] flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4 text-[#CCFF00]" />
                  <span>SUBMIT & CHAT ON WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 text-[#CCFF00]" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#848492] font-mono pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>We never spam or share your contact details</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
