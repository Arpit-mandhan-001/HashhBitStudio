"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Play, 
  Layers, 
  TrendingUp, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  Sliders,
  ChevronDown
} from "lucide-react";

export default function HeroSection() {
  const [activeVisualMode, setActiveVisualMode] = useState("web");

  const visualModes = [
    { id: "web", label: "Web Architecture", icon: Code2, color: "#4B2E63" },
    { id: "growth", label: "Growth Engine", icon: TrendingUp, color: "#65477F" },
    { id: "ai", label: "AI Automation", icon: Cpu, color: "#B69A68" },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Radial Lights in requested pastel tones */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-gradient-to-tr from-[#D9CEE3]/40 via-[#B8A6C9]/25 to-[#E8DED2]/30 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#B69A68]/15 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DED2]/90 border border-[#B8A6C9]/60 shadow-sm backdrop-blur-md mb-8 group hover:border-[#65477F]/60 transition-all duration-300"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B69A68] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65477F]" />
          </span>
          <span className="text-xs md:text-sm font-semibold text-[#4B2E63] tracking-wide">
            Next-Gen Web & Growth Architecture
          </span>
          <span className="text-[#B69A68] text-xs font-mono">• 2026 Edition</span>
        </motion.div>

        {/* Minimal High-Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#282126] max-w-5xl leading-[1.08] mb-6"
        >
          Crafting Digital{" "}
          <span className="relative inline-block text-gradient-purple">
            Dominance
            <motion.span
              className="absolute -bottom-1.5 left-0 w-full h-[3px] bg-gradient-to-r from-[#4B2E63] via-[#B8A6C9] to-[#B69A68] rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </span>{" "}
          Through Code & Scale.
        </motion.h1>

        {/* Concise Luxury Tagline (Very limited text as requested) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-[#65477F] max-w-2xl font-normal leading-relaxed mb-10"
        >
          High-performance web applications, intelligent digital marketing, and bespoke brand experiences designed for exponential market authority.
        </motion.p>

        {/* Smooth Magnetic Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#services"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#4B2E63] hover:bg-[#65477F] text-[#F7F3EC] font-semibold text-sm tracking-wide shadow-lg shadow-[#4B2E63]/25 hover:shadow-xl hover:shadow-[#4B2E63]/35 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Explore Visual Solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#estimator"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#E8DED2] hover:bg-[#D9CEE3] text-[#282126] border border-[#B8A6C9]/50 hover:border-[#4B2E63]/40 font-semibold text-sm tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-[#B69A68]" />
            <span>Interactive Estimator</span>
          </a>
        </motion.div>

        {/* Dynamic 3D-feeling Interactive Stage / Hero Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-5xl rounded-3xl bg-gradient-to-b from-[#E8DED2]/90 to-[#F7F3EC]/80 border border-[#B8A6C9]/60 shadow-2xl shadow-[#4B2E63]/10 backdrop-blur-xl p-4 sm:p-6 md:p-8 relative overflow-hidden"
        >
          {/* Top Bar of Interactive Visual Window */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D8CEC3]/80">
            {/* Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#4B2E63]/70" />
              <span className="w-3 h-3 rounded-full bg-[#B8A6C9]" />
              <span className="w-3 h-3 rounded-full bg-[#B69A68]" />
              <span className="ml-2 text-xs font-mono text-[#65477F] font-semibold hidden sm:inline">
                HASHHBIT://CORE_ENGINE.v26
              </span>
            </div>

            {/* Interactive Visual Mode Switchers */}
            <div className="flex items-center gap-1.5 bg-[#F7F3EC] p-1 rounded-full border border-[#D8CEC3]">
              {visualModes.map((mode) => {
                const Icon = mode.icon;
                const isActive = activeVisualMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveVisualMode(mode.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#4B2E63] text-[#F7F3EC] shadow-sm"
                        : "text-[#65477F] hover:text-[#282126] hover:bg-[#E8DED2]/60"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{mode.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Screen Dynamic Content */}
          <div className="py-8 px-2 md:px-6 min-h-[320px] flex items-center justify-center">
            {activeVisualMode === "web" && (
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                <div className="glass-card p-5 rounded-2xl border border-[#B8A6C9]/40 flex flex-col justify-between group hover:border-[#4B2E63]">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2 rounded-lg bg-[#D9CEE3]/60 text-[#4B2E63]">
                        <Code2 className="w-5 h-5" />
                      </span>
                      <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        100/100 Core Web
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-[#282126] mb-1">
                      Next.js & Micro-Frontends
                    </h3>
                    <p className="text-xs text-[#65477F]">
                      Sub-50ms TTFB latency with instantaneous client hydration.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D8CEC3]/60 flex items-center justify-between text-[11px] font-mono text-[#65477F]">
                    <span>Hydration: 0.12s</span>
                    <span className="text-[#B69A68] font-bold">OPTIMIZED</span>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-[#B8A6C9]/40 flex flex-col justify-between group hover:border-[#65477F]">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2 rounded-lg bg-[#E8DED2] text-[#65477F]">
                        <Layers className="w-5 h-5" />
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#65477F] bg-[#D9CEE3]/40 px-2 py-0.5 rounded-full">
                        60 FPS Motion
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-[#282126] mb-1">
                      WebGL & Shader Canvas
                    </h3>
                    <p className="text-xs text-[#65477F]">
                      Hardware-accelerated 3D shaders and fluid micro-interactions.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D8CEC3]/60 flex items-center justify-between text-[11px] font-mono text-[#65477F]">
                    <span>GPU Pipeline</span>
                    <span className="text-emerald-600 font-bold">READY</span>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-[#B8A6C9]/40 flex flex-col justify-between group hover:border-[#B69A68]">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2 rounded-lg bg-[#D9CEE3]/60 text-[#B69A68]">
                        <Sparkles className="w-5 h-5" />
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#B69A68] bg-[#F7F3EC] px-2 py-0.5 rounded-full border border-[#B69A68]/30">
                        Zero CLS
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-[#282126] mb-1">
                      Adaptive Design System
                    </h3>
                    <p className="text-xs text-[#65477F]">
                      Pixel-perfect across foldables, ultrawides, and retina displays.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D8CEC3]/60 flex items-center justify-between text-[11px] font-mono text-[#65477F]">
                    <span>Scalability</span>
                    <span className="text-[#4B2E63] font-bold">ENTERPRISE</span>
                  </div>
                </div>
              </div>
            )}

            {activeVisualMode === "growth" && (
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                <div className="glass-card p-5 rounded-2xl border border-[#B8A6C9]/40 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#65477F] uppercase tracking-wider font-semibold">
                      Ad ROAS Multiplier
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      +380% Avg
                    </span>
                  </div>
                  <div className="space-y-2 my-2">
                    <div className="flex justify-between text-xs text-[#282126] font-medium">
                      <span>Conversion Rate</span>
                      <span className="font-bold text-[#4B2E63]">6.84%</span>
                    </div>
                    <div className="w-full h-2 bg-[#E8DED2] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#65477F] to-[#B69A68] w-[85%] rounded-full animate-pulse" />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#65477F] mt-2">
                    Data-backed creative split-testing and automated bidding pipelines.
                  </p>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-[#B8A6C9]/40 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#65477F] uppercase tracking-wider font-semibold">
                      Organic SEO Authority
                    </span>
                    <span className="text-xs font-bold text-[#4B2E63] bg-[#D9CEE3]/50 px-2 py-0.5 rounded-full">
                      Top #1 Ranking
                    </span>
                  </div>
                  <div className="space-y-2 my-2">
                    <div className="flex justify-between text-xs text-[#282126] font-medium">
                      <span>Search Visibility</span>
                      <span className="font-bold text-[#65477F]">94.2%</span>
                    </div>
                    <div className="w-full h-2 bg-[#E8DED2] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#4B2E63] to-[#B8A6C9] w-[94%] rounded-full" />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#65477F] mt-2">
                    Semantic graph mapping and high-intent programmatic content.
                  </p>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-[#B8A6C9]/40 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#65477F] uppercase tracking-wider font-semibold">
                      CAC Reduction
                    </span>
                    <span className="text-xs font-bold text-[#B69A68] bg-[#F7F3EC] px-2 py-0.5 rounded-full border border-[#B69A68]/30">
                      -44.6% CAC
                    </span>
                  </div>
                  <div className="space-y-2 my-2">
                    <div className="flex justify-between text-xs text-[#282126] font-medium">
                      <span>Funnel Retention</span>
                      <span className="font-bold text-[#282126]">82.1%</span>
                    </div>
                    <div className="w-full h-2 bg-[#E8DED2] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#B69A68] to-[#4B2E63] w-[82%] rounded-full" />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#65477F] mt-2">
                    Frictionless user journeys maximizing lifetime customer value.
                  </p>
                </div>
              </div>
            )}

            {activeVisualMode === "ai" && (
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                <div className="glass-card p-5 rounded-2xl border border-[#B8A6C9]/40 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#65477F] uppercase tracking-wider font-semibold block mb-2">
                      Autonomous Agents
                    </span>
                    <h3 className="font-display font-bold text-base text-[#282126] mb-1">
                      Lead & CRM Syncing
                    </h3>
                    <p className="text-xs text-[#65477F]">
                      24/7 AI qualification and instant scheduling workflows.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Real-time Response: 1.2s</span>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-[#B8A6C9]/40 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#65477F] uppercase tracking-wider font-semibold block mb-2">
                      Predictive Analytics
                    </span>
                    <h3 className="font-display font-bold text-base text-[#282126] mb-1">
                      Dynamic Pricing & Personalization
                    </h3>
                    <p className="text-xs text-[#65477F]">
                      Tailors UX and offers to each visitor in real time.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-[#65477F] bg-[#D9CEE3]/40 px-2.5 py-1 rounded-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#B69A68]" />
                    <span>AI Model: Active</span>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-[#B8A6C9]/40 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#65477F] uppercase tracking-wider font-semibold block mb-2">
                      Intelligent Automation
                    </span>
                    <h3 className="font-display font-bold text-base text-[#282126] mb-1">
                      Marketing Omni-Deployer
                    </h3>
                    <p className="text-xs text-[#65477F]">
                      Multi-channel campaign deployment with algorithmic pacing.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-[#4B2E63] bg-[#E8DED2] px-2.5 py-1 rounded-lg">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Throughput: 10x Speed</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Live Metrics Bar */}
          <div className="pt-4 border-t border-[#D8CEC3]/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <span className="block font-display font-bold text-lg md:text-xl text-[#4B2E63]">
                99.9%
              </span>
              <span className="text-[11px] text-[#65477F] uppercase tracking-wider font-medium">
                SLA Reliability
              </span>
            </div>
            <div>
              <span className="block font-display font-bold text-lg md:text-xl text-[#65477F]">
                +340%
              </span>
              <span className="text-[11px] text-[#65477F] uppercase tracking-wider font-medium">
                Client Growth Velocity
              </span>
            </div>
            <div>
              <span className="block font-display font-bold text-lg md:text-xl text-[#B69A68]">
                &lt; 50ms
              </span>
              <span className="text-[11px] text-[#65477F] uppercase tracking-wider font-medium">
                Global Edge Latency
              </span>
            </div>
            <div>
              <span className="block font-display font-bold text-lg md:text-xl text-[#282126]">
                50+
              </span>
              <span className="text-[11px] text-[#65477F] uppercase tracking-wider font-medium">
                Digital Deployments
              </span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-2 text-[#65477F]"
        >
          <span className="text-[11px] font-semibold tracking-widest uppercase">
            Scroll To Explore Services
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-[#4B2E63]" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
