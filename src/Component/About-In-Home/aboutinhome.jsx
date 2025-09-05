import React from "react";
import styles from "./aboutinhome.module.css";

const AboutInHome = () => {
  return (
    <div className={`container-fluid pt-5 ${styles.about}`}>
      <div className="container pt-5">
        <div className="row g-5">
          {/* Left Side Content */}
          <div className="col-xl-6 wow">
            <div className={`${styles.aboutContent} h-100`}>
              <h4
                className="text-primary"
                style={{
                  fontFamily: "Teko, sans-serif",
                }}
              >
                About Fitness Center
              </h4>
              <h1
                className="display-4 text-white mb-4"
                style={{
                  fontFamily: "Teko, sans-serif",
                  fontWeight: 900,
                }}
              >
                We are the best at fulfilling your potential and achieving your
                goals.
              </h1>
              <p
                className="mb-4 "
                style={{
                  fontFamily: '"Roboto", sans-serif',
                  fontSize: "1rem",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  color: "#878d97",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                impedit accusantium autem quaerat natus nesciunt veritatis
                fugiat dolor eaque fuga.
              </p>

              {/* Tabs */}
              <div className="pb-4">
                <ul className="nav d-flex mb-2">
                  <li className="nav-item mb-3">
                    <a
                      className={`d-flex py-2 active ${styles.tabLink}`}
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <span style={{ width: "150px" }}>Our Mission</span>
                    </a>
                  </li>
                  <li className="nav-item mb-3">
                    <a
                      className={`d-flex py-2 mx-3 ${styles.tabLink}`}
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <span style={{ width: "150px" }}>Our Vision</span>
                    </a>
                  </li>
                  <li className="nav-item mb-3">
                    <a
                      className={`d-flex py-2 ${styles.tabLink}`}
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <span style={{ width: "150px" }}>Our Goal</span>
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  {/* Tab 1 */}
                  <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center border-top border-bottom py-4">
                          <span className="fas fa-rocket text-white fa-4x me-4"></span>
                          <p
                            className="mb-0"
                            style={{
                              fontFamily: '"Roboto", sans-serif',
                              fontSize: "1rem",
                              fontWeight: "400",
                              lineHeight: "1.5",
                              color: "#878d97",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 2 */}
                  <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center border-top border-bottom py-4">
                          <span className="fas fa-rocket text-white fa-4x me-4"></span>
                          <p
                            className="mb-0"
                            style={{
                              fontFamily: '"Roboto", sans-serif',
                              fontSize: "1rem",
                              fontWeight: "400",
                              lineHeight: "1.5",
                              color: "#878d97",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 3 */}
                  <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center border-top border-bottom py-4">
                          <span className="fas fa-rocket text-white fa-4x me-4"></span>
                          <p
                            className="mb-0"
                            style={{
                              fontFamily: '"Roboto", sans-serif',
                              fontSize: "1rem",
                              fontWeight: "400",
                              lineHeight: "1.5",
                              color: "#878d97",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <a href="#" className="btn btn-primary py-3 px-5">
                    <span>Make Appointment</span>
                  </a>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-shrink-0 ps-4">
                    <a
                      href="#"
                      className="btn btn-light btn-lg-square position-relative wow tada"
                    >
                      <i className="fas fa-phone-alt fa-2x"></i>
                      <div
                        className="position-absolute"
                        style={{ top: "5px", right: "5px" }}
                      >
                        <span>
                          <i className="fa fa-comment-dots text-dark"></i>
                        </span>
                      </div>
                    </a>
                    <div className="d-flex flex-column ms-3">
                      <span
                        style={{
                          fontFamily: '"Roboto", sans-serif',
                          fontSize: "1rem",
                          fontWeight: "400",
                          lineHeight: "1.5",
                          color: "#878d97",
                        }}
                      >
                        Call to Our Experts
                      </span>
                      <a href="tel:+01234567890">
                        <span className="text-white"
                        style={{
                          fontFamily: '"Roboto", sans-serif',
                          fontSize: "1rem",
                          fontWeight: "400",
                          color: "#fff",
                        }}
                        >
                          Free: + 0123 456 7890
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-xl-6 wow fadeInUp">
            <div className={`${styles.aboutImg} h-100`}>
              <div className="d-flex h-100">
                <img
                  src="./image/about-2.png"
                  className="img-fluid w-100"
                  style={{ objectFit: "cover" }}
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInHome;
