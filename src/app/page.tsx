import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

export default function page() {
  return (
    <div className="px-4 md:px-0 space-y-8 md:space-y-10 w-full md:max-w-3xl mx-auto">
      <HeroSection />
      <Projects />
      <About />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
