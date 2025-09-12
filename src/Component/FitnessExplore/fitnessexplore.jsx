import React from "react";
import styles from "./fitnessexplore.module.css";

const FitnessExplore = () => {
  return (
    <div className={`container-fluid ${styles.explore} py-5 wow zoomIn`} data-wow-delay="0.2s">
      <div className="container py-5 text-center">
        <h1 className="display-1 text-white mb-0" style={{fontWeight: 800}}>Explore Fitness Center</h1>
        <a
          className="btn btn-primary py-3 px-4 px-md-5 me-2"
          href="https://www.youtube.com/embed/DWRcNpR6Kdc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-play-circle me-2"></i>
          <span>Watch Video</span>
        </a>
      </div>
    </div>
  );
};

export default FitnessExplore;
