"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe, Smartphone, Code2, BarChart3, Brain, Zap, Cloud, TrendingUp,
  Check, Database, Palette, Headphones
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: Globe,
    title: "Website Development",
    description: "Premium digital presences that convert visitors into customers.",
    gradient: "from-violet-600/20 to-violet-600/5",
    border: "hover:border-violet-500/40",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]",
    items: ["Business Websites", "Landing Pages", "Corporate Websites", "Custom Web Applications", "E-commerce Websites", "Progressive Web Apps"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform apps engineered for performance and scale.",
    gradient: "from-blue-600/20 to-blue-600/5",
    border: "hover:border-blue-500/40",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]",
    items: ["Android Apps", "iOS Apps", "Cross Platform Apps", "Enterprise Apps"],
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software",
    description: "Tailored business systems that replace manual work with intelligent automation.",
    gradient: "from-indigo-600/20 to-indigo-600/5",
    border: "hover:border-indigo-500/40",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]",
    items: ["Inventory Management", "Employee Management", "Booking Systems", "Business Management Software", "Custom Internal Tools"],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent AI systems that learn, adapt, and elevate your operations.",
    gradient: "from-fuchsia-600/20 to-fuchsia-600/5",
    border: "hover:border-fuchsia-500/40",
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(217,70,239,0.12)]",
    items: ["AI Chatbots", "AI Assistants", "AI Voice Agents", "Knowledge Base AI", "AI Workflow Integration", "Custom AI Applications"],
  },
  {
    id: "automation",
    icon: Zap,
    title: "Business Automation",
    description: "End-to-end workflow automation that runs your business 24/7 without manual effort.",
    gradient: "from-amber-600/20 to-amber-600/5",
    border: "hover:border-amber-500/40",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.12)]",
    items: ["n8n Automation", "CRM Automation", "Lead Automation", "Email Automation", "Invoice Automation", "API Automation"],
  },
  {
    id: "crm-erp",
    icon: Database,
    title: "CRM & ERP Systems",
    description: "Powerful systems to manage customers, resources, and operations in one place.",
    gradient: "from-rose-600/20 to-rose-600/5",
    border: "hover:border-rose-500/40",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.12)]",
    items: ["Custom CRM", "ERP Systems", "Sales Pipeline", "Lead Management", "Customer Portal", "Reporting & Analytics"],
  },
  {
    id: "dashboards",
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description: "Real-time intelligence dashboards turning raw data into business insight.",
    gradient: "from-cyan-600/20 to-cyan-600/5",
    border: "hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]",
    items: ["Expense Management", "Revenue Dashboard", "Sales Dashboard", "Employee Dashboard", "Inventory Dashboard", "Executive Dashboard"],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable, secure infrastructure built to handle enterprise workloads.",
    gradient: "from-sky-600/20 to-sky-600/5",
    border: "hover:border-sky-500/40",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(14,165,233,0.12)]",
    items: ["Cloud Deployment", "CI/CD Pipelines", "Database Design", "Hosting & Scaling", "Server Management", "Monitoring & Alerts"],
  },
  {
    id: "api",
    icon: Code2,
    title: "API & Integrations",
    description: "Connect your tools and platforms with seamless, reliable API integrations.",
    gradient: "from-emerald-600/20 to-emerald-600/5",
    border: "hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]",
    items: ["REST API Development", "Third-party Integrations", "Payment Gateways", "Webhook Setup", "API Documentation", "Microservices"],
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    description: "Stunning, user-centric designs that delight users and drive conversions.",
    gradient: "from-pink-600/20 to-pink-600/5",
    border: "hover:border-pink-500/40",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.12)]",
    items: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Design Systems", "Brand Identity"],
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Data-driven growth strategies to maximize visibility and conversion rates.",
    gradient: "from-orange-600/20 to-orange-600/5",
    border: "hover:border-orange-500/40",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.12)]",
    items: ["Technical SEO", "Local SEO", "Performance Optimization", "Social Media Marketing", "Content Strategy", "Analytics Setup"],
  },
  {
    id: "maintenance",
    icon: Headphones,
    title: "Maintenance & Support",
    description: "Ongoing support, updates and monitoring to keep your systems running smoothly.",
    gradient: "from-teal-600/20 to-teal-600/5",
    border: "hover:border-teal-500/40",
    iconColor: "text-teal-400",
    iconBg: "bg-teal-500/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(20,184,166,0.12)]",
    items: ["Bug Fixes", "Feature Updates", "Performance Monitoring", "Security Patches", "24/7 Support", "SLA Agreements"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-gradient pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="section-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Everything Your Business{" "}
            <span className="gradient-text">Needs to Scale</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From idea to enterprise-grade deployment — we deliver complete digital solutions
            with AI at the core of everything we build.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.article
                key={svc.id}
                id={`service-${svc.id}`}
                variants={item}
                className={`service-card group relative rounded-2xl glass border border-white/[0.07] ${svc.border} p-6 cursor-default overflow-hidden ${svc.glow} transition-all duration-400`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl ${svc.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${svc.iconColor}`} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 leading-tight">{svc.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{svc.description}</p>

                  {/* Items */}
                  <ul className="space-y-1.5">
                    {svc.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <Check className={`w-3 h-3 ${svc.iconColor} flex-shrink-0`} strokeWidth={2.5} />
                        <span className="text-xs text-slate-400">{it}</span>
                      </li>
                    ))}
                  </ul>


                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
