"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  Layers,
  TrendingUp,
  Code2,
  Bot,
  Mail,
  Globe2,
  Command,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    {
      name: "Services",
      href: "#services",
      icon: Layers,
      count: "01",
      tag: "Core",
    },
    {
      name: "Web Solutions",
      href: "#web-solutions",
      icon: Code2,
      count: "02",
      tag: "Tech",
    },
    {
      name: "Growth & Marketing",
      href: "#digital-marketing",
      icon: TrendingUp,
      count: "03",
      tag: "Scale",
    },
    {
      name: "AI Automation",
      href: "#ai-solutions",
      icon: Bot,
      count: "04",
      tag: "Future",
    },
    {
      name: "Work Reel",
      href: "#showcase",
      icon: Globe2,
      count: "05",
      tag: "Visuals",
    },
    {
      name: "Contact & Estimator",
      href: "#estimator",
      icon: Mail,
      count: "06",
      tag: "Instant",
    },
  ];

  return (
    <>
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 z-40 w-full px-6 py-5 md:px-12 md:py-6 transition-all duration-300 pointer-events-none ${scrolled ? "backdrop-blur-sm bg-[#F7F3EC]/40" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO - Completely separate on the left */}
          <div className="pointer-events-auto">
            <div className="flex items-center gap-2.5 bg-[#F7F3EC]/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#B8A6C9]/40 shadow-sm hover:border-[#65477F]/50 transition-all duration-300">
              <a
                href="#"
                className="flex items-center gap-2.5 group"
                aria-label="Hashhbit Studio Home"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4B2E63] via-[#65477F] to-[#B69A68] flex items-center justify-center text-[#F7F3EC] font-display font-bold text-lg shadow-sm shadow-[#4B2E63]/20 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                  <span>H#</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-display font-bold tracking-wider text-sm md:text-base text-[#282126] flex items-center gap-1.5">
                    HASHHBIT
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B69A68] animate-ping" />
                  </span>

                  <span className="text-[9px] uppercase tracking-widest text-[#65477F] font-semibold -mt-1">
                    STUDIO
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* MENU BUTTON - Completely separate on the right */}
          <div className="pointer-events-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F7F3EC]/90 backdrop-blur-md hover:bg-[#E8DED2] text-[#282126] font-medium text-xs tracking-wide transition-all duration-200 border border-[#B8A6C9]/40 hover:border-[#4B2E63]/50 shadow-sm group cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {/* Hamburger */}
              <div className="w-4 h-3 flex flex-col justify-between items-center">
                <span
                  className={`w-full h-[2px] bg-[#4B2E63] rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[5px]" : ""
                    }`}
                />

                <span
                  className={`w-full h-[2px] bg-[#4B2E63] rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""
                    }`}
                />

                <span
                  className={`w-full h-[2px] bg-[#4B2E63] rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""
                    }`}
                />
              </div>

              <span className="uppercase tracking-wider text-[11px] font-semibold text-[#4B2E63] group-hover:text-[#282126]">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* RIGHT-SIDE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#282126]/40 backdrop-blur-xl flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            {/* RIGHT DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 280,
              }}
              className="w-full max-w-xl h-full bg-[#F7F3EC] border-l border-[#B8A6C9]/40 shadow-2xl p-6 md:p-10 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#D8CEC3]/60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#4B2E63] text-[#F7F3EC] flex items-center justify-center font-display font-bold text-sm">
                    H#
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-sm text-[#282126]">
                      HASHHBIT STUDIO
                    </h3>

                    <p className="text-[10px] text-[#65477F] uppercase tracking-widest font-semibold">
                      Digital & Web Architecture
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#E8DED2] hover:bg-[#D9CEE3] flex items-center justify-center text-[#4B2E63] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-8 space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#65477F] font-semibold mb-4 px-2">
                  Navigation Index
                </p>

                {navLinks.map((link, idx) => {
                  const Icon = link.icon;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-[#E8DED2]/80 border border-transparent hover:border-[#B8A6C9]/50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-[#65477F] group-hover:text-[#4B2E63] font-bold">
                          {link.count}
                        </span>

                        <div className="w-8 h-8 rounded-xl bg-[#D9CEE3]/50 group-hover:bg-[#65477F] group-hover:text-[#F7F3EC] text-[#4B2E63] flex items-center justify-center transition-all duration-300">
                          <Icon className="w-4 h-4" />
                        </div>

                        <span className="font-display text-lg md:text-xl font-bold text-[#282126] group-hover:text-[#4B2E63] transition-colors">
                          {link.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#B8A6C9]/30 text-[#4B2E63]">
                          {link.tag}
                        </span>

                        <ArrowUpRight className="w-4 h-4 text-[#B8A6C9] group-hover:text-[#4B2E63] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-[#D8CEC3]/60 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#E8DED2]/50 border border-[#D8CEC3]">
                    <span className="text-[#65477F] font-semibold block text-[10px] uppercase tracking-wider">
                      Direct Inquiries
                    </span>

                    <a
                      href="mailto:hello@hashhbit.studio"
                      className="font-medium text-[#282126] hover:text-[#4B2E63] transition-colors"
                    >
                      hello@hashhbit.studio
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-[#E8DED2]/50 border border-[#D8CEC3]">
                    <span className="text-[#65477F] font-semibold block text-[10px] uppercase tracking-wider">
                      Estimated Delivery
                    </span>

                    <span className="font-medium text-[#282126]">
                      Fast-track 2-4 Weeks
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#65477F]">
                  <span>
                    © {new Date().getFullYear()} Hashhbit Studio
                  </span>

                  <div className="flex items-center gap-1 text-[11px] bg-[#D9CEE3]/40 px-2.5 py-1 rounded-full text-[#4B2E63]">
                    <Command className="w-3 h-3" />
                    <span>Press ESC to close</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}