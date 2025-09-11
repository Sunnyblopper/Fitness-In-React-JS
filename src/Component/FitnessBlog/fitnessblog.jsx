import React from "react";
import styles from "./fitnessblog.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";

const blogPosts = [
  {
    id: 1,
    title: "Full Body Home Workout",
    image: "/image/feature-4.jpg",
    author: "Martin.C",
    date: "30 Dec 2025",
    excerpt:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
  {
    id: 2,
    title: "31-Day Fitness Calendar",
    image: "/image/feature-3.jpg",
    author: "Martin.C",
    date: "30 Dec 2025",
    excerpt:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
  {
    id: 3,
    title: "At Home Ab Workout",
    image: "/image/feature-2.jpg",
    author: "Martin.C",
    date: "30 Dec 2025",
    excerpt:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
  {
    id: 4,
    title: "Full Body Home Workout",
    image: "/image/feature-1.jpg",
    author: "Martin.C",
    date: "30 Dec 2025",
    excerpt:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
];

const FitnessBlog = () => {
  return (
    <div className={`container-fluid py-5 ${styles.blog}`}>
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
          <h4
            className="text-primary"
            style={{ fontFamily: "Teko, sans-serif" }}
          >
            Our Blogs
          </h4>
          <h1
            className="display-4 mb-4"
            style={{
              fontFamily: "Teko, sans-serif",
              fontWeight: 900,
              color: "#0C1844",
            }}
          >
            Check out our latest stories
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              color: "#878d97",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        <Swiper
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className={styles.blogCarousel}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className={styles.blogItem}>
                <div className={`${styles.blogImg} p-4 pb-0`}>
                  <a href="#">
                    <img
                      src={post.image}
                      className="img-fluid w-100"
                      alt={post.title}
                    />
                  </a>
                </div>
                <div className={`${styles.blogContent} p-4`}>
                  <div
                    className={`${styles.blogComment} d-flex justify-content-between py-2 px-3 mb-4`}
                  >
                    <div
                      className="small"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                        color: "#878d97",
                      }}
                    >
                      <span className="fa fa-user text-primary me-1"></span>{" "}
                      {post.author}
                    </div>
                    <div
                      className="small"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                        color: "#878d97",
                      }}
                    >
                      <span className="fa fa-calendar text-primary me-2"></span>{" "}
                      {post.date}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="h4 d-inline-block mb-3"
                    style={{ fontFamily: "Teko, sans-serif" }}
                  >
                    {post.title}
                  </a>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 400,
                      color: "#878d97",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className={` ${styles.btnBackground} btn btn-dark py-2 px-3 ms-2`}
                    style={{ borderRadius: "0.2px", minWidth: "152px", fontWeight: 600 }}
                  >
                    <span
                      className="me-2"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      Read More
                    </span>{" "}
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FitnessBlog;
