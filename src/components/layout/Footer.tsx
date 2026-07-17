"use client";

import { motion } from "framer-motion";
import { Mail, Link2, Camera, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "918217206292";
const EMAIL = "hello@optqvo.com";

const footerLinks = {
  Company: [
    { label: "About", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "FAQ", href: "#faq" },
  ],
  Services: [
    { label: "Website Development", href: "#services" },
    { label: "Mobile App Development", href: "#services" },
    { label: "Custom Software", href: "#services" },
    { label: "AI Solutions", href: "#services" },
    { label: "Business Automation", href: "#services" },
    { label: "CRM & ERP Systems", href: "#services" },
    { label: "Dashboards & Analytics", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
    { label: "API & Integrations", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "SEO & Digital Marketing", href: "#services" },
    { label: "Maintenance & Support", href: "#services" },
  ],
};

const socials = [
  { icon: Mail, label: "Email", href: `mailto:${EMAIL}`, color: "hover:text-violet-400" },
  { icon: Link2, label: "LinkedIn", href: "https://linkedin.com/company/optqvo", color: "hover:text-blue-400" },
  { icon: Camera, label: "Instagram", href: "https://instagram.com/optqvo", color: "hover:text-pink-400" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Optqvo%2C%20I%27d%20like%20to%20discuss%20a%20project.`;

  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden" role="contentinfo">
      {/* Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-wrap">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon.png"
                alt="Optqvo"
                style={{ height: 38, width: "auto", objectFit: "contain", display: "block" }}
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-4">
              We help businesses build, automate, optimize and scale through modern software, AI and intelligent business systems.
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest gradient-text mb-5">Build. Automate. Grow.</p>

            {/* Contact buttons */}
            <div className="flex flex-col gap-2 mb-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                <span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#25d366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                Message Us
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                <span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)" }}>
                  <Mail className="w-2.5 h-2.5 text-violet-400" />
                </span>
                Email Us
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-xl glass border border-white/[0.07] flex items-center justify-center text-slate-500 ${color} transition-all duration-200`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Optqvo. All rights reserved. Built with precision.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
