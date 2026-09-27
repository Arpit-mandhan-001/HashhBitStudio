"use client";

import Link from "next/link";

/* =========================================================
   ROTATING TEXT
   Each character rotates individually on parent hover.
========================================================= */

const RotateText = ({
  children,
  className = "",
  delay = 0,
}) => {
  const text = String(children);

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="
            inline-block
            transform-gpu
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:rotate-[360deg]
            group-hover:-translate-y-0.5
          "
          style={{
            transitionDelay: `${delay + index * 45}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

/* =========================================================
   SOCIAL ICON
========================================================= */

const SocialIcon = ({ children, href = "#" }) => {
  return (
    <Link
      href={href}
      className="
        flex h-12 w-12 shrink-0 items-center justify-center
        rounded-full
        border border-white/20
        text-white/80
        transition-all duration-300
        hover:border-white
        hover:bg-white
        hover:text-black
      "
    >
      {children}
    </Link>
  );
};

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#101010] text-white">

      {/* =====================================================
          TOP SECTION
      ===================================================== */}

      <div className="px-5 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-14 md:px-12 lg:px-24 lg:pb-10 lg:pt-10">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}
          <div className="min-w-0">

            {/* Animated small text */}
            <span className="group inline-flex">
              <RotateText
                className="
                  mb-3
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-white
                "
              >
                * Get in touch
              </RotateText>
            </span>

            <h2
  className="
  font-bingo-italic
  pl-2
  tracking-[0.015em]
    text-4xl
    font-light
    sm:text-6xl
    md:text-7xl
    lg:text-[86px]
    lg:leading-[0.95]
    bg-gradient-to-r
    from-[#5B3A8C]
    via-[#7956A8]
    to-[#9B83B8]
    bg-clip-text
    text-transparent
  "
>
  LET’S CONNECT
</h2>



          </div>

          {/* CONTACT BUTTON */}
          <Link
            href="/contact"
            className="
              group
              flex
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-white/70
              px-6
              py-3
              text-sm
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              sm:px-7
            "
          >
            <span>
              Contact Us
            </span>

            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/60
                text-lg
                transition-transform
                duration-300
                group-hover:rotate-45
                group-hover:border-black
              "
            >
              ↗
            </span>
          </Link>

        </div>
      </div>


      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="mx-5 border-t border-white/20 sm:mx-10 md:mx-12 lg:mx-24" />


      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}

      <div
        className="
          grid
          gap-12
          px-5
          py-14
          sm:gap-14
          sm:px-10
          sm:py-16
          md:px-12
          lg:grid-cols-[1.7fr_1fr_1fr_1.4fr]
          lg:gap-10
          lg:px-24
          lg:py-10
        "
      >

        {/* ===================================================
            BRAND
        =================================================== */}

        <div className="min-w-0">

          {/* LOGO */}
          <Link
            href="/"
            className="
              group
              flex
              items-center
              gap-3
              sm:gap-4
            "
          >

            {/* Logo */}
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">

              <div
                className="
                  h-9
                  w-7
                  rotate-45
                  rounded-[5px]
                  border-[4px]
                  border-white
                  transition-transform
                  duration-500
                  group-hover:rotate-[135deg]
                "
              />

              <div
                className="
                  absolute
                  right-[6px]
                  top-[3px]
                  h-2
                  w-2
                  bg-white
                "
              />

            </div>

            <span className="text-lg font-bold tracking-tight sm:text-xl">
              Hashhbit Studio
            </span>

          </Link>


          {/* DESCRIPTION */}

          <div className="group mt-8 max-w-[380px] text-sm leading-6 sm:text-base">
              We place great emphasis on designers, artists,
              <br/>
            and brands.
          </div>


          {/* =================================================
              SOCIALS
          ================================================= */}

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">

            {/* YouTube */}
            <SocialIcon href="#">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 15L15 12L10 9V15Z"
                  fill="currentColor"
                />

                <path
                  d="
                    M21 12
                    C21 12 21 16.5 20.4 18.2
                    C20.1 19.1 19.4 19.8 18.5 20.1
                    C16.8 20.7 12 20.7 12 20.7
                    C12 20.7 7.2 20.7 5.5 20.1
                    C4.6 19.8 3.9 19.1 3.6 18.2
                    C3 16.5 3 12 3 12
                    C3 12 3 7.5 3.6 5.8
                    C3.9 4.9 4.6 4.2 5.5 3.9
                    C7.2 3.3 12 3.3 12 3.3
                    C12 3.3 16.8 3.3 18.5 3.9
                    C19.4 4.2 20.1 4.9 20.4 5.8
                    C21 7.5 21 12 21 12Z
                  "
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </SocialIcon>


            {/* Instagram */}
            <SocialIcon href="#">
              <span className="text-lg">
                ◎
              </span>
            </SocialIcon>


            {/* LinkedIn */}
            <SocialIcon href="#">
              <span className="text-lg font-semibold">
                in
              </span>
            </SocialIcon>


            {/* Facebook */}
            <SocialIcon href="#">
              <span className="text-lg font-semibold">
                f
              </span>
            </SocialIcon>

          </div>

        </div>


        {/* ===================================================
            COMPANY
        =================================================== */}

        <div className="min-w-0">

          {/* Heading */}
          <div className="group inline-flex">
              Company
          </div>


          {/* Links */}
          <nav className="mt-6 flex flex-col gap-5 sm:mt-7 sm:gap-6">

            <Link
              href="/"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>
                Home
              </RotateText>
            </Link>


            <Link
              href="/about"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>
                About Us
              </RotateText>
            </Link>


            <Link
              href="/services"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>
                Our Services
              </RotateText>
            </Link>

          </nav>

        </div>


        {/* ===================================================
            USEFUL LINKS
        =================================================== */}

        <div className="min-w-0">

          {/* Heading */}
          <div className="group inline-flex">
              Useful Links
          </div>


          {/* Links */}
          <nav className="mt-6 flex flex-col gap-5 sm:mt-7 sm:gap-6">

            <Link
              href="/portfolio"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>
                Portfolio
              </RotateText>
            </Link>


            <Link
              href="/blog"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>
                Blog
              </RotateText>
            </Link>


            <Link
              href="/contact"
              className="
                group
                w-fit
                footer-link
              "
            >
              <RotateText>
                Contact Us
              </RotateText>
            </Link>

          </nav>

        </div>


        {/* ===================================================
            CONTACT
        =================================================== */}

        <div className="min-w-0">

          {/* Heading */}
          <div className="group inline-flex">
              Contact Us
          </div>


          <div className="mt-6 flex flex-col gap-6 sm:mt-7 sm:gap-7">

            {/* EMAIL */}

            <div>

              <div className="group inline-flex">
                <RotateText>
                  Email Us
                </RotateText>
              </div>


              <a
                href="mailto:monkartlabs@gmail.com"
                className="
                  group
                  mt-2
                  block
                  w-fit
                  max-w-full
                  break-all
                  text-[16px]
                  font-medium
                  transition-colors
                  hover:text-[#aaa]
                "
              >
                  hashhbit@gmail.com
              </a>

            </div>


            {/* PHONE */}

            <div>

              <div className="group inline-flex">
                <RotateText className="text-[#9299a6]">
                  Call Us
                </RotateText>
              </div>


              <div className="mt-3 flex flex-col gap-3">

                <a
                  href="tel:+919625995855"
                  className="
                    group
                    w-fit
                    footer-link
                  "
                >
                    🇮🇳 +91 9999999999
                </a>


                <a
                  href="tel:+14034023414"
                  className="
                    group
                    w-fit
                    footer-link
                  "
                >
                    🇨🇦 +1 (403) 404-4053
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM DIVIDER
      ===================================================== */}

      <div className="mx-5 border-t border-white/10 sm:mx-10 md:mx-12 lg:mx-24" />


      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          gap-5
          px-5
          py-7
          sm:px-10
          sm:py-8
          md:px-12
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-24
        "
      >

        <div className="group min-w-0">
          <RotateText className="text-sm text-[#737b89]">
            Copyright © 2026 Hashhbit Studio. All rights reserved.
          </RotateText>
        </div>


        <div
          className="
            h-5
            w-5
            shrink-0
            rounded-full
            bg-blue-600
          "
        />

      </div>

    </footer>
  );
}
