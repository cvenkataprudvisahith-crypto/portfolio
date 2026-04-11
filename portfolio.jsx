import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Award, Briefcase, GraduationCap, BarChart3, Users, Sparkles, TrendingUp, Layers } from "lucide-react";

const PROFILE_IMG = "/mnt/user-data/uploads/1000024374.png";

const skills = [
  { name: "SQL", level: 90 },
  { name: "Power BI", level: 88 },
  { name: "Python", level: 85 },
  { name: "Pandas / NumPy", level: 82 },
  { name: "Data Visualization", level: 87 },
  { name: "Statistical Analysis", level: 78 },
  { name: "Excel", level: 80 },
  { name: "Git / Docker", level: 70 },
];

const projects = [
  {
    title: "Sales Data Analysis",
    tags: ["Python", "SQL", "Power BI", "Pandas"],
    gradient: "linear-gradient(135deg,#0EA5E9,#0284C7)",
    glow: "rgba(14,165,233,0.3)",
    icon: <TrendingUp size={20} />,
    bullets: [
      "Processed a 10,000-row dataset — cut data-quality errors by 35%",
      "Identified top-3 revenue categories (62% of sales) → ~18% margin improvement",
      "6-chart Power BI dashboard compressing 3 weeks of data into a 5-min briefing",
    ],
  },
  {
    title: "Student Performance Analysis",
    tags: ["Python", "Pandas", "Statistics"],
    gradient: "linear-gradient(135deg,#10B981,#059669)",
    glow: "rgba(16,185,129,0.3)",
    icon: <BarChart3 size={20} />,
    bullets: [
      "Cleaned 800-record dataset, reducing missing values from 14% to under 2%",
      "Proved study hours explain 71% of grade variance (r = 0.84)",
      "Heatmaps & box plots making quartile gaps 3× more visible",
    ],
  },
  {
    title: "Customer Churn Analysis",
    tags: ["SQL", "Python", "Power BI"],
    gradient: "linear-gradient(135deg,#F59E0B,#D97706)",
    glow: "rgba(245,158,11,0.3)",
    icon: <Layers size={20} />,
    bullets: [
      "Queried 5,000+ customer records with SQL JOINs to surface churn patterns",
      "Power BI dashboard visualising churn by segment, tenure & tier",
      "Found <3-month customers had 2.4× higher churn — key onboarding insight",
    ],
  },
];

const experience = [
  {
    role: "DevOps with Python Intern",
    company: "Eviternship Pvt Ltd",
    period: "4 Months · 2024",
    color: "#0EA5E9",
    bullets: [
      "Monitored server health with Python dashboards — 100% critical alert coverage",
      "Automated reporting workflows, reducing manual steps by 60% across 3 environments",
    ],
  },
  {
    role: "UI/UX Design Intern",
    company: "Eviternship Pvt Ltd",
    period: "May – Jun 2025",
    color: "#10B981",
    bullets: [
      "Delivered wireframes for 2 client products in a 2-month sprint",
      "Reduced design-review cycles by 30%",
    ],
  },
  {
    role: "Community Sensitization Participant",
    company: "DFAP · Sambandh Health Foundation",
    period: "2025",
    color: "#F59E0B",
    bullets: [
      "Selected to represent institution in a state-level public health programme under Govt. of Andhra Pradesh",
    ],
  },
];

const education = [
  { degree: "B.Sc. Computer Science", institution: "St. Joseph's Degree College, Kurnool", period: "2023 – 2026", badge: "70%", primary: true, status: "Completed" },
  { degree: "B.S. Data Science", institution: "IIT Madras (Online)", period: "2025 – Present", badge: "Top 5% nationally", primary: false, status: "In Progress" },
  { degree: "Intermediate (Class XII)", institution: "Vyshnavi Junior College (APOSS)", period: "2021 – 2023", badge: "70%", primary: false, status: "Completed" },
];

const achievements = [
  { icon: <Sparkles size={16} />, text: "IIT Madras B.S. Data Science — national admission rate under 5%" },
  { icon: <Award size={16} />, text: "National Means Cum Merit Scholarship (NMMS) awardee" },
  { icon: <Users size={16} />, text: "Led INNO-MINDS tech fest — 200+ attendees across 5 colleges" },
];

function SkillBar({ name, level, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setWidth(level), delay); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level, delay]);
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#E2E8F0" }}>{name}</span>
        <span style={{ fontSize: 12, color: "#64748B" }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 99, overflow: "hidden" }}>
        <div style={{
          height: "100%", width: `${width}%`,
          background: "linear-gradient(90deg,#0EA5E9,#06B6D4,#10B981)",
          borderRadius: 99,
          transition: "width 1.2s cubic-bezier(.4,0,.2,1)",
          boxShadow: "0 0 10px rgba(14,165,233,0.5)",
        }} />
      </div>
    </div>
  );
}

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
      <div style={{
        display: "inline-block", fontSize: 11, letterSpacing: "0.2em",
        textTransform: "uppercase", color: "#0EA5E9", fontWeight: 700,
        background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.25)",
        padding: "5px 14px", borderRadius: 99, marginBottom: "1rem",
      }}>{eyebrow}</div>
      <h2 style={{
        fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 900, margin: 0,
        letterSpacing: "-1px", color: "#F1F5F9",
        fontFamily: "'Playfair Display',Georgia,serif",
      }}>{title}</h2>
    </div>
  );
}

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
  };

  return (
    <div style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif", background: "#040D1A", minHeight: "100vh", color: "#CBD5E1", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:5px;}
        ::-webkit-scrollbar-track{background:#040D1A;}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#0EA5E9,#10B981);border-radius:99px;}
        @keyframes pulse1{0%,100%{transform:scale(1) translate(0,0);}50%{transform:scale(1.1) translate(20px,30px);}}
        @keyframes pulse2{0%,100%{transform:scale(1) translate(0,0);}50%{transform:scale(1.08) translate(-30px,20px);}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .nav-btn:hover{color:#0EA5E9!important;}
        .cta-primary:hover{box-shadow:0 0 40px rgba(14,165,233,0.55)!important;transform:translateY(-2px);}
        .cta-ghost:hover{background:rgba(255,255,255,0.08)!important;border-color:rgba(255,255,255,0.2)!important;}
        .proj-card:hover{transform:translateY(-8px)!important;box-shadow:0 20px 60px var(--glow)!important;}
        .exp-card:hover{border-left-width:4px!important;background:rgba(255,255,255,0.04)!important;}
        .contact-card:hover{transform:translateY(-4px);border-color:rgba(14,165,233,0.4)!important;background:rgba(14,165,233,0.05)!important;}
        .proj-card,.cta-primary,.cta-ghost,.exp-card,.contact-card{transition:all 0.3s ease;}
      `}</style>

      {/* ── BACKGROUND MESH ── */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none" }}>
        <div style={{ position:"absolute", width:800, height:800, borderRadius:"50%", top:"-300px", left:"-250px", background:"radial-gradient(circle,rgba(14,165,233,0.1) 0%,transparent 65%)", animation:"pulse1 9s ease-in-out infinite" }} />
        <div style={{ position:"absolute", width:650, height:650, borderRadius:"50%", top:"35%", right:"-200px", background:"radial-gradient(circle,rgba(16,185,129,0.09) 0%,transparent 65%)", animation:"pulse2 11s ease-in-out infinite" }} />
        <div style={{ position:"absolute", width:450, height:450, borderRadius:"50%", bottom:"5%", left:"25%", background:"radial-gradient(circle,rgba(245,158,11,0.07) 0%,transparent 65%)", animation:"pulse1 13s ease-in-out infinite reverse" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(14,165,233,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.025) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
      </div>

      {/* ── NAV ── */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000,
        background: scrolled ? "rgba(4,13,26,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(14,165,233,0.1)" : "none",
        transition:"all 0.4s ease",
        display:"flex", justifyContent:"space-between", alignItems:"center",
        padding:"0 3rem", height:64,
      }}>
        <div style={{
          fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:22,
          background:"linear-gradient(135deg,#0EA5E9,#10B981)",
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
        }}>PS.</div>
        <div style={{ display:"flex", gap:"2rem", alignItems:"center" }}>
          {["home","skills","projects","experience","education","contact"].map(id => (
            <button key={id} className="nav-btn" onClick={() => scrollTo(id)} style={{
              background:"none", border:"none", cursor:"pointer", fontFamily:"inherit",
              fontSize:13, fontWeight:500, textTransform:"capitalize", letterSpacing:"0.04em",
              color: activeNav===id ? "#0EA5E9" : "#64748B", transition:"color 0.2s",
              position:"relative", padding:"4px 0",
            }}>
              {id}
              {activeNav===id && <div style={{ position:"absolute", bottom:-2, left:0, right:0, height:2, background:"linear-gradient(90deg,#0EA5E9,#10B981)", borderRadius:99 }} />}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{
        position:"relative", zIndex:1,
        minHeight:"100vh", display:"flex", alignItems:"center",
        padding:"80px 3rem 2rem", maxWidth:1200, margin:"0 auto", gap:"4rem",
      }}>
        <div style={{ flex:1 }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:7,
            fontSize:11, letterSpacing:"0.18em", textTransform:"uppercase",
            color:"#0EA5E9", fontWeight:700,
            background:"rgba(14,165,233,0.08)", border:"1px solid rgba(14,165,233,0.2)",
            padding:"6px 14px", borderRadius:99, marginBottom:"1.5rem",
            animation:"fadeUp 0.7s ease 0.1s both",
          }}>
            <Sparkles size={11} /> Available for Opportunities
          </div>

          <h1 style={{
            fontFamily:"'Playfair Display',serif", fontWeight:900,
            fontSize:"clamp(2.8rem,5.5vw,4.6rem)", lineHeight:1.05,
            color:"#F1F5F9", letterSpacing:"-2px", marginBottom:"0.3rem",
            animation:"fadeUp 0.7s ease 0.2s both",
          }}>Prudvi Sahith</h1>

          <div style={{
            fontFamily:"'Playfair Display',serif", fontWeight:700,
            fontSize:"clamp(1.5rem,2.8vw,2.5rem)", lineHeight:1.1,
            letterSpacing:"-0.5px", marginBottom:"1.5rem",
            background:"linear-gradient(135deg,#0EA5E9 0%,#06B6D4 45%,#10B981 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            animation:"fadeUp 0.7s ease 0.3s both",
          }}>Data Analyst</div>

          <p style={{
            fontSize:15, lineHeight:1.9, color:"#94A3B8", maxWidth:510, marginBottom:"2.5rem",
            animation:"fadeUp 0.7s ease 0.4s both",
          }}>
            IIT Madras Data Science undergraduate. I turn messy datasets into clean, actionable insights —
            cutting manual reporting by <strong style={{ color:"#0EA5E9", fontWeight:700 }}>40%</strong>, surfacing revenue trends
            across <strong style={{ color:"#10B981", fontWeight:700 }}>10,000-row</strong> datasets, and building dashboards that tell stories in minutes.
          </p>

          <div style={{ display:"flex", gap:"0.875rem", flexWrap:"wrap", marginBottom:"2.5rem", animation:"fadeUp 0.7s ease 0.5s both" }}>
            <a href="mailto:cvenkataprudvisahith@gmail.com" className="cta-primary" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"linear-gradient(135deg,#0EA5E9,#0284C7)",
              color:"#fff", padding:"12px 24px", borderRadius:9,
              textDecoration:"none", fontSize:14, fontWeight:600,
              boxShadow:"0 0 28px rgba(14,165,233,0.35)",
            }}><Mail size={15} /> Get in Touch</a>
            <a href="https://linkedin.com/in/chinta-venkata-prudvi-sahith" target="_blank" rel="noreferrer" className="cta-ghost" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)",
              color:"#E2E8F0", padding:"12px 22px", borderRadius:9,
              textDecoration:"none", fontSize:14, fontWeight:600,
            }}><Linkedin size={15} /> LinkedIn</a>
            <a href="https://github.com/prudvisahith" target="_blank" rel="noreferrer" className="cta-ghost" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)",
              color:"#E2E8F0", padding:"12px 22px", borderRadius:9,
              textDecoration:"none", fontSize:14, fontWeight:600,
            }}><Github size={15} /> GitHub</a>
          </div>

          <div style={{ display:"flex", alignItems:"center", gap:6, color:"#475569", fontSize:13, animation:"fadeUp 0.7s ease 0.6s both" }}>
            <MapPin size={14} color="#0EA5E9" /> Kurnool, India
          </div>
        </div>

        {/* PHOTO */}
        <div style={{ flexShrink:0, position:"relative", animation:"fadeUp 0.9s ease 0.3s both" }}>
          <div style={{
            position:"absolute", inset:-3, borderRadius:"20px 70px 20px 70px",
            background:"linear-gradient(135deg,#0EA5E9,#06B6D4,#10B981)", zIndex:0,
          }} />
          <div style={{
            position:"relative", zIndex:1, width:290, height:360,
            borderRadius:"18px 68px 18px 68px", overflow:"hidden",
            border:"3px solid #040D1A",
          }}>
            <img src={PROFILE_IMG} alt="Prudvi Sahith" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,transparent 55%,rgba(4,13,26,0.5) 100%)" }} />
          </div>
          <div style={{
            position:"absolute", bottom:-16, left:-20, zIndex:10,
            background:"linear-gradient(135deg,#0EA5E9,#0284C7)",
            color:"#fff", padding:"8px 16px", borderRadius:10,
            fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase",
            boxShadow:"0 8px 24px rgba(14,165,233,0.4)",
          }}>IIT Madras · Data Science</div>
          <div style={{
            position:"absolute", top:20, right:-24, zIndex:10,
            background:"rgba(4,13,26,0.85)", backdropFilter:"blur(16px)",
            border:"1px solid rgba(16,185,129,0.3)",
            padding:"10px 14px", borderRadius:12, textAlign:"center",
            boxShadow:"0 8px 24px rgba(0,0,0,0.4)",
          }}>
            <div style={{ color:"#10B981", fontSize:22, fontWeight:900, fontFamily:"'Playfair Display',serif" }}>40%</div>
            <div style={{ color:"#475569", fontSize:10, marginTop:2, letterSpacing:"0.06em" }}>EFFICIENCY ↑</div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 3rem 4rem", display:"flex", gap:"1.25rem", flexWrap:"wrap" }}>
          {[
            { val:"10K+", label:"Rows Processed", color:"#0EA5E9" },
            { val:"35%", label:"Error Reduction", color:"#10B981" },
            { val:"40%", label:"Reporting Efficiency", color:"#F59E0B" },
            { val:"5 min", label:"Stakeholder Briefings", color:"#A78BFA" },
          ].map(s => (
            <div key={s.label} style={{
              flex:"1 1 155px",
              background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.05)",
              borderTop:`2px solid ${s.color}`,
              borderRadius:12, padding:"1.25rem 1.5rem",
            }}>
              <div style={{ fontSize:"clamp(1.5rem,2.5vw,1.9rem)", fontWeight:900, color:s.color, letterSpacing:"-0.5px", fontFamily:"'Playfair Display',serif" }}>{s.val}</div>
              <div style={{ fontSize:12, color:"#475569", marginTop:4, letterSpacing:"0.04em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ACHIEVEMENTS BANNER ── */}
      <div style={{ position:"relative", zIndex:1, background:"rgba(14,165,233,0.04)", borderTop:"1px solid rgba(14,165,233,0.1)", borderBottom:"1px solid rgba(14,165,233,0.1)", padding:"2.5rem 3rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", gap:"2rem", flexWrap:"wrap", justifyContent:"center" }}>
          {achievements.map((a,i) => (
            <FadeIn key={i} delay={i*100}>
              <div style={{ display:"flex", alignItems:"flex-start", gap:12, maxWidth:340 }}>
                <div style={{
                  width:34, height:34, borderRadius:8, flexShrink:0,
                  background:"linear-gradient(135deg,rgba(14,165,233,0.15),rgba(16,185,129,0.15))",
                  border:"1px solid rgba(14,165,233,0.2)",
                  display:"flex", alignItems:"center", justifyContent:"center", color:"#0EA5E9",
                }}>{a.icon}</div>
                <span style={{ fontSize:13, lineHeight:1.65, color:"#94A3B8", paddingTop:6 }}>{a.text}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ position:"relative", zIndex:1, padding:"6rem 3rem", maxWidth:1200, margin:"0 auto" }}>
        <FadeIn><SectionHeader eyebrow="Expertise" title="Core Skills & Tools" /></FadeIn>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"1rem" }}>
          {[
            { label:"Analytics & BI", items:["SQL","Power BI","EDA","Data Cleaning","Statistical Analysis","Dashboarding","Business Insights"], color:"#0EA5E9" },
            { label:"Languages", items:["Python","Pandas","NumPy","Matplotlib","SQL","C"], color:"#10B981" },
            { label:"Tools & Platforms", items:["Git","VS Code","Figma","Excel","Docker","Bash Scripting"], color:"#F59E0B" },
            { label:"Soft Skills", items:["Analytical Thinking","Problem Solving","Team Collaboration","Adaptability","Critical Thinking"], color:"#A78BFA" },
          ].map((group, gi) => (
            <FadeIn key={group.label} delay={gi * 100}>
              <div style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"1.5rem", height:"100%" }}>
                <div style={{ fontSize:11, fontWeight:700, color:group.color, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"1rem", display:"flex", alignItems:"center", gap:7 }}>
                  <div style={{ width:20, height:2, background:group.color, borderRadius:99 }} />{group.label}
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                  {group.items.map(item => (
                    <span key={item} style={{ fontSize:12, padding:"5px 12px", borderRadius:99, background:`${group.color}12`, color:group.color, border:`1px solid ${group.color}28`, fontWeight:500 }}>{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ position:"relative", zIndex:1, background:"rgba(255,255,255,0.015)", borderTop:"1px solid rgba(255,255,255,0.04)", padding:"6rem 3rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <FadeIn><SectionHeader eyebrow="Work" title="Featured Projects" /></FadeIn>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))", gap:"1.75rem" }}>
            {projects.map((p,i) => (
              <FadeIn key={p.title} delay={i*120}>
                <div className="proj-card" style={{ "--glow":p.glow, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:16, overflow:"hidden", position:"relative" }}>
                  <div style={{ height:3, background:p.gradient }} />
                  <div style={{ padding:"1.5rem 1.5rem 0", display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{
                      width:42, height:42, borderRadius:10, flexShrink:0,
                      background:p.gradient, display:"flex", alignItems:"center", justifyContent:"center",
                      color:"#fff", boxShadow:`0 4px 16px ${p.glow}`,
                    }}>{p.icon}</div>
                    <h4 style={{ fontSize:16, fontWeight:700, color:"#F1F5F9", lineHeight:1.2 }}>{p.title}</h4>
                  </div>
                  <div style={{ padding:"0.875rem 1.5rem 0", display:"flex", flexWrap:"wrap", gap:5 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize:11, padding:"2px 9px", borderRadius:99, background:"rgba(255,255,255,0.05)", color:"#94A3B8", border:"1px solid rgba(255,255,255,0.07)", fontWeight:500 }}>{t}</span>
                    ))}
                  </div>
                  <ul style={{ padding:"1rem 1.5rem 1.5rem", paddingLeft:"2.75rem", margin:0 }}>
                    {p.bullets.map((b,j) => (
                      <li key={j} style={{ fontSize:13, lineHeight:1.8, color:"#64748B", marginBottom:2 }}>{b}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ position:"relative", zIndex:1, padding:"6rem 3rem", maxWidth:1200, margin:"0 auto" }}>
        <FadeIn><SectionHeader eyebrow="Career" title="Experience" /></FadeIn>
        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", left:19, top:10, bottom:10, width:2, background:"linear-gradient(180deg,#0EA5E9,#10B981,#F59E0B)", borderRadius:99, opacity:0.5 }} />
          <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
            {experience.map((e,i) => (
              <FadeIn key={i} delay={i*100}>
                <div style={{ display:"flex", gap:"1.75rem" }}>
                  <div style={{
                    width:40, height:40, borderRadius:"50%", flexShrink:0, zIndex:1,
                    background:`${e.color}18`, border:`2px solid ${e.color}`,
                    display:"flex", alignItems:"center", justifyContent:"center", color:e.color,
                  }}><Briefcase size={15} /></div>
                  <div className="exp-card" style={{
                    flex:1, background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.07)",
                    borderLeft:`3px solid ${e.color}`, borderRadius:14, padding:"1.25rem 1.5rem",
                  }}>
                    <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8, marginBottom:"0.6rem" }}>
                      <div>
                        <div style={{ fontSize:15, fontWeight:700, color:"#F1F5F9" }}>{e.role}</div>
                        <div style={{ fontSize:13, color:e.color, marginTop:2, fontWeight:600 }}>{e.company}</div>
                      </div>
                      <span style={{ fontSize:11, color:"#475569", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", padding:"3px 10px", borderRadius:99, height:"fit-content", fontWeight:600 }}>{e.period}</span>
                    </div>
                    <ul style={{ paddingLeft:"1.1rem", margin:0 }}>
                      {e.bullets.map((b,j) => <li key={j} style={{ fontSize:13, lineHeight:1.75, color:"#64748B" }}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" style={{ position:"relative", zIndex:1, background:"rgba(255,255,255,0.015)", borderTop:"1px solid rgba(255,255,255,0.04)", padding:"6rem 3rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <FadeIn><SectionHeader eyebrow="Background" title="Education" /></FadeIn>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.5rem" }}>
            {education.map((e,i) => (
              <FadeIn key={i} delay={i*100}>
                <div style={{
                  background: e.primary ? "linear-gradient(135deg,rgba(16,185,129,0.1),rgba(14,165,233,0.08))" : "rgba(255,255,255,0.025)",
                  border: e.primary ? "1.5px solid rgba(16,185,129,0.4)" : "1px solid rgba(255,255,255,0.07)",
                  borderRadius:14, padding:"1.5rem", position:"relative", overflow:"hidden",
                  boxShadow: e.primary ? "0 0 30px rgba(16,185,129,0.1)" : "none",
                }}>
                  {/* Primary glow orb */}
                  {e.primary && <div style={{ position:"absolute", top:-50, right:-50, width:160, height:160, borderRadius:"50%", background:"radial-gradient(circle,rgba(16,185,129,0.15),transparent 70%)", pointerEvents:"none" }} />}
                  {/* Status pill */}
                  <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:10 }}>
                    <span style={{
                      fontSize:10, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase",
                      padding:"3px 10px", borderRadius:99,
                      background: e.status==="Completed" ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.12)",
                      color: e.status==="Completed" ? "#10B981" : "#F59E0B",
                      border: e.status==="Completed" ? "1px solid rgba(16,185,129,0.3)" : "1px solid rgba(245,158,11,0.25)",
                    }}>{e.status}</span>
                  </div>
                  <div style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                    <div style={{
                      width: e.primary ? 48 : 42, height: e.primary ? 48 : 42,
                      borderRadius:10, flexShrink:0,
                      background: e.primary
                        ? "linear-gradient(135deg,#10B981,#0EA5E9)"
                        : "linear-gradient(135deg,rgba(14,165,233,0.18),rgba(16,185,129,0.18))",
                      border: e.primary ? "none" : "1px solid rgba(14,165,233,0.2)",
                      display:"flex", alignItems:"center", justifyContent:"center", color:"#fff",
                      boxShadow: e.primary ? "0 4px 16px rgba(16,185,129,0.3)" : "none",
                    }}><GraduationCap size={e.primary ? 20 : 18} /></div>
                    <div>
                      <div style={{ fontSize: e.primary ? 16 : 15, fontWeight: e.primary ? 800 : 700, color:"#F1F5F9", marginBottom:4 }}>{e.degree}</div>
                      <div style={{ fontSize:13, color: e.primary ? "#94A3B8" : "#64748B", fontWeight: e.primary ? 500 : 400 }}>{e.institution}</div>
                      <div style={{ fontSize:12, color:"#475569", marginTop:3 }}>{e.period}</div>
                      {e.badge && (
                        <div style={{
                          marginTop:10, display:"inline-block", fontSize:11, fontWeight:700,
                          padding:"3px 10px", borderRadius:99,
                          background: e.primary ? "rgba(16,185,129,0.15)" : "rgba(14,165,233,0.1)",
                          color: e.primary ? "#10B981" : "#0EA5E9",
                          border: e.primary ? "1px solid rgba(16,185,129,0.3)" : "1px solid rgba(14,165,233,0.2)",
                        }}>{e.badge}</div>
                      )}
                      {e.primary && (
                        <div style={{ marginTop:8, fontSize:11, color:"#10B981", fontWeight:600, display:"flex", alignItems:"center", gap:4 }}>
                          ✓ Primary Degree
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ position:"relative", zIndex:1, padding:"6rem 3rem", maxWidth:1200, margin:"0 auto" }}>
        <FadeIn><SectionHeader eyebrow="Let's Connect" title="Get in Touch" /></FadeIn>
        <FadeIn delay={100}>
          <p style={{ textAlign:"center", color:"#64748B", fontSize:14, lineHeight:1.8, maxWidth:460, margin:"0 auto 3rem" }}>
            Open to data analyst roles, internships, and collaborative projects. Let's build something meaningful together.
          </p>
        </FadeIn>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))", gap:"1rem", maxWidth:900, margin:"0 auto" }}>
          {[
            { icon:<Mail size={20}/>, label:"Email", value:"cvenkataprudvisahith@gmail.com", href:"mailto:cvenkataprudvisahith@gmail.com", color:"#0EA5E9" },
            { icon:<Phone size={20}/>, label:"Phone", value:"+91 83419 96656", href:"tel:+918341996656", color:"#10B981" },
            { icon:<Linkedin size={20}/>, label:"LinkedIn", value:"chinta-venkata-prudvi-sahith", href:"https://linkedin.com/in/chinta-venkata-prudvi-sahith", color:"#38BDF8" },
            { icon:<Github size={20}/>, label:"GitHub", value:"prudvisahith", href:"https://github.com/prudvisahith", color:"#94A3B8" },
          ].map((c,i) => (
            <FadeIn key={c.label} delay={i*80}>
              <a href={c.href} target="_blank" rel="noreferrer" className="contact-card" style={{
                display:"flex", alignItems:"center", gap:14,
                background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.07)",
                borderRadius:12, padding:"1.25rem", textDecoration:"none", color:"inherit",
              }}>
                <div style={{ width:44, height:44, borderRadius:10, flexShrink:0, background:`${c.color}14`, border:`1px solid ${c.color}28`, display:"flex", alignItems:"center", justifyContent:"center", color:c.color }}>{c.icon}</div>
                <div style={{ overflow:"hidden" }}>
                  <div style={{ fontSize:11, color:"#475569", textTransform:"uppercase", letterSpacing:"0.1em", fontWeight:700 }}>{c.label}</div>
                  <div style={{ fontSize:13, color:"#CBD5E1", fontWeight:600, marginTop:2, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.value}</div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ position:"relative", zIndex:1, borderTop:"1px solid rgba(255,255,255,0.05)", textAlign:"center", padding:"2.5rem", background:"rgba(0,0,0,0.3)" }}>
        <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:20, background:"linear-gradient(135deg,#0EA5E9,#10B981)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:8 }}>PS.</div>
        <div style={{ fontSize:12, color:"#334155", letterSpacing:"0.04em" }}>© 2026 C. Venkata Prudvi Sahith · Kurnool, India</div>
      </footer>
    </div>
  );
}
