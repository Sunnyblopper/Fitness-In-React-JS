import React from "react";
import Navbar from "../Navbar/navbar";
import HeaderCarousel from "../HeaderCarousel/headercarousel";
import AboutInHome from "../About-In-Home/aboutinhome";
import FitnessGoal from "../FitnessGoal/fitnessgoal";

const home = () => {
  return (
    <div>
      <Navbar />
      <HeaderCarousel />
      <AboutInHome />
      <FitnessGoal />
    </div>
  );
};

export default home;
