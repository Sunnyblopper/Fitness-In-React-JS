import React from "react";
import Navbar from "../Navbar/navbar";
import HeaderCarousel from "../HeaderCarousel/headercarousel";
import AboutInHome from "../About-In-Home/aboutinhome";
import FitnessGoal from "../FitnessGoal/fitnessgoal";
import FitnessFeature from "../FitnessFeature/fitnessfeature";
import FitnessCourse from "../FitnessCource/fitnesscource";
import FitnessBlog from "../FitnessBlog/fitnessblog";
import FitnessExplore from "../FitnessExplore/fitnessexplore";
import FitnessTeam from "../FitnessTeam/fitnessteam";

const home = () => {
  return (
    <div>
      {/* <Navbar />
      <HeaderCarousel />
      <AboutInHome />
      <FitnessGoal />
      <FitnessFeature />
      <FitnessCourse />
      <FitnessBlog />
      <FitnessExplore /> */}
      <FitnessTeam />
    </div>
  );
};

export default home;
