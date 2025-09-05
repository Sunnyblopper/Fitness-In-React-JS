import React from "react";
import styles from "./headercarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "bootstrap-icons/font/bootstrap-icons.css";

const HeaderCarousel = () => {
  return (
    <div className={`${styles.headerCarousel} overflow-hidden bg-dark`}>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="mySwiper"
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className={`${styles.headerCarouselItem} ${styles.heroSection}`}>
            <div className={styles.heroBgHalf1}></div>
            <div className={styles.carouselCaption}>
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7">
                    {/* Custom animation class */}
                    <div
                      className={`text-sm-center text-md-start ${styles.slideInLeft}`}
                    >
                      <h4
                        className="text-primary text-uppercase fw-bold mb-4"
                        style={{
                          fontFamily: "Teko, sans-serif",
                          fontWeight: 900,
                        }}
                      >
                        Welcome to our fitness Center
                      </h4>
                      <h1
                        className="display-1 text-white mb-4"
                        style={{
                          fontFamily: "Teko, sans-serif",
                          fontWeight: 900,
                        }}
                      >
                        The best gym center is now in your city
                      </h1>
                      <p
                        className="mb-5 fs-5"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontWeight: 400,
                          color: "white",
                        }}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy...
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                        <a
                          className="btn btn-dark py-3 px-4 px-md-5 me-2"
                          href="#"
                          style={{ borderRadius: "0" }}
                        >
                          <i className="fas fa-play-circle me-2"></i>
                          <span>Watch Video</span>
                        </a>
                        <a
                          className="btn btn-primary py-3 px-4 px-md-5 ms-2"
                          href="#"
                        >
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className={`${styles.headerCarouselItem} ${styles.heroSection}`}>
            <div className={styles.heroBgHalf2}></div>
            <div className={styles.carouselCaption}>
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7">
                    {/* 👇 Custom animation class */}
                    <div
                      className={`text-sm-center text-md-start ${styles.slideInLeft}`}
                    >
                      <h4
                        className="text-primary text-uppercase fw-bold mb-4"
                        style={{
                          fontFamily: "Teko, sans-serif",
                          fontWeight: 900,
                        }}
                      >
                        Welcome to our fitness Center
                      </h4>
                      <h1
                        className="display-2 text-white mb-4"
                        style={{
                          fontFamily: "Teko, sans-serif",
                          fontWeight: 900,
                        }}
                      >
                        Stay healthy by exercising at the best gym center
                      </h1>
                      <p
                        className="mb-5 fs-5"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          fontWeight: 400,
                          color: "white",
                        }}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy...
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                        <a
                          className="btn btn-dark py-3 px-4 px-md-5 me-2"
                          href="#"
                          style={{ borderRadius: "0" }}
                        >
                          <i className="fas fa-play-circle me-2"></i>
                          <span>Watch Video</span>
                        </a>
                        <a
                          className="btn btn-primary py-3 px-4 px-md-5 ms-2"
                          href="#"
                        >
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className={styles.swiperButtonPrev}>
        <i className="bi bi-arrow-right"></i>
      </div>
      <div className={styles.swiperButtonNext}>
        <i className="bi bi-arrow-left"></i>
      </div>
    </div>
  );
};

export default HeaderCarousel;
