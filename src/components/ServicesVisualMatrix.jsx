"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  Code2,
  TrendingUp,
  Palette,
  Bot,
  Sparkles,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

export default function ServicesVisualMatrix() {
  const sectionRef = useRef(null);

  /*
   * The entire reel section controls the animation.
   *
   * 0   = beginning
   * 1   = end
   *
   * Because the section is several viewport heights tall,
   * normal page scrolling drives the reel.
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const services = [
    {
      number: "01",
      name: "Web Solutions",
      category: "Engineering",
      icon: Code2,
      tagline:
        "Ultra-fast Next.js architecture & immersive digital experiences.",
      description:
        "Custom websites, SaaS platforms and interactive experiences engineered for speed, conversion and visual impact.",

      // CARD 1
      // color: "#4B2E63",
      color: "#282126",
      accent: "#B8A6C9",

      features: [
        "Next.js App Router & Server Components",
        "Framer Motion & WebGL Experiences",
        "Responsive Component Architecture",
        "SEO & Core Web Vitals",
      ],
    },

    {
      number: "02",
      name: "Digital Marketing",
      category: "Growth",
      icon: TrendingUp,
      tagline:
        "Performance campaigns designed around measurable business growth.",
      description:
        "Data-driven acquisition systems combining paid media, SEO, creative testing and conversion optimization.",

      // CARD 2 — NEW COLOR
      color: "#6B4F32",
      accent: "#D6B77A",

      features: [
        "Performance Marketing Systems",
        "Creative A/B Testing",
        "SEO & Search Strategy",
        "Conversion Tracking & Analytics",
      ],
    },

    {
      number: "03",
      name: "Brand & Motion",
      category: "Creative",
      icon: Palette,
      tagline:
        "Luxury visual systems, kinetic interfaces and memorable identities.",
      description:
        "Visual identities and motion systems designed to make your digital presence instantly recognizable.",

      // CARD 3
      color: "#282126",
      accent: "#D9CEE3",

      features: [
        "Brand Identity Systems",
        "UI/UX Design Systems",
        "Kinetic Typography & Motion",
        "3D & Interactive Visuals",
      ],
    },

    {
      number: "04",
      name: "AI & Automation",
      category: "Intelligence",
      icon: Bot,
      tagline:
        "Intelligent workflows that turn repetitive operations into systems.",
      description:
        "AI agents, automation pipelines and intelligent business systems that reduce manual work and connect your operations.",

      // CARD 4 — NEW COLOR
      color: "#173C3A",
      accent: "#8FC9B5",

      features: [
        "AI Lead Qualification",
        "Custom Knowledge Chatbots",
        "Business Workflow Automation",
        "Predictive Funnel Systems",
      ],
    },
  ];


  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#F7F3EC]"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="min-h-screen flex items-center px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto w-full">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8DED2] border border-[#B8A6C9]/40 text-[#4B2E63] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#B69A68]" />

              Interactive Services
            </div>

            <h2 className="mt-7 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#282126] leading-[0.9] tracking-tight">

              Digital systems
              <br />

              <span className="text-[#4B2E63]">
                built to move.
              </span>

            </h2>

            <div className="mt-10 flex items-center gap-4">

              <div className="w-12 h-px bg-[#4B2E63]" />

              <p className="text-sm md:text-base text-[#65477F] max-w-lg leading-relaxed">
                Scroll slowly through our capabilities.
                Each service becomes its own cinematic frame.
              </p>

            </div>

            <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#65477F]">

              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-8 h-8 rounded-full border border-[#B8A6C9] flex items-center justify-center"
              >
                ↓
              </motion.div>

              Scroll to explore

            </div>

          </div>

        </div>
      </div>


      {/* =========================================================
          VERTICAL REEL
      ========================================================= */}

      <div
        className="relative"
        style={{
          height: `${services.length * 110}vh`,
        }}
      >

        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Soft background glow */}

          <motion.div
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [0.4, 0.7, 0.4]
              ),
            }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B8A6C9]/20 blur-[140px] rounded-full" />
          </motion.div>


          {/* =====================================================
              CARDS
          ===================================================== */}

          {services.map((service, index) => (
            <VerticalReelCard
              key={service.number}
              service={service}
              index={index}
              total={services.length}
              progress={scrollYProgress}
            />
          ))}


          {/* =====================================================
              RIGHT PROGRESS
          ===================================================== */}

          <div className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 z-[100]">

            <div className="flex flex-col items-center gap-4">

              {services.map((service, index) => {

                const start = index / services.length;
                const end = (index + 1) / services.length;

                return (
                  <ReelProgress
                    key={service.number}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}

            </div>

          </div>


          {/* =====================================================
              BOTTOM COUNTER
          ===================================================== */}

          <div className="absolute bottom-8 left-6 md:left-12 z-[100] flex items-center gap-4">

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#65477F]">
              Services
            </span>

            <div className="w-16 h-px bg-[#B8A6C9]" />

            <span className="text-[10px] font-mono text-[#65477F]">
              01 — 04
            </span>

          </div>

        </div>

      </div>


      {/* =========================================================
          END
      ========================================================= */}

      <div className="min-h-screen flex items-center justify-center px-6 py-24">

        <div className="text-center max-w-3xl">

          <span className="text-xs uppercase tracking-[0.3em] text-[#65477F]">
            The next step
          </span>

          <h3 className="mt-6 font-display text-5xl md:text-7xl font-bold text-[#282126] leading-[0.95]">

            Let's build
            <br />

            <span className="text-[#4B2E63]">
              something different.
            </span>

          </h3>

          <a
            href="#estimator"
            className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full bg-[#4B2E63] text-[#F7F3EC] text-sm font-semibold hover:bg-[#65477F] transition-all duration-300 hover:scale-105"
          >
            Start a Project

            <ArrowUpRight className="w-4 h-4" />
          </a>

        </div>

      </div>

    </section>
  );
}


/* ===============================================================
   VERTICAL REEL CARD
================================================================ */

function VerticalReelCard({
  service,
  index,
  total,
  progress,
}) {

  const Icon = service.icon;

  /*
   * Every card receives its own section of the scroll timeline.
   */

  const start = index / total;
  const end = (index + 1) / total;

  const previous = Math.max(0, start - 0.10);
  const next = Math.min(1, end + 0.10);


  /* -------------------------------------------------------------
     VERTICAL SLIDE
  ------------------------------------------------------------- */

  const y = useTransform(
    progress,

    [
      previous,
      start,
      start + 0.08,
      end - 0.08,
      end,
      next,
    ],

    [
      "100%",
      "100%",
      "0%",
      "0%",
      "-15%",
      "-100%",
    ]
  );


  /* -------------------------------------------------------------
     SCALE
  ------------------------------------------------------------- */

  const scale = useTransform(
    progress,

    [
      previous,
      start,
      start + 0.08,
      end - 0.08,
      end,
      next,
    ],

    [
      0.86,
      0.90,
      1,
      1,
      0.94,
      0.86,
    ]
  );


  /* -------------------------------------------------------------
     ROTATION
  ------------------------------------------------------------- */

  const rotateX = useTransform(
    progress,

    [
      previous,
      start,
      start + 0.08,
      end - 0.08,
      end,
      next,
    ],

    [
      8,
      5,
      0,
      0,
      -3,
      -8,
    ]
  );


  /* -------------------------------------------------------------
     OPACITY
  ------------------------------------------------------------- */

  const opacity = useTransform(
    progress,

    [
      previous,
      start,
      start + 0.07,
      end - 0.07,
      end,
      next,
    ],

    [
      0,
      0.65,
      1,
      1,
      0.8,
      0,
    ]
  );


  /* -------------------------------------------------------------
     BLUR
  ------------------------------------------------------------- */

  const blur = useTransform(
    progress,

    [
      previous,
      start,
      start + 0.08,
      end - 0.08,
      end,
      next,
    ],

    [
      "10px",
      "4px",
      "0px",
      "0px",
      "2px",
      "10px",
    ]
  );


  return (
    <motion.div
      style={{
        y,
        scale,
        rotateX,
        opacity,
        filter: blur.get
          ? undefined
          : undefined,
        zIndex: total - index,
        transformPerspective: 1200,
      }}
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16"
    >

      {/* =========================================================
          CARD WRAPPER
      ========================================================= */}

      <div className="relative w-full max-w-7xl h-[78vh] md:h-[76vh]">

        {/* Back shadow */}

        <div
          className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] translate-y-5 scale-[0.97] opacity-30 blur-xl"
          style={{
            backgroundColor: service.color,
          }}
        />


        {/* =====================================================
            MAIN CARD
        ===================================================== */}

        <div
          className="relative h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border shadow-[0_30px_100px_rgba(40,33,38,0.25)]"
          style={{
            backgroundColor: service.color,
            borderColor: `${service.accent}45`,
          }}
        >

          {/* ===================================================
              DECORATIVE BACKGROUND
          =================================================== */}

          <div
            className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border"
            style={{
              borderColor: `${service.accent}20`,
            }}
          />

          <div
            className="absolute -right-20 -bottom-60 w-[600px] h-[600px] rounded-full border"
            style={{
              borderColor: `${service.accent}15`,
            }}
          />

          <div
            className="absolute right-[15%] top-[20%] w-40 h-40 rounded-full blur-[80px]"
            style={{
              backgroundColor: service.accent,
              opacity: 0.25,
            }}
          />


          {/* Grid */}

          <div className="absolute inset-0 opacity-[0.035] pointer-events-none">

            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(${service.accent} 1px, transparent 1px),
                  linear-gradient(90deg, ${service.accent} 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />

          </div>


          {/* ===================================================
              CARD CONTENT
          =================================================== */}

          <div className="relative h-full p-7 sm:p-9 md:p-12 lg:p-14 flex flex-col justify-between">


            {/* =================================================
                HEADER
            ================================================= */}

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">

                <div
                  className="w-11 h-11 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border"
                  style={{
                    backgroundColor: `${service.accent}15`,
                    borderColor: `${service.accent}35`,
                    color: service.accent,
                  }}
                >
                  <Icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>


                <div>

                  <p
                    className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono"
                    style={{
                      color: service.accent,
                    }}
                  >
                    {service.category}
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-widest text-white/30">
                    Hashhbit Studio
                  </p>

                </div>

              </div>


              <div
                className="text-6xl md:text-8xl font-display font-bold leading-none"
                style={{
                  color: service.accent,
                  opacity: 0.13,
                }}
              >
                {service.number}
              </div>

            </div>


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

              {/* LEFT */}

              <div className="lg:col-span-7">

                <div
                  className="w-12 h-1 rounded-full mb-6"
                  style={{
                    backgroundColor: service.accent,
                  }}
                />


                <h3 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F7F3EC] leading-[0.88] tracking-tight">

                  {service.name}

                </h3>


                <p
                  className="mt-6 max-w-xl text-sm md:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: service.accent,
                  }}
                >
                  {service.tagline}
                </p>

              </div>


              {/* RIGHT */}

              <div className="lg:col-span-5">

                <div
                  className="rounded-3xl p-5 md:p-7 border backdrop-blur-xl"
                  style={{
                    backgroundColor: `${service.accent}10`,
                    borderColor: `${service.accent}30`,
                  }}
                >

                  <div
                    className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-mono mb-6"
                    style={{
                      color: service.accent,
                    }}
                  >
                    System Capabilities
                  </div>


                  <div className="space-y-4">

                    {service.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex gap-3 items-start"
                      >

                        <CheckCircle
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{
                            color: service.accent,
                          }}
                        />

                        <span className="text-xs md:text-sm text-[#F7F3EC]/80 leading-relaxed">
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">

              <div>

                <div className="flex items-center gap-3 mb-3">

                  <motion.span
                    animate={{
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: service.accent,
                    }}
                  />

                  <span
                    className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-mono"
                    style={{
                      color: service.accent,
                    }}
                  >
                    Active System
                  </span>

                </div>


                <p className="text-xs md:text-sm text-white/45 max-w-lg leading-relaxed">
                  {service.description}
                </p>

              </div>


              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F7F3EC] text-[#282126] text-xs md:text-sm font-bold hover:bg-white hover:scale-105 transition-all duration-300 shrink-0"
              >
                Explore

                <ArrowUpRight className="w-4 h-4" />

              </a>

            </div>

          </div>


          {/* ===================================================
              CARD PROGRESS
          =================================================== */}

          <motion.div
            className="absolute bottom-0 left-0 h-[3px]"
            style={{
              backgroundColor: service.accent,

              width: useTransform(
                progress,
                [start, end],
                ["0%", "100%"]
              ),
            }}
          />

        </div>

      </div>

    </motion.div>
  );
}


/* ===============================================================
   PROGRESS DOT
================================================================ */

function ReelProgress({
  progress,
  start,
  end,
}) {

  const scale = useTransform(
    progress,
    [
      start,
      (start + end) / 2,
      end,
    ],
    [
      1,
      1.8,
      1,
    ]
  );


  const opacity = useTransform(
    progress,
    [
      start,
      (start + end) / 2,
      end,
    ],
    [
      0.25,
      1,
      0.25,
    ]
  );


  return (
    <motion.div
      style={{
        scale,
        opacity,
      }}
      className="w-2 h-2 rounded-full bg-[#4B2E63]"
    />
  );
}
