import React from "react"

const blogs = [
  {
    id: 1,
    title: "The Main Role of AI in Our Digital Marketing",
    tags: ["AI", "Marketing", "Technology"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    title: "Why 3D Animation Is the Future of Brand Storytelling",
    tags: ["3D Animation", "Creative", "Branding"],
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    title: "UI/UX Design Trends Shaping User Experience in 2026",
    tags: ["UI/UX", "Design", "Product"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
  },
]

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-500 ease-out"
    >
      <path
        d="M5 19L19 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M8 5H19V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Blogs = () => {
  return (
    <section className="relative overflow-hidden bg-[#fdfaf5] py-20 text-zinc-950 sm:py-20 lg:py-18 mb-10 bg-transparent">

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#c4b5fd]/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-6
            border-b
            border-zinc-950/10
            pb-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* Title */}

          <div className="group relative w-fit">

            <h2
              className="
                text-[30px]
                font-semibold
                leading-none
                tracking-[-0.04em]
                text-zinc-950
                sm:text-[38px]
                lg:text-[42px]
              "
            >
              BLOGS
            </h2>

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-px
                w-0
                bg-zinc-950
                transition-all
                duration-700
                ease-out
                group-hover:w-full
              "
            />

          </div>


          {/* Header actions */}

          <div className="flex items-center gap-1">

            {/* Discover */}

            <button
              type="button"
              className="
                group
                relative
                overflow-hidden
                rounded-full
                border
                border-zinc-950/15
                bg-white/40
                px-6
                py-3
                text-[13px]
                font-medium
                tracking-wide
                text-zinc-950
                backdrop-blur-md
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:border-[#3B1F5C]
                hover:bg-[#3B1F5C]
                hover:text-white
                hover:shadow-[0_15px_40px_rgba(59,31,92,0.18)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#3B1F5C]
                focus-visible:ring-offset-2
              "
            >

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-[100%]
                  w-[60%]
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  transition-all
                  duration-700
                  ease-out
                  group-hover:left-[150%]
                "
              />

              <span className="relative z-10">
                Discover All
              </span>

            </button>


            {/* Header arrow */}

            <button
              type="button"
              aria-label="Discover all blogs"
              className="
                group
                relative
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-zinc-950/15
                bg-transparent
                text-zinc-950
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:border-[#3B1F5C]
                hover:bg-[#3B1F5C]
                hover:text-white
                hover:shadow-[0_15px_35px_rgba(59,31,92,0.2)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#3B1F5C]
                focus-visible:ring-offset-2
              "
            >

              <span
                className="
                  relative
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              >
                <ArrowIcon />
              </span>

            </button>

          </div>
        </div>


        {/* ===================================================
            BLOG GRID
        ==================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-x-8
            gap-y-16
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="
                group
                relative
                cursor-pointer
              "
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-zinc-950/10
                  bg-zinc-100
                  transition-all
                  duration-700
                  ease-out
                  group-hover:-translate-y-2
                  group-hover:border-zinc-950/20
                  group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                "
              >

                <div
                  className="
                    relative
                    aspect-[1.12/1]
                    overflow-hidden
                  "
                >

                  {/* Image */}

                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      scale-[1.01]
                      transition-transform
                      duration-[1200ms]
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:scale-110
                    "
                  />


                  {/* Purple glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-64
                      w-64
                      rounded-full
                      bg-[#c4b5fd]/40
                      blur-[80px]
                      opacity-0
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  />


                  {/* Shine */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-[120%]
                      w-[60%]
                      skew-x-[-20deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/30
                      to-transparent
                      transition-all
                      duration-[1200ms]
                      ease-out
                      group-hover:left-[150%]
                    "
                  />


                  {/* =================================================
                      MULTIPLE TAGS
                  ================================================== */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      max-w-[calc(100%-40px)]
                      flex-wrap
                      gap-2
                      opacity-0
                      -translate-y-2
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >

                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/30
                          bg-black/25
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.12em]
                          text-white
                          backdrop-blur-md
                        "
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </div>


              {/* =================================================
                  CONTENT
              ================================================== */}

              <div
                className="
                  mt-7
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >

                {/* Title */}

                <h3
                  className="
                    max-w-[430px]
                    text-[21px]
                    font-medium
                    leading-[1.2]
                    tracking-[-0.025em]
                    text-zinc-950
                    transition-all
                    duration-500
                    ease-out
                    sm:text-[22px]
                    lg:text-[23px]
                    group-hover:translate-x-1
                  "
                >
                  {blog.title}
                </h3>


                {/* Arrow */}

                <div
                  className="
                    relative
                    mt-1
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-zinc-950/20
                    text-zinc-950
                    transition-all
                    duration-500
                    ease-out
                    group-hover:scale-110
                    group-hover:border-[#3B1F5C]
                    group-hover:bg-[#3B1F5C]
                    group-hover:text-white
                    group-hover:shadow-[0_10px_30px_rgba(59,31,92,0.22)]
                  "
                >

                  <span
                    className="
                      relative
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowIcon />
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* ===================================================
            PAGINATION
        ==================================================== */}

        {/* <div className="mt-16 flex items-center justify-center gap-2">

          <span
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-[#163eea]
              shadow-[0_0_15px_rgba(22,62,234,0.35)]
            "
          />

          <span className="h-1.5 w-1.5 rounded-full bg-zinc-950/15" />

          <span className="h-1.5 w-1.5 rounded-full bg-zinc-950/15" />

        </div> */}

      </div>
    </section>
  )
}

export default Blogs
