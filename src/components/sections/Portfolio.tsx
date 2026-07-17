"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

// Inline SVG mockups for each project
function RestaurantMockup() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#0d0d14" rx="8" />
      {/* Header */}
      <rect x="0" y="0" width="280" height="36" fill="#111118" rx="8" />
      <rect x="0" y="28" width="280" height="8" fill="#111118" />
      <circle cx="20" cy="18" r="6" fill="#ef4444" opacity="0.7" />
      <rect x="80" y="12" width="120" height="12" rx="6" fill="#1a1a2e" />
      {/* Menu items */}
      {[0,1,2].map(i => (
        <g key={i} transform={`translate(12, ${48 + i * 36})`}>
          <rect width="256" height="28" rx="6" fill="#1a1a2e" />
          <rect x="8" y="6" width="16" height="16" rx="4" fill={["#f97316","#10b981","#6366f1"][i]} opacity="0.6" />
          <rect x="32" y="8" width="80" height="6" rx="3" fill="#334155" />
          <rect x="32" y="17" width="50" height="4" rx="2" fill="#1e293b" />
          <rect x="210" y="8" width="38" height="12" rx="4" fill={["#f97316","#10b981","#6366f1"][i]} opacity="0.4" />
        </g>
      ))}
      {/* Cart button */}
      <rect x="12" y="156" width="256" height="0" rx="8" fill="#7c3aed" />
    </svg>
  );
}

function ExpenseMockup() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#0d0d14" rx="8" />
      <rect x="0" y="0" width="280" height="30" fill="#111118" rx="8" />
      <rect x="0" y="22" width="280" height="8" fill="#111118" />
      <rect x="12" y="9" width="80" height="12" rx="6" fill="#1a1a2e" />
      {/* Stat cards */}
      {[["$12.4K","Monthly","#7c3aed"], ["$3.2K","Pending","#ef4444"], ["92%","Budget","#10b981"]].map(([v,l,c], i) => (
        <g key={l} transform={`translate(${10 + i*90}, 36)`}>
          <rect width="80" height="40" rx="6" fill="#111118" />
          <text x="8" y="17" fill={c as string} fontSize="11" fontWeight="bold" fontFamily="monospace">{v}</text>
          <text x="8" y="30" fill="#475569" fontSize="8" fontFamily="sans-serif">{l}</text>
        </g>
      ))}
      {/* Bar chart */}
      <rect x="10" y="84" width="260" height="70" rx="6" fill="#111118" />
      {[30,55,40,70,60,80,50].map((h,i) => (
        <rect key={i} x={20+i*35} y={144-h*0.6} width="22" height={h*0.6} rx="3" fill="#7c3aed" opacity={0.3+i*0.1} />
      ))}
    </svg>
  );
}

function InventoryMockup() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#0d0d14" rx="8" />
      <rect x="0" y="0" width="60" height="160" fill="#111118" rx="8" />
      <rect x="52" y="0" width="8" height="160" fill="#111118" />
      {[0,1,2,3,4].map(i => (
        <g key={i} transform={`translate(8, ${20+i*28})`}>
          <rect width="44" height="20" rx="4" fill={i===1?"#7c3aed22":"transparent"} />
          <rect x="10" y="6" width="24" height="8" rx="3" fill={i===1?"#7c3aed":"#1e293b"} />
        </g>
      ))}
      {/* Table */}
      <rect x="68" y="10" width="200" height="16" rx="4" fill="#1a1a2e" />
      {[0,1,2,3,4].map(i => (
        <g key={i} transform={`translate(68, ${32+i*24})`}>
          <rect width="200" height="20" rx="3" fill={i%2===0?"#111118":"transparent"} />
          <rect x="8" y="6" width="40" height="8" rx="3" fill="#1e293b" />
          <rect x="58" y="6" width="30" height="8" rx="3" fill="#1e293b" />
          <rect x="98" y="6" width="30" height="8" rx="3" fill="#1e293b" />
          <circle cx="178" cy="10" r="5" fill={["#10b981","#f59e0b","#ef4444","#10b981","#6366f1"][i]} opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

function ClinicMockup() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#0d0d14" rx="8" />
      <rect x="0" y="0" width="280" height="30" fill="#111118" rx="8" />
      <rect x="0" y="22" width="280" height="8" fill="#111118" />
      <circle cx="20" cy="15" r="7" fill="#ef444430" />
      <text x="16" y="19" fill="#ef4444" fontSize="10" fontFamily="sans-serif">+</text>
      <rect x="40" y="9" width="60" height="12" rx="4" fill="#1a1a2e" />
      {/* Calendar */}
      <rect x="10" y="36" width="120" height="116" rx="6" fill="#111118" />
      {["Mon","Tue","Wed","Thu","Fri"].map((d,i) => (
        <text key={d} x={18+i*22} y="50" fill="#475569" fontSize="7" fontFamily="sans-serif">{d}</text>
      ))}
      {[0,1,2,3].map(row => [0,1,2,3,4].map(col => (
        <rect key={`${row}-${col}`} x={14+col*22} y={54+row*20} width="18" height="14" rx="3"
          fill={row===1&&col===2?"#7c3aed":row===0&&col===4?"#10b98130":"#1a1a2e"} />
      )))}
      {/* Patient list */}
      <rect x="138" y="36" width="132" height="116" rx="6" fill="#111118" />
      {[0,1,2,3].map(i => (
        <g key={i} transform={`translate(146, ${44+i*26})`}>
          <circle cx="8" cy="8" r="8" fill="#1e293b" />
          <rect x="22" y="2" width="60" height="6" rx="3" fill="#1e293b" />
          <rect x="22" y="12" width="40" height="5" rx="2" fill="#0f172a" />
        </g>
      ))}
    </svg>
  );
}

function FleetMockup() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#0d0d14" rx="8" />
      {/* Map bg */}
      <rect x="0" y="0" width="280" height="160" fill="#0a1628" rx="8" />
      {/* Grid lines */}
      {[0,1,2,3,4].map(i=><line key={i} x1={i*70} y1="0" x2={i*70} y2="160" stroke="#1a2535" strokeWidth="1"/>)}
      {[0,1,2,3].map(i=><line key={i} x1="0" y1={i*53} x2="280" y2={i*53} stroke="#1a2535" strokeWidth="1"/>)}
      {/* Roads */}
      <line x1="0" y1="80" x2="280" y2="80" stroke="#1e3a5f" strokeWidth="3"/>
      <line x1="140" y1="0" x2="140" y2="160" stroke="#1e3a5f" strokeWidth="3"/>
      {/* Truck icons */}
      {[[50,60,"#10b981"],[180,100,"#3b82f6"],[90,130,"#f59e0b"],[220,40,"#10b981"]].map(([x,y,c],i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <circle r="8" fill={c as string} opacity="0.3"/>
          <circle r="4" fill={c as string}/>
        </g>
      ))}
      {/* Info panel */}
      <rect x="170" y="8" width="102" height="50" rx="8" fill="#111118cc" />
      <text x="180" y="22" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Fleet Status</text>
      <text x="180" y="34" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">4 Active</text>
      <text x="180" y="46" fill="#475569" fontSize="8" fontFamily="sans-serif">1 In Service</text>
    </svg>
  );
}

function CRMMockup() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#0d0d14" rx="8" />
      {/* Kanban board */}
      {[["New","#6366f1"],["In Progress","#f59e0b"],["Won","#10b981"]].map(([col,c], ci) => (
        <g key={col} transform={`translate(${8+ci*90}, 8)`}>
          <rect width="82" height="144" rx="6" fill="#111118"/>
          <text x="8" y="16" fill={c as string} fontSize="8" fontFamily="sans-serif" fontWeight="600">{col}</text>
          {[0,1,2].map(i=>(
            <g key={i} transform={`translate(8, ${22+i*38})`}>
              <rect width="66" height="32" rx="4" fill="#1a1a2e"/>
              <rect x="6" y="6" width="40" height="6" rx="3" fill="#1e293b"/>
              <rect x="6" y="16" width="28" height="5" rx="2" fill="#0f172a"/>
              <circle cx="52" cy="9" r="5" fill={c as string} opacity="0.4"/>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function AISupportMockup() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#0d0d14" rx="8" />
      <rect x="0" y="0" width="280" height="32" fill="#111118" rx="8" />
      <rect x="0" y="24" width="280" height="8" fill="#111118" />
      <circle cx="22" cy="16" r="8" fill="#7c3aed30" />
      <text x="18" y="20" fill="#8b5cf6" fontSize="10" fontFamily="sans-serif">AI</text>
      <rect x="40" y="9" width="80" height="14" rx="4" fill="#1a1a2e" />
      {/* Chat bubbles */}
      <rect x="12" y="40" width="160" height="22" rx="10" fill="#1a1a2e" />
      <text x="22" y="55" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">How can I track my order?</text>
      <rect x="100" y="70" width="168" height="28" rx="10" fill="#7c3aed22" />
      <rect x="100" y="68" width="168" height="28" rx="10" fill="#7c3aed22" />
      <text x="110" y="80" fill="#c4b5fd" fontSize="8" fontFamily="sans-serif">Sure! Your order #1234 is</text>
      <text x="110" y="90" fill="#c4b5fd" fontSize="8" fontFamily="sans-serif">currently out for delivery.</text>
      <rect x="12" y="106" width="130" height="22" rx="10" fill="#1a1a2e" />
      <text x="22" y="121" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">What's the ETA?</text>
      <rect x="90" y="134" width="178" height="22" rx="10" fill="#7c3aed22" />
      <text x="100" y="149" fill="#c4b5fd" fontSize="8" fontFamily="sans-serif">Estimated arrival: Today 4–6 PM</text>
    </svg>
  );
}

function AutomationMockup() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#0d0d14" rx="8" />
      {/* Flow nodes */}
      {[
        {x:20,y:60,label:"Lead\nCapture",c:"#7c3aed"},
        {x:90,y:30,label:"Email\nSeq.",c:"#3b82f6"},
        {x:90,y:90,label:"CRM\nUpdate",c:"#10b981"},
        {x:170,y:60,label:"AI\nScore",c:"#f59e0b"},
        {x:230,y:40,label:"Sales\nAlert",c:"#ef4444"},
        {x:230,y:80,label:"Invoice\nSend",c:"#06b6d4"},
      ].map((n, i) => (
        <g key={i} transform={`translate(${n.x},${n.y})`}>
          <rect x="-22" y="-14" width="52" height="28" rx="6" fill="#111118" stroke={n.c} strokeWidth="1.5" strokeOpacity="0.5" />
          <text x="4" y="-3" fill={n.c} fontSize="7" textAnchor="middle" fontFamily="sans-serif">{n.label.split('\n')[0]}</text>
          <text x="4" y="7" fill="#475569" fontSize="7" textAnchor="middle" fontFamily="sans-serif">{n.label.split('\n')[1]}</text>
        </g>
      ))}
      {/* Arrows */}
      <line x1="52" y1="70" x2="68" y2="44" stroke="#475569" strokeWidth="1" markerEnd="url(#arr)"/>
      <line x1="52" y1="72" x2="68" y2="98" stroke="#475569" strokeWidth="1"/>
      <line x1="120" y1="37" x2="148" y2="60" stroke="#475569" strokeWidth="1"/>
      <line x1="120" y1="97" x2="148" y2="70" stroke="#475569" strokeWidth="1"/>
      <line x1="195" y1="58" x2="208" y2="48" stroke="#475569" strokeWidth="1"/>
      <line x1="195" y1="64" x2="208" y2="82" stroke="#475569" strokeWidth="1"/>
    </svg>
  );
}

function BankingMockup() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#0d0d14" rx="8" />
      {/* Phone frame */}
      <rect x="80" y="5" width="120" height="150" rx="14" fill="#111118" stroke="#1e293b" strokeWidth="1.5" />
      <rect x="110" y="9" width="60" height="4" rx="2" fill="#1e293b" />
      {/* Card */}
      <rect x="90" y="20" width="100" height="55" rx="8" fill="#7c3aed" />
      <text x="100" y="38" fill="white" fontSize="8" fontFamily="monospace" opacity="0.8">OPTQVO BANK</text>
      <text x="100" y="54" fill="white" fontSize="9" fontFamily="monospace">•••• 4821</text>
      <text x="100" y="68" fill="white" fontSize="8" fontFamily="monospace" opacity="0.7">$8,420.50</text>
      {/* Transactions */}
      {[["Spotify","-$9.99","#ef4444"],["Salary","+$3.2K","#10b981"],["Netflix","-$15","#ef4444"]].map(([l,a,c],i)=>(
        <g key={l} transform={`translate(90, ${84+i*21})`}>
          <rect width="100" height="17" rx="4" fill="#1a1a2e"/>
          <text x="8" y="12" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">{l}</text>
          <text x="72" y="12" fill={c as string} fontSize="7" fontFamily="monospace" textAnchor="end">{a}</text>
        </g>
      ))}
    </svg>
  );
}

function LandingMockup() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#0d0d14" rx="8" />
      {/* Nav */}
      <rect x="0" y="0" width="280" height="24" fill="#111118" rx="8" />
      <rect x="0" y="16" width="280" height="8" fill="#111118" />
      <rect x="10" y="8" width="40" height="8" rx="4" fill="#7c3aed" opacity="0.6" />
      {[100,140,170,200].map(x => <rect key={x} x={x} y="9" width="28" height="6" rx="3" fill="#1e293b"/>)}
      {/* Hero text */}
      <rect x="30" y="36" width="140" height="14" rx="5" fill="#1e293b" />
      <rect x="30" y="54" width="110" height="10" rx="4" fill="#111118" />
      <rect x="30" y="68" width="90" height="8" rx="4" fill="#111118" />
      <rect x="30" y="86" width="80" height="22" rx="8" fill="#7c3aed" opacity="0.8" />
      <rect x="120" y="86" width="70" height="22" rx="8" fill="#1a1a2e" />
      {/* Hero image */}
      <rect x="170" y="28" width="100" height="80" rx="10" fill="#111118" />
      <rect x="178" y="36" width="84" height="64" rx="7" fill="#1a1a2e" />
      {[0,1,2].map(i=><rect key={i} x="184" y={44+i*16} width={60-i*12} height="8" rx="4" fill="#1e293b"/>)}
    </svg>
  );
}

const projects = [
  { id: "restaurant", title: "Restaurant Ordering Platform", category: "Web App", tags: ["Next.js", "AI", "Payments"], color: "from-orange-500/20", border: "border-orange-500/20", mockup: RestaurantMockup },
  { id: "expense", title: "Expense Management Dashboard", category: "Dashboard", tags: ["Analytics", "Finance", "Charts"], color: "from-violet-500/20", border: "border-violet-500/20", mockup: ExpenseMockup },
  { id: "inventory", title: "Inventory Dashboard", category: "Dashboard", tags: ["Real-time", "Reports", "SKU"], color: "from-blue-500/20", border: "border-blue-500/20", mockup: InventoryMockup },
  { id: "clinic", title: "Clinic Management Software", category: "Custom Software", tags: ["Healthcare", "Appointments", "EMR"], color: "from-rose-500/20", border: "border-rose-500/20", mockup: ClinicMockup },
  { id: "fleet", title: "Fleet Management Dashboard", category: "Dashboard", tags: ["GPS", "Logistics", "Real-time"], color: "from-emerald-500/20", border: "border-emerald-500/20", mockup: FleetMockup },
  { id: "crm", title: "Business CRM", category: "Custom Software", tags: ["CRM", "Leads", "Kanban"], color: "from-indigo-500/20", border: "border-indigo-500/20", mockup: CRMMockup },
  { id: "ai-support", title: "AI Customer Support", category: "AI Solution", tags: ["AI", "ChatBot", "NLP"], color: "from-fuchsia-500/20", border: "border-fuchsia-500/20", mockup: AISupportMockup },
  { id: "automation", title: "Business Automation Platform", category: "Automation", tags: ["n8n", "Workflows", "API"], color: "from-amber-500/20", border: "border-amber-500/20", mockup: AutomationMockup },
  { id: "banking", title: "Mobile Banking App", category: "Mobile App", tags: ["React Native", "Fintech", "Secure"], color: "from-cyan-500/20", border: "border-cyan-500/20", mockup: BankingMockup },
  { id: "landing", title: "Modern Landing Page", category: "Website", tags: ["Next.js", "Framer", "SEO"], color: "from-sky-500/20", border: "border-sky-500/20", mockup: LandingMockup },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 section-gradient pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Our Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Solutions We&apos;ve{" "}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Premium digital products across industries — each one engineered to solve real business problems and deliver measurable outcomes.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((proj, i) => {
            const Mockup = proj.mockup;
            return (
              <motion.article
                key={proj.id}
                id={`portfolio-${proj.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative rounded-2xl glass border border-white/[0.07] hover:border-white/[0.14] overflow-hidden cursor-default transition-all duration-400 hover:translate-y-[-4px] hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
              >
                {/* Mockup preview */}
                <div className={`relative h-40 bg-gradient-to-br ${proj.color} to-transparent border-b ${proj.border} overflow-hidden`}>
                  <Mockup />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-xl glass-strong border border-white/20 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{proj.category}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white leading-tight mb-3">{proj.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          All projects shown represent capability demonstrations.{" "}
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-violet-400 hover:text-violet-300 underline underline-offset-2"
          >
            Start your project →
          </button>
        </motion.p>
      </div>
    </section>
  );
}
