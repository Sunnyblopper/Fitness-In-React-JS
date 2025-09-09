import React from "react";
import styles from "./fitnessgoal.module.css";

const FitnessGoal = () => {
  return (
    <div className={`container-fluid pt-5 ${styles.goal}`}>
      <div className="container pt-5">
        <div className="row g-5">
          {/* Left Content */}
          <div className={`col-lg-6 ${styles.slideInLeft}`}>
            <div className={styles.goalContent}>
              <h4
                className="text-primary"
                style={{
                  fontFamily: "Teko, sans-serif",
                }}
              >
                Fitness Goal
              </h4>
              <h1
                className="display-4 mb-4"
                style={{
                  fontFamily: "Teko, sans-serif",
                  fontWeight: 900,
                  color: "#0C1844",
                }}
              >
                Complete your possibilities, Achieve Your Fitness Goals.
              </h1>

              {/* Goal Item 1 */}
              <div className={`d-flex p-4 ${styles.goalItem}`}>
                <div className="d-flex me-4">
                  <div
                    className=" d-inline p-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#C80036",
                    }}
                  >
                    <img
                      src="./image/icon-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "Teko, sans-serif",
                      color: "#0C1844",
                    }}
                  >
                    Free Fitness Training
                  </h4>
                  <p
                    className="text-white mb-0"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore est harum
                  </p>
                </div>
              </div>

              {/* Goal Item 2 */}
              <div className={`d-flex p-4 mb-4 ${styles.goalItem}`}>
                <div className="d-flex me-4">
                  <div
                    className=" d-inline p-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#C80036",
                    }}
                  >
                    <img
                      src="./image/icon-6.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "Teko, sans-serif",
                      color: "#0C1844",
                    }}
                  >
                    Cardio and Strength
                  </h4>
                  <p
                    className="text-white mb-0"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore est harum
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="ms-1">
                <a href="#" className="btn btn-primary py-3 px-5 ms-2">
                  <span>Read Details</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`col-lg-6 ${styles.slideInRight}`}>
            <div className="h-100">
              <img
                src="./image/fitness-goal-banner.png"
                className="img-fluid h-100"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessGoal;
