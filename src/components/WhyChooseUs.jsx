import {
  Asterisk,
  TrendingUp,
  SlidersHorizontal,
  Users,
  MessagesSquare,
  Wallet,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import { ImageColumn } from "./ImageColumn";

const leftFeatures = [
  {
    number: "01",
    title: "Results-Driven Approach",
    description: "We focus on strategies that don't just look good.",
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "Customized Solutions",
    description: "Every brand is different. We tailor every campaign.",
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Full-Service Team",
    description: "From content creation to paid ads and SEO.",
    icon: Users,
  },
];

const rightFeatures = [
  {
    number: "04",
    title: "Transparent Communication",
    description: "You're always in the loop with regular updates.",
    icon: MessagesSquare,
  },
  {
    number: "05",
    title: "Affordable & Scalable",
    description: "Whether you're a startup or a scaling enterprise.",
    icon: Wallet,
  },
  {
    number: "06",
    title: "Client-Centric Mindset",
    description:
      "Your success is our mission — we treat your brand as our own.",
    icon: LayoutGrid,
  },
];

const columnOneImages = [
  "https://picsum.photos/id/1011/640/800",
  "https://picsum.photos/id/1027/640/800",
  "https://picsum.photos/id/1005/640/800",
];

const columnTwoImages = [
  "https://picsum.photos/id/1012/640/800",
  "https://picsum.photos/id/1013/640/800",
  "https://picsum.photos/id/1025/640/800",
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8FF] px-6 py-24 text-ivory md:px-12 lg:px-20 -mt-10 ">
      

      <div className="relative mx-auto max-w-7xl">
        <div className="relative max-w-2xl md:-left-10">
          <div className="text-[#17113D] inline-flex items-center gap-2 rounded-full border border-[#B8A6C9]/40 bg-[#E8DED2] px-4 py-2 text-xs font-bold uppercase tracking-widest mb-5 -mt-5" >
            <Sparkles className="h-3.5 w-3.5 text-[#B69A68]" />
            Why Choose Us
          </div>

          <h2
            className="
              mt-1 mb-5 inline-block whitespace-nowrap
              text-[clamp(2rem,5vw,4rem)]
              font-semibold
              font-sora
              leading-[0.95]
              tracking-[-0.04em]
              bg-gradient-to-r
              from-[#17113D]
              via-[#6246E5]
              to-[#B8A5FF]
              bg-clip-text
              text-transparent
              drop-shadow-[0_8px_30px_rgba(147,112,190,0.18)]
              pb-3
            "
          >
            Turning Bold Ideas Into
            <br />
            <span className=" mt-1 inline-block font-sora">Digital Impact</span>
          </h2>
        </div>

        <div
          className="
            relative
            mt-16
            flex
            flex-col
            gap-10
            lg:mt-25
            lg:grid
            lg:grid-cols-[320px_1fr_320px]
            lg:gap-8
          "
        >
          {/* LEFT CARDS — 01, 02, 03 */}

          <div className="relative z-20 flex flex-col gap-8 lg:mt-0 font-">
            {leftFeatures.map((feature, i) => (
              <FeatureCard
                key={feature.number}
                {...feature}
                stackIndex={i}
                numberPosition="right"
                className={`
                  ${
                    i === 0
                      ? "lg:translate-x-6 lg:-translate-y-8"
                      : i === 1
                        ? "lg:translate-x-0"
                        : "lg:translate-x-6 lg:translate-y-8"
                  }
                `}
              />
            ))}
          </div>

          {/* IMAGE COLUMNS */}

          <div
            className="
              order-2
              -mt-4
              grid
              grid-cols-2
              gap-3
              lg:order-none
              lg:-mt-15
              lg:h-[650px]
              h-[500px]
              mb-10
              lg:mb-0
            "
          >
            <ImageColumn
              images={columnOneImages}
              direction="up"
              durationSeconds={12}
            />

            <ImageColumn
              images={columnTwoImages}
              direction="down"
              durationSeconds={12}
            />
          </div>

          {/* RIGHT CARDS — 04, 05, 06 */}

          <div className="order-3 relative z-20 flex flex-col gap-8 lg:order-none lg:mt-0">
            {rightFeatures.map((feature, i) => (
              <FeatureCard
                key={feature.number}
                {...feature}
                stackIndex={i}
                numberPositionClassName="right-6 lg:left-6"
                className={`
      ${
        i === 0
          ? "lg:-translate-x-6 lg:-translate-y-8"
          : i === 1
            ? "lg:translate-x-0"
            : "lg:-translate-x-6 lg:translate-y-8"
      }
    `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
