import React from "react";
import styles from "./fitnessfooter.module.css";
import CopyrightFooter from "../CopyrightFooter/copyrightfooter";

const FitnessFooter = () => {
    return (
        <>
            <div className={`container-fluid py-5 wow fadeIn ${styles.footer}`} data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5 mb-5 align-items-center">
                        <div className="col-lg-7">
                            <div className="position-relative d-flex">
                                <input
                                    className="form-control w-100 py-3 pe-5"
                                    type="text"
                                    placeholder="Email address to Subscribe"
                                    style={{ borderRadius: 0, transform: "skew(18deg)" }}
                                />
                                <button type="button" className="btn btn-primary px-4 ms-3" style={{ transform: "skew(18deg)" }}>
                                    <span style={{ transform: "skew(5deg)" }}>Subscribe</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                                <a className="btn btn-primary btn-md-square me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-primary btn-md-square me-3" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-primary btn-md-square me-3" href="#"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-primary btn-md-square me-0" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className={styles.footerItem}>
                                <h4 className="text-white mb-4" style={{ fontFamily: "Teko, sans-serif" }}>
                                    <i className="fas fa-hand-rock text-primary me-2"></i> Fitness
                                </h4>
                                <p className="mb-0" style={{ fontFamily: "Roboto, sans-serif", color: "#878d97", fontSize: "16px" }}>
                                    Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className={styles.footerItem}>
                                <h4 className="text-white mb-4" style={{ fontFamily: "Teko, sans-serif" }}>Quick Links</h4>
                                <a href="#"> Home</a>
                                <a href="#"> About us</a>
                                <a href="#"> Our Courses</a>
                                <a href="#"> Our Features</a>
                                <a href="#"> Our Blog & news</a>
                                <a href="#"> Testimonial</a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className={styles.footerItem}>
                                <h4 className="text-white mb-4" style={{ fontFamily: "Teko, sans-serif" }}>Contact Info</h4>
                                <div className="row g-2">
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <i className="fas fa-map-marker-alt text-primary me-2"></i>
                                            <div>
                                                <h5 className="text-white mb-2" style={{ fontFamily: "Teko, sans-serif" }}>Address</h5>
                                                <p className="mb-0" style={{ fontFamily: "Roboto, sans-serif", color: "#878d97", fontSize: "16px" }}>123 street New York</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <i className="fas fa-envelope text-primary me-2"></i>
                                            <div>
                                                <h5 className="text-white mb-2" style={{ fontFamily: "Teko, sans-serif" }}>Mail Us</h5>
                                                <p className="mb-0" style={{ fontFamily: "Roboto, sans-serif", color: "#878d97", fontSize: "16px" }}>info@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <i className="fa fa-phone-alt text-primary me-2"></i>
                                            <div>
                                                <h5 className="text-white mb-2" style={{ fontFamily: "Teko, sans-serif" }}>Telephone</h5>
                                                <p className="mb-0" style={{ fontFamily: "Roboto, sans-serif", color: "#878d97", fontSize: "16px" }}>(+012) 3456 7890 123</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className={styles.footerItem}>
                                <h4 className="text-white mb-4" style={{ fontFamily: "Teko, sans-serif" }}>Recent Work</h4>
                                <div className="row g-2">
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <div className="col-3" key={i}>
                                            <div className={styles.footerItemImg}>
                                                <a href="#"><img src={`image/work-${i + 1}.jpg`} className="img-fluid" alt="" /></a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CopyrightFooter />
        </>
    );
};

export default FitnessFooter;
