"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe, Smartphone, Palette, Zap, Brain, BarChart3,
  ShoppingBag, Code2, Cloud, RefreshCw, ArrowRight
} from "lucide-react";

interface ServicesProps {
  onOpenEnquiry?: (category?: string) => void;
}

const servicesList = [
  {
    id: "website-dev",
    icon: Globe,
    title: "Website Development",
    description: "Professional websites that help your business look better online and make it easier for customers to contact you.",
    whatWeProvide: ["Business Websites", "Landing Pages", "Mobile Responsive", "Contact & Inquiry Forms"],
    usefulFor: "Restaurants, Shops, Salons, Clinics, Professional Services",
    iconColor: "text-violet-400",
    bgColor: "bg-violet-500/10",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Mobile apps built around your business needs for Android and iOS devices.",
    whatWeProvide: ["Android & iOS Apps", "Customer Booking Apps", "Service Apps", "App Store Publishing"],
    usefulFor: "Delivery Services, Booking Platforms, Customer Portals",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    id: "design-uiux",
    icon: Palette,
    title: "Website & UI/UX Design",
    description: "We improve the look, layout, and overall visual experience of your website or app.",
    whatWeProvide: ["Modern Visual Redesign", "Mobile Layout Optimization", "Clear Navigation", "Brand Logos & Graphics"],
    usefulFor: "Businesses with old websites needing a modern look",
    iconColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
  },
  {
    id: "business-automation",
    icon: Zap,
    title: "Business Automation",
    description: "We automate repetitive daily work so you can save hours of manual effort every week.",
    whatWeProvide: ["WhatsApp Inquiry Alerts", "Invoice Generation", "Lead Syncing", "Follow-up Reminders"],
    usefulFor: "Busy business owners, Agencies, Service providers",
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    id: "ai-solutions",
    icon: Brain,
    title: "AI Solutions",
    description: "Smart tools that can help your business handle customer inquiries and information more efficiently.",
    whatWeProvide: ["Automated WhatsApp Assistants", "Customer Q&A Helpers", "Document Summaries", "Smart Inquiry Routing"],
    usefulFor: "Hotels, Clinics, Support teams, Real Estate",
    iconColor: "text-fuchsia-400",
    bgColor: "bg-fuchsia-500/10",
  },
  {
    id: "dashboards",
    icon: BarChart3,
    title: "Business Dashboards",
    description: "Simple dashboards that help you understand your sales, data, and daily business information.",
    whatWeProvide: ["Sales & Revenue Charts", "Daily Order Tracking", "Customer Records", "Simple Excel/Sheets Sync"],
    usefulFor: "Store owners, Managers, Multi-branch businesses",
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    id: "online-store",
    icon: ShoppingBag,
    title: "Online Store Solutions",
    description: "Online stores and digital product catalogs that help you display and sell your products.",
    whatWeProvide: ["Product Catalogs", "UPI & Payment Gateway", "Order Management", "WhatsApp Cart Checkout"],
    usefulFor: "Retail stores, Boutiques, Manufacturers, Supermarkets",
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software",
    description: "Software built specifically around your unique business requirements and rules.",
    whatWeProvide: ["Tailored Business Systems", "Internal Staff Tools", "Booking & Management Systems"],
    usefulFor: "Unique business workflows, Special service requirements",
    iconColor: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
  },
  {
    id: "cloud-deployment",
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "We help put your website and applications online and keep them running properly 24/7.",
    whatWeProvide: ["Domain & SSL Setup", "Fast Cloud Hosting", "Daily Security Backups", "Uptime Monitoring"],
    usefulFor: "All online business websites and web applications",
    iconColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
  },
  {
    id: "tool-integrations",
    icon: RefreshCw,
    title: "Integrations",
    description: "We connect the software tools your business already uses so they can work together smoothly.",
    whatWeProvide: ["Payment Gateway Setup", "WhatsApp API Connection", "Google Forms Sync", "CRM & Email Connection"],
    usefulFor: "Businesses using multiple software tools",
    iconColor: "text-rose-400",
    bgColor: "bg-rose-500/10",
  },
];

export default function Services({ onOpenEnquiry }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" ref={ref} className="relative py-12 lg:py-16 overflow-hidden bg-[#09090c]">
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="section-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="badge mb-4">WHAT WE CAN BUILD</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Our Digital <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Practical digital capabilities designed to improve your online presence and solve business problems — explained simply.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl glass border border-white/[0.08] hover:border-white/[0.16] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${svc.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${svc.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.05]">
                      Service
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">{svc.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{svc.description}</p>

                  <div className="space-y-2 mb-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">What We Provide:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                      {svc.whatWeProvide.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-400 italic truncate max-w-[60%] sm:max-w-[65%]">
                    {svc.usefulFor}
                  </span>
                  <button
                    onClick={() => onOpenEnquiry ? onOpenEnquiry(svc.title) : scrollTo("contact")}
                    className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 cursor-pointer bg-transparent border-none flex-shrink-0"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
