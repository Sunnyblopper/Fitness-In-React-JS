import React from "react";
import styles from "./fitnessteam.module.css";

const trainers = [
  {
    id: 1,
    img: "image/team-1.jpg",
    name: "Trainer Name",
    profession: "Profession",
  },
  {
    id: 2,
    img: "image/team-2.jpg",
    name: "Trainer Name",
    profession: "Profession",
  },
  {
    id: 3,
    img: "image/team-3.jpg",
    name: "Trainer Name",
    profession: "Profession",
  },
  {
    id: 4,
    img: "image/team-4.jpg",
    name: "Trainer Name",
    profession: "Profession",
  },
];

const FitnessTeam = () => {
  return (
    <div className={`container-fluid ${styles.team} py-5`}>
      <div className="container py-5">
        {/* Text block with slide-in animation */}
        <div
          className={`text-center mx-auto pb-5 ${styles["slide-text"]}`}
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary" style={{ fontFamily: "Teko, sans-serif" }}>
            Our Trainer
          </h4>
          <h1
            className="display-4 mb-4"
            style={{
              fontFamily: "Teko, sans-serif",
              fontWeight: 900,
              color: "#0C1844 ",
            }}
          >
            Meet Our Amazing Team
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "16px",
              color: "#878DB2",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="row gy-5 gy-lg-4 gx-4">
          {trainers.map(({ id, img, name, profession }, index) => (
            <div
              key={id}
              className={`col-md-6 col-lg-3 ${styles["team-item"]}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={styles["team-img"]}>
                <img src={img} className="img-fluid w-100" alt="Trainer" />
                <div className={styles["team-icon"]}>
                  <a href="#" className="btn btn-primary btn-sm-square">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-sm-square">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-sm-square">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-sm-square">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className={styles["team-content"]}>
                <h4 style={{ fontFamily: "Teko, sans-serif" }}>{name}</h4>
                <p
                  className="mb-0"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "16px",
                    color: "#878DB2",
                  }}
                >
                  {profession}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FitnessTeam;
