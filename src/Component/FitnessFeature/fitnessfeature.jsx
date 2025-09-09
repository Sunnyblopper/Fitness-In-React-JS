import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles

import styles from "./fitnessfeature.module.css";

const features = [
  {
    id: 1,
    img: "image/feature-1.jpg",
    title: "Work Your Butt Off",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum.",
  },
  {
    id: 2,
    img: "image/feature-2.jpg",
    title: "Get In The groove",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum.",
  },
  {
    id: 3,
    img: "image/feature-3.jpg",
    title: "It's more Than A Game",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum.",
  },
  {
    id: 4,
    img: "image/feature-4.jpg",
    title: "Get Fit Don't Quit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum.",
  },
];

const FitnessFeature = () => {
  return (
    <div
      className={`container-fluid py-5 ${styles.feature}`}
      style={{
        backgroundColor: "rgb(255, 245, 225)",
      }}
    >
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
          <h4
            className="text-primary"
            style={{ fontFamily: "Teko, sans-serif" }}
          >
            Why choose us?
          </h4>
          <h1
            className="display-4 mb-4"
            style={{
              fontFamily: "Teko, sans-serif",
              fontWeight: 900,
              color: "#0C1844",
            }}
          >
            Out Our Highlights Below
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              color: "#878d97",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        {/* Swiper Slider */}
        <div style={{ padding: "0 60px" }}>
          <Swiper
            spaceBetween={25}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className={styles.featureCarousel}
            watchOverflow={true} // Ensures no slides overflow if fewer than 3 items
          >
            {features.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.featureItem}>
                  <div className={styles.featureImg}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className={`${styles.featureContent} p-4`}>
                    <h4
                      className="mb-3"
                      style={{ fontFamily: "Teko, sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="mb-4"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                        color: "#878d97",
                      }}
                    >
                      {item.desc}
                    </p>
                    <a href="#" className="btn btn-primary py-2 px-4">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.featureShaps}></div>
      </div>
    </div>
  );
};

export default FitnessFeature;
