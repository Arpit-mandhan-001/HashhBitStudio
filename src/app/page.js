"use client";

import InteractiveCanvas from "@/components/InteractiveCanvas";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesVisualMatrix from "@/components/ServicesVisualMatrix";
import InteractiveWorkShowcase from "@/components/WhyChooseUs";
import TechStackVisualizer from "@/components/TechStackVisualizer";
import InteractiveProjectEstimator from "@/components/InteractiveProjectEstimator";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Blogs from "@/components/Blogs";
import CuriousMindHero from "@/components/CuriousMindHero";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUS";

export default function Home() {
  return (
    <main className="relative min-h-screen text-[#282126] selection:bg-[#B8A6C9] selection:text-[#282126]">
      {/* Background Interactive Kinetic Canvas with mouse particle reactions */}
      {/* <InteractiveCanvas /> */}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>

      {/* Optional overlay */}
      <div className="fixed inset-0 bg-[#F7F3EC]/60 -z-10" />

      {/* Smooth Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Top Left Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* {Service} */}
      <ServicesVisualMatrix />

      {/* Visual Work Reel & Proof of Scale */}
      <WhyChooseUs />
      <CuriousMindHero />
      <AboutUs />

      {/* Modern Tech Stack & Modular Architecture Visualizer */}
      {/* <TechStackVisualizer /> */}

      {/* Interactive Scope & Project Configurator */}
      {/* <InteractiveProjectEstimator /> */}

      <Testimonials />
      <Blogs />
      <Footer />

      <div className="w-full min-h-screen ">
        <div className="flex items-center justify-center text-4xl font-bingo-italic">
          abcdefghijklmnopqrstuvwxyz
        </div>
        <div className="flex items-center justify-center text-4xl font-bingo-regular">
          abcdefghijklmnopqrstuvwxyz
        </div>
        <div className="flex items-center justify-center text-4xl font-raleway">
          abcdefghijklmnopqrstuvwxyz
        </div>
        <div className="flex items-center justify-center text-4xl font-poppins">
          abcdefghijklmnopqrstuvwxyz
        </div>
        <div className="flex items-center justify-center text-4xl font-sora ">
          abcdefghijklmnopqrstuvwxyz
        </div>
        <div className="flex items-center justify-center text-4xl font-inter ">
          abcdefghijklmnopqrstuvwxyz
        </div>
      </div>
    </main>
  );
}
