import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./fitnessterminal.module.css";

const testimonials = [
  {
    img: "image/testimonial-1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?",
    name: "Client Name",
    profession: "Profession",
    stars: 4,
  },
  {
    img: "image/testimonial-2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?",
    name: "Client Name",
    profession: "Profession",
    stars: 4,
  },
  {
    img: "image/testimonial-3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?",
    name: "Client Name",
    profession: "Profession",
    stars: 4,
  },
];

const FitnessTerminal = () => {
  return (
    <div
      className={`${styles.testimonial} container-fluid py-5`}
      style={{ marginBottom: "90px" }}
    >
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary" style={{fontFamily: "Teko, sans-serif",}}>Testimonial</h4>
          <h1 className="display-4 text-white" style={{fontFamily: "Teko, sans-serif", fontWeight: 900}}>
            What Our Customers Are Saying
          </h1>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          className={styles.testimonialCarousel}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div
                className={`${styles.testimonialItem} mx-auto`}
                style={{ maxWidth: "900px" }}
              >
                <span
                  className={`fa fa-quote-left fa-4x ${styles.quoteIcon}`}
                ></span>
                <div className={`${styles.testimonialImg} mb-4`}>
                  <img src={t.img} className="img-fluid" alt={t.name} />
                </div>
                <p className="fs-4 text-white mb-4" style={{fontFamily: "Roboto, sans-serif",}}>{t.text}</p>
                <div>
                  <h4 className="text-white" style={{fontFamily: "Teko, sans-serif",}}>{t.name}</h4>
                  <p className="m-0 pb-3" style={{fontFamily: "Roboto, sans-serif", color: "#878DB2",}}>{t.profession}</p>
                  <div className="d-flex justify-content-center starRating" style={{fontFamily: "Teko, sans-serif"}} >
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${
                          i < t.stars ? "text-primary" : "text-white"
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FitnessTerminal;
