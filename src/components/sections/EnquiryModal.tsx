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
              <p className="text-xs sm:text-sm text-[#50505C] mt-1 font-normal">
                Tell us about your business requirement. We reply on WhatsApp the same day with practical options and a fixed quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category Pills */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-2">
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
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-sm text-[#0A0A0D] focus:outline-none focus:border-[#28113B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1.5">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-sm text-[#0A0A0D] focus:outline-none focus:border-[#28113B] transition-colors"
                  />
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1.5">
                  Business / Store Name (Optional)
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Sri Krishna Sweets, Puttur"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-sm text-[#0A0A0D] focus:outline-none focus:border-[#28113B] transition-colors"
                />
              </div>

              {/* Problem Statement */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1.5">
                  Describe Your Problem / What You Need *
                </label>
                <textarea
                  required
                  rows={3}
                  value={problemText}
                  onChange={(e) => setProblemText(e.target.value)}
                  placeholder="e.g. We need a digital menu with QR code for 15 tables so customers can order on WhatsApp directly..."
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-sm text-[#0A0A0D] focus:outline-none focus:border-[#28113B] transition-colors resize-none"
                />
              </div>

              {/* Target Budget */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#848492] font-bold mb-1.5">
                  Estimated Budget (Optional)
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. ₹10,000 – ₹25,000 or Flexible"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#0A0A0D]/15 text-sm text-[#0A0A0D] focus:outline-none focus:border-[#28113B] transition-colors"
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
