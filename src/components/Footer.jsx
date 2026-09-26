"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Sparkles, Globe, Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paletteSwatches = [
    { name: "Deep Purple", hex: "#4B2E63" },
    { name: "Royal Purple", hex: "#65477F" },
    { name: "Dusty Lavender", hex: "#B8A6C9" },
    { name: "Light Lavender", hex: "#D9CEE3" },
    { name: "Warm Ivory", hex: "#F7F3EC" },
    { name: "Champagne Beige", hex: "#E8DED2" },
    { name: "Espresso", hex: "#282126" },
    { name: "Muted Gold", hex: "#B69A68" },
    { name: "Soft Taupe", hex: "#D8CEC3" },
  ];

  return (
    <footer className="pt-20 pb-12 px-6 md:px-12 bg-[#E8DED2]/90 border-t border-[#B8A6C9]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Minimal Brand Statement */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-[#D8CEC3]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#4B2E63] text-[#F7F3EC] flex items-center justify-center font-display font-black text-xl shadow-md">
                H#
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl tracking-wider text-[#282126] block">
                  HASHHBIT STUDIO
                </span>
                <span className="text-xs uppercase font-mono tracking-widest text-[#65477F] font-semibold">
                  Web Solutions • Digital Marketing • AI Systems
                </span>
              </div>
            </div>
            <p className="text-xs text-[#65477F] max-w-md leading-relaxed">
              Engineered with extreme precision, minimal bloat, and modular Tailwind CSS for effortless customization.
            </p>
          </div>

          {/* Quick Actions & Live Time */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="px-4 py-2 rounded-2xl bg-[#F7F3EC] border border-[#D8CEC3] text-xs font-mono text-[#282126] flex items-center gap-2 shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[#65477F]" />
              <span>IST (Studio Time):</span>
              <span className="font-bold text-[#4B2E63]">{time || "10:00 AM"}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-2xl bg-[#F7F3EC] hover:bg-[#4B2E63] text-[#4B2E63] hover:text-[#F7F3EC] border border-[#D8CEC3] hover:border-[#4B2E63] flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer group"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#65477F]">
          <div>
            <span>© {new Date().getFullYear()} Hashhbit Studio. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-[#4B2E63] transition-colors">
              Services
            </a>
            <a href="#showcase" className="hover:text-[#4B2E63] transition-colors">
              Showcase
            </a>
            <a href="#estimator" className="hover:text-[#4B2E63] transition-colors">
              Estimator
            </a>
            <a
              href="mailto:hello@hashhbit.studio"
              className="hover:text-[#4B2E63] font-semibold transition-colors"
            >
              hello@hashhbit.studio
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
