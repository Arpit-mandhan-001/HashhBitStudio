"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Layers,
  TrendingUp,
  Code2,
  Cpu,
  CheckCircle2,
  Sliders,
  ChevronDown,
} from "lucide-react";
import HoverBlurButton from "./Hoverblurbutton";
import DesignMarquee from "./Designmarquee";

export default function HeroSection() {
  const [activeVisualMode, setActiveVisualMode] = useState("web");
  const [activeWord, setActiveWord] = useState(0);

  // =========================================================
  // HERO WORDS
  // =========================================================

  const heroWords = [
    "DIGITAL MARKETING",
    "WEB DESIGNING",
    "WEB DEVELOPMENT",
    "AI AUTOMATION",
    "BRAND STRATEGY",
    "SEO & GROWTH",
  ];

  // =========================================================
  // AUTO CHANGE HERO WORD
  // =========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % heroWords.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  // =========================================================
  // VISUAL MODES
  // =========================================================

  const visualModes = [
    {
      id: "web",
      label: "Web Architecture",
      icon: Code2,
      color: "#4B2E63",
    },
    {
      id: "growth",
      label: "Growth Engine",
      icon: TrendingUp,
      color: "#65477F",
    },
    {
      id: "ai",
      label: "AI Automation",
      icon: Cpu,
      color: "#B69A68",
    },
  ];

  return (
    <>
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* =====================================================
          BACKGROUND AMBIENT LIGHTS
      ====================================================== */}

        <div className="pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] md:w-[1000px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-[#D9CEE3]/40 via-[#B8A6C9]/25 to-[#E8DED2]/30 rounded-full blur-3xl -z-10 animate-pulse-glow" />

        <div className="pointer-events-none absolute top-[45%] left-[5%] w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-[#B8A6C9]/10 rounded-full blur-3xl -z-10" />

        <div className="pointer-events-none absolute bottom-10 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#B69A68]/15 rounded-full blur-2xl -z-10" />

        <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
          {/* =====================================================
            HERO TYPOGRAPHY
        ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full max-w-[1500px] mx-auto mb-8 sm:mb-10 overflow-visible"
          >
            {/* Small Top Label */}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#315BEA]" />

              <span className="text-[10px] sm:text-xs md:text-sm font-bingo-italic uppercase tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em] text-[#65477F]">
                Technology • Creativity • Growth
              </span>

              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#B69A68]" />
            </motion.div>

            {/* =================================================
              MAIN HEADLINE
          ================================================== */}

            <h1 className="font-display font-black tracking-[-0.065em] leading-[0.82] text-[#282126] font-poppins mt-7 sm:mt-10">
              {/* WE BUILD */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="block text-[48px] xs:text-[56px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[100px] font-semibold"
              >
                WE BUILD
              </motion.span>

              {/* =================================================
                ANIMATED SERVICE TYPOGRAPHY
            ================================================== */}

              <div className="relative mt-2 sm:mt-1 h-[clamp(4rem,18vw,10rem)] flex items-center justify-center overflow-visible font-poppins w-full">
                {/* ---------------------------------------------
                  GHOST / TRAILING TEXT
              ---------------------------------------------- */}

                {[2, 1].map((layer) => (
                  <motion.span
                    key={`${heroWords[activeWord]}-${layer}`}
                    initial={{
                      opacity: 0,
                      x: -layer * 15,
                      y: -layer * 8,
                    }}
                    animate={{
                      opacity: 0.025 + (5 - layer) * 0.012,
                      x: -layer * 16,
                      y: -layer * 9,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                    className="absolute font-display font-black text-[30px] xs:text-[36px] sm:text-[46px] md:text-[60px] lg:text-[70px] xl:text-[78px] text-[#4B2E63] whitespace-nowrap pointer-events-none select-none"
                  >
                    {heroWords[activeWord]}
                  </motion.span>
                ))}

                {/* ---------------------------------------------
                  MAIN ANIMATED WORD
              ---------------------------------------------- */}

                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroWords[activeWord]}
                    initial={{
                      opacity: 0,
                      y: 90,
                      scale: 0.96,
                      filter: "blur(12px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -90,
                      scale: 1.02,
                      filter: "blur(12px)",
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="relative z-10 font-display font-black text-[30px] xs:text-[36px] sm:text-[46px] md:text-[60px] lg:text-[70px] xl:text-[78px] text-[#181719] whitespace-nowrap select-none"
                  >
                    {heroWords[activeWord]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            {/* =================================================
              HERO DESCRIPTION
          ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-6 sm:mt-7 font-poppins text-xs sm:text-sm md:text-base lg:text-lg text-[#65477F] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
            >
              Digital experiences engineered for ambitious brands.
              <br className="hidden sm:block" />
              Strategy, technology and creativity — all under one roof.
            </motion.p>
          </motion.div>

          {/* =====================================================
            HERO BUTTONS
        ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-15 w-full"
          >
            {/* Primary Button */}

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-raleway w-full">
              {/* Primary */}
              <HoverBlurButton
                href="#services"
                text="Explore Services"
                hoverText="Discover More"
                variant="primary"
              />

              {/* Secondary */}
              <HoverBlurButton
                href="#estimator"
                text="Interactive Estimator"
                hoverText="Start Estimating"
                variant="secondary"
                icon={Sparkles}
              />
            </div>
          </motion.div>

          {/* =====================================================
            INTERACTIVE VISUAL SHOWCASE
        ====================================================== */}

          {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="flex flex-col items-center gap-2 text-[#65477F] mt-6 sm:mt-6"
          >
            <span className="text-[9px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-widest uppercase font-poppins">
              Scroll To Explore Services
            </span>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-4 h-4 text-[#4B2E63]" />
            </motion.div>
          </motion.div>
        </div>

        <div className="w-[108%] overflow-hidden">
          <DesignMarquee />
        </div>
      </section>
    </>
  );
}
