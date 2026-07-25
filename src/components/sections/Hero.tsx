"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown, Sparkles } from "lucide-react";

const statusCards = [
  { label: "Website Live",       color: "#10b981", bg: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.3)"  },
  { label: "AI Agent Active",    color: "#8b5cf6", bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.3)" },
  { label: "Automation Running", color: "#3b82f6", bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.3)" },
  { label: "Dashboard Online",   color: "#06b6d4", bg: "rgba(6,182,212,0.12)",  border: "rgba(6,182,212,0.3)"  },
];

function HeroDashboard() {
  return (
    <div style={{
      background: "rgba(13,13,20,0.92)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 20,
      boxShadow: "0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.07)",
      overflow: "hidden",
      width: "100%",
    }}>
      {/* Title bar */}
      <div style={{ padding: "11px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ef4444","#f59e0b","#10b981"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.65 }} />)}
        </div>
        <div style={{ flex: 1, margin: "0 10px", height: 18, borderRadius: 5, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", paddingLeft: 8, gap: 5 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981" }} />
          <span style={{ fontSize: 9, color: "#475569" }}>optqvo.app/dashboard</span>
        </div>
        <div style={{ padding: "2px 7px", borderRadius: 4, background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)" }}>
          <span style={{ fontSize: 8, color: "#a78bfa", fontWeight: 700, letterSpacing: "0.05em" }}>AI LIVE</span>
        </div>
      </div>

      <div style={{ padding: 14 }}>
        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7, marginBottom: 10 }}>
          {[
            { label:"Monthly Revenue", val:"₹84.2L", chg:"+18%",  c:"#10b981" },
            { label:"AI Tasks", val:"1,429",  chg:"Auto'd", c:"#8b5cf6" },
            { label:"New Leads",   val:"342",    chg:"+23%",  c:"#3b82f6" },
            { label:"Uptime",  val:"99.9%",  chg:"Live",  c:"#06b6d4" },
          ].map(k => (
            <div key={k.label} style={{ background:"rgba(255,255,255,0.035)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:9, padding:"9px 11px" }}>
              <div style={{ fontSize:8, color:"#64748b", marginBottom:3 }}>{k.label}</div>
              <div style={{ fontSize:14, fontWeight:800, color:"#f1f5f9", lineHeight:1 }}>{k.val}</div>
              <div style={{ fontSize:8, color:k.c, marginTop:3, fontWeight:700 }}>{k.chg}</div>
            </div>
          ))}
        </div>

        {/* Chart row */}
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:7, marginBottom:8 }}>
          <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:9, padding:"11px 12px" }}>
            <div style={{ fontSize:9, color:"#94a3b8", fontWeight:600, marginBottom:8 }}>Revenue Analytics</div>
            <div style={{ display:"flex", alignItems:"flex-end", gap:2.5, height:52 }}>
              {[28,42,32,55,48,68,52,76,62,84,70,95].map((h,i) => (
                <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:"3px 3px 0 0",
                  background: i===11 ? "linear-gradient(to top,#7c3aed,#06b6d4)" : `rgba(139,92,246,${0.1+(i/12)*0.35})` }} />
              ))}
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:5 }}>
              {["Jan","Mar","May","Jul","Sep","Nov"].map(m => <span key={m} style={{ fontSize:7.5, color:"#334155" }}>{m}</span>)}
            </div>
          </div>
          <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:9, padding:"11px 12px" }}>
            <div style={{ fontSize:9, color:"#94a3b8", fontWeight:600, marginBottom:8 }}>AI Agents</div>
            {[{name:"Lead Bot",pct:85,c:"#8b5cf6"},{name:"Support AI",pct:72,c:"#3b82f6"},{name:"Invoicing",pct:60,c:"#06b6d4"}].map(a => (
              <div key={a.name} style={{ marginBottom:7 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
                  <span style={{ fontSize:8.5, color:"#94a3b8" }}>{a.name}</span>
                  <span style={{ fontSize:8.5, color:a.c, fontWeight:700 }}>{a.pct}%</span>
                </div>
                <div style={{ height:3, background:"rgba(255,255,255,0.06)", borderRadius:3 }}>
                  <div style={{ height:"100%", width:`${a.pct}%`, background:`linear-gradient(90deg,${a.c},rgba(6,182,212,0.8))`, borderRadius:3 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:9, padding:"9px 12px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <span style={{ fontSize:9, color:"#475569" }}>Active automations today</span>
          <div style={{ display:"flex", gap:14 }}>
            {[{n:"CRM Sync",c:"#8b5cf6",v:"1.2K"},{n:"Emails",c:"#3b82f6",v:"847"},{n:"Invoices",c:"#10b981",v:"321"}].map(a => (
              <div key={a.n} style={{ display:"flex", alignItems:"center", gap:4 }}>
                <div style={{ width:5, height:5, borderRadius:"50%", background:a.c }} />
                <span style={{ fontSize:8.5, color:"#94a3b8" }}>{a.n}</span>
                <span style={{ fontSize:8.5, color:a.c, fontWeight:700 }}>{a.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText    = useTransform(scrollYProgress, [0,1], [0, 60]);
  const opacText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" ref={ref} style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden", paddingTop:80 }}>

      {/* ── background blobs ── */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden" }}>
        <div className="blob" style={{ position:"absolute", top:"-20%", left:"-8%", width:600, height:600, background:"radial-gradient(circle,rgba(124,58,237,0.14) 0%,transparent 70%)", filter:"blur(64px)" }} />
        <div className="blob blob-delay-1" style={{ position:"absolute", bottom:"-15%", right:"-8%", width:500, height:500, background:"radial-gradient(circle,rgba(37,99,235,0.11) 0%,transparent 70%)", filter:"blur(64px)" }} />
        <div className="blob blob-delay-2" style={{ position:"absolute", top:"35%", left:"35%", width:400, height:320, background:"radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 70%)", filter:"blur(64px)" }} />
        <div className="dot-grid" style={{ position:"absolute", inset:0, opacity:0.35 }} />
      </div>

      <motion.div style={{ y:yText, opacity:opacText, position:"relative", zIndex:1, width:"100%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"60px 64px 80px" }} className="hero-container">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }} className="hero-grid">

            {/* ── Left ── */}
            <div>
              <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }} style={{ marginBottom:24 }}>
                <span className="badge" style={{ display:"inline-flex", alignItems:"center", gap:6 }}>
                  <Sparkles style={{ width:11, height:11 }} />
                  AI-Powered Digital Transformation
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}
                style={{ fontSize:"clamp(2rem,3.6vw,3.4rem)", fontWeight:900, lineHeight:1.08, letterSpacing:"-0.025em", color:"#f1f5f9", marginBottom:20 }}
              >
                Scale Your{" "}
                <span className="gradient-text">Business</span>
                <br />With Next-Gen Tech.
                <br /><span style={{ color:"#475569" }}>Built for India & Beyond.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.2 }}
                style={{ fontSize:"1.05rem", color:"#64748b", lineHeight:1.78, marginBottom:36, maxWidth:460 }}
              >
                We help Indian brands <strong style={{ color:"#94a3b8" }}>maximize ROI</strong> with premium{" "}
                <strong style={{ color:"#94a3b8" }}>websites, mobile apps</strong>, AI solutions, custom software
                and automation systems.{" "}
                <strong style={{ color:"#94a3b8" }}>10x your growth</strong> today.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }}
                style={{ display:"flex", flexWrap:"wrap", gap:12, marginBottom:40 }}
              >
                <motion.button
                  id="hero-cta-primary"
                  onClick={() => scrollTo("contact")}
                  className="btn-gradient"
                  style={{ display:"flex", alignItems:"center", gap:8, padding:"13px 24px", borderRadius:12, fontWeight:700, fontSize:"0.88rem", color:"#fff", border:"none", cursor:"pointer", letterSpacing:"-0.01em" }}
                  whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                >
                  <Calendar style={{ width:16, height:16 }} />
                  Book Free Consultation
                </motion.button>

                <motion.button
                  id="hero-cta-secondary"
                  onClick={() => scrollTo("services")}
                  style={{ display:"flex", alignItems:"center", gap:8, padding:"13px 24px", borderRadius:12, fontWeight:600, fontSize:"0.88rem", color:"#94a3b8", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", cursor:"pointer", letterSpacing:"-0.01em", transition:"all 0.2s ease" }}
                  whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                >
                  Explore Services <ArrowRight style={{ width:15, height:15 }} />
                </motion.button>
              </motion.div>

              {/* Status pills */}
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.55 }} style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {statusCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity:0, scale:0.85, y:6 }}
                    animate={{ opacity:1, scale:1, y:0 }}
                    transition={{ delay:0.55 + i*0.09, type:"spring", stiffness:240 }}
                    style={{ display:"flex", alignItems:"center", gap:7, padding:"6px 12px", borderRadius:8, background:card.bg, border:`1px solid ${card.border}` }}
                  >
                    <div className="dot-ping" style={{ width:6, height:6, borderRadius:"50%", background:card.color, flexShrink:0 }} />
                    <span style={{ fontSize:"0.71rem", fontWeight:600, color:"#e2e8f0" }}>{card.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Dashboard ── */}
            <motion.div
              initial={{ opacity:0, x:32, scale:0.96 }}
              animate={{ opacity:1, x:0, scale:1 }}
              transition={{ duration:0.75, delay:0.2, ease:[0.4,0,0.2,1] }}
              className="float"
            >
              <HeroDashboard />
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.button
          onClick={() => scrollTo("services")}
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.1 }}
          style={{ position:"absolute", bottom:16, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:4, color:"#334155", background:"transparent", border:"none", cursor:"pointer" }}
        >
          <span style={{ fontSize:"0.6rem", letterSpacing:"0.14em", textTransform:"uppercase" }}>Scroll</span>
          <motion.div animate={{ y:[0,5,0] }} transition={{ duration:1.4, repeat:Infinity, ease:"easeInOut" }}>
            <ChevronDown style={{ width:14, height:14 }} />
          </motion.div>
        </motion.button>
      </motion.div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-container { padding: 48px 40px 60px !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
        }
        @media (max-width: 640px) {
          .hero-container { padding: 36px 24px 48px !important; }
        }
      `}</style>
    </section>
  );
}
