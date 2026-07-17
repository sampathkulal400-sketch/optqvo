import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#09090B", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
