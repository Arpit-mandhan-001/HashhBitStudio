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

      {/* Optional overlay */}
      <div className="fixed inset-0 bg-[#F7F3EC]/60 -z-10" />

      {/* Smooth Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Top Left Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />


      <AboutUs />
      {/* {Service} */}
      <ServicesVisualMatrix />
      {/* Visual Work Reel & Proof of Scale */}
      <WhyChooseUs />
      <CuriousMindHero />

      {/* Modern Tech Stack & Modular Architecture Visualizer */}
      {/* <TechStackVisualizer /> */}

      {/* Interactive Scope & Project Configurator */}
      {/* <InteractiveProjectEstimator /> */}

      <Testimonials />
      <Blogs />
      <Footer />
      
    </main>
  );
}
