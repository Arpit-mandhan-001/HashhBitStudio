"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  Code2,
  TrendingUp,
  Palette,
  Bot,
  Sparkles,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function ServicesVisualMatrix({ className = "" }) {
  const sectionRef = useRef(null);

  /*
   * ============================================================
   * SERVICES
   * ============================================================
   */

  const services = [
    {
      number: "01",
      name: "Web Solutions",
      category: "Engineering",
      icon: Code2,

      image: "/images/service_1.jpg",

      tagline:
        "Ultra-fast Next.js architecture & immersive digital experiences.",

      description:
        "Custom websites, SaaS platforms and interactive experiences engineered for speed, conversion and visual impact.",

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

      image: "/images/service_2.jpg",

      tagline:
        "Performance campaigns designed around measurable business growth.",

      description:
        "Data-driven acquisition systems combining paid media, SEO, creative testing and conversion optimization.",

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

      image: "/images/service_3.jpg",

      tagline:
        "Luxury visual systems, kinetic interfaces and memorable identities.",

      description:
        "Visual identities and motion systems designed to make your digital presence instantly recognizable.",

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

      image: "/images/service_4.jpg",

      tagline:
        "Intelligent workflows that turn repetitive operations into systems.",

      description:
        "AI agents, automation pipelines and intelligent business systems that reduce manual work and connect your operations.",

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

  /*
   * ============================================================
   * SCROLL PROGRESS
   * ============================================================
   */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="services" className={`relative bg-[#F7F3EC] ${className}`}>
      {/* ========================================================
          DESKTOP
      ======================================================== */}

      <div
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{
          height: `${services.length * 110}vh`,
        }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="grid h-full grid-cols-2">
            {/* ==================================================
                LEFT INTRO
            ================================================== */}

            <div className="relative flex items-center bg-[#F7F3EC] px-8 xl:px-12 2xl:px-20">
              <div className="w-full max-w-3xl">
                {/* Badge */}

                <div className="inline-flex items-center gap-2 rounded-full border border-[#B8A6C9]/40 bg-[#E8DED2] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#4B2E63]">
                  <Sparkles className="h-3.5 w-3.5 text-[#B69A68]" />
                  Interactive Services
                </div>

                {/* Main heading */}

                <h2 className="mt-8 font-poppins text-5xl font-extrabold leading-[0.9] tracking-tight text-[#282126] sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]">
                  Digital systems
                  <br />
                  <span className="mt-5 block text-[#4B2E63]">
                    built to move.
                  </span>
                </h2>

                {/* Description */}

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-px w-12 shrink-0 bg-[#4B2E63]" />

                  <p className="max-w-lg text-sm leading-relaxed text-[#65477F] md:text-base">
                    Scroll slowly through our capabilities. Each service becomes
                    its own cinematic frame.
                  </p>
                </div>

                {/* Scroll indicator */}

                <div className="mt-16 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#65477F]">
                  <motion.div
                    animate={{
                      y: [0, 6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B8A6C9]"
                  >
                    ↓
                  </motion.div>
                  Scroll to explore
                </div>
              </div>
            </div>

            {/* ==================================================
                RIGHT REEL
            ================================================== */}

            <div className="relative h-full overflow-hidden translate-y-14">
              {services.map((service, index) => (
                <VerticalReelCard
                  key={service.number}
                  service={service}
                  index={index}
                  total={services.length}
                  progress={scrollYProgress}
                />
              ))}

              {/* Progress dots */}

              <div className="absolute right-5 top-1/2 z-[300] -translate-y-1/2 md:right-8 translate-x-2">
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
                        color="#111111"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE
      ======================================================== */}

      <div className="lg:hidden">
        {/* Mobile intro */}

        <div className="flex items-center bg-[#F7F3EC] px-6 py-20">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B8A6C9]/40 bg-[#E8DED2] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#4B2E63]">
              <Sparkles className="h-3.5 w-3.5 text-[#B69A68]" />
              Interactive Services
            </div>

            <h2 className="mt-8 font-poppins text-5xl font-extrabold leading-[0.9] tracking-tight text-[#282126] sm:text-6xl">
              Digital systems
              <br />
              <span className="mt-5 block text-[#4B2E63]">built to move.</span>
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-10 shrink-0 bg-[#4B2E63]" />

              <p className="text-sm leading-relaxed text-[#65477F]">
                Scroll slowly through our capabilities. Each service becomes its
                own cinematic frame.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#65477F]">
              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B8A6C9]"
              >
                ↓
              </motion.div>
              Scroll to explore
            </div>
          </div>
        </div>

        {/* Mobile cards */}

        <div className="bg-[#282126]">
          {services.map((service) => (
            <MobileServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>

      {/* ========================================================
          NEXT SECTION
      ======================================================== */}

      <div className="flex items-center justify-center bg-[#F7F3EC] px-6">
        <div className="max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#65477F]">
            The next step
          </span>

          <h3 className="mt-6 font-display text-5xl font-bold leading-[0.95] text-[#282126] md:text-7xl">
            Let's build
            <br />
            <span className="text-[#4B2E63]">something different.</span>
          </h3>

          <a
            href="#estimator"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#4B2E63] px-7 py-3.5 text-sm font-semibold text-[#F7F3EC] transition-all duration-300 hover:scale-105 hover:bg-[#65477F]"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   DESKTOP VERTICAL REEL CARD

   Layout:

          SERVICE NAME

        ┌─────────────┐
        │             │
        │    IMAGE    │
        │             │
        └─────────────┘

        DESCRIPTION
        TAGLINE
================================================================ */

function VerticalReelCard({ service, index, total, progress }) {
  const start = index / total;
  const end = (index + 1) / total;

  const enterStart = index === 0 ? 0 : Math.max(0, start - 0.08);

  const enterEnd = Math.min(1, start + 0.08);

  const exitStart = Math.max(start, end - 0.08);

  const exitEnd = Math.min(1, end + 0.08);

  const initialY = index === 0 ? "0%" : "100%";

  /* ============================================================
     ANIMATION
  ============================================================ */

  const y = useTransform(
    progress,
    [enterStart, enterEnd, exitStart, end, exitEnd],
    [initialY, "0%", "0%", "-15%", "-100%"],
  );

  const scale = useTransform(
    progress,
    [enterStart, enterEnd, exitStart, end, exitEnd],
    [index === 0 ? 1 : 0.9, 1, 1, 0.97, 0.9],
  );

  const rotateX = useTransform(
    progress,
    [enterStart, enterEnd, exitStart, end, exitEnd],
    [index === 0 ? 0 : 5, 0, 0, -2, -5],
  );

  const opacity = useTransform(
    progress,
    [enterStart, enterEnd, exitStart, end, exitEnd],
    [index === 0 ? 1 : 0, 1, 1, 0.85, 0],
  );

  const blur = useTransform(
    progress,
    [enterStart, enterEnd, exitStart, end, exitEnd],
    [index === 0 ? "0px" : "8px", "0px", "0px", "1px", "8px"],
  );

  const filter = useTransform(blur, (value) => `blur(${value})`);

  const cardProgress = useTransform(progress, [start, end], ["0%", "100%"]);

  return (
    <motion.div
      style={{
        y,
        scale,
        rotateX,
        opacity,
        filter,
        zIndex: total - index,
        transformPerspective: 1200,
      }}
      className="absolute inset-0 flex items-center justify-center px-5 xl:px-8 2xl:px-10"
    >
      {/* ========================================================
          CARD
      ======================================================== */}

      <div className="relative h-[min(82vh,760px)] w-full max-w-[850px]">
        {/* Shadow */}

        <div
          className="absolute inset-0 translate-y-5 scale-[0.96] rounded-[2rem] opacity-30 blur-2xl"
          style={{
            backgroundColor: service.color,
          }}
        />

        {/* Main card */}

        <div
          className="relative h-full w-full overflow-hidden rounded-[2rem] border shadow-[0_30px_100px_rgba(40,33,38,0.35)]"
          style={{
            backgroundColor: service.color,

            borderColor: `${service.accent}45`,
          }}
        >
          {/* ====================================================
              DECORATIVE ELEMENTS
          ==================================================== */}

          <div
            className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border"
            style={{
              borderColor: `${service.accent}20`,
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-60 -right-20 h-[600px] w-[600px] rounded-full border"
            style={{
              borderColor: `${service.accent}15`,
            }}
          />

          <div
            className="pointer-events-none absolute right-[15%] top-[20%] h-40 w-40 rounded-full blur-[80px]"
            style={{
              backgroundColor: service.accent,

              opacity: 0.22,
            }}
          />

          {/* Grid */}

          <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(
                    ${service.accent} 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    ${service.accent} 1px,
                    transparent 1px
                  )
                `,

                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* ====================================================
              MAIN VERTICAL CONTENT
          ==================================================== */}

          <div className="relative z-10 flex h-full flex-col p-6 sm:p-8 md:p-9 xl:p-10">
            {/* ==================================================
                SERVICE HEADING
            ================================================== */}

            <div className="flex shrink-0 flex-col items-center text-center relative -top-5">
              {/* Main service heading */}

              <h3
                className="
                  whitespace-nowrap
                  font-display
                  text-[clamp(2rem,4vw,4rem)]
                  font-extrabold
                  leading-none
                  tracking-tight
                  text-[#F7F3EC]
                  font-poppins
                "
              >
                {service.name}
              </h3>

              {/* Accent line */}

              <div
                className="mt-5 h-1 w-56 rounded-full"
                style={{
                  backgroundColor: service.accent,
                }}
              />
            </div>

            {/* ==================================================
                IMAGE
            ================================================== */}

            <div className="relative mt-6 min-h-0 flex-1 -top-5">
              <div
                className="relative h-full w-full overflow-hidden rounded-[1.5rem] border"
                style={{
                  borderColor: `${service.accent}35`,
                }}
              >
                {/* Image */}

                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1536px) 45vw, (min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />

                {/* Image gradient */}

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(
                        180deg,
                        ${service.color}05 0%,
                        transparent 50%,
                        ${service.color}45 100%
                      )
                    `,
                  }}
                />

                {/* Image label */}

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-5 sm:right-5 sm:top-5">
                  <span
                    className="group rounded-full border px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] backdrop-blur-md
      transition-all duration-300 ease-out
      hover:-translate-y-0.5
      hover:scale-105
      hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
      sm:text-[9px]"
                    style={{
                      color: service.accent,
                      backgroundColor: `${service.color}90`,
                      borderColor: `${service.accent}35`,
                      boxShadow: `0 0 0 rgba(0,0,0,0)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 18px ${service.accent}55`;
                      e.currentTarget.style.borderColor = `${service.accent}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                      e.currentTarget.style.borderColor = `${service.accent}35`;
                    }}
                  >
                    {service.category}
                  </span>
                </div>
              </div>
            </div>

            {/* ==================================================
                DESCRIPTION BELOW IMAGE
            ================================================== */}

            <div className="mt-5 shrink-0 relative -top-5">
              {/* Tagline */}

              <p
                className="text-center text-sm font-medium leading-relaxed sm:text-[15px] font-poppins"
                style={{
                  color: service.accent,
                }}
              >
                {service.tagline}
              </p>

              {/* Features */}

              <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
                {service.features.slice(0, 3).map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{
                        backgroundColor: service.accent,
                      }}
                    />

                    <span className="text-[12px] text-white/45 font-raleway font-bold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={`#${service.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="
    group absolute bottom-3 right-3
    inline-flex items-center gap-2
    overflow-hidden
    rounded-full
    border border-[#D6B77A]/40
    bg-[#F7F3EC]/95
    px-6 py-3
    font-poppins text-xs font-semibold
    text-[#282126]
    shadow-[0_8px_30px_rgba(0,0,0,0.18)]
    backdrop-blur-xl
    transition-all duration-500 ease-out

    hover:-translate-y-1
    hover:scale-[1.03]
    hover:border-[#D6B77A]/80
    hover:bg-[#FFF9EC]
    hover:text-[#6F5630]
    hover:shadow-[0_12px_35px_rgba(214,183,122,0.25)]
  "
            >
              {/* Premium shine */}

              <span
                className="
      pointer-events-none absolute
      -left-[120%] top-0
      h-full w-[70%]
      rotate-[18deg]
      bg-gradient-to-r
      from-transparent
      via-white/70
      to-transparent
      opacity-0
      transition-all duration-700
      group-hover:left-[130%]
      group-hover:opacity-100
    "
              />

              {/* Gold glow */}

              <span
                className="
      pointer-events-none absolute inset-0
      rounded-full
      opacity-0
      shadow-[inset_0_0_20px_rgba(214,183,122,0.18)]
      transition-opacity duration-500
      group-hover:opacity-100
    "
              />

              <span className="relative z-10">Explore</span>

              <ArrowUpRight
                className="
      relative z-10
      h-4 w-4
      transition-all duration-500 ease-out
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
      group-hover:rotate-6
    "
              />
            </a>
          </div>

          {/* ====================================================
              CARD PROGRESS
          ==================================================== */}

          <motion.div
            className="absolute bottom-0 left-0 h-[3px]"
            style={{
              backgroundColor: service.accent,

              width: cardProgress,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ================================================================
   PROGRESS DOT
================================================================ */

function ReelProgress({ progress, start, end, color }) {
  const scale = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [1, 1.8, 1],
  );

  const opacity = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [0.35, 1, 0.35],
  );

  return (
    <motion.div
      style={{
        scale,
        opacity,
        backgroundColor: color,

        boxShadow: `0 0 12px ${color}`,
      }}
      className="h-2.5 w-2.5 rounded-full"
    />
  );
}

/* ================================================================
   MOBILE SERVICE CARD
================================================================ */

function MobileServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="relative min-h-screen p-5 sm:p-8"
      style={{
        backgroundColor: service.color,
      }}
    >
      <div
        className="relative min-h-[calc(100vh-2.5rem)] overflow-hidden rounded-[2rem] border"
        style={{
          borderColor: `${service.accent}45`,
        }}
      >
        {/* Background circle */}

        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border"
          style={{
            borderColor: `${service.accent}20`,
          }}
        />

        {/* Glow */}

        <div
          className="pointer-events-none absolute right-[10%] top-[25%] h-40 w-40 rounded-full blur-[80px]"
          style={{
            backgroundColor: service.accent,

            opacity: 0.2,
          }}
        />

        {/* Grid */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(
                  ${service.accent} 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  ${service.accent} 1px,
                  transparent 1px
                )
              `,

              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Content */}

        <div className="relative flex min-h-[calc(100vh-2.5rem)] flex-col p-6 sm:p-8">
          {/* Header */}

          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border"
                style={{
                  backgroundColor: `${service.accent}15`,

                  borderColor: `${service.accent}35`,

                  color: service.accent,
                }}
              >
                <Icon className="h-6 w-6" />
              </div>

              <div>
                <p
                  className="font-mono text-[9px] uppercase tracking-[0.3em]"
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
              className="text-6xl font-bold leading-none"
              style={{
                color: service.accent,

                opacity: 0.13,
              }}
            >
              {service.number}
            </div>
          </div>

          {/* ==================================================
              MOBILE SERVICE CONTENT
          ================================================== */}

          <div className="flex-1 py-10">
            {/* Main heading */}

            <div className="text-center">
              <div
                className="mx-auto mb-5 h-1 w-12 rounded-full"
                style={{
                  backgroundColor: service.accent,
                }}
              />

              <h3
                className="
                  whitespace-nowrap
                  font-display
                  text-[clamp(2rem,9vw,3.5rem)]
                  font-extrabold
                  leading-none
                  tracking-tight
                  text-[#F7F3EC]
                "
              >
                {service.name}
              </h3>
            </div>

            {/* Image */}

            <div className="relative mt-8 h-64 overflow-hidden rounded-3xl border sm:h-80">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 1023px) 100vw"
                className="object-cover object-center"
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(
                      180deg,
                      transparent 40%,
                      ${service.color}cc 100%
                    )
                  `,
                }}
              />
            </div>

            {/* Description */}

            <div className="mt-7 text-center">
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: service.accent,
                }}
              >
                {service.tagline}
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/50">
                {service.description}
              </p>
            </div>

            {/* Capabilities */}

            <div
              className="mt-8 rounded-3xl border p-5"
              style={{
                backgroundColor: `${service.accent}10`,

                borderColor: `${service.accent}30`,
              }}
            >
              <div
                className="mb-5 font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{
                  color: service.accent,
                }}
              >
                System Capabilities
              </div>

              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{
                        color: service.accent,
                      }}
                    />

                    <span className="text-sm text-[#F7F3EC]/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: service.accent,
                }}
              />

              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{
                  color: service.accent,
                }}
              >
                Active System
              </span>
            </div>

            <a
              href="#estimator"
              className="inline-flex items-center gap-2 rounded-full bg-[#F7F3EC] px-6 py-3 text-xs font-bold text-[#282126]"
            >
              Explore
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
