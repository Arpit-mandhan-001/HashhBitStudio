"use client";

import InteractiveCanvas from "@/components/InteractiveCanvas";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesVisualMatrix from "@/components/ServicesVisualMatrix";
import InteractiveWorkShowcase from "@/components/InteractiveWorkShowcase";
import TechStackVisualizer from "@/components/TechStackVisualizer";
import InteractiveProjectEstimator from "@/components/InteractiveProjectEstimator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F7F3EC] text-[#282126] selection:bg-[#B8A6C9] selection:text-[#282126]">
      {/* Background Interactive Kinetic Canvas with mouse particle reactions */}
      <InteractiveCanvas />

      {/* Smooth Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Top Left Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Interactive Core Services Showcase (Web Solutions, Marketing, AI, Brand) */}
      <ServicesVisualMatrix />

      {/* Visual Work Reel & Proof of Scale */}
      <InteractiveWorkShowcase />

      {/* Modern Tech Stack & Modular Architecture Visualizer */}
      <TechStackVisualizer />

      {/* Interactive Scope & Project Configurator */}
      <InteractiveProjectEstimator />

      {/* Luxury Footer with Active Palette Matrix */}
      <Footer />
    </main>
  );
}
