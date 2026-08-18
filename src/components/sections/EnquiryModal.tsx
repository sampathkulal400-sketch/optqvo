"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "918217206292";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function EnquiryModal({ isOpen, onClose, initialCategory = "" }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState(initialCategory || "General Business");
  const [problemText, setProblemText] = useState("");
  const [budget, setBudget] = useState("");

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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-white border border-stone-200 rounded-3xl p-5 sm:p-8 shadow-2xl z-10 my-auto max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="mb-5 sm:mb-6 pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] sm:text-xs font-semibold mb-2.5">
                <MessageSquare className="w-3.5 h-3.5" />
                Tell Us Your Problem
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
                What problem are you trying to solve?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Tell us what you need. We will reply on WhatsApp with practical solution options.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-indigo-600 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Business Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Royal Restaurant"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-indigo-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-indigo-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Business Category</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-indigo-600 transition-colors"
                >
                  <option value="Restaurant / Food">Restaurant / Cafe / Food</option>
                  <option value="Retail & Shop">Retail & Shop / Store</option>
                  <option value="Hotel & Stay">Hotel / Resort / Stay</option>
                  <option value="Salon & Spa">Salon / Spa / Beauty</option>
                  <option value="Clinic & Healthcare">Clinic / Doctor / Health</option>
                  <option value="Education & Coaching">Education / Coaching Institute</option>
                  <option value="Real Estate">Real Estate / Construction</option>
                  <option value="Professional Services">Professional Services / Agency</option>
                  <option value="Unique Custom Problem">Unique Custom Problem</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  What does your business do & what problem do you want to solve? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. Customers keep asking for our menu on WhatsApp and we spend too much time sending photos. We need a simple digital menu."
                  value={problemText}
                  onChange={(e) => setProblemText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-indigo-600 transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Optional Budget (approx)
                </label>
                <input
                  type="text"
                  placeholder="e.g. ₹15,000 - ₹30,000 or Flexible"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-indigo-600 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-200 cursor-pointer mt-2 border-none"
              >
                <span>Submit Problem & Connect on WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-stone-500 text-center">
                Free consultation • No obligation • Direct developer response
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
