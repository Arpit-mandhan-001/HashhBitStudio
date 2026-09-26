"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Code, 
  TrendingUp, 
  Zap, 
  ShieldCheck 
} from "lucide-react";

export default function InteractiveWorkShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Lumina Nexus",
      client: "Global Fintech Protocol",
      category: "web",
      categoryLabel: "Web Platform",
      metric: "+480% Conversion",
      tag: "Next.js 16 • WebGL",
      accent: "#4B2E63",
      visualGradient: "from-[#4B2E63]/90 via-[#65477F]/80 to-[#B8A6C9]/90",
      description: "Next-generation institutional trading interface with sub-millisecond execution visualizers.",
      highlights: ["99.9% Uptime", "0.03s Hydration", "$42M Volume"],
    },
    {
      id: 2,
      title: "Aura Growth Engine",
      client: "Luxury D2C Ecosystem",
      category: "marketing",
      categoryLabel: "Growth & Ads",
      metric: "5.8x ROAS Scale",
      tag: "Meta & Google Ads",
      accent: "#65477F",
      visualGradient: "from-[#65477F] via-[#B8A6C9] to-[#E8DED2]",
      description: "Omnichannel growth funnels and programmatic ad placement generating 6-figure monthly revenue.",
      highlights: ["+320k Unique Users", "3.4% CTR", "-38% CAC"],
    },
    {
      id: 3,
      title: "Synapse AI Portal",
      client: "Enterprise SaaS",
      category: "ai",
      categoryLabel: "AI & Automation",
      metric: "12k Ops / Day",
      tag: "Autonomous Agents",
      accent: "#B69A68",
      visualGradient: "from-[#282126] via-[#4B2E63] to-[#B69A68]",
      description: "Real-time generative intelligence pipeline syncing customer intent with automated workflows.",
      highlights: ["420ms Latency", "99.8% Precision", "24/7 Autopilot"],
    },
    {
      id: 4,
      title: "Velox Studio",
      client: "Creative Tech House",
      category: "web",
      categoryLabel: "Brand & 3D Web",
      metric: "FWA of the Day",
      tag: "Interactive 3D",
      accent: "#4B2E63",
      visualGradient: "from-[#B8A6C9] via-[#D9CEE3] to-[#4B2E63]",
      description: "Immersive kinetic web architecture featuring fluid cursor dynamics and spatial UI.",
      highlights: ["60 FPS Smooth", "WebGL Shaders", "Zero CLS"],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="showcase" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DED2] border border-[#B8A6C9]/40 text-xs font-semibold text-[#4B2E63] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B69A68]" />
              <span>Selected Works & Case Studies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#282126] tracking-tight">
              Visual <span className="text-gradient-purple">Proof of Scale</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[#E8DED2]/80 p-1.5 rounded-full border border-[#D8CEC3]">
            {[
              { id: "all", label: "All Works" },
              { id: "web", label: "Web Solutions" },
              { id: "marketing", label: "Growth Marketing" },
              { id: "ai", label: "AI Solutions" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-[#4B2E63] text-[#F7F3EC] shadow-sm"
                    : "text-[#65477F] hover:text-[#282126] hover:bg-[#F7F3EC]/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-3xl overflow-hidden bg-[#E8DED2]/60 border border-[#B8A6C9]/40 hover:border-[#4B2E63]/60 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Visual Art Canvas Showcase */}
                <div
                  className={`h-64 sm:h-72 w-full bg-gradient-to-br ${project.visualGradient} relative p-6 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Glassmorphic Grid Pattern & Glow */}
                  <div className="absolute inset-0 bg-grid-subtle opacity-30 mix-blend-overlay" />
                  
                  {/* Floating Metric Badge */}
                  <div className="flex justify-between items-start z-10">
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[#F7F3EC]/90 text-[#282126] backdrop-blur-md shadow-sm">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#282126] text-[#F7F3EC] shadow-md flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#B69A68]" />
                      {project.metric}
                    </span>
                  </div>

                  {/* Visual 3D Simulated Centerpiece */}
                  <div className="my-auto text-center z-10 transition-transform duration-500 group-hover:scale-105">
                    <div className="inline-block p-4 rounded-2xl bg-[#F7F3EC]/20 backdrop-blur-xl border border-white/30 shadow-2xl">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#F7F3EC]/90 text-[#282126] flex flex-col items-center justify-center font-display font-black text-2xl sm:text-3xl shadow-lg">
                        <span>{project.title.slice(0, 2)}</span>
                        <span className="text-[9px] font-mono text-[#65477F] tracking-widest uppercase">
                          STUDIO
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tag */}
                  <div className="flex items-center justify-between z-10 text-[11px] font-mono text-[#F7F3EC]/90 font-medium">
                    <span>{project.client}</span>
                    <span className="bg-black/30 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Card Information & Interactive Micro-Stats */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-[#282126] group-hover:text-[#4B2E63] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#65477F] mt-1 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#D9CEE3]/50 group-hover:bg-[#4B2E63] text-[#4B2E63] group-hover:text-[#F7F3EC] flex items-center justify-center transition-all duration-300 shrink-0 ml-3">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Highlights Bar */}
                  <div className="pt-3 border-t border-[#D8CEC3]/80 grid grid-cols-3 gap-2 text-center">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="p-2 rounded-xl bg-[#F7F3EC] border border-[#D8CEC3]">
                        <span className="text-[11px] font-mono font-bold text-[#4B2E63] block">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
