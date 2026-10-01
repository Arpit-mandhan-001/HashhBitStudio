"use client";

import Link from "next/link";
import { Asterisk, ArrowUpRight, Play, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: "🧸",
    title: "Innovation-First",
    description: "Technology thinking that solves real business challenges.",
  },
  {
    icon: "🎉",
    title: "All Under One Roof",
    description: "Web, Apps, AI, AR/VR, 3D & Marketing, all in one team.",
  },
];

export function AboutUs() {
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  });

  // Subtle cinematic parallax
  const videoY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.94, 1, 0.94],
  );
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.2, 0.8, 0.2],
  );

  return (
    <section className="overflow-hidden bg-[#FAF8FF] px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <div className="inline-flex items-center font-sora gap-2 rounded-full border border-[#B8A6C9]/40 bg-[#E8DED2] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#4B2E63]">
          <Sparkles className="h-3.5 w-3.5 text-[#B69A68]" />
          About Us
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 h-px w-full origin-left bg-[#282126]/10"
        />

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgba(40,33,38,0.35)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Team collaborating around laptops at a wooden desk"
                draggable={false}
                className="
                  h-[420px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:scale-105
                  md:h-[520px]
                "
              />
            </div>

            <motion.span
              aria-hidden="true"
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-0
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                translate-x-1/2
                rounded-full
                bg-[#4C65BF]
                ring-4
                ring-[#F7F3EC]
              "
            />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2
              className="
              bg-gradient-to-r
    from-[#17113D]
    via-[#6246E5]
    to-[#B8A5FF]
    bg-clip-text
    font-sora
    text-3xl
    font-black
    uppercase
    leading-[1.05]
    tracking-[-0.06em]
    text-transparent
    sm:text-4xl
    md:text-5xl
              "
            >
              Building the future
              <br />
              of business.
            </h2>

            <p className="mt-6 max-w-lg font-inter font-[900] text-base leading-relaxed text-[#282126]/60 md:text-lg">
              From websites and mobile apps to AI, immersive technologies,
              branding, and digital marketing. We help businesses innovate,
              connect, and grow through technology.
            </p>

            {/* Feature highlights */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group flex gap-4"
                >
                  <span
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FBD9BE]
                      text-xl
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:-translate-y-1
                      group-hover:scale-110
                      group-hover:shadow-[0_10px_30px_rgba(251,217,190,0.6)]
                    "
                  >
                    {item.icon}
                  </span>

                  <div>
                    <h3 className="font-sora text-sm font-extrabold uppercase -tracking-wide text-[#17113D]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 font-inter text-sm font-semibold leading-relaxed text-[#282126]/55">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/about"
                className="
                justify-center
                items-center
                inline-flex
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  border
                  border-[#282126]
                  px-5
                  py-3
                  font-sora
                  text-sm
                  font-bold
                  text-[#282126]
                  transition-colors
                  duration-500
                  hover:text-[#F7F3EC]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    origin-left
                    scale-x-0
                    bg-[#282126]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                <span className="relative">Know More</span>
                <ArrowUpRight
                  className="
                    ml-2
                    h-4
                    w-4
                    transition-transform
                    duration-500
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          PREMIUM VIDEO SECTION
      ========================================================= */}

      <motion.div
        ref={videoRef}
        style={{ scale: videoScale }}
        className="relative mx-auto mt-24 w-full max-w-7xl"
      >
        {/* Animated ambient glow */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="
            pointer-events-none
            absolute
            -inset-12
            rounded-[60px]
            bg-gradient-to-r
            from-[#563477]/30
            via-[#C9A8FF]/25
            to-[#4C65BF]/20
            blur-[70px]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            pointer-events-none
            absolute
            -inset-5
            rounded-[45px]
            bg-gradient-to-br
            from-[#563477]/15
            via-transparent
            to-[#4C65BF]/15
            blur-2xl
          "
        />

        {/* Video wrapper */}
        <motion.div
          style={{ y: videoY }}
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative"
        >
          {/* Top floating label */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="
              absolute
              -top-5
              left-6
              z-20
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-[#16121A]/80
              px-4
              py-2
              shadow-[0_10px_40px_rgba(0,0,0,0.2)]
              backdrop-blur-xl
              sm:left-10
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A8FF] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C9A8FF]" />
            </span>

            <span className="font-bingo-regular text-[14px] font-bold uppercase tracking-[0.20em] text-white/80">
              Our Story
            </span>
          </motion.div>

          {/* Main video frame */}
          <div
            className="
              group/video
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/20
              bg-[#09070B]
              shadow-[0_40px_120px_rgba(20,10,30,0.32)]
              sm:rounded-[36px]
              lg:rounded-[44px]
            "
          >
            {/* Video */}
            <video
              src="/videos/video1.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="
                block
                aspect-video
                h-auto
                w-full
                object-cover
                transition-transform
                duration-[1200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover/video:scale-[1.025]
              "
            >
              Your browser does not support the video tag.
            </video>

            {/* Cinematic gradient */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                via-black/5
                to-white/[0.08]
              "
            />

            {/* Purple cinematic light */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[#9C6BFF]/20
                blur-[90px]
                transition-opacity
                duration-700
                group-hover/video:opacity-80
              "
            />

            {/* Bottom cinematic gradient */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-32
                bg-gradient-to-t
                from-black/30
                to-transparent
              "
            />

            {/* Play button visual */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                flex
                h-16
                w-16
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/10
                text-white
                opacity-70
                backdrop-blur-md
                transition-all
                duration-500
                group-hover/video:scale-110
                group-hover/video:bg-white/20
                group-hover/video:opacity-100
              "
            >
              <Play className="ml-1 h-5 w-5 fill-white" strokeWidth={1.5} />
            </div>

            {/* Bottom left label */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-5
                left-5
                hidden
                sm:block
              "
            >
              <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                IDEAS • DESIGN • TECHNOLOGY • GROWTH
              </p>
            </div>

            {/* Bottom right indicator */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-5
                right-5
                hidden
                items-center
                gap-2
                sm:flex
              "
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C9A8FF]" />

              <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                Watch
              </span>
            </div>

            {/* Premium inner border */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[28px]
                border
                border-white/[0.08]
                sm:rounded-[36px]
                lg:rounded-[44px]
              "
            />
          </div>
        </motion.div>

        {/* Decorative floating line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.7,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto
            mt-8
            h-px
            w-24
            origin-center
            bg-gradient-to-r
            from-transparent
            via-[#563477]/50
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}

export default AboutUs;
