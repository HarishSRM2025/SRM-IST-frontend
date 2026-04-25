import React from "react";
import "../css/Placement.css";

import Hero from "../Components/Placement/Hero";
import StatsSection from "../Components/Placement/StatsSection";
import WelcomeSection from "../Components/Placement/WelcomeSection";
import DeansMessage from "../Components/Placement/DeansMessage";
import Recruiters from "../Components/Placement/Recruiters";
import WhyChooseSRM from "../Components/Placement/WhyChooseSRM";
import CareerPrograms from "../Components/Placement/CareerPrograms";
import Testimonials from "../Components/Placement/Testimonials";
import JourneySection from "../Components/Placement/JourneySection";
import ReachUs from "../Components/Placement/ReachUs";

const Placement = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <WelcomeSection />
      <DeansMessage />
      <Recruiters />
      <WhyChooseSRM />
      <CareerPrograms />
      <Testimonials />
      <JourneySection />
      <ReachUs />
    </>
  );
};

export default Placement;