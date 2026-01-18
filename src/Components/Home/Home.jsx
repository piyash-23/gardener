import React from "react";
import { HeroSection } from "./Hero/Hero";
import AboutSection from "./About us/About";
import ServicesSection from "./Service/Service";
import ProjectsSection from "./Projects/ProjectSection";
import ChooseCommitmentSection from "./Whyus/WhyUs";

const Homie = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ChooseCommitmentSection />
    </div>
  );
};

export default Homie;
