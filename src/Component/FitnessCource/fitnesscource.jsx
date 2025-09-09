import React from "react";
import styles from "./fitnesscource.module.css";

const FitnessCourse = () => {
  return (
    <div className={`container-fluid ${styles.courses} overflow-hidden py-5`}>
      <div className="container py-5">
        {/* Section Heading */}
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4
            className="text-primary"
            style={{
              fontFamily: "Teko, sans-serif",
            }}
          >
            Our Courses
          </h4>
          <h1
            className="display-4 text-white mb-4"
            style={{
              fontFamily: "Teko, sans-serif",
              fontWeight: 900,
              color: "white",
            }}
          >
            Out Our Highlights Below
          </h1>
          <p
            className="text-white mb-0"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              color: "white",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="row gy-4 gx-0 justify-content-center">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className={styles["courses-item"]}>
              <div className={`${styles["courses-item-inner"]} p-4`}>
                <div className="d-flex justify-content-between mb-4">
                  <div className={`${styles["courses-icon-img"]} p-3`}>
                    <img src="image/icon-1.png" className="img-fluid" alt="" />
                  </div>
                  <div className="data-info d-flex flex-column">
                    <div className="courses-trainer d-flex align-items-center mb-1">
                      <div
                        className="me-2"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <img
                          src="image/testimonial-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <p
                        className="mb-0"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        Paul Flavius
                      </p>
                    </div>
                    <div className="courses-date">
                      <p
                        className="mb-1"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Date: Saturday
                      </p>
                      <p
                        className="mb-0"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Time: 06.00 - 07.00
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="d-inline-block h4 mb-3"
                  style={{
                    fontFamily: "Teko, sans-serif",
                  }}
                >
                  Gym Fitness Class
                </a>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque tempora illo placeat.
                </p>
                <a href="#" className="btn btn-primary py-2 px-4">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
            <div className={styles["courses-item"]}>
              <div className={`${styles["courses-item-inner"]} p-4`}>
                <div className="d-flex justify-content-between mb-4">
                  <div className={`${styles["courses-icon-img"]} p-3`}>
                    <img src="image/icon-2.png" className="img-fluid" alt="" />
                  </div>
                  <div className="data-info d-flex flex-column">
                    <div className="courses-trainer d-flex align-items-center mb-1">
                      <div
                        className="me-2"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <img
                          src="image/testimonial-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <p
                        className="mb-0"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        Paul Flavius
                      </p>
                    </div>
                    <div className="courses-date">
                      <p
                        className="mb-1"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Date: Saturday
                      </p>
                      <p
                        className="mb-0"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Time: 06.00 - 07.00
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="d-inline-block h4 mb-3"
                  style={{
                    fontFamily: "Teko, sans-serif",
                  }}
                >
                  Power Lifting Class
                </a>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque tempora illo placeat.
                </p>
                <a href="#" className="btn btn-primary py-2 px-4">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
            <div className={styles["courses-item"]}>
              <div className={`${styles["courses-item-inner"]} p-4`}>
                <div className="d-flex justify-content-between mb-4">
                  <div className={`${styles["courses-icon-img"]} p-3`}>
                    <img src="image/icon-3.png" className="img-fluid" alt="" />
                  </div>
                  <div className="data-info d-flex flex-column">
                    <div className="courses-trainer d-flex align-items-center mb-1">
                      <div
                        className="me-2"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <img
                          src="image/testimonial-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <p
                        className="mb-0"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        Paul Flavius
                      </p>
                    </div>
                    <div className="courses-date">
                      <p
                        className="mb-1"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Date: Saturday
                      </p>
                      <p
                        className="mb-0"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Time: 06.00 - 07.00
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="d-inline-block h4 mb-3"
                  style={{
                    fontFamily: "Teko, sans-serif",
                  }}
                >
                  Body Building Class
                </a>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque tempora illo placeat.
                </p>
                <a href="#" className="btn btn-primary py-2 px-4">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className={styles["courses-item"]}>
              <div className={`${styles["courses-item-inner"]} p-4`}>
                <div className="d-flex justify-content-between mb-4">
                  <div className={`${styles["courses-icon-img"]} p-3`}>
                    <img src="image/icon-4.png" className="img-fluid" alt="" />
                  </div>
                  <div className="data-info d-flex flex-column">
                    <div className="courses-trainer d-flex align-items-center mb-1">
                      <div
                        className="me-2"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <img
                          src="image/testimonial-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <p
                        className="mb-0"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        Paul Flavius
                      </p>
                    </div>
                    <div className="courses-date">
                      <p
                        className="mb-1"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Date: Saturday
                      </p>
                      <p
                        className="mb-0"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Time: 06.00 - 07.00
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="d-inline-block h4 mb-3"
                  style={{
                    fontFamily: "Teko, sans-serif",
                  }}
                >
                  Aerobics & Skipping Class
                </a>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque tempora illo placeat.
                </p>
                <a href="#" className="btn btn-primary py-2 px-4">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
            <div className={styles["courses-item"]}>
              <div className={`${styles["courses-item-inner"]} p-4`}>
                <div className="d-flex justify-content-between mb-4">
                  <div className={`${styles["courses-icon-img"]} p-3`}>
                    <img src="image/icon-5.png" className="img-fluid" alt="" />
                  </div>
                  <div className="data-info d-flex flex-column">
                    <div className="courses-trainer d-flex align-items-center mb-1">
                      <div
                        className="me-2"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <img
                          src="image/testimonial-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <p
                        className="mb-0"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        Paul Flavius
                      </p>
                    </div>
                    <div className="courses-date">
                      <p
                        className="mb-1"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Date: Saturday
                      </p>
                      <p
                        className="mb-0"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Time: 06.00 - 07.00
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="d-inline-block h4 mb-3"
                  style={{
                    fontFamily: "Teko, sans-serif",
                  }}
                >
                  Boxing Class
                </a>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque tempora illo placeat.
                </p>
                <a href="#" className="btn btn-primary py-2 px-4">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
            <div className={styles["courses-item"]}>
              <div className={`${styles["courses-item-inner"]} p-4`}>
                <div className="d-flex justify-content-between mb-4">
                  <div className={`${styles["courses-icon-img"]} p-3`}>
                    <img src="image/icon-6.png" className="img-fluid" alt="" />
                  </div>
                  <div className="data-info d-flex flex-column">
                    <div className="courses-trainer d-flex align-items-center mb-1">
                      <div
                        className="me-2"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <img
                          src="image/testimonial-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <p
                        className="mb-0"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        Paul Flavius
                      </p>
                    </div>
                    <div className="courses-date">
                      <p
                        className="mb-1"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Date: Saturday
                      </p>
                      <p
                        className="mb-0"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "13px",
                        }}
                      >
                        Time: 06.00 - 07.00
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="d-inline-block h4 mb-3"
                  style={{
                    fontFamily: "Teko, sans-serif",
                  }}
                >
                  Cardio Class
                </a>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque tempora illo placeat.
                </p>
                <a href="#" className="btn btn-primary py-2 px-4">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>

          {/* More Courses Button */}
          <div
            className="col-12 text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <a href="#" className="btn btn-primary py-3 px-5">
              <span>More Courses</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessCourse;
