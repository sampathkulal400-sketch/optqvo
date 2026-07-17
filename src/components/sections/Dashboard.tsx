"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, BarChart3, DollarSign, Users, Package, TrendingUp, Activity, Target, FileText, Lock } from "lucide-react";

const features = [
  { icon: DollarSign, label: "Expense Tracking", color: "text-violet-400" },
  { icon: TrendingUp, label: "Revenue Analytics", color: "text-blue-400" },
  { icon: Users, label: "Employee Performance", color: "text-cyan-400" },
  { icon: Package, label: "Inventory Monitoring", color: "text-emerald-400" },
  { icon: BarChart3, label: "Sales Reports", color: "text-fuchsia-400" },
  { icon: Activity, label: "Real-Time Charts", color: "text-amber-400" },
  { icon: Target, label: "KPI Tracking", color: "text-rose-400" },
  { icon: BarChart3, label: "Business Insights", color: "text-indigo-400" },
  { icon: FileText, label: "Financial Reports", color: "text-sky-400" },
  { icon: Lock, label: "Role-Based Access", color: "text-slate-400" },
];

function DashboardPreview() {
  return (
    <div className="relative rounded-2xl overflow-hidden glass-strong border border-white/[0.08] shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0a0a10]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 mx-3 h-5 rounded-md bg-white/[0.04] flex items-center px-2">
          <span className="text-[10px] text-slate-600">Business Intelligence Dashboard</span>
        </div>
        <div className="w-4 h-4 rounded bg-violet-500/20 flex items-center justify-center">
          <span className="text-[8px] text-violet-400 font-bold">AI</span>
        </div>
      </div>

      <div className="bg-[#0a0a10] p-4">
        {/* KPI Row */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "Total Revenue", value: "$248K", change: "+22%", c: "#10b981" },
            { label: "Expenses", value: "$82K", change: "-8%", c: "#3b82f6" },
            { label: "Net Profit", value: "$166K", change: "+31%", c: "#7c3aed" },
            { label: "Efficiency", value: "94%", change: "+5%", c: "#06b6d4" },
          ].map((k) => (
            <div key={k.label} className="rounded-xl bg-[#111118] border border-white/[0.05] p-3">
              <p className="text-[9px] text-slate-600 mb-1">{k.label}</p>
              <p className="text-sm font-black text-white">{k.value}</p>
              <p className="text-[9px] font-semibold mt-0.5" style={{ color: k.c }}>{k.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Line chart */}
          <div className="col-span-2 rounded-xl bg-[#111118] border border-white/[0.05] p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] text-slate-400 font-medium">Revenue vs Expenses</p>
              <div className="flex gap-2">
                <span className="text-[8px] text-violet-400 flex items-center gap-1"><span className="w-4 h-0.5 bg-violet-400 inline-block rounded" />Revenue</span>
                <span className="text-[8px] text-blue-400 flex items-center gap-1"><span className="w-4 h-0.5 bg-blue-400 inline-block rounded" />Expenses</span>
              </div>
            </div>
            <svg viewBox="0 0 200 60" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* Revenue line */}
              <polyline
                points="0,50 25,40 50,30 75,35 100,20 125,15 150,10 175,8 200,5"
                fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
              <polyline
                points="0,50 25,40 50,30 75,35 100,20 125,15 150,10 175,8 200,5"
                fill="url(#revGrad)" stroke="none"
              />
              {/* Expenses line */}
              <polyline
                points="0,55 25,52 50,50 75,48 100,45 125,43 150,42 175,40 200,38"
                fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4,2"
              />
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#7c3aed" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Donut */}
          <div className="rounded-xl bg-[#111118] border border-white/[0.05] p-3">
            <p className="text-[10px] text-slate-400 font-medium mb-2">Dept Spend</p>
            <svg viewBox="0 0 80 80" className="w-full max-w-[80px] mx-auto" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#1e293b" strokeWidth="10"/>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#7c3aed" strokeWidth="10" strokeDasharray="60 128" strokeDashoffset="0"/>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#3b82f6" strokeWidth="10" strokeDasharray="35 128" strokeDashoffset="-60"/>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#06b6d4" strokeWidth="10" strokeDasharray="33 128" strokeDashoffset="-95"/>
              <text x="40" y="44" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">94%</text>
            </svg>
            <div className="mt-2 space-y-1">
              {[["Sales","#7c3aed"],["Ops","#3b82f6"],["HR","#06b6d4"]].map(([l,c])=>(
                <div key={l} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm" style={{background:c as string}} />
                  <span className="text-[9px] text-slate-500">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Employee table */}
        <div className="mt-3 rounded-xl bg-[#111118] border border-white/[0.05] p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] text-slate-400 font-medium">Top Performers</p>
            <span className="text-[9px] text-violet-400 border border-violet-500/20 rounded px-1.5 py-0.5 bg-violet-500/10">This Month</span>
          </div>
          <div className="space-y-1.5">
            {[["Alex M.","Sales","$42K","98%"],["Sara K.","Ops","$38K","95%"],["James L.","Dev","$51K","92%"]].map(([name,dept,rev,score])=>(
              <div key={name as string} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex-shrink-0" />
                <span className="text-[10px] text-slate-300 flex-1">{name}</span>
                <span className="text-[9px] text-slate-600">{dept}</span>
                <span className="text-[10px] text-emerald-400 font-medium w-10 text-right">{rev}</span>
                <div className="w-12 h-1 rounded-full bg-white/[0.06]">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" style={{ width: score }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboard" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-violet-600/6 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-blue-600/6 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="section-wrap">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="float-delay-1"
          >
            <DashboardPreview />
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="badge mb-4">Custom Dashboards</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
                Your Business,{" "}
                <span className="gradient-text">Fully Visible</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                We build custom business intelligence dashboards that consolidate your entire operation into a single, beautiful interface. From financial data to employee performance — see everything, act faster.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Every dashboard we build is fully custom to your business logic, data sources and team structure. No generic templates — just precision-engineered insight tools that become the command center of your business.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-6 h-6 rounded-md bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                        <Check className={`w-3.5 h-3.5 ${f.color}`} strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-slate-400">{f.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-8 px-6 py-3 rounded-xl font-semibold text-white btn-gradient"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Custom Dashboard
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
