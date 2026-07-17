"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "Industries", href: "industries" },
  { label: "Process", href: "process" },
  { label: "FAQ", href: "faq" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(9,9,11,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 64px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="nav-container"
        >
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("home")}
            style={{
              display: "flex", alignItems: "center",
              background: "transparent", border: "none", cursor: "pointer", padding: 0,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Optqvo"
              style={{ height: 42, width: "auto", objectFit: "contain", display: "block" }}
            />
          </motion.button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  padding: "7px 14px",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "#94a3b8",
                  background: "transparent",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#f1f5f9";
                  (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#94a3b8";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-cta">
            <motion.button
              onClick={() => scrollTo("contact")}
              className="btn-gradient"
              style={{
                padding: "9px 20px",
                borderRadius: 10,
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#fff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "-0.01em",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Free Consultation
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              padding: 8, background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 8, color: "#94a3b8", cursor: "pointer",
            }}
            className="mobile-menu-btn"
            aria-label="Menu"
          >
            {mobileOpen ? <X style={{ width: 20, height: 20 }} /> : <Menu style={{ width: 20, height: 20 }} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
              background: "rgba(9,9,11,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "16px 24px 20px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "11px 14px", borderRadius: 10,
                  fontSize: "0.9rem", fontWeight: 500,
                  color: "#94a3b8", background: "transparent",
                  border: "none", cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#f1f5f9";
                  (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#94a3b8";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollTo("contact")}
              className="btn-gradient"
              style={{
                display: "block", width: "100%", marginTop: 12,
                padding: "12px", borderRadius: 10,
                fontSize: "0.9rem", fontWeight: 700,
                color: "#fff", border: "none", cursor: "pointer",
              }}
            >
              Book Free Consultation
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
