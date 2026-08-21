"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import CustomSolutions from "@/components/sections/CustomSolutions";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import EnquiryModal from "@/components/sections/EnquiryModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (category?: string) => {
    setModalCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#F8F8F5] min-h-screen text-[#0A0A0D] selection:bg-[#CCFF00] selection:text-[#0A0A0D]">
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      <main>
        {/* 1. Hero: 5-Second Test Clarity */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. Services: What Optqvo Can Build */}
        <Services onOpenEnquiry={handleOpenEnquiry} />

        {/* 3. Solutions: Solutions Organized by Business Types */}
        <Solutions onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Custom Solutions: Dedicated Problem Solver Section */}
        <CustomSolutions onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Our Work: Real Verified Projects (Gokarna Purohita & SN Cranes Puttur) */}
        <Portfolio onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. About: Simple, Trustworthy Story */}
        <About />

        {/* 7. FAQ: Plain English Answers */}
        <FAQ onOpenEnquiry={handleOpenEnquiry} />

        {/* 8. Final CTA: "Have a problem you'd like to solve?" */}
        <FinalCTA onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />

      {/* Interactive Problem Submission Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseEnquiry}
        initialCategory={modalCategory}
      />
    </div>
  );
}
