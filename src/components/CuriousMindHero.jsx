"use client";

export default function CuriousMindHero() {
  return (
    <main className="relative -mt-30 overflow-hidden bg-transparent text-[#24133D]">
      {/* Perspective Grid */}
      <div className="absolute inset-0 [perspective:900px]">
        <div
          className="absolute inset-[-35%] opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "rotateX(58deg) scale(1.25)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Soft Lavender Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-300/25 blur-[130px]" />

      {/* Top Purple Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-fuchsia-200/30 blur-[100px]" />

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="flex flex-col items-center">
          {/* Main Heading */}
          <h1 className="text-center text-[clamp(85px,13vw,185px)] font-bold leading-[0.78] tracking-[-0.075em]">
            <span className="block text-[#24133D] font-bingo-italic tracking-wide">Curious</span>

            <span
              className="
                relative block
                bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500
                bg-clip-text text-transparent font-bingo-regular tracking-wide -mt-5
              "
            >
              Minds?
            </span>
          </h1>

          {/* CTA */}
          <a
            href="#project"
            className="
              group relative mt-20 flex h-14 w-[260px]
              items-center overflow-hidden rounded-full
              border border-violet-300
              bg-white/60
              shadow-[0_8px_30px_rgba(109,40,217,0.08)]
              backdrop-blur-md
              transition-all duration-500
              hover:scale-[1.035]
              hover:border-violet-400
              hover:bg-white/80
              hover:shadow-[0_12px_45px_rgba(109,40,217,0.18)]
              active:scale-[0.98]
            "
          >
            {/* Animated Circle */}
            <span
              className="
                absolute left-1 top-1/2
                h-12 w-12 -translate-y-1/2
                rounded-full
                bg-gradient-to-br from-violet-500 to-purple-600
                shadow-[0_0_20px_rgba(139,92,246,0.3)]
                transition-all duration-1500
                ease-[cubic-bezier(.16,1,.3,1)]
                group-hover:left-[calc(100%-52px)]
                group-hover:from-violet-400
                group-hover:to-fuchsia-400
              "
            />

            {/* CTA Text */}
            <span
              className="
                relative z-10 ml-12
                text-[13px] font-semibold
                tracking-[0.12em] text-violet-950
                transition-all duration-500
                group-hover:-translate-x-3
                font-raleway
                font-bold 
                pl-1
              "
            >
              START YOUR PROJECT
            </span>

            {/* Animated Arrow */}
            <span
              className="
                relative z-10 ml-2 flex h-7 w-7
                items-center justify-center
                overflow-hidden text-lg text-violet-700
                transition-colors duration-500
                group-hover:text-violet-950
              "
            >
              <span
                className="
                  transition-transform duration-500
                  ease-out
                  group-hover:translate-x-7
                  group-hover:-translate-y-7
                "
              >
                ↗
              </span>

              <span
                className="
                  absolute -translate-x-7 translate-y-7
                  transition-transform duration-500
                  ease-out
                  group-hover:translate-x-0
                  group-hover:translate-y-0
                "
              >
                ↗
              </span>
            </span>
          </a>
        </div>
      </section>

      {/* Bottom Decorative Orb */}
      <div
        className="
          pointer-events-none absolute -bottom-20 -right-16
          h-44 w-44 rounded-full
          bg-gradient-to-br from-violet-400 to-fuchsia-300
          opacity-35 blur-sm
          shadow-[0_0_100px_rgba(139,92,246,0.35)]
        "
      />
    </main>
  );
}
